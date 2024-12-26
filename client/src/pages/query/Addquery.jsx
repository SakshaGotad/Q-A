import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Context/auth'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './Addquery.css';
const Addquery = () => {
  
  const navigate = useNavigate();
  const {user} = useAuth();
  const name = user.name;
  const email = user.email;
  const userId = user._id;
  const [formData , setFormData] = useState({
    title:'',
    query:'',
    tags:''
  })

  


  const handleChange =(e)=>{
  let name = e.target.name;
  let value = e.target.value;
  setFormData({
    ...formData,
    [name]:value
  })
  }


  const requestBody ={
    title :formData.title,
    query:formData.query,
    tags:formData.tags,
    name , 
    email,
    userId,
  }

 
    const handleSubmit= async(e)=>{
      e.preventDefault();
      try {
        const response = await fetch(`https://q-a-e2s5.onrender.com/query/create-query`,
          {
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify(requestBody)
          }
        )
    
        const result = await response.json();
        if(result){
          toast.success("Query submitted successfully");
          navigate('/');
        }
    
      } catch (error) {
        console.log(error);
      }
      }
 
  
  
  return (
    <div className="container">
    <div className="banner">
        <img src="/Images/hero1.png" alt="Banner Image" />
    </div>
    <div className="form-container">
        <h1>Ask Your Query</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="query">Query</label>
                <textarea
                    id="query"
                    name="query"
                    value={formData.query}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="tags">Tags</label>
                <input
                    type="text"
                    id="tags"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    placeholder="Comma-separated tags"
                />
            </div>
            <button type="submit">Submit Query</button>
        </form>
    </div>
</div>
  )
}

export default Addquery
