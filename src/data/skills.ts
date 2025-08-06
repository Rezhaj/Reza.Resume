export interface Skills {
  categories: {
    name: string;
    skills: {
      name: string;
    }[];
  }[];
}

export const skills: Skills = {
  categories: [
    {
      name: "Languages",
      skills: [
        { name: "English (C; IELTS Academic 7.5/9)" },
        { name: "Persian (Native)" },
        { name: "Arabic (B)" },
        { name: "German (A)" }
      ]
    },
    {
      name: "Simulation Software",
      skills: [
        { name: "Ansys Fluent" },
        { name: "Ansys FEA" },
        { name: "nTopology" }
      ]
    },
    {
      name: "Programming",
      skills: [
        { name: "C (Expert)" },
        { name: "Python" },
        { name: "Fortran" },
        { name: "Matlab" }
      ]
    },
    {
      name: "Technical",
      skills: [
        { name: "Material Characterization" },
        { name: "Mechanical Testing" },
        { name: "Metallography" },
        { name: "Machining Technologies (Expert)" },
        { name: "Welding and Brazing of Aluminum and Nickel-based Alloys" },
        { name: "Additive Manufacturing" }
      ]
    },
    {
      name: "Technical Software",
      skills: [
        { name: "X-pert" },
        { name: "Key to Steel" },
        { name: "Image J" },
        { name: "ToupView" }
      ]
    },
    {
      name: "CAD and Design",
      skills: [
        { name: "AutoCAD" },
        { name: "SOLIDWORKS" },
        { name: "Ansys SpaceClaim" },
        { name: "Adobe Photoshop" },
        { name: "Microsoft Office" }
      ]
    },
    {
      name: "Soft Skills",
      skills: [
        { name: "Academic Writing and Searching" },
        { name: "Team Leading and Team Working" },
        { name: "Quick Learner" },
        { name: "Problem Solving" }
      ]
    }
  ]
};
