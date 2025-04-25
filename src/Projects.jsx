import React, { useState, useEffect } from 'react';
import './global.css'; // Import global CSS styles
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
      color: "blue", // Changed to blue
      link: "github.com/nate-bar/team14-libraryapp", 
      role: "Backend Developer"
    },
    {
      id: 3,
      title: "ARCADE PORTFOLIO",
      description: "This portfolio website with arcade-inspired design and interactive elements",
      tech: ["React", "React Router", "Tailwind CSS", "JavaScript"],
      image: "/project3.png",
      color: "blue", // Changed to blue
      link: "github.com/johnpaul123Z/Personalsite",
      role: "Developer"
    },
    {
      id: 4,
      title: "GITHUB REPOS",
      description: "Check out my additional projects and code repositories on GitHub",
      tech: ["Various Languages", "Open Source", "Coding Examples"],
      image: "/project4.png",
      color: "blue", // Changed to blue
      link: "github.com/johnpaul123Z?tab=repositories",
      role: "Developer"
    },
    {
      id: 5,
      title: "EDMONTON-V.02",
      description: "A web application for managing user profiles, featuring Office 365 integration, PDF generation, and Docker support.",
      tech: ["Python", "Flask", "HTML/CSS", "Docker", "SQLAlchemy", "O365"],
      image: "/project5.png",
      color: "blue",
      link: "github.com/johnpaul123Z/Edmonton-v.02", 
      role: "Contributor",
      youtube: "https://www.youtube.com/watch?v=owLFAySZoO4&feature=youtu.be"
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
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-blue-300 tracking-wider">ARCADE PROJECTS</h1>
        {selectedProject && (
          <button 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 font-medium shadow-md"
            onClick={handleBack}
          >
            « BACK TO PROJECTS
          </button>
        )}
      </div>
      
      {loadingProject && loadingProgress < 100 && (
        <div className="mb-8 p-4 bg-gray-900 rounded-lg shadow-lg">
          <p className="text-xl text-yellow-300 mb-2 font-bold">LOADING PROJECT...</p>
          <div className="w-full bg-gray-800 rounded-full h-4 border border-gray-700">
            <div 
              className="bg-green-500 h-4 rounded-full transition-all duration-300"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <p className="text-right mt-1 text-green-400 font-bold">{loadingProgress}%</p>
        </div>
      )}
      
      {selectedProject ? (
        <ProjectDetail project={selectedProject} />
      ) : loadingProgress >= 100 ? (
        null
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
  
  // Always return blue background colors regardless of project.color
  const getBgColor = () => {
    return 'bg-blue-800';
  };
  
  const getHoverBgColor = () => {
    return 'hover:bg-blue-700';
  };
  
  return (
    <div 
      className={`relative border-2 border-blue-500 ${getBgColor()} ${getHoverBgColor()} p-6 rounded-lg cursor-pointer transform transition-all duration-300 hover:translate-y-[-8px] text-white`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      <div className="relative">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-blue-300 animate-pulse"></div>
          <h3 className="text-2xl font-bold tracking-wider text-blue-300">{project.title}</h3>
        </div>
        
        <p className="text-lg mb-5 leading-relaxed text-white">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-blue-700 text-sm rounded-full border border-blue-400 text-white hover:bg-blue-500 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {hover && (
          <div className="text-center mt-6 animate-fadeIn">
            <span className="inline-block px-6 py-2 bg-white text-blue-600 rounded-full font-bold transform transition-all duration-300 hover:scale-105">
              <span className="mr-2">▶</span> VIEW PROJECT
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

// Project detail component
function ProjectDetail({ project }) {
  const [activeSection, setActiveSection] = useState('info');
  
  return (
    <div className="bg-blue-900/50 border-2 border-blue-500 rounded-lg p-6 shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-blue-300 bg-blue-600/20 inline-block px-4 py-2 rounded">{project.title}</h2>
      
      {/* Navigation Tabs */}
      <div className="flex mb-6 border-b border-blue-500">
        <button 
          className={`px-6 py-3 transition-colors ${activeSection === 'info' ? 'bg-blue-600 text-white font-bold rounded-t border-t border-l border-r border-blue-500' : 'text-blue-300 hover:bg-blue-600/20 hover:text-white'}`}
          onClick={() => setActiveSection('info')}
        >
          INFO
        </button>
        <button 
          className={`px-6 py-3 transition-colors ${activeSection === 'technologies' ? 'bg-blue-600 text-white font-bold rounded-t border-t border-l border-r border-blue-500' : 'text-blue-300 hover:bg-blue-600/20 hover:text-white'}`}
          onClick={() => setActiveSection('technologies')}
        >
          TECH
        </button>
        <button 
          className={`px-6 py-3 transition-colors ${activeSection === 'details' ? 'bg-blue-600 text-white font-bold rounded-t border-t border-l border-r border-blue-500' : 'text-blue-300 hover:bg-blue-600/20 hover:text-white'}`}
          onClick={() => setActiveSection('details')}
        >
          DETAILS
        </button>
      </div>
      
      {/* Content Sections */}
      {activeSection === 'info' && (
        <div className="space-y-6">
          <div className="p-6 bg-blue-800/50 rounded-lg shadow-md">
            <h3 className="text-xl text-white font-bold mb-3 border-b border-blue-400 pb-2">ABOUT</h3>
            <p className="text-blue-100 text-lg">{project.description}</p>
          </div>
          
          <div className="p-6 bg-blue-800/50 rounded-lg shadow-md">
            <h3 className="text-xl text-white font-bold mb-3 border-b border-blue-400 pb-2">ROLE</h3>
            <p className="text-blue-100 text-lg">{project.role}</p>
          </div>
          
          {project.link && (
            <div className="p-6 bg-blue-800/50 rounded-lg shadow-md">
              <h3 className="text-xl text-white font-bold mb-3 border-b border-blue-400 pb-2">PROJECT LINK</h3>
              <a 
                href={`https://${project.link}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-100 underline text-lg"
              >
                {project.link}
              </a>
            </div>
          )}
        </div>
      )}
      
      {activeSection === 'technologies' && (
        <div className="p-6 bg-blue-800/50 rounded-lg shadow-md">
          <h3 className="text-xl text-white font-bold mb-4 border-b border-blue-400 pb-2">TECHNOLOGIES USED</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {project.tech.map((tech, index) => (
              <div 
                key={index}
                className="bg-gray-700 p-4 rounded-lg text-center border border-gray-600 shadow-md"
              >
                <span className="text-white font-bold text-lg">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {activeSection === 'details' && (
        <div className="p-6 bg-blue-800/50 rounded-lg shadow-md">
          <h3 className="text-xl text-white font-bold mb-4 border-b border-blue-400 pb-2">PROJECT DETAILS</h3>
          <div className="space-y-6 mt-4">
            <div>
              {project.id === 1 && (
                <div className="space-y-3 text-white text-lg">
                  <p className="flex items-start"><span className="text-yellow-400 mr-2">•</span> Custom neural network implementation for handwritten digit recognition</p>
                  <p className="flex items-start"><span className="text-yellow-400 mr-2">•</span> Architecture: 784 input neurons, 128 hidden neurons, 10 output neurons</p>
                  <p className="flex items-start"><span className="text-yellow-400 mr-2">•</span> Interactive drawing interface for real-time testing</p>
                  <p className="flex items-start"><span className="text-yellow-400 mr-2">•</span> Configurable speed/accuracy tradeoffs</p>
                </div>
              )}
              
              {project.id === 2 && (
                <div className="space-y-3 text-white text-lg">
                  <p className="flex items-start"><span className="text-yellow-400 mr-2">•</span> Full-stack library web application with admin portal</p>
                  <p className="flex items-start"><span className="text-yellow-400 mr-2">•</span> Admin features for managing books, users, and inventory</p>
                  <p className="flex items-start"><span className="text-yellow-400 mr-2">•</span> Dynamic item display components using React.js</p>
                  <p className="flex items-start"><span className="text-yellow-400 mr-2">•</span> Collaborative development using Git/GitHub</p>
                </div>
              )}
              
              {project.id === 3 && (
                <div className="space-y-3 text-white text-lg">
                  <p className="flex items-start"><span className="text-yellow-400 mr-2">•</span> Arcade-themed personal portfolio website</p>
                  <p className="flex items-start"><span className="text-yellow-400 mr-2">•</span> Interactive elements with animations and state management</p>
                  <p className="flex items-start"><span className="text-yellow-400 mr-2">•</span> Responsive design for all device sizes</p>
                  <p className="flex items-start"><span className="text-yellow-400 mr-2">•</span> Custom UI components and styling</p>
                </div>
              )}
              
              {project.id === 4 && (
                <div className="space-y-3 text-white text-lg">
                  <p className="flex items-start"><span className="text-yellow-400 mr-2">•</span> Collection of various programming projects and code samples</p>
                  <p className="flex items-start"><span className="text-yellow-400 mr-2">•</span> Demonstrates proficiency in multiple programming languages</p>
                  <p className="flex items-start"><span className="text-yellow-400 mr-2">•</span> Open source contributions and personal projects</p>
                  <p className="flex items-start"><span className="text-yellow-400 mr-2">•</span> Visit my GitHub for more examples of my work</p>
                </div>
              )}
              {project.id === 5 && (
                <div className="space-y-3 text-white text-lg">
                  <p className="flex items-start"><span className="text-yellow-400 mr-2">•</span> Web application for managing user profiles</p>
                  <p className="flex items-start"><span className="text-yellow-400 mr-2">•</span> Integrated with Office 365 for authentication and user management</p>
                  <p className="flex items-start"><span className="text-yellow-400 mr-2">•</span> Generates PDF reports for user data</p>
                  <p className="flex items-start"><span className="text-yellow-400 mr-2">•</span> Containerized using Docker for easy deployment</p>
                  <a className="text-blue-300 hover:text-blue-100 underline text-lg mt-4" target="_blank" rel="noopener noreferrer" href={project.youtube}>
                    Watch on YouTube
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-8 text-center">
        {project.link ? (
          <a 
            href={`https://${project.link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-500 transform transition hover:scale-105 inline-block font-bold text-lg shadow-lg"
          >
            VISIT PROJECT
          </a>
        ) : (
          <button className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-500 transform transition hover:scale-105 font-bold text-lg shadow-lg">
            PROJECT DETAILS
          </button>
        )}
      </div>
    </div>
  );
}

export default Projects;