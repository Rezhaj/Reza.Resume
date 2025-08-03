import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { useData } from '../context/DataContext';

const Projects: React.FC = () => {
  const { projects, isLoading } = useData();

  if (isLoading || !projects) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Separate featured and non-featured projects
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <SectionTitle 
          title="Projects" 
          subtitle="My research and engineering projects"
        />
        
        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden h-full"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={`/images/${project.image}`}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
        
        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">{featuredProjects.length > 0 ? 'Other Projects' : 'Projects'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden h-full"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={`/images/${project.image}`}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-700 mb-4 text-sm">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-800 text-sm font-medium"
                        >
                          GitHub
                        </a>
                      )}
                      
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-800 text-sm font-medium"
                        >
                          View Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects; 