import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Input } from '@chakra-ui/react';
import { Button, ButtonGroup,Stack } from '@chakra-ui/react'

const SearchOEM = () => {
    const [data, setData] = useState([]);
    const [search_key, setSearchKey] = useState("");
    const navigate = useNavigate()

    console.log(search_key, "seearch ")
    const getData = async () => {
        try {
            let url = `https://atrryb-backend.onrender.com/buycars/search_oem_detail`;
            const config = {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
            await axios.post(url, { model_name: search_key }, { headers: config }).then((res) => {
                console.log(res?.data?.data, "res")
                if (res) {
                    setData(res?.data?.data)
                }
            })

        } catch (error) {
            console.log(error);
        }

    }

    const handleClick = () => {
        navigate("/addcar")
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            <div>
                <h1>Search OEM</h1>
            </div>
            <div>
                <div>
                    <Input type="text"
                        style={{
                            width:"30%"
                        }}
                        placeholder='Search OEM' onChange={(e) => setSearchKey(e.target.value)} />
                </div>
                <br />
                <Stack spacing={4} direction='row' align='center'>
                    <Button colorScheme='teal' size='md' onClick={getData}>
                        Search
                    </Button>
                    <Button colorScheme='teal' size='lg' onClick={handleClick}>
                        Add Second Hand Car Detail
                    </Button>
                </Stack>
            </div>
            <div>
                {data?.map((value) => {
                    return (
                        <div>
                            <h3>Model Name : {value?.model_name}</h3>
                            <br />
                            <h3>Year Of Model :{value?.year_of_model}</h3>
                            <br />
                            <h3>price_of_new_vehicle :{value?.price_of_new_vehicle}</h3>
                            <br />
                            <h3>available_colors :{value?.available_colors}</h3>
                            <br />
                            <h3>mileage :{value?.mileage} per/ltr</h3>
                            <br />
                            <h3>power :{value?.power} per/BPH</h3>
                            <br />
                            <h3>max_speed :{value?.max_speed} KM/HOUR</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SearchOEM;