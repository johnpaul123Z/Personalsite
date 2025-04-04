import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import About from './About';

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Fixed Sidebar Navigation */}
        <aside className="fixed top-0 left-0 w-64 h-screen bg-gradient-to-b from-blue-800 to-blue-600 text-white shadow-lg">
          <div className="p-6">
            <h1 className="text-3xl font-extrabold mb-8">My Portfolio</h1>
            <nav>
              <ul>
                <li className="mb-4">
                  <Link
                    to="/"
                    className="block py-3 px-4 rounded hover:bg-blue-700 transition duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/projects"
                    className="block py-3 px-4 rounded hover:bg-blue-700 transition duration-200"
                  >
                    Projects
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/resume"
                    className="block py-3 px-4 rounded hover:bg-blue-700 transition duration-200"
                  >
                    Resume
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/about"
                    className="block py-3 px-4 rounded hover:bg-blue-700 transition duration-200"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 ml-64 p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
