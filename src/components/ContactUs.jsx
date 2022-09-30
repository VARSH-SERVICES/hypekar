import { Heading, Text, Center, useColorModeValue, VStack, StackDivider , Flex, HStack, FormControl, FormLabel , Input, InputGroup , Spinner, Button, Box, Grid, Image, Stack } from '@chakra-ui/react';
import React, {useState, useEffect} from 'react';
import ContactUsForm from './ContactUsForm';


const ContactUs = () => {
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
      setLoading(true) // After entering the application loading should be true
          setTimeout(()=>{ 
              setLoading(false) // After 4 seconds loading should be false
      },1000) // Loading indicator will be appeared in UI for 4 seconds.
    },[])
    return (
        <Box>
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
            <Box  bg={useColorModeValue('gray.200', 'gray.800')}>
           
               
                    <Heading padding={3} fontFamily="mono" textAlign={"center"}>GET A CALL FROM US</Heading>
                
               
                    <Heading size="md" fontFamily="mono" textAlign={"center"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</Heading>
                
                {/* <Flex
                    minH={'100vh'}
                    align={'center'}
                    justify={'center'}
                    bg={useColorModeValue('gray.200', 'gray.800')}>
                    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('#B2F5EA')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                        <HStack>
                            <Box>
                            <FormControl id="firstName" isRequired>
                                <FormLabel>First Name</FormLabel>
                                <Input bg="white" id="firstName"  type="text" />
                            </FormControl>
                            </Box>
                            <Box>
                            <FormControl id="lastName">
                                <FormLabel>Last Name</FormLabel>
                                <Input bg="white" id="lastName"  type="text" />
                            </FormControl>
                            </Box>
                        </HStack>
                        <FormControl id="email" isRequired>
                            <FormLabel>Mobile Number</FormLabel>
                            <Input bg="white" id="mobileNumber"  type="number" max="10" />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Type</FormLabel>
                        <InputGroup>
                            <Input bg="white" id="type" />
                            </InputGroup> 
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                            loadingText="Submitting"
                            size="lg"
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}>
                            SUBMIT
                            </Button>
                        </Stack>
                        </Stack>
                    </Box>
                    </Stack>
                </Flex> */}
                <ContactUsForm/>
              
            

            {/* <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
            align='stretch'
            >
            <Box h='40px' bg='yellow.200'>
            <Heading padding={3} fontFamily="mono" textAlign={"center"}>GET A CALL FROM US</Heading>
            
            </Box>
            <Box h='40px' bg='tomato'>
            <Heading size="md" fontFamily="mono" textAlign={"center"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</Heading>

            </Box>
            <Box h='30px' bg='pink.100'>
            <ContactUsForm/>
            </Box>
            </VStack> */}
        
            <Grid mt="30px" 
            templateColumns={{base:'repeat(1, 1fr)',
            md:'repeat(2, 1fr)',
            lg:'repeat(2, 1fr)'
            }} gap={7}>
                <Box borderRadius={10} w='100%' h='200'>

                    {/* <Text textAlign="center">
                        ─────────────────────────────────────────────────
                    </Text> */}
                    {/* <Image w="100%" h={[500, 500, 500]} src="https://thumbs.dreamstime.com/b/worker-uniform-disassembles-vehicle-engine-car-service-station-automobile-checking-inspection-professional-diagnostics-173424972.jpg"></Image> */}
                        {/* <Select mt="50px" bg="blue" w={[390, 400, 600]} placeholder='Select option'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select> */}
                       <Heading padding="5">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                       </Heading>
                </Box>
               
                
                <Box display="flex"  borderRadius={10} w='100%' h='200' border="1px solid red">
                    {/* <Image h={[500, 500, 500]} src="https://thumbs.dreamstime.com/b/auto-car-repair-service-center-mechanic-examining-car-suspension-auto-car-repair-service-center-mechanic-examining-car-suspension-166202482.jpg"></Image> */}
                    {/* <Box w="50%">
                        <Image src="https://imgd.aeplcdn.com/600x337/n/cw/ec/124027/urban-cruiser-hyryder-exterior-right-front-three-quarter-3.jpeg?isig=0&q=75"></Image>
                        <Heading padding={2} size="lg">
                            Barand : Maruti Suzuki
                            <br />
                            Model : Swift Dezire
                        </Heading>
                    </Box>
                    <Box w="50%" ></Box> */}
                    <Center gap="10" padding="5">
                        <Button >abcd</Button>
                        <Button>dhfkds</Button>
                    </Center>
                </Box>
            </Grid>
            </Box>
        }
        </Box> 
    );
}

export default ContactUs;
