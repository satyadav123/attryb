import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from '../pages/login/Login';
import SignupForm from '../pages/signup/Signup';
import CarAdd from '../pages/Product/CarAdd';
import GetCar from '../pages/Product/GetCar';
import Edit_Car from '../pages/Product/EditCar';
import CreateOEM from '../pages/OEM/AddOEM';
import SearchOEM from '../pages/OEM/SearchOEM';


const AllRoutes = () => {
  return (
      <div>
          <Routes>
        <Route path='/' element={<SignupForm />} />
        <Route path='/login' element={< Login/>} />
        <Route path='/addcar' element={<CarAdd />} />
        <Route path='/getcar' element={<GetCar />} />
        <Route path='/edit-car' element={<Edit_Car />} />
        <Route path='/add-oem' element={<CreateOEM />} />
        <Route path='/search-oem' element={<SearchOEM/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes