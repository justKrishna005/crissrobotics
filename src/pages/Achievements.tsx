import { Calendar, ArrowRight, ExternalLink, ChevronDown } from 'lucide-react';
import { Link } from 'react-router';
import useScrollReveal from '../hooks/useScrollReveal';
import './Achievements.css';

interface AchievementItem {
  year: string;
  title: string;
  description: string;
  highlight: string;
}

const achievementsData: AchievementItem[] = [
  {
    year: "2026",
    title: "Australian Rover Challenge 2026",
    description: "CRISS Robotics achieved a historic milestone by becoming the first and only Indian team to receive an invitation to participate in the Australian Rover Challenge 2026. This recognition reflects the team's consistent excellence in rover engineering, innovation, and its growing presence in the global robotics community.",
    highlight: "First and Only Indian Team Invited"
  },
  {
    year: "2025",
    title: "European Rover Challenge 2025",
    description: "In the European Rover Challenge 2025, our team delivered a remarkable performance by securing 2nd place in Asia and finishing 3rd internationally. This achievement highlights our continuous improvement in rover autonomy, navigation, and mission reliability at a highly competitive global platform.",
    highlight: "2nd in Asia, 3rd Internationally — ERC 2025"
  },
  {
    year: "2025",
    title: "International Rover Design Challenge 2025",
    description: "At the International Rover Design Challenge 2025, our team secured 3rd Rank overall, showcasing strong advancements in rover mechanics, electronics integration, and mission strategy. This result reflects our team's consistent growth and dedication to high-performance rover engineering.",
    highlight: "3rd Rank Overall — IRDC 2025"
  },
  {
    year: "2025",
    title: "Gujarat Robofest 4.0",
    description: "We successfully cleared the ideation phase (Level 1) at Gujarat Robofest 4.0 and were selected for Level 2, which is currently in progress. Our innovative concept and technical feasibility earned us a prize money of ₹2.5 Lakhs, validating the real-world impact and scalability of our solution.",
    highlight: "Won Ideation Phase (Level 1), ₹2.5 Lakhs Prize"
  },
  {
    year: "2024",
    title: "International Rover Challenge 2024",
    description: "During the International Rover Challenge 2024, we were honored with the Best Business Plan Award for our detailed rover commercialization and sustainability strategy. Competing against top international teams, we secured an overall rank of 10th and finished 2nd in the PIMA evaluation, reflecting our strong balance of technical execution and strategic planning.",
    highlight: "Best Business Plan Award, PIMA 2nd, Overall Rank 10"
  },
  {
    year: "2023",
    title: "European Rover Challenge 2023",
    description: "At the European Rover Challenge 2023, our team demonstrated strong technical excellence and operational reliability, finishing 2nd in Asia and 5th Worldwide. Additionally, we were recognized with the Best in Maintenance award for our rover's modular design, quick servicing capability, and sustained performance during missions.",
    highlight: "2nd in Asia, 5th Worldwide, Best in Maintenance"
  },
  {
    year: "2023",
    title: "International Rover Design Challenge 2023",
    description: "Our team achieved an outstanding milestone at the International Rover Design Challenge (IRDC) 2023 by securing 1st Rank with our Curie Rover. The competition evaluated rover design, innovation, and mission execution, and our rover stood out for its robust engineering, system integration, and performance across multiple challenge scenarios.",
    highlight: "1st Rank with Curie Rover at IRDC 2023"
  }
];

const Achievements = () => {
  useScrollReveal();

  return (
    <div className="achievements-page animate-fade-in">
      <header className="page-header page-header--photo">
        <div className="container">
          <h1 className="page-title animate-slide-up">
            Our <span className="text-accent">Achievements</span>
          </h1>
          <p className="page-subtitle animate-slide-up delay-100">
            A history of excellence, innovation, and pushing the boundaries of what undergraduate engineers can achieve.
          </p>
        </div>
        <div 
          className="scroll-indicator"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ChevronDown size={32} strokeWidth={1.5} />
        </div>
      </header>

      <section className="compact-timeline-section">
        <div className="container">
          <div className="compact-timeline-container">
            {/* Left Vertical Timeline Line */}
            <div className="compact-timeline-line"></div>

            {achievementsData.map((item, index) => {
              const delayClass = `delay-${(index % 5) + 1}`;
              return (
                <div key={index} className={`compact-timeline-item scroll-reveal ${delayClass}`}>
                  {/* Node on the line */}
                  <div className="compact-timeline-node">
                    <div className="compact-node-inner"></div>
                  </div>

                  {/* Horizontal Connector */}
                  <div className="compact-timeline-connector"></div>

                  {/* Card Content */}
                  <div className="compact-timeline-card glass-panel">
                    <div className="compact-timeline-card-top">
                    <div className="achievement-year-badge">
                        <Calendar size={14} className="year-calendar-icon" />
                        <span>{item.year}</span>
                      </div>
                    </div>
                    
                    <h3 className="achievement-title">{item.title}</h3>
                    <p className="achievement-desc">{item.description}</p>
                    
                    <div className="achievement-highlight-pill">
                      <span className="highlight-text">{item.highlight}</span>
                    </div>

                    <div className="achievement-link-container" style={{ marginTop: 'auto' }}>
                      <Link to="/competitions" className="achievement-link">
                        View Competition Details <ArrowRight size={16} className="arrow-icon" />
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
      <section className="news-coverage-section">
        <div className="container">
          <div className="section-header-centered">
            <h2 className="section-heading">In the News</h2>
            <p className="section-paragraph max-w-800">
              Our engineering achievements have caught the attention of national media and global technology publications.
            </p>
          </div>

          <div className="news-grid">
            <a href="#" className="news-card glass-panel scroll-reveal delay-1">
              <div className="news-source">The Hindu</div>
              <h3 className="news-title">BITS Pilani Team Creates History, Invited to Australian Rover Challenge</h3>
              <p className="news-excerpt">
                CRISS Robotics becomes the first Indian team to qualify for the prestigious ARC, showcasing their custom-built Martian rover capabilities on a global stage...
              </p>
              <div className="news-read-more">
                Read Full Article <ExternalLink size={16} className="external-icon" />
              </div>
            </a>

            <a href="#" className="news-card glass-panel scroll-reveal delay-2">
              <div className="news-source">Times of India</div>
              <h3 className="news-title">Students Build Rs 2.5 Lakh Autonomous Drone for Planetary Exploration</h3>
              <p className="news-excerpt">
                Winning the Gujarat Robofest ideation phase, the team is now developing an autonomous aerial system designed specifically for extra-terrestrial environments...
              </p>
              <div className="news-read-more">
                Read Full Article <ExternalLink size={16} className="external-icon" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
