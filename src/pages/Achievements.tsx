import { Trophy, Award, Medal, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      year: "2024",
      title: "Best Science Mission",
      event: "University Rover Challenge",
      description: "Scored 98/100 points on the autonomous science soil sample analysis, detecting extinct life signatures faster than any other team.",
      icon: <Star size={24} className="text-accent" />
    },
    {
      year: "2023",
      title: "Top 10 Global Finalist",
      event: "University Rover Challenge",
      description: "Placed 8th overall out of 100+ competing universities worldwide, our highest ranking in team history.",
      icon: <Trophy size={24} className="text-accent" />
    },
    {
      year: "2022",
      title: "Best Autonomous Navigation",
      event: "European Rover Challenge",
      description: "Successfully navigated the Mars yard blindly using only onboard cameras and SLAM algorithms, avoiding all simulated craters.",
      icon: <Award size={24} className="text-accent" />
    },
    {
      year: "2021",
      title: "1st Place Overall",
      event: "International Rover Challenge",
      description: "Dominated the competition with perfect scores in equipment servicing and extreme retrieval tasks.",
      icon: <Medal size={24} className="text-accent" />
    }
  ];

  return (
    <div className="animate-fade-in">
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">
            OUR <span className="text-accent">LEGACY</span>
          </h1>
          <p className="page-subtitle">
            A history of excellence, innovation, and pushing the boundaries of 
            what undergraduate engineers can achieve.
          </p>
        </div>
      </header>

      <div className="container section-padding">
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          {/* Timeline Line */}
          <div style={{ position: 'absolute', left: '2rem', top: 0, bottom: 0, width: '2px', background: 'rgba(255,255,255,0.1)' }}></div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {achievements.map((item, index) => (
              <div key={index} style={{ display: 'flex', gap: '2rem', position: 'relative' }}>
                <div style={{ 
                  width: '4rem', height: '4rem', borderRadius: '50%', 
                  background: 'rgba(0,39,91,0.5)', border: '2px solid var(--accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, zIndex: 10
                }}>
                  {item.icon}
                </div>
                
                <div className="glass-card" style={{ flexGrow: 1, padding: '2rem' }}>
                  <div style={{ color: 'var(--accent)', fontWeight: 'bold', fontFamily: 'monospace', marginBottom: '0.5rem' }}>
                    {item.year}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                    {item.event}
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
