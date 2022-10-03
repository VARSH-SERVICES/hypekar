import {Grid, GridItem, Skeleton, Heading, Spinner, Center, Image,  List,
    ListItem,
    ListIcon,
    Button,
    OrderedList,
    ScaleFade,
    Flex,
    useColorModeValue,
    
    UnorderedList,
    Box,
    transition,
   
 } from '@chakra-ui/react';
import { transform } from 'framer-motion';
import React, {useState, useEffect, useRef} from 'react';
import { useInViewport } from "react-in-viewport";
import { Link } from 'react-router-dom';
import { GameStateContext } from "./context/Context";
import { useContext } from 'react'
import useGeoLocation from './UserLocation';
import axios from 'axios';
import Footer from './Footer';

const Services = () => {

    const {email, cityName, setCityName, } = useContext(GameStateContext)

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
      setLoading(true) // After entering the application loading should be true
          setTimeout(()=>{ 
              setLoading(false) // After 4 seconds loading should be false
      },1000) // Loading indicator will be appeared in UI for 4 seconds.
    },[])

    console.log("email of service is", email.length)

    const location = useGeoLocation() 

    

   // console.log("location is", location.coordinates.lat)
    
    //console.log("items", items)

    
        
    

    const city = async() =>{
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&appid=953d0a41d973f5ef36e25750b927381f`)
        setCityName(res.data.name)
        //console.log("city details",res.data)
    } 
    city ()
    console.log("city name", cityName)

    return (
        <Box >
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
                 <Box>                
                 <Heading textAlign={"center"}>Our Services</Heading>
                 <br />
                 <Heading size="lg" padding="5" textAlign={"left"}>car services in {cityName}
                 <br />
                 <span><Heading size="sm" color="RGBA(0, 0, 0, 0.64)"> Get discounted periodic periodic car service and repair, wheel care, cashless insurance.</Heading></span> 
                 </Heading>
                
                <Grid templateColumns={{base:'repeat(1, 1fr)',
                md:'repeat(2, 1fr)',
                lg:'repeat(3, 1fr)'
                }} gap={6}>
                    <GridItem _hover={{
                    transform: 'scale(1.2)',
                  }} transform="scale(1.0)" transition="0.2s ease-in-out"  w='100%' padding="5" h='340' bg='RGBA(0, 0, 0, 0.06)' >
                    <Heading size="md" textAlign={"center"} color="RGBA(0, 0, 0, 0.64)">PERIODIC SERVICES</Heading>
                        <Flex  justifyContent={"space-around"}>
                        <Image 
                   mt="20px" w="35%"  src="https://cdn-icons-png.flaticon.com/512/4669/4669436.png"></Image>
                        <UnorderedList mt="15px" w="35%">
                            <ListItem><Heading size="sm">Lorem ipsum dolor sit amet</Heading></ListItem>
                            <ListItem>Consectetur adipiscing elit</ListItem>
                            <ListItem>Integer molestie lorem at massa</ListItem>
                            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                        </UnorderedList>
                        </Flex>
                        <Center>
                        {
                            email.length == 0 ? 
                            <Link to="/login">
                                <Button bg="#CBD5E0" mt="20px">Book Now</Button>
                            </Link>
                            :
                            <Link to="/booking">
                                <Button bg="#CBD5E0" mt="20px">Book Now</Button>
                            </Link>
                        }
                        </Center>
                    </GridItem>
                    
                    <GridItem
                     _hover={{
                        transform: 'scale(1.2)',
                      }} transform="scale(1.0)" transition="0.2s ease-in-out"
                    w='100%' padding="5" h='340' bg='RGBA(0, 0, 0, 0.06)'>
                    <Heading size="md" textAlign={"center"} color="RGBA(0, 0, 0, 0.64)">AC SERVICES</Heading>
                        <Flex  justifyContent={"space-around"} >
                         <Image mt="15px" w="35%" src="https://cdn-icons-png.flaticon.com/512/803/803913.png"></Image>   
                         <UnorderedList mt="15px" w="35%">
                            <ListItem>Lorem ipsum dolor sit amet</ListItem>
                            <ListItem>Consectetur adipiscing elit</ListItem>
                            <ListItem>Integer molestie lorem at massa</ListItem>
                            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                            </UnorderedList>
                        </Flex>
                        <Center>
                        {
                            email.length == 0 ? 
                            <Link to="/login">
                                <Button bg="#CBD5E0" mt="20px">Book Now</Button>
                            </Link>
                            :
                            <Link to="/booking">
                                <Button bg="#CBD5E0" mt="20px">Book Now</Button>
                            </Link>
                        }
                        </Center>   
                    </GridItem>
                     
                    <GridItem
                     _hover={{
                        transform: 'scale(1.2)',
                      }} transform="scale(1.0)" transition="0.2s ease-in-out"
                    w='100%' padding="5" h='340' bg='RGBA(0, 0, 0, 0.06)'>
                    <Heading size="md" textAlign={"center"} color="RGBA(0, 0, 0, 0.64)">WHEEL CARE</Heading>
                        <Flex  justifyContent={"space-around"} >
                        <Image  mt="15px" w="35%" src="https://cdn-icons-png.flaticon.com/512/3233/3233875.png"></Image>   
                        <UnorderedList mt="15px" w="35%">
                            <ListItem>Lorem ipsum dolor sit amet</ListItem>
                            <ListItem>Consectetur adipiscing elit</ListItem>
                            <ListItem>Integer molestie lorem at massa</ListItem>
                            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                        </UnorderedList>
                        </Flex>
                        <Center>
                        {
                            email.length == 0 ? 
                            <Link to="/login">
                                <Button bg="#CBD5E0" mt="20px">Book Now</Button>
                            </Link>
                            :
                            <Link to="/booking">
                                <Button bg="#CBD5E0" mt="20px">Book Now</Button>
                            </Link>
                        }
                        </Center>
                    </GridItem>

                    <GridItem
                     _hover={{
                        transform: 'scale(1.2)',
                      }} transform="scale(1.0)" transition="0.2s ease-in-out"
                    w='100%' padding="5" h='340' bg='RGBA(0, 0, 0, 0.06)'>
                    <Heading size="md" textAlign={"center"} color="RGBA(0, 0, 0, 0.64)">REPAIRS</Heading>
                        <Flex  justifyContent={"space-around"}>
                        <Image mt="15px" w="35%" src="https://cdn-icons-png.flaticon.com/512/1743/1743705.png"></Image>   
                        <UnorderedList mt="15px" w="35%">
                            <ListItem>
                                <Heading size="sm">Lorem ipsum dolor sit amet</Heading>
                            </ListItem>
                            <ListItem>Consectetur adipiscing elit</ListItem>
                            <ListItem>Integer molestie lorem at massa</ListItem>
                            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                        </UnorderedList>
                        </Flex>
                        <Center>
                        {
                            email.length == 0 ? 
                            <Link to="/login">
                                <Button bg="#CBD5E0" mt="20px">Book Now</Button>
                            </Link>
                            :
                            <Link to="/booking">
                                <Button bg="#CBD5E0" mt="20px">Book Now</Button>
                            </Link>
                        }
                        </Center>
                    </GridItem>

                    <GridItem
                     _hover={{
                        transform: 'scale(1.2)',
                      }} transform="scale(1.0)" transition="0.2s ease-in-out"
                    w='100%' padding="5" h='340' bg='RGBA(0, 0, 0, 0.06)'>
                    <Heading size="md" textAlign={"center"} color="RGBA(0, 0, 0, 0.64)">BATTERY SERVICES</Heading>
                        <Flex  justifyContent={"space-around"}>
                        <Image mt="20px" w="35%" src="https://cdn-icons-png.flaticon.com/512/2084/2084219.png"></Image>   
                        <UnorderedList mt="15px" w="35%">
                            <ListItem>Lorem ipsum dolor sit amet</ListItem>
                            <ListItem>Consectetur adipiscing elit</ListItem>
                            <ListItem>Integer molestie lorem at massa</ListItem>
                            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                        </UnorderedList>
                        </Flex>
                        <Center>
                        {
                            email.length == 0 ? 
                            <Link to="/login">
                                <Button bg="#CBD5E0" mt="20px">Book Now</Button>
                            </Link>
                            :
                            <Link to="/booking">
                                <Button bg="#CBD5E0" mt="20px">Book Now</Button>
                            </Link>
                        }
                        </Center>
                    </GridItem>

                    <GridItem
                     _hover={{
                        transform: 'scale(1.2)',
                      }} transform="scale(1.0)" transition="0.2s ease-in-out"
                    w='100%' padding="5" h='340' bg='RGBA(0, 0, 0, 0.06)'>
                    <Heading size="md" textAlign={"center"} color="RGBA(0, 0, 0, 0.64)">ACCESSORIES AND SPARES</Heading>
                        <Flex  justifyContent={"space-around"}>                       
                        <Image mt="20px" w="35%" src="https://cdn-icons-png.flaticon.com/512/3825/3825672.png"></Image>   
                        <UnorderedList mt="15px" w="35%">
                            <ListItem>Lorem ipsum dolor sit amet</ListItem>
                            <ListItem>Consectetur adipiscing elit</ListItem>
                            <ListItem>Integer molestie lorem at massa</ListItem>
                            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                        </UnorderedList>
                        </Flex>
                        <Center>
                        {
                            email.length == 0 ? 
                            <Link to="/login">
                                <Button bg="#CBD5E0" mt="20px">Book Now</Button>
                            </Link>
                            :
                            <Link to="/booking">
                                <Button bg="#CBD5E0" mt="20px">Book Now</Button>
                            </Link>
                        }
                        </Center>
                    </GridItem>

                    <GridItem
                     _hover={{
                        transform: 'scale(1.2)',
                      }} transform="scale(1.0)" transition="0.2s ease-in-out"
                    w='100%' padding="5" h='340' bg='RGBA(0, 0, 0, 0.06)'>
                    <Heading size="md" textAlign={"center"} color="RGBA(0, 0, 0, 0.64)">PREMIUM SERVICES</Heading>
                        <Flex  justifyContent={"space-around"} >
                        <Image mt="20px" w="35%" src="https://cdn-icons-png.flaticon.com/512/4833/4833735.png"></Image>   
                        <UnorderedList mt="15px" w="35%">
                            <ListItem>Lorem ipsum dolor sit amet</ListItem>
                            <ListItem>Consectetur adipiscing elit</ListItem>
                            <ListItem>Integer molestie lorem at massa</ListItem>
                            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                        </UnorderedList>
                        </Flex>
                        <Center>
                        {
                            email.length == 0 ? 
                            <Link to="/login">
                                <Button bg="#CBD5E0" mt="20px">Book Now</Button>
                            </Link>
                            :
                            <Link to="/booking">
                                <Button bg="#CBD5E0" mt="20px">Book Now</Button>
                            </Link>
                        }
                        
                        </Center>   
                    </GridItem>
                </Grid>
                <br />
                <Footer/>
                 </Box>

                
             }
        </Box>
     
    );
}

export default Services;
