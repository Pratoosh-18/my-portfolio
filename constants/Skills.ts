export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

export interface Skill {
  id: string;
  name: string;
  experience: string;
  proficiency: number;
  description: string;
  projects: string[];
  icon: string;
  type: "file";
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      {
        id: "react",
        name: "React.js",
        experience: "3+ years",
        proficiency: 90,
        description:
          "Extensive experience building modern, responsive web applications using React. Proficient in hooks, context API, state management, and component lifecycle. Have built numerous production applications with React.",
        projects: ["RoadLens", "EstateEdge Marketplace", "Portfolio Website"],
        icon: "⚛️",
        type: "file",
      },
      {
        id: "nextjs",
        name: "Next.js",
        experience: "2+ years",
        proficiency: 85,
        description:
          "Strong expertise in Next.js for building full-stack React applications. Experienced with SSR, SSG, API routes, and deployment optimization. Used extensively for production applications.",
        projects: ["RoadLens", "EstateEdge Marketplace"],
        icon: "▲",
        type: "file",
      },
      {
        id: "typescript",
        name: "TypeScript",
        experience: "2+ years",
        proficiency: 80,
        description:
          "Proficient in TypeScript for building type-safe applications. Experience with advanced types, generics, and integrating TypeScript with React and Node.js projects.",
        projects: ["RoadLens", "EstateEdge Marketplace", "Portfolio Website"],
        icon: "📘",
        type: "file",
      },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    skills: [
      {
        id: "nodejs",
        name: "Node.js",
        experience: "3+ years",
        proficiency: 85,
        description:
          "Extensive backend development experience with Node.js. Built RESTful APIs, handled authentication, database integration, and server-side logic for multiple production applications.",
        projects: ["RoadLens API", "EstateEdge Backend", "Chat Application"],
        icon: "🟢",
        type: "file",
      },
      {
        id: "python",
        name: "Python",
        experience: "4+ years",
        proficiency: 88,
        description:
          "Strong Python programming skills for web development, data analysis, and automation. Experience with Django, Flask, data science libraries, and scripting.",
        projects: ["Data Analysis Tools", "Web Scrapers", "Automation Scripts"],
        icon: "🐍",
        type: "file",
      },
    ],
  },
  {
    id: "database",
    name: "Database",
    skills: [
      {
        id: "mongodb",
        name: "MongoDB",
        experience: "2+ years",
        proficiency: 75,
        description:
          "Experience with MongoDB for NoSQL database solutions. Proficient in document modeling, aggregation pipelines, and integration with Node.js applications.",
        projects: ["RoadLens", "Chat Application"],
        icon: "🍃",
        type: "file",
      },
      {
        id: "postgresql",
        name: "PostgreSQL",
        experience: "2+ years",
        proficiency: 80,
        description:
          "Strong relational database skills with PostgreSQL. Experience with complex queries, database design, indexing, and integration with web applications.",
        projects: ["EstateEdge Marketplace", "Analytics Dashboard"],
        icon: "🐘",
        type: "file",
      },
    ],
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    skills: [
      {
        id: "aws",
        name: "AWS",
        experience: "1+ years",
        proficiency: 70,
        description:
          "Experience with AWS cloud services including EC2, S3, Lambda, and RDS. Deployed and managed applications in AWS environment with focus on scalability and security.",
        projects: ["RoadLens Deployment", "File Storage Solutions"],
        icon: "☁️",
        type: "file",
      },
    ],
  },
];
