import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { useData } from '../context/DataContext';

const Hobbies: React.FC = () => {
  const { hobbies, isLoading } = useData();

  if (isLoading || !hobbies) {
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
          title="Hobbies & Interests"
          subtitle="What I enjoy doing outside of academics and research"
        />

        <div className="mt-12 space-y-16">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.id}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image - alternating left and right */}
              {/* <div className={`md:col-span-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-600 rounded-lg transform translate-x-3 translate-y-3"></div>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${hobby.image}`}
                    alt={hobby.name}
                    className="relative z-10 rounded-lg w-full h-auto object-cover shadow-xl"
                  />
                </div>
              </div> */}

              {/* Content */}
              <div className={`md:col-span-2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{hobby.name}</h2>
                <p className="text-gray-700 mb-6">{hobby.description}</p>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">Frequency:</span> {hobby.frequency}
                </p>

                <h3 className="text-xl font-semibold mb-3">Achievements & Experiences</h3>
                <ul className="space-y-2">
                  {hobby.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hobbies; 