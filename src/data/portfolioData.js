// src/data/portfolioData.js

export const personalInfo = {
  name: "Prashant Vishwakarma",
  tagline: "Software Developer | Java | MERN Stack",
  subTagline: "Strong OOPs & Backend Skills",
  bio1: "Motivated Computer Science student with experience in Java and MERN full-stack development. Skilled in building scalable applications and solving real-world problems using modern technologies.",
  bio2: "Passionate about backend development and continuously improving problem-solving skills through DSA, system design, and real-world projects.",
  email: "prashantv1902@gmail.com",
  github: "https://github.com/Prashantv19",
  linkedin: "https://www.linkedin.com/in/engineer-prashant",
  profileImage: "/images/profile.jpg",
  resumeLink: "/resume.pdf",
};

export const skills = [
  {
    category: "Languages",
    icon: "💻",
    items: ["Java", "JavaScript", "HTML5", "CSS3"],
  },
  {
    category: "Frameworks",
    icon: "⚙️",
    items: ["React.js", "Node.js", "Express.js", "Spring Boot"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    items: ["MySQL", "MongoDB", "Firebase"],
  },
  {
    category: "Tools",
    icon: "🛠️",
    items: ["Git", "GitHub", "VS Code", "IntelliJ", "Eclipse"],
  },
  {
    category: "Concepts",
    icon: "🧠",
    items: ["OOP", "DSA", "API Integration", "REST APIs"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Hospital Management System",
    description: "Desktop-based system for managing patient records, doctor scheduling, and billing. Built with robust OOP principles and efficient data structures.",
    image: "/images/project1.png",
    tech: ["Java", "OOP", "DSA", "Java Swing"],
    github: "https://github.com/Prashantv19/Hospital-Management-System.git",
    live: null,
    featured: true,
  },
  {
    id: 2,
    title: "Number Guesser Game",
    description: "Console-based interactive game with random number generation and attempt tracking. Demonstrates core Java and object-oriented design patterns.",
    image: "/images/project2.png",
    tech: ["Core Java", "OOP"],
    github: "https://github.com/Prashantv19/GuesserGame.git",
    live: null,
    featured: false,
  },
  {
    id: 3,
    title: "Netflix Clone",
    description: "Responsive front-end streaming UI with dynamic features like image sliders and search functionality. Pixel-perfect recreation of the Netflix interface.",
    image: "/images/project3.png",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Prashantv19/Project-NetflixClone.git",
    live: null,
    featured: false,
  },
  
  {
    id: 4,
    title: "File Handling Python",
    description: "A simple Python project created to practice file handling operations in Python.",
    image: "/images/project4.png",
    tech: ["Python"],
    github: "https://github.com/Prashantv19/File-Handling-Python.git",
    live: null,
    featured: false,
  },

];

export const certificates = [
  {
    id: 1,
    title: "Career Essentials in Software Development",
    issuer: "Microsoft & LinkedIn",
    image: "/images/microsoft-certificate.jpg",
    date: "2024",
    link: "https://drive.google.com/file/d/1tzy638gJgrOQnK3wEAfq9YS1bJHk_gzU/view?usp=drive_link",
  },
  {
    id: 2,
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    image: "/images/ibm-ai-certificate.jpg",
    date: "2024",
    link: "https://drive.google.com/file/d/1vjyhbHgMHn2iITAp49dDOA5QyaRpTcBV/view?usp=sharing",
  },
  {
    id: 3,
    title: "Introduction to AI in Analytics",
    issuer: "L&T EduTech",
    image: "/images/lnt-ai-certificate.jpg",
    date: "2024",
    link: "https://drive.google.com/file/d/1gU56YbGvSxIuu3oITh6prbC_lyZWmTBb/view?usp=sharing",
  },
  {
    id: 4,
    title: "Web Development Fundamentals",
    issuer: "IBM SkillsBuild",
    image: "/images/ibm-web-certificate.jpg",
    date: "2024",
    link: "https://drive.google.com/file/d/1oK-5yypeoEVOM6tpLDDfe4fJzW3mSvmb/view?usp=sharing",
  },
];