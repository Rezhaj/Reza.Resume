import React, { createContext, useContext, ReactNode } from 'react';
import {
  Profile,
  Education,
  Experience,
  Project,
  Publication,
  Research,
  Skills,
  Hobby,
  NavItem,
  Contact,
  profile,
  education,
  experience,
  projects,
  publications,
  research,
  skills,
  hobbies,
  navbar,
  contact
} from '../data';

interface DataContextType {
  profile: Profile;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  publications: Publication[];
  research: Research[];
  skills: Skills;
  hobbies: Hobby[];
  navbar: NavItem[];
  contact: Contact;
  isLoading: boolean;
  error: Error | null;
  hasError: boolean;
}

// Create context with local data
const initialState: DataContextType = {
  profile,
  education,
  experience,
  projects,
  publications,
  research,
  skills,
  hobbies,
  navbar,
  contact,
  isLoading: false,
  error: null,
  hasError: false
};

// Create context
const DataContext = createContext<DataContextType>(initialState);

// Provider component
export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <DataContext.Provider value={initialState}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use the data context
export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export default DataContext; 