import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="container-fluid bg-black text-white py-1">
      <div className="container d-flex justify-content-center align-items-center">
        <ul className="navbar nav gap-3">
          <li className="nav-item">
            <a href="#" className="nav-link text-white">HOME</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white">ABOUT</a>
          </li>
          <li className="nav-item" style={{width: "90px", height: "90px"}}>
            <a href="#" className="nav-link">
              <img src="/Logo.jpg" alt="Logo"  className="img-fluid" style={{height: "100%", width: "100%"}}/>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white">SERVICE</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
