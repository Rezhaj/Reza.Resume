import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { renderSocialIcon } from '../utils/SocialIcons';

const Footer: React.FC = () => {
  const { profile, navbar, isLoading, hasError } = useData();

  // Show a minimal footer if data is loading or there's an error
  if (isLoading || hasError || !profile || !navbar) {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container-custom">
          <div className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Resume Site
          </div>
        </div>
      </footer>
    );
  }

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-1 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">{profile.name}</h3>
            <p className="text-gray-400 mb-4">
              {profile.title}
            </p>
            <p className="text-gray-400">
              {profile.location}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navbar.slice(0, 5).map((item) => (
                <li key={item.id}>
                  <Link to={item.path} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Interests */}
          <div className="md:col-span-1 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Research Interests</h3>
            <ul className="space-y-2">
              {profile.researchInterests && profile.researchInterests.slice(0, 5).map((interest, index) => (
                <li key={index} className="text-gray-400">
                  {interest}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${profile.phone}`} className="hover:text-white transition-colors">
                  {profile.phone}
                </a>
              </li>
              <li className="flex items-center space-x-4 mt-4">
                {profile.socials && profile.socials.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    {renderSocialIcon(social.icon)}
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 