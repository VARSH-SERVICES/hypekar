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

    // this state object is for declaring the key
    const [text, setText] = useState({
      email : email,
      brand : "",
      model_Name : "",
      fuel_Type : "",
      year_Of_Model : "",
      vehicle_number : "",
      mobile_number : ""
    })

    // I invoked getBrand in the useEffect
    useEffect(()=>{
      getBrand()
    },[])

    // In the below function I am getting all the car brands.
    const getBrand = async(e) => {
      const res = await axios.get("https://hypekarapi.herokuapp.com/carbrand/")
      setBrand(res.data)
      const {id, value} = e.target
      setText({...text, [id] : value})
    }

    //console.log("my car brand is",brand)

    //Below state is for the model
    const [model, setModel] = useState("")

    //Below state is for total model, and I have taken it as an empty array
    const [totalModel, setTotalModel] = useState([])

    // Below function is for storing all the fileds for the input.
    const handlChange = async(e) =>{
      setModel(e.target.value)
      const {id, value} = e.target
      setText({...text, [id] : value})
    }

    useEffect(()=>{
      getData()
    },[model])

    // Below function is getting the models of the brand.
    const getData = async() => {
      const res = await axios.get(`https://hypekar-backend.herokuapp.com/carmodel?brand=${model}`)
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
    
    // In the below funciton I am posting whole the data to the backend.
    const submitDetails = async() =>{
      if(text.brand.length == 0 || text.fuel_Type == 0 || text.mobile_number.length == 0 || text.model_Name.length == 0 || text.year_Of_Model.length == 0){
        alert("please enter the data")
      }
      else{
      await axios.post("https://hypekar-backend.herokuapp.com/carform/", text)
      .then(alert("submitted successfully"))
      setText({brand : "", model_Name : "", fuel_Type : "", year_Of_Model : ""
      , vehicle_number : "", mobile_number : ""})
    }
  }

    return (
      // below is for designing
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'} fontFamily={"AUDIOWIDE"}>Upload Your Vehicle Details</Heading>
            <FormControl id="email">
              <FormLabel fontFamily={"AUDIOWIDE"}>Select Brand</FormLabel>
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
              <FormLabel fontFamily={"AUDIOWIDE"}>Select Model</FormLabel>
              <Select  value={text.model_Name} id="model_Name" onChange={handlChange} >
                {
                  totalModel.length > 0 ?
                  totalModel.map((e)=>(
                    <option color="green" value={e.model_name}>{e.model_name}</option>
                  ))
                  :
                  console.log(null)
                }
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel fontFamily={"AUDIOWIDE"}>Select Fuel Type</FormLabel>
              <Select value={text.fuel_Type} id="fuel_Type" onChange={handlChange2} >
                <option value='Fuel'>Fuel Type</option>
                <option value='Desiel'>Desiel</option>
                <option value='Petrol'>Petrol</option>
              </Select>
            </FormControl>
            <FormControl id="password">
              <FormLabel fontFamily={"AUDIOWIDE"}>Year Of Model</FormLabel>
              <Input value={text.year_Of_Model} onChange={handlChange2} id="year_Of_Model"></Input>
            </FormControl>
            <FormControl id="password">
              <FormLabel fontFamily={"AUDIOWIDE"}>Vehicle Number</FormLabel>
              <Input value={text.vehicle_number} onChange={handlChange2} id="vehicle_number"></Input>
            </FormControl>
            <FormControl id="password">
              <FormLabel fontFamily={"AUDIOWIDE"}>Mobile Number</FormLabel>
              <Input value={text.mobile_number} type="number" onChange={handlChange2} id="mobile_number"></Input>
            </FormControl>
            <Stack spacing={6}>
              <Button onClick={submitDetails} colorScheme={'blue'} variant={'solid'}>
                SUBMIT
              </Button>
              
            </Stack>
          </Stack>
        </Flex>
        {/* <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'fill'}
            src={
              'https://i.pinimg.com/550x/42/64/14/426414c97264657bebb33d11a0205c04.jpg'
            }
          />
        </Flex> */}
      </Stack>
    );
  }