export interface Education {
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
    grade: string;
  };
}

export const education: Education[] = [
  {
    "id": 1,
    "institution": "Amirkabir University of Technology",
    "degree": "M.Sc. in Materials and Metallurgical Engineering",
    "field": "Advanced Materials and Manufacturing Processes",
    "location": "Tehran, Iran",
    "startDate": "sep 2018",
    "endDate": "mar 2021",
    "gpa": "17.94/20 (3.76/4.0)",
    "description": "Conducting research on advanced materials characterization and processing techniques for industrial applications.",
    "thesis": {
      "title": "The Simulation of Variations in Heat Transfer and Material Flow During FrictionStir Welding of AA6061 and AA5052 Aluminum Alloys",
      "advisor": "Dr. Ali Farzadi (Amirkabir University of Technology), Dr. Mohammad Saeedi (Dalhousie University)",
      "grade": "19.50/20",
    },
  },
  {
    "id": 2,
    "institution": "Amirkabir University of Technology",
    "degree": "B.Sc. in Materials Engineering",
    "field": "Metallurgical Engineering",
    "location": "Tehran, Iran",
    "startDate": "sep 2014",
    "endDate": "aug 2018",
    "gpa": "16.30/20(3.36/4)",
    "description": "Comprehensive education in materials science, metallurgy, and manufacturing processes.",
    "thesis": {
      "title": ": Chemical Precipitation-Based Recovery of Nickel, Cobalt, and Zinc from Cold Filter Cake Generated in Zinc Production Plants",
      "advisor": "Dr. Milad Rezaee (Amirkabir University of Technology)",
      "grade": "19.00/20 "
    },
  },
]; 