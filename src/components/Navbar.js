import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaMicrophone,
  FaEllipsisH,
  FaArrowAltCircleLeft,
} from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navigation">
      <NavLink to="/" element>
        <FaArrowAltCircleLeft className="btn" />
      </NavLink>
      <h2 className="heading">World Statistics</h2>

      <div className="position">
        <FaMicrophone />
        <FaEllipsisH />
      </div>
    </div>
  );
}

export default Navbar;
