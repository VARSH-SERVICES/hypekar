import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
  import { GameStateContext } from "./context/Context";
  import React,{ useContext, useState, useEffect } from 'react'
  import { axios } from 'axios';

  export default function UserDetails() {
    const {email, setEmail,userCarDetails, userDetails} = useContext(GameStateContext)

    const [data, setData] = useState([])

        // useEffect(()=>{
        //   getData()
        // },[])

        // const getData = async() => {
        //     const res = await axios.get(`https://apihypekar.herokuapp.com/mycardata?email=${email}`)
        //     console.log(res)
        // }


    console.log("car data total", userCarDetails)

    return (
      <Container padding="5"overflow={"scroll"} h="500px">
        <SimpleGrid >
          <Stack h="500px">
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                Welcome to HypeKar {userDetails.first_name} {userDetails.last_name}
              </Heading>
            </Box>
  
            <Stack
             
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              {/* <VStack>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                  {userDetails.last_name}
                </Text>
                <Text fontSize={'lg'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                  maxime modi nam officiis porro, quae, quisquam quos
                  reprehenderit velit? Natus, totam.
                </Text>
              </VStack> */}
              <br />
              <br />  
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  More Details
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Email</ListItem>
                    <ListItem>UserName</ListItem>{' '}
                    
                  </List>
                  <List spacing={2}>
                    <ListItem>{userDetails.username}</ListItem>
                    <ListItem>{userDetails.email}</ListItem>
                  
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Cars you have serviced in the HypeKar
                </Text>
                
              {
                userCarDetails.length > 0 ?
                
                userCarDetails.map((e)=>(
                  <>
                  <List spacing={2}>
                  <ListItem>
                    BRAND : {e.brand}
                  </ListItem>
                </List>
                 <List spacing={2}>
                 <ListItem>
                   MODEL {e.model_Name}
                 </ListItem>
               </List>
               </>
                ))
                :
                console.log(null)
              }
               
              </Box>
            </Stack>
  
            {/* <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Add to cart
            </Button> */}
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }