import React from 'react';
import { Routes, Route } from 'react-router-dom';

// ─── Providers ─────────────────────────────────────────────────────────────
import { CMSProvider } from './context/CMSContext';
import { ToastProvider } from './context/ToastContext';

// ─── Public Site ──────────────────────────────────────────────────────────
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import HallOfImpact from './pages/HallOfImpact';
import Community from './pages/Community';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Newsletter from './pages/Newsletter';
import Gallery from './pages/Gallery';

// ─── Admin ────────────────────────────────────────────────────────────────
import AdminLogin from './admin/AdminLogin';
import AdminLayout from './admin/AdminLayout';
import AdminDashboard from './admin/AdminDashboard';
import AdminEvents from './admin/AdminEvents';
import AdminSpeakers from './admin/AdminSpeakers';
import AdminTestimonials from './admin/AdminTestimonials';
import AdminHero from './admin/AdminHero';
import AdminMembership from './admin/AdminMembership';
import AdminSettings from './admin/AdminSettings';
import ProtectedRoute from './admin/ProtectedRoute';

function App() {
  return (
    <CMSProvider>
      <ToastProvider>
        <Routes>
          {/* ── Admin (no Navbar/Footer) ── */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }>
            <Route index element={<AdminDashboard />} />
            <Route path="hero" element={<AdminHero />} />
            <Route path="events" element={<AdminEvents />} />
            <Route path="speakers" element={<AdminSpeakers />} />
            <Route path="testimonials" element={<AdminTestimonials />} />
            <Route path="membership" element={<AdminMembership />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>

          {/* ── Public Site (with Navbar + Footer) ── */}
          <Route path="/*" element={
            <div className="min-h-screen bg-white font-sans">
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/impact" element={<HallOfImpact />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/events/:id" element={<EventDetail />} />
                  <Route path="/community" element={<Community />} />
                  <Route path="/newsletter" element={<Newsletter />} />
                  <Route path="/gallery" element={<Gallery />} />
                </Routes>
              </main>
              <Footer />
            </div>
          } />
        </Routes>
      </ToastProvider>
    </CMSProvider>
  );
}

export default App;
