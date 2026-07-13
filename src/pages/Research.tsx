import { Microscope, Cpu, Radio, Rocket, FlaskConical, Navigation, ArrowRight, FileText, Download } from 'lucide-react';
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

// ─── R&D Frontier Data ────────────────────────────────────────────────────────

const rdFrontier = [
  {
    icon: <Rocket size={32} />,
    title: 'Martian Drones',
    description:
      'Autonomous aerial systems designed for extra-terrestrial exploration. We are developing lightweight, rotor-based UAVs capable of operating in thin atmospheric conditions for terrain mapping and sample site identification.',
  },
  {
    icon: <FlaskConical size={32} />,
    title: 'In-House Spectrometers',
    description:
      'Custom NIR spectrophotometry instruments for real-time soil composition analysis. Our spectrometers are designed to be compact, rover-mountable, and capable of identifying organic compounds in analog environments.',
  },
  {
    icon: <Navigation size={32} />,
    title: 'Autonomous Navigation',
    description:
      'Full self-driving rover stacks leveraging ROS2, SLAM, and computer vision. Our autonomy pipeline enables GPS-denied waypoint navigation, obstacle avoidance, and dynamic path planning in unstructured terrain.',
  },
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
            <Microscope size={20} className="section-icon" />
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

      {/* ── R&D Frontier ── */}
      <section className="research-section research-section--alt">
        <div className="container">
          <div className="section-header-left">
            <Cpu size={20} className="section-icon" />
            <h2 className="section-heading">What We're Building Next</h2>
          </div>
          <p className="section-paragraph max-w-800" style={{ marginBottom: '3rem' }}>
            Beyond competitions, our team is actively researching and developing technologies that push the limits of what student-built systems can achieve.
          </p>

          <div className="frontier-grid">
            {rdFrontier.map((item, index) => (
              <div key={index} className={`frontier-card scroll-reveal delay-${index + 1}`}>
                <div className="frontier-card-icon">{item.icon}</div>
                <h3 className="frontier-card-title">{item.title}</h3>
                <p className="frontier-card-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Research Reports / Publications ── */}
      <section className="research-section">
        <div className="container">
          <div className="section-header-left">
            <FileText size={20} className="section-icon" />
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
                  <Download size={16} />
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
            <Radio size={20} className="section-icon" />
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
                        <ArrowRight size={12} />
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
