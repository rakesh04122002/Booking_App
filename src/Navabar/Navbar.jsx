import React, { useState } from 'react'
import Logo1 from '../assets/Logo1.jpg'
import { Link, useNavigate } from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {
  const [role, setrole] = useState("")
  const navigate = useNavigate()
  const handlerolechange = (e) => {
    const selectedrole = e.target.value;
    setrole(selectedrole)
    if (selectedrole === "Admin") {
      navigate('/admin-login')
    } else {
      navigate('/home')
    }
  }
  const handleappoinment=()=>{
    navigate('/doctors')
  }
  const handleResetRole = () => {
    setrole("");
    navigate('/');
  };
  return (
    <div id='Nav'>
      <img src={Logo1} alt="" width='100' />
      {role === '' && (
        <>
          <Link to='/home'><span>Home</span></Link>
          <Link to='/about'><span>About US</span></Link>
          <Link to='/services'><span>Services</span></Link>
          <Link to='/doctors'><span>Doctors</span></Link>
          <select name="Role" onChange={handlerolechange} defaultValue=''>
            <option value="" disabled >Select Role</option>
            <option value="Patient">Patient</option>
            <option value="Admin">Admin</option>
          </select>
        </>
      )}
      {role === "Patient" && (
        <>
          <Link to='/home'><span>Home</span></Link>
          <Link to='/about'><span>About US</span></Link>
          <Link to='/services'><span>Services</span></Link>
          <Link to='/doctors'><span>Doctors</span></Link>
          <button onClick={handleappoinment}>Book Appointment</button>
          <button onClick={handleResetRole}>Change Role</button>
        </>
      )}
      {role === "Admin" && (
        <>
          <button onClick={handleResetRole}>Change Role</button>
        </>
      )}

    </div>
  )
}

export default Navbar
