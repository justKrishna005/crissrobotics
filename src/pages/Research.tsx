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
    image: '/autonomous-mars-rover.png'
  },
  {
    title: 'IN-HOUSE SPECTROMETERS',
    description: 'To design, build, and validate custom analytical payloads for life marker detection, soil mineralogy, and biosignature analysis in Mars analogs.',
    bullets: [
      '532 nm Raman system',
      'Custom Czerny-Turner optical architecture',
      'Modular and reconfigurable opto-mechanical design',
      'Integrated spectral acquisition and signal processing pipeline',
      'Compact, lightweight design optimized for rover deployment'
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

  const roverGalleryRef = useRef<HTMLDivElement>(null);
  const [activeRoverIndex, setActiveRoverIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (galleryRef.current && galleryRef.current.children[index]) {
      const target = galleryRef.current.children[index] as HTMLElement;
      // Scroll to the specific child's offset
      const scrollLeft = target.offsetLeft - galleryRef.current.offsetLeft;
      galleryRef.current.scrollTo({
        left: scrollLeft,
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
      let closestIndex = 0;
      let minDiff = Infinity;

      Array.from(galleryRef.current.children).forEach((child, index) => {
        const target = child as HTMLElement;
        const targetLeft = target.offsetLeft - galleryRef.current!.offsetLeft;
        const diff = Math.abs(targetLeft - scrollLeft);
        if (diff < minDiff) {
          minDiff = diff;
          closestIndex = index;
        }
      });

      if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    }
  };

  const scrollRoverToIndex = (index: number) => {
    if (roverGalleryRef.current && roverGalleryRef.current.children[index]) {
      const target = roverGalleryRef.current.children[index] as HTMLElement;
      const scrollLeft = target.offsetLeft - roverGalleryRef.current.offsetLeft;
      roverGalleryRef.current.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
      setActiveRoverIndex(index);
    }
  };

  const handleRoverNext = () => {
    if (activeRoverIndex < roverTimeline.length - 1) {
      scrollRoverToIndex(activeRoverIndex + 1);
    }
  };

  const handleRoverPrev = () => {
    if (activeRoverIndex > 0) {
      scrollRoverToIndex(activeRoverIndex - 1);
    }
  };

  const handleRoverScroll = () => {
    if (roverGalleryRef.current) {
      const scrollLeft = roverGalleryRef.current.scrollLeft;
      let closestIndex = 0;
      let minDiff = Infinity;

      Array.from(roverGalleryRef.current.children).forEach((child, index) => {
        const target = child as HTMLElement;
        const targetLeft = target.offsetLeft - roverGalleryRef.current!.offsetLeft;
        const diff = Math.abs(targetLeft - scrollLeft);
        if (diff < minDiff) {
          minDiff = diff;
          closestIndex = index;
        }
      });

      if (closestIndex !== activeRoverIndex) {
        setActiveRoverIndex(closestIndex);
      }
    }
  };

  const handleRoverKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleRoverNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handleRoverPrev();
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

          <div className="platforms-new-gallery-wrapper" tabIndex={0} onKeyDown={handleKeyDown} style={{ outline: 'none' }}>
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
                  <div className="platforms-new-content">
                    <h4 className="platforms-new-card-title">{platform.title}</h4>
                    <p className="platforms-new-card-desc">{platform.description}</p>
                    <ul className="platform-bullets">
                      {platform.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
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



      {/* ── Rover Evolution Timeline ── */}
      <section className="research-section" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <div className="section-header-left">
            <h2 className="section-heading">Rover Evolution</h2>
          </div>
          <p className="section-paragraph max-w-800" style={{ marginBottom: '3rem' }}>
            From our first prototype to a globally competitive rover, trace the engineering journey that defines CRISS Robotics.
          </p>

          <div className="rover-timeline-wrapper" tabIndex={0} onKeyDown={handleRoverKeyDown} style={{ outline: 'none', position: 'relative' }}>
            <div className="platforms-new-controls" style={{ position: 'absolute', top: '-4rem', right: '0' }}>
              <button className="carousel-btn" onClick={handleRoverPrev}><ArrowLeft size={16} /></button>
              <button className="carousel-btn" onClick={handleRoverNext}><ArrowRight size={16} /></button>
            </div>

            <div className="rover-timeline" ref={roverGalleryRef} onScroll={handleRoverScroll}>
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
        </div>
      </section>
    </div>
  );
};

export default Research;
