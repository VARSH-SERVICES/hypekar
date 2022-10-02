import { Heading, Center, Spinner, Box, useColorModeValue, Text, Flex, Image, GridItem, Button, Grid } from '@chakra-ui/react';
import React, {useState, useEffect} from 'react';

const AboutUs = () => {

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
      setLoading(true) // After entering the application loading should be true
          setTimeout(()=>{ 
              setLoading(false) // After 4 seconds loading should be false
      },1000) // Loading indicator will be appeared in UI for 4 seconds.
    },[])

    return (
        <Box >
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
            <Box>

                <Heading fontFamily={"sans-serif"} textAlign={"center"}>ABOUT US</Heading>
                <br />
                <Center>
                    <Box w="70%">
                        <Text  fontSize={"larger"}>A motor vehicle service or tune-up is a series of maintenance procedures 
                        carried out at a set time interval or after the vehicle has traveled a certain distance. 
                        The service intervals are specified by the vehicle manufacturer in a service schedule and 
                        some modern cars display the due date for the next service electronically on the instrument 
                        panel. A tune-up should not be confused with engine tuning, which is the modifying of an 
                        engine to perform better than the original specification, rather than using maintenance to 
                        keep the engine running as it should.</Text>
                    </Box>
                </Center>
                <br />
                <Center>
                <Grid w="90%" templateColumns={{base:'repeat(1, 1fr)',
                md:'repeat(2, 1fr)',
                lg:'repeat(2, 1fr)'
                }} gap={7} justifyContent={"space-around"}>
                    <Box padding="5">
                    <Text fontSize={"larger"}>
                        <Heading fontFamily={"sans-serif"}>AMOGH VINIYAL</Heading>
                        <Text fontSize={"2xl"}>CEO, HypeKar</Text>
                        A motor vehicle service or tune-up is a series of maintenance procedures 
                        carried out at a set time interval or after the vehicle has traveled a certain distance. 
                        The service intervals are specified by the vehicle manufacturer in a service schedule and 
                        some modern cars display the due date for the next service electronically on the instrument 
                        panel.
                    </Text>
                    </Box>
                    <Box w="100%" padding="5">
                    <Image w="100%" h="390"  src="https://bit.ly/dan-abramov"></Image>
                    </Box>
                    <Box padding="5">
                    <Text fontSize={"larger"}>
                        <Heading fontFamily={"sans-serif"}>RAASHI TANEJA</Heading>
                        <Text fontSize={"2xl"}>CTO, HypeKar</Text>
                        A motor vehicle service or tune-up is a series of maintenance procedures 
                        carried out at a set time interval or after the vehicle has traveled a certain distance. 
                        The service intervals are specified by the vehicle manufacturer in a service schedule and 
                        some modern cars display the due date for the next service electronically on the instrument 
                        panel.
                    </Text>
                    </Box>
                    <Box w="100%" padding="5">
                    <Image w="100%" h="390"  src="https://bit.ly/dan-abramov"></Image>
                    </Box>
                    <Box padding="5">
                    <Text fontSize={"larger"}>
                        <Heading fontFamily={"sans-serif"}>OUR HONORABLE MANAGER</Heading>
                        <Text fontSize={"2xl"}>DIRECTOR, HypeKar</Text>
                        A motor vehicle service or tune-up is a series of maintenance procedures 
                        carried out at a set time interval or after the vehicle has traveled a certain distance. 
                        The service intervals are specified by the vehicle manufacturer in a service schedule and 
                        some modern cars display the due date for the next service electronically on the instrument 
                        panel.
                    </Text>
                    </Box>
                    <Box w="100%" padding="5">
                    <Image w="100%" h="390"  src="https://bit.ly/dan-abramov"></Image>
                    </Box>
                </Grid>
                </Center>
                <br />
                <Heading textAlign={"center"} fontFamily={"sans-serif"}>MEET OUR EMPLOYEES</Heading>
                <br />
                <Center>
                <Grid w="90%" templateColumns={{base:'repeat(1, 1fr)',
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
                        <Heading size="md" textAlign={"center"} color="RGBA(0, 0, 0, 0.64)">VEDANT</Heading>
                        <Text textAlign={"center"}  fontSize="-moz-initial">Manager, HypeKar
                        <br />
                        UTTARAPRADESH, INDIA
                        </Text>
                        <Center>
                        
                        </Center>
                    </GridItem>
                    <GridItem boxShadow='2xl' p='6' rounded='md' bg='white' _hover={{
                    transform: 'scale(1.2)',
                  }} transform="scale(1.0)" transition="0.2s ease-in-out"  w='100%' padding="5" h='340'  >
                        <Flex  justifyContent={"space-around"}>
                        <Image  mt="20px" w="35%"  src="https://bit.ly/dan-abramov"></Image>
                        </Flex>

                        <br />

                        <Heading size="md" textAlign={"center"} color="RGBA(0, 0, 0, 0.64)">ARUSH</Heading>
                        <Text textAlign={"center"} fontSize="-moz-initial">Visiting Officer, HypeKar
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
                        <Heading size="md" textAlign={"center"} color="RGBA(0, 0, 0, 0.64)">DARSH</Heading>
                        <Text textAlign={"center"} fontSize="-moz-initial">Customer Support, HypeKar
                        <br />
                        BIHAR, INDIA
                        </Text>
                    </GridItem>
                    </Grid>
                    </Center>
            </Box>
            }
        </Box>
    );
}

export default AboutUs;

