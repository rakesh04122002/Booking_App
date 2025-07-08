import React from 'react';
import './About.css';
import { Link } from 'react-router-dom'
import clinic from '../assets/clinic.jpg';
import RealDoc from '../assets/RealDOc.jpg';
import Equpment1 from '../assets/Equpment1.avif';
import Clinictoom from '../assets/Clinictoom.jpeg';
import Restroom from '../assets/Restroom.webp';

const About = () => {
  return (
    <div>
      <div className="about-container">


        <section className="about-section">
          <div className="about-text">
            <h2>About UK DentalCare</h2>
            <p>
              At <strong>UK DentalCare</strong>, we believe in creating beautiful smiles through compassionate care and clinical excellence.
              Our team is committed to providing a safe, clean, and friendly environment for patients of all ages.
            </p>
          </div>
          <div className="about-img">
            {<img src={clinic} alt="Dental Clinic" />}
          </div>
        </section>


        <section className="about-section reverse">
          <div className="about-img">
            {<img src={RealDoc} alt="Experienced Doctors" />}
          </div>
          <div className="about-text">
            <h2>Meet Our Expert</h2>
            <p>
              Our team of certified and highly experienced dental professionals bring over 15+ years of expertise in dentistry.
              From orthodontics to cosmetic and pediatric dentistry, you're in expert hands at every stage.
            </p>
          </div>
        </section>


        <section className="about-section">
          <div className="about-text">
            <h2>Advanced Dental Technology</h2>
            <p>
              We use cutting-edge technology such as digital X-rays, ultrasonic scalers, and 3D dental imaging to ensure safe and
              pain-free procedures. Our sterilization process meets the highest safety standards.
            </p>
          </div>
          <div className="about-img">
            {<img src={Equpment1} alt="Dental Equipment" />}
          </div>
        </section>

        <section className="gallery">
          <h2>Clinic Tour</h2>
          {<div className="gallery-grid">
            <p>Treatment Room</p>
            <img src={Clinictoom} alt="Treatment Room" />
            <p>Reception</p>
            {<img src={Restroom} alt="Reception Area" />}
          </div>}
        </section>
      </div>
      <footer className="footer">
        <div className="footer-container">

          <div className="footer-section">
            <h3>UK DentalCare</h3>
            <p>Bringing smiles to life with expert dental services.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/doctors">Doctors</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: ukdentalcare@gmail.com</p>
            <p>Phone: +91 79811 65430</p>
            <p>Location: Hyderabad, India</p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2025 DentalCare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
