import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import HallOfImpact from './pages/HallOfImpact';
import Community from './pages/Community';
import Events from './pages/Events';
import Newsletter from './pages/Newsletter';
import Gallery from './pages/Gallery';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/impact" element={<HallOfImpact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/community" element={<Community />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
