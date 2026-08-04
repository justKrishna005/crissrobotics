import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router';
import useScrollReveal from '../hooks/useScrollReveal';
import './Achievements.css';

interface AchievementItem {
  year: string;
  title: string;
  description: string;
  highlight: string;
  color: string;
}

const achievementsData: AchievementItem[] = [
  {
    year: "2026",
    title: "Australian Rover Challenge 2026",
    description: "CRISS Robotics achieved a historic milestone by becoming the first and only Indian team to receive an invitation to participate in the Australian Rover Challenge 2026. This recognition reflects the team's consistent excellence in rover engineering, innovation, and its growing presence in the global robotics community.",
    highlight: "First and Only Indian Team Invited",
    color: "#2c8ebf"
  },
  {
    year: "2025",
    title: "European Rover Challenge 2025",
    description: "In the European Rover Challenge 2025, our team delivered a remarkable performance by securing 2nd place in Asia and finishing 3rd internationally. This achievement highlights our continuous improvement in rover autonomy, navigation, and mission reliability at a highly competitive global platform.",
    highlight: "2nd in Asia, 3rd Internationally — ERC 2025",
    color: "#334573"
  },
  {
    year: "2025",
    title: "International Rover Design Challenge 2025",
    description: "At the International Rover Design Challenge 2025, our team secured 3rd Rank overall, showcasing strong advancements in rover mechanics, electronics integration, and mission strategy. This result reflects our team's consistent growth and dedication to high-performance rover engineering.",
    highlight: "3rd Rank Overall — IRDC 2025",
    color: "#5c4066"
  },
  {
    year: "2025",
    title: "Gujarat Robofest 4.0",
    description: "We successfully cleared the ideation phase (Level 1) at Gujarat Robofest 4.0 and were selected for Level 2, which is currently in progress. Our innovative concept and technical feasibility earned us a prize money of ₹2.5 Lakhs, validating the real-world impact and scalability of our solution.",
    highlight: "Won Ideation Phase (Level 1), ₹2.5 Lakhs Prize",
    color: "#b77580"
  },
  {
    year: "2024",
    title: "International Rover Challenge 2024",
    description: "During the International Rover Challenge 2024, we were honored with the Best Business Plan Award for our detailed rover commercialization and sustainability strategy. Competing against top international teams, we secured an overall rank of 10th and finished 2nd in the PIMA evaluation, reflecting our strong balance of technical execution and strategic planning.",
    highlight: "Best Business Plan Award, PIMA 2nd, Overall Rank 10",
    color: "#3e6596"
  },
  {
    year: "2023",
    title: "European Rover Challenge 2023",
    description: "At the European Rover Challenge 2023, our team demonstrated strong technical excellence and operational reliability, finishing 2nd in Asia and 5th Worldwide. Additionally, we were recognized with the Best in Maintenance award for our rover's modular design, quick servicing capability, and sustained performance during missions.",
    highlight: "2nd in Asia, 5th Worldwide, Best in Maintenance",
    color: "#4ac1d8"
  },
  {
    year: "2023",
    title: "International Rover Design Challenge 2023",
    description: "Our team achieved an outstanding milestone at the International Rover Design Challenge (IRDC) 2023 by securing 1st Rank with our Curie Rover. The competition evaluated rover design, innovation, and mission execution, and our rover stood out for its robust engineering, system integration, and performance across multiple challenge scenarios.",
    highlight: "1st Rank with Curie Rover at IRDC 2023",
    color: "#2c8ebf"
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
          <div className="alternating-timeline-container">
            {/* Center Vertical Timeline Line */}
            <div className="alternating-timeline-line"></div>

            {achievementsData.map((item, index) => {
              const delayClass = `delay-${(index % 5) + 1}`;
              const isEven = index % 2 === 0;
              const rowClass = isEven ? 'timeline-row--left-text' : 'timeline-row--right-text';

              const textContent = (
                <div className="timeline-text-content glass-panel">
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
              );

              return (
                <div key={index} className={`alternating-timeline-row scroll-reveal ${delayClass} ${rowClass}`} style={{ '--item-color': item.color } as React.CSSProperties}>
                  
                  {/* Left Side */}
                  <div className="timeline-side timeline-side--left">
                    {isEven ? textContent : null}
                  </div>

                  {/* Center Node & Badge */}
                  <div className="alternating-timeline-center">
                    <div className="alternating-timeline-node">
                      <div className="alternating-node-inner"></div>
                    </div>
                    {/* The Badge flag pointing towards text */}
                    <div className={`achievement-year-flag flag--${isEven ? 'left' : 'right'}`}>
                      <span>{item.year}</span>
                    </div>
                  </div>

                  {/* Right Side */}
                  <div className="timeline-side timeline-side--right">
                    {isEven ? null : textContent}
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>


    </div>
  );
};

export default Achievements;
