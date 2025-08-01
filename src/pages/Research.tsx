import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { useData } from '../context/DataContext';

const Research: React.FC = () => {
  const { research, publications, isLoading } = useData();

  if (isLoading || !research || !publications) {
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
          title="Research" 
          subtitle="My research interests and projects"
        />
        
        <div className="mt-12 space-y-16">
          {research.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{item.title}</h2>
                <div className="mt-2 md:mt-0 bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded">
                  {item.startDate} - {item.endDate}
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-xl text-gray-700">{item.institution}</p>
                <p className="text-gray-600">{item.department}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2">Description</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2">Key Achievements</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {item.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-700">{achievement}</li>
                  ))}
                </ul>
              </div>
              
              {item.funding && item.funding.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">Funding</h3>
                  <div className="space-y-3">
                    {item.funding.map((fund, idx) => (
                      <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium text-gray-900">{fund.source}</p>
                        <p className="text-gray-700">{fund.amount}</p>
                        <p className="text-gray-600 text-sm">{fund.period}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {item.collaborators && item.collaborators.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold mb-2">Collaborators</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.collaborators.map((collaborator, idx) => (
                      <span 
                        key={idx}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full"
                      >
                        {collaborator}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Publications Section */}
        <div className="mt-20">
          <SectionTitle 
            title="Publications" 
            subtitle="My academic publications and research papers"
          />
          
          <div className="mt-12 space-y-8">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.id}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="flex items-start">
                  <div className="mr-4 bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded whitespace-nowrap mt-1">
                    {pub.year}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{pub.title}</h3>
                    <p className="text-gray-700 mb-3">
                      {pub.authors.join(', ')}
                    </p>
                    <p className="text-gray-600 italic mb-4">
                      {pub.journal}, {pub.pages}
                      {pub.volume && `, Volume ${pub.volume}`}
                      {pub.issue && `, Issue ${pub.issue}`}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-md font-semibold mb-1">Abstract</h4>
                      <p className="text-gray-700">{pub.abstract}</p>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4">
                      {pub.doi && (
                        <a 
                          href={`https://doi.org/${pub.doi}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-800 text-sm font-medium"
                        >
                          DOI: {pub.doi}
                        </a>
                      )}
                      
                      {pub.url && (
                        <a 
                          href={pub.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-800 text-sm font-medium"
                        >
                          View Publication
                        </a>
                      )}
                      
                      <div className="text-gray-600 text-sm">
                        Citations: {pub.citations}
                      </div>
                    </div>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {pub.keywords.map((keyword, kidx) => (
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
    </div>
  );
};

export default Research; 