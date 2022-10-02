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
import axios from 'axios';
import { GameStateContext } from "./context/Context";
import { useContext } from 'react'
import { useEffect, useState } from 'react';
  
  export default function MyVehicleForm() {

    const [brand, setBrand] = useState([])

    const {email, setEmail} = useContext(GameStateContext)

    const [text, setText] = useState({
      email : email,
      brand : "",
      model_Name : "",
      fuel_Type : "",
      year_Of_Model : "",
      vehicle_number : "",
      mobile_number : ""
    })

    useEffect(()=>{
      getBrand()
    },[])

    const getBrand = async(e) => {
      const res = await axios.get("https://apihypekar.herokuapp.com/carbrand/")
      setBrand(res.data)
      const {id, value} = e.target
      setText({...text, [id] : value})
    }

    //console.log("my car brand is",brand)
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
      const res = await axios.get(`https://apihypekar.herokuapp.com/carmodel?brand=${model}`)
      setTotalModel(res.data)
    } 
    
    // console.log("model is", model)
    // console.log("total is",totalModel)
    const handlChange2 = (e) => {
      const {id, value} = e.target
      if(e.target == mobile_number || e.target == year_Of_Model){
        setText({...text, [id] : +value})
      } 
      else{
        setText({...text, [id] : value})
      }
    }

    //console.log(text)

    const submitDetails = async() =>{
      await axios.post("https://apihypekar.herokuapp.com/carform/", text)
      .then(alert("submitted successfully"))
      setText({brand : "", model_Name : "", fuel_Type : "", year_Of_Model : ""
      , vehicle_number : "", mobile_number : ""})
    }

    
    
    

    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Upload Your Vehicle Details</Heading>
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
              <Select value={text.model_Name} id="model_Name" onChange={handlChange} >
                {
                  totalModel.map((e)=>(
                    <option>{e.model_name}</option>
                  ))
                }
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Select Fuel Type</FormLabel>
              <Select value={text.fuel_Type} id="fuel_Type" onChange={handlChange2} >
                <option value='Fuel'>Fuel Type</option>
                <option value='Desiel'>Desiel</option>
                <option value='Petrol'>Petrol</option>
              </Select>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Year Of Model</FormLabel>
              <Input value={text.year_Of_Model} onChange={handlChange2} id="year_Of_Model"></Input>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Vehicle Number</FormLabel>
              <Input value={text.vehicle_number} onChange={handlChange2} id="vehicle_number"></Input>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Mobile Number</FormLabel>
              <Input value={text.mobile_number} type="number" onChange={handlChange2} id="mobile_number"></Input>
            </FormControl>
            <Stack spacing={6}>
              <Button onClick={submitDetails} colorScheme={'blue'} variant={'solid'}>
                SUBMIT
              </Button>
              <Button>show</Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'fill'}
            src={
              'https://i.pinimg.com/550x/42/64/14/426414c97264657bebb33d11a0205c04.jpg'
            }
          />
        </Flex>
      </Stack>
    );
  }