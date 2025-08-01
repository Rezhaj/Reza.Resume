import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { fetchData } from '../utils/dataFetcher';

// Define types based on expected data structure
interface Profile {
  name: string;
  title: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  github: string;
  linkedin: string;
  twitter: string;
  googleScholar: string;
  researchGate: string;
  orcid: string;
  profileImage: string;
  department: string;
  institution: string;
  researchInterests: string[];
  academicPositions: {
    title: string;
    department: string;
    institution: string;
    startDate: string;
    endDate: string;
  }[];
  biography: string;
  hobbies: string[];
  languages: {
    name: string;
    proficiency: string;
  }[];
  achievements: string[];
  skills: string[];
  socials: {
    name: string;
    url: string;
    icon: string;
  }[];
}

interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
  thesis?: {
    title: string;
    advisor: string;
    abstract: string;
  };
  achievements: string[];
}

interface Experience {
  id: number;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  featured: boolean;
}

interface Publication {
  id: number;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  volume?: number;
  issue?: number;
  pages: string;
  doi: string;
  abstract: string;
  keywords: string[];
  url: string;
  citations: number;
  type: string;
}

interface Research {
  id: number;
  title: string;
  institution: string;
  department: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  funding: {
    source: string;
    amount: string;
    period: string;
  }[];
  collaborators: string[];
}

interface Skills {
  categories: {
    name: string;
    skills: {
      name: string;
      level: number;
    }[];
  }[];
}

interface Teaching {
  id: number;
  course: string;
  code: string;
  institution: string;
  department: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
}

interface Hobby {
  id: number;
  name: string;
  description: string;
  image: string;
  frequency: string;
  achievements: string[];
}

interface NavItem {
  id: string;
  name: string;
  path: string;
}

interface DataContextType {
  profile: Profile | null;
  education: Education[] | null;
  experience: Experience[] | null;
  projects: Project[] | null;
  publications: Publication[] | null;
  research: Research[] | null;
  skills: Skills | null;
  teaching: Teaching[] | null;
  hobbies: Hobby[] | null;
  navbar: NavItem[] | null;
  isLoading: boolean;
  error: Error | null;
  hasError: boolean;
}

// Create empty initial state
const initialState: DataContextType = {
  profile: null,
  education: null,
  experience: null,
  projects: null,
  publications: null,
  research: null,
  skills: null,
  teaching: null,
  hobbies: null,
  navbar: null,
  isLoading: true,
  error: null,
  hasError: false
};

// Create context
const DataContext = createContext<DataContextType>(initialState);

// Provider component
export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<DataContextType>(initialState);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const MAX_RETRIES = 3;
    let isMounted = true;

    const loadAllData = async () => {
      try {
        // If we've already tried MAX_RETRIES times, show error
        if (retryCount >= MAX_RETRIES) {
          console.error(`Failed to fetch data after ${MAX_RETRIES} attempts.`);
          
          if (isMounted) {
            setError(new Error(`Failed to load data after ${MAX_RETRIES} attempts.`));
            setIsLoading(false);
            setHasError(true);
          }
          return;
        }

        // Fetch all data in parallel with timeouts
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
        
        try {
          const [
            profileData,
            educationData,
            experienceData,
            projectsData,
            publicationsData,
            researchData,
            skillsData,
            teachingData,
            hobbiesData,
            navbarData
          ] = await Promise.all([
            fetchData<Profile>('profile', null as unknown as Profile, controller.signal),
            fetchData<Education[]>('education', null as unknown as Education[], controller.signal),
            fetchData<Experience[]>('experience', null as unknown as Experience[], controller.signal),
            fetchData<Project[]>('projects', null as unknown as Project[], controller.signal),
            fetchData<Publication[]>('publications', null as unknown as Publication[], controller.signal),
            fetchData<Research[]>('research', null as unknown as Research[], controller.signal),
            fetchData<Skills>('skills', null as unknown as Skills, controller.signal),
            fetchData<Teaching[]>('teaching', null as unknown as Teaching[], controller.signal),
            fetchData<Hobby[]>('hobbies', null as unknown as Hobby[], controller.signal),
            fetchData<NavItem[]>('navbar', null as unknown as NavItem[], controller.signal)
          ]);

          clearTimeout(timeoutId);

          if (isMounted) {
            setData({
              profile: profileData,
              education: educationData,
              experience: experienceData,
              projects: projectsData,
              publications: publicationsData,
              research: researchData,
              skills: skillsData,
              teaching: teachingData,
              hobbies: hobbiesData,
              navbar: navbarData,
              isLoading: false,
              error: null,
              hasError: false
            });
            setIsLoading(false);
          }
        } catch (fetchError) {
          clearTimeout(timeoutId);
          throw fetchError;
        }
      } catch (err) {
        console.error('Error loading data:', err);
        
        if (isMounted) {
          setError(err instanceof Error ? err : new Error('Failed to load data'));
          setRetryCount(prevCount => prevCount + 1);
          
          // Exponential backoff for retries
          const retryDelay = Math.min(1000 * Math.pow(2, retryCount), 10000);
          console.log(`Retrying in ${retryDelay}ms (attempt ${retryCount + 1}/${MAX_RETRIES})`);
          
          setTimeout(() => {
            if (isMounted) {
              loadAllData();
            }
          }, retryDelay);
        }
      }
    };

    loadAllData();

    return () => {
      isMounted = false;
    };
  }, [retryCount]);

  return (
    <DataContext.Provider 
      value={{ 
        ...data,
        isLoading,
        error,
        hasError
      }}
    >
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