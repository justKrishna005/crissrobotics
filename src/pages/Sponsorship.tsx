import { CheckCircle2, Zap, Rocket, Star } from 'lucide-react';

const Sponsorship = () => {
  return (
    <div className="animate-fade-in">
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">
            FUEL THE <span className="text-accent">MISSION</span>
          </h1>
          <p className="page-subtitle">
            Partner with CRISS Robotics to build the future of aerospace engineering. 
            Your support enables us to push boundaries on a global stage.
          </p>
        </div>
      </header>

      <div className="container section-padding">
        <div className="grid-3">
          {/* Tier 1 */}
          <div className="glass-card" style={{ position: 'relative', overflow: 'hidden' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Silver Partner</h3>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>$1,000+</div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <CheckCircle2 size={18} className="text-accent" />
                <span>Small logo on team apparel</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <CheckCircle2 size={18} className="text-accent" />
                <span>Logo on website & social media</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <CheckCircle2 size={18} className="text-accent" />
                <span>Invitation to annual showcase</span>
              </li>
            </ul>
            <button className="btn btn-outline" style={{ width: '100%' }}>Become Silver Partner</button>
          </div>

          {/* Tier 2 */}
          <div className="glass-card" style={{ position: 'relative', overflow: 'hidden', borderColor: 'var(--accent)' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, background: 'var(--accent)', color: '#fff', padding: '0.25rem 1rem', fontSize: '0.75rem', fontWeight: 'bold', borderBottomLeftRadius: '1rem' }}>RECOMMENDED</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff' }}>Gold Partner</h3>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)', marginBottom: '1.5rem' }}>$3,000+</div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <CheckCircle2 size={18} className="text-accent" />
                <span>Medium logo on rover & apparel</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <CheckCircle2 size={18} className="text-accent" />
                <span>Dedicated social media spotlight</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <CheckCircle2 size={18} className="text-accent" />
                <span>Resume book of team members</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <CheckCircle2 size={18} className="text-accent" />
                <span>All Silver benefits</span>
              </li>
            </ul>
            <button className="btn btn-primary" style={{ width: '100%' }}>Become Gold Partner</button>
          </div>

          {/* Tier 3 */}
          <div className="glass-card" style={{ position: 'relative', overflow: 'hidden' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Platinum Partner</h3>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff', marginBottom: '1.5rem' }}>$5,000+</div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <CheckCircle2 size={18} className="text-accent" />
                <span>Large dominant logo on rover</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <CheckCircle2 size={18} className="text-accent" />
                <span>Logo on main competition banner</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <CheckCircle2 size={18} className="text-accent" />
                <span>Exclusive tech demonstration</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <CheckCircle2 size={18} className="text-accent" />
                <span>All Gold benefits</span>
              </li>
            </ul>
            <button className="btn btn-outline" style={{ width: '100%' }}>Become Platinum Partner</button>
          </div>
        </div>

        <div style={{ marginTop: '4rem', padding: '3rem', background: 'rgba(255,255,255,0.02)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Why Sponsor Us?</h2>
          <div className="grid-3">
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: 'rgba(0,39,91,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <Star className="text-accent" />
              </div>
              <h4 style={{ marginBottom: '0.5rem' }}>Brand Visibility</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Exposure at international competitions across the US, Europe, and Asia.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: 'rgba(0,39,91,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <Zap className="text-accent" />
              </div>
              <h4 style={{ marginBottom: '0.5rem' }}>Top Talent</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Direct access to recruit highly skilled, multidisciplinary engineering students.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: 'rgba(0,39,91,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <Rocket className="text-accent" />
              </div>
              <h4 style={{ marginBottom: '0.5rem' }}>Innovation</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Align your brand with cutting-edge robotics and space exploration research.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsorship;
