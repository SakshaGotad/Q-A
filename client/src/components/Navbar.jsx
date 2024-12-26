import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import { useAuth } from '../Context/auth';

const Navbar = () => {
  const { isLoggedin } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="logo">Q&A</div>

          {/* Mobile Hamburger Icon */}
          <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          {/* Navbar Links */}
          <nav>
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <li>
                <NavLink to="/" className="navbar-link">Home</NavLink>
              </li>
              <li>
                <NavLink to="/ask-query" className="navbar-link">Ask query</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="navbar-link">About</NavLink>
              </li>
              <li>
                <NavLink to="/your-query" className="navbar-link">Your queries</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="navbar-link">Contact</NavLink>
              </li>
              {isLoggedin ? (
                <li>
                  <NavLink to="/logout" className="navbar-link">Logout</NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/login" className="navbar-link">Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/register" className="navbar-link">Register</NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
