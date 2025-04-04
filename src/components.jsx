import React from 'react';

function Projects() {
  const projects = [
    {
      title: "COSMIC DEFENDER",
      description: "A React web application with real-time data visualization",
      tech: ["REACT", "D3.JS", "NODE"],
      image: "space-game"
    },
    {
      title: "PIXEL COMMERCE",
      description: "E-commerce platform with secure payment processing",
      tech: ["NODE.JS", "EXPRESS", "STRIPE"],
      image: "store-game"
    },
    {
      title: "8-BIT PORTFOLIO",
      description: "This portfolio website with retro arcade aesthetics",
      tech: ["REACT", "TAILWIND", "ROUTER"],
      image: "portfolio-game"
    }
  ];

  return (
    <div>
      <h1 className="arcade-text text-3xl font-bold mb-6 text-center text-cyan-400 glow-text">
        MY PROJECTS
      </h1>
      <p className="text-center mb-8 text-yellow-300">
        HIGH SCORES ACHIEVED
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card bg-gray-900 bg-opacity-70 border-2 border-cyan-500 rounded-lg overflow-hidden transition-all hover:border-pink-500"
          >
            <div className="game-cartridge h-40 bg-blue-900 border-b-2 border-cyan-500 flex items-center justify-center">
              <div className="text-4xl">{project.image.charAt(0).toUpperCase()}</div>
            </div>
            
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 text-pink-400">{project.title}</h3>
              <p className="text-sm mb-4 text-gray-300">{project.description}</p>
              
              <div className="mb-4">
                <div className="text-xs text-cyan-300 mb-1">TECH STACK:</div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-xs bg-purple-900 border border-purple-500 rounded px-2 py-1 text-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <button className="arcade-btn text-xs w-full">
                VIEW PROJECT
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-10 text-sm text-yellow-400 blink-text">
        INSERT COIN FOR MORE PROJECTS
      </div>
    </div>
  );
}

export default Projects;