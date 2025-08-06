export interface Hobby {
  id: number;
  name: string;
  description: string;
  image: string;
  frequency: string;
  achievements: string[];
}

export const hobbies: Hobby[] = [
  {
    "id": 1,
    "name": "Photography",
    "description": "I have a passion for capturing the beauty of materials at both macro and micro scales. I especially enjoy metallographic photography and landscape photography.",
    "image": "damavand.jpg",
    "frequency": "Weekly",
    "achievements": [
      "Won 2nd place in the university's scientific photography contest",
      "Published several microstructure images in research papers",
      "Created a personal portfolio of landscape photographs from across Iran"
    ]
  },
  {
    "id": 2,
    "name": "Biking",
    "description": "I enjoy biking and exploring the beautiful mountains around Isfahan and other parts of Iran. Biking helps me clear my mind and connect with nature.",
    "image": "damavand.jpg",
    "frequency": "Daily",
    "achievements": [
      "Biked 600km in 2024",
    ]
  },
]; 