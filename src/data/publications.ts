export interface Publication {
  id: number;
  title: string;
  authors: string[];
  url: string;
}

export const publications: Publication[] = [
  {
    id: 1,
    title: "Microstructural and Mechanical Properties of Dissimilar Joining of AA5052 and AA6061 by Friction Stir Welding",
    authors: ["Hajiha M", "Farzadi A", "et al."],
    url: "https://doi.org/10.47176/JWSTI.2024.04"
  },
  {
    id: 2,
    title: "Solidification Microstructure, Post-Braze Heat Treatment, and Stress Rupture of Wide Gap Brazed Inconel 738",
    authors: ["Hajiha M", "Farzadi A", "et al."],
    url: "" // Under Review — URL will be added after acceptance
  },
  {
    id: 3,
    title: "Effect of Alloy Position and Process Conditions on Defect Formation in Dissimilar FSW: A CFD-Based Study",
    authors: ["Hajiha M", "Farzadi A"],
    url: "" // Under Review — URL will be added after acceptance
  },
  {
    id: 4,
    title: "Optimization of Friction Stir Welding Parameters for Dissimilar Joining 5xxx and 6xxx Series Aluminum Alloys",
    authors: ["Hajiha M", "Farzadi A", "et al."],
    url: "" // Conference poster — could be updated with a link to proceedings or poster PDF
  }
];
