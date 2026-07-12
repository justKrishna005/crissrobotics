import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Medal } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import heroImg from '../images/good_photos/4.png';
import './Home.css';

const Home = () => {
  useScrollReveal();


  return (
    <div className="home-container">
      {/* ── Hero Section ── */}
      <section className="hero-section">
        <div className="hero-bg">
          <img src={heroImg} alt="Hero background" className="hero-bg-img" />
          <div className="hero-overlay-dark"></div>
        </div>

        <div className="hero-content animate-fade-in">
          <h1 className="hero-title-text animate-slide-up">
            <span>CRISS</span>
            <span>ROBOTICS</span>
          </h1>
          <p className="hero-subtitle animate-slide-up delay-100">
            Consortium of Research in Space Systems
          </p>
          <div className="hero-actions animate-slide-up delay-200">
            <Link to="/competitions" className="btn btn-primary btn-lg">
              VIEW MISSIONS
            </Link>
            <Link to="/partners" className="btn btn-outline btn-lg">
              PARTNER WITH US
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Band (Traction) ── */}
      <section className="stats-band">
        <div className="container stats-grid">
          <div className="stat-item scroll-reveal delay-1">
            <h3 className="stat-number">40+</h3>
            <p className="stat-label">Active Members</p>
          </div>
          <div className="stat-item scroll-reveal delay-2">
            <h3 className="stat-number">5+</h3>
            <p className="stat-label">Years of Innovation</p>
          </div>
          <div className="stat-item scroll-reveal delay-3">
            <h3 className="stat-number">6</h3>
            <p className="stat-label">Global Awards</p>
          </div>
          <div className="stat-item scroll-reveal delay-4">
            <h3 className="stat-number">#1</h3>
            <p className="stat-label">Indian Team at ARC</p>
          </div>
        </div>
      </section>

      {/* ── Condensed Achievements ── */}
      <section className="home-achievements">
        <div className="container">
          <h2 className="section-heading text-center">GLOBAL RECOGNITION</h2>
          <div className="home-achievements-grid">
            <div className="home-achievement-card grain-overlay scroll-reveal delay-1">
              <div className="home-achievement-icon"><Medal size={32} /></div>
              <h3 className="home-achievement-title">ERC 2025</h3>
              <p className="home-achievement-highlight">2nd in Asia, 3rd Internationally</p>
              <p className="home-achievement-desc">Demonstrated outstanding reliability and autonomy on one of the world's most competitive platforms.</p>
            </div>
            <div className="home-achievement-card grain-overlay scroll-reveal delay-2">
              <div className="home-achievement-icon"><Trophy size={32} /></div>
              <h3 className="home-achievement-title">IRDC 2023</h3>
              <p className="home-achievement-highlight">1st Rank Worldwide</p>
              <p className="home-achievement-desc">Secured the top global position with the Curie Rover, praised for its robust engineering and mission execution.</p>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/achievements" className="btn btn-outline">View All Achievements</Link>
          </div>
        </div>
      </section>


      {/* ── Who Are We Section ── */}
      <section className="about-section">
        <div className="container about-grid">
          <div className="about-text-content">
            <h2 className="section-heading">WHO ARE WE?</h2>
            <p className="section-paragraph">
              CRISS Robotics is an entirely student-run organisation dedicated to designing, manufacturing, and operating next-generation extra-terrestrial robotics. Comprised of passionate engineering, science, and business students, our team tackles complex aerospace challenges by developing autonomous Martian drones, in-house near-infrared spectrometers, and highly advanced rovers.
            </p>
            <p className="section-paragraph">
              We compete on the global stage at the University Rover Challenge and the European Rover Challenge, consistently ranking among the top university teams worldwide. Our mission is to bridge the gap between academic theory and industry-grade engineering, shaping the future leaders of the aerospace sector.
            </p>
            <Link to="/about" className="text-link">Read our full story <ArrowRight size={16} /></Link>
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
            <h2 className="section-heading text-center">OUR LATEST ROVER</h2>
          </div>
          <div className="rover-showcase">
            <div className="rover-image-container">
              {/* Replace with actual isolated rover image if you have one */}
              <img src="/workshop.png" alt="Latest Rover" className="rover-hero-img" />
            </div>
            <div className="rover-specs">
              <div className="spec-card">
                <h4 className="spec-title">CHASSIS</h4>
                <p className="spec-desc">Custom carbon-fiber composite structure designed for maximum strength-to-weight ratio in high-stress environments.</p>
              </div>
              <div className="spec-card">
                <h4 className="spec-title">AUTONOMY</h4>
                <p className="spec-desc">Advanced ROS 2 stack utilizing LiDAR and stereo vision for fully autonomous obstacle avoidance and path planning.</p>
              </div>
              <div className="spec-card">
                <h4 className="spec-title">ARM</h4>
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
          <h2 className="support-title">SUPPORT OUR MISSION</h2>
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
