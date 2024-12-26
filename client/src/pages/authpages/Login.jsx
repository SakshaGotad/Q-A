import React, { useState } from 'react';
import './Login.css'; // Import Login.css file
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';  // For displaying toast notifications
import { useAuth } from '../../Context/auth';

const Login = () => {
  const{ storeTokenInLS }=useAuth();
  // State to handle login form input
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate(); // For navigation after successful login

  // Handle input changes
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value
    });
  };

  // Handle the login request
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user) // Send login data in the body
      });

      if (response.ok) {
        const responseData = await response.json();
        toast.success('Login successful!');  // Success toast
        console.log(responseData)
        // Clear form fields
        setUser({ email: '', password: '' }); 
         storeTokenInLS(responseData.token);
        // Store token (if needed) and navigate to the home/dashboard page
        
        navigate('/');  // Redirect to the dashboard or another page after successful login
      } else {
        toast.error('Invalid credentials! Please try again.');  // Error toast
      }
    } catch (error) {
      toast.error('An error occurred during login.');  // Error toast for network issues
      console.error("Error:", error);
    }
  };

  return (
    <div className='auth-container'>
      <h2 className='auth-title'>Login here...</h2>
      <form onSubmit={handleLogin} className="auth-form">
        <div className='form-group'>
          <label htmlFor="email" className='form-label'>Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            value={user.email} 
            className="form-input" 
            onChange={handleInput}
            placeholder='Enter email here' 
          />
        </div>

        <div className='form-group'>
          <label htmlFor="password" className='form-label'>Password</label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            value={user.password} 
            className="form-input" 
            onChange={handleInput}
            placeholder='Enter password here' 
          />
        </div>

        <div className='form-submit'>
          <button type='submit' className='btn'>Login</button>
        </div>
      </form>

      <div className='auth-footer'>
        <p>Don't have an account? <Link to="/register" className="auth-link">Register here</Link></p>
      </div>
    </div>
  );
};

export default Login;
