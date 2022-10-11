import { ReactNode, useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  
  IconButton,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
 
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { GameStateContext } from './context/Context';
import { useContext } from 'react';
import { ProfileModel } from './ProfileModel';
import { MdRadioButtonUnchecked } from 'react-icons/md';
import logo from "../file/images/logo.jpeg"
import axios from 'axios';
const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);
// import {Link} from "react-router-dom"
export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const {email, setEmail, userLogout} = useContext(GameStateContext);

  console.log("navbar email is", email)

  console.log("navbar userlogout", userLogout.length)

  const getLogout = async() => {
    await axios.get("https://hypekarapi.herokuapp.com/logout/")
    .then(Response=>alert(Response.data.massage))
    setEmail("")
   }
   console.log("email after login", email)

  return (
    <>
      <Box bg='#808080' px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Link to="/">
              <Box>
                  <Image borderRadius={10} w="80px" src= {logo}></Image>
              </Box>
            </Link>
            <Heading size="md" color="white">HypeKar</Heading>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <Link to="/">
                <Button backgroundColor="#808080;" color="white">HOME</Button>
              </Link>
              <Link to="/services">
                <Button backgroundColor="#808080;" color="white">SERVICES</Button>
              </Link>
              <Link to="/about"> 
                <Button backgroundColor="#808080;" color="white">ABOUT US</Button>
              </Link>
              <Link to="/contact">
                <Button backgroundColor="#808080;" color="white">CONTACT US</Button>
              </Link>
              
              {
                email.length > 0 ?
                <Link to="/myvehicle"> 
                <Button backgroundColor="#808080;" color="white">MY VEHICLE</Button>
                </Link>
                :
                console.log(null)
              }
            
                <Button  display="none"  backgroundColor="#808080;" color="white">MY VEHICLE</Button>
             
             {
                email.length > 0 ?
                <Link to="/feedback"> 
                <Button backgroundColor="#808080;" color="white">FEEDBACK</Button>
                </Link>
                :
                console.log(null)
              }
          
            </HStack>
          </HStack>
    
              {
                email.length == 0 ?
                <Link to="/login"> 
                <Button backgroundColor="#808080;" color="white">SIGNUP/SIGNIN</Button>
                </Link>
                :
                <Link to="/">
                <Button onClick={getLogout}>Logout</Button>
                </Link>
                // <Button backgroundColor="#FFFAF0">PROFILE</Button>
              }


        </Flex>

        {isOpen ? (
          <Box  pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <Link to="/">
              <Button backgroundColor="#808080;" color="white">HOME</Button>
              </Link>
              <Link to="/services">
              <Button backgroundColor="#808080;" color="white">SERVICES</Button>
              </Link>
              <Link to="/about">
              <Button backgroundColor="#808080;" color="white">ABOUT US</Button>
              </Link>
              <Link to="/contact">
              <Button backgroundColor="#808080;" color="white">CONTACT US</Button>
              </Link>
            
              {
                email.length > 0 ?
                <Link to="/myvehicle"> 
                <Button backgroundColor="#808080;" color="white">MY VEHICLE</Button>
                </Link>
                :
                console.log(null)
              }
               
             
               {
                email.length > 0 ?
                <Link to="/feedback"> 
                <Button backgroundColor="#808080;" color="white">FEEDBACK</Button>
                </Link>
                :
                console.log(null)
              }
          
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

