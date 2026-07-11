import { useState } from 'react';
import './Competitions.css';

// ─── Types ────────────────────────────────────────────────────────────────────

interface CompData {
  fullName: string;
  tagline: string;
  logo: string;         // URL to competition logo — replace with local imports when available
  website?: string;
}

// ─── Competition data map ─────────────────────────────────────────────────────
// Add a new key to extend. logo: replace with a real logo URL or import.

const competitions: Record<string, CompData> = {
  IRC: {
    fullName: "International Rover Challenge",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Space_Robotics_Society_Logo.png/200px-Space_Robotics_Society_Logo.png",
    tagline:
      "The International Rover Challenge (formerly Indian Rover Challenge), organized by the Space Robotics Society, is the sole competition of its kind in the Asia-Pacific region. It challenges student teams worldwide to engineer rovers ready for space exploration, fostering innovation and inspiring the next generation of engineers.",
    website: "https://www.spaceroboticssociety.org/events/international-rover-challenge/",
  },
  ERC: {
    fullName: "European Rover Challenge",
    logo: "https://roverchallenge.eu/wp-content/uploads/2022/03/erc_logo_white.png",
    tagline:
      "The European Rover Challenge is an international robotics competition where academic teams from around the world present their mobile robot designs, competing in missions based on real ESA and NASA scenarios. The event takes place on the world's largest artificial Martian track in Kielce, Poland.",
    website: "https://roverchallenge.eu/en/main-page/",
  },
  ARCh: {
    fullName: "Autonomous Robotics Challenge",
    logo: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=300&auto=format&fit=crop",
    tagline:
      "The Autonomous Robotics Challenge (ARCh) evaluates a rover's ability to operate fully independently in complex environments. Teams are scored on system architecture, decision-making, and mission execution without any human intervention during the run.",
    website: "https://www.aiaa.org/arch",
  },
  IRDC: {
    fullName: "International Rover Design Challenge",
    logo: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=300&auto=format&fit=crop",
    tagline:
      "The International Rover Design Challenge (IRDC) challenges university students to design Mars rovers fully equipped and mission-ready for operation on Mars. Teams meticulously plan every subsystem — mechanical, electrical, and software — considering real extra-terrestrial parameters in their designs.",
    website: "https://southasia.marssociety.org/irdc/",
  },
  ISDC: {
    fullName: "International Space Development Conference",
    logo: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=300&auto=format&fit=crop",
    tagline:
      "The ISDC is one of the world's premier annual gatherings focused on space exploration, colonisation, and development. CRISS participates in design competitions and technical presentations, showcasing research and rover technology to a global audience of space professionals and academics.",
    website: "https://isdc.nss.org/",
  },
  Robofest: {
    fullName: "Robofest Robotics Competition",
    logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=300&auto=format&fit=crop",
    tagline:
      "Robofest is an international autonomous robotics festival and competition that challenges student teams to design, build, and program robots capable of completing complex autonomous missions without any human intervention during the run. It emphasises ingenuity, algorithmic thinking, and real-world system robustness.",
    website: "https://robofest.net/",
  },
};

const compKeys = ["IRC", "ERC", "ARCh", "IRDC", "ISDC", "Robofest"] as const;
type CompKey = typeof compKeys[number];

// ─── Page ─────────────────────────────────────────────────────────────────────

const Competitions = () => {
  const [active, setActive] = useState<CompKey>("IRC");
  const comp = competitions[active];

  return (
    <div className="animate-fade-in">
      <header className="page-header page-header--photo">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="comp-page-title">Competitions</h1>
          <p className="comp-page-subtitle">
            CRISS has consistently been among the top rover teams globally,
            competing in prestigious international competitions.
          </p>
        </div>
      </header>

      <section className="comp-section">
        <div className="container">

          {/* ── Tab bar ── */}
          <div className="batch-bar">
            {compKeys.map((key) => (
              <button
                key={key}
                className={`batch-tab${active === key ? ' batch-tab--active' : ''}`}
                onClick={() => setActive(key)}
              >
                {key}
              </button>
            ))}
          </div>

          {/* ── Two-column competition info ── */}
          <div className="comp-info">
            {/* Left: logo image */}
            <div className="comp-logo-wrap">
              <img
                src={comp.logo}
                alt={`${active} logo`}
                className="comp-logo-img"
              />
            </div>

            {/* Right: title (with small inline logo), full-name as link, description */}
            <div className="comp-info-body">
              <div className="comp-info-top">
                <img
                  src={comp.logo}
                  alt={`${active} icon`}
                  className="comp-info-icon"
                />
                <h2 className="comp-info-title">{active}</h2>
              </div>
              {comp.website ? (
                <a
                  href={comp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="comp-info-full comp-info-full--link"
                >
                  {comp.fullName}
                </a>
              ) : (
                <p className="comp-info-full">{comp.fullName}</p>
              )}
              <p className="comp-info-tagline">{comp.tagline}</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Competitions;
