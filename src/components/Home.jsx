import { Heading, Center, Spinner, useColorModeValue, Box, Grid, GridItem, Image, Text, Flex, FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Accordion,

  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
    Select, } from '@chakra-ui/react';
import vdo from "../file/Videos/car-wash.mp4"
import React, {useState, useEffect, useRef} from 'react';
// import "./css-files/Text.css"
import { useTransition, animated } from 'react-spring'
import axios from 'axios';
import CaptionCarousel from './CaptionCarousel';
import Footer from './Footer';
import HomeSlider2 from "./HomeSlider2"
import { GameStateContext } from "./context/Context";
import { useContext } from 'react'
import useGeoLocation from './UserLocation'
import { Link } from 'react-router-dom';
import ContactUsForm from './ContactUsForm';
import HomeSlider from './HomeSlider';
import ContactUs from './ContactUs';
import vision from "../file/images/vision.jpg"

const Home = () => {
    const [loading, setLoading] = useState(false);

    const {email, setEmail, cityName} = useContext(GameStateContext)

    // Below line is the location of the user. 
    const location = useGeoLocation() 

    // Below I declared initialState as an object
    const initialState = {
        firstName : "",
        lastName : "",
        mobileNumber : "",
        type : ""
    }

    // I declared initialState to this text state
    const [text, setText] = useState(initialState)

   
    // Below function is for storing all the fileds for the input.
    const handleChange = (e) =>{
        const {id, value} = e.target;
        if(e.target == mobileNumber) {
            setText({...text, [id] : +value})
        }
        else{
            setText({...text, [id] : value})
        }
      }

      const isNullish = Object.values(text).every(value => {
        if (value === "") {
          return true;
        }
        return false;
      });

      // Below function is for posting data to the backend using API.
      const submitDetails = async() =>{
        if(isNullish==true){
          alert("please enter the data")
        }
        else{
           await axios.post("https://hypekarapi.herokuapp.com/contact/", text)
          .then(alert("Registered succesfully"))
          setText({firstName : "", name : "", lastName : "", mobileNumber : "", type : ""})
         
       }
      }

      //console.log("text is", text)

       // console.log("home email is", email)
        
       useEffect(()=>{
          setLoading(true) // After entering the application loading should be true
              setTimeout(()=>{ 
                  setLoading(false) // After 4 seconds loading should be false
          },1000) // Loading indicator will be appeared in UI for 4 seconds.
        },[])


    // Below code is for video autoplay
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
                {/* Below line is, I imported from CaptionCarousel component. */}
                <CaptionCarousel/>

                {/* whole below code is designing */}
                <br />
                
                  <Center>
                    {
                      email.length > 0 ? 
                      <Link to="/services">
                        <Button padding="10"  bgColor={"#3D3635"} color="white" fontSize={"large"}>BOOK OUR SERVICES</Button>
                      </Link>
                      :
                      <Link to="/login">
                         <Button padding="10"  bgColor={"#3D3635"} color="white" fontSize={"large"}>BOOK OUR SERVICES</Button>
                      </Link>
                    }
                    
                  </Center>
                 
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
              <Heading  size="md" fontFamily={"AUDIOWIDE"}>Experience the best car services at your doorstep at fastest speed.</Heading>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel fontFamily="Euphemia UCAS">First Name</FormLabel>
                    <Input value={text.firstName} onChange={handleChange} bg="white" id="firstName"  type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel fontFamily="Euphemia UCAS">Last Name</FormLabel>
                    <Input value={text.lastName} onChange={handleChange} bg="white" id="lastName"  type="text" />
                  </FormControl>
                 
                </Box>
              </HStack>
              <FormControl id="lastName">
                    <FormLabel fontFamily="Euphemia UCAS">Enter your query</FormLabel>
                    <Input value={text.type} onChange={handleChange} bg="white" id="type"  type="text" />
                  </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel fontFamily="Euphemia UCAS">Mobile Number</FormLabel>
                <Input value={text.mobileNumber} onChange={handleChange} bg="white" id="mobileNumber"  type="number" max="10" />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  onClick={submitDetails}
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
             <Box padding="5" w="100%" h="500">
               {/* <iframe width="100%" height="500px" src={`https://www.youtube.com/embed/Hwhxg9BVFL0`} ></iframe> */}
                  <video
                    style={{ width: "800px", height: "500px", margin: "0 auto"}}
                      playsInline
                        loop
                        muted
                        controls
                        autoPlay
                        alt="All the devices"
                        src={vdo}
                        ref={videoEl}
                         />
                    </Box>
                </Grid>
                <br />
                <br />
                <Heading textAlign="center" fontFamily={"AUDIOWIDE"}>Our Serivces in {cityName}</Heading>
                <br />
                <HomeSlider/>
            </Box>
            <br />
            <br />
            
            {/* <Grid mt="30px" 
                templateColumns={{base:'repeat(1, 1fr)',
                md:'repeat(1, 1fr)',
                lg:'repeat(2, 1fr)'
                }} gap={6} h="500">
            <GridItem border="1px solid red" padding="5" overflow={"scroll"}>
            <Accordion allowToggle>
            <Heading textAlign={"center"} fontFamily={"AUDIOWIDE"} >FAQ’S</Heading>
            <br />
           
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      Why should we choose HypeKar ? 
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontFamily="Euphemia UCAS">
                  Every month, or every few petrol fill-ups and especially before any 
                  long road trips, it’s a good idea to get under the hood of your car 
                  and inspect both the oil and coolant levels while the engine is cool. 
                  Low levels of either can lead to engine problems if left unchecked. 
                  Refer to your owner’s manual to locate both on your specific vehicle.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left' fontFamily="Euphemia UCAS">
                    What are the features of the HypeKar ?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontFamily="Euphemia UCAS">
                To maximise the life and performance of your vehicle, here i
                s a list of items you should check depending on the time and season.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left' fontFamily="Euphemia UCAS">
                    What are the discount of Multiple services ?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontFamily="Euphemia UCAS">
                Caring for your car and keeping it in proper running order 
                takes a little bit of effort, but you definitely don’t have 
                to be a mechanical whiz to keep your vehicle running well.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left' fontFamily="Euphemia UCAS">
                    Why HypeKar is need for us ?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontFamily="Euphemia UCAS">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left' fontFamily="Euphemia UCAS">
                      What extra features HypeKar has ?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontFamily="Euphemia UCAS">
                The biggest hurdle is being aware of what needs to be done—and 
                how often—for optimal vehicle upkeep. By knowing the basics about
                what your car needs, and when you should perform routine car
                maintenance, you’ll ensure that your car is in top-running condition.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left' fontFamily="Euphemia UCAS">
                    Who is the Director of the HypeKar ?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontFamily="Euphemia UCAS">
                To make it easy to keep track of your car maintenance schedule, we’ve 
                created a simple, downloadable car maintenance checklist to help you 
                keep on top of your automotive maintenance.
                </AccordionPanel>
            </AccordionItem>
            </Accordion>
            </GridItem>
            <GridItem border="1px solid red" padding="5" borderRadius="10" backgroundColor="#E2E8F0">
                <Heading fontFamily={"AUDIOWIDE"} textAlign="center">Why HypeKar ?</Heading>
                <OrderedList padding="5" fontSize={"large"}>
                <ListItem  fontFamily="Euphemia UCAS">0% compromise in service quality</ListItem>
                <ListItem fontFamily="Euphemia UCAS"> 0% compromise in product quality</ListItem>
                <ListItem fontFamily="Euphemia UCAS">Integer molestie lorem at massa</ListItem>
                <ListItem fontFamily="Euphemia UCAS">100% transparency</ListItem>
                <ListItem fontFamily="Euphemia UCAS">30 days service gurantee</ListItem>
                </OrderedList>
            </GridItem>

            <GridItem border="1px solid red" padding="5" borderRadius="10" backgroundColor="#E2E8F0">
                <Heading fontFamily={"AUDIOWIDE"} textAlign="center">About HypeKar</Heading>
                <br />
                <Text fontSize={"large"} fontFamily="Euphemia UCAS">
                  Hypekar is an initiative taken to organise
                  the automobile industry and provide a
                  unique vehicle ownership experience.
                  Hypekar aims at providing one stop
                  solution to all issues relating automobile at your door-step
                </Text>
            </GridItem>

            <GridItem border="1px solid red" padding="5" borderRadius="10" backgroundColor="#E2E8F0">
                <Heading fontFamily={"AUDIOWIDE"} textAlign="center">How HypeKar Works ?</Heading>
                <OrderedList fontFamily="Euphemia UCAS" padding="5" fontSize={"large"}>
                  <ListItem > Book your service</ListItem>
                  <ListItem >Hypekar will diagnose your vehicle</ListItem>
                  <ListItem > A brief quote and report of issues will be discussed with you</ListItem>
                  <ListItem >Vehicle service begins with regular updates and videos</ListItem>
                  <ListItem >your keys will be handed to you for final inspection</ListItem>
                  <ListItem>Payment will be collected with your valuable feedback</ListItem>
                </OrderedList>
            </GridItem>
            </Grid> */}

            <Grid padding="5" templateColumns={{base : 'repeat (1,1fr)',
              md : 'repeat(1, 1fr)',
              lg : 'repeat(2, 1fr)'
              }} gap={6}>
              <GridItem bgColor={"#E2E8F0"} overflow="scroll" borderRadius="10" w='100%' h="300px">
              <Accordion allowToggle>
                <br />
            <Heading textAlign={"center"} fontFamily={"AUDIOWIDE"} >FAQ’S</Heading>
            <br />
           
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      Why should we choose HypeKar ? 
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontFamily="Euphemia UCAS">
                  Every month, or every few petrol fill-ups and especially before any 
                  long road trips, it’s a good idea to get under the hood of your car 
                  and inspect both the oil and coolant levels while the engine is cool. 
                  Low levels of either can lead to engine problems if left unchecked. 
                  Refer to your owner’s manual to locate both on your specific vehicle.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left' fontFamily="Euphemia UCAS">
                    What are the features of the HypeKar ?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontFamily="Euphemia UCAS">
                To maximise the life and performance of your vehicle, here i
                s a list of items you should check depending on the time and season.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left' fontFamily="Euphemia UCAS">
                    What are the discount of Multiple services ?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontFamily="Euphemia UCAS">
                Caring for your car and keeping it in proper running order 
                takes a little bit of effort, but you definitely don’t have 
                to be a mechanical whiz to keep your vehicle running well.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left' fontFamily="Euphemia UCAS">
                    Why HypeKar is need for us ?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontFamily="Euphemia UCAS">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left' fontFamily="Euphemia UCAS">
                      What extra features HypeKar has ?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontFamily="Euphemia UCAS">
                The biggest hurdle is being aware of what needs to be done—and 
                how often—for optimal vehicle upkeep. By knowing the basics about
                what your car needs, and when you should perform routine car
                maintenance, you’ll ensure that your car is in top-running condition.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left' fontFamily="Euphemia UCAS">
                    Who is the Director of the HypeKar ?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontFamily="Euphemia UCAS">
                To make it easy to keep track of your car maintenance schedule, we’ve 
                created a simple, downloadable car maintenance checklist to help you 
                keep on top of your automotive maintenance.
                </AccordionPanel>
            </AccordionItem>
            </Accordion>
              </GridItem>
              <GridItem bgColor={"#E2E8F0"} overflow="scroll"  borderRadius="10"  w='100%' h="300px">
              <br />
              <Heading fontFamily={"AUDIOWIDE"} textAlign="center">Why HypeKar ?</Heading>
                <OrderedList padding="5" fontSize={"large"}>
                <ListItem  fontFamily="Euphemia UCAS">0% compromise in service quality</ListItem>
                <ListItem fontFamily="Euphemia UCAS"> 0% compromise in product quality</ListItem>
                <ListItem fontFamily="Euphemia UCAS">Integer molestie lorem at massa</ListItem>
                <ListItem fontFamily="Euphemia UCAS">100% transparency</ListItem>
                <ListItem fontFamily="Euphemia UCAS">30 days service gurantee</ListItem>
                </OrderedList>
              </GridItem>
              <GridItem bgColor={"#E2E8F0"} overflow="scroll"  borderRadius="10" w='100%' h="300px">
              <br />
              <Heading fontFamily={"AUDIOWIDE"} textAlign="center">About HypeKar</Heading>
                <br />
                <Text padding="5" fontSize={"large"} fontFamily="Euphemia UCAS">
                  Hypekar is an initiative taken to organise
                  the automobile industry and provide a
                  unique vehicle ownership experience.
                  Hypekar aims at providing one stop
                  solution to all issues relating automobile at your door-step
                </Text>
              </GridItem>

              <GridItem bgColor={"#E2E8F0"} overflow="scroll"  borderRadius="10" w='100%' h="300px">
              <br />
              <Heading fontFamily={"AUDIOWIDE"} textAlign="center">How HypeKar Works ?</Heading>
                <OrderedList fontFamily="Euphemia UCAS" padding="5" fontSize={"large"}>
                  <ListItem > Book your service</ListItem>
                  <ListItem >Hypekar will diagnose your vehicle</ListItem>
                  <ListItem > A brief quote and report of issues will be discussed with you</ListItem>
                  <ListItem >Vehicle service begins with regular updates and videos</ListItem>
                  <ListItem >your keys will be handed to you for final inspection</ListItem>
                  <ListItem>Payment will be collected with your valuable feedback</ListItem>
                </OrderedList>
              </GridItem>

              <GridItem  borderRadius="10" w='100%' h="300px">
              <br />
                {/* <Heading fontFamily={"AUDIOWIDE"}    size="lg" textAlign={"center"}>Vision of HypeKar</Heading> */}
                <Image ml="50px" h="80%" w="80%" src={vision}></Image>
              </GridItem>

              <GridItem bgColor={"#E2E8F0"} overflow="scroll"  borderRadius="10" w='100%' h="300px">
              <br />
              <Heading fontFamily={"AUDIOWIDE"} textAlign="center"> Vision of HypeKar!</Heading>
                <Text fontFamily="Euphemia UCAS" fontSize={"large"} padding="5">
                <strong>Vision:</strong> <br />
                Righteous vehicle ownership experience. <br />
                <strong>Mission:</strong> <br />
                To create a transparent and trustable ecosystem of automobile
                after-sales market.
                </Text>
              </GridItem>
            </Grid>
            <br />
            <br />
            <br />
            <Footer/>
            </> 
            }
        </Box>
       
    );
}

