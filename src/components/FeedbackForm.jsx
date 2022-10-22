
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Textarea,
  Input,
  Link,
  Stack,
  Image,
  Select,
  Box,
} from '@chakra-ui/react';
import axios from 'axios';
import { GameStateContext } from './context/Context';
import React, {useState, useEffect, useContext} from "react"

export default function Feedback() {

  

  // Below line is email from the gamestate context
  const {email, setEmail} = useContext(GameStateContext)

    // I declared the state and initialized to the fields.  
    const [text, setText] = useState({
        email : email, //here I declared the email dynamically
        description : "",
        rating : ""
    })
    // console.log("feedback email", email)

     // Below function is for storing all the fileds for the input.
    const handleChange = (e) => {
        const {id, value} = e.target;
        if(e.target == rating){
            setText({...text, [id] : +value})
        }
        else{
            setText({...text, [id] : value})
        }
    }

  
    // Below function is for posting the feeback to the API
    const feedbackSubmit = async() => {
      if(text.description.length == 0 || text.rating.length == 0){
        alert("please enter the data")
      }
      else{
       const {data}= await axios.post("https://hypekar-backend.herokuapp.com/feedback/", text)
        .then(alert("submitted successfully"))
        .then(setText({description : "", rating : ""}))
      // const {data}= await axios.post("https://hypekar-backend.herokuapp.com/feedback/", text)
      // console.log(data,"ddqq");
      

    }
  }

    // console.log("text is", text)
  return (

    // Below whole code is for designing. 
    <Flex  align={'center'}
        justify={'center'}
       mt={50}   minH={'100vh'}>
        <Stack>
        {/* <Box  h={500} >
        <img src="https://media.istockphoto.com/photos/customer-review-satisfaction-feedback-survey-concept-rating-service-picture-id1386241242?b=1&k=20&m=1386241242&s=170667a&w=0&h=eSdg_oWKms6jn9EFncmzb9Y_tPgtDAMCOV3ehbcJWFM=" alt="" />
        </Box> */}
        </Stack>
      
    <Stack  w={500}  rounded={'lg'}
        
          boxShadow={'lg'}
         >
      <Box >
        <img src="https://media.istockphoto.com/photos/customer-review-satisfaction-feedback-survey-concept-rating-service-picture-id1386241242?b=1&k=20&m=1386241242&s=170667a&w=0&h=eSdg_oWKms6jn9EFncmzb9Y_tPgtDAMCOV3ehbcJWFM=" alt="" height={100}  />
        </Box>
      <Flex  mt={5} align={'center'}
        justify={'center'} >
        <Stack  spacing={4} w={'full'} maxW={'md'}>
          <Heading fontFamily={"AUDIOWIDE"} fontSize={'2xl'}>Give your Feedback</Heading>
          <FormControl id="email">
            <FormLabel fontFamily={"AUDIOWIDE"}>Feedback</FormLabel>
            <Textarea value={text.description} id="description" onChange={handleChange} type="email" />
          </FormControl>
          <FormControl>
            <FormLabel fontFamily={"AUDIOWIDE"}>Rating</FormLabel>
            <Select id="rating" value={text.rating} onChange={handleChange}>
              <option value="1">Choose your Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Select>
          </FormControl>
          <Stack >
          
            <Button colorScheme={'orange'}  onClick={feedbackSubmit} style={{marginBottom:"50px"}} >
              SUBMIT
            </Button>
          </Stack>
        </Stack>
      </Flex>

    </Stack>
    </Flex>
  );
}