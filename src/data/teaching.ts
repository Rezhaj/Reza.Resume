export interface Teaching {
  id: number;
  course: string;
  code?: string;
  startDate: string;
  endDate: string;
  institution: string;
  department: string;
  role: string;
  description: string;
  responsibilities: string[];
  achievements?: string[];
}

export const teaching: Teaching[] = [
  {
    "id": 1,
    "course": "Natural Language Processing with Deep Learning",
    "code": "CS 224N",
    "startDate": "Winter 2023",
    "endDate": "Spring 2023",
    "institution": "Stanford University",
    "department": "Computer Science",
    "role": "Teaching Assistant",
    "description": "This course provides a thorough introduction to cutting-edge research in deep learning for NLP. Students will learn to implement, train, debug, visualize and invent their own neural network models.",
    "responsibilities": [
      "Led weekly discussion sections for 30+ students",
      "Graded assignments and provided detailed feedback",
      "Held office hours to support student learning",
      "Assisted with course material development"
    ],
    "achievements": [
      "Received outstanding TA award from department",
      "Improved student satisfaction scores by 15%",
      "Developed new interactive exercises for course"
    ]
  },
  {
    "id": 2,
    "course": "Machine Learning Systems Design",
    "code": "CS 329S",
    "startDate": "Spring 2022",
    "endDate": "Summer 2022",
    "institution": "Stanford University",
    "department": "Computer Science",
    "role": "Teaching Assistant",
    "description": "This course focuses on the design and deployment of production machine learning systems, covering topics such as data management, model development, deployment, monitoring, and ethics.",
    "responsibilities": [
      "Managed course infrastructure and cloud resources",
      "Created hands-on labs for ML system deployment",
      "Provided technical support for student projects",
      "Collaborated with industry partners for guest lectures"
    ],
    "achievements": [
      "Helped 5 student teams deploy production ML systems",
      "Reduced lab setup time by 40% through automation",
      "Mentored students who won department hackathon"
    ]
  },
  {
    "id": 3,
    "course": "From Languages to Information",
    "code": "CS 124",
    "startDate": "Fall 2021",
    "endDate": "Winter 2021",
    "institution": "Stanford University",
    "department": "Computer Science",
    "role": "Teaching Assistant",
    "description": "This course examines the fundamental concepts and ideas in natural language processing, with a focus on creating systems that can understand and extract information from text.",
    "responsibilities": [
      "Conducted weekly office hours for 50+ students",
      "Designed and graded programming assignments",
      "Created tutorial materials for complex topics",
      "Provided one-on-one mentoring for struggling students"
    ],
    "achievements": [
      "Helped 90% of students complete course successfully",
      "Developed new assessment methods for NLP projects",
      "Received student-nominated teaching excellence award"
    ]
  }
]; 