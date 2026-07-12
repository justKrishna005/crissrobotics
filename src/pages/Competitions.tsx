import { useState } from 'react';
import { ExternalLink, Trophy, Award, Medal, Star, ChevronDown, ChevronUp, Play, Cpu, Weight, Radio, Gauge } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Competitions.css';

// ─── Types ────────────────────────────────────────────────────────────────────

interface RoverSpec {
  label: string;
  value: string;
  icon: React.ReactNode;
}

interface Achievement {
  text: string;
  icon: React.ReactNode;
}

interface GalleryImage {
  src: string;
  alt: string;
}

interface CompetitionData {
  id: string;
  acronym: string;
  fullName: string;
  website?: string;
  description: string;
  roverName: string;
  roverSpecs: RoverSpec[];
  gallery: GalleryImage[];
  sarVideoUrl?: string;        // YouTube embed URL
  achievements: Achievement[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const competitions: CompetitionData[] = [
  {
    id: 'irc',
    acronym: 'IRC',
    fullName: 'International Rover Challenge',
    website: 'https://www.spaceroboticssociety.org/events/international-rover-challenge/',
    description:
      'The International Rover Challenge (formerly Indian Rover Challenge), organized by the Space Robotics Society, is the sole competition of its kind in the Asia-Pacific region. It challenges student teams worldwide to engineer rovers ready for space exploration, fostering innovation and inspiring the next generation of engineers. Teams are evaluated across multiple tasks including autonomous traversal, equipment servicing, science operations, and business plan presentations.',
    roverName: 'Curie II',
    roverSpecs: [
      { label: 'Weight', value: '~50 kg', icon: <Weight size={16} /> },
      { label: 'DOF (Arm)', value: '5-DOF', icon: <Cpu size={16} /> },
      { label: 'Autonomy', value: 'Semi-Autonomous', icon: <Gauge size={16} /> },
      { label: 'Comms', value: '900 MHz + 2.4 GHz', icon: <Radio size={16} /> },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop', alt: 'Rover field testing' },
      { src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop', alt: 'Team at competition' },
      { src: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=800&auto=format&fit=crop', alt: 'Rover arm operation' },
    ],
    sarVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    achievements: [
      { text: 'Best Business Plan Award — IRC 2024', icon: <Trophy size={16} /> },
      { text: '2nd in PIMA Evaluation — IRC 2024', icon: <Medal size={16} /> },
      { text: 'Overall Rank 10 — IRC 2024', icon: <Award size={16} /> },
    ],
  },
  {
    id: 'erc',
    acronym: 'ERC',
    fullName: 'European Rover Challenge',
    website: 'https://roverchallenge.eu/en/main-page/',
    description:
      'The European Rover Challenge is an international robotics competition where academic teams from around the world present their mobile robot designs, competing in missions based on real ESA and NASA scenarios. The event takes place on the world\'s largest artificial Martian track in Kielce, Poland. Teams face challenges in autonomous navigation, sample collection, equipment maintenance, and science tasks under simulated Martian conditions.',
    roverName: 'Curie II',
    roverSpecs: [
      { label: 'Weight', value: '~50 kg', icon: <Weight size={16} /> },
      { label: 'DOF (Arm)', value: '5-DOF', icon: <Cpu size={16} /> },
      { label: 'Autonomy', value: 'Full Autonomous Nav', icon: <Gauge size={16} /> },
      { label: 'Comms', value: 'LoRa + WiFi', icon: <Radio size={16} /> },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=800&auto=format&fit=crop', alt: 'Mars analog terrain' },
      { src: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=800&auto=format&fit=crop', alt: 'Rover on Martian track' },
      { src: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=800&auto=format&fit=crop', alt: 'Software development' },
    ],
    sarVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    achievements: [
      { text: '2nd in Asia, 3rd Internationally — ERC 2025', icon: <Medal size={16} /> },
      { text: '2nd in Asia, 5th Worldwide — ERC 2023', icon: <Medal size={16} /> },
      { text: 'Best in Maintenance Award — ERC 2023', icon: <Trophy size={16} /> },
    ],
  },
  {
    id: 'arch',
    acronym: 'ARC',
    fullName: 'Australian Rover Challenge',
    website: 'https://www.aiaa.org/arch',
    description:
      'The Australian Rover Challenge evaluates a rover\'s ability to operate in complex, real-world environments across the Australian outback. Teams are scored on system architecture, mechanical reliability, autonomous decision-making, and end-to-end mission execution. CRISS Robotics made history by becoming the first and only Indian team to receive an invitation to participate in 2026.',
    roverName: 'Curie III',
    roverSpecs: [
      { label: 'Weight', value: '~45 kg', icon: <Weight size={16} /> },
      { label: 'DOF (Arm)', value: '6-DOF', icon: <Cpu size={16} /> },
      { label: 'Autonomy', value: 'Full Autonomous', icon: <Gauge size={16} /> },
      { label: 'Comms', value: '900 MHz + LoRa', icon: <Radio size={16} /> },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=800&auto=format&fit=crop', alt: 'Australian outback terrain' },
      { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop', alt: 'Rover assembly' },
      { src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop', alt: 'Testing environment' },
    ],
    sarVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    achievements: [
      { text: 'First & Only Indian Team Invited — ARC 2026', icon: <Star size={16} /> },
    ],
  },
  {
    id: 'irdc',
    acronym: 'IRDC',
    fullName: 'International Rover Design Challenge',
    website: 'https://southasia.marssociety.org/irdc/',
    description:
      'The International Rover Design Challenge (IRDC) challenges university students to design Mars rovers fully equipped and mission-ready for operation on Mars. Teams meticulously plan every subsystem — mechanical, electrical, and software — considering real extra-terrestrial parameters. The competition evaluates the ingenuity and feasibility of rover designs through detailed documentation and technical presentations.',
    roverName: 'Curie',
    roverSpecs: [
      { label: 'Weight', value: '~48 kg (design)', icon: <Weight size={16} /> },
      { label: 'DOF (Arm)', value: '5-DOF', icon: <Cpu size={16} /> },
      { label: 'Autonomy', value: 'Hybrid Nav Stack', icon: <Gauge size={16} /> },
      { label: 'Sensors', value: 'NIR Spectrometer', icon: <Radio size={16} /> },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop', alt: 'Design documentation' },
      { src: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop', alt: 'CAD modeling' },
      { src: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=800&auto=format&fit=crop', alt: 'Rover prototype' },
    ],
    sarVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    achievements: [
      { text: '1st Rank Worldwide with Curie Rover — IRDC 2023', icon: <Trophy size={16} /> },
      { text: '3rd Rank Overall — IRDC 2025', icon: <Award size={16} /> },
    ],
  },
  {
    id: 'isdc',
    acronym: 'ISDC',
    fullName: 'International Space Development Conference',
    website: 'https://isdc.nss.org/',
    description:
      'The ISDC is one of the world\'s premier annual gatherings focused on space exploration, colonisation, and development. CRISS participates in design competitions and technical presentations, showcasing research and rover technology to a global audience of space professionals and academics. The conference provides a platform to network with leading aerospace organizations and present our engineering innovations.',
    roverName: 'Curie II',
    roverSpecs: [
      { label: 'Weight', value: '~50 kg', icon: <Weight size={16} /> },
      { label: 'DOF (Arm)', value: '5-DOF', icon: <Cpu size={16} /> },
      { label: 'Autonomy', value: 'Semi-Autonomous', icon: <Gauge size={16} /> },
      { label: 'Payload', value: 'Science Suite', icon: <Radio size={16} /> },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop', alt: 'Conference presentation' },
      { src: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=800&auto=format&fit=crop', alt: 'Team at ISDC' },
      { src: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=800&auto=format&fit=crop', alt: 'Space development expo' },
    ],
    sarVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    achievements: [
      { text: 'Technical Presentation — ISDC 2024', icon: <Award size={16} /> },
    ],
  },
  {
    id: 'robofest',
    acronym: 'Robofest',
    fullName: 'Gujarat Robofest 4.0',
    website: 'https://robofest.net/',
    description:
      'Robofest is an autonomous robotics festival and competition that challenges student teams to design, build, and program robots capable of completing complex autonomous missions without any human intervention during the run. It emphasises ingenuity, algorithmic thinking, and real-world system robustness. CRISS participated with an innovative concept that earned recognition in the ideation phase.',
    roverName: 'Curie II',
    roverSpecs: [
      { label: 'Weight', value: '~50 kg', icon: <Weight size={16} /> },
      { label: 'DOF (Arm)', value: '5-DOF', icon: <Cpu size={16} /> },
      { label: 'Autonomy', value: 'Full Autonomous', icon: <Gauge size={16} /> },
      { label: 'AI Stack', value: 'ROS2 + SLAM', icon: <Radio size={16} /> },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop', alt: 'Robofest arena' },
      { src: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=800&auto=format&fit=crop', alt: 'Autonomous testing' },
      { src: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=800&auto=format&fit=crop', alt: 'Electronics work' },
    ],
    sarVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    achievements: [
      { text: 'Won Ideation Phase (Level 1) — Robofest 4.0', icon: <Trophy size={16} /> },
      { text: '₹2.5 Lakhs Prize Money', icon: <Star size={16} /> },
      { text: 'Selected for Level 2 (In Progress)', icon: <Award size={16} /> },
    ],
  },
];

// ─── Competition Section Component ────────────────────────────────────────────

const CompetitionSection = ({
  comp,
  index,
}: {
  comp: CompetitionData;
  index: number;
}) => {
  return (
    <section id={comp.id} className="comp-block animate-fade-in">
      <div className="container">
        {/* ── Section Header ── */}
        <div className="comp-block-header">
          <div className="comp-block-header-left">
            <span className="comp-block-index">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h2 className="comp-block-acronym">{comp.acronym}</h2>
              <p className="comp-block-fullname">{comp.fullName}</p>
            </div>
          </div>
          <div className="comp-block-header-right">
            {comp.website && (
              <a
                href={comp.website}
                target="_blank"
                rel="noopener noreferrer"
                className="comp-website-link"
              >
                <ExternalLink size={14} />
                <span>Official Site</span>
              </a>
            )}
          </div>
        </div>

        {/* ── Content ── */}
        <div id={`comp-content-${comp.id}`} className="comp-block-content comp-block-content--open">
          {/* Photo Gallery */}
          <div className="comp-gallery scroll-reveal delay-1">
            {comp.gallery.map((img, i) => (
              <div key={i} className="comp-gallery-item">
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>

          {/* Details + Specs Grid */}
          <div className="comp-details-grid scroll-reveal delay-2">
            <div className="comp-description">
              <h3 className="comp-subsection-title">About This Competition</h3>
              <p className="comp-description-text">{comp.description}</p>
            </div>
            <div className="comp-specs-card">
              <h3 className="comp-subsection-title">Rover: {comp.roverName}</h3>
              <ul className="comp-specs-list">
                {comp.roverSpecs.map((spec, i) => (
                  <li key={i}>
                    <span className="comp-spec-icon">{spec.icon}</span>
                    <span className="comp-spec-label">{spec.label}</span>
                    <span className="comp-spec-value">{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SAR Video */}
          {comp.sarVideoUrl && (
            <div className="comp-sar scroll-reveal delay-3">
              <h3 className="comp-subsection-title">
                <Play size={18} />
                System Acceptance Review
              </h3>
              <div className="comp-sar-embed">
                <iframe
                  src={comp.sarVideoUrl}
                  title={`${comp.acronym} SAR Video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* Achievements */}
          <div className="comp-achievements scroll-reveal delay-4">
            <h3 className="comp-subsection-title">Achievements & Rankings</h3>
            <div className="comp-achievements-list">
              {comp.achievements.map((ach, i) => (
                <div key={i} className="comp-achievement-item">
                  <span className="comp-achievement-icon">{ach.icon}</span>
                  <span>{ach.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



// ─── Page ─────────────────────────────────────────────────────────────────────

const Competitions = () => {
  const [activeCompId, setActiveCompId] = useState(competitions[0].id);
  const activeComp = competitions.find((c) => c.id === activeCompId) || competitions[0];
  const activeIndex = competitions.findIndex((c) => c.id === activeCompId);

  useScrollReveal();

  return (
    <div className="animate-fade-in">
      <header className="page-header page-header--photo">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="comp-page-title">Competitions</h1>
          <p className="comp-page-subtitle">
            CRISS has consistently been among the top rover teams globally,
            competing in prestigious international competitions.
          </p>
        </div>
      </header>

      {/* ── Tab Navigation ── */}
      <nav className="comp-nav-bar" aria-label="Competition navigation">
        {competitions.map((comp) => (
          <button
            key={comp.id}
            className={`comp-nav-tab ${activeCompId === comp.id ? 'comp-nav-tab--active' : ''}`}
            onClick={() => setActiveCompId(comp.id)}
          >
            {comp.acronym}
          </button>
        ))}
      </nav>

      <div className="comp-sections-wrapper">
        <CompetitionSection key={activeComp.id} comp={activeComp} index={activeIndex} />
      </div>
    </div>
  );
};

export default Competitions;
