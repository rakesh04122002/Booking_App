import React from 'react';
import './Services.css';
import {Link} from 'react-router-dom'
import {
  FaTooth, FaSmile, FaXRay, FaChild, FaTeethOpen, FaUserMd,
  FaTeeth, FaRegGrinStars, FaSyringe, FaBriefcaseMedical, FaHeartbeat, FaProcedures
} from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaTooth />,
    title: 'General Check-Up',
    description: 'Routine exams and cleaning for long-term oral health.',
  },
  {
    icon: <FaXRay />,
    title: 'Digital X-Rays',
    description: 'Modern imaging for accurate diagnosis with low radiation.',
  },
  {
    icon: <FaTeethOpen />,
    title: 'Root Canal',
    description: 'Treat and save infected teeth with painless precision.',
  },
  {
    icon: <FaSmile />,
    title: 'Cosmetic Dentistry',
    description: 'Whitening, veneers, and aesthetic smile makeovers.',
  },
  {
    icon: <FaUserMd />,
    title: 'Orthodontics',
    description: 'Braces and aligners for a straight, beautiful smile.',
  },
  {
    icon: <FaChild />,
    title: 'Pediatric Dentistry',
    description: 'Gentle dental care tailored for children and teens.',
  },
  {
    icon: <FaRegGrinStars />,
    title: 'Teeth Whitening',
    description: 'Brighten your smile with in-office or take-home kits.',
  },
  {
    icon: <FaTeeth />,
    title: 'Dental Implants',
    description: 'Natural-looking replacements for missing teeth.',
  },
  {
    icon: <FaProcedures />,
    title: 'Wisdom Tooth Removal',
    description: 'Safe extraction of painful or impacted wisdom teeth.',
  },
  {
    icon: <FaHeartbeat />,
    title: 'Gum Disease Treatment',
    description: 'Stop bleeding gums with expert periodontal care.',
  },
  {
    icon: <FaBriefcaseMedical />,
    title: 'Emergency Dental Care',
    description: 'Urgent care for pain, broken teeth, or swelling.',
  },
  {
    icon: <FaSyringe />,
    title: 'Laser Dentistry',
    description: 'Advanced tools for faster and painless treatments.',
  },
];

const Services = () => {
  return (
    <div>
      <div className="services-container">
        <h2>Our Dental Services</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
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

export default Services;
