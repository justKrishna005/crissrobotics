import { Link } from 'react-router';
import './Footer.css';
import { Mail } from 'lucide-react';
import { InstagramIcon, LinkedinIcon } from './SocialIcons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <Link to="/" className="footer-logo">
            <img src="/logo.webp" alt="CRISS Robotics" className="logo-image" />
          </Link>
          <p className="footer-desc">
            Forging the next generation of aerospace engineers through rigorous international competition.
          </p>
        </div>
        
        <div className="footer-right">
          <div className="social-links">
            <a href="https://www.instagram.com/criss_robotics/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link"><InstagramIcon /></a>
            <a href="https://www.linkedin.com/company/criss-robotics/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link"><LinkedinIcon /></a>
            <a href="mailto:crissrobotics@pilani.bits-pilani.ac.in" aria-label="Email" className="social-link"><Mail size={20} /></a>
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
