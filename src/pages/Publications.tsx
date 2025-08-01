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
                <div className="mr-4 bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded whitespace-nowrap mt-1">
                  {publication.year}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{publication.title}</h3>
                  <p className="text-gray-700 mb-3">
                    {publication.authors.join(', ')}
                  </p>
                  <p className="text-gray-600 italic mb-4">
                    {publication.journal}, {publication.pages}
                    {publication.volume && `, Volume ${publication.volume}`}
                    {publication.issue && `, Issue ${publication.issue}`}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-md font-semibold mb-1">Abstract</h4>
                    <p className="text-gray-700">{publication.abstract}</p>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4">
                    {publication.doi && (
                      <a 
                        href={`https://doi.org/${publication.doi}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-800 text-sm font-medium"
                      >
                        DOI: {publication.doi}
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
                    
                    <div className="text-gray-600 text-sm">
                      Citations: {publication.citations}
                    </div>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {publication.keywords.map((keyword, kidx) => (
                      <span 
                        key={kidx}
                        className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                      >
                        {keyword}
                      </span>
                    ))}
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