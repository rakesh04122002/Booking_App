import React from 'react';
import './Doctors.css';
import Anjali from '../assets/Anjali.jpg';
import RealDoc from '../assets/RealDoc.jpg'
import Swamy from '../assets/Swamy.jpg'
import Sandeep from '../assets/Sandeep.webp'
import Meera from '../assets/Meera.jpg'
import Vishal from '../assets/Vishal.jpg'
import {useNavigate} from 'react-router-dom'
const doctorsList = [
  {
    name: "Dr. Anjali Reddy",
    specialization: "Cosmetic Dentist",
    experience: "10+ years experience in teeth alignment and braces.",
    image: Anjali
  },
  {
    name: "Dr. Karthik Rao",
    specialization: "Orthodontist",
    experience: "Expert designing healthier smiles with expert orthodontic treatment.",
    image: RealDoc
  },
  {
    name: "Dr. Swamy Nair",
    specialization: "Pediatric Dentist",
    experience: "Friendly care for kids with 7+ years of experience.",
    image: Swamy
  },
  {
    name: "Dr. Sandeep Rao",
    specialization: "Root Canal Specialist",
    experience: "Performed 1000+ successful root canal treatments.",
    image: Sandeep
  },
  {
    name: "Dr. Meera Iyer",
    specialization: "Periodontist",
    experience: "Specialist in gum disease treatment and surgeries.",
    image: Meera
  },
  {
    name: "Dr. Vishal Menon",
    specialization: "Prosthodontist",
    experience: "Expert in dentures, crowns, and full mouth rehab.",
    image: Vishal
  }

];

const Doctors = () => {
    const nav=useNavigate()
    const handleBooking=(doctorName)=>{
          nav(`/book/${encodeURIComponent(doctorName)}`)
    }
  return (
    <div className="doctors-container">
      <h2>Meet Our Dental Experts and Book Your Appointment Today</h2>
      <div className="doctors-grid">
        {doctorsList.map((doc, index) => (
          <div className="doctor-card" key={index}>
            <img src={doc.image} alt={doc.name} />
            <h3>{doc.name}</h3>
            <p className="specialization">{doc.specialization}</p>
            <p className="experience">{doc.experience}</p>
            <button className="book-btn"  onClick={() => handleBooking(doc.name)}>Book Appointment</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
