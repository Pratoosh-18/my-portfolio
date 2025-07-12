export interface Project {
    id: string;
    image: string;
    name: string;
    description: string;
    technologies: string[];
    features: string[];
    url: string;
    type: "folder";
  }
  
  export const projects: Project[] = [
    {
      id: "roadlens",
      image: "/projects/roadlens.png",
      name: "RoadLens",
      description:
        "A comprehensive road monitoring and analysis platform that uses advanced computer vision and AI to detect road conditions, traffic patterns, and infrastructure issues in real-time.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Node.js",
        "MongoDB",
      ],
      features: [
        "Real-time Monitoring",
        "Traffic Density Analysis",
        "Red Light Jumping",
        "No Helmet Detection",
        "Overspeeding Detection",
        "Wrong way Detection",
        "Analytics Dashboard",
        "Responsive UI",
      ],
      url: "https://road-lens.vercel.app/",
      type: "folder",
    },
    {
      id: "estateedge",
      image: "/projects/estateedge.png",
      name: "EstateEdge-Marketplace",
      description:
        "A modern real estate marketplace platform that connects buyers, sellers, and agents. Features advanced search capabilities, virtual tours, and comprehensive property management tools.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Stripe",
      ],
      features: [
        "Property Search",
        "Map Integration",
        "User Auth",
        "Listing Management",
        "Payments",
        "Responsive Design",
      ],
      url: "https://estate-edge-real-estate-marketplace.vercel.app/",
      type: "folder",
    },
  ];
  