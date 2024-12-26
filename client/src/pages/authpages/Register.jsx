import React, { useState } from 'react';
import './Register.css'; // Import Register.css file
import {useNavigate , Link} from 'react-router-dom'
import { toast} from 'react-hot-toast';
const Register = () => {
 const [user, setUser] = useState({
  name:"",
  email:"",
  password:""
 })

 const navigate = useNavigate();
 const handleInput=(e)=>{
  let name = e.target.name ;
  let value = e.target.value; 
  setUser({
    ...user,
    [name]:value
  })
 };

 const handleRegister = async(e)=>{
  e.preventDefault();
  try {
    
    const response = await fetch(`https://q-a-e2s5.onrender.com/user/register`,{
      method:"POST",
      headers:{"Content-Type": "application/json",

      },
      credentials: 'include',
      body: JSON.stringify(user)
    });

    if(response.ok){
      const responseData = await response.json();
      // console.log(responseData);
      toast.success("User registered successfully");
      setUser({ name: "", email: "", password: "" });
      // console.log(responseData);
      navigate('/login')
    }
  } catch (error) {
    toast.error(error)
    console.error("Error:", error);
  }
 }

 

  return (
    <div className='auth-container'>
      <h2 className='auth-title'>Register here...</h2>
      <form onSubmit={handleRegister} action="" className="auth-form">
        <div className='form-group'>
          <label htmlFor="name" className='form-label'>Name</label>
          <input type="text" name="name" id="name" 
          value={user.name} 
          className="form-input" 
          onChange={handleInput}
          placeholder='Enter your name here' />
        </div>


        <div className='form-group'>
          <label htmlFor="email" className='form-label'>Email</label>
          <input type="email" name="email" id="email" 
          value={user.email}
          className="form-input" 
          onChange={handleInput}
          placeholder='Enter email here' />
        </div>


        <div className='form-group'>
          <label htmlFor="password" className='form-label'>Password</label>
          <input type="password" name="password" id="password" 
          value={user.password}
          className="form-input" 
          onChange={handleInput}
          placeholder='Enter password here'/>
        </div>

        <div className='form-submit'>
          <button type='submit' className='btn'>Register</button>
        </div>
      </form>
      <div className='auth-footer'>
        <p>Already have an account? <Link to="/login" className="auth-link">Login here</Link></p>
      </div>
    </div>
  );
}

export default Register;
