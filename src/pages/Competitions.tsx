import { MapPin, Calendar, ExternalLink } from 'lucide-react';

const Competitions = () => {
  const competitions = [
    {
      id: 1,
      name: "University Rover Challenge (URC)",
      location: "Mars Desert Research Station, Utah, USA",
      date: "May 2026",
      description: "The world's premier robotics competition for college students. Teams design and build the next generation of Mars rovers that will one day work alongside astronauts exploring the Red Planet.",
      image: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=800&auto=format&fit=crop",
      status: "Upcoming"
    },
    {
      id: 2,
      name: "European Rover Challenge (ERC)",
      location: "Kielce, Poland",
      date: "September 2025",
      description: "The biggest robotics and space event in Europe. The competition takes place on a specialized Martian track, requiring highly autonomous rovers to complete complex scientific tasks.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
      status: "In Preparation"
    },
    {
      id: 3,
      name: "International Rover Challenge (IRC)",
      location: "Bengaluru, India",
      date: "January 2025",
      description: "Asia's premier robotics competition focusing on space exploration. Teams are tested on extreme terrain mobility, equipment servicing, and autonomous navigation.",
      image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=800&auto=format&fit=crop",
      status: "Completed"
    }
  ];

  return (
    <div className="animate-fade-in">
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">
            GLOBAL <span className="text-accent">MISSIONS</span>
          </h1>
          <p className="page-subtitle">
            We put our engineering to the ultimate test by competing against the world's 
            top universities in extreme, Mars-analog environments.
          </p>
        </div>
      </header>

      <div className="container section-padding">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {competitions.map((comp) => (
            <div key={comp.id} className="glass-card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '200px', width: '100%', position: 'relative' }}>
                <img src={comp.image} alt={comp.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,39,91,0.9)', color: '#fff', padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                  {comp.status}
                </div>
              </div>
              <div style={{ padding: '2rem' }}>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{comp.name}</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MapPin size={16} className="text-accent" /> {comp.location}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Calendar size={16} className="text-accent" /> {comp.date}
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
                  {comp.description}
                </p>
                <button className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Learn More <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Competitions;
