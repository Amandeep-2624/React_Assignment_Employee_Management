import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    // Nav items present in the navbar
    <nav >
      <ul className='NavItems'>
        <li className='listItems'><NavLink to="/add" activeClassName="active" className="nav-link">Add Employee</NavLink></li>
        <li className='listItems'><NavLink to="/list" activeClassName="active" className="nav-link">View Employees</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
