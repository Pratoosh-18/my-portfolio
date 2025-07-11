export interface ExperienceSection {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export const experiences: ExperienceSection[] = [
  {
    id: "fullstack-engineer",
    company: "CodeFeast",
    position: "Software Development Engineer",
    duration: "Jul 2024 – Present",
    location: "Remote",
    type: "Full-time",
    description:
      "Contributed to 7+ international projects as a full-stack developer, building performant, production-ready applications using React, Next.js, and Node.js. Led AI-integrated workflows, drove frontend optimization, and played a pivotal role in hiring.",
    responsibilities: [
      "Developed full-stack features and production-grade applications using React.js, Next.js, and Node.js",
      "Led end-to-end development and deployment of web and AI-based platforms",
      "Wrote PRDs for AI model training pipelines, boosting LLM test accuracy to 95%",
      "Reduced frontend lag by identifying render inefficiencies and optimizing API calls",
      "Assessed 30+ candidates through technical interviews focused on system design and core dev skills",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "FastAPI",
      "MongoDB",
      "Vercel",
      "Docker",
      "AWS",
    ],
    achievements: [
      "Optimized client applications, reducing redundant API calls by 30%",
      "Drove AI workflow performance, achieving 95% model accuracy across use cases",
      "Earned Letter of Recommendation with 9/10 rating for performance and reliability",
    ],
  },
  {
    id: "system-engineer",
    company: "Horyzen",
    position: "System Engineer",
    duration: "Jan 2025 – Mar 2025",
    location: "Remote",
    type: "Contract",
    description:
      "Engineered scalable backends and real-time systems for video conferencing and streaming services. Focused on optimizing AWS-based infrastructure and frontend-backend communication across monorepos.",
    responsibilities: [
      "Developed FastAPI microservices and optimized performance on AWS",
      "Improved monorepo code sharing and reduced cost by optimizing API state transfer",
      "Integrated real-time chat, video, and streaming services with sub-100ms latency",
    ],
    technologies: [
      "FastAPI",
      "AWS",
      "Docker",
      "React",
      "Microfrontends",
      "Redis",
    ],
    achievements: [
      "Achieved seamless real-time communication with latency under 100ms",
      "Reduced infrastructure and API costs by 20%",
    ],
  },
  {
    id: "web-dev-intern",
    company: "ADM Education and Welfare Society",
    position: "Full Stack Web Developer",
    duration: "May 2024 – Jul 2024",
    location: "Remote",
    type: "Internship",
    description:
      "Built and deployed a high-performance React-based website for a social foundation, enhancing UX and enabling non-technical staff to manage content efficiently.",
    responsibilities: [
      "Developed scalable React.js frontend with improved responsiveness",
      "Created admin panel with real-time content management features",
      "Improved UI/UX and reduced page load time by 40%",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Vercel"],
    achievements: [
      "Enabled non-tech users to update content 5x faster via custom admin panel",
      "Boosted performance and SEO through optimized code and deployment",
    ],
  },
  {
    id: "hackathon-ai-projects",
    company: "Hackathons (UHack, HackQuest)",
    position: "AI/ML Engineer",
    duration: "2024",
    location: "India",
    type: "Hackathons",
    description:
      "Led AI innovation in large-scale hackathons, developing computer vision and real-time analytics systems for public safety and traffic monitoring. Delivered award-winning prototypes using OpenCV, Deep Learning, and FastAPI.",
    responsibilities: [
      "Designed RoadLens, a smart traffic analytics system using real CCTV data and OpenCV",
      "Built Samraksh, an AI-based crowd and threat detection platform for public events",
      "Implemented real-time face and license plate recognition with DeepFace and Python",
    ],
    technologies: [
      "OpenCV",
      "Python",
      "React",
      "DeepFace",
      "FastAPI",
      "Docker",
    ],
    achievements: [
      "Secured 2nd place at UHack 3.0 (₹20,000) and 3rd at HackQuest (₹10,000)",
      "Processed video feeds of 10,000+ people per frame for crowd safety analysis",
      "Delivered real-time threat detection systems for mass gatherings",
    ],
  },
];
