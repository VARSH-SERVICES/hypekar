import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Box,
    Input,
    Stack,
    useColorModeValue,
    HStack,
    Center,
    Text,
    Avatar,
    AvatarBadge,
    IconButton,
    Spinner,
    
  } from '@chakra-ui/react';
  // import {Spinner}
  import { Link, Navigate } from 'react-router-dom';
  import { SmallCloseIcon } from '@chakra-ui/icons';
  import { useState, useEffect } from 'react';
  import axios from 'axios';
  import { GameStateContext } from "./context/Context";
  import { useContext } from 'react'
  import { useNavigate } from 'react-router-dom';
  
  export default function SignIn() {

    // This object is for username and password
    const initialState = {
        username : "",
        password : ""
    }

    

    const {email, setEmail, userDetails, setUserDetails} = useContext(GameStateContext)

    const navigate = useNavigate()

    const [text, setText] = useState(initialState);
    
    const isNullish = Object.values(text).every(value => {
        if (value === "") {
          return true;
        }
        return false;
      });
           
    const handleSubmit = (e) =>{
        const {id, value} = e.target;
        setText({...text, [id]:value});
     };

    // console.log(text)
     const [token, setToken] = useState("")

    // this function I posted all the data from the signin fileds.
    const loginUser = async() =>{
        if(isNullish==true){
            alert("please enter the username and password")
        }
        else{
        await axios.post("https://hypekar-backend.herokuapp.com/login/",text)
        .then((Response)=> {
          setUserDetails(Response.data)
          alert(Response.data.massage)
          setEmail(Response.data.email) // here I getting the email from the database and set that in the email
         } )
        }
    }

    // If user logged in then, I will get email of that user.
    // If email is there, then it will be redirect to the homepage. 
    if(email.length > 0){
      navigate("/") //here I navigated the homepage
    }

    // console.log("email is", email)

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
      setLoading(true) // After entering the application loading should be true
          setTimeout(()=>{ 
              setLoading(false) // After 4 seconds loading should be false
      },1000) // Loading indicator will be appeared in UI for 4 seconds.
    },[])

    
    //console.log(text)
    //console.log("token is", token)

    return (

      <>    
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
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          
          <FormControl id="userName">
            <FormLabel fontFamily={"AUDIOWIDE"}>User Icon</FormLabel>
            <Stack direction={['column', 'row']} spacing={6}>
              <Center>
                <Avatar size="xl" src="https://cdn.iconscout.com/icon/free/png-256/laptop-user-1-1179329.png">
                  <AvatarBadge
                    as={IconButton}
                    size="sm"
                    rounded="full"
                    top="-10px"
                    colorScheme="red"
                    aria-label="remove Image"
                  />
                </Avatar>
              </Center>
              <Center w="full">
                <Heading w="full" fontFamily={"AUDIOWIDE"}>User Login</Heading>
              </Center>
            </Stack>
          </FormControl>
          <FormControl id="username" isRequired>
            <FormLabel fontFamily={"Euphemia UCAS"}>User name</FormLabel>
            <Input
              onChange={handleSubmit}
              placeholder="UserName"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel fontFamily={"Euphemia UCAS"}>Password</FormLabel>
            <Input
            onChange={handleSubmit}
              placeholder="password"
              _placeholder={{ color: 'gray.500' }}
              type="password"
            />
          </FormControl>
          <Stack spacing={6} direction={['column', 'row']}>
           
            <Button
              onClick={loginUser}
              bg={'blue.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'blue.500',
              }} fontFamily={"Euphemia UCAS"}>
              Submit
            </Button>
          </Stack>
            <Text fontFamily={"Euphemia UCAS"}>new user?</Text>
            <Link to="/signup">
              <Text _hover={{ fontWeight: 'semibold',  color: 'blue' }}
             fontFamily={"Euphemia UCAS"}>click here to register</Text>
            </Link>
        </Stack>
      </Flex>
      }
    </>

    );
  }