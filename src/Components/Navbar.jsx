import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="container-fluid bg-black text-white fs-5" style={{fontFamily: 'var(--font-oswald)'}}>
      <div className="container">
        <ul className="nav justify-content-center align-items-center gap-4">
          <li className="nav-item">
            <a href="/" className="nav-link text-white fs-5">HOME</a>
          </li>
          <li className="nav-item">
            {/* <a href="/about" className="nav-link text-white fs-5">ABOUT</a> */}
            <Link href="/about" className="nav-link text-white fs-5">About</Link>
          </li>
          <li className="nav-item d-flex align-items-center">
            <a href="/" className="nav-link p-0">
              <img src="/Logo.png" alt="Logo"  className="img-fluid" style={{width: "110px", height: "90px"}}/>
            </a>
          </li>
          <li className="nav-item">
            <a href="/services" className="nav-link text-white fs-5">SERVICE</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link text-white fs-5">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
