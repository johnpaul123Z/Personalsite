import React, { useState, useEffect } from 'react';

function Projects() {
  const [loadingProject, setLoadingProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const projects = [
    {
      id: 1,
      title: "SPACE INVADERS",
      description: "A React web app that helps users visualize data with interactive charts",
      tech: ["React", "D3.js", "Tailwind CSS"],
      image: "/project1.png",
      color: "blue"
    },
    {
      id: 2,
      title: "GALAGA API",
      description: "A Node.js API with authentication and database integration",
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
      image: "/project2.png",
      color: "green"
    },
    {
      id: 3,
      title: "PAC-MAN PORTFOLIO",
      description: "This portfolio website with arcade-inspired design",
      tech: ["React", "React Router", "Tailwind CSS"],
      image: "/project3.png",
      color: "yellow"
    },
    {
      id: 4,
      title: "TETRIS TASK TRACKER",
      description: "A task management application with drag-and-drop functionality",
      tech: ["React", "Redux", "Firebase"],
      image: "/project4.png",
      color: "pink"
    }
  ];

  // Simulating loading a project
  useEffect(() => {
    if (loadingProject !== null) {
      const interval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setSelectedProject(loadingProject);
            return 100;
          }
          return prev + 5;
        });
      }, 50);
      
      return () => clearInterval(interval);
    }
  }, [loadingProject]);

  // Reset when selecting a new project
  const handleSelectProject = (project) => {
    setSelectedProject(null);
    setLoadingProgress(0);
    setLoadingProject(project);
  };

  // Go back to project selection
  const handleBack = () => {
    setSelectedProject(null);
    setLoadingProject(null);
    setLoadingProgress(0);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-green-400">ARCADE PROJECTS</h1>
        {selectedProject && (
          <button 
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
            onClick={handleBack}
          >
            « BACK TO PROJECTS
          </button>
        )}
      </div>
      
      {loadingProject && loadingProgress < 100 && (
        <div className="mb-8">
          <p className="text-xl text-yellow-300 mb-2">LOADING GAME...</p>
          <div className="w-full bg-gray-800 rounded-full h-4">
            <div 
              className="bg-green-400 h-4 rounded-full transition-all duration-300"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <p className="text-right mt-1 text-green-400">{loadingProgress}%</p>
        </div>
      )}
      
      {selectedProject ? (
        <ProjectDetail project={selectedProject} />
      ) : loadingProgress >= 100 ? (
        null
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => handleSelectProject(project)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Project card component
function ProjectCard({ project, onClick }) {
  const [hover, setHover] = useState(false);
  
  const colorStyles = {
    blue: "border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]",
    green: "border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]",
    pink: "border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.5)]",
    yellow: "border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.5)]",
  };
  
  return (
    <div 
      className={`border-2 ${colorStyles[project.color]} bg-gray-900 p-5 rounded-lg cursor-pointer transform transition-all duration-300 ${
        hover ? "scale-105" : ""
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      <div className="flex items-center space-x-3 mb-3">
        <div className={`w-4 h-4 rounded-full bg-${project.color}-500 animate-pulse`}></div>
        <h3 className="text-xl font-bold">{project.title}</h3>
      </div>
      
      <p className="text-gray-400 mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, index) => (
          <span 
            key={index} 
            className="px-2 py-1 bg-gray-800 text-xs rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      
      {hover && (
        <div className="text-center mt-4">
          <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded animate-pulse">
            INSERT COIN TO PLAY
          </span>
        </div>
      )}
    </div>
  );
}

// Project detail component
function ProjectDetail({ project }) {
  const [activeSection, setActiveSection] = useState('info');
  
  return (
    <div className="bg-gray-900 border-2 border-blue-500 rounded-lg p-6">
      <h2 className="text-3xl font-bold mb-4 text-blue-400">{project.title}</h2>
      
      {/* Navigation Tabs */}
      <div className="flex mb-6 border-b border-gray-700">
        <button 
          className={`px-4 py-2 ${activeSection === 'info' ? 'bg-blue-800 text-white rounded-t' : 'text-blue-400'}`}
          onClick={() => setActiveSection('info')}
        >
          INFO
        </button>
        <button 
          className={`px-4 py-2 ${activeSection === 'screenshots' ? 'bg-blue-800 text-white rounded-t' : 'text-blue-400'}`}
          onClick={() => setActiveSection('screenshots')}
        >
          SCREENSHOTS
        </button>
        <button 
          className={`px-4 py-2 ${activeSection === 'controls' ? 'bg-blue-800 text-white rounded-t' : 'text-blue-400'}`}
          onClick={() => setActiveSection('controls')}
        >
          CONTROLS
        </button>
      </div>
      
      {/* Content Sections */}
      {activeSection === 'info' && (
        <div className="space-y-4">
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl text-yellow-300 mb-2">ABOUT</h3>
            <p className="text-gray-300">{project.description}</p>
          </div>
          
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl text-yellow-300 mb-2">TECHNOLOGIES</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-blue-900 text-white rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl text-yellow-300 mb-2">ACHIEVEMENTS</h3>
            <ul className="space-y-2">
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Responsive Design</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Optimized Performance</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Accessible Interface</li>
            </ul>
          </div>
        </div>
      )}
      
      {activeSection === 'screenshots' && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
              <p className="text-gray-500">Screenshot 1</p>
            </div>
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
              <p className="text-gray-500">Screenshot 2</p>
            </div>
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
              <p className="text-gray-500">Screenshot 3</p>
            </div>
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
              <p className="text-gray-500">Screenshot 4</p>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'controls' && (
        <div className="p-4 bg-gray-800 rounded-lg">
          <h3 className="text-xl text-yellow-300 mb-4">HOW TO PLAY</h3>
          <div className="space-y-6">
            <div className="flex items-center space-x-6">
              <div className="bg-gray-700 p-3 rounded-lg">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div></div>
                  <div className="bg-blue-600 p-2 rounded">↑</div>
                  <div></div>
                  <div className="bg-blue-600 p-2 rounded">←</div>
                  <div></div>
                  <div className="bg-blue-600 p-2 rounded">→</div>
                  <div></div>
                  <div className="bg-blue-600 p-2 rounded">↓</div>
                  <div></div>
                </div>
              </div>
              <div>
                <p className="text-gray-300">Use arrow keys to navigate</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex space-x-2">
                <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center">A</div>
                <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center">B</div>
              </div>
              <div>
                <p className="text-gray-300">A: Select / B: Back</p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-6 text-center">
        <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transform transition hover:scale-105">
          PLAY NOW
        </button>
      </div>
    </div>
  );
}

export default Projects;