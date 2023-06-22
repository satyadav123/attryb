import React, { useState } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
const CreateOEM = () => {

    const formData = {
        model_name: "",
        year_of_model: "",
        price_of_new_vehicle: "",
        available_colors: "",
        mileage: "",
        power: "",
        max_speed: ""
    }

    const [getinput, Setinput] = useState(formData);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        Setinput({ ...getinput, [name]: value })
    };

    console.log(getinput, "ffff")

    const craeteSeat = async () => {
        if (!getinput?.model_name) {
            toast.error("Please Enter Model Name")
        }
        else if (!getinput?.year_of_model) {
            toast.error("Please Enter Seat Number")
        }
        else if (!getinput?.price_of_new_vehicle) {
            toast.error("Please Enter Seat Row Number")
        }
        else {
            try {
                let url = "https://atrryb-backend.onrender.com/buycars/add_oem_detail"
                const config = {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                }

                axios.post(url, getinput, { headers: config }).then((res) => {
                    if (res) {
                        toast.success(res?.data?.message)
                        navigate("/search-oem")
                    }
                }).catch((err) => {
                    console.log(err, "err")
                })
            }
            catch (err) {
                console.log(err, "err-cath")
            }
        }
    }
    console.log(getinput, "ssssss");
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Add OEM Detail</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Model Name</FormLabel>
                            <Input type="text"
                                name='model_name'
                                onChange={handleSubmit}
                                value={getinput?.model_name}
                                placeholder='Enter Model Name'/>
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Year Of Model</FormLabel>
                            <Input type="text"
                                name="year_of_model"
                                onChange={handleSubmit}
                                value={getinput?.year_of_model}
                                placeholder='Enter Model Year' /> 
                        </FormControl>
                        <FormControl >
                            <FormLabel>Price of new vehicle</FormLabel>
                            <Input type="text"
                                name='price_of_new_vehicle'
                                onChange={handleSubmit}
                                value={getinput?.price_of_new_vehicle}
                            placeholder='Enter price of vehicle'/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>availablem colors</FormLabel>
                            <Input type="text"
                                name='available_colors'
                                onChange={handleSubmit}
                                value={getinput?.available_colors}
                                placeholder='Enter availablem colors' />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Mileage</FormLabel>
                            <Input type="text"
                                name='mileage'
                                onChange={handleSubmit}
                                value={getinput?.mileage}
                                placeholder='Enter mileage' />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Power</FormLabel>
                            <Input type="text"
                                name='power'
                                onChange={handleSubmit}
                                value={getinput?.power}
                                placeholder='Enter power' />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Max speed</FormLabel>
                            <Input type="text"
                                name='max_speed'
                                onChange={handleSubmit}
                                value={getinput?.max_speed}
                                placeholder='Enter max speed' />
                        </FormControl>
                        
                        
                        <Button
                            type='button' onClick={craeteSeat}
                            style={{
                                height:"40px",
                                width: "100px",
                                border:"3px solid teal"
                                
                               }}>
                            Submit
                        </Button>
                        <ToastContainer/>
                        </Stack>
                    
                </Box>
            </Stack>
        </Flex>
        
    )
}

export default CreateOEM;