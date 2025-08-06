export interface Contact {
  email: string;
  phone: string;
  address: {
    city: string;
    country: string;
  };
  socialMedia: {
    linkedin: string;
    twitter: string;
    googleScholar: string;
    researchGate: string;
  };
  preferredContactMethod: string;
  availableFor: string[];
}

export const contact: Contact = {
  "email": "mailto:reza.hajiha1996@gmail.com",
  "phone": "+989193834297",
  "address": {
    "city": "Tehran",
    "country": "Iran"
  },
  "socialMedia": {
    "linkedin": "https://www.linkedin.com/in/reza-hajiha-03b00b188/",
    "twitter": "https://twitter.com/johndoe",
    "googleScholar": "https://scholar.google.com/citations?user=sguwijAAAAAJ&hl=en",
    "researchGate": "https://www.researchgate.net/profile/Mohmaamdreza-Hajiha",
  },
  "preferredContactMethod": "email",
  "availableFor": [
    "Research Collaboration",
    "Academic Advising",
    "Speaking Engagements",
    "Consulting"
  ],
}; 