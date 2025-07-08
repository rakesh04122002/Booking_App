import React from 'react'
import Navbar from './Navabar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Admin from './Admin/Admin'
import Home from './Home/Home'
import About from './Aboutus/About'
import Services from './Servicess/Services'
import Doctors from './Doctors/Doctors'
import Appointment from './Appointment/Appointment'
import AdminDashboard from './Admindashboard/AdminDashboard'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path='/admin-login'element={<Admin/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/book/:doctorName' element={<Appointment/>}/>
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </div>
  )
}

export default App
