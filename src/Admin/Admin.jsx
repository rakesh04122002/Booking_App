import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('adminUser');
    if (storedUser) {
      navigate('/admin-dashboard');
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let allAdmins = JSON.parse(localStorage.getItem('allAdmins')) || [];

    if (isLogin) {
      const existingUser = allAdmins.find(
        (user) => user.email === email && user.password === password
      );

      if (existingUser) {
        localStorage.setItem('adminUser', JSON.stringify(existingUser));
        alert('Login Successful ✅');
        navigate('/admin-dashboard');
      } else {
        alert('Login Failed. Please check your Email or Password.');
      }
    } else {
      const existingUser = allAdmins.find((user) => user.email === email);
      if (existingUser) {
        alert('Account already exists with this email.');
        return;
      }

      // ✅ Always save name with "Dr " prefix so keys match
      const newUser = {
        name: "Dr " + name, // Important fix!
        email,
        password,
        createdAt: new Date().toISOString(),
      };

      allAdmins.push(newUser);
      localStorage.setItem('allAdmins', JSON.stringify(allAdmins));
      localStorage.setItem('adminUser', JSON.stringify(newUser));

      alert('Signup successful ✅');
      navigate('/admin-dashboard');
    }

    setname('');
    setemail('');
    setpassword('');
  };

  return (
    <div className="signup-container">
      <h1>To do manipulations please signup/Login yourself.</h1>
      <h2>{isLogin ? 'Admin Login' : 'Admin Signup'}</h2>

      <form className="signup-form" onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            placeholder="Enter your name (without Dr)"
            value={name}
            required
            onChange={(e) => setname(e.target.value)}
          />
        )}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          required
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          required
          onChange={(e) => setpassword(e.target.value)}
        />
        <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
      </form>

      <p className="toggle-text">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button
          type="button"
          onClick={() => setIsLogin(!isLogin)}
          className="toggle-button"
        >
          {isLogin ? 'Signup' : 'Login'}
        </button>
      </p>
    </div>
  );
};

export default Admin;
