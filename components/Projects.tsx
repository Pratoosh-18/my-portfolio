"use client"
import { useState } from "react"
import type React from "react"

import { ChevronLeft, ChevronRight, FileText, ExternalLink } from "lucide-react"
import Image from "next/image"

interface Project {
  id: string
  image : string
  name: string
  description: string
  technologies: string[]
  features: string[]
  url: string
  type: "folder" | "file"
  files?: ProjectFile[]
}

interface ProjectFile {
  id: string
  name: string
  type: "folder" | "file"
  icon: React.ReactNode
  description?: string
}

const projects: Project[] = [
  {
    id: "roadlens",
    image : "/projects/roadlens.png",
    name: "RoadLens",
    description:
      "A comprehensive road monitoring and analysis platform that uses advanced computer vision and AI to detect road conditions, traffic patterns, and infrastructure issues in real-time.",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js", "MongoDB"],
    features: [
      "Real-time road condition monitoring",
      "AI-powered traffic analysis",
      "Infrastructure damage detection",
      "Interactive dashboard with analytics",
      "Mobile-responsive design",
      "RESTful API integration",
    ],
    url: "https://road-lens.vercel.app/",
    type: "folder",
    files: [
      { id: "app", name: "app", type: "folder", icon: <Image height={20} width={20} src="/folder-icon.png" alt="Folder" className="w-4 h-4" /> },
      {
        id: "components",
        name: "components",
        type: "folder",
        icon: <Image height={20} width={20} src="/folder-icon.png" alt="Folder" className="w-4 h-4" />,
      },
      { id: "lib", name: "lib", type: "folder", icon: <Image height={20} width={20} src="/folder-icon.png" alt="Folder" className="w-4 h-4" /> },
      {
        id: "public",
        name: "public",
        type: "folder",
        icon: <Image height={20} width={20} src="/folder-icon.png" alt="Folder" className="w-4 h-4" />,
      },
      {
        id: "styles",
        name: "styles",
        type: "folder",
        icon: <Image height={20} width={20} src="/folder-icon.png" alt="Folder" className="w-4 h-4" />,
      },
      {
        id: "utils",
        name: "utils",
        type: "folder",
        icon: <Image height={20} width={20} src="/folder-icon.png" alt="Folder" className="w-4 h-4" />,
      },
      { id: "package", name: "package.json", type: "file", icon: <FileText className="w-4 h-4 text-gray-400" /> },
      { id: "readme", name: "README.md", type: "file", icon: <FileText className="w-4 h-4 text-gray-400" /> },
      {
        id: "next-config",
        name: "next.config.js",
        type: "file",
        icon: <FileText className="w-4 h-4 text-yellow-500" />,
      },
      {
        id: "tailwind",
        name: "tailwind.config.ts",
        type: "file",
        icon: <FileText className="w-4 h-4 text-cyan-500" />,
      },
    ],
  },
  {
    id: "estateedge",
    image : "/projects/estateedge.png",
    name: "EstateEdge-Marketplace",
    description:
      "A modern real estate marketplace platform that connects buyers, sellers, and agents. Features advanced search capabilities, virtual tours, and comprehensive property management tools.",
    technologies: ["React", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    features: [
      "Advanced property search and filtering",
      "Virtual property tours",
      "User authentication and profiles",
      "Property listing management",
      "Integrated payment processing",
      "Real-time messaging system",
      "Mobile-first responsive design",
    ],
    url: "https://estate-edge-real-estate-marketplace.vercel.app/",
    type: "folder",
    files: [
      { id: "app", name: "app", type: "folder", icon: <Image height={20} width={20} src="/folder-icon.png" alt="Folder" className="w-4 h-4" /> },
      {
        id: "components",
        name: "components",
        type: "folder",
        icon: <Image height={20} width={20} src="/folder-icon.png" alt="Folder" className="w-4 h-4" />,
      },
      {
        id: "prisma",
        name: "prisma",
        type: "folder",
        icon: <Image height={20} width={20} src="/folder-icon.png" alt="Folder" className="w-4 h-4" />,
      },
      {
        id: "public",
        name: "public",
        type: "folder",
        icon: <Image height={20} width={20} src="/folder-icon.png" alt="Folder" className="w-4 h-4" />,
      },
      { id: "lib", name: "lib", type: "folder", icon: <Image height={20} width={20} src="/folder-icon.png" alt="Folder" className="w-4 h-4" /> },
      {
        id: "types",
        name: "types",
        type: "folder",
        icon: <Image height={20} width={20} src="/folder-icon.png" alt="Folder" className="w-4 h-4" />,
      },
      { id: "package", name: "package.json", type: "file", icon: <FileText className="w-4 h-4 text-gray-400" /> },
      { id: "env", name: ".env.local", type: "file", icon: <FileText className="w-4 h-4 text-green-500" /> },
      { id: "schema", name: "schema.prisma", type: "file", icon: <FileText className="w-4 h-4 text-purple-500" /> },
      { id: "readme", name: "README.md", type: "file", icon: <FileText className="w-4 h-4 text-gray-400" /> },
    ],
  },
  {
    id: "chatting-app",
    image : "/projects/estateedge.png",
    name: "Chatting app",
    description: "Real-time chat application with modern UI and seamless messaging experience.",
    technologies: ["React", "Socket.io", "Node.js", "Express"],
    features: ["Real-time messaging", "User authentication", "Group chats", "File sharing"],
    url: "https://example.com",
    type: "folder",
    files: [
      {
        id: "client",
        name: "client",
        type: "folder",
        icon: <Image height={20} width={20} src="/folder-icon.png" alt="Folder" className="w-4 h-4" />,
      },
      {
        id: "server",
        name: "server",
        type: "folder",
        icon: <Image height={20} width={20} src="/folder-icon.png" alt="Folder" className="w-4 h-4" />,
      },
      {
        id: "shared",
        name: "shared",
        type: "folder",
        icon: <Image height={20} width={20} src="/folder-icon.png" alt="Folder" className="w-4 h-4" />,
      },
    ],
  },
  {
    id: "doordash-clone",
    image: "/projects/estateedge.png",
    name: "doordash-clone",
    description: "Food delivery application clone with modern features and responsive design.",
    technologies: ["React Native", "Node.js", "MongoDB", "Express"],
    features: ["Food ordering", "Real-time tracking", "Payment integration", "Restaurant management"],
    url: "https://example.com",
    type: "folder",
    files: [
      {
        id: "mobile",
        name: "mobile",
        type: "folder",
        icon: <Image height={20} width={20} src="/folder-icon.png" alt="Folder" className="w-4 h-4" />,
      },
      {
        id: "backend",
        name: "backend",
        type: "folder",
        icon: <Image height={20} width={20} src="/folder-icon.png" alt="Folder" className="w-4 h-4" />,
      },
      {
        id: "admin",
        name: "admin",
        type: "folder",
        icon: <Image height={20} width={20} src="/folder-icon.png" alt="Folder" className="w-4 h-4" />,
      },
    ],
  },
]

interface ProjectsProps {
  onOpenWebsite?: (url: string, title: string) => void
}

export function Projects({ onOpenWebsite }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0])

  const handleVisitSite = () => {
    if (onOpenWebsite) {
      onOpenWebsite(selectedProject.url, selectedProject.name)
    }
  }

  return (
    <div className="flex h-full" style={{ backgroundColor: "#1d1f20" }}>
      <div className="w-1/4 border-r border-gray-600 flex flex-col flex-shrink-0" style={{ backgroundColor: "#1d1f20" }}>
        <div className="p-3 border-b border-gray-600">
          <h2 className="text-base font-semibold text-white">Projects</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          {projects.map((project) => (
            <button
              key={project.id}
              className={`w-full p-2 text-left transition-colors flex items-center space-x-3 mb-1 ${selectedProject.id === project.id ? "bg-blue-600 rounded-sm" : ""
                }`}
              onClick={() => setSelectedProject(project)}
            >
              <Image height={20} width={20} src="/folder-icon.png" alt="Folder" className="w-4 h-4 flex-shrink-0" />
              <span className="text-white text-xs truncate">{project.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="w-1/4 border-r border-gray-600 flex flex-col flex-shrink-0" style={{ backgroundColor: "#1d1f20" }}>
        <div className="flex items-center p-3 border-b border-gray-600" style={{ backgroundColor: "#1d1f20" }}>
          <div className="flex items-center space-x-2">
            <button className="p-1 hover:bg-gray-700 rounded">
              <ChevronLeft className="w-3 h-3 text-gray-400" />
            </button>
            <button className="p-1 hover:bg-gray-700 rounded">
              <ChevronRight className="w-3 h-3 text-gray-400" />
            </button>
            <span className="text-white font-medium text-sm">Tech Stack</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          <div className="space-y-1">
            {/* Technologies */}
            <div className="mb-4">
              <h3 className="text-white font-medium mb-2 text-sm px-2">Technologies Used</h3>
              {selectedProject.technologies.map((tech, index) => (
                <div key={index} className="flex items-center space-x-3 p-2">
                  <FileText className="w-4 h-4 text-blue-500" />
                  <span className="text-white text-xs">{tech}</span>
                </div>
              ))}
            </div>

            {/* Features */}
            <div>
              <h3 className="text-white font-medium mb-2 text-sm px-2">Key Features</h3>
              {selectedProject.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-2">
                  <FileText className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-xs">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-2/4 flex flex-col min-w-0">
        <div className="flex items-center p-3 border-b border-gray-600" style={{ backgroundColor: "#1d1f20" }}>
          <div className="flex items-center space-x-2">
            <button className="p-1 hover:bg-gray-700 rounded">
              <ChevronLeft className="w-3 h-3 text-gray-400" />
            </button>
            <button className="p-1 hover:bg-gray-700 rounded">
              <ChevronRight className="w-3 h-3 text-gray-400" />
            </button>
            <span className="text-white font-medium text-sm">Project Info</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4" style={{ backgroundColor: "#1d1f20" }}>
          <div className="space-y-4">
            {/* Project Preview Image */}
            <div className="w-full flex justify-center">
              <Image 
                height={1000} width={1000}
                src={selectedProject.image}
                alt={selectedProject.image}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Project Title and Type */}
            <div className="text-center">
              <h1 className="text-lg font-bold text-white">{selectedProject.name}</h1>
              <p className="text-gray-400 text-sm">
                Web Application
              </p>
            </div>

            {/* Information Section */}
            <div>
              <h3 className="text-white font-medium mb-3 text-sm">Information</h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Created</span>
                  <span className="text-white">Monday, 16 June 2025 at 8:07 PM</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-white font-medium mb-2 text-sm">Description</h3>
              <p className="text-gray-300 text-xs leading-relaxed">{selectedProject.description}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4 pt-4">
              <button
                onClick={handleVisitSite}
                className="flex flex-col items-center space-y-1 p-2 hover:bg-gray-700 rounded"
              >
                <ExternalLink className="w-6 h-6 text-gray-400" />
                <span className="text-gray-400 text-xs">Visit Site</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