export default Home;




// import { Heading, Center, Spinner, useColorModeValue, Box, Grid, GridItem, Image, Text, Flex, FormControl,
//   FormLabel,
//   Input,
//   InputGroup,
//   HStack,
//   InputRightElement,
//   Stack,
//   Button,
//   Accordion,
// AccordionItem,
// AccordionButton,
// AccordionPanel,
// AccordionIcon,
// List,
// ListItem,
// ListIcon,
// OrderedList,
// UnorderedList,
//   Select, } from '@chakra-ui/react';
// import React, {useState, useEffect, useRef} from 'react';
// // import "./css-files/Text.css"
// import { useTransition, animated } from 'react-spring'
// import axios from 'axios';
// import CaptionCarousel from './CaptionCarousel';
// import Footer from './Footer';
// import { GameStateContext } from "./context/Context";
// import { useContext } from 'react'
// import useGeoLocation from './UserLocation'
// import { Link } from 'react-router-dom';
// import ContactUsForm from './ContactUsForm';
// import HomeSlider from './HomeSlider';
// import ContactUs from './ContactUs';

// const Home = () => {
//   const [loading, setLoading] = useState(false);

//   const {email, setEmail} = useContext(GameStateContext)

//   const location = useGeoLocation() 

//   const initialState = {
//       firstName : "",
//       lastName : "",
//       mobileNumber : "",
//       type : ""
//   }
//   const [text, setText] = useState(initialState)

