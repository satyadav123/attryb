import React, { useState } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios"
import { useNavigate } from "react-router-dom"
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

const CarAdd = () => {

    const formData = {
        image: "",
        title: "",
        description: ""
    }

    const navigate = useNavigate();

    const [getinput, Setinput] = useState(formData);

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        Setinput({ ...getinput, [name]: value })
    };

    const CarDeatails = async () => {
        if (!getinput?.image) {
            toast.error("Please Enter Image")
        }
        else if (!getinput?.title) {
            toast.error("Please Enter Title")
        }
        else if (!getinput?.description) {
            toast.error("Please Enter Description")
        }
        else {
            try {
                let url = "https://atrryb-backend.onrender.com/buycars/add_car_detail"
                const config = {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                }

                axios.post(url, getinput, { headers: config }).then((res) => {
                    if (res) {
                        toast.success(res?.data?.message)
                        navigate("/getcar")
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
                    <Heading fontSize={'4xl'}>Add Car Details</Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Image</FormLabel>
                            <Input type="text"
                                name='image'
                                onChange={handleSubmit}
                                value={getinput?.image} />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Title</FormLabel>
                            <Input type="text"
                                name="title"
                                onChange={handleSubmit}
                                value={getinput?.title} />
                        </FormControl>
                        <FormControl >
                            <FormLabel>Description</FormLabel>
                            <Input type="text"
                                name='description'
                                onChange={handleSubmit}
                                value={getinput?.description} />
                        </FormControl>
                        <Button
                            type='button' onClick={CarDeatails}
                            style={{
                                height: "40px",
                                width: "100px",
                                border: "3px solid teal"

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

export default CarAdd;