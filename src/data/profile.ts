export interface Profile {
  name: string;
  title: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  GoogleScholar: string;
  researchGate: string;
  profileImage: string;
  department: string;
  institution: string;
  researchInterests: string[];
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
  }[];
}

export const profile: Profile = {
  "name": "M.Reza Hajiha",
  "title": "Master's graduate in Materials and Metallurgical Engineering",
  "summary": "Master's graduate in Materials and Metallurgical Engineering, specializing in advanced materials and manufacturing processes. My research focuses on developing novel materials for industrial applications and exploring the relationship between processing, structure, and properties of engineering materials.",
  "location": "Tehran, Iran",
  "email": "reza.hajiha1996@gmail.com",
  "phone": "+989193834297",
  "linkedin": "https://www.linkedin.com/in/reza-hajiha-03b00b188/",
  "GoogleScholar": "https://scholar.google.com/citations?user=sguwijAAAAAJ&hl=en",
  "researchGate": "https://www.researchgate.net/profile/Mohmaamdreza-Hajiha",
  "profileImage": "profile.webp",
  "department": "Department of Materials and Metallurgical Engineering",
  "institution": "Amirkabir University of Technology",
  "researchInterests": [
    "Additive Manufacturing (3D Printing)",
    "Alloy Chemistry and Phase Transformations",
    "Welding and Joining Technologies",
    "Materials Characterization",
    "Recyclable and Sustainable Materials",
    "AI and Machine Learning in Materials Science"
  ],
  "biography": "M.Reza Hajiha is a Master's graduate in Materials and Metallurgical Engineering at Amirkabir University of Technology, specializing in advanced materials and manufacturing processes. Reza graduated with honors from Amirkabir University of Technology with a Bachelor's degree in Materials Engineering. During undergraduate studies, Reza participated in several research projects focused on metallurgical processing and materials characterization, which sparked a passion for developing novel materials for industrial applications. Currently working as a Research Assistant in the Advanced Materials Laboratory, Reza is investigating the relationship between processing parameters, microstructure, and mechanical properties of engineering materials. Reza has presented work at student research conferences and is an active member of the Materials Engineering Student Association. Outside of academics, Reza enjoys hiking, photography, and playing traditional Persian music.",
  "hobbies": [
    "Biking",
    "Photography",
  ],
  "languages": [
    {"name": "Persian", "proficiency": "Native"},
    {"name": "English", "proficiency": "C; IELTS Academic 7.5/9"},
    {"name": "Arabic", "proficiency": "Basic"},
    {"name": "German", "proficiency": "Basic"}
  ],
  "achievements": [
    "Dean's List, Amirkabir University of Technology (2022-2023)",
    "Best Undergraduate Research Project Award (2021)",
    "Materials Engineering Student Association Leadership Award (2020)",
    "National Merit Scholar (2018)"
  ],
  "skills": [
    "Materials Characterization (XRD, SEM, TEM)",
    "Mechanical Testing",
    "Metallography",
    "Heat Treatment Processes",
    "Failure Analysis",
    "Corrosion Testing",
    "CAD/CAM Software",
    "Statistical Analysis",
    "Technical Report Writing",
    "Laboratory Management"
  ],
  "socials": [
    {
      "name": "LinkedIn",
      "url": "https://www.linkedin.com/in/reza-hajiha-03b00b188/",
    },
    {
      "name": "GoogleScholar",
      "url": "https://scholar.google.com/citations?user=sguwijAAAAAJ&hl=en",
    },
    {
      "name": "ResearchGate",
      "url": "https://www.researchgate.net/profile/Mohmaamdreza-Hajiha",
    }
  ]
}; 