//   let config = {
//       headers: {
//         "Content-Type": "application/json",
//         'Access-Control-Allow-Origin': '*',
//         }
//       }

//   const handleChange = (e) =>{
//       const {id, value} = e.target;
//       if(e.target == mobileNumber) {
//           setText({...text, [id] : +value})
//       }
//       else{
//           setText({...text, [id] : value})
//       }
//     }

//     const isNullish = Object.values(text).every(value => {
//       if (value === "") {
//         return true;
//       }
//       return false;
//     });

//     const submitDetails = async() =>{
//       if(isNullish==true){
//         alert("please enter the data")
//       }
//       else{
//          await axios.post("https://apihypekar.herokuapp.com/contact/", text)
//         .then(alert("Registered succesfully"))
//         setText({firstName : "", name : "", lastName : "", mobileNumber : "", type : ""})
       
//      }
//     }

//     console.log("text is", text)

//   console.log("home email is", email)
//   useEffect(()=>{
//     setLoading(true) // After entering the application loading should be true
//         setTimeout(()=>{ 
//             setLoading(false) // After 4 seconds loading should be false
//     },1000) // Loading indicator will be appeared in UI for 4 seconds.
//   },[])

//   useEffect(()=>{
      
//           getCar()
      
//   },[])

//   //axios.defaults.withCredentials = true;

  
//       const getCar = async() =>{
//           const res = await axios.get(`https://2bbe-103-148-62-156.in.ngrok.io/mycardata?email=${email}`)
//            console.log("res is", res)
//       }
 
  
  

