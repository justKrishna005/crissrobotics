import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import heroImg from '../images/good_photos/3.png';
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
          <div className="hero-overlay-dark"></div>
        </div>

        <div className="hero-content animate-fade-in">
          <h1 className="hero-title-text animate-slide-up">
            CRISS Robotics
          </h1>
          <p className="hero-subtitle animate-slide-up delay-100">
            The leading team in BITS Pilani building autonomous Mars rovers, drones, and in-house spectrometers for extreme environments.
          </p>
          <div className="hero-actions animate-slide-up delay-200">
            <Link to="/competitions" className="btn-openai">
              View Missions <ArrowRight size={18} />
            </Link>
            <Link to="/achievements" className="btn-openai">
              Our Achievements <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Band (Traction) ── */}
      <section className="stats-band">
        <div className="container stats-grid">
          <div className="stat-item scroll-reveal delay-1">
            <h3 className="stat-number">6+</h3>
            <p className="stat-label">Intl. Competitions</p>
          </div>
          <div className="stat-item scroll-reveal delay-2">
            <h3 className="stat-number">1st</h3>
            <p className="stat-label">@ IRDC 2023</p>
          </div>
          <div className="stat-item scroll-reveal delay-3">
            <h3 className="stat-number">2nd</h3>
            <p className="stat-label">In Asia @ ERC 2025</p>
          </div>
          <div className="stat-item scroll-reveal delay-4">
            <h3 className="stat-number">1st</h3>
            <p className="stat-label">Indian Team @ ARCh '26</p>
          </div>
        </div>
      </section>

      {/* ── Condensed Achievements ── */}
      <section className="home-achievements">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
            <h2 className="section-heading" style={{ marginBottom: 0 }}>Global Recognition</h2>
            <Link to="/achievements" className="btn-openai" style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>View all</Link>
          </div>
          <div className="home-achievements-grid">
            <div className="home-achievement-card scroll-reveal delay-1">
              <div className="home-achievement-img-wrapper">
                <img src="https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=600&auto=format&fit=crop" alt="ERC 2025" />
              </div>
              <h3 className="home-achievement-title">ERC 2025</h3>
              <p className="home-achievement-highlight">2nd in Asia, 3rd Internationally</p>
            </div>
            <div className="home-achievement-card scroll-reveal delay-2">
              <div className="home-achievement-img-wrapper">
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop" alt="IRDC 2023" />
              </div>
              <h3 className="home-achievement-title">IRDC 2023</h3>
              <p className="home-achievement-highlight">1st Rank Worldwide</p>
            </div>
            <div className="home-achievement-card scroll-reveal delay-3">
              <div className="home-achievement-img-wrapper">
                <img src="https://images.unsplash.com/photo-1614729939124-03290b56c9ce?q=80&w=600&auto=format&fit=crop" alt="ARCh 2026" />
              </div>
              <h3 className="home-achievement-title">ARCh 2026</h3>
              <p className="home-achievement-highlight">First Indian Team Invited</p>
            </div>
          </div>
        </div>
      </section>




      {/* ── Who Are We Section ── */}
      <section className="about-section">
        <div className="container about-grid">
          <div className="about-text-content">
            <h2 className="section-heading">Who Are We?</h2>
            <p className="section-paragraph">
              CRISS Robotics is a fully student-run team at BITS Pilani building autonomous Mars
              rovers, Martian-analog drones, and field-portable NIR spectrometers. These are
              systems that don't exist commercially at this scale — we build them from scratch.
            </p>
            <p className="section-paragraph">
              We finished 3rd internationally at ERC 2025, 1st worldwide at IRDC 2023, and
              became the first and only Indian team invited to the Australian Rover Challenge 2026.
              Our engineers compete across three continents in the same season.
            </p>
            <Link to="/about" className="btn-openai">Read our full story <ArrowRight size={18} /></Link>
          </div>
          <div className="about-image-wrapper">
            <img src="/good_photos/6.jpg" alt="Team at competition" className="about-image" />
          </div>
        </div>
      </section>


      {/* ── Our Latest Rover Section ── */}
      <section className="rover-section">
        <div className="container">
          <div className="rover-header">
            <h2 className="section-heading text-center">Engineered for extreme environments</h2>
          </div>
          <div className="rover-showcase">
            <div className="rover-image-container">
              {/* Replace with actual isolated rover hardware image */}
              <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop" alt="Latest Hardware Showcase" className="rover-hero-img" style={{ borderRadius: '8px' }} />
            </div>
            <div className="rover-specs">
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
        <div className="support-bg"></div>
        <div className="container support-content">
          <h2 className="support-title">Support our mission.</h2>
          <p className="support-desc">
            Building complex robotic systems requires significant resources. Partner with us to empower the next generation of engineers and gain unparalleled exposure to top-tier university talent.
          </p>
          <Link to="/partners" className="btn btn-white btn-lg support-btn">
            PARTNER WITH US
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
