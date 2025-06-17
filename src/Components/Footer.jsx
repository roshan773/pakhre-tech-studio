import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-white pt-5 pb-3 border-top" style={{backgroundColor: "#000000"}}>
      <div className="container-fluid">
        <div className="row text-center text-md-start d-flex justify-content-center align-items-center">
          {/* Logo Section */}
          <div className="col-md-4 mb-4">
            <img src="/logo.png" alt="Logo" className="img-fluid" />
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4 text-center">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#about" className="text-white text-decoration-none">About</a></li>
              <li><a href="#services" className="text-white text-decoration-none">Services</a></li>
              <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5>Contact</h5>
            <p>Email: hello@roshantech.com</p>
            <p>Phone: +91 12345 67890</p>
            <div>
              <a href="#" className="text-white me-3"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white me-3"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white me-3"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-white"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
        <hr className="border-light" />
        <p className="text-center mb-0">© {new Date().getFullYear()} Roshan Tech Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}