//   const videoEl = useRef(null);

//       const attemptPlay = () => {
//           videoEl &&
//           videoEl.current &&
//           videoEl.current.play().catch(error => {
//               console.error("Error attempting to play", error);
//           });
//       };

//           useEffect(() => {
//               attemptPlay();
//           }, []);
  
//       return (
//       <Box >
//           {
//           loading == true  ? 
//               <Center mt="200px">
//               <Spinner
//               thickness='4px'
//               speed='0.65s'
//               emptyColor='gray.200'
//               color='blue.500'
//               size='xl'
//               />
//               </Center>
//           :

//           <>

//           <Box>
            
          
//               <CaptionCarousel/>
//               <Grid mt="30px" 
//               templateColumns={{base:'repeat(1, 1fr)',
//               md:'repeat(2, 1fr)',
//               lg:'repeat(2, 1fr)'
//               }} gap={7}>
//               <Box borderRadius={10} w='100%' h='500'>
//               <Flex
//                   minH={'30vh'}
//                   align={'center'}
//                   justify={'center'}
//               >
//       <Stack spacing={8} mx={'auto'} maxW={'lg'} py={10} px={6}>
//         <Box
//           rounded={'lg'}
//           boxShadow={'lg'}
//           p={8}>
//           <Stack spacing={4}>
//             <Heading fontFamily="monospace" size="md">EXPERIENCE THE BEST CAR SERVICES AT YOUR DOORSTEP</Heading>
//             <HStack>
//               <Box>
//                 <FormControl id="firstName" isRequired>
//                   <FormLabel fontFamily="monospace">First Name</FormLabel>
//                   <Input value={text.firstName} onChange={handleChange} bg="white" id="firstName"  type="text" />
//                 </FormControl>
//               </Box>
//               <Box>
//                 <FormControl id="lastName">
//                   <FormLabel fontFamily="monospace">Last Name</FormLabel>
//                   <Input value={text.lastName} onChange={handleChange} bg="white" id="lastName"  type="text" />
//                 </FormControl>
               
