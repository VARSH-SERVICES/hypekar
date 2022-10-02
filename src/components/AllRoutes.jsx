import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import BookingPage from './BookingPage';
import ContactUs from './ContactUs';
import Feedback from './Feedback';
import Home from './Home';
import MyVehicle from './MyVehicle';
import NavBar from './NavBar';
import NavBar2 from './NavBar2';
import Services from './Services';
import SignIn from './SignIn';
import SignUp from './SignUp';

const AllRoutes = () => {
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/services" element={<Services/>}></Route>
                <Route path="/about" element={<AboutUs/>}></Route>
                <Route path="/contact" element={<ContactUs/>}></Route>
                <Route path="/myvehicle" element={<MyVehicle/>}></Route>
                <Route path="/feedback" element={<Feedback/>}></Route>
                <Route path="/login" element={<SignIn/>}></Route>
                <Route path="/signup" element={<SignUp/>}></Route>
                <Route path="/booking" element={<BookingPage/>}></Route>
            </Routes>
        </div>
    );
}

export default AllRoutes;
