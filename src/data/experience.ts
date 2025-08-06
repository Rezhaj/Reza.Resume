export interface Experience {
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

export const experience: Experience[] = [
  {
    id: 1,
    company: "Hilavis Arina",
    position: "R&D Expert",
    location: "Tehran/Markazi, Iran",
    startDate: "May 2021",
    endDate: "Present",
    description: `Design and develop precision tools and dies for fabricating plate-fin heat exchanger components, using CAD and modern manufacturing techniques. Conduct test runs, analyze performance, and implement design adjustments to optimize reliability and manufacturability.`,
    achievements: [
      "Successfully developed tooling for complex heat exchanger components",
      "Improved manufacturing efficiency through modern design techniques",
      "Optimized tooling based on test results to ensure high performance"
    ],
    technologies: [
      "CAD",
      "Precision Manufacturing",
      "Heat Exchanger Design",
      "Tool and Die Design",
      "Testing and QA"
    ]
  },
  {
    id: 2,
    company: "Hilavis Arina",
    position: "Laboratory Supervisor",
    location: "Tehran/Markazi, Iran",
    startDate: "May 2021",
    endDate: "Present",
    description: `Supervise metallographic testing, interpret microstructural features, and collaborate with external labs for advanced materials analysis. Coordinate tests such as SEM, quantometry, and mechanical evaluations.`,
    achievements: [
      "Established standardized lab procedures for metallographic testing",
      "Interpreted advanced test data to inform material decisions",
      "Successfully integrated external lab results into internal reports"
    ],
    technologies: [
      "Metallography",
      "Optical Microscopy",
      "SEM",
      "Quantometry",
      "Hardness Testing"
    ]
  },
  {
    id: 3,
    company: "Amirkabir University of Technology (Tehran Polytechnic)",
    position: "Welding Lab Instructor",
    location: "Tehran, Iran",
    startDate: "Sep 2018",
    endDate: "Feb 2021",
    description: `Delivered practical welding instruction, guided students through GTAW, SMAW, and GMAW processes, and ensured adherence to safety and quality standards.`,
    achievements: [
      "Trained over 100 students in hands-on welding techniques",
      "Implemented structured safety procedures in the lab",
      "Provided detailed feedback to support student development"
    ],
    technologies: [
      "GTAW",
      "SMAW",
      "GMAW",
      "Welding Safety",
      "Welding Education"
    ]
  },
  {
    id: 4,
    company: "Amirkabir University of Technology (Tehran Polytechnic)",
    position: "Research Assistant - Powder Metallurgy Lab",
    location: "Tehran, Iran",
    startDate: "Sep 2020",
    endDate: "Sep 2021",
    description: `Contributed to developing functionally graded alloys by combining Al₂O₃ and Cr powders. Participated in powder processing and supported mechanical/microstructural analysis.`,
    achievements: [
      "Helped fabricate functionally graded materials with improved properties",
      "Ensured uniform powder compaction and quality control",
      "Performed hardness and microstructural evaluations"
    ],
    technologies: [
      "Powder Metallurgy",
      "Al₂O₃",
      "Chromium Alloys",
      "Sintering",
      "Hardness Testing"
    ]
  },
  {
    id: 5,
    company: "Railways of the Islamic Republic of Iran",
    position: "Materials and Metallurgical Engineering Intern",
    location: "Tehran, Iran",
    startDate: "Summer 2019", // Adjusted to approximate since exact date is not given
    endDate: "Summer 2019",
    description: `Assisted with inspection and failure analysis of rail components, contributed to welding and machining quality control, and collaborated on process improvement recommendations.`,
    achievements: [
      "Conducted fracture surface and wear analysis on rail components",
      "Supported quality assessments of welding and repair processes",
      "Provided actionable reports for engineering improvements"
    ],
    technologies: [
      "Failure Analysis",
      "Metallurgical Inspection",
      "Welding QC",
      "Material Degradation Analysis"
    ]
  }
];