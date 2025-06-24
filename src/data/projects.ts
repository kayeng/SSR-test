// src/data/projects.ts
export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  liveLink?: string;
  githubLink?: string;
  technologies: string[];
}

export const projectsData: Project[] = [
  {
    title: 'Personal Blog Platform',
    description: 'A responsive blog built with React and Markdown parsing, demonstrating efficient content delivery.',
    imageUrl: '/images/blog-app.jpg', // Place this image in `public/images/`
    liveLink: 'https://my-blog.example.com',
    githubLink: 'https://github.com/your-username/my-blog',
    technologies: ['React', 'TypeScript', 'Vite', 'Markdown', 'CSS Modules'],
  },
  {
    title: 'E-commerce Frontend',
    description: 'A modern e-commerce user interface with product listings, cart, and checkout flow.',
    imageUrl: '/images/ecommerce-frontend.jpg', // Place this image in `public/images/`
    liveLink: 'https://shop-fe.example.com',
    githubLink: 'https://github.com/your-username/ecommerce-frontend',
    technologies: ['React', 'TypeScript', 'Redux', 'Tailwind CSS', 'Axios'],
  },
  // Add more projects here
];