import React from 'react';
import './Contact.css';  // Import your custom CSS for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="left-side">
        {/* Profile Photo */}
        <img src="your-photo-url.jpg" alt="Your Name" className="profile-photo" />
        
        {/* Social Media Icons with External Links */}
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="right-side">
        <h2>Contact Me</h2>
        <p>If you'd like to get in touch, feel free to reach out through any of the following channels:</p>
        <ul>
          <li>Email: your-email@example.com</li>
          <li>Phone: +123-456-7890</li>
          <li>Location: Your City, Country</li>
        </ul>
        <p>Looking forward to hearing from you!</p>
      </div>
    </div>
  );
};

export default Contact;
