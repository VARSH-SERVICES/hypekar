import { Box, Grid, Select, Flex, Spacer, useColorModeValue,
    GridItem, Heading, Center, Spinner, SimpleGrid ,  Image, Button, Text, VStack, StackDivider, Stack  } from '@chakra-ui/react';
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

    const {email} = useContext(GameStateContext)

    useEffect(()=>{
        getData()
    },[])

    const getData = async() => {
        const res = await axios.get(`https://c56d-103-148-62-156.in.ngrok.io/mycardata?email=${email}`)
        setData(res.data)
    }

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
      setLoading(true) // After entering the application loading should be true
          setTimeout(()=>{ 
              setLoading(false) // After 4 seconds loading should be false
      },1000) // Loading indicator will be appeared in UI for 4 seconds.
    },[])

    

    console.log("logged in data is", data)
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
                }} gap={7}>
                <Box borderRadius={10} w='100%' h='500'>
                    <UserDetails/>
                </Box>
               
                <Box display="flex"  borderRadius={10} w='100%' h='500'>
                    {/* <Image h={[500, 500, 500]} src="https://thumbs.dreamstime.com/b/auto-car-repair-service-center-mechanic-examining-car-suspension-auto-car-repair-service-center-mechanic-examining-car-suspension-166202482.jpg"></Image> */}
                    
                    
                    {
                        
                        data.length > 0 ?
                       
                        data.map((e)=>(
                            <>
                            {/* <Grid  templateColumns={{base:'repeat(1, 1fr)',
                                md:'repeat(1, 1fr)',
                                lg:'repeat(1, 1fr)'
                                }} gap={6}>

                    
                                <GridItem w="100%" bg='RGBA(0, 0, 0, 0.06)'>
                                <Heading size="md" textAlign={"center"} color="RGBA(0, 0, 0, 0.64)">{e.brand}</Heading>
                                    <Flex  justifyContent={"space-around"}>
                                    <Image 
                                    mt="20px" w="35%"  src="https://cdn-icons-png.flaticon.com/512/4669/4669436.png"></Image>
                                
                                    </Flex>
                                    
                                </GridItem>
                             </Grid> */}
                            
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
