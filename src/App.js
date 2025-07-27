import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Motive from './pages/Motive';
import Upcoming from './pages/Upcoming';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound'; // Add a NotFound component for unmatched routes



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/motive" element={<Motive />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        {/* Catch-all route for unmatched paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