//               </Box>
//             </HStack>
//             <FormControl id="lastName">
//                   <FormLabel fontFamily="monospace">Type</FormLabel>
//                   <Input value={text.type} onChange={handleChange} bg="white" id="type"  type="text" />
//                 </FormControl>
//             <FormControl id="email" isRequired>
//               <FormLabel fontFamily="monospace">Mobile Number</FormLabel>
//               <Input value={text.mobileNumber} onChange={handleChange} bg="white" id="mobileNumber"  type="number" max="10" />
//             </FormControl>
//             <Stack spacing={10} pt={2}>
//               <Button
//                 onClick={submitDetails}
//                 loadingText="Submitting"
//                 size="lg"
//                 bg={'blue.400'}
//                 color={'white'}
//                 _hover={{
//                   bg: 'blue.500',
//                 }}>
//                 SUBMIT
//               </Button>
//             </Stack>
//           </Stack>
//         </Box>
//       </Stack>
//     </Flex>
//               {/* <ContactUs/> */}
             
//               </Box>
//                   <Box w="100%" h="500">
                   
//                       <video
//                       style={{ width: "800px", height: "500px", margin: "0 auto"}}
//                       playsInline
//                       loop
//                       muted
//                       controls
//                       autoPlay
//                       alt="All the devices"
//                       src="https://cdn.kapwing.com/final_6339d1c5f81a340f1b84512f_525224.mp4"
//                       ref={videoEl}
//                        />
//                   </Box>
//               </Grid>
           
//               <br />
//               <Heading textAlign="center">Our Serivces</Heading>
//               <br />
//               <HomeSlider/>
//           </Box>
         
          
//           <br />
        
//           <br />
          
//           <Grid mt="30px" 
//               templateColumns={{base:'repeat(1, 1fr)',
//               md:'repeat(2, 1fr)',
//               lg:'repeat(2, 1fr)'
//               }} gap={7} h="500">
//           <Box overflow="scroll">
//           <Accordion allowToggle>
//           <Heading textAlign={"center"}>FAQ’S</Heading>
//           <br />
         
