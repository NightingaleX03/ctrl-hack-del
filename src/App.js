// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './pages/profile';
import Home from './pages/Home';
import About from './pages/about';
import './App.css'; 

const App = () => {
  return (
    <Router>
      {/* Navbar is displayed on all pages */}
      <Navbar />
      {/* Routes for different pages */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
