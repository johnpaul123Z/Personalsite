import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [highScore, setHighScore] = useState([
    "NEURAL NETWORK 25000",
    "LIBRARY APP 20000",
    "STARBUCKS 15000",
    "PRO PARK 10000",
    "JOHN 5000"
  ]);

  const introText = "WELCOME TO JOHN GLEITER'S ARCADE PORTFOLIO. COMPUTER SCIENCE STUDENT AT UH.";
  const displayedText = introText.substring(0, textIndex);

  // Typewriter effect
  useEffect(() => {
    if (textIndex < introText.length) {
      const timeout = setTimeout(() => {
        setTextIndex(textIndex + 1);
      }, 70);
      return () => clearTimeout(timeout);
    }
  }, [textIndex, introText]);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 h-full flex flex-col">
      {/* Intro text with typewriter effect */}
      <div className="mb-8 text-2xl text-green-400 font-bold">
        {displayedText}
        <span className={`${showCursor ? 'opacity-100' : 'opacity-0'}`}>▌</span>
      </div>

      {/* Game selection grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <GameCard 
          title="PROJECTS" 
          description="CHECK OUT MY LATEST CODING PROJECTS" 
          to="/projects"
          color="blue" 
        />
        <GameCard 
          title="RESUME" 
          description="VIEW MY EXPERIENCE & SKILLS" 
          to="/resume"
          color="green" 
        />
        <GameCard 
          title="ABOUT" 
          description="LEARN ABOUT MY BACKGROUND & JOURNEY" 
          to="/about"
          color="pink" 
        />
        <GameCard 
          title="CONTACT" 
          description="GET IN TOUCH: JOHNPAUL12356789@GMAIL.COM" 
          to="/contact"
          color="yellow" 
        />
      </div>

      {/* High scores table */}
      <div className="mt-auto">
        <h2 className="text-xl text-yellow-300 font-bold mb-2">TOP ACHIEVEMENTS</h2>
        <div className="bg-gray-900 p-4 rounded-lg border-2 border-blue-500">
          <table className="w-full text-green-400 font-mono">
            <thead>
              <tr>
                <th className="text-left">RANK</th>
                <th className="text-left">PROJECT</th>
                <th className="text-right">SCORE</th>
              </tr>
            </thead>
            <tbody>
              {highScore.map((score, index) => (
                <tr key={index} className={index === 4 ? "text-yellow-300" : ""}>
                  <td>{index + 1}</td>
                  <td>{score.split(" ")[0]}</td>
                  <td className="text-right">{score.split(" ")[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* INSERT COIN animation */}
      <div className="text-center mt-6">
        <p className="text-yellow-300 text-xl animate-pulse">INSERT COIN TO START</p>
      </div>
    </div>
  );
}

// Game card component for home page
function GameCard({ title, description, to, color }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const colorStyles = {
    blue: "border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]",
    green: "border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]",
    pink: "border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.5)]",
    yellow: "border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.5)]",
  };
  
  return (
    <Link 
      to={to}
      className={`block p-4 border-2 ${colorStyles[color]} rounded-lg bg-gray-900 transform transition-all duration-300 ${
        isHovered ? "scale-105" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
      {isHovered && (
        <div className="mt-4 text-right">
          <span className="text-white animate-pulse">PRESS START ▶</span>
        </div>
      )}
    </Link>
  );
}

export default Home;