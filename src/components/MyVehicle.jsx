import { Box, Grid, Select, Flex, Spacer, useColorModeValue, Heading, Center, Spinner, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import CaptionCarousel from './CaptionCarousel';
import Footer from './Footer';
import axios from 'axios';
import MyVehicleForm from './MyVehicleForm';
import UserDetails from './UserDetails';
import { GameStateContext } from "./context/Context";
import { useContext } from 'react'

const MyVehicle = () => {

    const [data, setData] = useState([])

    const {email} = useContext(GameStateContext)

    useEffect(()=>{
        getData()
    },[])

    const getData = async() => {
        const res = await axios.get("https://2bbe-103-148-62-156.in.ngrok.io/Myvechile/")
        .then(Response=>console.log("Response is",Response.data))
    }

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
      setLoading(true) // After entering the application loading should be true
          setTimeout(()=>{ 
              setLoading(false) // After 4 seconds loading should be false
      },1000) // Loading indicator will be appeared in UI for 4 seconds.
    },[])

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
        <Box  bg={useColorModeValue('gray.200', 'gray.800')}>
            <Box w="100%" >
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
                templateColumns={{base:'repeat(1, 1fr)',
                md:'repeat(2, 1fr)',
                lg:'repeat(2, 1fr)'
                }} gap={7}>
                <Box borderRadius={10} w='100%' h='500'>

                    {/* <Text textAlign="center">
                        ─────────────────────────────────────────────────
                    </Text> */}
                    {/* <Image w="100%" h={[500, 500, 500]} src="https://thumbs.dreamstime.com/b/worker-uniform-disassembles-vehicle-engine-car-service-station-automobile-checking-inspection-professional-diagnostics-173424972.jpg"></Image> */}
                        {/* <Select mt="50px" bg="blue" w={[390, 400, 600]} placeholder='Select option'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select> */}
                        <UserDetails/>
                </Box>
               
                
                <Box display="flex"  borderRadius={10} w='100%' h='500'>
                    {/* <Image h={[500, 500, 500]} src="https://thumbs.dreamstime.com/b/auto-car-repair-service-center-mechanic-examining-car-suspension-auto-car-repair-service-center-mechanic-examining-car-suspension-166202482.jpg"></Image> */}
                    <Box w="50%">
                        <Image src="https://imgd.aeplcdn.com/600x337/n/cw/ec/124027/urban-cruiser-hyryder-exterior-right-front-three-quarter-3.jpeg?isig=0&q=75"></Image>
                        <Heading padding={2} size="lg">
                            Barand : Maruti Suzuki
                            <br />
                            Model : Swift Dezire
                        </Heading>
                    </Box>
                    <Box w="50%" ></Box>
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
