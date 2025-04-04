import React, { useState } from 'react';

function Resume() {
  const [activeSection, setActiveSection] = useState('experience');
  
  return (
    <div className="p-6">
      <h1 className="arcade-text text-3xl font-bold mb-6 text-yellow-400 glow-text">PLAYER RESUME</h1>
      <p className="text-cyan-400 text-center mb-8">CHARACTER ACHIEVEMENT LOG</p>
      
      {/* Section Selection */}
      <div className="flex justify-center mb-8">
  <div className="flex gap-2">
    <button
      className={`arcade-btn ${activeSection === 'education' ? 'bg-purple-800' : ''}`}
      onClick={() => setActiveSection('education')} // Fix: Set to 'education'
    >
      EDUCATION
    </button>
    <button
      className={`arcade-btn ${activeSection === 'skills' ? 'bg-purple-800' : ''}`}
      onClick={() => setActiveSection('skills')}
    >
      SKILLS
    </button>
  </div>
</div>
      
     
      {/* Education Section */}
      {activeSection === 'education' && (
        <div className="bg-gray-900 border-2 border-cyan-500 p-6 rounded-lg shadow-neon mb-8">
          <h2 className="arcade-text text-xl text-cyan-400 mb-6">EDUCATION & TRAINING</h2>
          
          <div className="exp-timeline">
           
            
            <div className="exp-item">
              <div className="text-pink-400 font-bold">BACHELOR OF SCIENCE</div>
              <div className="text-blue-400">University Of Houston</div>
              <div className="text-green-400 text-sm mb-2">2022 - 2025</div>
              <p className="text-gray-300">
                Major in Computer Science
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Skills Section */}
      {activeSection === 'skills' && (
        <div className="bg-gray-900 border-2 border-green-500 p-6 rounded-lg shadow-neon mb-8">
          <h2 className="arcade-text text-xl text-green-400 mb-6">SKILL TREE</h2>
          
          <div className="mb-6">
            <h3 className="text-pink-400 mb-2">PROGRAMMING LANGUAGES</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <SkillBar skill="JavaScript" level={90} color="yellow" />
              <SkillBar skill="TypeScript" level={80} color="blue" />
              <SkillBar skill="HTML5" level={95} color="red" />
              <SkillBar skill="CSS3" level={90} color="cyan" />
              <SkillBar skill="Python" level={75} color="green" />
            
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-pink-400 mb-2">FRAMEWORKS & LIBRARIES</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <SkillBar skill="React" level={95} color="blue" />
              <SkillBar skill="Node.js" level={85} color="green" />
              <SkillBar skill="Express" level={80} color="gray" />
              <SkillBar skill="Tailwind" level={90} color="cyan" />
      
            </div>
          </div>
          
          <div>
            <h3 className="text-pink-400 mb-2">TOOLS & TECHNOLOGIES</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <SkillBar skill="Git" level={90} color="orange" />
              <SkillBar skill="Docker" level={75} color="blue" />
        
              <SkillBar skill="SQL" level={75} color="blue" />
             
            </div>
          </div>
        </div>
      )}
      
      {/* Download Resume Button */}
      <div className="text-center mt-8">
  <a
    href="/resume.pdf"
    download="resume.pdf"
    className="download-btn"
  >
    DOWNLOAD FULL STATS
  </a>
  <p className="text-yellow-400 mt-4 blink-text">PRESS START TO CONTINUE</p>
</div>
    </div>
  );
}

// Skill Bar Component
function SkillBar({ skill, level, color }) {
  const colorMap = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    red: "bg-red-500",
    yellow: "bg-yellow-500",
    purple: "bg-purple-500",
    cyan: "bg-cyan-500",
    orange: "bg-orange-500",
    pink: "bg-pink-500",
    gray: "bg-gray-500",
    black: "bg-gray-800"
  };
  
  const bgColor = colorMap[color] || "bg-blue-500";
  
  return (
    <div className="mb-2">
      <div className="flex justify-between mb-1">
        <span className="text-xs text-white">{skill}</span>
        <span className="text-xs text-white">{level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={`h-full ${bgColor} rounded-full`} 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Resume;