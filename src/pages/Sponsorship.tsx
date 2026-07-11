import { Download } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Sponsorship.css';

// Sponsor list – replace label with <img> when real logos are ready
const sponsors = [
  { name: 'NITTE',         size: 'large' },
  { name: 'NIDHI PRAYAS', size: 'large' },
  { name: 'SOLVE',         size: 'large' },
  { name: 'SolidWorks',   size: 'medium' },
  { name: 'Altium',       size: 'medium' },
  { name: 'Ansys',        size: 'medium' },
  { name: 'ROS',          size: 'medium' },
  { name: 'Arduino',      size: 'medium' },
  { name: 'Raspberry Pi', size: 'medium' },
];

const Sponsorship = () => {
  useScrollReveal();
  return (
    <div className="sponsorship-page">
      {/* ── Header ── */}
      <header className="page-header page-header--photo sponsorship-header">
        <div className="container">
          <h1 className="page-title animate-slide-up">PARTNER WITH US</h1>
          <p className="page-subtitle animate-slide-up delay-100">
            Join us in building the future of space exploration.
          </p>
        </div>
      </header>

      {/* ── Why Sponsor Us? ── */}
      <section className="sponsor-section">
        <div className="container">
          <h2 className="section-heading text-center">WHY SPONSOR US?</h2>
          <div className="why-sponsor-grid">
            <div className="why-card why-card--1 scroll-reveal delay-1">
              <div className="why-card-icon">🚀</div>
              <h3 className="why-title">Empower Future Engineers</h3>
              <p className="why-desc">
                Your support directly funds the hands-on education of our student engineers, bridging the gap between academic theory and real-world aerospace challenges.
              </p>
            </div>
            <div className="why-card why-card--2 scroll-reveal delay-2">
              <div className="why-card-icon">🌐</div>
              <h3 className="why-title">Brand Exposure</h3>
              <p className="why-desc">
                Gain international visibility at premier competitions in the US and Europe, and across university and social media channels.
              </p>
            </div>
            <div className="why-card why-card--3 scroll-reveal delay-3">
              <div className="why-card-icon">🎓</div>
              <h3 className="why-title">Recruitment Pipeline</h3>
              <p className="why-desc">
                Get priority access to our highly-skilled, multidisciplinary graduates with hands-on experience in cutting-edge robotics and system design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Current Sponsors – logo grid ── */}
      <section className="sponsor-section logos-section">
        <div className="container">
          <p className="logos-eyebrow scroll-reveal delay-1">With support from our partners</p>
          <div className="logos-grid scroll-reveal delay-2">
            {sponsors.map((s, i) => (
              <div className={`logo-cell logo-cell--${s.size}`} key={i}>
                <span className="logo-text">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Additional Funding ── */}
      <section className="sponsor-section">
        <div className="container">
          <div className="funding-grid">
            {/* Research Grants */}
            <div className="funding-column scroll-reveal delay-1">
              <h2 className="section-heading text-center funding-title">Research Grants</h2>
              <div className="funding-card">
                <div className="funding-logos">
                  <div className="funding-logo-placeholder">SOLVE</div>
                  <div className="funding-logo-placeholder">NIDHI PRAYAS</div>
                  <div className="funding-logo-placeholder">PI</div>
                </div>
                <ul className="funding-list">
                  <li>SOLVE Research Grant to build Robotic End Manipulator for Warehouse Robotics.</li>
                  <li>SPARKLE Research Grant to build in-house NIR Spectrophotometer.</li>
                </ul>
              </div>
            </div>

            {/* Alumni Funding */}
            <div className="funding-column scroll-reveal delay-2">
              <h2 className="section-heading text-center funding-title">Alumni Funding</h2>
              <div className="funding-card">
                <ul className="funding-list">
                  <li>Mr. Goutham Kurra – Batch of 1998</li>
                  <li>Mr. Siddhant Bhardwaj – Batch of 2010</li>
                  <li>Mr. Sushwabhit Shadangi – Batch of 2025</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sponsorship Brochure ── */}
      <section className="brochure-section">
        <div className="container">
          <div className="brochure-card scroll-reveal delay-1">
            <div className="brochure-content">
              <h2 className="section-heading">SPONSORSHIP BROCHURE</h2>
              <p className="section-paragraph">
                For a detailed breakdown of our sponsorship tiers, benefits, and team goals, please download our official Sponsorship Prospectus.
              </p>
            </div>
            <div className="brochure-action">
              <a href="#" className="btn btn-primary btn-lg download-btn" onClick={(e) => e.preventDefault()}>
                <Download size={20} />
                DOWNLOAD PROSPECTUS
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Sponsorship;
