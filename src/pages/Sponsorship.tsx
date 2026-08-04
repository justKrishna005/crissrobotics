import { Link } from 'react-router';
import { Globe2, CheckCircle, Target, Network, Binary, ChevronDown } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Sponsorship.css';

const srtLogo = '/images/sponsor logos/SRT logo.png';
const altiumLogo = '/images/sponsor logos/altium logo.svg';
const ansysLogo = '/images/sponsor logos/ansys logo.png';
const autodeskLogo = '/images/sponsor logos/autodesk logo.png';
const dwartLogo = '/images/sponsor logos/dwart logo.png';
const krysnayeLogo = '/images/sponsor logos/krysnaye logo.png';
const odriveLogo = '/images/sponsor logos/odrive logo.png';
const onlyScrewsLogo = '/images/sponsor logos/only screws logo.avif';
const opticaLogo = '/images/sponsor logos/optica logo.png';
const pcbPowerLogo = '/images/sponsor logos/pcb power logo.webp';
const skfLogo = '/images/sponsor logos/skf logo.webp';
const solidworksLogo = '/images/sponsor logos/solidworks logo.png';
const speedaccLogo = '/images/sponsor logos/speedacc logo.png';

// Sponsor list
const sponsors = [
  { name: 'SRT', src: srtLogo, size: 'large' },
  { name: 'Altium', src: altiumLogo, size: 'medium' },
  { name: 'Ansys', src: ansysLogo, size: 'medium' },
  { name: 'Autodesk', src: autodeskLogo, size: 'large', invert: true },
  { name: 'Dwart', src: dwartLogo, size: 'large', invert: true },
  { name: 'Krysnaye', src: krysnayeLogo, size: 'large' },
  { name: 'ODrive', src: odriveLogo, size: 'medium', invert: true },
  { name: 'Only Screws', src: onlyScrewsLogo, size: 'large' },
  { name: 'Optica', src: opticaLogo, size: 'medium' },
  { name: 'PCB Power', src: pcbPowerLogo, size: 'medium' },
  { name: 'SKF', src: skfLogo, size: 'medium' },
  { name: 'SolidWorks', src: solidworksLogo, size: 'large' },
  { name: 'SpeedAcc', src: speedaccLogo, size: 'large' },
];

