import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Select,
    Heading,
    Text,
    useColorModeValue,
    Textarea,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { GameStateContext } from "./context/Context";
import { useContext } from 'react'
  
  export default function FeedbackForm() {

    const {email, setEmail} = useContext(GameStateContext)

    const [text, setText] = useState({
        email : email,
        description : "",
        rating : ""
    })
    console.log("feedback email", email)

    const handleChange = (e) => {
        const {id, value} = e.target;
        if(e.target == rating){
            setText({...text, [id] : +value})
        }
        else{
            setText({...text, [id] : value})
        }
    }

    const feedbackSubmit = async() => {
        await axios.post("https://c56d-103-148-62-156.in.ngrok.io/feedback/", text)
        .then(alert("submitted successfully"))
    }

    //console.log("text is", text)
    return (
      <Flex
      bg={useColorModeValue('gray.200', 'gray.800')}
        
        minH={'60vh'}
        align={'center'}
        justify={'center'}
        >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={10} px={6}>
          <Box
            rounded={'lg'}
            
            boxShadow={'lg'}
            p={20}>
            <Stack spacing={4}>
              <FormControl >
                <FormLabel>Description</FormLabel>
                <Textarea id="description" onChange={handleChange} bg="white"/>
              </FormControl>
              <FormControl >
                <FormLabel>Rating</FormLabel>
                <Select id="rating" onChange={handleChange} bg="white">
                    <option value="1">select rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </Select>
              </FormControl>
              <Stack spacing={10}>
                <Button
                onClick={feedbackSubmit}
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
    );
  }