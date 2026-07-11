import { useState } from 'react';
import { Linkedin, Mail, Github } from 'lucide-react';
import eKrishna from '../images/team/e_krishna.png';
import './Team.css';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
  email?: string;
}

interface BatchData {
  leaders: TeamMember[];
  members: TeamMember[];
}

// ─── Batch data map ───────────────────────────────────────────────────────────
// Add a new key (e.g. "2027-28") with leaders + members arrays to extend.
// Keys are shown latest-first in the tab bar automatically.
// For social links, provide the full URL or leave the field out to hide the icon.
const batches: Record<string, BatchData> = {
  "2026-27": {
    leaders: [
      {
        name: "Alex Mercer",
        role: "Team Captain",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "mailto:alex@example.com"
      },
      {
        name: "Krishna Dubey",
        role: "Chief Engineer",
        image: eKrishna,
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "mailto:krishna@example.com"
      },
    ],
    members: [
      {
        name: "Marcus Johnson",
        role: "Software Lead",
        image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      },
      {
        name: "Elena Rodriguez",
        role: "Mechanical Lead",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
      },
      {
        name: "David Kim",
        role: "Electrical Lead",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      },
      {
        name: "Aisha Patel",
        role: "Science Lead",
        image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Aisha Patel",
        role: "Science Lead",
        image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Aisha Patel",
        role: "Science Lead",
        image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Aisha Patel",
        role: "Science Lead",
        image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Aisha Patel",
        role: "Science Lead",
        image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
      }
    ]
  },
  "2025-26": {
    leaders: [
      {
        name: "James Carter",
        role: "Team Captain",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Priya Sharma",
        role: "Chief Engineer",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    ],
    members: [
      {
        name: "Sam Lee",
        role: "Software Lead",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      },
      {
        name: "Fatima Al-Hassan",
        role: "Mechanical Lead",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Ravi Nair",
        role: "Electrical Lead",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      },
      {
        name: "Chloe Martin",
        role: "Science Lead",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
      }
    ]
  },
  "2024-25": {
    leaders: [
      {
        name: "Omar Khalid",
        role: "Team Captain",
        image: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Lily Zhang",
        role: "Chief Engineer",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    ],
    members: [
      {
        name: "Noah Williams",
        role: "Software Lead",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      },
      {
        name: "Amara Diallo",
        role: "Mechanical Lead",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Chen Wei",
        role: "Electrical Lead",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
        github: "https://github.com"
      },
      {
        name: "Isabelle Dupont",
        role: "Science Lead",
        image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
      }
    ]
  },
  "2023-24": {
    leaders: [
      {
        name: "Arjun Menon",
        role: "Team Captain",
        image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Sofia Rossi",
        role: "Chief Engineer",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    ],
    members: [
      {
        name: "Kai Tanaka",
        role: "Software Lead",
        image: "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      },
      {
        name: "Amelia Brown",
        role: "Mechanical Lead",
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Lucas Pereira",
        role: "Electrical Lead",
        image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Hana Iwamoto",
        role: "Science Lead",
        image: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
      }
    ]
  },
  "2022-23": {
    leaders: [
      {
        name: "Derek Walsh",
        role: "Team Captain",
        image: "https://images.unsplash.com/photo-1531727991582-cfd25ce79613?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Neha Gupta",
        role: "Chief Engineer",
        image: "https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
      }
    ],
    members: [
      {
        name: "Tyler Brooks",
        role: "Software Lead",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      },
      {
        name: "Zara Ahmed",
        role: "Mechanical Lead",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Ethan Park",
        role: "Electrical Lead",
        image: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Maya Osei",
        role: "Science Lead",
        image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
      }
    ]
  },
  "2021-22": {
    leaders: [
      {
        name: "Ryan Mitchell",
        role: "Team Captain",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Ananya Iyer",
        role: "Chief Engineer",
        image: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
      }
    ],
    members: [
      {
        name: "Finn O'Brien",
        role: "Software Lead",
        image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      },
      {
        name: "Layla Hassan",
        role: "Mechanical Lead",
        image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Diego Vargas",
        role: "Electrical Lead",
        image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Yuki Nakamura",
        role: "Science Lead",
        image: "https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=400&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
      }
    ]
  },
};

// Sorted latest → oldest for the tab bar
const batchKeys = Object.keys(batches).sort((a, b) => b.localeCompare(a));

// ─── Reusable member card ─────────────────────────────────────────────────────

const MemberCard = ({ member, large = false }: { member: TeamMember; large?: boolean }) => (
  <div className="member-card">
    <div className={`member-image-container${large ? ' member-image-large' : ''}`}>
      <img src={member.image} alt={member.name} className="member-photo" />
    </div>
    <h3 className="member-name">{member.name}</h3>
    <p className="member-role">{member.role}</p>
    <div className="member-socials">
      {member.linkedin && (
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
          <Linkedin size={15} />
        </a>
      )}
      {member.github && (
        <a href={member.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
          <Github size={15} />
        </a>
      )}
      {member.email && (
        <a href={member.email} className="social-icon" aria-label="Email">
          <Mail size={15} />
        </a>
      )}
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────

const Team = () => {
  const [activeBatch, setActiveBatch] = useState(batchKeys[0]);
  const { leaders, members } = batches[activeBatch];

  return (
    <div className="animate-fade-in">
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">
            MEET THE <span className="text-accent">TEAM</span>
          </h1>
          <p className="page-subtitle">
            The dedicated engineers, scientists, and visionaries working tirelessly
            to bring our Mars rover to life.
          </p>
        </div>
      </header>

      <section className="team-section">
        <div className="container">

          {/* ── Batch selector bar ── */}
          <div className="batch-bar">
            {batchKeys.map((key) => (
              <button
                key={key}
                className={`batch-tab${activeBatch === key ? ' batch-tab--active' : ''}`}
                onClick={() => setActiveBatch(key)}
              >
                {key}
              </button>
            ))}
          </div>

          {/* ── Leaders row — 2 larger circles ── */}
          {leaders.length > 0 && (
            <div className="team-grid-leaders">
              {leaders.map((member, index) => (
                <MemberCard key={index} member={member} large />
              ))}
            </div>
          )}

          {/* ── Rest of team — 4 per row ── */}
          {members.length > 0 ? (
            <div className="team-grid-4">
              {members.map((member, index) => (
                <MemberCard key={index} member={member} />
              ))}
            </div>
          ) : (
            leaders.length === 0 && (
              <p className="batch-empty">No data yet for this batch.</p>
            )
          )}

        </div>
      </section>
    </div>
  );
};

export default Team;
