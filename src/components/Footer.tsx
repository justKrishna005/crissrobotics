import { Link } from 'react-router-dom';
import './Footer.css';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <Link to="/" className="footer-logo">
            <img src="/logo.png" alt="CRISS Robotics" className="logo-image" />
          </Link>
          <p className="footer-desc">
            Forging the next generation of aerospace engineers through rigorous international competition.
          </p>
        </div>
        
        <div className="footer-right">
          <div className="social-links">
            <a href="#" aria-label="Instagram" className="social-link">IG</a>
            <a href="#" aria-label="LinkedIn" className="social-link">IN</a>
            <a href="#" aria-label="Twitter" className="social-link">X</a>
            <a href="#" aria-label="Email" className="social-link"><Mail size={20} /></a>
          </div>
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} CRISS Robotics. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
