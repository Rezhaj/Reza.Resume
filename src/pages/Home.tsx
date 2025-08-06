import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { useData } from '../context/DataContext';
import { renderSocialIcon } from '../utils/SocialIcons';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';


const Home: React.FC = () => {
  const { profile, isLoading } = useData();

  if (isLoading || !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="block text-gray-900">{profile.name}</span>
                <span className="block text-primary-600 mt-2">{profile.title}</span>
              </h1>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {profile.summary}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn btn-primary">
                  Contact Me
                </Link>
                <Link to="/projects" className="btn btn-outline">
                  View Projects
                </Link>
                <a 
                  href={`${process.env.PUBLIC_URL}/documents/resume.pdf`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline flex items-center gap-2"
                >
                  <ArrowDownTrayIcon className="h-5 w-5" />
                  Resume PDF
                </a>
              </div>

              {profile.socials && profile.socials.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-4">
                  {profile.socials.map((social, index) => (
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
              )}
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary-600 rounded-full transform translate-x-4 translate-y-4"></div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/${profile.profileImage}`}
                  alt={profile.name}
                  className="relative z-10 rounded-full w-72 h-72 object-cover border-4 border-white shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Research Interests"
            subtitle="My areas of focus and expertise"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {profile.researchInterests && profile.researchInterests.map((interest, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">{interest}</h3>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/research" className="btn btn-outline">
              Learn More About My Research
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Achievements"
            subtitle="Academic and professional accomplishments"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.achievements && profile.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <p className="text-lg font-medium text-gray-800">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies & Interests */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Beyond Academics"
            subtitle="My hobbies and personal interests"
          />

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {profile.hobbies && profile.hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <p className="text-gray-800 font-medium text-center">{hobby}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/hobbies" className="btn btn-outline">
              See My Hobbies
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Working Together?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            I'm eager to collaborate on research projects and open to discussing potential opportunities.
          </p>
          <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home; 