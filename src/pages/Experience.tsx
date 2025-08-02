import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { useData } from '../context/DataContext';

const Experience: React.FC = () => {
  const { experience, skills, isLoading } = useData();

  if (isLoading || !experience || !skills) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <SectionTitle 
          title="Professional Experience" 
          subtitle="My industry experience and professional background"
        />
        
        <div className="mt-12">
          {/* Timeline */}
          <div className="relative border-l-4 border-primary-600 ml-6 md:ml-8 pl-8 pb-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="mb-16 relative"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[42px] md:-left-[44px] bg-white p-1 rounded-full border-4 border-primary-600">
                  <div className="w-4 h-4 bg-primary-600 rounded-full"></div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">{exp.position}</h2>
                    <div className="mt-2 md:mt-0 bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded">
                      {exp.startDate} - {exp.endDate}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-xl text-gray-700">{exp.company}</p>
                    <p className="text-gray-600">{exp.location}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-bold mb-2">Description</h3>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-bold mb-2">Key Achievements</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-700">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <SectionTitle 
            title="Skills & Expertise" 
            subtitle="My technical skills and professional competencies"
          />
          
          <div className="mt-12 space-y-12">
            {skills.categories.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-900">{category.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-white p-4 rounded-lg shadow-md">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium text-gray-900">{skill.name}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience; 