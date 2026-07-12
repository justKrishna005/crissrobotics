import { Trophy, Award, Medal, Star, Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import './Achievements.css';

interface AchievementItem {
  year: string;
  title: string;
  description: string;
  highlight: string;
  icon: React.ReactNode;
}

const achievementsData: AchievementItem[] = [
  {
    year: "2026",
    title: "Australian Rover Challenge 2026",
    description: "CRISS Robotics achieved a historic milestone by becoming the first and only Indian team to receive an invitation to participate in the Australian Rover Challenge 2026. This recognition reflects the team's consistent excellence in rover engineering, innovation, and its growing presence in the global robotics community.",
    highlight: "First and Only Indian Team Invited",
    icon: <Trophy size={20} />
  },
  {
    year: "2025",
    title: "European Rover Challenge 2025",
    description: "In the European Rover Challenge 2025, our team delivered a remarkable performance by securing 2nd place in Asia and finishing 3rd internationally. This achievement highlights our continuous improvement in rover autonomy, navigation, and mission reliability at a highly competitive global platform.",
    highlight: "2nd in Asia, 3rd Internationally — ERC 2025",
    icon: <Medal size={20} />
  },
  {
    year: "2025",
    title: "International Rover Design Challenge 2025",
    description: "At the International Rover Design Challenge 2025, our team secured 3rd Rank overall, showcasing strong advancements in rover mechanics, electronics integration, and mission strategy. This result reflects our team's consistent growth and dedication to high-performance rover engineering.",
    highlight: "3rd Rank Overall — IRDC 2025",
    icon: <Award size={20} />
  },
  {
    year: "2025",
    title: "Gujarat Robofest 4.0",
    description: "We successfully cleared the ideation phase (Level 1) at Gujarat Robofest 4.0 and were selected for Level 2, which is currently in progress. Our innovative concept and technical feasibility earned us a prize money of ₹2.5 Lakhs, validating the real-world impact and scalability of our solution.",
    highlight: "Won Ideation Phase (Level 1), ₹2.5 Lakhs Prize",
    icon: <Star size={20} />
  },
  {
    year: "2024",
    title: "International Rover Challenge 2024",
    description: "During the International Rover Challenge 2024, we were honored with the Best Business Plan Award for our detailed rover commercialization and sustainability strategy. Competing against top international teams, we secured an overall rank of 10th and finished 2nd in the PIMA evaluation, reflecting our strong balance of technical execution and strategic planning.",
    highlight: "Best Business Plan Award, PIMA 2nd, Overall Rank 10",
    icon: <Trophy size={20} />
  },
  {
    year: "2023",
    title: "European Rover Challenge 2023",
    description: "At the European Rover Challenge 2023, our team demonstrated strong technical excellence and operational reliability, finishing 2nd in Asia and 5th Worldwide. Additionally, we were recognized with the Best in Maintenance award for our rover's modular design, quick servicing capability, and sustained performance during missions.",
    highlight: "2nd in Asia, 5th Worldwide, Best in Maintenance",
    icon: <Award size={20} />
  },
  {
    year: "2023",
    title: "International Rover Design Challenge 2023",
    description: "Our team achieved an outstanding milestone at the International Rover Design Challenge (IRDC) 2023 by securing 1st Rank with our Curie Rover. The competition evaluated rover design, innovation, and mission execution, and our rover stood out for its robust engineering, system integration, and performance across multiple challenge scenarios.",
    highlight: "1st Rank with Curie Rover at IRDC 2023",
    icon: <Trophy size={20} />
  }
];

const Achievements = () => {
  useScrollReveal();

  return (
    <div className="achievements-page animate-fade-in">
      <header className="page-header page-header--photo">
        <div className="container">
          <h1 className="page-title">
            OUR <span className="text-accent">ACHIEVEMENTS</span>
          </h1>
          <p className="page-subtitle">
            A history of excellence, innovation, and pushing the boundaries of what undergraduate engineers can achieve.
          </p>
        </div>
      </header>

      <section className="timeline-section">
        <div className="container">
          <div className="timeline-container">
            {/* Center Vertical Timeline Line */}
            <div className="timeline-line"></div>

            {achievementsData.map((item, index) => {
              const isEven = index % 2 === 0;
              const delayClass = `delay-${(index % 5) + 1}`;
              return (
                <div
                  key={index}
                  className={`timeline-item ${isEven ? 'timeline-right' : 'timeline-left'} scroll-reveal ${delayClass}`}
                >
                  {/* Timeline Year */}
                  <div className="timeline-year-label">
                    <Calendar size={16} className="year-calendar-icon" />
                    <span>{item.year}</span>
                  </div>

                  {/* Central Node Circle */}
                  <div className="timeline-node">
                    <div className="node-inner">
                      {item.icon}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="timeline-card glass-card grain-overlay">
                    <div className="timeline-card-arrow"></div>
                    <div className="timeline-card-header">
                      <h3 className="achievement-title">{item.title}</h3>
                    </div>
                    <p className="achievement-desc">{item.description}</p>
                    <div className="achievement-highlight-box">
                      <span className="highlight-dot"></span>
                      <span className="highlight-text">{item.highlight}</span>
                    </div>
                    <div style={{ marginTop: '1.5rem' }}>
                      <Link to="/competitions" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                        View Competition Details <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── News Coverage ── */}
      <section className="news-coverage-section grain-overlay" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="section-header-centered" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-heading">IN THE NEWS</h2>
            <p className="section-paragraph max-w-800" style={{ margin: '0 auto' }}>
              Our engineering achievements have caught the attention of national media and global technology publications.
            </p>
          </div>

          <div className="news-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <a href="#" className="news-card glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
              <div className="news-source" style={{ color: 'var(--accent-light)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>The Hindu</div>
              <h3 className="news-title" style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>BITS Pilani Team Creates History, Invited to Australian Rover Challenge</h3>
              <p className="news-excerpt" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '2rem', flexGrow: 1 }}>
                CRISS Robotics becomes the first Indian team to qualify for the prestigious ARC, showcasing their custom-built Martian rover...
              </p>
              <div className="news-read-more" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-light)', fontWeight: 600, fontSize: '0.9rem' }}>
                <ExternalLink size={16} /> Read Full Article
              </div>
            </a>

            <a href="#" className="news-card glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
              <div className="news-source" style={{ color: 'var(--accent-light)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Times of India</div>
              <h3 className="news-title" style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Students Build Rs 2.5 Lakh Autonomous Drone for Planetary Exploration</h3>
              <p className="news-excerpt" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '2rem', flexGrow: 1 }}>
                Winning the Gujarat Robofest ideation phase, the team is now developing an autonomous aerial system for extra-terrestrial environments...
              </p>
              <div className="news-read-more" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-light)', fontWeight: 600, fontSize: '0.9rem' }}>
                <ExternalLink size={16} /> Read Full Article
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