const tiers = [
  {
    name: 'Bronze',
    amount: '₹50,000',
    desc: 'Support engineering and subsystem prototyping.',
    color: '#e8a972', // Softer bronze
    perks: [
      'Logo on team jersey',
      'Logo on exhibition panels',
      'Dedicated social media post'
    ]
  },
  {
    name: 'Silver',
    amount: '₹1,00,000',
    desc: 'Fund critical competition logistics and advanced sensor suites.',
    color: '#d4d4d8', // Brighter silver
    perks: [
      'Logo on rover (secondary)',
      'Quarterly Progress Report',
      'Mention in all press releases',
      'Logo on team jersey',
      'Dedicated social media post'
    ]
  },
  {
    name: 'Gold',
    amount: '₹2,00,000',
    desc: 'Become a cornerstone partner fueling our global operations.',
    color: '#fcd34d', // Softer, brighter gold
    isPopular: true,
    perks: [
      'Custom promotional content',
      'Invitation to rover showcases and events',
      'Logo on rover (prominent)',
      'Logo on rover (secondary)',
      'Quarterly Progress Report',
      'Logo on exhibition panels'
    ]
  },
  {
    name: 'Platinum',
    amount: '₹3,00,000',
    desc: 'Title sponsor with maximum visibility.',
    color: '#60a5fa', // Bright sky blue instead of dark blue
    perks: [
      'Primary logo on rover chassis',
      'Product testing on rover platforms',
      'Custom promotional content',
      'Invitation to rover showcases and events',
      'Logo on rover (prominent)',
      'Logo on rover (secondary)',
      'Quarterly Progress Report'
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
      <section className="upgrade-stats-section scroll-reveal">
        <div className="container">
          <h3 className="upgrade-stats-title">Impact Metrics</h3>
          <div className="upgrade-stats-grid">
            <div className="upgrade-stat-item">
              <div className="upgrade-stat-value">40+</div>
              <div className="upgrade-stat-label">Engineers on the Team</div>
            </div>
            <div className="upgrade-stat-item">
              <div className="upgrade-stat-value">6</div>
              <div className="upgrade-stat-label">International Competitions</div>
            </div>
            <div className="upgrade-stat-item">
              <div className="upgrade-stat-value">3</div>
              <div className="upgrade-stat-label">Continents Competed</div>
            </div>
            <div className="upgrade-stat-item">
              <div className="upgrade-stat-value">#1</div>
              <div className="upgrade-stat-label">IRDC 2023 Global Rank</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Sponsor Us? ── */}
      <section className="sponsor-section">
        <div className="container" style={{ maxWidth: '1400px' }}>
          <div className="section-header-centered">
            <h2 className="section-heading">Why Sponsor Us</h2>
            <p className="section-paragraph max-w-800">
              Building autonomous rovers for extra-terrestrial analogs requires immense resources, cutting-edge hardware, and world-class testing facilities. We rely on industry partners to push the boundaries of what undergraduate engineers can accomplish.
            </p>
          </div>

          <div className="why-sponsor-grid">
            <div className="tech-card scroll-reveal delay-1" style={{ '--card-color': '#70e0e0' } as React.CSSProperties}>
              <div className="tech-card-icon"><Globe2 size={32} /></div>
              <h3 className="tech-card-title">Global Brand Visibility</h3>
              <div className="tech-card-desc">
                <p>Your brand logo travels to the European Rover Challenge in Poland, the Australian Rover Challenge in Adelaide, and international media coverage. Each competition reaches live audiences, educational institutions, and engineering communities worldwide.</p>
              </div>
            </div>

            <div className="tech-card scroll-reveal delay-2" style={{ '--card-color': '#b77580' } as React.CSSProperties}>
              <div className="tech-card-icon"><Network size={32} /></div>
              <h3 className="tech-card-title">BITS Pilani Network</h3>
              <div className="tech-card-desc">
                <p>BITS Pilani is India's top-ranked private engineering institution. Sponsoring CRISS gives your brand credibility within one of the world's most respected engineering alumni networks &mdash; spanning Google, Microsoft, Qualcomm, and beyond.</p>
              </div>
            </div>

            <div className="tech-card scroll-reveal delay-3" style={{ '--card-color': '#4ac1d8' } as React.CSSProperties}>
              <div className="tech-card-icon"><Target size={32} /></div>
              <h3 className="tech-card-title">Frontier Research Association</h3>
              <div className="tech-card-desc">
                <p>No other student team builds in-house UV, NIR, and Raman spectrometers. Associating your brand with CRISS signals a genuine commitment to frontier scientific research &mdash; a powerful differentiator for technology and R&D companies.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 scroll-reveal delay-4">
            <a href="https://www.canva.com/design/DAHPAopqEA8/3tyNX4eCS1K-1qAIeoh-5A/view" target="_blank" rel="noopener noreferrer" className="btn btn-solid">
              Sponsorship Brochure 2026-27
            </a>
          </div>
        </div>
      </section>

      {/* ── What We Offer (Tiers) ── */}
      <section className="sponsor-section">
        <div className="container" style={{ maxWidth: '1400px' }}>
          <div className="section-header-centered">
            <h2 className="section-heading">What We Offer</h2>
            <p className="section-paragraph">
              We offer structured partnership tiers designed to maximize ROI for your brand, providing everything from logo placement to direct recruitment access.
            </p>
          </div>

          <div className="tiers-grid">
            {tiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`tier-card ${tier.isPopular ? 'tier-card-popular' : ''} scroll-reveal delay-${(index % 4) + 1}`}
                style={{ borderColor: tier.color }}
              >
                {tier.isPopular && <div className="tier-badge" style={{ backgroundColor: tier.color }}>Most Popular</div>}
                <h3 className="tier-name">{tier.name}</h3>
                <div className="tier-amount">{tier.amount}</div>
                <p className="tier-desc">{tier.desc}</p>
                <div className="tier-divider"></div>
                <ul className="tier-perks">
                  {tier.perks.map((perk, i) => (
                    <li key={i}>
                      <CheckCircle size={16} className="tier-perk-icon" style={{ color: tier.color }} />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
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
            <div className="step-item scroll-reveal delay-1" style={{ '--card-color': '#70e0e0' } as React.CSSProperties}>
              <div className="step-icon-wrapper"><Target size={28} /></div>
              <div className="step-content">
                <h3 className="step-title">1. Choose a Tier</h3>
                <p className="step-desc">Review our partnership tiers above and select the level of engagement that aligns with your company's goals and budget.</p>
              </div>
            </div>

            <div className="step-connector scroll-reveal delay-2"></div>

            <div className="step-item scroll-reveal delay-3" style={{ '--card-color': '#b77580' } as React.CSSProperties}>
              <div className="step-icon-wrapper"><Network size={28} /></div>
              <div className="step-content">
                <h3 className="step-title">2. Connect With Us</h3>
                <p className="step-desc">Reach out via our contact form or email us. We'll schedule a call to discuss custom requirements or specific branding needs.</p>
              </div>
            </div>

            <div className="step-connector scroll-reveal delay-4"></div>

            <div className="step-item scroll-reveal delay-5" style={{ '--card-color': '#4ac1d8' } as React.CSSProperties}>
              <div className="step-icon-wrapper"><Binary size={28} /></div>
              <div className="step-content">
                <h3 className="step-title">3. Finalize Details</h3>
                <p className="step-desc">We will send a formal MoU and invoice. Once processed, your branding immediately goes live on our digital platforms and hardware.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 scroll-reveal delay-5">
            <Link to="/contact" className="btn btn-solid">
              Join Our 2025–26 Season
            </Link>
          </div>
        </div>
      </section>

      {/* ── Current Sponsors – logo grid ── */}
      <section className="sponsor-section logos-section">
        <div className="container">
          <h3 className="upgrade-stats-title text-center scroll-reveal delay-1">Trusted by Industry Leaders</h3>
          <div className="logos-grid scroll-reveal delay-2">
            {sponsors.map((s, i) => (
              <div className={`logo-cell logo-cell--${s.size}`} key={i}>
                <img src={s.src} alt={s.name} className={`sponsor-logo-img ${s.invert ? 'invert-logo' : ''}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Sponsorship;

