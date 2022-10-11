import { Heading, Text, Center, useColorModeValue, VStack, StackDivider , Flex, HStack, FormControl, FormLabel , Input, InputGroup , Spinner, Button, Box, Grid, Image, Stack, GridItem } from '@chakra-ui/react';
import React, {useState, useContext, useEffect} from 'react';
import ContactUsForm from './ContactUsForm';
import { GameStateContext } from "./context/Context";
import Footer from './Footer';


const ContactUs = () => {
    const [loading, setLoading] = useState(false);

    const {cityName} = useContext(GameStateContext)

    useEffect(()=>{
      setLoading(true) // After entering the application loading should be true
          setTimeout(()=>{ 
              setLoading(false) // After 4 seconds loading should be false
      },1000) // Loading indicator will be appeared in UI for 4 seconds.
    },[])
    
    return (
        <Box>
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
                <Heading padding={3} fontFamily="AUDIOWIDE" textAlign={"center"}>GET A CALL FROM US</Heading>
                <Heading size="md" fontFamily={"AUDIOWIDE"} textAlign={"center"}>Lorem ipsum dolor sit amet
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</Heading>
                
                <ContactUsForm/>

                {/* <Grid templateColumns={{base : 'repeat(1, 1fr)', 
                md : 'repeate(3,1fr)', lg : 'repeate(3,1fr  )'
                }} border="1px solid red">
                    <GridItem backgroundColor="black" >
                        <Image w="200px" src='https://angfuzsoft.com/wordpress/mechon/wp-content/themes/mechon/assets/img/icon/contact_1_1.svg'></Image>
                        <Heading size="md" color="white" padding="5">WE ARE OPEN MONDAY-FRIDAY
                        <br />
                        7:00 am - 9:00 pm</Heading>
                    </GridItem>

                    <GridItem backgroundColor="#e81c2e" >
                        <Image w="200px" src='https://angfuzsoft.com/wordpress/mechon/wp-content/themes/mechon/assets/img/icon/contact_1_1.svg'></Image>
                        <Heading size="md" color="white" padding="5">WE ARE OPEN MONDAY-FRIDAY
                        <br />
                        7:00 am - 9:00 pm</Heading>
                    </GridItem>
                </Grid> */}

            {/* <Grid  mt="30px" 
            h="330"
            templateColumns={{base:'repeat(1, 1fr)',
            md:'repeat(2, 1fr)',
            lg:'repeat(2, 1fr)'
            }} gap={7}>

                <Box backgroundColor="#212529" padding="8"  borderRadius={10} w='100%' h='200'>
                
                    
                    <Center>
                    <Flex padding="5" gap="5">
                          <Image src="https://angfuzsoft.com/wordpress/mechon/wp-content/themes/mechon/assets/img/icon/contact_1_1.svg"></Image>
                            <Heading size="md" color="white">WE ARE OPEN MONDAY-FRIDAY
<                   br /> 7:00 am - 9:00 pm</Heading>
                          
                    </Flex>
                    </Center>
                </Box>
               
                <Box backgroundColor="tomato" padding="8" borderRadius={10} w='100%' h='200'>
                    
                    <Center>
                    <Flex padding="5"  gap="5" >
                          <Image src="https://angfuzsoft.com/wordpress/mechon/wp-content/themes/mechon/assets/img/icon/contact_1_3.svg"></Image>
                            <Heading size="md" color="white">NEED A REPAIR? OUR ADDRESS

<                   br />{cityName}</Heading>
                          
                    </Flex>
                    </Center>
                </Box>
            </Grid> */}

            <Center>
            <Grid w="90%" templateColumns={{base:'repeat(1, 1fr)',
                    md:'repeat(, 1fr)',
                    lg:'repeat(2, 1fr)'
                    }} gap={6} >
                   
                    <GridItem boxShadow='2xl' p='6' rounded='md' bg='white' w='100%' padding="5" h='340'  >
                   
                   <Text padding="5" color="black" textAlign="center">MORE THAN 25+ YEARS EXPERIENCE</Text>
                   <Heading  fontFamily="AUDIOWIDE" padding="5" color="black " textAlign="center">MAKE YOUR CAR FEEL LIKE A BRAND NEW ONE</Heading>
                    <Text fontFamily={"AUDIOWIDE"} padding="5" textAlign="center" color="black ">Globally maintain high payoff collaboration and idea sharing after viral solution leading are edge
                         mindshare rather than premier testing pursue professional customer service 
                         revolutinary services...
                    </Text>
                    </GridItem>
                    
                    <GridItem boxShadow='2xl' p='6' rounded='md' bg='white'  w='100%' h='340'  >
                       
                        <Image padding="5"  src="https://automechanica.com/uploads/home_page/feature_section_image/1/Highlight_Image.png"></Image>
                        
                    </GridItem>
                    </Grid>
                    </Center>

            {/* <Grid backgroundColor="#212529" mt="30px" 
            h="500"
            templateColumns={{base:'repeat(1, 1fr)',
            md:'repeat(2, 1fr)',
            lg:'repeat(2, 1fr)'
            }} gap={7}>

                <Box borderRadius={10} w='100%' h='500'>
                    <Text padding="5" color="white" textAlign="center">MORE THAN 25+ YEARS EXPERIENCE</Text>
                    <Heading padding="5" color="white" textAlign="center">MAKE YOUR CAR FEEL LIKE A BRAND NEW ONE</Heading>
                    <Text padding="5" textAlign="center" color="white">Globally maintain high payoff collaboration and idea sharing after viral solution leading are edge
                         mindshare rather than premier testing pursue professional customer service 
                         revolutinary services...
                    </Text>
                    <Center>
                    <Flex gap="5" padding="5">
                          <Image src="https://angfuzsoft.com/wordpress/mechon/wp-content/themes/mechon/assets/img/icon/feature_1_1.svg"></Image>
                            <Heading size="md" color="white">PROVIDE SKILLS <br /> SERICES</Heading>
                          <Image src="https://angfuzsoft.com/wordpress/mechon/wp-content/themes/mechon/assets/img/icon/feature_1_2.svg"></Image>
                            <Heading size="md" color="white">URGENT SUPPORT FOR CLIENTS</Heading>
                    </Flex>
                    </Center>
                </Box>
               
                <Box   display="flex"  borderRadius={10} h='500'>
                    <Image padding="5" w='100%' h={[500, 500, 500]} src="https://angfuzsoft.com/wordpress/mechon/wp-content/themes/mechon/assets/img/normal/about_1.jpg"></Image>
                </Box>
                
            </Grid> */}
            <br />
            <Footer/>
            </Box>
        }
        </Box> 
    );
}

export default ContactUs;
