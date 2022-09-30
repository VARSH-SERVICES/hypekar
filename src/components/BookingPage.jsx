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
import CaptionCarousel from './CaptionCarousel';
import {Calendar} from 'react-calendar'
import  {TimeBooking}  from './TimeBooking';
import { GameStateContext } from "./context/Context";
import { useContext } from 'react'

  export default function BookingPage() {

    const {email, setEmail} = useContext(GameStateContext)

    const [brand, setBrand] = useState([])

    const [dateState, setDateState] = useState("")
    
    const changeDate = (e) => {
        setDateState(e)
      }

    const newDate = moment(dateState).format('MMMM Do YYYY')

    const [check, setCheck] = useState("")

    const checking = e => {
        if (e.target.checked) {
          setCheck(text.customer_address)
         
        } 
      };

    const [text, setText] = useState({
      email : "akhilesh@gmail.com",
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
   

    useEffect(()=>{
      getBrand()
    },[])

    const getBrand = async(e) => {
      const res = await axios.get(`https://2bbe-103-148-62-156.in.ngrok.io/mycarbrand?email=${email}`)
      setBrand(res.data)
      const {id, value} = e.target
      setText({...text, [id] : value})
    }

    const [model, setModel] = useState("a")

    const [totalModel, setTotalModel] = useState([])

    const handlChange = async(e) =>{
      setModel(e.target.value)
      const {id, value} = e.target
      setText({...text, [id] : value})
    }

    useEffect(()=>{
      getData()
    },[model])

    const getData = async() => {
      const res = await axios.get("https://2bbe-103-148-62-156.in.ngrok.io/carmodel")
      setTotalModel(res.data)
      //console.log("res",res.data)
    } 

    
    
    // console.log("model is", brand)
    console.log("total is",totalModel)

    const handlChange2 = (e) => {
        const {id, value} = e.target
        setText({...text, [id] : value})
    }

    console.log(text)

    const submitDetails = async() =>{
      await axios.post("https://2bbe-103-148-62-156.in.ngrok.io/book/", text)
      .then(alert("submitted successfully"))
      setText({brand : "", model_Name : "", fuel_Type : "", year_Of_Model : ""
      , vehicle_number : "", mobile_number : ""})
    }

    //const [check, setChecked] = useState("")
    
    const laptopPrice = 10;

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
          name: "Pay with akhilesh",
          description: "Thanks for purchasing",
          image:
            "https://mern-blog-akky.herokuapp.com/static/media/logo.8c649bfa.png",
    
          handler: function (response) {
            alert(response.razorpay_payment_id);
            alert("Payment Successfully");
          },
          prefill: {
            name: "code with akky",
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

            {/* <Checkbox
            onChange={checking}
            >Same address as customer address</Checkbox> */}
            
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
            {
                text.service_type.length > 0 ?
                <Heading size="md">Booking charge is : 250/-</Heading>
                :
                console.log(null)
            }

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
           
                        
            {/* <TimeBooking/> */}

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
              <Button  onClick={()=>{ displayRazorpay(laptopPrice); submitDetails() }} colorScheme={'blue'} variant={'solid'}>
                SUBMIT
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} padding="5" w={[385,600,150]} >
          {/* <Image
            alt={'Login Image'}
            objectFit={'fill'}
            src={
              'https://i.pinimg.com/550x/42/64/14/426414c97264657bebb33d11a0205c04.jpg'
            }
          /> */}
          <CaptionCarousel/>
        </Flex>
      </Stack>
      }
      </>
    );
  }