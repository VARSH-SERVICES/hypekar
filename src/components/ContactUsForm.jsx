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

    // Below is the object that contains all the fields.
    const initialState = {
        firstName : "",
        lastName : "",
        mobileNumber : "",
        type : ""
    }

    // Below I have taken one state and I initialized to initialState.
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

      // Below code is for checking, object is empty or not.
      const isNullish = Object.values(text).every(value => {
        if (value === "") {
          return true;
        }
        return false;
      });

      // Below function is for posting the data to the API.
      const submitDetails = async() =>{
        if(isNullish==true){
          alert("please enter the data")
        }
        else{
           await axios.post("https://hypekar-backend.herokuapp.com/contact/", text)
          .then(alert("Registered succesfully"))
          .then(setText({firstName : "", name : "", lastName : "", mobileNumber : "", type : ""}))
         
       }
      }

      // console.log("text is", text)
  
    return (
      // Below code is for designing
      <Flex
        minH={'30vh'}
        align={'left'}
        justify={'left'}
      >
         <Stack  ms={230} mt={5}>
          <Box rounded={'lg'}
           bg={"orange"}
          boxShadow={'lg'}
          h={380}
          p={8}>
            <Heading  textAlign={"center"} color={"white"} fontSize={20}>GET IN TOUCH</Heading>
               
                <HStack mt={6}>
                <Box >
                <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" />
                </Box>
                <Box color={"white"}>
              <h6 >Motor Vehicle Manufacturing</h6>
                          <p > Dehradun, Uttarakhand</p> 
                  
                </Box>
                </HStack>
                <HStack mt={6}>
                  <Box>
                <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" />
                </Box> 
                <Box color={"white"}>  
                       <h6>Phone</h6>
                       <p>251 546 9442
                         <br/> 630 446 8851</p>
                         </Box>
                </HStack>
                      
                 <HStack mt={6}> 
                  <Box>
                    
                  <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" />
                        
                  </Box>
                  <Box color={"white"}>
                  <h6>Email</h6>
                          <p>
                          hypekar@gmail.com
                            {/* <br /> 123@wrappixel.com */}
                          </p>
                  </Box>
                  </HStack>       
                     
                  
                        
                        
                    

          </Box>
        </Stack>
        <Stack mt={5}>
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
                <FormLabel>Enter your query</FormLabel>
               <InputGroup>
                  <Input value={text.type} bg="white" id="type" onChange={handleChange}/>
                </InputGroup> 
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  onClick={submitDetails}
                  loadingText="Submitting"
                  size="lg"
                  bg={'orange'}
                  color={'white'}
                  _hover={{
                    bg: 'orange',
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