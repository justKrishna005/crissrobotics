import { useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import './Alumni.css';

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

// ─── Types ────────────────────────────────────────────────────────────────────

interface AlumniMember {
  name: string;
  role: string;
  vertical: string;
  image: string;
  linkedin?: string;
}

interface AlumniBatch {
  year: string;
  members: AlumniMember[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const alumniBatches: AlumniBatch[] = [
  {
    year: '2025-26',
    members: [
      { name: 'Arjun Mehta', role: 'Team Captain', vertical: 'Operations', image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400&auto=format&fit=crop', linkedin: 'https://linkedin.com' },
      { name: 'Priya Sharma', role: 'Mechanical Lead', vertical: 'Mechanical', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop', linkedin: 'https://linkedin.com' },
      { name: 'Rohan Patel', role: 'Software Lead', vertical: 'Software', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop', linkedin: 'https://linkedin.com' },
      { name: 'Ananya Iyer', role: 'Electrical Lead', vertical: 'Electrical', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop', linkedin: 'https://linkedin.com' },
      { name: 'Vikram Singh', role: 'Science Lead', vertical: 'Science', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop', linkedin: 'https://linkedin.com' },
      { name: 'Neha Gupta', role: 'Operations Vice Lead', vertical: 'Operations', image: 'https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?q=80&w=400&auto=format&fit=crop', linkedin: 'https://linkedin.com' },
    ],
  },
  {
    year: '2024-25',
    members: [
      { name: 'Karthik Nair', role: 'Team Captain', vertical: 'Operations', image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=400&auto=format&fit=crop', linkedin: 'https://linkedin.com' },
      { name: 'Simran Kaur', role: 'Mechanical Lead', vertical: 'Mechanical', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=400&auto=format&fit=crop', linkedin: 'https://linkedin.com' },
      { name: 'Aditya Rao', role: 'Software Lead', vertical: 'Software', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop', linkedin: 'https://linkedin.com' },
      { name: 'Meera Joshi', role: 'Electrical Lead', vertical: 'Electrical', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop', linkedin: 'https://linkedin.com' },
      { name: 'Rahul Desai', role: 'Science Lead', vertical: 'Science', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop', linkedin: 'https://linkedin.com' },
    ],
  },
  {
    year: '2023-24',
    members: [
      { name: 'Sanjay Kumar', role: 'Team Captain', vertical: 'Operations', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&auto=format&fit=crop', linkedin: 'https://linkedin.com' },
      { name: 'Divya Menon', role: 'Mechanical Lead', vertical: 'Mechanical', image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=400&auto=format&fit=crop', linkedin: 'https://linkedin.com' },
      { name: 'Arun Thakur', role: 'Software Lead', vertical: 'Software', image: 'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=400&auto=format&fit=crop', linkedin: 'https://linkedin.com' },
      { name: 'Ishita Bhat', role: 'Electrical Lead', vertical: 'Electrical', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop', linkedin: 'https://linkedin.com' },
    ],
  },
  {
    year: '2022-23',
    members: [
      { name: 'Nikhil Verma', role: 'Team Captain', vertical: 'Operations', image: 'https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=400&auto=format&fit=crop', linkedin: 'https://linkedin.com' },
      { name: 'Pooja Reddy', role: 'Mechanical Lead', vertical: 'Mechanical', image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=400&auto=format&fit=crop', linkedin: 'https://linkedin.com' },
      { name: 'Harsh Pandey', role: 'Software Lead', vertical: 'Software', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=400&auto=format&fit=crop', linkedin: 'https://linkedin.com' },
    ],
  },
  {
    year: '2021-22',
    members: [
      { name: 'Aman Saxena', role: 'Founding Captain', vertical: 'Operations', image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400&auto=format&fit=crop', linkedin: 'https://linkedin.com' },
      { name: 'Riya Chatterjee', role: 'Co-Founder', vertical: 'Mechanical', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop', linkedin: 'https://linkedin.com' },
      { name: 'Dev Kulkarni', role: 'Co-Founder', vertical: 'Software', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop', linkedin: 'https://linkedin.com' },
    ],
  },
];

const yearOptions = alumniBatches.map((b) => b.year);

// ─── Page ─────────────────────────────────────────────────────────────────────

const Alumni = () => {
  const [activeYear, setActiveYear] = useState(yearOptions[0]);
  const activeBatch = alumniBatches.find((b) => b.year === activeYear);

  useScrollReveal();

  return (
    <div className="alumni-page animate-fade-in">
      {/* ── Header ── */}
      <header className="page-header page-header--photo">
        <div className="container">
          <h1 className="page-title">Alumni</h1>
          <p className="page-subtitle">
            The engineers and leaders who built the foundation of CRISS Robotics.
          </p>
          <div className="mt-6">
            <Link to="/support-us" className="btn btn-primary">
              Support Our Alumni Campaign
            </Link>
          </div>
        </div>
      </header>

      {/* ── Year Selector ── */}
      <div className="alumni-year-bar">
        {yearOptions.map((year) => (
          <button
            key={year}
            className={`alumni-year-tab ${activeYear === year ? 'alumni-year-tab--active' : ''}`}
            onClick={() => setActiveYear(year)}
          >
            {year}
          </button>
        ))}
      </div>

      {/* ── Alumni Grid ── */}
      <section className="alumni-section">
        <div className="container">
          <h2 className="alumni-batch-title">
            Batch of {activeYear}
          </h2>

          {activeBatch && (
            <div className="alumni-grid" key={activeYear}>
              {activeBatch.members.map((member, index) => (
                <div
                  key={member.name}
                  className={`alumni-card scroll-reveal delay-${(index % 5) + 1}`}
                >
                  <div className="alumni-card-image">
                    <img src={member.image} alt={member.name} loading="lazy" />
                  </div>
                  <div className="alumni-card-body">
                    <h3 className="alumni-card-name">{member.name}</h3>
                    <p className="alumni-card-role">{member.role}</p>
                    <p className="alumni-card-vertical">{member.vertical}</p>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="alumni-card-linkedin"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <LinkedinIcon />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Alumni;
