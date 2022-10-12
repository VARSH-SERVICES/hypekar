import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    
    Image,
    Select,
    Box,
  } from '@chakra-ui/react';
  import {
    Menu,
    MenuButton,
    Center,
    MenuList,
    Spinner,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
import axios from 'axios';
import moment from 'moment'
import { useEffect, useState } from 'react';
import CaptionCarousel from './CaptionCarousel'; // I imported caption carousel here
import {Calendar} from 'react-calendar'
import  {TimeBooking}  from './TimeBooking';
import { GameStateContext } from "./context/Context"; // I imported context here
import { useContext } from 'react' // I i,ported useContext from react
import { useNavigate } from 'react-router-dom'; // I imported useNavigate from react router dom. this is 
//used for navigate from one component to another component.

  export default function BookingPage() {

    // Below I imported email, userdetails from gamestatecontext. these are states which
    //I declared in the app.js
    const {email, setEmail, userDetails} = useContext(GameStateContext)

    // I have taken a state as a brand. and I initialized with the empty array.
    const [brand, setBrand] = useState([])

    // I declared navigate for useNavigate
    const navigate = useNavigate()

    // I dclared one state for data and declared as a empty.
    const [dateState, setDateState] = useState("")
    
    // below I written function for date.
    const changeDate = (e) => {
        setDateState(e)
      }

    // I written below line for format of date.
    const newDate = moment(dateState).format('MMMM Do YYYY')


    // Below I declared one state and declared it as a object containing all the fields. 
    // you can all the fields for the booking page. 
    const [text, setText] = useState({
      email : email, //Here I am sending email dynamically which is coming from the gamestatecontext.
      // this email is logged in user's. By posting this email along with all the fields, the data is storing 
      // in his particular database
      customer_name : "",
      customer_address : "",
      service_address : "",
      brand : "",
      model : "",
      service_type : "",
      time_slot : ""
    })
    
    text.date = newDate;

    //console.log("calender value is",newDate)

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
      setLoading(true) // After entering the application loading should be true
          setTimeout(()=>{ 
              setLoading(false) // After 4 seconds loading should be false
      },1000) // Loading indicator will be appeared in UI for 4 seconds.
    },[])
   

    // Below I invoked getBrand funcition in the useEffect 
    useEffect(()=>{
      getBrand()
    },[])

    // Below funciton is for fetching all the data from the api which is containing all the brands
    // of the car
    const getBrand = async(e) => {
      const res = await axios.get("https://hypekarapi.herokuapp.com/carbrand")
      setBrand(res.data)
      const {id, value} = e.target
      setText({...text, [id] : value})
    }

    // Below I declared one state for model of the car. 
    const [model, setModel] = useState("")

    // Below I delcared one state for total model of the car
    const [totalModel, setTotalModel] = useState([])

    // Below function is to store the input data to the state
    const handlChange = async(e) =>{
      setModel(e.target.value)
      const {id, value} = e.target
      setText({...text, [id] : value})
    }

    // Below I invoked the getData function in the useEffect
    useEffect(()=>{
      getData()
    },[model])

    // Below getData function is for getting all the models of the selected brand.
    const getData = async() => {
      const res = await axios.get(`https://hypekarapi.herokuapp.com/carmodel?brand=${model}`) // Here i am passing the model dynamically in the API
      setTotalModel(res.data) // I stored all the models to the totalModel state
    } 

    
    //console.log("brand")
    
    // console.log("booking page email is", email)
    // console.log("total is",totalModel)

    // Below I written another function for storing the model and brands of the car
    const handlChange2 = (e) => {
        const {id, value} = e.target
        setText({...text, [id] : value})
    }

    //console.log(text)
   
    // Below I written the function for submitting all the data to the API
    const submitDetails = async() =>{
      if(text.customer_name.length == 0 && text.customer_address.length == 0 && text.service_address.length == 0 && text.time_slot.length == 0 && text.model.length == 0 && text.brand.length == 0){
        alert("please enter the data")
      }
      else{
      displayRazorpay(service_charge) // This is the payment function
      await axios.post("https://hypekarapi.herokuapp.com/book/", text) // Here I am posting all the data to the API
      .then(alert("Booked successfully"))
      .then(setText({brand : "", model_Name : "", fuel_Type : "", customer_address : "", customer_name : "", year_Of_Model : ""
      , vehicle_number : "", mobile_number : "", time_slot : ""})) // here I am making input boxes empty.
     
    }
  }
    const service_charge = 250; // Here I declared service charge for 250/- 

    // this is the razorpay function logic.
    var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "INR",
    
        // These options are needed to round to whole numbers if that's what you want.
        minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });
    
      const loadScript = (src) => {
        return new Promise((resovle) => {
          const script = document.createElement("script");
          script.src = src;
    
          script.onload = () => {
            resovle(true);
          };
    
          script.onerror = () => {
            resovle(false);
          };
    
          document.body.appendChild(script);
        });
      };

      //console.log("booking page user details", userDetails)
    
      const displayRazorpay = async (amount) => {
        const res = await loadScript(
          "https://checkout.razorpay.com/v1/checkout.js"
        );
    
        if (!res) {
          alert("You are offline... Failed to load Razorpay SDK");
          return;
        }
       
        const options = {
          key: "rzp_test_fInDysLRBFwbcb",
          currency: "INR",
          amount: amount * 100,
          name:  userDetails.first_name,
          description: "Thanks for purchasing",
          image:
            "https://mern-blog-akky.herokuapp.com/static/media/logo.8c649bfa.png",
            handler: function (response) {
            alert(response.razorpay_payment_id);
            alert("Payment Successfully");
            navigate("/")
          },
          prefill: {
            name: userDetails.first_name,
          },
        };
    
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

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
      
      // Below whole code is for designing
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Upload Your Vehicle Details</Heading>
            <FormControl id="password">
              <FormLabel>Customer Name</FormLabel>
              <Input value={text.customer_name} onChange={handlChange2} id="customer_name"></Input>
            </FormControl>

            <FormControl>
              <FormLabel>Customer Address</FormLabel>
              <Input value={text.customer_address} onChange={handlChange2} id="customer_address"></Input>
            </FormControl>

            <FormControl>
              <FormLabel>Service Address</FormLabel>
              <Input value={text.service_address} onChange={handlChange2} id="service_address"
              >
              </Input>
            </FormControl>

            <FormControl id="email">
              <FormLabel>Select Brand</FormLabel>
              <Select value={text.brand} id="brand" onChange={handlChange}>
                {
                  brand.length > 0 ?
                  brand.map((e)=>(
                    <option>{e.brand}</option>
                  ))
                  :
                  console.log(null)
                }
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Select Model</FormLabel>
              <Select value={text.model} id="model" onChange={handlChange} >
                {
                  totalModel.length > 0 ?
                  totalModel.map((e)=>(
                    <option>{e.model_name}</option>
                  ))
                  :
                  console.log(null)
                }
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Service Type</FormLabel>
              <Select value={text.service_type} id="service_type" onChange={handlChange2} >
                <option value='Fuel'>Fuel Type</option>
                <option value='basic'>Basic</option>
                <option value='standard'>Standard</option>
                <option value="Premium">Premium</option>
              </Select>
            </FormControl>
           
                <Heading size="md">Booking charge is : 250/-</Heading>
                
            <Calendar onChange={changeDate}/>
            {
                (newDate.length == 0) ?   
                console.log(null)
              :
              <FormControl>
              <FormLabel>Service Date</FormLabel>
                <Input value={newDate}>
                </Input>
              </FormControl>
            }
          
            <FormControl>
              <FormLabel>Time Slot</FormLabel>
              <Select value={text.time_slot} id="time_slot" onChange={handlChange2} >
                <option value='10:00 AM to 11:00 AM'>10:00 AM to 11:00 AM</option>
                <option value='11:00 AM to 12:00 PM'>11:00 AM to 12:00 PM</option>
                <option value='12:00 PM to 1:00 PM'>12:00 PM to 1:00 PM</option>
                <option value="1:00 PM to 2:00PM">1:00 PM to 2:00PM</option>
                <option value='2:00 AM to 3:00 PM'>2:00 PM to 3:00 PM</option>
                <option value='3:00 PM to 4:00 PM'>3:00 PM to 4:00 PM</option>
                <option value="4:00 PM to 5:00PM">4:00 PM to 5:00PM</option>
              </Select>
            </FormControl>

            <Stack spacing={6}>
              <Button  onClick={()=>{submitDetails() }} colorScheme={'blue'} variant={'solid'}>
                SUBMIT
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} padding="5" w={[385,600,150]} >
          <CaptionCarousel/>
        </Flex>
      </Stack>
      }
      </>
    );
  }