export interface NavItem {
  id: string;
  name: string;
  path: string;
}

export const navbar: NavItem[] = [
  {
    "id": "home",
    "name": "Home",
    "path": "/"
  },
  {
    "id": "about",
    "name": "About",
    "path": "/about"
  },
  {
    "id": "education",
    "name": "Education",
    "path": "/education"
  },
  {
    "id": "experience",
    "name": "Experience & Skills",
    "path": "/experience"
  },
  {
    "id": "research",
    "name": "Publications",
    "path": "/research"
  },
  {
    "id": "projects",
    "name": "Projects",
    "path": "/projects"
  },
  {
    "id": "hobbies",
    "name": "Hobbies",
    "path": "/hobbies"
  },
  {
    "id": "contact",
    "name": "Contact",
    "path": "/contact"
  }
]; 