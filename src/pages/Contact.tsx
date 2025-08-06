import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { useData } from '../context/DataContext';
import { renderSocialIcon } from '../utils/SocialIcons';

const Contact: React.FC = () => {
  const { profile, isLoading } = useData();

  if (isLoading || !profile) {
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
          title="Contact" 
          subtitle="Get in touch for collaborations or inquiries"
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <a 
                    href={`mailto:${profile.email}`}
                    className="text-primary-600 hover:text-primary-800 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {profile.email}
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Phone</h3>
                  <a 
                    href={`tel:${profile.phone}`}
                    className="text-primary-600 hover:text-primary-800 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {profile.phone}
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="text-gray-700 flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>
                      {profile.location}
                    </span>
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Connect</h3>
                  <div className="flex space-x-4">                
                    {profile.socials && profile.socials.map((social, index) => (
                      <a 
                        key={index} 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-700 hover:text-primary-600"
                        aria-label={social.name}
                      >
                        {renderSocialIcon(social.name)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Profile Image and Additional Info */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-600 rounded-full transform translate-x-3 translate-y-3"></div>
                  <img 
                    src={`${process.env.PUBLIC_URL}/images/${profile.profileImage}`} 
                    alt={profile.name}
                    className="relative z-10 rounded-full w-48 h-48 object-cover border-4 border-white shadow-xl"
                  />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-center mb-2">{profile.name}</h2>
              <p className="text-center text-primary-600 mb-6">{profile.title}</p>
              
              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-semibold mb-2">Research Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.researchInterests.map((interest, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Languages</h3>
                <div className="space-y-2">
                  {profile.languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700">{lang.name}</span>
                      <span className="text-sm bg-gray-100 px-2 py-1 rounded">{lang.proficiency}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-600 text-sm">
                  Feel free to reach out via email or any of the social platforms above. I'm always open to discussing potential research collaborations and academic opportunities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 