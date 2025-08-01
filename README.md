# Master's Student Resume Website

A responsive resume website built with React, TypeScript, and Tailwind CSS for master's students. This project is designed to be deployed on GitHub Pages and serves as a professional online presence to showcase your academic achievements, projects, and skills to potential professors and employers.

## Features

- **Dynamic Content**: All content is loaded from JSON files, making it easy to update without changing the code
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Student-Focused Sections**: Specialized sections for education, skills, projects, research experience, and more
- **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS
- Framer Motion (for animations)
- React Router (for navigation)
- GitHub Pages (for deployment)

## Project Structure

```
├── public/               # Public assets
│   └── images/           # Image assets
├── src/                  # Source code
│   ├── components/       # Reusable components
│   ├── data/             # JSON data files
│   ├── pages/            # Page components
│   ├── styles/           # Additional styles
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Utility functions
│   ├── App.tsx           # Main App component
│   └── index.tsx         # Entry point
└── package.json          # Dependencies and scripts
```

## Data Files

All content is loaded from JSON files in the `src/data` directory:

- `profile.json`: Personal information, bio, hobbies, languages, and achievements
- `navbar.json`: Navigation menu items
- `education.json`: Academic background
- `experience.json`: Professional experience
- `publications.json`: Academic publications
- `research.json`: Research projects
- `teaching.json`: Teaching experience
- `skills.json`: Technical and academic skills
- `projects.json`: Software and research projects
- `contact.json`: Contact information

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/resume-site.git
   cd resume-site
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Customization

1. Update the JSON files in the `src/data` directory with your information
2. Replace images in the `public/images` directory
3. Customize colors in `tailwind.config.js` if desired
4. Update the `homepage` field in `package.json` with your GitHub Pages URL

## Deployment

1. Update the `homepage` field in `package.json` to match your GitHub Pages URL:
   ```json
   "homepage": "https://yourusername.github.io/resume-site"
   ```

2. Deploy to GitHub Pages:
   ```
   npm run deploy
   ```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com/)
- [GitHub Pages](https://pages.github.com/)
