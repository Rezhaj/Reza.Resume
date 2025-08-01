import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { useData } from '../context/DataContext';

const Teaching: React.FC = () => {
  const { teaching, isLoading } = useData();

  if (isLoading || !teaching) {
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
          title="Teaching Experience" 
          subtitle="Courses taught and teaching assistantships"
        />
        
        <div className="mt-12 space-y-12">
          {teaching.map((course, index) => (
            <motion.div
              key={course.id}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {course.course} {course.code && <span className="text-gray-600">({course.code})</span>}
                </h2>
                <div className="mt-2 md:mt-0 bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded">
                  {course.startDate} - {course.endDate}
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-xl text-gray-700">{course.institution}</p>
                <p className="text-gray-600">{course.department}</p>
                <p className="text-primary-600 mt-1 font-medium">{course.role}</p>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700">{course.description}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2">Responsibilities</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {course.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="text-gray-700">{responsibility}</li>
                  ))}
                </ul>
              </div>
              
              {course.achievements && course.achievements.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold mb-2">Achievements</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {course.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-700">{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teaching; 