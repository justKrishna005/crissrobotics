import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Globe, Rocket } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg">
          <div className="hero-overlay-dark"></div>
          <div className="hero-overlay-gradient"></div>
        </div>

        <div className="hero-content animate-fade-in">
          {/* <div className="status-pill">
            <span className="status-dot animate-pulse"></span>
            <span className="status-text">Mission Control Active</span>
          </div> */}

          <h1 className="hero-title-text animate-slide-up">
            <span>CRISS</span>
            <span>ROBOTICS</span>
          </h1>

          <p className="hero-desc animate-slide-up delay-100">
            Consortium of Research in Space Systems
          </p>

          <div className="hero-actions animate-slide-up delay-200">
            <Link to="/competitions" className="btn btn-primary btn-lg">
              VIEW MISSIONS
            </Link>
            <Link to="/sponsorship" className="btn btn-outline btn-lg">
              PARTNER WITH US
            </Link>
          </div>
        </div>

        <div className="coordinates hidden-mobile">
          <div>LAT: 38.4069 N</div>
          <div>LONG: 110.7937 W</div>
          <div>ELEV: 1,304M</div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3 className="stat-number text-white">05+</h3>
              <p className="stat-label">Rover Iterations</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number text-white">50+</h3>
              <p className="stat-label">Active Members</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number text-accent">Top 10</h3>
              <p className="stat-label">Global Ranking</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number text-white">100+</h3>
              <p className="stat-label">Alumni Network</p>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Excellence Section */}
      <section className="engineering-section">
        <div className="container">
          <div className="engineering-grid">
            <div className="engineering-text">
              <h2 className="section-title text-white">
                ENGINEERING<br />EXCELLENCE
              </h2>
              <p className="section-desc">
                Our rovers are complex systems of systems, requiring seamless integration across mechanical, electrical, and software domains. From custom composite chassis design to autonomous navigation algorithms using ROS, we push the limits of undergraduate engineering.
              </p>

              <ul className="features-list">
                <li className="feature-item">
                  <div className="feature-icon bg-accent-light">
                    <Cpu className="text-accent" />
                  </div>
                  <div className="feature-content">
                    <h4 className="feature-title">AUTONOMY & VISION</h4>
                    <p className="feature-desc">Advanced computer vision, SLAM, and sensor fusion for navigating harsh terrain without human intervention.</p>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="feature-icon bg-secondary-light">
                    <Rocket className="text-secondary" />
                  </div>
                  <div className="feature-content">
                    <h4 className="feature-title">MOBILITY & CHASSIS</h4>
                    <p className="feature-desc">Custom-machined rocker-bogie suspensions and lightweight composite structures designed for high-stress environments.</p>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="feature-icon bg-white-light">
                    <Globe className="text-white" />
                  </div>
                  <div className="feature-content">
                    <h4 className="feature-title">TELECOMMUNICATIONS</h4>
                    <p className="feature-desc">High-bandwidth, low-latency radio systems ensuring stable control links over kilometers of obstructed terrain.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="engineering-image-wrapper">
              <div className="glow-effect"></div>
              <img src="/workshop.png" alt="Engineering Workshop" className="engineering-image" />

              <div className="overlay-card">
                <div className="overlay-header">
                  <span>SYS_TEMP</span>
                  <span className="text-green">NOMINAL</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill w-45"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fuel The Mission Section */}
      <section className="cta-section">
        <div className="cta-bg"></div>
        <div className="container cta-content">
          <h2 className="cta-title">FUEL THE MISSION</h2>
          <p className="cta-desc">
            Our success relies on the support of industry leaders. Partner with CRISS Robotics and help shape the future of aerospace engineering.
          </p>
          <Link to="/sponsorship" className="btn btn-white btn-lg cta-btn">
            View Sponsorship Packet <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
