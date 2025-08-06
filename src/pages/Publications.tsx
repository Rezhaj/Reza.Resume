import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { useData } from '../context/DataContext';

const Publications: React.FC = () => {
  const { publications, isLoading } = useData();

  if (isLoading || !publications) {
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
          title="Publications" 
          subtitle="My academic publications and research papers"
        />
        
        <div className="mt-12 space-y-8">
          {publications.map((publication, index) => (
            <motion.div
              key={publication.id}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="flex items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{publication.title}</h3>
                  <p className="text-gray-700 mb-3">
                    {publication.authors.join(', ')}
                  </p>
                                    
                  <div className="flex flex-wrap items-center gap-4">
                    {publication.url && (
                      <a 
                        href={`https://doi.org/${publication.url}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-800 text-sm font-medium"
                      >
                         {publication.url}
                      </a>
                    )}
                    
                    {publication.url && (
                      <a 
                        href={publication.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-800 text-sm font-medium"
                      >
                        View Publication
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications; 