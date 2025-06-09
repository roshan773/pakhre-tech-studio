import React from 'react';

const Navbar = () => {
  return (
    <nav className="container-fluid bg-black text-white" style={{fontFamily: 'var(--font-oswald)'}}>
      <div className="container">
        <ul className="nav justify-content-center align-items-center gap-4">
          <li className="nav-item">
            <a href="/" className="nav-link text-white">HOME</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link text-white">ABOUT</a>
          </li>
          <li className="nav-item d-flex align-items-center">
            <a href="/" className="nav-link p-0">
              <img src="/Logo.png" alt="Logo"  className="img-fluid" style={{width: "110px", height: "90px"}}/>
            </a>
          </li>
          <li className="nav-item">
            <a href="/services" className="nav-link text-white">SERVICE</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link text-white">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
