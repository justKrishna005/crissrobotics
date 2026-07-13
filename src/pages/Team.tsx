import { useState, useEffect } from 'react';
import { Mail, Wrench, Zap, Code2, FlaskConical, LayoutGrid } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Team.css';

// ─── SVG Icons ────────────────────────────────────────────────────────────────

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
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
  icon: React.ReactNode;
  shortDesc: string;
  fullDesc: string;
  accent: string;
  cardImage: string;
  heroImage: string;
  workImages: string[];
  lead: TeamMember;
  viceLead?: TeamMember;
  systemsEngineers?: TeamMember[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────
// Replace placeholder Unsplash URLs with actual team/work photos when available.

const verticals: VerticalData[] = [
  {
    id: 'mechanical',
    name: 'Mechanical',
    icon: <Wrench size={28} />,
    shortDesc: 'Chassis, suspension & robotic arm',
    fullDesc:
      'The Mechanical subsystem is responsible for the structural design and fabrication of the rover — from the rocker-bogie suspension and chassis to the 5-DOF robotic arm and end-effector. Every component is engineered to withstand rugged terrains and Martian-analog environments.',
    accent: '#60a5fa',
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
      name: 'Ayush Girish Bhandary',
      role: 'Lead',
      image: '../teamimages/image_2.webp',
      linkedin: 'https://linkedin.com',
    },
    viceLead: {
      name: 'Janaansh Patel',
      role: 'Vice Lead',
      image: '../teamimages/Janansh.webp',
      linkedin: 'https://linkedin.com',
    },
    systemsEngineers: [
      {
        name: 'Ved Patel',
        role: 'Systems Engineer',
        image: '../teamimages/Ved.webp',
        linkedin: 'https://linkedin.com',
      }
    ],
  },
  {
    id: 'electrical',
    name: 'Electrical',
    icon: <Zap size={28} />,
    shortDesc: 'Power systems, PCBs & wiring',
    fullDesc:
      'The Electrical subsystem manages all power distribution, custom PCB design, motor driver integration, and embedded electronics aboard the rover. The team ensures reliable power flow and signal integrity across all subsystems under demanding field conditions.',
    accent: '#facc15',
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
      name: 'Vibhav Jain',
      role: 'Lead',
      image: '../teamimages/Vibhav Jain.webp',
      linkedin: 'https://linkedin.com',
    },
    viceLead: {
      name: 'Hitarth Parikh',
      role: 'Vice Lead',
      image: '../teamimages/Hitarth.webp',
      linkedin: 'https://linkedin.com',
    },
    systemsEngineers: [
      {
        name: 'Prasham Agarwal',
        role: 'Systems Engineer',
        image: '../teamimages/Prasham.webp',
        linkedin: 'https://linkedin.com',
      }
    ],
  },
  {
    id: 'software',
    name: 'Software',
    icon: <Code2 size={28} />,
    shortDesc: 'Autonomy, ROS & navigation',
    fullDesc:
      'The Software team develops all on-board and off-board systems: autonomous navigation, computer vision, ROS2-based control architecture, teleoperation interfaces, and mission planning algorithms. They bridge the gap between hardware and intelligent behavior.',
    accent: '#34d399',
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
      name: 'Pranav Biju',
      role: 'Lead',
      image: '../teamimages/Pranav Biju.webp',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    viceLead: {
      name: 'Adhyatma Deep Agrawal',
      role: 'Vice Lead',
      image: '../teamimages/Todi.webp',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    systemsEngineers: [
      {
        name: 'Dev Arora',
        role: 'Systems Engineer',
        image: '../teamimages/Dev.webp',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
      }
    ],
  },
  {
    id: 'payload',
    name: 'Payload',
    icon: <FlaskConical size={28} />,
    shortDesc: 'Sample collection & spectroscopy',
    fullDesc:
      'The Payload subsystem designs the scientific payload — including soil sample collection tools, in-house NIR spectrophotometry, life-detection instrumentation, and astrobiology protocols. They ensure the rover can accomplish real scientific objectives in the field.',
    accent: '#a78bfa',
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
      name: 'Jhanvi Matta',
      role: 'Payload Lead',
      image: '../teamimages/Jhanvi.webp',
      linkedin: 'https://linkedin.com',
    },
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

// ─── Executive Committee (ExComm) ─────────────────────────────────────────────
const excomm: TeamMember[] = [
  {
    name: 'Krishna Dubey',
    role: 'Team Captain',
    image: '../teamimages/image_1.webp',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Ayush Girish Bhandary',
    role: 'Team Vice Captain',
    image: '../teamimages/image_2.webp',
    linkedin: 'https://linkedin.com',
  }
];


// ─── Main Team Page ───────────────────────────────────────────────────────────

const Team = () => {
  const [activeNav, setActiveNav] = useState('structure');
  useScrollReveal();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['structure', 'leadership', 'subsystems'];
      const scrollPosition = window.scrollY + 100; // offset for sticky nav

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveNav(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <div className="team-page animate-fade-in">
      {/* ── Team Photo (Hero) ── */}
      <header className="team-hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1800&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', height: '60vh', position: 'relative' }}>
        <div className="team-hero-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10, 15, 30, 0.9), rgba(10, 15, 30, 0.4))' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '3rem' }}>
          <h1 className="page-title" style={{ color: '#fff', fontSize: '4rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>Meet the Team</h1>
          <p className="page-subtitle" style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px' }}>
            A diverse group of engineering students dedicated to building the next generation of space exploration robotics.
          </p>
        </div>
      </header>

      {/* ── Sticky Nav Bar ── */}
      <nav className="team-sticky-nav" style={{ position: 'sticky', top: '70px', zIndex: 100, backgroundColor: 'rgba(10, 15, 30, 0.9)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'center', gap: '2rem', padding: '1rem' }}>
        <button className={`team-nav-btn ${activeNav === 'structure' ? 'active' : ''}`} onClick={() => scrollToSection('structure')} style={{ background: 'none', border: 'none', color: activeNav === 'structure' ? 'var(--accent-light)' : 'var(--text-secondary)', fontWeight: 600, fontSize: '1.1rem', cursor: 'pointer', transition: 'color 0.3s ease' }}>Structure</button>
        <button className={`team-nav-btn ${activeNav === 'leadership' ? 'active' : ''}`} onClick={() => scrollToSection('leadership')} style={{ background: 'none', border: 'none', color: activeNav === 'leadership' ? 'var(--accent-light)' : 'var(--text-secondary)', fontWeight: 600, fontSize: '1.1rem', cursor: 'pointer', transition: 'color 0.3s ease' }}>Leadership</button>
        <button className={`team-nav-btn ${activeNav === 'subsystems' ? 'active' : ''}`} onClick={() => scrollToSection('subsystems')} style={{ background: 'none', border: 'none', color: activeNav === 'subsystems' ? 'var(--accent-light)' : 'var(--text-secondary)', fontWeight: 600, fontSize: '1.1rem', cursor: 'pointer', transition: 'color 0.3s ease' }}>Subsystems</button>
      </nav>

      <div className="container" style={{ padding: '4rem 1rem' }}>

        {/* ── Structure Section ── */}
        <section id="structure" className="team-section" style={{ marginBottom: '6rem' }}>
          <div className="section-header-centered" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-heading">Team Structure</h2>
          </div>
          <div className="flowchart-placeholder" style={{ padding: '4rem 2rem', textAlign: 'center', borderRadius: '4px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <div style={{ color: 'var(--accent-light)', marginBottom: '1rem' }}>
              <LayoutGrid size={48} style={{ margin: '0 auto' }} />
            </div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Organizational Flowchart</h3>
            <p style={{ color: 'var(--text-secondary)' }}>[ Flowchart diagram displaying ExComm and the 5 Subsystems will be inserted here ]</p>
          </div>
        </section>

        {/* ── Leadership Section (ExComm) ── */}
        <section id="leadership" className="team-section" style={{ marginBottom: '6rem' }}>
          <div className="section-header-centered" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-heading">Leadership</h2>
          </div>

          {/* Row 1: Team Captain + Vice Captain (large circles) */}
          <div className="leadership-row leadership-row--top">
            {leadership.row1.map((member, i) => (
              <MemberCard key={i} member={member} size="large" index={i} />
            ))}
          </div>
        </section>

        {/* ── Subsystems Section ── */}
        <section id="subsystems" className="team-section">
          <div className="section-header-centered" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-heading">Our Subsystems</h2>
          </div>

          <div className="subsystems-stack" style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
            {verticals.map((vertical) => (
              <div key={vertical.id} className="subsystem-block">

                {/* Subsystem Hero / Photos */}
                <div className="subsystem-header" style={{ marginBottom: '3rem' }}>
                  <div className="subsystem-banner" style={{ position: 'relative', height: '300px', borderRadius: '4px', overflow: 'hidden', marginBottom: '2rem' }}>
                    <img src={vertical.heroImage} alt={vertical.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,15,30,0.9) 0%, rgba(10,15,30,0.2) 100%)' }}></div>
                    <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', zIndex: 1 }}>
                      <div style={{ color: vertical.accent, marginBottom: '0.5rem' }}>{vertical.icon}</div>
                      <h3 style={{ fontSize: '2.5rem', color: '#fff', fontFamily: 'var(--font-heading)', margin: 0 }}>{vertical.name}</h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', marginTop: '0.5rem' }}>{vertical.fullDesc}</p>
                    </div>
                  </div>
                </div>

                {/* Subsystem Leads */}
                <div className="members-tier" style={{ marginBottom: '3rem' }}>
                  <div className="members-tier-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <h4 className="members-tier-title" style={{ fontSize: '1.5rem', color: 'var(--text-primary)', margin: 0 }}>Leads</h4>
                    <div className="members-tier-line" style={{ flexGrow: 1, height: '1px', background: 'var(--border-light)' }} />
                  </div>
                  <div className="members-leads-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '700px' }}>
                    <MemberCard member={vertical.lead} size="normal" index={0} />
                    <MemberCard member={vertical.viceLead} size="normal" index={1} />
                  </div>
                </div>

                {/* Subsystem Juniors */}
                {vertical.systemsEngineers && vertical.systemsEngineers.length > 0 && (
                  <div className="members-tier">
                    <div className="members-tier-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                      <div className="members-tier-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: vertical.accent }} />
                      <h4 className="members-tier-title" style={{ fontSize: '1.5rem', color: 'var(--text-primary)', margin: 0 }}>Systems Engineers</h4>
                      <div className="members-tier-line" style={{ flexGrow: 1, height: '1px', background: 'var(--border-light)' }} />
                    </div>
                    <div className="members-juniors-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
                      {vertical.systemsEngineers.map((member, i) => (
                        <MemberCard key={i} member={member} size="small" index={i} />
                      ))}
                    </div>
                  </div>
                )}

              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
