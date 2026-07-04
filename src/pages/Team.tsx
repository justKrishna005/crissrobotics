import { Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Mercer",
      role: "Team Captain",
      subteam: "Management",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Sarah Chen",
      role: "Chief Engineer",
      subteam: "Systems",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Marcus Johnson",
      role: "Software Lead",
      subteam: "Software & Autonomy",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Elena Rodriguez",
      role: "Mechanical Lead",
      subteam: "Mechanical",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "David Kim",
      role: "Electrical Lead",
      subteam: "Electrical",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Aisha Patel",
      role: "Science Lead",
      subteam: "Science",
      image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <div className="animate-fade-in">
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">
            MEET THE <span className="text-accent">CREW</span>
          </h1>
          <p className="page-subtitle">
            The dedicated engineers, scientists, and visionaries working tirelessly 
            to bring our Mars rover to life.
          </p>
        </div>
      </header>

      <div className="container section-padding">
        <div className="grid-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{ height: '250px', width: '100%', overflow: 'hidden' }}>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                  {member.subteam}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{member.name}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>{member.role}</p>
                
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                  <a href="#" className="social-link" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>
                    LinkedIn
                  </a>
                  <a href="#" className="social-link" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
