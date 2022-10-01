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

    const initialState = {
        username : "",
        password : ""
    }

    

    const {email, setEmail} = useContext(GameStateContext)

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

    const loginUser = async() =>{
        if(isNullish==true){
            alert("please enter the username and password")
        }
        else{
        await axios.post("https://apihypekar.herokuapp.com/login/",text)
        //.then(Response=>setToken(Response.data.token))
        .then(Response=>setEmail(Response.data.email))
        .then(setText({username : "", password : ""}))
        
        }
        // if(!email){
        //   alert("wrong credentials")
        // }
        if(email){
          alert("logged in succesfully")
          navigate("/")
        }
    }

    // const redirect = () =>{
      
    // }
    

    console.log("email is", email)

  //   if(token.length!=0){
  //     alert("logged in successully")
  //     //navigate("/homepage")
  //     //console.log("hurrye")
  //  }

   //console.log(token)

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
            <FormLabel>User Icon</FormLabel>
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
                <Heading w="full">User Login</Heading>
              </Center>
            </Stack>
          </FormControl>
          <FormControl id="username" isRequired>
            <FormLabel>User name</FormLabel>
            <Input
              onChange={handleSubmit}
              placeholder="UserName"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
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
              }}>
              Submit
            </Button>
          </Stack>
            <Text>new user?</Text>
            <Link to="/signup">
              <Text _hover={{ fontWeight: 'semibold',  color: 'blue' }}
             >click here to register</Text>
            </Link>
        </Stack>
      </Flex>
      }
    </>

    );
  }