import { useState } from 'react';
import { Link } from 'react-router';
import { ChevronDown } from 'lucide-react';

import useScrollReveal from '../hooks/useScrollReveal';
import './SupportUs.css';

// ── Budget breakdown ─────────────────────────────────────────────────────────
// Percentages are derived from the values so the pie and the legend can never
// drift apart.
//
// Palette: the original site palette, kept by choice. Note that the two darkest
// slots (#334573 / #5c4066) sit ΔE 6.8 apart to normal vision and 2.4 under
// protanopia, so the legend name + value beside each swatch is what carries
// identity for those two — keep the legend labelled if the colours stay.

type Category = { name: string; lakhs: number; color: string };

const CATEGORIES: Category[] = [
  { name: 'Payload & Science',        lakhs: 15.6, color: '#70e0e0' },
  { name: 'Electronics & Power',      lakhs: 7.8,  color: '#2c8ebf' },
  { name: 'Mechanical & Fabrication', lakhs: 13.2, color: '#334573' },
  { name: 'Autonomous Software',      lakhs: 4.2,  color: '#5c4066' },
  { name: 'Testing & Prototyping',    lakhs: 6.6,  color: '#b77580' },
  { name: 'Lab Operations',           lakhs: 3.6,  color: '#3e6596' },
  { name: 'Competition & Travel',     lakhs: 9.0,  color: '#4ac1d8' },
];

const TOTAL = CATEGORIES.reduce((sum, c) => sum + c.lakhs, 0);

const CX = 100;
const CY = 100;
const RADIUS = 90;
const INNER = 24;   // small hole so the wedges never converge on a point
const EXPLODE = 6;  // px a wedge slides outward when active

const point = (deg: number, r: number) => {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
};

// An annular sector. The separators are NOT cut out of the geometry (an angular
// gap would fan out towards the rim) — each wedge is stroked in the background
// colour instead, which gives a separator of constant width at every radius.
const wedgePath = (startDeg: number, endDeg: number) => {
  const oa = point(startDeg, RADIUS);
  const ob = point(endDeg, RADIUS);
  const ia = point(endDeg, INNER);
  const ib = point(startDeg, INNER);
  const large = endDeg - startDeg > 180 ? 1 : 0;
  const f = (n: number) => n.toFixed(2);
  return [
    `M ${f(oa.x)} ${f(oa.y)}`,
    `A ${RADIUS} ${RADIUS} 0 ${large} 1 ${f(ob.x)} ${f(ob.y)}`,
    `L ${f(ia.x)} ${f(ia.y)}`,
    `A ${INNER} ${INNER} 0 ${large} 0 ${f(ib.x)} ${f(ib.y)}`,
    'Z',
  ].join(' ');
};

const BudgetBreakdown = () => {
  const [active, setActive] = useState<number | null>(null);

  let cursor = 0;
  const segments = CATEGORIES.map((c) => {
    const pct = (c.lakhs / TOTAL) * 100;
    const startDeg = (cursor / 100) * 360;
    cursor += pct;
    const endDeg = (cursor / 100) * 360;
    const mid = ((startDeg + endDeg) / 2 - 90) * (Math.PI / 180);
    return {
      ...c,
      pct,
      path: wedgePath(startDeg, endDeg),
      dx: Math.cos(mid) * EXPLODE,
      dy: Math.sin(mid) * EXPLODE,
    };
  });

  return (
    <div className="budget-breakdown scroll-reveal delay-2">
      <h2 className="section-heading text-center">Budget By Category</h2>

      <div className="budget-breakdown-grid">

        <div className="budget-chart-container">
          <svg
            className="budget-pie"
            viewBox="0 0 200 200"
            role="img"
            aria-label="Budget split by category"
          >
            {segments.map((s, i) => (
              <path
                key={s.name}
                className={`pie-slice ${active === i ? 'is-active' : ''} ${active !== null && active !== i ? 'is-dimmed' : ''}`}
                d={s.path}
                fill={s.color}
                transform={active === i ? `translate(${s.dx.toFixed(2)} ${s.dy.toFixed(2)})` : undefined}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              />
            ))}
          </svg>

        </div>

        <div className="budget-legend-wrapper">
          <div className="budget-legend">
            {segments.map((s, i) => (
              <div
                key={s.name}
                className={`legend-item ${active === i ? 'is-active' : ''}`}
                tabIndex={0}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
              >
                <div className="legend-left">
                  <div className="legend-color" style={{ backgroundColor: s.color, ['--swatch' as string]: s.color }}></div>
                  <span className="legend-name">{s.name}</span>
                </div>
                <div className="legend-right">
                  <span className="legend-val">₹{s.lakhs.toFixed(1)}L</span>
                  <span className="legend-pct">{Math.round(s.pct)}%</span>
                </div>
              </div>
            ))}
          </div>

          <div className="budget-total">
            <span>Total</span>
            <span className="budget-total-val">₹60,00,000</span>
          </div>
        </div>

      </div>
    </div>
  );
};

const SupportUs = () => {
  useScrollReveal();

  return (
    <div className="support-us-page animate-fade-in">
      
      <header className="page-header page-header--photo support-header">
        <div className="container">
          <h1 className="page-title animate-slide-up" style={{ textTransform: 'none' }}>Fund the Future of CRISS</h1>
          <p className="page-subtitle animate-slide-up delay-100">
            Since 2017, CRISS Robotics has been entirely student-run. Today, we're building the first Martian-analog drone from India and preparing for the Australian Rover Challenge. We need your help to get there.
          </p>
        </div>
        <div
          className="scroll-indicator"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ChevronDown size={32} strokeWidth={1.5} />
        </div>
      </header>

      <section className="fundraising-section">
        <div className="container" style={{ maxWidth: '1200px' }}>
          
          {/* Top Section: Progress */}
          <div className="budget-overview scroll-reveal">
            <h2 className="section-heading text-center" style={{ marginBottom: '3rem' }}>Campaign Progress</h2>
            
            <div className="budget-header">
              <div className="budget-stat text-left">
                <div className="budget-amount">₹13,00,000</div>
                <div className="budget-label">RAISED TO DATE</div>
              </div>
              <div className="budget-stat text-right">
                <div className="budget-amount">₹60,00,000</div>
                <div className="budget-label">TOTAL TARGET</div>
              </div>
            </div>

            <div className="budget-progress-bar">
              <div className="budget-progress-fill" style={{ width: '21.67%' }}></div>
            </div>
            <div className="budget-progress-labels">
              <span>21.67% raised</span>
              <span>₹47L remaining</span>
            </div>
            
            <div className="support-actions" style={{ marginTop: '4rem' }}>
              <a href="https://www.bitsaa.org/g/criss-robotics" target="_blank" rel="noopener noreferrer" className="btn btn-solid btn-lg">DONATE NOW</a>
              <Link to="/contact" className="btn btn-outline btn-lg">CONTACT US</Link>
            </div>
          </div>

          {/* Bottom Section: Breakdown */}
          <BudgetBreakdown />
        </div>
      </section>

    </div>
  );
};

export default SupportUs;
