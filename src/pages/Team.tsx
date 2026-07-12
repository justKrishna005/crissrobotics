import { useState, useEffect } from 'react';
import { Mail, ArrowLeft, ChevronRight } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Team.css';

// ─── SVG Icons ────────────────────────────────────────────────────────────────

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

// ─── Types ────────────────────────────────────────────────────────────────────

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
  email?: string;
}

interface VerticalData {
  id: string;
  name: string;
  icon: string;
  shortDesc: string;
  fullDesc: string;
  accent: string;
  cardImage: string;
  heroImage: string;
  workImages: string[];
  lead: TeamMember;
  viceLead: TeamMember;
  juniors: TeamMember[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────
// Replace placeholder Unsplash URLs with actual team/work photos when available.

const verticals: VerticalData[] = [
  {
    id: 'mechanical',
    name: 'Mechanical',
    icon: '⚙️',
    shortDesc: 'Chassis, suspension & robotic arm',
    fullDesc:
      'The Mechanical subsystem is responsible for the structural design and fabrication of the rover — from the rocker-bogie suspension and chassis to the 5-DOF robotic arm and end-effector. Every component is engineered to withstand rugged terrains and Martian-analog environments.',
    accent: 'var(--accent-light)',
    cardImage:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=900&auto=format&fit=crop',
    heroImage:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1800&auto=format&fit=crop',
    workImages: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=800&auto=format&fit=crop',
    ],
    lead: {
      name: 'Elena Rodriguez',
      role: 'Mechanical Lead',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
      linkedin: 'https://linkedin.com',
    },
    viceLead: {
      name: 'James Carter',
      role: 'Vice Lead',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
      linkedin: 'https://linkedin.com',
    },
    juniors: [
      {
        name: 'Marcus Johnson',
        role: 'Junior Member',
        image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=400&auto=format&fit=crop',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Aisha Patel',
        role: 'Junior Member',
        image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=400&auto=format&fit=crop',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'David Kim',
        role: 'Junior Member',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
      },
      {
        name: 'Sofia Rossi',
        role: 'Junior Member',
        image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=400&auto=format&fit=crop',
        linkedin: 'https://linkedin.com',
      },
    ],
  },
  {
    id: 'electrical',
    name: 'Electrical',
    icon: '⚡',
    shortDesc: 'Power systems, PCBs & wiring',
    fullDesc:
      'The Electrical subsystem manages all power distribution, custom PCB design, motor driver integration, and embedded electronics aboard the rover. The team ensures reliable power flow and signal integrity across all subsystems under demanding field conditions.',
    accent: 'var(--accent-light)',
    cardImage:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop',
    heroImage:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1800&auto=format&fit=crop',
    workImages: [
      'https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?q=80&w=800&auto=format&fit=crop',
    ],
    lead: {
      name: 'David Kim',
      role: 'Electrical Lead',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    viceLead: {
      name: 'Priya Sharma',
      role: 'Vice Lead',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
      linkedin: 'https://linkedin.com',
    },
    juniors: [
      {
        name: 'Lucas Pereira',
        role: 'Junior Member',
        image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&auto=format&fit=crop',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Zara Ahmed',
        role: 'Junior Member',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Ravi Nair',
        role: 'Junior Member',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
      },
      {
        name: 'Ethan Park',
        role: 'Junior Member',
        image: 'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=400&auto=format&fit=crop',
        linkedin: 'https://linkedin.com',
      },
    ],
  },
  {
    id: 'software',
    name: 'Software',
    icon: '💻',
    shortDesc: 'Autonomy, ROS & navigation',
    fullDesc:
      'The Software team develops all on-board and off-board systems: autonomous navigation, computer vision, ROS2-based control architecture, teleoperation interfaces, and mission planning algorithms. They bridge the gap between hardware and intelligent behavior.',
    accent: 'var(--accent-light)',
    cardImage:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=900&auto=format&fit=crop',
    heroImage:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1800&auto=format&fit=crop',
    workImages: [
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop',
    ],
    lead: {
      name: 'Marcus Johnson',
      role: 'Software Lead',
      image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=400&auto=format&fit=crop',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    viceLead: {
      name: 'Sam Lee',
      role: 'Vice Lead',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    juniors: [
      {
        name: 'Kai Tanaka',
        role: 'Junior Member',
        image: 'https://images.unsplash.com/photo-1495603889488-42d1d66e5523?q=80&w=400&auto=format&fit=crop',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
      },
      {
        name: 'Noah Williams',
        role: 'Junior Member',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
      },
      {
        name: 'Tyler Brooks',
        role: 'Junior Member',
        image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Fatima Al-Hassan',
        role: 'Junior Member',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
        linkedin: 'https://linkedin.com',
      },
    ],
  },
  {
    id: 'science',
    name: 'Science',
    icon: '🔬',
    shortDesc: 'Sample collection & spectroscopy',
    fullDesc:
      'The Science subsystem designs the scientific payload — including soil sample collection tools, in-house NIR spectrophotometry, life-detection instrumentation, and astrobiology protocols. They ensure the rover can accomplish real scientific objectives in the field.',
    accent: 'var(--accent-light)',
    cardImage:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=900&auto=format&fit=crop',
    heroImage:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1800&auto=format&fit=crop',
    workImages: [
      'https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop',
    ],
    lead: {
      name: 'Aisha Patel',
      role: 'Science Lead',
      image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=400&auto=format&fit=crop',
      linkedin: 'https://linkedin.com',
    },
    viceLead: {
      name: 'Chloe Martin',
      role: 'Vice Lead',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop',
      linkedin: 'https://linkedin.com',
    },
    juniors: [
      {
        name: 'Isabelle Dupont',
        role: 'Junior Member',
        image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=400&auto=format&fit=crop',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Hana Iwamoto',
        role: 'Junior Member',
        image: 'https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=400&auto=format&fit=crop',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Maya Osei',
        role: 'Junior Member',
        image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=400&auto=format&fit=crop',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Amara Diallo',
        role: 'Junior Member',
        image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&auto=format&fit=crop',
        linkedin: 'https://linkedin.com',
      },
    ],
  },
  {
    id: 'operations',
    name: 'Operations',
    icon: '📊',
    shortDesc: 'Strategy, outreach & documentation',
    fullDesc:
      'The Operations team manages competition strategy, technical documentation, budget planning, sponsorship outreach, and public relations. They ensure the team is always competition-ready, legally compliant, and globally connected to the robotics community.',
    accent: 'var(--accent-light)',
    cardImage:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop',
    heroImage:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1800&auto=format&fit=crop',
    workImages: [
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop',
    ],
    lead: {
      name: 'Alex Mercer',
      role: 'Team Captain / Ops Lead',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400&auto=format&fit=crop',
      linkedin: 'https://linkedin.com',
    },
    viceLead: {
      name: 'Lily Zhang',
      role: 'Vice Lead',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop',
      linkedin: 'https://linkedin.com',
    },
    juniors: [
      {
        name: 'Amelia Brown',
        role: 'Junior Member',
        image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=400&auto=format&fit=crop',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Layla Hassan',
        role: 'Junior Member',
        image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=400&auto=format&fit=crop',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Yuki Nakamura',
        role: 'Junior Member',
        image: 'https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=400&auto=format&fit=crop',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Neha Gupta',
        role: 'Junior Member',
        image: 'https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?q=80&w=400&auto=format&fit=crop',
        linkedin: 'https://linkedin.com',
      },
    ],
  },
];

// ─── Member Card ──────────────────────────────────────────────────────────────

const MemberCard = ({
  member,
  size = 'normal',
  index = 0,
}: {
  member: TeamMember;
  size?: 'large' | 'normal' | 'small';
  index?: number;
}) => (
  <div className={`member-card member-card--${size} scroll-reveal delay-${(index % 5) + 1}`}>
    <div className="member-image-container">
      <img src={member.image} alt={member.name} className="member-photo" />
    </div>
    <h3 className="member-name">{member.name}</h3>
    <p className="member-role">{member.role}</p>
    <div className="member-socials">
      {member.linkedin && (
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
          <LinkedinIcon />
        </a>
      )}
      {member.github && (
        <a href={member.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
          <GithubIcon />
        </a>
      )}
      {member.email && (
        <a href={member.email} className="social-icon" aria-label="Email">
          <Mail size={14} />
        </a>
      )}
    </div>
  </div>
);

// ─── Vertical Card (landing grid) ─────────────────────────────────────────────

const VerticalCard = ({
  vertical,
  onClick,
  index,
}: {
  vertical: VerticalData;
  onClick: () => void;
  index: number;
}) => (
  <div
    id={`vertical-card-${vertical.id}`}
    className="vertical-card grain-overlay"
    style={{ '--card-accent': vertical.accent, animationDelay: `${index * 0.07}s` } as React.CSSProperties}
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === 'Enter' && onClick()}
    aria-label={`View ${vertical.name} subsystem`}
  >
    <div
      className="vertical-card-bg"
      style={{ backgroundImage: `url(${vertical.cardImage})` }}
    />
    <div className="vertical-card-overlay" />
    <div className="vertical-card-glow" />
    <div className="vertical-card-accent-bar" />

    <div className="vertical-card-content">
      <span className="vertical-card-icon">{vertical.icon}</span>
      <h3 className="vertical-card-name">{vertical.name}</h3>
      <p className="vertical-card-desc">{vertical.shortDesc}</p>
      <div className="vertical-card-lead">
        <span className="vertical-card-lead-dot" />
        <span>Lead: {vertical.lead.name}</span>
      </div>
      <div className="vertical-card-cta">
        Explore <ChevronRight size={13} />
      </div>
    </div>
  </div>
);

// ─── Vertical Detail page ─────────────────────────────────────────────────────

const VerticalDetail = ({
  vertical,
  onBack,
}: {
  vertical: VerticalData;
  onBack: () => void;
}) => {
  useScrollReveal();

  // Scroll to top of content when detail opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="vertical-detail">
      {/* Back navigation */}
      <div className="container">
        <button className="vertical-back-btn" onClick={onBack} aria-label="Back to verticals">
          <ArrowLeft size={16} />
          All Verticals
        </button>
      </div>

      {/* Hero banner */}
      <div
        className="vertical-hero"
        style={{ '--v-accent': vertical.accent } as React.CSSProperties}
      >
        <img
          src={vertical.heroImage}
          alt={`${vertical.name} subsystem`}
          className="vertical-hero-img"
        />
        <div className="vertical-hero-overlay" />
        <div className="vertical-hero-content">
          <span className="vertical-hero-icon">{vertical.icon}</span>
          <h1 className="vertical-hero-title">{vertical.name}</h1>
          <p className="vertical-hero-desc">{vertical.fullDesc}</p>
        </div>
        <div className="vertical-hero-bar" style={{ background: vertical.accent }} />
      </div>

      {/* Work photos */}
      <div className="container">
        <p className="vertical-work-label scroll-reveal delay-1">Work & Research</p>
        <div className="vertical-work-grid">
          {vertical.workImages.map((img, i) => (
            <div key={i} className={`vertical-work-photo scroll-reveal delay-${i + 1}`}>
              <img src={img} alt={`${vertical.name} work ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Members */}
      <section className="vertical-members">
        <div className="container">

          {/* Leadership tier */}
          <div className="members-tier">
            <div className="members-tier-header">
              <div className="members-tier-dot" style={{ background: vertical.accent }} />
              <h2 className="members-tier-title">Leadership</h2>
              <div className="members-tier-line" />
            </div>
            <div className="members-leads-row">
              <MemberCard member={vertical.lead} size="large" index={0} />
              <MemberCard member={vertical.viceLead} size="large" index={1} />
            </div>
          </div>

          {/* Juniors tier */}
          {vertical.juniors.length > 0 && (
            <div className="members-tier">
              <div className="members-tier-header">
                <div className="members-tier-dot" style={{ background: vertical.accent }} />
                <h2 className="members-tier-title">Junior Members</h2>
                <div className="members-tier-line" />
              </div>
              <div className="members-juniors-grid">
                {vertical.juniors.map((member, i) => (
                  <MemberCard key={i} member={member} size="small" index={i} />
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

// ─── Main Team Page ───────────────────────────────────────────────────────────

const Team = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  useScrollReveal();

  const activeVertical = activeId ? verticals.find((v) => v.id === activeId) ?? null : null;

  return (
    <div className="team-page animate-fade-in">
      {/* Persistent page header */}
      <header className="page-header page-header--photo">
        <div className="container">
          <h1 className="page-title">
            MEET THE <span className="text-accent">TEAM</span>
          </h1>
          <p className="page-subtitle">
            {activeVertical
              ? activeVertical.name + ' Subsystem'
              : 'Five specialized verticals. One unified mission.'}
          </p>
        </div>
      </header>

      {activeVertical ? (
        <VerticalDetail
          vertical={activeVertical}
          onBack={() => setActiveId(null)}
        />
      ) : (
        <div className="verticals-landing">
          <div className="container">
            <p className="verticals-intro scroll-reveal delay-1">
              CRISS Robotics is structured around five specialized subsystem verticals, each driving
              a critical dimension of our rover's capabilities — from the chassis to the code.
            </p>
          </div>

          <div className="verticals-grid">
            {verticals.map((v, i) => (
              <VerticalCard
                key={v.id}
                vertical={v}
                index={i}
                onClick={() => {
                  setActiveId(v.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
