import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';  
import { FaXTwitter } from "react-icons/fa6";
import { HiMail } from 'react-icons/hi';  
import './Contact.css';  

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="left-side">
        
        <img src="Images/itsme.png" alt="Saksha Gotad" className="profile-photo" />
        
       
        <div className="social-icons">
          <a href="https://linkedin.com/in/saksha-gotad-b1a7a724a" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/SakshaGotad" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub size={30} />
          </a>
          <a href="https://x.com/saksha_gotad89" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaXTwitter size={30} />
          </a>
          <a href="https://www.instagram.com/gotad_sakshu_14/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram size={30} />
          </a>
        </div>
      </div>

     
      <div className="right-side">
        <h2>Contact Me</h2>
        <p>If you'd like to get in touch, feel free to reach out through any of the following channels:</p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:sakshagotad@gmail.com"><HiMail size={20} /> sakshagotad@gmail.com</a></li>
          <li><strong>Phone:</strong> +91 9152293625</li>
        </ul>
        
        <p>
          Hello, I’m <strong>Saksha Gotad</strong>, a passionate Computer Engineering student with a deep curiosity about exploring emerging technologies.I have developed a strong foundation in various areas of computer science. Currently, I am honing my skills in full-stack development, particularly with the MERN stack.
        </p>
        <p>Looking forward to hearing from you..!🙂</p>
      </div>
    </div>
  );
};

export default Contact;
