import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const { navbar, profile, isLoading, hasError } = useData();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Memoize the scroll handler for better performance
  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 10;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  }, [scrolled]);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen && 
        menuRef.current && 
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Fix for mobile menu scroll issue - only prevent scrolling on menu itself
  useEffect(() => {
    // Don't prevent scrolling on the whole body
    // Instead, handle overflow in the menu itself
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // If data is loading or there's an error, show a minimal navbar
  if (isLoading || hasError || !navbar || !profile) {
    return (
      <nav className="fixed top-0 w-full z-50 bg-white shadow-md py-2">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <span className="text-xl md:text-2xl font-serif font-bold text-gray-900">
                Resume Site
              </span>
            </Link>
            <div className="hidden md:flex space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-6 w-20 bg-gray-200 animate-pulse rounded"></div>
              ))}
            </div>
            <div className="h-6 w-6 bg-gray-200 animate-pulse rounded md:hidden"></div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-white shadow-md py-2' 
          : 'bg-white bg-opacity-90 backdrop-blur-md py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-serif font-bold text-gray-900">
              {profile.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 lg:space-x-6">
            {navbar.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`relative font-medium text-sm lg:text-base px-1 py-2 ${
                  location.pathname === item.path
                    ? 'text-primary-700'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-[-4px] h-[2px] bg-primary-600"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={buttonRef}
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pb-4 bg-white max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col space-y-3">
              {navbar.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`px-4 py-2 rounded ${
                    location.pathname === item.path
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 