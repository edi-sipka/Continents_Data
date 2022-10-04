/* eslint-disable */

import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMicrophone, FaEllipsisH } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navigation">
      <NavLink to="/" element className="heading">
        World Countries Data
      </NavLink>
      <div className="position">
        <FaMicrophone />
        <FaEllipsisH />
      </div>
    </div>
  );
}

export default Navbar;
