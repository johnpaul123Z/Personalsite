import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import About from './About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white arcade-bg">
        {/* Arcade Cabinet Header */}
        <header className="bg-gradient-to-r from-purple-900 to-blue-900 border-b-4 border-pink-500 shadow-lg p-4 fixed w-full z-10">
          <div className="container mx-auto flex justify-between items-center">
            {/* Arcade Logo */}
            <div className="text-3xl font-bold arcade-text tracking-wider text-pink-400 glow-text">
              <span className="text-yellow-300">PIXEL</span>FOLIO
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-4">
              <Link to="/" className="arcade-btn">
                HOME
              </Link>
              <Link to="/projects" className="arcade-btn">
                PROJECTS
              </Link>
              <Link to="/resume" className="arcade-btn">
                RESUME
              </Link>
              <Link to="/about" className="arcade-btn">
                ABOUT
              </Link>
            </nav>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="arcade-btn">MENU</button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-24 pb-16 container mx-auto p-6">
          <div className="arcade-screen bg-gray-900 border-4 border-pink-500 rounded-lg shadow-neon p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </main>
        
        {/* Arcade Cabinet Controls */}
        <footer className="fixed bottom-0 w-full bg-gradient-to-r from-purple-900 to-blue-900 border-t-4 border-pink-500 p-3">
          <div className="container mx-auto flex justify-center md:justify-between items-center">
            <div className="hidden md:flex space-x-4">
              <div className="h-6 w-6 rounded-full bg-red-500 border-2 border-white"></div>
              <div className="h-6 w-6 rounded-full bg-blue-500 border-2 border-white"></div>
              <div className="h-6 w-6 rounded-full bg-yellow-500 border-2 border-white"></div>
              <div className="h-6 w-6 rounded-full bg-green-500 border-2 border-white"></div>
            </div>
            <div className="text-sm text-center glow-text">
              © 2025 PIXELFOLIO • INSERT COIN TO CONTINUE
            </div>
            <div className="hidden md:block">
              <div className="w-10 h-10 rounded-full bg-black border-2 border-yellow-400 flex items-center justify-center text-yellow-400">
                P1
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;