import { Link } from 'react-router';
import { ChevronDown } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
const storyImg1 = '/images/good_photos/about us.webp';
const storyImg2 = '/images/good_photos/bits pilani.webp';
const engExtremesImg = '/images/good_photos/eng for extremes.webp';
import './Home.css';

const Home = () => {
  useScrollReveal();

  return (
    <div className="home-container">

      {/* ── Hero Section ── */}
      <header className="page-header page-header--home">
        <div className="container home-hero-content">
          <h1 className="page-title animate-slide-up delay-100 home-title">
            CRISS Robotics
          </h1>
          <p className="page-subtitle animate-slide-up delay-200 home-subtitle">
            The leading team in BITS Pilani building autonomous Mars rovers, drones, and in-house spectrometers for extreme environments.
          </p>
          <div className="hero-actions animate-slide-up delay-300 home-actions">
            <Link to="/competitions" className="btn btn-solid">
              View Missions
            </Link>
            <Link to="/achievements" className="btn btn-outline">
              Our Achievements
            </Link>
          </div>
        </div>
        <div
          className="scroll-indicator"
          role="button"
          tabIndex={0}
          aria-label="Scroll down"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.scrollTo({ top: window.innerHeight, behavior: 'smooth' }); } }}
        >
          <ChevronDown size={32} strokeWidth={1.5} />
        </div>
      </header>

      {/* ── Stats Band (Traction) ── */}
      <section className="upgrade-stats-section scroll-reveal">
        <div className="container">
          <h3 className="upgrade-stats-title">Achievements</h3>
          <div className="upgrade-stats-grid">
            <div className="upgrade-stat-item">
              <div className="upgrade-stat-value">6+</div>
              <div className="upgrade-stat-label">Intl. Competitions</div>
            </div>
            <div className="upgrade-stat-item">
              <div className="upgrade-stat-value">1st</div>
              <div className="upgrade-stat-label">IRDC 2023</div>
            </div>
            <div className="upgrade-stat-item">
              <div className="upgrade-stat-value">2nd</div>
              <div className="upgrade-stat-label">In Asia ERC '25</div>
            </div>
            <div className="upgrade-stat-item">
              <div className="upgrade-stat-value">1st</div>
              <div className="upgrade-stat-label">Indian Team ARCh '26</div>
            </div>
            <div className="upgrade-stat-item">
              <div className="upgrade-stat-value">10+</div>
              <div className="upgrade-stat-label">Industry Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Story & About BITS Pilani ── */}
      <section className="story-section scroll-reveal">
        <div className="container story-grid">

          <div className="story-card">
            <div className="story-image-wrapper">
              <img src={storyImg1} alt="Our Story" loading="lazy" />
            </div>
            <h3 className="story-title">OUR STORY</h3>
            <p className="story-text">
              Founded in 2021 by a group of BITS Pilani students passionate about <strong className="text-white">space exploration</strong>, CRISS began with a single goal: build an autonomous rover capable of competing on the international stage. Within two years we placed in the <strong className="text-white">top 10 at the International Rover Challenge</strong>. By 2025 we stood on the <strong className="text-white">podium at the European Rover Challenge</strong>.
            </p>
          </div>

          <div className="story-card">
            <div className="story-image-wrapper">
              <img src={storyImg2} alt="About BITS Pilani" loading="lazy" />
            </div>
            <h3 className="story-title">ABOUT BITS PILANI</h3>
            <p className="story-text">
              Established in 1964, BITS Pilani is one of <strong className="text-white">India's top-ranked institutions</strong>, known for <strong className="text-white">fostering innovation, cutting-edge research</strong>, and <strong className="text-white">entrepreneurship</strong>. Its extensive <strong className="text-white">global alumni network</strong> and <strong className="text-white">world-class academic ecosystem</strong> make it a hub for developing future leaders in technology and engineering.
            </p>
          </div>

        </div>
      </section>

      {/* ── Our Latest Rover Section (Styled like "New Collection") ── */}
      <section className="story-section scroll-reveal">
        <div className="container">
          <div className="fleet-header scroll-reveal">
            <h2 className="fleet-title">Engineered for Extremes</h2>
          </div>

          <div className="story-grid scroll-reveal delay-100">
            <div className="story-card fleet-story-img-card">
              <img src={engExtremesImg} alt="Latest Hardware Showcase" className="fleet-story-img" loading="lazy" />
            </div>

            <div className="fleet-specs-container">
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

              <div className="fleet-specs-action">
                <Link to="/research" className="btn btn-outline">
                  Read More
                </Link>
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

