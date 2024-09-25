import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <h1><Link to="/">Shadhi.com</Link></h1>
      </div>
      <div className="links">
        <Link>About</Link>
        <Link to="/contact">Contact us</Link>
      </div>
      <div className='buttons'>
        <button className='pickup signup'> <Link to="/signup">Signup</Link> </button>
        <button className='pickup login '><Link to="/login">Login</Link></button>
      </div>
    </div>
  );
}

export default Navbar;
