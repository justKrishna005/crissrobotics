import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sponsorship from './pages/Sponsorship';
import Competitions from './pages/Competitions';
import Achievements from './pages/Achievements';
import Team from './pages/Team';
import Alumni from './pages/Alumni';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sponsorship" element={<Sponsorship />} />
            <Route path="/competitions" element={<Competitions />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/team" element={<Team />} />
            <Route path="/alumni" element={<Alumni />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
