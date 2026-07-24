import { Link } from 'react-router';
import useScrollReveal from '../hooks/useScrollReveal';
const heroImg = '/rover-mountain-irc26.jpg';
import './Home.css';

const Home = () => {
  useScrollReveal();

  return (
    <div className="home-container">

      {/* ── Hero Section ── */}
      <section className="hero-section">
        <div className="hero-bg">
          <img
            src={heroImg}
            alt="CRISS Robotics Hero"
            className="hero-bg-image"
          />
          <div className="hero-gradient"></div>
        </div>

        <div className="hero-content animate-fade-in">


          <h1 className="hero-title-text animate-slide-up delay-100">
            CRISS Robotics
          </h1>
          <p className="hero-subtitle animate-slide-up delay-200">
            The leading team in BITS Pilani building autonomous Mars rovers, drones, and in-house spectrometers for extreme environments.
          </p>
          <div className="hero-actions animate-slide-up delay-300">
            <Link to="/competitions" className="btn btn-solid">
              View Missions
            </Link>
            <Link to="/achievements" className="btn btn-outline">
              Our Achievements
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Band (Traction) ── */}
      <section className="stats-band scroll-reveal">
        <div className="stats-title">Achievements</div>
        <div className="container stats-grid">
          <div className="stat-item">
            <h3 className="stat-number">6+</h3>
            <p className="stat-label">Intl. Competitions</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">1st</h3>
            <p className="stat-label">IRDC 2023</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">2nd</h3>
            <p className="stat-label">In Asia ERC '25</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">1st</h3>
            <p className="stat-label">Indian Team ARCh '26</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">8+</h3>
            <p className="stat-label">Industry Partners</p>
          </div>
        </div>
      </section>

      {/* ── Our Story & About BITS Pilani ── */}
      <section className="story-section scroll-reveal">
        <div className="container story-grid">
          
          <div className="story-card">
            <h3 className="story-title">OUR STORY</h3>
            <p className="story-text">
              Founded in 2021 by a group of BITS Pilani students passionate about <strong className="text-white">space exploration</strong>, CRISS began with a single goal: build an autonomous rover capable of competing on the international stage. Within two years we placed in the <strong className="text-white">top 10 at the International Rover Challenge</strong>. By 2025 we stood on the <strong className="text-white">podium at the European Rover Challenge</strong>.
            </p>
          </div>

          <div className="story-card">
            <h3 className="story-title">ABOUT BITS PILANI</h3>
            <p className="story-text">
              Established in 1964, BITS Pilani is one of <strong className="text-white">India's top-ranked institutions</strong>, known for <strong className="text-white">fostering innovation, cutting-edge research</strong>, and <strong className="text-white">entrepreneurship</strong>. Its extensive <strong className="text-white">global alumni network</strong> and <strong className="text-white">world-class academic ecosystem</strong> make it a hub for developing future leaders in technology and engineering.
            </p>
          </div>

        </div>
      </section>

      {/* ── Our Latest Rover Section (Styled like "New Collection") ── */}
      <section className="rover-section fleet-section">
        <div className="container">
          <div className="fleet-header scroll-reveal">
            <h2 className="fleet-title">Engineered<br/>for extremes</h2>
          </div>

          <div className="fleet-content">
            <div className="fleet-sidebar scroll-reveal delay-100">
              <div className="rover-image-container">
                <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop" alt="Latest Hardware Showcase" className="rover-hero-img" style={{ borderRadius: '8px' }} />
              </div>
              <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
                <Link to="/research" className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>
                  Read More
                </Link>
              </div>
            </div>
            
            <div className="rover-specs scroll-reveal delay-200" style={{flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <div className="spec-card">
                <h4 className="spec-title">Chassis</h4>
                <p className="spec-desc">Custom carbon-fiber composite structure designed for maximum strength-to-weight ratio in high-stress environments.</p>
              </div>
              <div className="spec-card">
                <h4 className="spec-title">Autonomy</h4>
                <p className="spec-desc">Advanced ROS 2 stack utilizing LiDAR and stereo vision for fully autonomous obstacle avoidance and path planning.</p>
              </div>
              <div className="spec-card">
                <h4 className="spec-title">Arm</h4>
                <p className="spec-desc">6-DOF robotic manipulator capable of precise equipment servicing and heavy payload deployment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ── Support Us CTA Section ── */}
      <section className="support-section">
        <div className="container support-content scroll-reveal">
          <h2 className="support-title">Support our mission.</h2>
          <p className="support-desc">
            Building complex robotic systems requires significant resources. Partner with us to empower the next generation of engineers and gain unparalleled exposure to top-tier university talent.
          </p>
          <Link to="/partners" className="btn btn-solid">
            PARTNER WITH US
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
