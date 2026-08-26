import { Link } from 'react-router';
import './Footer.css';
import { Mail } from 'lucide-react';

// ─── SVG Icons ────────────────────────────────────────────────────────────────

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

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
            <a href="https://x.com/CRISSRobotics" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-link"><TwitterIcon /></a>
            <a href="mailto:outreach@crissrobotics.space" aria-label="Email" className="social-link"><Mail size={20} /></a>
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
