import { Link } from 'react-router-dom';
import { Heart, TrendingUp, Users } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './SupportUs.css';

const SupportUs = () => {
  useScrollReveal();

  return (
    <div className="support-us-page animate-fade-in">
      
      <section className="support-hero">
        <div className="container">
          <h1 className="section-heading text-center">FUND THE FUTURE OF CRISS</h1>
          <p className="support-hero-desc text-center">
            Since 2017, CRISS Robotics has been entirely student-run. Today, we're building the first Martian-analog drone from India and preparing for the Australian Rover Challenge. We need your help to get there.
          </p>
        </div>
      </section>

      <section className="fundraising-section">
        <div className="container">
          <div className="fundraising-card grain-overlay">
            <h2 className="fundraising-title">Alumni Funding Campaign '26</h2>
            
            <div className="progress-container">
              <div className="progress-labels">
                <span className="raised-amount">₹1.2L Raised</span>
                <span className="goal-amount">Goal: ₹5.0L</span>
              </div>
              <div className="progress-bar-wrapper">
                <div className="progress-bar-fill" style={{ width: '24%' }}></div>
              </div>
            </div>

            <div className="support-impact-grid">
              <div className="impact-item">
                <TrendingUp className="impact-icon" size={24} />
                <h4>Innovation</h4>
                <p>Funds in-house spectrometers and custom carbon-fiber chassis.</p>
              </div>
              <div className="impact-item">
                <Heart className="impact-icon" size={24} />
                <h4>Legacy</h4>
                <p>Empowers the next generation of BITSians to compete globally.</p>
              </div>
              <div className="impact-item">
                <Users className="impact-icon" size={24} />
                <h4>Community</h4>
                <p>Join a network of alumni backing world-class engineering.</p>
              </div>
            </div>

            <div className="support-actions">
              <button className="btn btn-primary btn-lg">DONATE NOW</button>
              <Link to="/contact" className="btn btn-outline btn-lg">CONTACT US</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SupportUs;
