import { useState } from 'react';
import { ExternalLink, Trophy, Award, Medal, Star, Play, Cpu, Weight, Radio, Gauge, ChevronDown } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Competitions.css';

import archVideo from "../images/good_photos/competitions/video arch'26.mp4";

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
  localVideo?: string;         // Local video asset
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
      'During the International Rover Challenge 2024, we were honored with the Best Business Plan Award for our detailed rover commercialization and sustainability strategy. Competing against top international teams, we secured an overall rank of 10th and finished 2nd in the PIMA evaluation, reflecting our strong balance of technical execution and strategic planning.',
    roverName: 'Curie II',
    roverSpecs: [
      { label: 'Weight', value: '~50 kg', icon: <Weight size={16} /> },
      { label: 'DOF (Arm)', value: '5-DOF', icon: <Cpu size={16} /> },
      { label: 'Autonomy', value: 'Semi-Autonomous', icon: <Gauge size={16} /> },
      { label: 'Comms', value: '900 MHz + 2.4 GHz', icon: <Radio size={16} /> },
    ],
    gallery: [
      { src: '/Icarus_1.jpeg', alt: 'Rover field testing' },
      { src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop', alt: 'Team at competition' },
      { src: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=800&auto=format&fit=crop', alt: 'Rover arm operation' },
    ],
    sarVideoUrl: 'https://www.youtube.com/embed/Lyqm1RDACO8',
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
      { src: '/20260327_165848.jpg', alt: 'Mars analog terrain' },
      { src: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=800&auto=format&fit=crop', alt: 'Rover on Martian track' },
      { src: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=800&auto=format&fit=crop', alt: 'Software development' },
    ],
    sarVideoUrl: 'https://www.youtube.com/embed/o5EDir4B6mE',
    achievements: [
      { text: 'Globally 3rd and 2nd in Asia — ERC 2025', icon: <Medal size={16} /> },
      { text: '2nd Place, Maintenance & Design Category — ERC 2022', icon: <Trophy size={16} /> },
    ],
  },
  {
    id: 'arch',
    acronym: 'ARCh',
    fullName: 'Australian Rover Challenge',
    website: 'https://adelaide.edu.au/about/events/2027/australian-rover-challenge/',
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
      { src: '/20260327_165848.jpg', alt: 'Australian outback terrain' },
      { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop', alt: 'Rover assembly' },
      { src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop', alt: 'Testing environment' },
    ],
    localVideo: archVideo,
    achievements: [
      { text: '1st & only team from India ever invited — ARCh 2026', icon: <Star size={16} /> },
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
      { src: '/CRISS_Unlabelled.png', alt: 'Design documentation' },
      { src: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop', alt: 'CAD modeling' },
      { src: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=800&auto=format&fit=crop', alt: 'Rover prototype' },
    ],
    sarVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    achievements: [
      { text: '1st Rank Overall — IRDC 2023', icon: <Trophy size={16} /> },
      { text: '2nd Rank Overall — IRDC 2024', icon: <Medal size={16} /> },
      { text: '3rd Rank Overall — IRDC 2025', icon: <Award size={16} /> },
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
      { text: 'Finalists — RoboFest 4.0', icon: <Trophy size={16} /> },
      { text: 'Top 3 — RoboFest 3.0', icon: <Medal size={16} /> },
    ],
  },
];

// ─── Competition Section Component ────────────────────────────────────────────

const CompetitionSection = ({
  comp,
}: {
  comp: CompetitionData;
}) => {
  return (
    <section id={comp.id} className="comp-block animate-fade-in">
      <div className="container">
        {/* ── Section Header ── */}
        <div className="comp-block-header">
          <div className="comp-block-header-left">
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
          {/* Top Section: Photo (Left) + Details (Right) */}
          <div className="comp-top-grid scroll-reveal delay-1">
            {/* Single Photo */}
            <div className="comp-single-photo">
              <img src={comp.gallery[0].src} alt={comp.gallery[0].alt} loading="lazy" />
            </div>

            {/* Details */}
            <div className="comp-description">
              <h3 className="comp-subsection-title">About This Competition</h3>
              <p className="comp-description-text">{comp.description}</p>
            </div>
          </div>

          {/* Video + Achievements Grid */}
          <div className="comp-video-achievements-grid">
            {/* SAR Video */}
            {(comp.sarVideoUrl || comp.localVideo) ? (
              <div className="comp-sar scroll-reveal delay-3">
                <h3 className="comp-subsection-title">
                  <Play size={18} />
                  {comp.id === 'irc' 
                    ? 'IRC 2024 SDDR' 
                    : comp.id === 'arch' 
                    ? 'ARCh 2026' 
                    : 'System Acceptance Review'}
                </h3>
                <div className="comp-sar-embed">
                  {comp.localVideo ? (
                    <video
                      src={comp.localVideo}
                      controls
                      style={{ width: '100%', height: '100%', backgroundColor: '#000' }}
                    />
                  ) : (
                    <iframe
                      src={comp.sarVideoUrl}
                      title={`${comp.acronym} SAR Video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>
              </div>
            ) : (
              <div />
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
      </div>
    </section>
  );
};



// ─── Page ─────────────────────────────────────────────────────────────────────

const Competitions = () => {
  useScrollReveal();
  const [activeCompId, setActiveCompId] = useState(competitions[0].id);
  const activeComp = competitions.find(c => c.id === activeCompId) || competitions[0];

  return (
    <div className="animate-fade-in">
      <header className="page-header page-header--photo">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="page-title animate-slide-up">Competitions</h1>
          <p className="page-subtitle animate-slide-up delay-100">
            CRISS has consistently been among the top rover teams globally,
            competing in prestigious international competitions.
          </p>
        </div>
        <div
          className="scroll-indicator"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ChevronDown size={32} strokeWidth={1.5} />
        </div>
      </header>

      {/* ── Navigation Bar ── */}
      <div className="comp-nav-bar animate-fade-in delay-200">
        {competitions.map((comp) => (
          <button
            key={comp.id}
            className={`comp-nav-tab ${activeCompId === comp.id ? 'comp-nav-tab--active' : ''}`}
            onClick={() => setActiveCompId(comp.id)}
          >
            {comp.acronym}
          </button>
        ))}
      </div>

      <div id="comp-details-area" className="comp-sections-wrapper" style={{ marginTop: '2rem', paddingBottom: '4rem' }}>
        <CompetitionSection key={activeComp.id} comp={activeComp} />
      </div>
    </div>
  );
};

export default Competitions;
