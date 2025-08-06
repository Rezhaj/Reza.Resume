export interface Research {
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

export const research: Research[] = [
  {
    "id": 1,
    "title": "Microstructural Evolution in Advanced High-Strength Steels",
    "institution": "Isfahan University of Technology",
    "department": "Department of Materials and Metallurgical Engineering",
    "startDate": "2022-09",
    "endDate": "Present",
    "description": "Investigating the relationship between processing parameters, microstructural evolution, and mechanical properties in advanced high-strength steels for automotive applications.",
    "achievements": [
      "Developed a novel heat treatment protocol that improved tensile strength by 15% while maintaining adequate ductility",
      "Created a comprehensive database of microstructure-property relationships for various steel compositions",
      "Optimized metallographic techniques for better visualization of complex microstructures"
    ],
    "funding": [
      {
        "source": "National Materials Research Institute Grant",
        "amount": "₹15,000,000",
        "period": "2022-2024"
      },
      {
        "source": "Isfahan University of Technology Research Fund",
        "amount": "₹5,000,000",
        "period": "2022-2023"
      }
    ],
    "collaborators": [
      "Dr. Ahmad Rezaeian (Isfahan University of Technology)",
      "Dr. Morteza Hadi (Isfahan University of Technology)",
      "Dr. Mohammad Javad Torkamany (Iranian National Laser Center)"
    ]
  },
  {
    "id": 2,
    "title": "Corrosion Behavior of Surface-Modified Stainless Steels",
    "institution": "Isfahan University of Technology",
    "department": "Department of Materials and Metallurgical Engineering",
    "startDate": "2023-01",
    "endDate": "Present",
    "description": "Studying the effects of various surface modification techniques on the corrosion resistance of austenitic stainless steels in aggressive environments.",
    "achievements": [
      "Developed a surface treatment process that improved corrosion resistance by 40% in chloride-containing environments",
      "Created a standardized testing protocol for evaluating corrosion performance of treated surfaces",
      "Established correlations between surface roughness parameters and corrosion initiation sites"
    ],
    "funding": [
      {
        "source": "Iran National Science Foundation",
        "amount": "₹8,000,000",
        "period": "2023-2024"
      }
    ],
    "collaborators": [
      "Dr. Ahmad Rezaeian (Isfahan University of Technology)",
      "Dr. Hamid Reza Jafarian (Isfahan University of Technology)"
    ]
  },
  {
    "id": 3,
    "title": "Mechanical Properties of Additively Manufactured Metallic Components",
    "institution": "Isfahan University of Technology",
    "department": "Department of Materials and Metallurgical Engineering",
    "startDate": "2022-06",
    "endDate": "2022-12",
    "description": "Investigated the relationship between processing parameters in metal 3D printing and the resulting microstructure and mechanical properties of printed components.",
    "achievements": [
      "Optimized printing parameters for improved density and mechanical properties of stainless steel components",
      "Characterized the anisotropic mechanical behavior of printed specimens using advanced testing techniques",
      "Presented findings at the Iranian Materials Science and Engineering Conference"
    ],
    "funding": [
      {
        "source": "Isfahan University of Technology Innovation Fund",
        "amount": "₹3,000,000",
        "period": "2022"
      }
    ],
    "collaborators": [
      "Dr. Morteza Hadi (Isfahan University of Technology)",
      "Dr. Mohsen Karamouz (Isfahan University of Technology)"
    ]
  },
  {
    "id": 4,
    "title": "Failure Analysis and Prevention in Industrial Components",
    "institution": "Isfahan Steel Company",
    "department": "Quality Control Department",
    "startDate": "2022-06",
    "endDate": "2022-08",
    "description": "Conducted systematic investigations of failed industrial components to determine root causes and develop preventive measures for future failures.",
    "achievements": [
      "Identified the primary failure mechanisms in high-temperature service components",
      "Developed improved maintenance protocols that reduced failure rates by 25%",
      "Created a database of common failure patterns for training and reference purposes"
    ],
    "funding": [
      {
        "source": "Isfahan Steel Company Research Division",
        "amount": "₹2,000,000",
        "period": "2022"
      }
    ],
    "collaborators": [
      "Dr. Ali Akbari (Isfahan Steel Company)",
      "Eng. Mohammad Karimi (Isfahan Steel Company)"
    ]
  }
]; 