import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { useData } from '../context/DataContext';

const Education: React.FC = () => {
  const { education, isLoading } = useData();

  if (isLoading || !education) {
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
          title="Education" 
          subtitle="My academic background and qualifications"
        />
        
        <div className="mt-12">
          {/* Timeline */}
          <div className="relative border-l-4 border-primary-600 ml-6 md:ml-8 pl-8 pb-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
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
                    <h2 className="text-2xl font-bold text-gray-900">{edu.degree}</h2>
                    <div className="mt-2 md:mt-0 bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded">
                      {edu.startDate} - {edu.endDate}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-xl text-gray-700">{edu.institution}</p>
                    <p className="text-gray-600">{edu.location}</p>
                    {edu.field && <p className="text-gray-700 mt-1">Field: {edu.field}</p>}
                    {edu.gpa && <p className="text-gray-700">GPA: {edu.gpa}</p>}
                  </div>
                  
                  {edu.description && (
                    <div className="mb-4">
                      <p className="text-gray-700">{edu.description}</p>
                    </div>
                  )}
                  
                  {edu.thesis && (
                    <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-lg font-bold mb-2">Thesis</h3>
                      <p className="font-medium text-gray-900">{edu.thesis.title}</p>
                      <p className="text-gray-700 mt-1">Advisor: {edu.thesis.advisor}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education; 