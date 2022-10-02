// import {
//     Flex,
//     Box,
//     FormControl,
//     FormLabel,
//     Input,
//     Checkbox,
//     Stack,
//     Link,
//     Button,
//     Select,
//     Heading,
//     Text,
//     useColorModeValue,
//     Textarea,
//   } from '@chakra-ui/react';
// import axios from 'axios';
// import { useState } from 'react';
// import { GameStateContext } from "./context/Context";
// import { useContext } from 'react'
  
//   export default function FeedbackForm() {

//     const {email, setEmail} = useContext(GameStateContext)

//     const [text, setText] = useState({
//         email : email,
//         description : "",
//         rating : ""
//     })
//     console.log("feedback email", email)

//     const handleChange = (e) => {
//         const {id, value} = e.target;
//         if(e.target == rating){
//             setText({...text, [id] : +value})
//         }
//         else{
//             setText({...text, [id] : value})
//         }
//     }

//     const feedbackSubmit = async() => {
//         await axios.post("https://apihypekar.herokuapp.com/feedback/", text)
//         .then(alert("submitted successfully"))
//     }

//     //console.log("text is", text)
//     return (
//       <Flex
      
        
//         minH={'60vh'}
//         align={'center'}
//         justify={'center'}
//         >
//         <Stack spacing={8} mx={'auto'} maxW={'lg'} py={10} px={6}>
//           <Box
//             rounded={'lg'}
            
//             boxShadow={'lg'}
//             p={20}>
//             <Stack spacing={4}>
//               <FormControl >
//                 <FormLabel>Description</FormLabel>
//                 <Textarea id="description" onChange={handleChange} bg="white"/>
//               </FormControl>
//               <FormControl >
//                 <FormLabel>Rating</FormLabel>
//                 <Select id="rating" onChange={handleChange} bg="white">
//                     <option value="1">select rating</option>
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                     <option value="4">4</option>
//                     <option value="5">5</option>
//                 </Select>
//               </FormControl>
//               <Stack spacing={10}>
//                 <Button
//                 onClick={feedbackSubmit}
//                   bg={'blue.400'}
//                   color={'white'}
//                   _hover={{
//                     bg: 'blue.500',
//                   }}>
//                   SUBMIT
//                 </Button>
//               </Stack>
//             </Stack>
//           </Box>
//         </Stack>
//       </Flex>
//     );
//   }

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

    const feedbackSubmit = async() => {
        await axios.post("https://apihypekar.herokuapp.com/feedback/", text)
        .then(alert("submitted successfully"))
    }

    console.log("text is", text)
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Give your Feedback</Heading>
          <FormControl id="email">
            <FormLabel>Feedback</FormLabel>
            <Textarea value={text.description} id="description" onChange={handleChange} type="email" />
          </FormControl>
          <FormControl>
            <FormLabel>Rating</FormLabel>
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
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://thumbs.dreamstime.com/b/feedback-topic-mobile-tablet-many-light-bulbs-69117421.jpg'
          }
        />
      </Flex>
    </Stack>
  );
}