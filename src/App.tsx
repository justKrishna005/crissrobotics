import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import './App.css';

const Home = React.lazy(() => import('./pages/Home'));
const Sponsorship = React.lazy(() => import('./pages/Sponsorship'));
const Competitions = React.lazy(() => import('./pages/Competitions'));
const Achievements = React.lazy(() => import('./pages/Achievements'));
const Team = React.lazy(() => import('./pages/Team'));
const Research = React.lazy(() => import('./pages/Research'));
const Alumni = React.lazy(() => import('./pages/Alumni'));
const Contact = React.lazy(() => import('./pages/Contact'));
const SupportUs = React.lazy(() => import('./pages/SupportUs'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/partners" element={<Sponsorship />} />
              <Route path="/competitions" element={<Competitions />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/team" element={<Team />} />
              <Route path="/research" element={<Research />} />
              <Route path="/alumni" element={<Alumni />} />
              <Route path="/support-us" element={<SupportUs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
