import { Briefcase } from 'lucide-react';

const Alumni = () => {
  const alumni = [
    {
      name: "Dr. James Wilson",
      year: "Class of 2021",
      role: "Former Captain",
      currentCompany: "NASA JPL",
      currentRole: "Robotics Systems Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Maya Patel",
      year: "Class of 2022",
      role: "Former Software Lead",
      currentCompany: "SpaceX",
      currentRole: "Flight Software Engineer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Thomas Wright",
      year: "Class of 2020",
      role: "Former Mechanical Lead",
      currentCompany: "Blue Origin",
      currentRole: "Propulsion Engineer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Emily Chen",
      year: "Class of 2023",
      role: "Former Science Lead",
      currentCompany: "ESA",
      currentRole: "Astrobiologist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <div className="animate-fade-in">
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">
            OUR <span className="text-accent">ALUMNI</span>
          </h1>
          <p className="page-subtitle">
            CRISS Robotics is a launchpad. Our former members go on to shape 
            the future of the aerospace industry at leading organizations.
          </p>
        </div>
      </header>

      <div className="container section-padding">
        <div className="grid-3">
          {alumni.map((alum, index) => (
            <div key={index} className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', marginBottom: '1.5rem', border: '2px solid var(--accent)' }}>
                <img src={alum.image} alt={alum.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{alum.name}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>{alum.role} ({alum.year})</p>
              
              <div style={{ width: '2rem', height: '1px', background: 'rgba(255,255,255,0.1)', margin: '1rem 0' }}></div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', fontSize: '0.875rem', fontWeight: '500', marginBottom: '1rem' }}>
                <Briefcase size={16} />
                <span>{alum.currentRole} at {alum.currentCompany}</span>
              </div>
              
              <a href="#" className="social-link" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alumni;
