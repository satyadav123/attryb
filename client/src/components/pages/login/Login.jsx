import React, { useState } from 'react';
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

import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const storeUser = JSON.parse(localStorage.getItem("user_data")) || [];
        if (storeUser && (storeUser.email === email) && storeUser.password === password) {
            toast("login sucessfully")
            navigate("/add-oem", { state: { password, email } })
        } else {
            // Invalid login credentials, display error message
            toast('Invalid credentials');
        }
            
    
       
        console.log(password,email)
        
    //navigate("/add-oem", { state: { password, email } })
            
    };

    return (
      
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('black.50', 'black.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                    <Text fontSize={'lg'} color={'black.600'}>
                        <Link color={'red.400'}></Link> 
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('pink', 'black.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Link color={'black.400'}>Create Account </Link>
                            </Stack>
                            <Button onClick={handleSubmit}
                                bg={'red.600'}
                                color={'white'}
                                _hover={{
                                    bg: 'red.500',
                                }}>
                                Sign in
                            </Button>
                            <ToastContainer/>
                        </Stack>
                    </Stack>
                </Box>
                <ToastContainer/>
            </Stack>
           
        </Flex>
    );
}

export default Login