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
export default function NavBar2() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const {email, setEmail, userLogout} = useContext(GameStateContext);

  console.log("navbar email is", email)

  //const arr = [1,2,3];
  
  console.log("navbar userlogout", userLogout.length)

  const getLogout = async() => {
    await axios.get("https://apihypekar.herokuapp.com/logout/")
    .then(Response=>alert(Response.data.massage))
    setEmail("")
   }

  return (
    <>
      <Box bg='#FFFAF0' px={4}>
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
                  <Image  borderRadius={10} w="100px" src= "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Nexon/7384/1614326304397/front-left-side-47.jpg?impolicy=resize&imwidth=480"></Image>
              </Box>
            </Link>
            <Heading size="md">HypeKar</Heading>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
              <Link to="/">
                <Button backgroundColor="#FFFAF0">HOME</Button>
              </Link>
              <Link to="/services">
                <Button backgroundColor="#FFFAF0">SERVICES</Button>
              </Link>
              <Link to="/about"> 
                <Button backgroundColor="#FFFAF0">ABOUT US</Button>
              </Link>
              <Link to="/contact">
                <Button backgroundColor="#FFFAF0">CONTACT US</Button>
              </Link>
            </HStack>
          </HStack>
          
          {/* <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <Link to="/login">
                  <MenuItem>Login</MenuItem>
                </Link>
                  <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex> */}
         
              {
                email.length == 0 ?
                <Link to="/login"> 
                <Button backgroundColor="#FFFAF0">SIGNUP/SIGNIN</Button>
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
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
              <Link to="/">
              <Button >HOME</Button>
              </Link>
              <Link to="/services">
              <Button>SERVICES</Button>
              </Link>
              <Link to="/about">
              <Button>ABOUT US</Button>
              </Link>
              <Link to="/contact">
              <Button>CONTACT US</Button>
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

