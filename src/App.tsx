import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sponsorship from './pages/Sponsorship';
import Competitions from './pages/Competitions';
import Achievements from './pages/Achievements';
import Team from './pages/Team';
import Research from './pages/Research';
import Alumni from './pages/Alumni';
import Contact from './pages/Contact';
import SupportUs from './pages/SupportUs';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
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
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
