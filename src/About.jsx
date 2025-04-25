import React from 'react';

function About() {
  return (
    <div className="p-6">
      <h1 className="arcade-text text-3xl font-bold mb-6 text-green-400 glow-text">ABOUT ME</h1>
      <p className="text-yellow-300 text-center mb-8">PLAYER PROFILE</p>
      
      {/* Arcade Character Card */}
      <div className="mb-10 bg-gray-900 border-2 border-blue-500 p-6 rounded-lg shadow-neon">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-32 h-32 bg-purple-900 border-4 border-pink-500 rounded-lg flex items-center justify-center">
            <div className="text-5xl text-pink-400 glow-text">JG</div>
          </div>
          <div className="flex-1">
            <h2 className="arcade-text text-xl text-cyan-400 mb-4">COMPUTER SCIENCE STUDENT</h2>
            <p className="text-gray-300 mb-4">
              I am a Computer Science student at the University of Houston with a strong customer service background
              and a growing portfolio of web development and programming projects.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="skill-badge">PYTHON</span>
              <span className="skill-badge">REACT</span>
              <span className="skill-badge">JAVASCRIPT</span>
              <span className="skill-badge">MYSQL</span>
              <span className="skill-badge">JAVA</span>
              <span className="skill-badge">HTML/CSS</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="mb-10">
        <h2 className="arcade-text text-xl text-blue-400 mb-4">PLAYER STATS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="stat-box">
            <div className="text-pink-400">EDUCATION</div>
            <div className="stat-value">UH CS</div>
          </div>
          <div className="stat-box">
            <div className="text-pink-400">GRADUATION</div>
            <div className="stat-value">2025</div>
          </div>
          <div className="stat-box">
            <div className="text-pink-400">EXPERIENCE</div>
            <div className="stat-value">2+ YRS</div>
          </div>
        </div>
      </div>
      
      {/* About Me Content */}
      <div className="bg-gray-900 border-2 border-green-500 p-6 rounded-lg">
        <h2 className="arcade-text text-xl text-green-400 mb-4">CHARACTER BACKSTORY</h2>
        <div className="space-y-4 text-gray-300">
          <p>
          Computer Science student at the University of Houston seeking a software development role to apply skills in Python, React.js,
and backend engineering. Experienced in full-stack projects, neural networks, and team collaboration, with a strong focus on
problem-solving and coding.
          </p>
        </div>
        
        {/* Special Abilities */}
        <div className="mt-8">
          <h3 className="text-yellow-300 mb-3">SPECIAL ABILITIES:</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-purple-400 mr-2">→</span> 
              Full-Stack Development
            </li>
            <li className="flex items-center">
              <span className="text-purple-400 mr-2">→</span> 
              Customer Service Excellence
            </li>
            <li className="flex items-center">
              <span className="text-purple-400 mr-2">→</span> 
              Risk Management
            </li>
            <li className="flex items-center">
              <span className="text-purple-400 mr-2">→</span> 
              Data Structures & Algorithms
            </li>
          </ul>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="text-center mt-10">
        <a href="mailto:johnpaul12356789@gmail.com" className="game-select-btn inline-block">
          CONTACT PLAYER
        </a>
        <p className="text-yellow-400 mt-4 blink-text">INSERT COIN TO CONTINUE</p>
        <p className="text-green-400 mt-2">TEL: +1 (815) 994-8281</p>
      </div>
    </div>
  );
}
// CSS styles for the component
export default About;