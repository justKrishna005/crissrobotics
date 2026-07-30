import { Link } from 'react-router';
import { Heart, TrendingUp, Users } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './SupportUs.css';

const SupportUs = () => {
  useScrollReveal();

  return (
    <div className="support-us-page animate-fade-in">
      
      <section className="support-hero">
        <div className="container">
          <h1 className="page-title text-center" style={{ textTransform: 'none' }}>Fund the Future of CRISS</h1>
          <p className="page-subtitle text-center">
            Since 2017, CRISS Robotics has been entirely student-run. Today, we're building the first Martian-analog drone from India and preparing for the Australian Rover Challenge. We need your help to get there.
          </p>
        </div>
      </section>

      <section className="fundraising-section">
        <div className="container">
          <div className="budget-card">
            <div className="budget-header">
              <div className="budget-stat">
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

            <h3 className="budget-section-title">BUDGET BY CATEGORY</h3>

            <div className="budget-chart-container">
              <div className="donut-chart"></div>
            </div>

            <div className="budget-legend">
              <div className="legend-item">
                <div className="legend-left">
                  <div className="legend-color" style={{ backgroundColor: '#70e0e0' }}></div>
                  <span className="legend-name">Payload & Science</span>
                </div>
                <div className="legend-right">
                  <span className="legend-val">₹15.6L</span>
                  <span className="legend-pct">26%</span>
                </div>
              </div>
              <div className="legend-item">
                <div className="legend-left">
                  <div className="legend-color" style={{ backgroundColor: '#2c8ebf' }}></div>
                  <span className="legend-name">Electronics & Power</span>
                </div>
                <div className="legend-right">
                  <span className="legend-val">₹7.8L</span>
                  <span className="legend-pct">13%</span>
                </div>
              </div>
              <div className="legend-item">
                <div className="legend-left">
                  <div className="legend-color" style={{ backgroundColor: '#334573' }}></div>
                  <span className="legend-name">Mechanical & Fabrication</span>
                </div>
                <div className="legend-right">
                  <span className="legend-val">₹13.2L</span>
                  <span className="legend-pct">22%</span>
                </div>
              </div>
              <div className="legend-item">
                <div className="legend-left">
                  <div className="legend-color" style={{ backgroundColor: '#5c4066' }}></div>
                  <span className="legend-name">Autonomous Software</span>
                </div>
                <div className="legend-right">
                  <span className="legend-val">₹4.2L</span>
                  <span className="legend-pct">7%</span>
                </div>
              </div>
              <div className="legend-item">
                <div className="legend-left">
                  <div className="legend-color" style={{ backgroundColor: '#b77580' }}></div>
                  <span className="legend-name">Testing & Prototyping</span>
                </div>
                <div className="legend-right">
                  <span className="legend-val">₹6.6L</span>
                  <span className="legend-pct">11%</span>
                </div>
              </div>
              <div className="legend-item">
                <div className="legend-left">
                  <div className="legend-color" style={{ backgroundColor: '#3e6596' }}></div>
                  <span className="legend-name">Lab Operations</span>
                </div>
                <div className="legend-right">
                  <span className="legend-val">₹3.6L</span>
                  <span className="legend-pct">6%</span>
                </div>
              </div>
              <div className="legend-item">
                <div className="legend-left">
                  <div className="legend-color" style={{ backgroundColor: '#4ac1d8' }}></div>
                  <span className="legend-name">Competition & Travel</span>
                </div>
                <div className="legend-right">
                  <span className="legend-val">₹9.0L</span>
                  <span className="legend-pct">15%</span>
                </div>
              </div>
            </div>

            <div className="budget-total">
              <span>Total</span>
              <span className="budget-total-val">₹60,00,000L</span>
            </div>

            <div className="support-actions" style={{ marginTop: '3rem' }}>
              <button className="btn btn-primary btn-lg">DONATE NOW</button>
              <Link to="/contact" className="btn btn-outline btn-lg">CONTACT US</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SupportUs;
