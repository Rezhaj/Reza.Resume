import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useData } from '../context/DataContext';
import DataErrorDisplay from './DataErrorDisplay';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { hasError, error } = useData();

  // If there's a data loading error, show the error display
  if (hasError) {
    return <DataErrorDisplay error={error} />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 