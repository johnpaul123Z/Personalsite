import React, { useState, useEffect } from 'react';

function Projects() {
  const [loadingProject, setLoadingProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const projects = [
    {
      id: 1,
      title: "NEURAL NETWORK",
      description: "A neural network implementation using NumPy to recognize handwritten digits from the MNIST dataset, with an interactive drawing interface for testing.",
      tech: ["Python", "NumPy", "ML", "UI Design"],
      image: "/project1.png",
      color: "blue",
      link: "github.com/johnpaul123Z/Neural-Network-", 
      role: "Developer"
    },
    {
      id: 2,
      title: "LIBRARY WEB APP",
      description: "Full-stack library web application with admin portal for managing books, users, and inventory",
      tech: ["React.js", "JavaScript", "HTML/CSS", "Backend"],
      image: "/project2.png",
      color: "green",
      link: "github.com/nate-bar/team14-libraryapp", 
      role: "Backend Developer"
    },
    {
      id: 3,
      title: "ARCADE PORTFOLIO",
      description: "This portfolio website with arcade-inspired design and interactive elements",
      tech: ["React", "React Router", "Tailwind CSS", "JavaScript"],
      image: "/project3.png",
      color: "yellow",
      link: "github.com/johnpaul123Z/Personalsite",
      role: "Developer"
    },
    {
      id: 4,
      title: "GITHUB REPOS",
      description: "Check out my additional projects and code repositories on GitHub",
      tech: ["Various Languages", "Open Source", "Coding Examples"],
      image: "/project4.png",
      color: "pink",
      link: "github.com/johnpaul123Z?tab=repositories",
      role: "Developer"
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
          <p className="text-xl text-yellow-300 mb-2">LOADING PROJECT...</p>
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
            INSERT COIN TO VIEW
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
          className={`px-4 py-2 ${activeSection === 'technologies' ? 'bg-blue-800 text-white rounded-t' : 'text-blue-400'}`}
          onClick={() => setActiveSection('technologies')}
        >
          TECHNOLOGIES
        </button>
        <button 
          className={`px-4 py-2 ${activeSection === 'details' ? 'bg-blue-800 text-white rounded-t' : 'text-blue-400'}`}
          onClick={() => setActiveSection('details')}
        >
          DETAILS
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
            <h3 className="text-xl text-yellow-300 mb-2">ROLE</h3>
            <p className="text-gray-300">{project.role}</p>
          </div>
          
          {project.link && (
            <div className="p-4 bg-gray-800 rounded-lg">
              <h3 className="text-xl text-yellow-300 mb-2">PROJECT LINK</h3>
              <a 
                href={`https://${project.link}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                {project.link}
              </a>
            </div>
          )}
        </div>
      )}
      
      {activeSection === 'technologies' && (
        <div className="p-4 bg-gray-800 rounded-lg">
          <h3 className="text-xl text-yellow-300 mb-4">TECHNOLOGIES USED</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.tech.map((tech, index) => (
              <div 
                key={index}
                className="bg-gray-700 p-3 rounded-lg text-center border border-gray-600"
              >
                <span className="text-cyan-400">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {activeSection === 'details' && (
        <div className="p-4 bg-gray-800 rounded-lg">
          <h3 className="text-xl text-yellow-300 mb-4">PROJECT DETAILS</h3>
          <div className="space-y-6">
            <div>
              {project.id === 1 && (
                <div className="space-y-2 text-gray-300">
                  <p>• Custom neural network implementation for handwritten digit recognition</p>
                  <p>• Architecture: 784 input neurons, 128 hidden neurons, 10 output neurons</p>
                  <p>• Interactive drawing interface for real-time testing</p>
                  <p>• Configurable speed/accuracy tradeoffs</p>
                </div>
              )}
              
              {project.id === 2 && (
                <div className="space-y-2 text-gray-300">
                  <p>• Full-stack library web application with admin portal</p>
                  <p>• Admin features for managing books, users, and inventory</p>
                  <p>• Dynamic item display components using React.js</p>
                  <p>• Collaborative development using Git/GitHub</p>
                </div>
              )}
              
              {project.id === 3 && (
                <div className="space-y-2 text-gray-300">
                  <p>• Arcade-themed personal portfolio website</p>
                  <p>• Interactive elements with animations and state management</p>
                  <p>• Responsive design for all device sizes</p>
                  <p>• Custom UI components and styling</p>
                </div>
              )}
              
              {project.id === 4 && (
                <div className="space-y-2 text-gray-300">
                  <p>• Collection of various programming projects and code samples</p>
                  <p>• Demonstrates proficiency in multiple programming languages</p>
                  <p>• Open source contributions and personal projects</p>
                  <p>• Visit my GitHub for more examples of my work</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-6 text-center">
        {project.link ? (
          <a 
            href={`https://${project.link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transform transition hover:scale-105 inline-block"
          >
            VISIT PROJECT
          </a>
        ) : (
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transform transition hover:scale-105">
            PROJECT DETAILS
          </button>
        )}
      </div>
    </div>
  );
}

export default Projects;