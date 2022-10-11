
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
} from '@chakra-ui/react';
import axios from 'axios';
import { GameStateContext } from './context/Context';
import React, {useState, useEffect, useContext} from "react"

export default function Feedback() {

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

    const isNullish = Object.values(text).every(value => {
      if (value === "") {
        return true;
      }
      return false;
    });

    const feedbackSubmit = async() => {
      if(text.description.length == 0 || text.rating.length == 0){
        alert("please enter the data")
      }
      else{
        await axios.post("https://hypekarapi.herokuapp.com/feedback/", text)
        .then(alert("submitted successfully"))
        .then(setText({description : "", rating : ""}))
    }
  }

    console.log("text is", text)
  return (
    <Stack  minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
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
          <Stack spacing={6}>
          
            <Button colorScheme={'blue'} variant={'solid'} onClick={feedbackSubmit}>
              SUBMIT
            </Button>
          </Stack>
        </Stack>
      </Flex>

    </Stack>
  );
}