//           <AccordionItem>
//               <h2>
//               <AccordionButton>
//                   <Box flex='1' textAlign='left'>
//                     Why should we choose HypeKar ? 
//                   </Box>
//                   <AccordionIcon />
//               </AccordionButton>
//               </h2>
//               <AccordionPanel pb={4}>
//               Every month, or every few petrol fill-ups and especially before any 
//               long road trips, it’s a good idea to get under the hood of your car 
//               and inspect both the oil and coolant levels while the engine is cool. 
//               Low levels of either can lead to engine problems if left unchecked. 
//               Refer to your owner’s manual to locate both on your specific vehicle.
//               </AccordionPanel>
//           </AccordionItem>

//           <AccordionItem>
//               <h2>
//               <AccordionButton>
//                   <Box flex='1' textAlign='left'>
//                   What are the features of the HypeKar ?
//                   </Box>
//                   <AccordionIcon />
//               </AccordionButton>
//               </h2>
//               <AccordionPanel pb={4}>
//               To maximise the life and performance of your vehicle, here i
//               s a list of items you should check depending on the time and season.
//               </AccordionPanel>
//           </AccordionItem>
//           <AccordionItem>
//               <h2>
//               <AccordionButton>
//                   <Box flex='1' textAlign='left'>
//                   What are the discount of Multiple services ?
//                   </Box>
//                   <AccordionIcon />
//               </AccordionButton>
//               </h2>
//               <AccordionPanel pb={4}>
//               Caring for your car and keeping it in proper running order 
//               takes a little bit of effort, but you definitely don’t have 
//               to be a mechanical whiz to keep your vehicle running well.
//               </AccordionPanel>
//           </AccordionItem>

//           <AccordionItem>
//               <h2>
//               <AccordionButton>
//                   <Box flex='1' textAlign='left'>
//                   What are the discount of Multiple services ?
//                   </Box>
//                   <AccordionIcon />
//               </AccordionButton>
//               </h2>
//               <AccordionPanel pb={4}>
//               Caring for your car and keeping it in proper running order 
//               takes a little bit of effort, but you definitely don’t have 
//               to be a mechanical whiz to keep your vehicle running well.
//               </AccordionPanel>
//           </AccordionItem>

//           <AccordionItem>
//               <h2>
//               <AccordionButton>
//                   <Box flex='1' textAlign='left'>
//                   What are the discount of Multiple services ?
//                   </Box>
//                   <AccordionIcon />
//               </AccordionButton>
//               </h2>
//               <AccordionPanel pb={4}>
//               Caring for your car and keeping it in proper running order 
//               takes a little bit of effort, but you definitely don’t have 
//               to be a mechanical whiz to keep your vehicle running well.
//               </AccordionPanel>
//           </AccordionItem>

//           <AccordionItem>
//               <h2>
//               <AccordionButton>
//                   <Box flex='1' textAlign='left'>
//                   What are the discount of Multiple services ?
//                   </Box>
//                   <AccordionIcon />
//               </AccordionButton>
//               </h2>
//               <AccordionPanel pb={4}>
//               Caring for your car and keeping it in proper running order 
//               takes a little bit of effort, but you definitely don’t have 
//               to be a mechanical whiz to keep your vehicle running well.
//               </AccordionPanel>
//           </AccordionItem>

//           <AccordionItem>
//               <h2>
//               <AccordionButton>
//                   <Box flex='1' textAlign='left'>
//                   What are the discount of Multiple services ?
//                   </Box>
//                   <AccordionIcon />
//               </AccordionButton>
//               </h2>
//               <AccordionPanel pb={4}>
//               Caring for your car and keeping it in proper running order 
//               takes a little bit of effort, but you definitely don’t have 
//               to be a mechanical whiz to keep your vehicle running well.
//               </AccordionPanel>
//           </AccordionItem>

//           <AccordionItem>
//               <h2>
//               <AccordionButton>
//                   <Box flex='1' textAlign='left'>
//                   What are the discount of Multiple services ?
//                   </Box>
//                   <AccordionIcon />
//               </AccordionButton>
//               </h2>
//               <AccordionPanel pb={4}>
//               Caring for your car and keeping it in proper running order 
//               takes a little bit of effort, but you definitely don’t have 
//               to be a mechanical whiz to keep your vehicle running well.
//               </AccordionPanel>
//           </AccordionItem>

