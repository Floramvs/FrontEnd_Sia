// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Clips from './components/Clips';
import Config from './components/Config';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // <-- Import Bootstrap CSS
// ... le reste de tes imports


function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">
          <div className="container mt-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/clips" element={<Clips />} />
              <Route path="/config" element={<Config />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
