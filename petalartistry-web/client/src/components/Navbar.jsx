import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <div style={linksContainerStyle}>
        <Link style={linkStyle} to="/">Home</Link>
        <Link style={linkStyle} to="/about">About</Link>
        <Link style={linkStyle} to="/contact">Contact</Link>
        <Link style={linkStyle} to="/login">Login</Link>
        <Link style={linkStyle} to="/signup">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;

const navbarStyle = {
  backgroundColor: '#f9f9f9',
  padding: '10px 20px',
};

const linksContainerStyle = {
  display: 'flex',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
  marginRight: '20px',
};