//           <AccordionItem>
//               <h2>
//               <AccordionButton>
//                   <Box flex='1' textAlign='left'>
//                   What are the discount of Multiple services ?
//                   </Box>
//                   <AccordionIcon />
//               </AccordionButton>
//               </h2>
//               <AccordionPanel pb={4}>
//               Caring for your car and keeping it in proper running order 
//               takes a little bit of effort, but you definitely don’t have 
//               to be a mechanical whiz to keep your vehicle running well.
//               </AccordionPanel>
//           </AccordionItem>

//           <AccordionItem>
//               <h2>
//               <AccordionButton>
//                   <Box flex='1' textAlign='left'>
//                   Why HypeKar is need for us ?
//                   </Box>
//                   <AccordionIcon />
//               </AccordionButton>
//               </h2>
//               <AccordionPanel pb={4}>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//               tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//               veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//               commodo consequat.
//               </AccordionPanel>
//           </AccordionItem>
//           <AccordionItem>
//               <h2>
//               <AccordionButton>
//                   <Box flex='1' textAlign='left'>
//                     What extra features HypeKar has ?
//                   </Box>
//                   <AccordionIcon />
//               </AccordionButton>
//               </h2>
//               <AccordionPanel pb={4}>
//               The biggest hurdle is being aware of what needs to be done—and 
//               how often—for optimal vehicle upkeep. By knowing the basics about
//               what your car needs, and when you should perform routine car
//               maintenance, you’ll ensure that your car is in top-running condition.
//               </AccordionPanel>
//           </AccordionItem>
//           <AccordionItem>
//               <h2>
//               <AccordionButton>
//                   <Box flex='1' textAlign='left'>
//                   Who is the Director of the HypeKar ?
//                   </Box>
//                   <AccordionIcon />
//               </AccordionButton>
//               </h2>
//               <AccordionPanel pb={4}>
//               To make it easy to keep track of your car maintenance schedule, we’ve 
//               created a simple, downloadable car maintenance checklist to help you 
//               keep on top of your automotive maintenance.
//               </AccordionPanel>
//           </AccordionItem>
//           </Accordion>
//           </Box>
//           {/* <Image padding="5" src="https://marutisuzukiarenaprodcdn.azureedge.net/-/media/ccp/capture.webp?la=en&rev=ae498d7679c44db58306ac208eb9f2ff&extension=webp&hash=ED3A7FA546186B11A7DB6FD9A0D90C06"></Image> */}
//           <Box overflow={"scroll"}  borderRadius="10" backgroundColor="#E2E8F0">
//               <Heading padding="5" textAlign="center">Why choose us ?</Heading>
//               <OrderedList  padding="5" fontSize="xl">
//               <ListItem>Regular car service ensures fuel efficiency
//               A car that goes for regular car service and car maintenance gives huge 
//               dividends in fuel efficiency too</ListItem>
//               <ListItem> Regular changing of oil, coolants, 
//               radiator fluid, and other vital fluids vastly improve fuel efficiency, 
//               thus givin g you better mileage and more bang for your fuel buck!</ListItem>
//               <ListItem>Integer molestie lorem at massa</ListItem>
//               <ListItem>Facilisis in pretium nisl aliquet</ListItem>
//               <ListItem>Automotive Services means the repair, rebuilding or 
//                   reconditioning of motor vehicles or parts thereof, including
//                   collision service, painting and steam cleaning of vehicles and 
//                   commercial carwashes.</ListItem>
//                   <ListItem>Automotive Services means the repair, rebuilding or 
//                   reconditioning of motor vehicles or parts thereof, including
//                   collision service, painting and steam cleaning of vehicles and 
//                   commercial carwashes.</ListItem>
//                   <ListItem>Automotive Services means the repair, rebuilding or 
//                   reconditioning of motor vehicles or parts thereof, including
//                   collision service, painting and steam cleaning of vehicles and 
//                   commercial carwashes.</ListItem>
//               </OrderedList>
            
//           </Box>
//           </Grid>
//           <br />
//           <Footer/>
//           </> 
//           }
//           <br />
//           <br />
//           <br />
           
//       </Box>
     
//   );
// }

// export default Home;
