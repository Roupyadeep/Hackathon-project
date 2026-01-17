import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';
import LandingPage from './pages/LandingPage';
import PermissionScreen from './pages/PermissionScreen';
import Dashboard from './pages/Dashboard';
import VibeMap from './pages/VibeMap';
import Rewards from './pages/Rewards';
import Settings from './pages/Settings';
import SocialSyncPopup from './components/SocialSyncPopup';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/permissions" element={<PermissionScreen />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/vibe-map" element={<VibeMap />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          <SocialSyncPopup />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
