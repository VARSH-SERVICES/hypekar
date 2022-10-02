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
               
                {/* <Box display="flex"  borderRadius={10} w='100%' h='500'>
                        {
                        userCarDetails.length > 0 ?
                       
                        userCarDetails.map((e)=>(
                            <>
                           
                            
                             <Box bg='RGBA(0, 0, 0, 0.06)' w="100%">
                                <Heading color="green" textAlign="center" size="md">Cars you have uploaded</Heading>
                                <br />
                                <Heading color="tomato" textAlign="center" size="md">Car Brand</Heading>
                                <Heading textAlign="center" size="md">{e.brand}</Heading>
                                <br />
                                <Heading color="tomato" textAlign="center" size="md">Car Model</Heading>
                                <Heading textAlign="center" size="md" >{e.model_Name}</Heading>
                                <br />
                                <Heading color="tomato" textAlign="center" size="md">Fuel Type</Heading>
                                <Heading textAlign="center" size="md">{e.fuel_Type}</Heading>
                                <br />
                                <Heading color="tomato" textAlign="center" size="md">Vehicle Number</Heading>
                                <Heading textAlign="center" size="md">{e.vehicle_number}</Heading>
                                <br />
                                <Heading color="tomato" textAlign="center" size="md">Year of model</Heading>
                                <Heading textAlign="center" size="md">{e.year_Of_Model}</Heading>
                             </Box>
                             
                             </>
                        ))
                        :
                        <Heading textAlign="right">Please add any vehicle</Heading>
                        
                    }
                </Box> */}

               
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
                    userCarDetails.map((e)=>(
                    <Tr>
                        <Td>{e.brand}</Td>
                        <Td>{e.model_Name}</Td>
                        <Td>{e.fuel_Type}</Td>
                        <Td>{e.vehicle_number}</Td>
                        <Td>{e.year_Of_Model}</Td>
                    </Tr>
                    ))
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
                
            </Box>
            }
            </Box>
    );
}

export default MyVehicle;
