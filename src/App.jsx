import { Box, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import SignUp from './components/SignUp';
// import CaptionCarousel from './components/CaptionCarousel';
import MyVehicle from './components/MyVehicle';
import SignIn from './components/SignIn';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AllRoutes from './components/AllRoutes';
import ContactUsForm from './components/ContactUsForm';
import { GameStateContext } from "./components/context/Context";
const App = () => {
  const [email, setEmail] = useState("")
  const [cityName, setCityName] = useState('');
  const [userLogout, setUserLogout] = useState('')
  
  return (
    <Box>
      {/* <MyVehicle/> */}
      {/* <SignUp/> */}
      {/* <SignIn/> */}
      {/* <NavBar/> */}
      {/* <ContactUsForm/> */}
      <GameStateContext.Provider 
       value={{email, setEmail, cityName, setCityName, userLogout, setUserLogout}}>
       <AllRoutes/>
      </GameStateContext.Provider> 
      {/* <Footer/> */}
    </Box>
  );
}

export default App;
