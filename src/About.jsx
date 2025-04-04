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
            <div className="text-5xl text-pink-400 glow-text">P1</div>
          </div>
          <div className="flex-1">
            <h2 className="arcade-text text-xl text-cyan-400 mb-4">DEVELOPER</h2>
            <p className="text-gray-300 mb-4">
              I am a passionate developer with experience in building web applications using modern technologies 
              like React, Node.js, and Tailwind CSS.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="skill-badge">REACT</span>
              <span className="skill-badge">NODE.JS</span>
              <span className="skill-badge">TAILWIND</span>
              <span className="skill-badge">JAVASCRIPT</span>
              <span className="skill-badge">HTML5</span>
              <span className="skill-badge">CSS3</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="mb-10">
        <h2 className="arcade-text text-xl text-blue-400 mb-4">PLAYER STATS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="stat-box">
            <div className="text-pink-400">EXPERIENCE</div>
            <div className="stat-value">5 YRS</div>
          </div>
          <div className="stat-box">
            <div className="text-pink-400">PROJECTS</div>
            <div className="stat-value">25+</div>
          </div>
          <div className="stat-box">
            <div className="text-pink-400">SKILLS</div>
            <div className="stat-value">LVL 80</div>
          </div>
        </div>
      </div>
      
      {/* About Me Content */}
      <div className="bg-gray-900 border-2 border-green-500 p-6 rounded-lg">
        <h2 className="arcade-text text-xl text-green-400 mb-4">CHARACTER BACKSTORY</h2>
        <div className="space-y-4 text-gray-300">
          <p>
            Started my coding journey with a passion for creating interactive digital experiences.
            Specializing in front-end development with a focus on React and modern JavaScript frameworks.
          </p>
          <p>
            When not coding, I enjoy playing retro arcade games, which inspired this portfolio design.
            My goal is to combine technical excellence with creative visuals to build memorable web applications.
          </p>
        </div>
        
        {/* Special Abilities */}
        <div className="mt-8">
          <h3 className="text-yellow-300 mb-3">SPECIAL ABILITIES:</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-purple-400 mr-2">→</span> 
              Responsive UI Development
            </li>
            <li className="flex items-center">
              <span className="text-purple-400 mr-2">→</span> 
              Interactive Animations
            </li>
            <li className="flex items-center">
              <span className="text-purple-400 mr-2">→</span> 
              Performance Optimization
            </li>
            <li className="flex items-center">
              <span className="text-purple-400 mr-2">→</span> 
              Creative Problem Solving
            </li>
          </ul>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="text-center mt-10">
        <button className="game-select-btn">
          CONTACT PLAYER
        </button>
        <p className="text-yellow-400 mt-4 blink-text">INSERT COIN TO CONTINUE</p>
      </div>
    </div>
  );
}

export default About;