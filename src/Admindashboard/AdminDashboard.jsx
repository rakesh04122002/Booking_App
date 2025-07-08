import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const storedAdmin = JSON.parse(localStorage.getItem('adminUser'));
    if (!storedAdmin) {
      navigate('/');
      return;
    }

    setAdmin(storedAdmin);

    const allAppointments = JSON.parse(localStorage.getItem('appointments')) || {};
    const doctorAppointments = allAppointments[storedAdmin.name] || [];
    setAppointments(doctorAppointments);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminUser');
    setAdmin(null);
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      {admin && <h2>Welcome, {admin.name}!</h2>}
      <button onClick={handleLogout}>Logout</button>

      <h3>Your Appointments:</h3>
      {appointments.length === 0 ? (
        <p>No appointments yet.</p>
      ) : (
        <ul className="appointment-list">
          {appointments.map((appt, index) => (
            <li key={index}>
              <strong>Patient:</strong> {appt.patientName}<br />
              <strong>Email:</strong> {appt.email}<br />
              <strong>Age:</strong> {appt.age}<br />
              <strong>Problem:</strong> {appt.problem}<br />
              <strong>Date:</strong> {appt.date}<br />
              <strong>Time:</strong> {appt.time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminDashboard;
