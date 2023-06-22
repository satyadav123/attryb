import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "./GetCar.css"
import { useNavigate } from "react-router-dom";

const GetCar = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate()
    const getData = async () => {
        try {
            let url = `https://atrryb-backend.onrender.com/buycars/get_car_detail`
            await axios.get(url).then((res) => {
                console.log(res?.data?.data, "res")
                if (res) {
                    setData(res?.data?.data)
                }
            })

        } catch (error) {
            console.log(error);
        }

    }

    const handleEdit = (id) => {
        navigate("/edit-car", { state: { id } });
    }

    const handleDelete = async (id) => {
        console.log(id,"id--------------delete")
        try {
            let url = "https://atrryb-backend.onrender.com/buycars/delete_car_detail_id";
            const config = {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
            axios.post(url, {_id:id}, { headers: config }).then((res) => {
                if (res) {
                    toast.success(res?.data?.message)
                }
            }).catch((err) => {
                console.log(err, "err")
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <div>

            <div >
                <div>
                    <h1>Car Deatails Page</h1>

                </div>
                <div className='container'>
                    {data?.map((value) => {
                        return (
                            <div className='car_main'>
                                <div className='getcar'><img src={value.image} alt="" /> </div>
                                <div className='attri'>
                                    <h2>{value?.title}</h2>
                                    <p>{value?.description}</p>
                                    <button onClick={() => handleEdit(value?._id)}>Edit</button>
                                    <button onClick={() => handleDelete(value?._id)}>Delete</button>


                                </div>
                            </div>

                        )


                    })}
                </div>
                <ToastContainer />
            </div>
        </div>
    )
}

export default GetCar