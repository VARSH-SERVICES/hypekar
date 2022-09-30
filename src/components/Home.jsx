import { Heading, Center, Spinner, useColorModeValue, Box } from '@chakra-ui/react';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CaptionCarousel from './CaptionCarousel';
import Footer from './Footer';
import { GameStateContext } from "./context/Context";
import { useContext } from 'react'
  
const Home = () => {
    const [loading, setLoading] = useState(false);

    const {email, setEmail} = useContext(GameStateContext)

    console.log("home email is", email)
    useEffect(()=>{
      setLoading(true) // After entering the application loading should be true
          setTimeout(()=>{ 
              setLoading(false) // After 4 seconds loading should be false
      },1000) // Loading indicator will be appeared in UI for 4 seconds.
    },[])

    useEffect(()=>{
        
            getCar()
        
    },[])

    //axios.defaults.withCredentials = true;

    
        const getCar = async() =>{
            const res = await axios.get(`https://2bbe-103-148-62-156.in.ngrok.io/mycardata?email=${email}`)
             console.log("res is", res)
        }
   
    
    // const getData = async() => {
    //     const res = await axios.get("https://e589-103-148-62-156.in.ngrok.io/mycardata/")
    //     console.log(res)
    // }
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

            <>

            <Box  bg={useColorModeValue('gray.200', 'gray.800')}>
                {/* <Heading textAlign={"center"}>HOME</Heading> */}
                <CaptionCarousel/>    
                <footer/>
            </Box>
            </> 
            }
           
        </Box>
    );
}

export default Home;
