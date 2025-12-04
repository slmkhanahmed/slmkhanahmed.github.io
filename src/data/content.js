import { Github, Linkedin, Mail } from "lucide-react";

export const content = {
  hero: {
    title: "Salman Ahmed Khan",
    role: "Front End Developer",
    subtitle: "Crafting immersive digital experiences with modern technologies and creative design.",
    ctaPrimary: "View Projects",
    ctaSecondary: "Contact Me",
  },
  about: {
    title: "About Me",
    description: [
      "I am a passionate Front End Developer dedicated to building accessible, pixel-perfect, and performant web applications. With a strong foundation in React, JavaScript, and modern CSS frameworks, I transform creative concepts into seamless user experiences.",
      "My journey began with the basics of HTML & CSS, evolving into complex application development with React and the MERN stack. I thrive on solving real-world problems, evidenced by my work on browser extensions and productivity tools.",
      "Beyond coding, I am an active open-source contributor and constantly exploring new technologies like Framer Motion and 3D web graphics to push the boundaries of what's possible on the web.",
      "I believe in continuous learning and am always eager to collaborate on innovative projects that challenge me to grow as an engineer."
    ],
    image: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=1000",
  },
  experience: [
    {
      role: "Front End Developer",
      company: "Freelance / Projects",
      period: "2024 – Present",
      description: "Architecting and developing responsive web applications. Specializing in React ecosystem, performance optimization, and creating intuitive user interfaces.",
    },
    {
      role: "Intermediate in Computer Science (ICS)",
      company: "Civil College",
      period: "2018 – 2020",
      description: "Focused on Computer Science fundamentals, programming logic, and software development principles.",
    },
    {
      role: "Computer Science Matric",
      company: "Ideal Cambridge School",
      period: "Completed",
      description: "Laid the groundwork for technical education with a focus on computer science basics.",
    }
  ],
  projects: [
    {
      title: "GitHub Starred Repositories Search",
      description: "A powerful browser extension that enhances the GitHub experience by allowing users to search and filter their starred repositories instantly. Solves the pain point of managing large collections of stars.",
      tags: ["JavaScript", "Web Extension", "DOM Manipulation", "Performance"],
      link: "https://addons.mozilla.org/en-US/firefox/addon/git-star/",
      github: "https://github.com/slmkhanahmed",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Product Feedback App",
      description: "A comprehensive feedback management system featuring roadmap planning, upvoting, and interactive discussions. Demonstrates complex state management and CRUD operations.",
      tags: ["React", "Tailwind CSS", "Redux", "UX Design"],
      link: "https://product-feedback-app-lovat.vercel.app/",
      github: "https://github.com/slmkhanahmed",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    }
  ],
  skills: [
    "React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion",
    "Git & GitHub", "Redux Toolkit", "Node.js", "MongoDB", "RESTful APIs",
    "Responsive Design", "Web Extensions", "Performance Optimization", "UI/UX Principles",
    "Figma", "VS Code", "NPM/Yarn"
  ],
  softSkills: [
    "Problem Solving", "Communication", "Adaptability", "Team Collaboration", "Time Management"
  ],
  contact: {
    email: "slmkhanahmed@gmail.com",
    phone: "03105404668",
    socials: [
      { name: "LinkedIn", icon: Linkedin, link: "https://www.linkedin.com/in/slmkhanahmed/" },
      { name: "GitHub", icon: Github, link: "https://github.com/slmkhanahmed" },
      { name: "Email", icon: Mail, link: "mailto:slmkhanahmed@gmail.com" },
    ]
  }
};
