import { Link } from 'react-router';
import { Cpu, Globe2, Users, CheckCircle, ArrowRight, Target, Network, Binary, ChevronDown } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Sponsorship.css';

// Sponsor list – placeholder data
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

const tiers = [
  {
    name: 'Bronze Partner',
    amount: '₹50,000+',
    desc: 'Support foundational engineering and subsystem prototyping.',
    perks: [
      'Small logo on Rover',
      'Small logo on Team Apparel',
      'Logo on Website & Social Media',
      'Invitation to Roll-Out Event'
    ]
  },
  {
    name: 'Silver Partner',
    amount: '₹1,50,000+',
    desc: 'Fund critical competition logistics and advanced sensor suites.',
    isPopular: true,
    perks: [
      'Medium logo on Rover & Apparel',
      'Dedicated Social Media Post',
      'Access to Team Resume Database',
      'Quarterly Progress Reports',
      'Logo on Team Banner at Competitions'
    ]
  },
  {
    name: 'Gold Partner',
    amount: '₹3,00,000+',
    desc: 'Become a cornerstone partner fueling our global operations.',
    perks: [
      'Large prominent logo on Rover',
      'Large logo on Team Apparel',
      'Exclusive Team Visit/Demo at your HQ',
      'Priority Recruiting & Internship access',
      'Title Sponsor branding on media',
      'Joint Press Release'
    ]
  }
];

const Sponsorship = () => {
  useScrollReveal();
  
  return (
    <div className="sponsorship-page">
      {/* ── Header ── */}
      <header className="page-header page-header--photo page-header--photo sponsorship-header">
        <div className="container">
          <h1 className="page-title animate-slide-up">Partner with Us</h1>
          <p className="page-subtitle animate-slide-up delay-100">
            Fuel the next generation of aerospace engineers.
          </p>
        </div>
        <div 
          className="scroll-indicator"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ChevronDown size={32} strokeWidth={1.5} />
        </div>
      </header>

      {/* ── Impact Metrics ── */}
      <section className="impact-metrics">
        <div className="container">
          <div className="metrics-grid">
            <div className="metric-item scroll-reveal delay-1">
              <h3 className="metric-number">40+</h3>
              <p className="metric-label">Engineers on the Team</p>
            </div>
            <div className="metric-item scroll-reveal delay-2">
              <h3 className="metric-number">6</h3>
              <p className="metric-label">International Competitions</p>
            </div>
            <div className="metric-item scroll-reveal delay-3">
              <h3 className="metric-number">3</h3>
              <p className="metric-label">Continents Competed</p>
            </div>
            <div className="metric-item scroll-reveal delay-4">
              <h3 className="metric-number">#1</h3>
              <p className="metric-label">IRDC 2023 Global Rank</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Sponsor Us? ── */}
      <section className="sponsor-section">
        <div className="container">
          <div className="section-header-centered">
            <h2 className="section-heading">Why Sponsor Us?</h2>
            <p className="section-paragraph max-w-800">
              Building autonomous rovers for extra-terrestrial analogs requires immense resources, cutting-edge hardware, and world-class testing facilities. We rely on industry partners to push the boundaries of what undergraduate engineers can accomplish.
            </p>
          </div>

          <div className="why-sponsor-grid">
            <div className="tech-card scroll-reveal delay-1">
              <div className="tech-card-icon"><Cpu size={32} /></div>
              <h3 className="tech-card-title">Empower Hardware Innovation</h3>
              <p className="tech-card-desc">
                Your support directly funds custom PCB fabrication, advanced sensor procurement (LiDAR, NIR spectrometers), and the hands-on education of our student engineers.
              </p>
            </div>
            
            <div className="tech-card scroll-reveal delay-2">
              <div className="tech-card-icon"><Globe2 size={32} /></div>
              <h3 className="tech-card-title">Global Brand Exposure</h3>
              <p className="tech-card-desc">
                Gain high-impact international visibility. Our rovers and team apparel are showcased at premier global competitions across India, Poland, and Australia.
              </p>
            </div>
            
            <div className="tech-card scroll-reveal delay-3">
              <div className="tech-card-icon"><Users size={32} /></div>
              <h3 className="tech-card-title">Elite Recruitment Pipeline</h3>
              <p className="tech-card-desc">
                Get priority access to our highly-skilled graduates possessing real-world experience in ROS2, autonomous navigation, mechanical design, and system integration.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12 scroll-reveal delay-4">
            <Link to="/support-us" className="btn-openai">
              Donate to Us <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── What We Offer (Tiers) ── */}
      <section className="sponsor-section">
        <div className="container">
          <div className="section-header-centered">
            <h2 className="section-heading">What We Offer</h2>
            <p className="section-paragraph">
              We offer structured partnership tiers designed to maximize ROI for your brand, providing everything from logo placement to direct recruitment access.
            </p>
          </div>

          <div className="tiers-grid">
            {tiers.map((tier, index) => (
              <div key={tier.name} className={`tier-card ${tier.isPopular ? 'tier-card-popular' : ''} scroll-reveal delay-${index + 1}`}>
                {tier.isPopular && <div className="tier-badge">Most Popular</div>}
                <h3 className="tier-name">{tier.name}</h3>
                <div className="tier-amount">{tier.amount}</div>
                <p className="tier-desc">{tier.desc}</p>
                <div className="tier-divider"></div>
                <ul className="tier-perks">
                  {tier.perks.map((perk, i) => (
                    <li key={i}>
                      <CheckCircle size={16} className="tier-perk-icon" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-openai w-full mt-auto" style={{justifyContent: 'center'}}>
                  Select Tier
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to Sponsor Us ── */}
      <section className="sponsor-section">
        <div className="container">
          <div className="section-header-centered">
            <h2 className="section-heading">How to Sponsor Us</h2>
          </div>
          
          <div className="steps-container">
            <div className="step-item scroll-reveal delay-1">
              <div className="step-icon-wrapper"><Target size={28} /></div>
              <div className="step-content">
                <h3 className="step-title">1. Choose a Tier</h3>
                <p className="step-desc">Review our partnership tiers above and select the level of engagement that aligns with your company's goals and budget.</p>
              </div>
            </div>
            
            <div className="step-connector scroll-reveal delay-2"></div>
            
            <div className="step-item scroll-reveal delay-3">
              <div className="step-icon-wrapper"><Network size={28} /></div>
              <div className="step-content">
                <h3 className="step-title">2. Connect With Us</h3>
                <p className="step-desc">Reach out via our contact form or email our Operations Lead. We'll schedule a call to discuss custom requirements or specific branding needs.</p>
              </div>
            </div>
            
            <div className="step-connector scroll-reveal delay-4"></div>
            
            <div className="step-item scroll-reveal delay-5">
              <div className="step-icon-wrapper"><Binary size={28} /></div>
              <div className="step-content">
                <h3 className="step-title">3. Finalize Details</h3>
                <p className="step-desc">We will send a formal MoU and invoice. Once processed, your branding immediately goes live on our digital platforms and hardware.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 scroll-reveal delay-5">
            <Link to="/support-us" className="btn-openai">
              Join Our 2025–26 Season <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Current Sponsors – logo grid ── */}
      <section className="sponsor-section logos-section">
        <div className="container">
          <p className="logos-eyebrow scroll-reveal delay-1">Trusted by Industry Leaders</p>
          <div className="logos-grid scroll-reveal delay-2">
            {sponsors.map((s, i) => (
              <div className={`logo-cell logo-cell--${s.size}`} key={i}>
                <span className="logo-text">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Sponsorship;
