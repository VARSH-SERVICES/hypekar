import { Heading, Center, Spinner, useColorModeValue, Box, Grid, GridItem, Image, Text, Flex, FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Select, } from '@chakra-ui/react';
import React, {useState, useEffect, useRef} from 'react';
// import "./css-files/Text.css"
import { useTransition, animated } from 'react-spring'
import axios from 'axios';
import CaptionCarousel from './CaptionCarousel';
import Footer from './Footer';
import { GameStateContext } from "./context/Context";
import { useContext } from 'react'
import useGeoLocation from './UserLocation'
import { Link } from 'react-router-dom';
import ContactUsForm from './ContactUsForm';
import HomeSlider from './HomeSlider';

const Home = () => {
    const [loading, setLoading] = useState(false);

    const {email, setEmail} = useContext(GameStateContext)

    const location = useGeoLocation() 

    console.log("home email is", email)
    useEffect(()=>{
      setLoading(true) // After entering the application loading should be true
          setTimeout(()=>{ 
              setLoading(false) // After 4 seconds loading should be false
      },1000) // Loading indicator will be appeared in UI for 4 seconds.
    },[])

    useEffect(()=>{
        
            getCar()
        
    },[])

    //axios.defaults.withCredentials = true;

    
        const getCar = async() =>{
            const res = await axios.get(`https://2bbe-103-148-62-156.in.ngrok.io/mycardata?email=${email}`)
             console.log("res is", res)
        }
   
    
    

    const videoEl = useRef(null);

        const attemptPlay = () => {
            videoEl &&
            videoEl.current &&
            videoEl.current.play().catch(error => {
                console.error("Error attempting to play", error);
            });
        };

            useEffect(() => {
                attemptPlay();
            }, []);
    
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

            <>

            <Box>
                {/* <Heading textAlign={"center"}>HOME</Heading> */}
                {/* <CaptionCarousel/>     */}
                {/* <Flex w={[200, 500, 800]}>
                <Box 
                border="1px solid red"
                w="100%"
                h="500"
                backgroundSize="auto"
                backgroundRepeat="no-repeat"
                backgroundImage={"url(https://www.citycarz.in/img/services/general-car-service.jpg)"}
                >
                </Box>

                <Box 
                border="1px solid red"
                w="100%"
                h="500"
                backgroundSize="auto"
                backgroundRepeat="no-repeat"
                backgroundImage={"url(https://www.citycarz.in/img/services/general-car-service.jpg)"}
                >
                </Box>
                </Flex> */}

                {/* <Grid templateColumns={{base:'repeat(1, 1fr)',
                md:'repeat(2, 1fr)',
                lg:'repeat(2, 1fr)'
                }} gap={3}>
                    <GridItem>
                <Box 
               
                w="100%"
                h="360"
               
                borderRadius={10}
                // backgroundImage={"url(https://m.hondacarindia.com/honda-services/images/banner2.png)"}
                
                >
                    <CaptionCarousel/>
                <Heading fontFamily="monospace" color="black">WELCOME TO HYPEKAR CAR SERVICE CENTER. WE ARE HAPPY TO SERVE YOU.</Heading>
                </Box>
                </GridItem>
                <GridItem>
                <Box 
                
                w="100%"
                h="360"
                backgroundSize="auto"
                backgroundRepeat="no-repeat"
                backgroundImage={"url(https://www.supermechanic.in/wp-content/uploads/2018/06/ATF_supermechanic-_img.png)"}
                >
                <Heading fontFamily="monospace" textAlign="center">BEST CAR SERVICE IN INDIA</Heading>
               
                </Box>   
                </GridItem>
                </Grid> */}
            
                <CaptionCarousel/>
                <Grid mt="30px" 
                templateColumns={{base:'repeat(1, 1fr)',
                md:'repeat(2, 1fr)',
                lg:'repeat(2, 1fr)'
                }} gap={7}>
                <Box borderRadius={10} w='100%' h='500'>
                <Flex
                    minH={'30vh'}
                    align={'center'}
                    justify={'center'}
                >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={10} px={6}>
          <Box
            rounded={'lg'}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <Heading fontFamily="monospace" size="md">EXPERIENCE THE BEST CAR SERVICES AT YOUR DOORSTEP</Heading>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel fontFamily="monospace">First Name</FormLabel>
                    <Input bg="white" id="firstName"  type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel fontFamily="monospace">Last Name</FormLabel>
                    <Input bg="white" id="lastName"  type="text" />
                  </FormControl>
                 
                </Box>
              </HStack>
              <FormControl id="lastName">
                    <FormLabel fontFamily="monospace">Select Car</FormLabel>
                    <Select bg="white" id="lastName"  type="text">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </Select>
                  </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel fontFamily="monospace">Mobile Number</FormLabel>
                <Input bg="white" id="mobileNumber"  type="number" max="10" />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                 
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  SUBMIT
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
                </Box>
                    <Box w="100%" h="500">
                        {/* <iframe width="100%" height="500px" src={`https://www.youtube.com/embed/Hwhxg9BVFL0`} ></iframe> */}
                        <video
                        style={{ width: "800px", height: "500px", margin: "0 auto"}}
                        playsInline
                        loop
                        muted
                        controls
                        autoPlay
                        alt="All the devices"
                        src="/public/Videos/WhatsApp Video 2022-10-01 at 9.59.27 AM.mp4"
                        ref={videoEl}
                         />
                    </Box>
                </Grid>
                {/* <Grid templateColumns={{base:'repeat(1, 1fr)',
                md:'repeat(2, 1fr)',
                lg:'repeat(3, 1fr)'
                }} gap={6}>
                    <GridItem _hover={{
                    transform: 'scale(1.2)',
                  }} transform="scale(1.0)" transition="0.2s ease-in-out"  w='100%' padding="5" h='340' bg='RGBA(0, 0, 0, 0.06)' >
                    <Heading size="md" textAlign={"center"} color="RGBA(0, 0, 0, 0.64)">PERIODIC SERVICES</Heading>
                        <Flex  justifyContent={"space-around"}>
                        <Image 
                   mt="20px" w="35%"  src="https://cdn-icons-png.flaticon.com/512/4669/4669436.png"></Image>
                        
                        </Flex>
                        <Center>
                        {
                            email.length == 0 ? 
                            // <Link to="/login">
                                <Button bg="#CBD5E0" mt="20px">Book Now</Button>
                            // </Link>
                            :
                            // <Link to="/booking">
                                <Button bg="#CBD5E0" mt="20px">Book Now</Button>
                            // </Link>
                        }
                        </Center>
                    </GridItem>
                    
                    <GridItem
                     _hover={{
                        transform: 'scale(1.2)',
                      }} transform="scale(1.0)" transition="0.2s ease-in-out"
                    w='100%' padding="5" h='340' bg='RGBA(0, 0, 0, 0.06)'>
                    <Heading size="md" textAlign={"center"} color="RGBA(0, 0, 0, 0.64)">AC SERVICES</Heading>
                        <Flex  justifyContent={"space-around"} >
                         <Image mt="15px" w="35%" src="https://cdn-icons-png.flaticon.com/512/803/803913.png"></Image>   
                         
                        </Flex>
                        <Center>
                        {
                            email.length == 0 ? 
                            <Link to="/login">
                                <Button bg="#CBD5E0" mt="20px">Book Now</Button>
                            </Link>
                            :
                            <Link to="/booking">
                                <Button bg="#CBD5E0" mt="20px">Book Now</Button>
                            </Link>
                        }
                        </Center>   
                    </GridItem>
                     
                    <GridItem
                     _hover={{
                        transform: 'scale(1.2)',
                      }} transform="scale(1.0)" transition="0.2s ease-in-out"
                    w='100%' padding="5" h='340' bg='RGBA(0, 0, 0, 0.06)'>
                    <Heading size="md" textAlign={"center"} color="RGBA(0, 0, 0, 0.64)">WHEEL CARE</Heading>
                        <Flex  justifyContent={"space-around"} >
                        <Image  mt="15px" w="35%" src="https://cdn-icons-png.flaticon.com/512/3233/3233875.png"></Image>   
                        
                        </Flex>
                        <Center>
                        {
                            email.length == 0 ? 
                            <Link to="/login">
                                <Button bg="#CBD5E0" mt="20px">Book Now</Button>
                            </Link>
                            :
                            <Link to="/booking">
                                <Button bg="#CBD5E0" mt="20px">Book Now</Button>
                            </Link>
                        }
                        </Center>
                    </GridItem>

                    <GridItem
                     _hover={{
                        transform: 'scale(1.2)',
                      }} transform="scale(1.0)" transition="0.2s ease-in-out"
                    w='100%' padding="5" h='340' bg='RGBA(0, 0, 0, 0.06)'>
                    <Heading size="md" textAlign={"center"} color="RGBA(0, 0, 0, 0.64)">REPAIRS</Heading>
                        <Flex  justifyContent={"space-around"}>
                        <Image mt="15px" w="35%" src="https://cdn-icons-png.flaticon.com/512/1743/1743705.png"></Image>   
                        
                        </Flex>
                        <Center>
                        {
                            email.length == 0 ? 
                            <Link to="/login">
                                <Button bg="#CBD5E0" mt="20px">Book Now</Button>
                            </Link>
                            :
                            <Link to="/booking">
                                <Button bg="#CBD5E0" mt="20px">Book Now</Button>
                            </Link>
                        }
                        </Center>
                    </GridItem>

                    <GridItem
                     _hover={{
                        transform: 'scale(1.2)',
                      }} transform="scale(1.0)" transition="0.2s ease-in-out"
                    w='100%' padding="5" h='340' bg='RGBA(0, 0, 0, 0.06)'>
                    <Heading size="md" textAlign={"center"} color="RGBA(0, 0, 0, 0.64)">BATTERY SERVICES</Heading>
                        <Flex  justifyContent={"space-around"}>
                        <Image mt="20px" w="35%" src="https://cdn-icons-png.flaticon.com/512/2084/2084219.png"></Image>   
                        
                        </Flex>
                        <Center>
                        {
                            email.length == 0 ? 
                            <Link to="/login">
                                <Button bg="#CBD5E0" mt="20px">Book Now</Button>
                            </Link>
                            :
                            <Link to="/booking">
                                <Button bg="#CBD5E0" mt="20px">Book Now</Button>
                            </Link>
                        }
                        </Center>
                    </GridItem>

                    <GridItem
                     _hover={{
                        transform: 'scale(1.2)',
                      }} transform="scale(1.0)" transition="0.2s ease-in-out"
                    w='100%' padding="5" h='340' bg='RGBA(0, 0, 0, 0.06)'>
                    <Heading size="md" textAlign={"center"} color="RGBA(0, 0, 0, 0.64)">ACCESSORIES AND SPARES</Heading>
                        <Flex  justifyContent={"space-around"}>                       
                        <Image mt="20px" w="35%" src="https://cdn-icons-png.flaticon.com/512/3825/3825672.png"></Image>   
                        
                        </Flex>
                        <Center>
                        {
                            email.length == 0 ? 
                            <Link to="/login">
                                <Button bg="#CBD5E0" mt="20px">Book Now</Button>
                            </Link>
                            :
                            <Link to="/booking">
                                <Button bg="#CBD5E0" mt="20px">Book Now</Button>
                            </Link>
                        }
                        </Center>
                    </GridItem>

                    <GridItem
                     _hover={{
                        transform: 'scale(1.2)',
                      }} transform="scale(1.0)" transition="0.2s ease-in-out"
                    w='100%' padding="5" h='340' bg='RGBA(0, 0, 0, 0.06)'>
                    <Heading size="md" textAlign={"center"} color="RGBA(0, 0, 0, 0.64)">PREMIUM SERVICES</Heading>
                        <Flex  justifyContent={"space-around"} >
                        <Image mt="20px" w="35%" src="https://cdn-icons-png.flaticon.com/512/4833/4833735.png"></Image>   
                        
                        </Flex>
                        <Center>
                        {
                            email.length == 0 ? 
                            <Link to="/login">
                                <Button bg="#CBD5E0" mt="20px">Book Now</Button>
                            </Link>
                            :
                            <Link to="/booking">
                                <Button bg="#CBD5E0" mt="20px">Book Now</Button>
                            </Link>
                        }
                        
                        </Center>   
                    </GridItem>
                </Grid> */}
                <br />
                <Heading textAlign="center">Our Serivces</Heading>
                <br />
                <HomeSlider/>
            </Box>
            </> 
            }
          
        </Box>
    );
}

export default Home;
