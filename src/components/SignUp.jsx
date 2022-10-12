import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Center,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    Spinner,
    Icon,
  } from '@chakra-ui/react';
import axios from 'axios';
  import React, {useState, useEffect} from "react"
  import { useNavigate } from 'react-router-dom';
  
  const avatars = [
    {
      name: 'Ryan Florence',
      url: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-b-170811.jpg&fm=jpg',
    },
    {
      name: 'Segun Adebayo',
      url: 'https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-3bbeac5006e9b894545a3519cc23a735.jpg',
    },
    {
      name: 'Kent Dodds',
      url: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Hummer/Hummer-H2/321/1561092676445/front-left-side-47.jpg?impolicy=resize&imwidth=480',
    },
    {
      name: 'Prosper Otemuyiwa',
      url: 'https://m.hondacarindia.com/content/mobile/images/home_banner/june-offer-banner-mobile.jpg',
    },
    {
      name: 'Christian Nwamba',
      url: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/08_19_urus_perf/urus_perf_chooser_m.png',
    },
  ];
  
  export default function SignUp() {
    
    // This is the object of the fields.
    const initialState = {
      first_name : "",
      last_name : "",
      email : "",
      username : "",
      password : ""
  }
  const [text, setText] = useState(initialState)

  const navigate = useNavigate()

  const [loading, setLoading] = useState(false);

    useEffect(()=>{
      setLoading(true) // After entering the application loading should be true
          setTimeout(()=>{ 
              setLoading(false) // After 4 seconds loading should be false
      },1000) // Loading indicator will be appeared in UI for 4 seconds.
    },[])

  const handleChange = (e) =>{
      const {id, value} = e.target;
      setText({...text, [id] : value})
    }

    const isNullish = Object.values(text).every(value => {
      if (value === "") {
        return true;
      }
      return false;
    });


    // Below function is for sending the data to the database. 
    const submitDetails = async() =>{
      if(isNullish==true){
        alert("please enter the data")
      }
      else{
         await axios.post("https://hypekarapi.herokuapp.com/reg/", text)
         .then(Response=>console.log("response is ",Response))
         .then(alert("Registered successfully"))
         .then(setText({first_name : "", last_name : "", email : "", username : "", password: ""}))
         .then(navigate("/login"))
        }
    }

    console.log(text)

    return (
      <>
     
        <Box position={'relative'}>
        <Container
          as={SimpleGrid}
          maxW={'7xl'}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}>
          <Stack spacing={{ base: 10, md: 20 }}>
            <Heading
              lineHeight={1.1}
              fontFamily={"AUDIOWIDE"}
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
              Please SignUp to our HypKar website to experience our service.
            </Heading>
            <Stack direction={'row'} spacing={4} align={'center'}>
              <AvatarGroup>
                {avatars.map((avatar) => (
                  <Avatar
                    key={avatar.name}
                    name={avatar.name}
                    src={avatar.url}
                    size={useBreakpointValue({ base: 'md', md: 'lg' })}
                    position={'relative'}
                    zIndex={2}
                    _before={{
                      content: '""',
                      width: 'full',
                      height: 'full',
                      rounded: 'full',
                      transform: 'scale(1.125)',
                      bgGradient: 'linear(to-bl, red.400,pink.400)',
                      position: 'absolute',
                      zIndex: -1,
                      top: 0,
                      left: 0,
                    }}
                  />
                ))}
              </AvatarGroup>
              <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
                +
              </Text>
              <Flex
                align={'center'}
                justify={'center'}
                fontFamily={'heading'}
                fontSize={{ base: 'sm', md: 'lg' }}
                bg={'gray.800'}
                color={'white'}
                rounded={'full'}
                width={useBreakpointValue({ base: '44px', md: '60px' })}
                height={useBreakpointValue({ base: '44px', md: '60px' })}
                position={'relative'}
                _before={{
                  content: '""',
                  width: 'full',
                  height: 'full',
                  rounded: 'full',
                  transform: 'scale(1.125)',
                  bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                  position: 'absolute',
                  zIndex: -1,
                  top: 0,
                  left: 0,
                }}>
                YOU's
              </Flex>
            </Stack>
          </Stack>
          <Stack
            bg={'gray.50'}
            rounded={'xl'}
            spacing={{ base: 8 }}
            maxW={{ lg: 'lg' }}>
            <Stack spacing={4}>
              <Heading
                color={'gray.800'}
                lineHeight={1.1}
                fontFamily={"AUDIOWIDE"}
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                Join our Website
                <Text
                  as={'span'}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  bgClip="text">
                  !
                </Text>
              </Heading>
              <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
               
              </Text>
            </Stack>
            <Box as={'form'} mt={10}>
              <Stack spacing={4}>
                <Input
                  value = {text.first_name}
                  id= "first_name"
                  onChange={handleChange}
                  placeholder="First Name"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                <Input
                  value = {text.last_name}
                  id="last_name"
                  onChange={handleChange}
                  placeholder="Last Name"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                <Input
                  value = {text.email}
                  id = "email"
                  onChange={handleChange}
                  placeholder="Email"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                <Input
                  value = {text.username}
                  id="username"
                  onChange={handleChange}
                  placeholder="Username"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                <Input
                  value = {text.password}
                  id="password"
                  onChange={handleChange}
                  placeholder="Password"
                  bg={'gray.100'}
                  border={0}
                  type = "password"
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
              </Stack>
              <Button
                onClick={submitDetails}
                fontFamily={'heading'}
                mt={8}
                w={'full'}
                bgGradient="linear(to-r, red.400,pink.400)"
                color={'white'}
                _hover={{
                  bgGradient: 'linear(to-r, red.400,pink.400)',
                  boxShadow: 'xl',
                }}>
                Submit
              </Button>
            </Box>
            form
          </Stack>
        </Container>
      </Box>
     
                
      </>

    );
  }
  
  