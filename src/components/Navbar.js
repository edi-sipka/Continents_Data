/* eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navigation">
      <Link to="/" element>
        Country
      </Link>
    </div>
  );
}

export default Navbar;
