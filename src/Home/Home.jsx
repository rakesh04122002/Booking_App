import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import RealDoc from '../assets/RealDoc.jpg'
import Clinic from '../assets/Clinic.jpg'
import Anjali from '../assets/Anjali.jpg'
import { Link } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
  const doctors = [
    { id: 1, name: 'Dr. Anjali Reddy', specialty: 'Cosmetic Dentist', image: Anjali, bio: 'Cosmetic dentist specializing in smile makeovers, veneers, and teeth whitening. Focused on natural results and patient comfort.' },
    { id: 2, name: 'Dr. Karthik Rao', specialty: 'Orthodontist', image: RealDoc, bio: 'Helping patients of all ages achieve straighter, healthier smiles with expert orthodontic treatment' }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Ravi Kumar',
      comment: 'Very professional staff and excellent care. I got my root canal done and it was painless!',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      comment: 'Best dental experience I’ve ever had. Clean clinic and friendly doctors!',
    },
    {
      id: 3,
      name: 'Anil Reddy',
      comment: 'Highly recommended! I took my daughter for braces and the results are fantastic.',
    },
  ];
  const handleviewmore = () => {
    navigate('/about')
  }
  const handleservice = () => {
    navigate('/services')
  }
  const handleViewAll = () => {
    navigate('/doctors');
  };

  return (
    <div>
      <div className="home-main">
        <div className="home-left">
          <h1>Welcome to <span className="highlight">Uk Dental Care</span></h1>
          <p id='sub'>We Make Your Smile Brighter</p>
          <p>Your trusted partner for quality health services. Book appointments with ease and access expert care, anytime</p>
        </div>

        <div className="home-right">
          <img src={RealDoc} alt="Doctor" width='400' />
        </div>
      </div>
      <div className="about-home-section">
        <div className="about-home-image">
          <img src={Clinic} alt="UK DentalCare Clinic" />
        </div>
        <div className="about-home-text">
          <h2>About UK DentalCare</h2>
          <p>
            At <strong>UK DentalCare</strong>, we combine compassion with technology to deliver world-class dental services.
            Our expert dentists ensure a
            stress-free experience whether you’re here for a check-up, a smile makeover, or advanced dental procedures.
          </p>
          <p>
            We believe that a healthy smile builds confidence, and our clinic is dedicated to providing exceptional care in a friendly, comfortable setting.
          </p>
          <button onClick={handleviewmore}>View More</button>
        </div>
      </div>
      <div className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <span className="icon">🦷</span>
            <h3>Dental Check-up</h3>
            <p>Routine exams & cleanings to keep your teeth healthy.</p>
          </div>
          <div className="service-card">
            <span className="icon">✨</span>
            <h3>Teeth Whitening</h3>
            <p>Restore shine and whiten your smile professionally.</p>
          </div>
          <div className="service-card">
            <span className="icon">🔧</span>
            <h3>Root Canal</h3>
            <p>Painless treatment to save infected teeth.</p>
          </div>
        </div>
        <button className="view-morebutton" onClick={handleservice}>View More</button>
      </div>

      <div className="doctors-preview-section">
        <h2 className="section-title">Meet Our Experts</h2>
        <div className="doctor-profile-wrapper">
          {doctors.map((doc) => (
            <div className="doctor-profile-card" key={doc.id}>
              <img src={doc.image} alt={doc.name} className="doctor-image" />
              <div className="doctor-info">
                <h3>{doc.name}</h3>
                <p>{doc.specialty}</p>
                <p className="short-bio">{doc.bio}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="view-all-button" onClick={handleViewAll}>
          View All Doctors
        </button>
      </div>
      <div className="reviews-section">
        <h2 className="reviews-title">What Our Patients Say</h2>
        <div className="reviews-container">
          {reviews.map((review) => (
            <div className="review-card" key={review.id}>
              <p className="review-comment">“{review.comment}”</p>
              <p className="review-name">— {review.name}</p>
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

    </div >
  );
};

export default Home;
