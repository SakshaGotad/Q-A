import React from 'react';
import { FaGithub } from 'react-icons/fa';  
import './About.css'; 

const About = () => {
  return (
    <div className="about-container">
     
      <div className="left-side">
        <img 
          src="Images/hero2.png" 
          alt="Hero Image" 
          className="hero-image" 
        />
      </div>

     
      <div className="right-side">
        <h2>About the Project</h2>
        <p>
          This project is a <strong>Crowdsourced Question and Answer Platform</strong> built using the MERN stack . The app allows users to ask questions, share knowledge, and provide answers on various topics. It serves as a collaborative space for people to seek help and contribute knowledge in real-time. 
        </p>
        <p>
          With a user-friendly interface, the platform supports features like  commenting, and tracking answers. Whether you're a student looking for guidance or an expert sharing insights.
        </p>
        <p>
           It’s open-source. Feel free to contribute to the development and improvement of the platform by visiting the GitHub repository linked below:
        </p>
        
        <div className="github-link">
          <a 
            href="https://github.com/SakshaGotad/Q-A" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-icon"
          >
            <FaGithub size={35} />
            <span>Contribute to the Project</span>
          </a>
        </div>

        
      </div>
    </div>
  );
};

export default About;
