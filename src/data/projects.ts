export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Plate-Fin Heat Exchangers: Optimization of the Brazing Procedure of AA3003 using AA4004 Clad Sheet",
    description: "Optimized the brazing process for AA3003 aluminum alloy using AA4004 clad sheets in the production of plate-fin heat exchangers, focusing on joint integrity and thermal performance.",
    
    technologies: ["Brazing", "AA3003", "AA4004", "Heat Exchangers", "Materials Engineering"],
    featured: false
  },
  {
    id: 2,
    title: "Simulation of Lattice Structures Using nTopology: Optimizing Additively Manufactured Heat Exchangers",
    description: "Used nTopology to simulate lattice structures for advanced heat exchangers, enhancing performance and reducing material usage through additive manufacturing techniques.",
    technologies: ["nTopology", "Simulation", "Additive Manufacturing", "Lattice Structures", "Heat Exchangers"],
    featured: false
  },
  {
    id: 3,
    title: "Simulation of Variations in Heat Transfer and Material Flow During Friction-Stir Welding of AA6061 and AA5052",
    description: "Simulated the heat transfer and material flow phenomena in friction-stir welding of dissimilar aluminum alloys AA6061 and AA5052 to optimize weld quality and minimize defects.",
    technologies: ["Friction-Stir Welding", "AA6061", "AA5052", "Heat Transfer", "Simulation"],
    featured: false
  },
  {
    id: 4,
    title: "Development of Al₂O₃–Cr Functionally Graded Materials Using Powder Metallurgy",
    description: "Created functionally graded materials by combining Al₂O₃ and Chromium powders using mechanical alloying via ball milling, aimed at optimizing thermal and mechanical properties.",
    technologies: ["Powder Metallurgy", "Functionally Graded Materials", "Ball Milling", "Al₂O₃", "Chromium"],
    featured: false
  },
  {
    id: 5,
    title: "Effect of Welding Parameters and Thickness on Cold Cracking in Welding of A517 Gr. B Steel",
    description: "Investigated the influence of various welding parameters and material thickness on the likelihood of cold cracking in A517 Gr. B steel welds, offering recommendations for parameter control.",
    technologies: ["Welding", "Cold Cracking", "A517 Gr. B Steel", "Failure Analysis"],
    featured: false
  },
  {
    id: 6,
    title: "Magnetic Resonance Imaging: From Basics to Advanced Analysis",
    description: "A comprehensive research project for the Advanced Methods of Materials Analysis course, exploring MRI technology from fundamental principles to complex analytical techniques.",
    technologies: ["MRI", "Materials Analysis", "Signal Processing", "Medical Imaging"],
    featured: false
  },
  {
    id: 7,
    title: "Finite Element Simulation of Heat Transfer in TIG Welding of Aluminium Alloys",
    description: "Simulated thermal behavior in TIG welding processes of aluminum alloys using finite element analysis, as part of a course project on CAD and joining methods.",
    technologies: ["TIG Welding", "FEA", "CAD", "Aluminum Alloys", "Heat Transfer"],
    featured: false
  },
  {
    id: 8,
    title: "Recovery of Nickel, Cobalt, and Zinc from Zinc Plant Residue by Chemical Precipitation",
    description: "Explored a chemical precipitation method for recovering valuable metals—nickel, cobalt, and zinc—from industrial zinc plant residues.",
    technologies: ["Chemical Precipitation", "Metal Recovery", "Hydrometallurgy", "Industrial Waste"],
    featured: false
  }
];
