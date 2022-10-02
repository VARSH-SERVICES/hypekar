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

  //const arr = [1,2,3];
  
  console.log("navbar userlogout", userLogout.length)

  const getLogout = async() => {
    await axios.get("https://apihypekar.herokuapp.com/logout/")
    .then(Response=>alert(Response.data.massage))
    setEmail("")
   }
   console.log("email after login", email)

  return (
    <>
      <Box bg='#212529' px={4}>
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
            <Heading size="md" color="white">HypeKar</Heading>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
              <Link to="/">
                <Button backgroundColor="#212529;" color="white">HOME</Button>
              </Link>
              <Link to="/services">
                <Button backgroundColor="#212529;" color="white">SERVICES</Button>
              </Link>
              <Link to="/about"> 
                <Button backgroundColor="#212529;" color="white">ABOUT US</Button>
              </Link>
              <Link to="/contact">
                <Button backgroundColor="#212529;" color="white">CONTACT US</Button>
              </Link>
              
              {
                email.length > 0 ?
                <Link to="/myvehicle"> 
                <Button backgroundColor="#212529;" color="white">MY VEHICLE</Button>
                </Link>
                :
                console.log(null)
              }

              {/* {
                userLogout.length > 0 ? */}
                <Button  display="none"  backgroundColor="#212529;" color="white">MY VEHICLE</Button>
                {/* :
                console.log(null)
              } */}
             
             {
                email.length > 0 ?
                <Link to="/feedback"> 
                <Button backgroundColor="#212529;" color="white">FEEDBACK</Button>
                </Link>
                :
                console.log(null)
              }
          
            </HStack>
          </HStack>
          
         
         
              {
                email.length == 0 ?
                <Link to="/login"> 
                <Button backgroundColor="#212529;" color="white">SIGNUP/SIGNIN</Button>
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
              <Button backgroundColor="#212529;" color="white">HOME</Button>
              </Link>
              <Link to="/services">
              <Button backgroundColor="#212529;" color="white">SERVICES</Button>
              </Link>
              <Link to="/about">
              <Button backgroundColor="#212529;" color="white">ABOUT US</Button>
              </Link>
              <Link to="/contact">
              <Button backgroundColor="#212529;" color="white">CONTACT US</Button>
              </Link>
            
              {
                email.length > 0 ?
                <Link to="/myvehicle"> 
                <Button backgroundColor="#212529;" color="white">MY VEHICLE</Button>
                </Link>
                :
                console.log(null)
              }
               
             
               {
                email.length > 0 ?
                <Link to="/feedback"> 
                <Button backgroundColor="#212529;" color="white">FEEDBACK</Button>
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

// import { ReactNode } from 'react';
// import {
//   Box,
//   Flex,
//   Avatar,
//   HStack,
//   IconButton,
//   Button,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuDivider,
//   useDisclosure,
//   useColorModeValue,
//   Stack,
// } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
// import { Link } from 'react-router-dom';

// const Links = ['Dashboard', 'Projects', 'Team'];

// // const NavLink = ({ children }) => (
// //   <Link
// //     px={2}
// //     py={1}
// //     rounded={'md'}
// //     _hover={{
// //       textDecoration: 'none',
// //       bg: useColorModeValue('gray.200', 'gray.700'),
// //     }}
// //     href={'#'}>
// //     {children}
// //   </Link>
// // );

// export default function NavBar() {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <>
//       <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
//         <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
//           <IconButton
//             size={'md'}
//             icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//             aria-label={'Open Menu'}
//             display={{ md: 'none' }}
//             onClick={isOpen ? onClose : onOpen}
//           />
//           {/* <HStack spacing={8} alignItems={'center'}>
//             <Box>Logo</Box>
//             <HStack
//               as={'nav'}
//               spacing={4}
//               display={{ base: 'none', md: 'flex' }}>
//               {Links.map((link) => (
//                 <NavLink key={link}>{link}</NavLink>
//               ))}
//             </HStack>
//           </HStack> */}
//               <Button >HOME</Button>
//               <Link to="services"> 
//                   <Button>SERVICES</Button>
//               </Link>
//               <Button>ABOUT US</Button>
//               <Button>CONTACT US</Button>
//               <Button>MY VEHICLE</Button>
//               <Button>FEEDBACK</Button>
//           <Flex alignItems={'center'}>
//             <Menu>
//               <MenuButton
//                 as={Button}
//                 rounded={'full'}
//                 variant={'link'}
//                 cursor={'pointer'}
//                 minW={0}>
//                 <Avatar
//                   size={'sm'}
//                   src={
//                     'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
//                   }
//                 />
//               </MenuButton>
//               <MenuList>
//                 <MenuItem>Link 1</MenuItem>
//                 <MenuItem>Link 2</MenuItem>
//                 <MenuDivider />
//                 <MenuItem>Link 3</MenuItem>
//               </MenuList>
//             </Menu>
//           </Flex>
//         </Flex>

//         {isOpen ? (
//           <Box pb={4} display={{ md: 'none' }}>
//             <Stack as={'nav'} spacing={4}>
//               {/* {Links.map((link) => (
//                 <NavLink key={link}>{link}</NavLink>
//               ))} */}

//               <Button >HOME</Button>
//               <Link to="services"> 
//               <Button>SERVICES</Button>
//               </Link>
//               <Button>ABOUT US</Button>
//               <Button>CONTACT US</Button>
//               <Button>MY VEHICLE</Button>
//               <Button>FEEDBACK</Button>
//             </Stack>
//           </Box>
//         ) : null}
//       </Box>
//     </>
//   );
// }