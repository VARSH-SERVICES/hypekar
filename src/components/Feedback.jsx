import { Heading, Center, Spinner, Flex, Box, useColorModeValue, Stack, Button, Input, Textarea  } from '@chakra-ui/react';
import React, {useState, useEffect} from 'react';
import FeedbackForm from './FeedbackForm';

const Feedback = () => {

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
      setLoading(true) // After entering the application loading should be true
          setTimeout(()=>{ 
              setLoading(false) // After 4 seconds loading should be false
      },1000) // Loading indicator will be appeared in UI for 4 seconds.
    },[])

    return (
        <Box bg={useColorModeValue('gray.200', 'gray.800')} h="800px">
             {/* {
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
            : */}
            <Heading textAlign={"center"}>FEEDBACK</Heading>
            {/* <Box border ="1px solid red">
                <Heading textAlign={"center"}>Give your valuable feedback, we can improve our service on your feedback</Heading>
            </Box> */}
            {/* <Stack spacing={15} direction='column' h="800px"> */}
                <Heading  textAlign={"center"}>Give your valuable feedback, we can improve our service on your feedback</Heading>
                {/* <Center>
                    <Box borderRadius="10" w="30%" h="300px" bg="white" border="1px solid red">
                        <Input bg="white" placeholder='enter your email ID'></Input>
                        <Textarea bg="white"  placeholder='Description' />
                        <Center bg="white">
                            <Button w="200px">SUBMIT</Button>
                        </Center>
                        
                    </Box>
                </Center> */}
              
                  
                        <FeedbackForm/>
                   
                    
              
            {/* </Stack> */}
            {/* } */}
        </Box>
    );
}

export default Feedback;
