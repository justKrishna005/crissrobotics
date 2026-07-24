import { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Research.css';

// ─── Funded Projects Data ─────────────────────────────────────────────────────

const fundedProjects = [
  {
    title: 'Robotic End Manipulator',
    funder: 'SOLVE Research Grant',
    description:
      'Development of an advanced robotic end manipulator for warehouse robotics applications. This project focuses on precision grasping, modular tool-changing, and integration with autonomous mobile platforms for industrial logistics.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'In-House NIR Spectrophotometer',
    funder: 'SPARKLE Research Grant',
    description:
      'Design and fabrication of a custom near-infrared spectrophotometer for real-time soil and mineral analysis. This instrument enables our rover to perform on-field science tasks during competition, identifying key compounds in analog Martian regolith.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop',
  },
];

const platformsData = [
  {
    title: 'AUTONOMOUS MARS ROVER',
    description: 'To execute complex mission types including excavation, construction, delivery, reconnaissance, and maintenance operations.',
    bullets: [
      'Rocker-bogie 4 wheel drive system',
      '6-DOF arm with cycloidal drives',
      'Hot-swappable end effector for multi-mission ops',
      'Industry-grade BLDC motor system',
      'Custom PCBs for drive + arm control',
      'Intra-rover CAN Bus architecture',
      'Nav2 stack on ROS2'
    ],
    image: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'IN-HOUSE SPECTROMETERS',
    description: 'To design, build, and validate custom analytical payloads for life marker detection, soil mineralogy, and biosignature analysis in Mars analogs.',
    bullets: [
      '532 nm Raman system',
      'Custom Czerny-Turner optical architecture',
      'Modular and reconfigurable opto-mechanical design',
      'Integrated spectral acquisition and signal processing pipeline',
      'Compact, lightweight design optimized for rover deployment',
      'High-resolution spectral analysis for trace compound detection',
      'Scalable platform for future UV, VIS, NIR, and LIBS payloads'
    ],
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'MULTISPECTRAL DRONE',
    description: 'To design, develop, and deploy a custom quadcopter platform for aerial reconnaissance, hyperspectral surveys, swarm mapping, and remote payload deployment.',
    bullets: [
      'Custom quadcopter with 2kg payload',
      'Mounted with sensors/spectrometers',
      'FPV + high-resolution imaging',
      'Radio control & long-range comms',
      'Multi-agent coordination capability',
      'Hyperspectral aerial survey'
    ],
    image: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=800&auto=format&fit=crop'
  }
];

const upgradeGoals = [
  { value: '01', label: 'New 6-DOF Arm + Cycloidal Drives' },
  { value: '02', label: 'BLDC Motor Drive System' },
  { value: '03', label: 'Handheld Spectrometers' },
  { value: '04', label: 'Enclosed FDM/SLA 3D Printers' },
  { value: '05', label: 'Swarm Drone Compatibility' },
  { value: '06', label: 'Higher-end GPU for Autonomy' }
];

// ─── Research Reports ─────────────────────────────────────────────────────────

const researchReports = [
  {
    title: 'Autonomous Navigation in Martian Analog Environments',
    date: 'March 2025',
    type: 'Conference Paper',
    description: 'Detailed analysis of our custom ROS2 stack utilizing visual SLAM and LiDAR for GPS-denied navigation in extreme terrain.',
    link: '#'
  },
  {
    title: 'Design and Optimization of 6-DOF Robotic End-Effectors',
    date: 'November 2024',
    type: 'Technical Report',
    description: 'A study on maximizing strength-to-weight ratio in 3D-printed composite manipulators for rover applications.',
    link: '#'
  },
  {
    title: 'In-Situ Soil Analysis via Compact NIR Spectroscopy',
    date: 'June 2024',
    type: 'Whitepaper',
    description: 'Methodology and results from our in-house developed spectrometer identifying moisture and organics in analog regolith.',
    link: '#'
  }
];

// ─── Rover Timeline Data ──────────────────────────────────────────────────────

const roverTimeline = [
  {
    year: '2021',
    name: 'Genesis',
    milestones: ['First rover prototype', 'Basic chassis and 4-wheel drive', 'Manual teleoperation'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop',
  },
  {
    year: '2022',
    name: 'Curie',
    milestones: ['Rocker-bogie suspension', '4-DOF robotic arm', 'First competition entry (IRC)'],
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=600&auto=format&fit=crop',
  },
  {
    year: '2023',
    name: 'Curie II',
    milestones: ['5-DOF arm with end effector', 'Custom PCBs', '1st Rank IRDC, 5th ERC Worldwide'],
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=600&auto=format&fit=crop',
  },
  {
    year: '2024',
    name: 'Curie II v2',
    milestones: ['Upgraded autonomy stack', 'NIR spectrometer integration', 'Best Business Plan IRC'],
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=600&auto=format&fit=crop',
  },
  {
    year: '2025',
    name: 'Curie III',
    milestones: ['6-DOF arm', 'Full autonomous nav', '3rd Intl. ERC, First Indian team at ARC'],
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=600&auto=format&fit=crop',
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

const Research = () => {
  useScrollReveal();

  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (galleryRef.current) {
      const cardWidth = 350 + 32; // card width + gap (2rem = 32px)
      galleryRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  const handleNext = () => {
    if (activeIndex < platformsData.length - 1) {
      scrollToIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  };

  const handleScroll = () => {
    if (galleryRef.current) {
      const scrollLeft = galleryRef.current.scrollLeft;
      const cardWidth = 350 + 32;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    }
  };

  return (
    <div className="research-page animate-fade-in">
      {/* ── Header ── */}
      <header className="page-header page-header--photo">
        <div className="container">
          <h1 className="page-title">Research & Development</h1>
          <p className="page-subtitle">
            Pushing the boundaries of undergraduate engineering through funded research, advanced prototyping, and next-generation robotics.
          </p>
        </div>
      </header>

      {/* ── Funded Projects ── */}
      <section className="research-section">
        <div className="container">
          <div className="section-header-left">
            <h2 className="section-heading">Funded Projects</h2>
          </div>

          <div className="funded-grid">
            {fundedProjects.map((project, index) => (
              <div key={index} className={`funded-card scroll-reveal delay-${index + 1}`}>
                <div className="funded-card-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
                <div className="funded-card-body">
                  <span className="funded-card-funder">{project.funder}</span>
                  <h3 className="funded-card-title">{project.title}</h3>
                  <p className="funded-card-desc">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Platforms ── */}
      <section className="research-platforms-section scroll-reveal">
        <div className="container platforms-new-grid">

          <div className="platforms-new-sidebar">
            <h2 className="platforms-new-title">THREE<br />PLATFORMS.<br />ONE MISSION.</h2>
            <p style={{ color: '#a1a1aa', fontSize: '0.9rem', marginBottom: '3rem', maxWidth: '90%' }}>
              End-to-end designed, fabricated and programmed by CRISS, no off-the-shelf competition kits.
            </p>
            <ul className="platforms-new-links">
              {platformsData.map((platform, idx) => (
                <li
                  key={idx}
                  className={activeIndex === idx ? 'active' : ''}
                  onClick={() => scrollToIndex(idx)}
                >
                  {platform.title.replace('AUTONOMOUS ', '').replace('IN-HOUSE ', '')}
                </li>
              ))}
            </ul>
          </div>

          <div className="platforms-new-gallery-wrapper">
            <div className="platforms-new-controls">
              <button className="carousel-btn" onClick={handlePrev}><ArrowLeft size={16} /></button>
              <button className="carousel-btn" onClick={handleNext}><ArrowRight size={16} /></button>
            </div>

            <div
              className="platforms-new-gallery"
              ref={galleryRef}
              onScroll={handleScroll}
            >
              {platformsData.map((platform, index) => (
                <div key={index} className="platforms-new-card">
                  <div className="platforms-new-img-box">
                    <img src={platform.image} alt={platform.title} loading="lazy" />
                  </div>
                  <h4 className="platforms-new-card-title">{platform.title}</h4>
                  <p className="platforms-new-card-desc">{platform.description}</p>
                  <ul className="platform-bullets">
                    {platform.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="container">
          <div className="upgrade-stats-section scroll-reveal delay-4">
            <h3 className="upgrade-stats-title">2026-27 Upgrade Goals</h3>
            <div className="upgrade-stats-grid">
              {upgradeGoals.map((goal, index) => (
                <div key={index} className="upgrade-stat-item">
                  <div className="upgrade-stat-value">{goal.value}</div>
                  <div className="upgrade-stat-label">{goal.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Research Reports / Publications ── */}
      <section className="research-section">
        <div className="container">
          <div className="section-header-left">
            <h2 className="section-heading">Reports & Publications</h2>
          </div>
          <p className="section-paragraph max-w-800" style={{ marginBottom: '3rem' }}>
            We believe in open-source engineering. Read our published technical reports, conference papers, and system design whitepapers.
          </p>

          <div className="reports-grid">
            {researchReports.map((report, index) => (
              <div key={index} className={`report-card scroll-reveal delay-${index + 1}`}>
                <div className="report-card-header">
                  <span className="report-type">{report.type}</span>
                  <span className="report-date">{report.date}</span>
                </div>
                <h3 className="report-title">{report.title}</h3>
                <p className="report-desc">{report.description}</p>
                <a href={report.link} className="report-link">
                  <span>Download PDF</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Rover Evolution Timeline ── */}
      <section className="research-section">
        <div className="container">
          <div className="section-header-left">
            <h2 className="section-heading">Rover Evolution</h2>
          </div>
          <p className="section-paragraph max-w-800" style={{ marginBottom: '3rem' }}>
            From our first prototype to a globally competitive rover, trace the engineering journey that defines CRISS Robotics.
          </p>

          <div className="rover-timeline">
            {roverTimeline.map((rover, index) => (
              <div key={index} className={`rover-timeline-entry scroll-reveal delay-${(index % 5) + 1}`}>
                <div className="rover-timeline-image">
                  <img src={rover.image} alt={rover.name} loading="lazy" />
                  <div className="rover-timeline-year">{rover.year}</div>
                </div>
                <div className="rover-timeline-body">
                  <h3 className="rover-timeline-name">{rover.name}</h3>
                  <ul className="rover-timeline-milestones">
                    {rover.milestones.map((m, i) => (
                      <li key={i}>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
