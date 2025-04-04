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
            className={`arcade-btn ${activeSection === 'experience' ? 'bg-purple-800' : ''}`}
            onClick={() => setActiveSection('experience')}
          >
            EXPERIENCE
          </button>
          <button 
            className={`arcade-btn ${activeSection === 'education' ? 'bg-purple-800' : ''}`}
            onClick={() => setActiveSection('education')}
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
      
      {/* Experience Section */}
      {activeSection === 'experience' && (
        <div className="bg-gray-900 border-2 border-yellow-500 p-6 rounded-lg shadow-neon mb-8">
          <h2 className="arcade-text text-xl text-yellow-400 mb-6">WORK EXPERIENCE</h2>
          
          <div className="exp-timeline">
            <div className="exp-item">
              <div className="text-pink-400 font-bold">SENIOR DEVELOPER</div>
              <div className="text-blue-400">ARCADE TECH STUDIOS</div>
              <div className="text-green-400 text-sm mb-2">2023 - PRESENT</div>
              <p className="text-gray-300">
                Led development of interactive web applications using React and Node.js.
                Implemented responsive designs with Tailwind CSS for various client projects.
              </p>
            </div>
            
            <div className="exp-item">
              <div className="text-pink-400 font-bold">FRONT-END DEVELOPER</div>
              <div className="text-blue-400">PIXEL PERFECT LABS</div>
              <div className="text-green-400 text-sm mb-2">2020 - 2023</div>
              <p className="text-gray-300">
                Designed and built user interfaces for web applications.
                Collaborated with design team to implement visual elements and animations.
              </p>
            </div>
            
            <div className="exp-item">
              <div className="text-pink-400 font-bold">JUNIOR DEVELOPER</div>
              <div className="text-blue-400">CODE ARCADE INC.</div>
              <div className="text-green-400 text-sm mb-2">2018 - 2020</div>
              <p className="text-gray-300">
                Assisted in developing and maintaining web applications.
                Worked on bug fixes and implementation of new features.
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Education Section */}
      {activeSection === 'education' && (
        <div className="bg-gray-900 border-2 border-cyan-500 p-6 rounded-lg shadow-neon mb-8">
          <h2 className="arcade-text text-xl text-cyan-400 mb-6">EDUCATION & TRAINING</h2>
          
          <div className="exp-timeline">
            <div className="exp-item">
              <div className="text-pink-400 font-bold">MASTER OF COMPUTER SCIENCE</div>
              <div className="text-blue-400">TECH UNIVERSITY</div>
              <div className="text-green-400 text-sm mb-2">2016 - 2018</div>
              <p className="text-gray-300">
                Specialized in web development and user interface design.
                Graduated with honors.
              </p>
            </div>
            
            <div className="exp-item">
              <div className="text-pink-400 font-bold">BACHELOR OF SCIENCE</div>
              <div className="text-blue-400">STATE UNIVERSITY</div>
              <div className="text-green-400 text-sm mb-2">2012 - 2016</div>
              <p className="text-gray-300">
                Major in Computer Science with minor in Digital Media.
                Dean's List all semesters.
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
              <SkillBar skill="PHP" level={65} color="purple" />
              <SkillBar skill="Java" level={60} color="orange" />
              <SkillBar skill="C#" level={55} color="pink" />
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-pink-400 mb-2">FRAMEWORKS & LIBRARIES</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <SkillBar skill="React" level={95} color="blue" />
              <SkillBar skill="Node.js" level={85} color="green" />
              <SkillBar skill="Express" level={80} color="gray" />
              <SkillBar skill="Tailwind" level={90} color="cyan" />
              <SkillBar skill="Redux" level={85} color="purple" />
              <SkillBar skill="Next.js" level={75} color="black" />
              <SkillBar skill="Vue.js" level={70} color="green" />
              <SkillBar skill="Angular" level={65} color="red" />
            </div>
          </div>
          
          <div>
            <h3 className="text-pink-400 mb-2">TOOLS & TECHNOLOGIES</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <SkillBar skill="Git" level={90} color="orange" />
              <SkillBar skill="Docker" level={75} color="blue" />
              <SkillBar skill="AWS" level={70} color="yellow" />
              <SkillBar skill="Firebase" level={85} color="orange" />
              <SkillBar skill="MongoDB" level={80} color="green" />
              <SkillBar skill="SQL" level={75} color="blue" />
              <SkillBar skill="GraphQL" level={70} color="pink" />
              <SkillBar skill="Jest" level={80} color="red" />
            </div>
          </div>
        </div>
      )}
      
      {/* Download Resume Button */}
      <div className="text-center mt-8">
        <button className="download-btn">
          DOWNLOAD FULL STATS
        </button>
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