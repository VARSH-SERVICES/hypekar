import { Box, Grid, Select, Flex, Spacer, useColorModeValue,
    GridItem, Heading, Center,
    Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer, Spinner, SimpleGrid ,  Image, Button, Text, VStack, StackDivider, Stack  } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import CaptionCarousel from './CaptionCarousel';
import Footer from './Footer';
import axios from 'axios';
import MyVehicleForm from './MyVehicleForm';
import UserDetails from './UserDetails';
import { GameStateContext } from "./context/Context";
import { Link } from 'react-router-dom';
import { useContext } from 'react'

const MyVehicle = () => {

    const [data, setData] = useState([])

    const {email, userDetails, userCarDetails, setUserCarDetails} = useContext(GameStateContext)

    useEffect(()=>{
        getData()
    },[])

    const getData = async() => {
        const res = await axios.get(`https://apihypekar.herokuapp.com/mycardata?email=${email}`)
        //setData(res.data)
        setUserCarDetails(res.data)
    }

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
      setLoading(true) // After entering the application loading should be true
          setTimeout(()=>{ 
              setLoading(false) // After 4 seconds loading should be false
      },1000) // Loading indicator will be appeared in UI for 4 seconds.
    },[])

    

    console.log("logged in data is", userCarDetails)
    console.log("logged in email is", email)
    return (
        <Box>
         {
            loading == true  ? 
                <Center mt="200px">
                <Spinner
                thickness='4px'
                speed='0.65s'
                
                color='blue.500'
                size='xl'
                />
                </Center>
            :
        <Box  >
            <Box w="100%"  >
                <br />
                <Heading fontFamily='Montserrat' textAlign="center">MY VEHICLE</Heading>
            </Box>
            {/* <Box w="100%" border="1px solid blue">
                <Flex h="600px" justifyContent="space-around">
                    <Box  w="500px" border="1px solid red"></Box>
                    <Box w="500px" border="1px solid red"></Box>
                </Flex>
            </Box> */}
            <Grid mt="30px"
                
                overflow={"scroll"}
                templateColumns={{base:'repeat(1, 1fr)',
                md:'repeat(2, 1fr)',
                lg:'repeat(2, 1fr)'
                }}bg='RGBA(0, 0, 0, 0.06)' justifyContent="space-between">
                <Box   borderRadius={10} w='90%' h='500'>
                    <UserDetails/>
                </Box>
               
               

               
                <Box w='90%' >
                <TableContainer  >
                <Table variant='simple'>
                    <TableCaption>Your vehicles in the HypeKar</TableCaption>
                    <Thead>
                    <Tr>
                        <Th fontWeight="black">Car Brand</Th>
                        <Th>Car Model</Th>
                        <Th>Fuel Type</Th>
                        <Th>Vehicle Number</Th>
                        <Th>Year Of</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    {
                    userCarDetails.length > 0 ?
                    userCarDetails.map((e)=>(
                    <Tr>
                        <Td>{e.brand}</Td>
                        <Td>{e.model_Name}</Td>
                        <Td>{e.fuel_Type}</Td>
                        <Td>{e.vehicle_number}</Td>
                        <Td>{e.year_Of_Model}</Td>
                    </Tr>
                    ))
                    :
                    console.log(null)
                    }   
                    </Tbody>
                   
                </Table>
                </TableContainer>
                </Box>        
                
                </Grid>

                <br />
                <Heading textAlign="center">ADD ANOTHER VEHICLE</Heading>
                <br />
                <MyVehicleForm/>

                <Box w="100%" mt="50px">
                    <CaptionCarousel/>
                </Box>
            {/* <Footer/> */}
                <Footer/>
            </Box>
            }
            </Box>
    );
}

export default MyVehicle;
