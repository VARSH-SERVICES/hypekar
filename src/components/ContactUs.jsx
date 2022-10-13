
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
            
            // below code is designing part. I adding the data statically. hope you can understand
            <Box>
                <Heading padding={3} fontFamily="AUDIOWIDE" textAlign={"center"}>GET A CALL FROM US</Heading>
                <Heading size="m" fontFamily={"Euphemia UCAS"} textAlign={"center"}>Please fill the form to get your queries solved. We'll contact you soon!!</Heading>
                
                {/* this is the contactusForm component I declared here. this is for  */}
                <ContactUsForm/> 

            <Center>
            {/* <Grid w="90%" templateColumns={{base:'repeat(1, 1fr)',
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
                    </Grid> */}
                    </Center>
            <br />
            
            <Footer/>
            </Box>
        }
        </Box> 
    );
}

export default ContactUs;
