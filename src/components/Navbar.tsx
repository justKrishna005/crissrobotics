import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Mission', path: '/' },
    { name: 'Research', path: '/research' },
    { name: 'Competitions', path: '/competitions' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Team', path: '/team' },
    { name: 'Alumni', path: '/alumni' },
    { name: 'Partners', path: '/partners' },
    { name: 'Support Us', path: '/support-us' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="container nav-container">
        
        {/* Left: Logo */}
        <Link to="/" className="nav-logo">
          <img src="/logo.png" alt="CRISS Robotics" className="logo-image" style={{ height: '40px', objectFit: 'contain' }} />
        </Link>

        {/* Center: Desktop Menu */}
        <ul className="nav-links desktop-menu">
          {links.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <ul className="nav-links-mobile">
            {links.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
