import { Mail, MapPin, Send, ChevronDown } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Contact.css';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>

);

const LinkedinIcon2 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Contact = () => {
  useScrollReveal();
  return (
    <div className="contact-page">
      <header className="page-header page-header--photo page-header--photo contact-header">
        <div className="container">
          <h1 className="page-title animate-slide-up">Contact Us</h1>
          <p className="page-subtitle animate-slide-up delay-100">
            Reach out for sponsorships, collaborations, or general inquiries.
          </p>
        </div>
        <div
          className="scroll-indicator"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ChevronDown size={32} strokeWidth={1.5} />
        </div>
      </header>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-container scroll-reveal delay-1">
              <h2 className="contact-form-title">Send a Message</h2>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" placeholder="Sponsorship Inquiry" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows={5} placeholder="How can we help you?" required></textarea>
                </div>
                <button type="submit" className="btn btn-solid btn-submit">
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-container scroll-reveal delay-2">
              <h2 className="contact-info-title">Get In Touch</h2>
              <p className="contact-info-desc">
                We are always looking to partner with industry leaders and connect with the community. Let's build the future of space exploration together.
              </p>

              <div className="info-item">
                <div className="info-icon">
                  <MapPin className="text-accent" />
                </div>
                <div>
                  <h4 className="info-label">Address</h4>
                  <p className="info-value">
                    CRISS Robotics Lab<br />
                    BITS Pilani, Vidya Vihar<br />
                    Pilani, Rajasthan 333031
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Mail className="text-accent" />
                </div>
                <div>
                  <h4 className="info-label">Email</h4>
                  <a href="mailto:crissrobotics@pilani.bits-pilani.ac.in" className="info-value info-link">
                    crissrobotics.pilani@bits-pilani.ac.in
                  </a>
                </div>
              </div>

              <div className="social-links-section">
                <h4 className="info-label">Follow Us</h4>
                <div className="contact-social-links">
                  <a href="https://www.instagram.com/criss_robotics/" target="_blank" rel="noopener noreferrer" className="social-link-item" aria-label="Instagram">
                    <InstagramIcon />
                  </a>
                  <a href="https://www.linkedin.com/company/criss-robotics/" target="_blank" rel="noopener noreferrer" className="social-link-item" aria-label="LinkedIn">
                    <LinkedinIcon2 />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
