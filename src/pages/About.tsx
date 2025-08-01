import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { useData } from '../context/DataContext';
import { renderSocialIcon } from '../utils/SocialIcons';


const About: React.FC = () => {
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
          title="About Me"
          subtitle="Learn more about my background and interests"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          {/* Profile Image and Contact Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary-600 rounded-lg transform translate-x-4 translate-y-4"></div>
              <img
                src={`${process.env.PUBLIC_URL}/images/${profile.profileImage}`}
                alt={profile.name}
                className="relative z-10 rounded-lg w-full h-auto object-cover shadow-xl"
              />
            </div>

            <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-semibold w-24">Email:</span>
                  <a href={`mailto:${profile.email}`} className="text-primary-600 hover:text-primary-800">
                    {profile.email}
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold w-24">Phone:</span>
                  <a href={`tel:${profile.phone}`} className="text-primary-600 hover:text-primary-800">
                    {profile.phone}
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold w-24">Location:</span>
                  <span>{profile.location}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold w-24">Website:</span>
                  <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800">
                    {profile.website.replace(/^https?:\/\//, '')}
                  </a>
                </li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-4">Connect</h3>
              <div className="flex flex-wrap gap-4">
                {profile.socials && profile.socials.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-700 hover:text-primary-600"
                    aria-label={social.name}
                  >
                    {renderSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Biography and Academic Positions */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Biography</h2>
            <div className="prose prose-lg max-w-none">
              <p className="mb-4">{profile.biography}</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Academic Positions</h2>
            <div className="space-y-6">
              {profile.academicPositions && profile.academicPositions.map((position, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600"
                >
                  <h3 className="text-xl font-bold">{position.title}</h3>
                  <p className="text-gray-700">{position.department}, {position.institution}</p>
                  <p className="text-gray-500 mt-2">
                    {position.startDate} - {position.endDate}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Research Interests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {profile.researchInterests && profile.researchInterests.map((interest, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg flex items-center"
                >
                  <div className="h-2 w-2 rounded-full bg-primary-600 mr-3"></div>
                  <span className="font-medium">{interest}</span>
                </div>
              ))}
            </div>

            {/* Languages & Skills */}
            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Languages & Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {profile.languages && profile.languages.map((language, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center"
                >
                  <span className="font-medium">{language.name}</span>
                  <span className="text-sm px-3 py-1 bg-gray-100 rounded-full">{language.proficiency}</span>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Achievements</h2>
            <div className="space-y-4">
              {profile.achievements && profile.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary-600"
                >
                  <p className="font-medium">{achievement}</p>
                </div>
              ))}
            </div>

            {/* Hobbies & Interests */}
            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Hobbies & Interests</h2>
            <div className="flex flex-wrap gap-3">
              {profile.hobbies && profile.hobbies.map((hobby, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-50 rounded-full text-gray-800"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About; 