import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import axios from 'axios';

  export default function ContactUsForm() {
    const [showPassword, setShowPassword] = useState(false);

    const initialState = {
        firstName : "",
        lastName : "",
        mobileNumber : "",
        type : ""
    }
    const [text, setText] = useState(initialState)

    let config = {
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
          }
        }

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

      const submitDetails = async() =>{
        if(isNullish==true){
          alert("please enter the data")
        }
        else{
           await axios.post("https://hypekarapi.herokuapp.com/contact/", text)
          .then(alert("Registered succesfully"))
          .then(setText({firstName : "", name : "", lastName : "", mobileNumber : "", type : ""}))
         
       }
      }

      console.log("text is", text)
  
    return (
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
            <Stack fontFamily={"Euphemia UCAS"} spacing={4}>
              <HStack>
                <Box >
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input value={text.firstName} bg="white" id="firstName" onChange={handleChange} type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input value={text.lastName}  bg="white" id="lastName" onChange={handleChange} type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Mobile Number</FormLabel>
                <Input value={text.mobileNumber} bg="white" id="mobileNumber" onChange={handleChange} type="number" max="10" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Type</FormLabel>
               <InputGroup>
                  <Input value={text.type} bg="white" id="type" onChange={handleChange}/>
                </InputGroup> 
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
    );
  }