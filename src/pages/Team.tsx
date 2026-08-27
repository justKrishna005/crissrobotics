import { useState, useEffect } from 'react';
import { Mail, ChevronDown, Zap, Code2, FlaskConical, Wrench } from 'lucide-react';
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
  objectPosition?: string;
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
      image: '/team images/24 Batch/image_2.webp',
      linkedin: 'https://www.linkedin.com/in/ayush-girish-bhandary-95582a324/',
    },
    viceLead: {
      name: 'Janaansh Patel',
      role: 'Vice Lead',
      image: '/team images/24 Batch/Janansh.webp',
      linkedin: 'https://linkedin.com',
    },
    systemsEngineers: [
      {
        name: 'Ved Patel',
        role: 'Systems Engineer',
        image: '/team images/24 Batch/Ved.webp',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Nissan Mohanty',
        role: 'Member',
        image: '/team images/25 Batch/NISSAN MOHANTY.webp',
        linkedin: 'https://www.linkedin.com/in/nissan-mohanty-880401214',
        github: 'https://github.com/rolling-thunder18',
      },
      {
        name: 'Arnav Jain',
        role: 'Member',
        image: '/team images/25 Batch/ARNAV JAIN.webp',
        linkedin: 'https://www.linkedin.com/in/arnav-jain-990382375',
      },
      {
        name: 'Shraddha Nair',
        role: 'Member',
        image: '/team images/25 Batch/SHRADDHA SHARATH NAIR.webp',
        linkedin: 'https://www.linkedin.com/in/shraddha-sharath-nair-b20baa42a/',
      },
      {
        name: 'Omkar Rajadhyaksha',
        role: 'Member',
        image: '/team images/25 Batch/OMKAR RAHUL RAJADHYAKSHA.webp',
        linkedin: 'https://www.linkedin.com/in/omkar-rajadhyaksha/',
      },
      {
        name: 'Karan Anand',
        role: 'Member',
        image: '/team images/25 Batch/KARAN ANAND.webp',
        linkedin: 'https://www.linkedin.com/in/karan-anand-2801953a1/',
      },
      {
        name: 'Shreyas Nanotkar',
        role: 'Member',
        image: '/team images/25 Batch/SHREYAS SACHIN NANOTKAR.webp',
        linkedin: 'https://www.linkedin.com/in/shreyas-nanotkar-630157322',
      },
      {
        name: 'Pratham Gautam Sinai Talaulikar',
        role: 'Member',
        image: '/team images/25 Batch/PRATHAM GAUTAM SINAI TALAULIKAR.webp',
        linkedin: 'https://www.linkedin.com/in/pratham-talaulikar-0057bb227',
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
      image: '/team images/24 Batch/vibhav jain.webp',
      linkedin: 'https://www.linkedin.com/in/vibhav-jain-203949323',
      objectPosition: 'center 15%',
    },
    viceLead: {
      name: 'Hitarth Parikh',
      role: 'Vice Lead',
      image: '/team images/24 Batch/Hitarth.webp',
      linkedin: 'https://www.linkedin.com/in/hitarth-bhavin-parikh',
      objectPosition: 'center 15%',
    },
    systemsEngineers: [
      {
        name: 'Prasham Agarwal',
        role: 'Systems Engineer',
        image: '/team images/24 Batch/Prasham.webp',
        linkedin: 'https://www.linkedin.com/in/prasham-agarwal-2044a7316',
        github: 'https://github.com/Prasham884',
      },
      {
        name: 'Adit Sarkar',
        role: 'Member',
        image: '/team images/25 Batch/ADIT SARKAR.webp',
        linkedin: 'https://www.linkedin.com/in/adit-sarkar-a2538b329',
      },
      {
        name: 'Yash Maheshwari',
        role: 'Member',
        image: '/team images/25 Batch/YASH RAKESHKUMAR MAHESHWARI.webp',
        linkedin: 'https://www.linkedin.com/in/yash-maheshwari-87670731a/',
        github: 'https://github.com/Yash7288',
      },
      {
        name: 'Viinaayak Gupta',
        role: 'Member',
        image: '/team images/25 Batch/VIINAAYAK GUPTA.webp',
        linkedin: 'https://www.linkedin.com/in/viinaayak-gupta-3116b4387',
      },
      {
        name: 'Maharnava Sharma',
        role: 'Member',
        image: '/team images/25 Batch/MAHARNAVA SHARMA.webp',
        linkedin: 'https://www.linkedin.com/in/maharnava-sharma-44079a386/',
      },
      {
        name: 'Ameeraa Dashaputra',
        role: 'Member',
        image: '/team images/25 Batch/AMEERAA RAJESH DASHAPUTRA.webp',
        linkedin: 'https://www.linkedin.com/in/ameeraa-dashaputra-0b6415380',
      },
      {
        name: 'Aditya Balaraman',
        role: 'Member',
        image: '/team images/25 Batch/ADITYA BALARAMAN.webp',
        linkedin: 'https://www.linkedin.com/in/aditya-balaraman-01800842b/',
        github: 'https://github.com/4dityabalaraman',
      },
      {
        name: 'Sharanya Sharma',
        role: 'Member',
        image: '/team images/25 Batch/SHARANYA SHARMA.webp',
        linkedin: 'https://www.linkedin.com/in/sharanya-sharma-94584436a/',
      },
      {
        name: 'Sai Dongargaonkar',
        role: 'Member',
        image: '/team images/25 Batch/SAI DONGARGAONKAR.webp',
        linkedin: 'https://in.linkedin.com/in/sai-dongargaonkar-b15b7b262',
        github: 'https://github.com/MrGuardianGo',
      },
      {
        name: 'Sparsh Bansal',
        role: 'Member',
        image: '/team images/25 Batch/Sparsh Bansal.webp',
        linkedin: 'https://www.linkedin.com/in/sparsh-bansal-2a7481379/',
        github: 'https://github.com/Sparz2',
      },
      {
        name: 'Prateek Mittal',
        role: 'Member',
        image: '/team images/25 Batch/PRATEEK MITTAL.webp',
        linkedin: 'https://www.linkedin.com/in/prateek-mittal-52a38a237',
        github: 'https://github.com/PrateekM-Stu',
      },
      {
        name: 'Vidit Singh Sikarwar',
        role: 'Member',
        image: '/team images/25 Batch/VIDIT SINGH SIKARWAR.webp',
        linkedin: 'https://www.linkedin.com/in/vidit-singh-sikarwar-079318384',
        github: 'https://github.com/viditsikarwar8-pixel',
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
      image: '/team images/24 Batch/Pranav Biju.webp',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    viceLead: {
      name: 'Adhyatma Deep Agrawal',
      role: 'Vice Lead',
      image: '/team images/24 Batch/Todi.webp',
      linkedin: 'https://linkedin.com/adhyatmaagrawal',
      github: 'https://github.com/ad-1106',
    },
    systemsEngineers: [
      {
        name: 'Dev Arora',
        role: 'Systems Engineer',
        image: '/team images/24 Batch/Dev.webp',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
      },
      {
        name: 'Romir Karna',
        role: 'Member',
        image: '/team images/25 Batch/ROMIR KARNA.webp',
        linkedin: 'https://www.linkedin.com/in/romirkarna/',
        github: 'https://github.com/Romir-Karna7',
      },
      {
        name: 'Agatsya Om',
        role: 'Member',
        image: '/team images/25 Batch/AGATSYA OM.webp',
        linkedin: 'https://www.linkedin.com/in/agatsya-om',
        github: 'https://github.com/agatsya-blip',
      },
      {
        name: 'Hitesh Pote',
        role: 'Member',
        image: '/team images/25 Batch/HITESH BABASAHEB POTE.webp',
        linkedin: 'https://www.linkedin.com/in/hiteshpote',
        github: 'https://github.com/HiteshPote',
      },
      {
        name: 'Mohammad Talha',
        role: 'Member',
        image: '/team images/25 Batch/MOHAMMAD TALHA.webp',
        linkedin: 'https://www.linkedin.com/in/mohammad-talha-313aaa377',
        github: 'https://github.com/MohammadTalha06',
      },
      {
        name: 'Veer Raghuvanshi',
        role: 'Member',
        image: '/team images/25 Batch/VEER RAGHUVANSHI.webp',
        linkedin: 'https://www.linkedin.com/in/veerraghuvanshi',
        github: 'https://github.com/VeerR13',
      },
      {
        name: 'Sagar Kumar',
        role: 'Member',
        image: '/team images/25 Batch/SAGAR KUMAR.webp',
        linkedin: 'https://www.linkedin.com/in/sagar-kumar36',
        github: 'https://github.com/samscienced32-blip',
      },
      {
        name: 'Ishan Kumar',
        role: 'Member',
        image: '/team images/25 Batch/ISHAN KUMAR.webp',
        linkedin: 'https://www.linkedin.com/in/ishan-kumar-637022412',
        github: 'https://github.com/shadowpenguin28',
      },
      {
        name: 'Shivam Ghadge',
        role: 'Member',
        image: '/team images/25 Batch/SHIVAM MACHINDRANATH GHADGE.webp',
        linkedin: 'https://www.linkedin.com/in/shivam-ghadge-7532a2375',
        github: 'https://github.com/razqen',
      },
      {
        name: 'Ananya Mukherjee',
        role: 'Member',
        image: '/team images/25 Batch/ANANYA MUKHERJEE.webp',
        linkedin: 'https://www.linkedin.com/in/mukherjee-ananya',
        github: 'https://github.com/mathananya',
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
      role: 'Lead',
      image: '/team images/24 Batch/Jhanvi.webp',
      linkedin: 'https://www.linkedin.com/in/jhanvimatta/',
      github: 'https://github.com/jhanvimatta',
    },
    viceLead: {
      name: 'Winnie the Poo',
      role: 'Vice Lead',
      image: '/team images/24 Batch/poo lead.webp',
      linkedin: 'https://linkedin.com',
    },
    systemsEngineers: [
      {
        name: 'Juin Jestin K',
        role: 'Member',
        image: '/team images/25 Batch/JUIN JESTIN K.webp',
        linkedin: 'https://www.linkedin.com/in/juin-jestin-kalathil-a296793a8',
        github: 'https://github.com/juinjustkiddin',
      },
      {
        name: 'Mehul Agarwal',
        role: 'Member',
        image: '/team images/25 Batch/MEHUL AGARWAL.webp',
        linkedin: 'https://www.linkedin.com/in/mehul-agarwal-08a5a12a9',
      },
      {
        name: 'Etish Mathur',
        role: 'Member',
        image: '/team images/25 Batch/ETISH MATHUR.webp',
        linkedin: 'https://www.linkedin.com/in/etish-mathur-3b057939a',
        github: 'https://github.com/Etishgit',
      },
      {
        name: 'Anugraha A',
        role: 'Member',
        image: '/team images/25 Batch/ANUGRAHA A.webp',
        linkedin: 'https://www.linkedin.com/in/anugraha-a-17717242b',
      }
    ],
  },
];

// ─── Member Card ──────────────────────────────────────────────────────────────

const MemberCard = ({
  member,
  index = 0,
}: {
  member: TeamMember;
  index?: number;
}) => (
  <div className={`member-card scroll-reveal delay-${(index % 5) + 1}`}>
    <div className="member-image-container">
      <img
        src={member.image}
        alt={member.name}
        className="member-photo"
        loading="lazy"
        style={{ objectPosition: member.objectPosition || 'center' }}
      />
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
    image: '/team images/24 Batch/image_1.webp',
    linkedin: 'https://www.linkedin.com/in/krishna-dubey-5638aa248/',
    github: 'https://github.com/justKrishna005',
  },
  {
    name: 'Ayush Girish Bhandary',
    role: 'Team Vice Captain',
    image: '/team images/24 Batch/image_2.webp',
    linkedin: 'https://www.linkedin.com/in/ayush-girish-bhandary-95582a324/',
  }
];

// ─── Management ───────────────────────────────────────────────────────────────
// Add management members here.
const management: TeamMember[] = [
  {
    name: 'Atharv Agarwal',
    role: 'Member',
    image: '/team images/26 batch/atharv.webp',
    linkedin: `https://www.linkedin.com/in/atharv-agarwal-156340292/`,
    github: 'https://github.com/Emptiedfull',
    
  },
];

const facultyAdvisor: TeamMember = {
  name: 'Dr. M.S. Dasgupta',
  role: 'Faculty Advisor',
  image: '/team images/24 Batch/das-gupta.webp',
  email: 'mailto:dasgupta@pilani.bits-pilani.ac.in',
};

// ─── Main Team Page ───────────────────────────────────────────────────────────

const Team = () => {
  const [activeSection, setActiveSection] = useState('leadership');
  const [isSticky, setIsSticky] = useState(false);
  useScrollReveal();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.6 - 70) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (sectionId: string, e: React.MouseEvent<HTMLButtonElement>) => {
    setActiveSection(sectionId);
    e.currentTarget.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
    const element = document.getElementById('team-content');
    if (element) {
      window.scrollTo({ top: element.offsetTop - 140, behavior: 'smooth' });
    }
  };

  return (
    <div className="team-page animate-fade-in">
      {/* ── Team Photo (Hero) ── */}
      <header className="page-header page-header--photo">
        <div className="container">
          <h1 className="page-title animate-slide-up">Meet the Team</h1>
          <p className="page-subtitle animate-slide-up delay-100">
            A diverse group of engineering students dedicated to building the next generation of space exploration robotics.
          </p>
        </div>
        <div
          className="scroll-indicator"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ChevronDown size={32} strokeWidth={1.5} />
        </div>
      </header>

      {/* ── Sticky Nav Bar ── */}
      <nav className={`team-sticky-nav ${isSticky ? 'scrolled' : ''}`}>
        <button className={`team-nav-btn ${activeSection === 'leadership' ? 'active' : ''}`} onClick={(e) => handleTabClick('leadership', e)}>Leadership</button>
        {verticals.map(v => (
          <button key={v.id} className={`team-nav-btn ${activeSection === v.id ? 'active' : ''}`} onClick={(e) => handleTabClick(v.id, e)}>{v.name}</button>
        ))}
        <button className={`team-nav-btn ${activeSection === 'management' ? 'active' : ''}`} onClick={(e) => handleTabClick('management', e)}>Management</button>
      </nav>

      <div id="team-content" className="container" style={{ padding: '4rem 1rem' }}>

        {/* ── Leadership & Advisor Section ── */}
        {activeSection === 'leadership' && (
          <section id="leadership" className="team-section animate-fade-in" style={{ marginBottom: '6rem' }}>
            <div className="section-header-centered" style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', margin: '0 0 1rem 0' }}>Leadership</h3>
            </div>

            {/* Row 1: Team Captain + Vice Captain */}
            <div className="leadership-row leadership-row--top" style={{ marginBottom: '6rem' }}>
              {excomm.map((member, i) => (
                <MemberCard key={i} member={member} index={i} />
              ))}
            </div>

            <div className="section-header-centered" style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', margin: '0 0 1rem 0' }}>Faculty Advisor</h3>
            </div>
            <div className="leadership-row leadership-row--top">
              <MemberCard member={facultyAdvisor} index={0} />
            </div>
          </section>
        )}

        {/* ── Management Section ── */}
        {activeSection === 'management' && (
          <section id="management" className="team-section animate-fade-in" style={{ marginBottom: '6rem' }}>
            <div className="section-header-centered" style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', margin: '0 0 1rem 0' }}>Management</h3>
            </div>
            <div className="leadership-row leadership-row--top">
              {management.map((member, i) => (
                <MemberCard key={i} member={member} index={i} />
              ))}
            </div>
          </section>
        )}

        {/* ── Subsystems Section ── */}
        {activeSection !== 'leadership' && activeSection !== 'management' && (
          <section id="subsystems" className="team-section">
            <div className="subsystems-stack" style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
              {verticals.filter(v => v.id === activeSection).map((vertical) => (
                <div key={vertical.id} className="subsystem-block animate-fade-in">

                  {/* Subsystem Header */}
                  <div className="subsystem-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', margin: '0 0 1rem 0' }}>{vertical.name}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>{vertical.fullDesc}</p>
                  </div>

                  {/* Subsystem Members Centered */}
                  <div className="subsystem-members" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
                    {/* Row 1: Lead, Vice Lead, and System Engineers */}
                    <div className="members-leads-row" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                      <MemberCard member={vertical.lead} index={0} />
                      {vertical.viceLead && <MemberCard member={vertical.viceLead} index={1} />}
                      {vertical.systemsEngineers && vertical.systemsEngineers.filter(m => m.role !== 'Member').map((member, i) => (
                        <MemberCard key={`se-${i}`} member={member} index={i + 2} />
                      ))}
                    </div>

                    {/* Row 3: Members */}
                    {vertical.systemsEngineers && vertical.systemsEngineers.some(m => m.role === 'Member') && (
                      <div className="members-juniors-grid" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        {vertical.systemsEngineers.filter(m => m.role === 'Member').map((member, i) => (
                          <MemberCard key={`mem-${i}`} member={member} index={i} />
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Team;
