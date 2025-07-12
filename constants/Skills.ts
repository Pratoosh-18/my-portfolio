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
        experience: "2.5+ years",
        proficiency: 90,
        description:
          "Built multiple responsive and production-grade web apps using React. Strong in component design, Hooks, Context API, and optimizing render performance using memoization.",
        projects: [
          "RoadLens",
          "EstateEdge Marketplace",
          "ADM Foundation Website",
        ],
        icon: "⚛️",
        type: "file",
      },
      {
        id: "nextjs",
        name: "Next.js",
        experience: "2+ years",
        proficiency: 87,
        description:
          "Used extensively for SSR/SSG, routing, API integration, and performance optimization in scalable applications. Deployed on Vercel for production.",
        projects: ["RoadLens", "EstateEdge Marketplace"],
        icon: "▲",
        type: "file",
      },
      {
        id: "typescript",
        name: "TypeScript",
        experience: "2+ years",
        proficiency: 82,
        description:
          "Proficient in building type-safe frontend and backend apps. Familiar with generics, utility types, and integrating with React and Node projects.",
        projects: ["EstateEdge Marketplace", "Portfolio Website"],
        icon: "📘",
        type: "file",
      },
      {
        id: "tailwind",
        name: "TailwindCSS",
        experience: "1.5+ years",
        proficiency: 80,
        description:
          "Styled modern UIs using Tailwind. Enabled fast design iteration and responsive layouts with utility-first classes.",
        projects: ["RoadLens", "EstateEdge Marketplace"],
        icon: "🎨",
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
        experience: "2.5+ years",
        proficiency: 85,
        description:
          "Developed scalable server-side logic, built RESTful APIs, and handled authentication using Express. Optimized API usage by reducing redundant calls.",
        projects: ["RoadLens", "EstateEdge Backend", "ADM Admin Panel"],
        icon: "🟢",
        type: "file",
      },
      {
        id: "fastapi",
        name: "FastAPI",
        experience: "1.5+ years",
        proficiency: 80,
        description:
          "Created high-performance APIs and AI pipelines with FastAPI. Deployed services on AWS, integrated computer vision models for real-time video analysis.",
        projects: ["Samraksh", "RoadLens Video Inference"],
        icon: "⚡",
        type: "file",
      },
      {
        id: "python",
        name: "Python",
        experience: "4+ years",
        proficiency: 88,
        description:
          "Used extensively for backend scripting, AI models, and computer vision. Integrated OpenCV, DeepFace, and data processing pipelines in multiple hackathon projects.",
        projects: ["Samraksh", "RoadLens", "Automation Tools"],
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
        proficiency: 78,
        description:
          "Implemented NoSQL schemas and aggregation pipelines. Integrated with Mongoose in full-stack apps for real-time data access.",
        projects: ["RoadLens", "EstateEdge Marketplace", "Samraksh"],
        icon: "🍃",
        type: "file",
      },
      {
        id: "postgresql",
        name: "PostgreSQL",
        experience: "1.5+ years",
        proficiency: 80,
        description:
          "Designed relational schemas, optimized SQL queries, and used Prisma ORM for seamless integration with Next.js backend.",
        projects: ["EstateEdge Marketplace"],
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
        proficiency: 75,
        description:
          "Deployed microservices and FastAPI apps using EC2 and S3. Used AWS to handle scalable backends and media storage for real-time applications.",
        projects: ["Samraksh", "RoadLens Backend"],
        icon: "☁️",
        type: "file",
      },
      {
        id: "docker",
        name: "Docker",
        experience: "1.5+ years",
        proficiency: 78,
        description:
          "Containerized backend APIs and AI inference models for local testing and cloud deployment. Used Docker for reproducible dev environments.",
        projects: ["RoadLens", "Samraksh"],
        icon: "🐳",
        type: "file",
      },
      {
        id: "vercel",
        name: "Vercel",
        experience: "2+ years",
        proficiency: 85,
        description:
          "Used for deploying full-stack Next.js applications with custom domains, CI/CD, and serverless functions. Enabled quick iterations for hackathons.",
        projects: ["RoadLens", "EstateEdge Marketplace", "Portfolio"],
        icon: "🚀",
        type: "file",
      },
    ],
  },
  {
    id: "csfundamentals",
    name: "CS Fundamentals",
    skills: [
      {
        id: "dsa",
        name: "DS & Algorithms",
        experience: "3+ years",
        proficiency: 90,
        description:
          "Practiced over 1000 problems on platforms like LeetCode and Codeforces. Strong in problem-solving, optimization, and algorithm design.",
        projects: ["Competitive Programming", "Hackathons"],
        icon: "📊",
        type: "file",
      },
      {
        id: "systemdesign",
        name: "System Design",
        experience: "1.5+ years",
        proficiency: 75,
        description:
          "Designed scalable and distributed systems. Experienced in high-level architecture, microservices, and real-time communication patterns.",
        projects: ["RoadLens", "EstateEdge Messaging"],
        icon: "🧱",
        type: "file",
      },
    ],
  },
];
