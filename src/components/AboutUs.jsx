import { Heading, Center, Spinner, Box, useColorModeValue, Text, Flex, Image, GridItem, Button, Grid } from '@chakra-ui/react';
import React, {useState, useEffect} from 'react';
import Footer from './Footer'; //I imported footer component here
import amogh from "../file/images/amogh.png" //I imported the images from the file folder
import raashi from "../file/images/raashi.jpeg"
const AboutUs = () => {

    const [loading, setLoading] = useState(false); // this is the loading part.

    useEffect(()=>{
      setLoading(true) // After entering the application loading should be true
          setTimeout(()=>{ 
              setLoading(false) // After 4 seconds loading should be false
      },1000) // Loading indicator will be appeared in UI for 4 seconds.
    },[])

    return (
        <Box >
            {/* below I am doing conditional rendering, if loading is true or false. on this basis 
            I am showing the component. */}
             {
            loading == true  ? 
                <Center mt="200px"> 
                <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
                />
                </Center>
            :
            // Below whole code is designing and about us page data
            <Box>
                <br />
                <Heading fontFamily={"AUDIOWIDE"} textAlign={"center"}>ABOUT US</Heading>
                <br />
                <Center>
                    <Box w="70%">
                        <Text fontFamily={"Euphemia UCAS"} fontSize={"larger"}>Hypekar is an initiative taken to organise
                        the automobile industry and provide a
                        unique vehicle ownership experience.
                        Hypekar aims at providing one stop
                        solution to all issues relating automobile at your door-step.</Text>
                    </Box>
                </Center>
                <br />
                <Center>
                <Grid w="80%" templateColumns={{base:'repeat(1, 1fr)',
                md:'repeat(2, 1fr)',
                lg:'repeat(2, 1fr)'
                }} gap={7} justifyContent={"space-around"}>

                    <Box  w="100%" padding="5">
                    <Image borderRadius={"10"} h="390" src={amogh}></Image>
                    </Box>

                    <Box padding="5">
                        <Heading fontFamily={"AUDIOWIDE"}>AMOGH UNIYAL</Heading>
                        <Text fontFamily={"AUDIOWIDE"} fontSize={"2xl"}>CEO & FOUNDER</Text>
                        <Text  fontFamily={"Euphemia UCAS"}  fontSize={"larger"} >
                            {/* bio of founder here */}
                        </Text> 
                    </Box>

                    <Box w="100%" padding="5">
                        <Image borderRadius={"10"}  h="390"  src={raashi}></Image>
                    </Box>

                    <Box padding="5">
                        <Heading fontFamily={"AUDIOWIDE"}>RAASHI TANEJA</Heading>
                        <Text fontFamily={"AUDIOWIDE"} fontSize={"2xl"}>Director, CMO</Text>
                        <Text fontFamily={"Euphemia UCAS"}  fontSize={"larger"}>
                        {/* bio of founder here */}
                        </Text>
                    </Box>
                    
                  
                </Grid>
                </Center>
                <br />
                {/* <Heading textAlign={"center"} fontFamily={"AUDIOWIDE"}>MEET OUR EMPLOYEES</Heading> */}
                <br />
                <Center>
                {/* <Grid w="90%" templateColumns={{base:'repeat(1, 1fr)',
                    md:'repeat(2, 1fr)',
                    lg:'repeat(3, 1fr)'
                    }} gap={6} >
                   
                    <GridItem boxShadow='2xl' p='6' rounded='md' bg='white' _hover={{
                    transform: 'scale(1.2)',
                    }} transform="scale(1.0)" transition="0.2s ease-in-out"  w='100%' padding="5" h='340'  >
                   
                        <Flex  justifyContent={"space-around"}>
                        <Image  mt="20px" w="35%"  src="https://bit.ly/dan-abramov"></Image>

                        </Flex>
                        <br />
                        <Heading fontFamily={"AUDIOWIDE"} size="md" textAlign={"center"} color="RGBA(0, 0, 0, 0.64)">VEDANT</Heading>
                        <Text fontFamily={"Euphemia UCAS"} textAlign={"center"}  fontSize="-moz-initial">Manager, HypeKar
                        <br />
                        UTTARAPRADESH, INDIA
                        </Text>
                    </GridItem>
                    <GridItem boxShadow='2xl' p='6' rounded='md' bg='white' _hover={{
                    transform: 'scale(1.2)',
                  }} transform="scale(1.0)" transition="0.2s ease-in-out"  w='100%' padding="5" h='340'  >
                        <Flex  justifyContent={"space-around"}>
                        <Image  mt="20px" w="35%"  src="https://bit.ly/dan-abramov"></Image>
                        </Flex>

                        <br />

                        <Heading size="md" textAlign={"center"} color="RGBA(0, 0, 0, 0.64)" fontFamily={"AUDIOWIDE"}>ARUSH</Heading>
                        <Text fontFamily={"Euphemia UCAS"} textAlign={"center"} fontSize="-moz-initial">Visiting Officer, HypeKar
                        <br />
                        DELHI, INDIA
                        </Text>
                    </GridItem>
                    
                    <GridItem boxShadow='2xl' p='6' rounded='md' bg='white' _hover={{
                    transform: 'scale(1.2)',
                    }} transform="scale(1.0)" transition="0.2s ease-in-out"  w='100%' padding="5" h='340'  >
                        <Flex  justifyContent={"space-around"}>
                        <Image mt="20px" w="35%"  src="https://bit.ly/dan-abramov"></Image>
                        </Flex>
                        <br />
                        <Heading size="md" textAlign={"center"} color="RGBA(0, 0, 0, 0.64)" fontFamily={"AUDIOWIDE"}>DARSH</Heading>
                        <Text fontFamily={"Euphemia UCAS"} textAlign={"center"} fontSize="-moz-initial">Customer Support, HypeKar
                        <br />
                        <Text fontFamily={"AUDIOWIDE"}>BIHAR, INDIA</Text> 
                        </Text>
                    </GridItem>
                    </Grid> */}
                    </Center>
                    <br />
                    <Footer/>
            </Box>
           
            }
        </Box>
    );
}

export default AboutUs;

