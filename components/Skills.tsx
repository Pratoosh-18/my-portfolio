"use client"
import { useState } from "react"
import type React from "react"
import { ChevronLeft, ChevronRight, FileText } from "lucide-react"

interface SkillCategory {
  id: string
  name: string
  skills: Skill[]
}

interface Skill {
  id: string
  name: string
  experience: string
  proficiency: number
  description: string
  projects: string[]
  icon: string
  type: "file"
  fileIcon: React.ReactNode
}

const skillCategories: SkillCategory[] = [
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
        fileIcon: <FileText className="w-4 h-4 text-cyan-500" />,
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
        fileIcon: <FileText className="w-4 h-4 text-gray-400" />,
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
        fileIcon: <FileText className="w-4 h-4 text-blue-500" />,
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
        fileIcon: <FileText className="w-4 h-4 text-green-500" />,
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
        fileIcon: <FileText className="w-4 h-4 text-yellow-500" />,
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
        fileIcon: <FileText className="w-4 h-4 text-green-600" />,
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
        fileIcon: <FileText className="w-4 h-4 text-blue-600" />,
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
        fileIcon: <FileText className="w-4 h-4 text-orange-500" />,
      },
    ],
  },
]

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>(skillCategories[0])
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(selectedCategory.skills[0])

  const handleCategoryChange = (category: SkillCategory) => {
    setSelectedCategory(category)
    setSelectedSkill(category.skills[0] || null)
  }

  return (
    <div className="flex h-full" style={{ backgroundColor: "#1d1f20" }}>
      {/* Left Panel - Categories */}
      <div className="w-64 border-r border-gray-600 flex flex-col flex-shrink-0" style={{ backgroundColor: "#1d1f20" }}>
        <div className="p-3 border-b border-gray-600">
          <h2 className="text-base font-semibold text-white">Skills & Expertise</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              className={`w-full p-2 text-left transition-colors flex items-center space-x-3 mb-1 ${
                selectedCategory.id === category.id ? "bg-blue-600" : ""
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              <img src="/folder-icon.png" alt="Folder" className="w-4 h-4 flex-shrink-0" />
              <span className="text-white text-xs truncate">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Middle Panel - Skills List */}
      <div className="w-80 border-r border-gray-600 flex flex-col flex-shrink-0" style={{ backgroundColor: "#1d1f20" }}>
        <div className="flex items-center p-3 border-b border-gray-600" style={{ backgroundColor: "#1d1f20" }}>
          <div className="flex items-center space-x-2">
            <button className="p-1 hover:bg-gray-700 rounded">
              <ChevronLeft className="w-3 h-3 text-gray-400" />
            </button>
            <button className="p-1 hover:bg-gray-700 rounded">
              <ChevronRight className="w-3 h-3 text-gray-400" />
            </button>
            <span className="text-white font-medium text-sm">{selectedCategory.name}</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          <div className="space-y-1">
            {selectedCategory.skills.map((skill) => (
              <div
                key={skill.id}
                className={`flex items-center space-x-3 p-2 cursor-pointer transition-colors ${
                  selectedSkill?.id === skill.id ? "bg-blue-600" : ""
                }`}
                onClick={() => setSelectedSkill(skill)}
              >
                {skill.fileIcon}
                <div className="flex-1 min-w-0">
                  <span className="text-white text-xs block truncate">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel - Skill Details */}
      <div className="flex-1 flex flex-col min-w-0" style={{ backgroundColor: "#1d1f20" }}>
        {selectedSkill ? (
          <>
            <div className="p-4 border-b border-gray-600">
              <div className="flex items-center space-x-3 mb-3">
                <button className="p-1 hover:bg-gray-700 rounded">
                  <ChevronLeft className="w-3 h-3 text-gray-400" />
                </button>
                <button className="p-1 hover:bg-gray-700 rounded">
                  <ChevronRight className="w-3 h-3 text-gray-400" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-4">
                {/* Skill Icon Preview */}
                <div className="w-full flex justify-center">
                  <div className="w-32 h-32 bg-gray-700 rounded-lg flex items-center justify-center">
                    <div className="text-4xl">{selectedSkill.icon}</div>
                  </div>
                </div>

                {/* Skill Title and Type */}
                <div className="text-center">
                  <h1 className="text-lg font-bold text-white">{selectedSkill.name}</h1>
                  <p className="text-gray-400 text-sm">Programming Skill - {selectedSkill.proficiency}% proficiency</p>
                </div>

                {/* Information Section */}
                <div>
                  <h3 className="text-white font-medium mb-3 text-sm">Information</h3>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Experience</span>
                      <span className="text-white">{selectedSkill.experience}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Proficiency</span>
                      <span className="text-white">{selectedSkill.proficiency}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Projects</span>
                      <span className="text-white">{selectedSkill.projects.length} items</span>
                    </div>
                  </div>
                </div>

                {/* Tags Section */}
                <div>
                  <h3 className="text-white font-medium mb-2 text-sm">Tags</h3>
                  <div className="flex flex-wrap gap-1 mb-2">
                    <span className="px-2 py-1 bg-blue-600 text-white rounded text-xs">Programming</span>
                    <span className="px-2 py-1 bg-blue-600 text-white rounded text-xs">Development</span>
                  </div>
                  <button className="text-gray-400 text-xs">Add Tags...</button>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center space-x-4 pt-4">
                  <button className="flex flex-col items-center space-y-1 p-2 hover:bg-gray-700 rounded">
                    <span className="text-gray-400 text-xs">More...</span>
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-400 text-xs">Select a skill to view details</p>
          </div>
        )}
      </div>
    </div>
  )
}
