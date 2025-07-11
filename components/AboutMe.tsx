"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface AboutSection {
  id: string
  name: string
  content: string
}

const aboutSections: AboutSection[] = [
  {
    id: "introduction",
    name: "Introduction",
    content:
      "Hi! I'm Pratoosh Garg, a full-stack developer passionate about building scalable, impactful software. I thrive at the intersection of web development and AI, constantly exploring how technology can solve real-world problems creatively and efficiently.",
  },
  {
    id: "background",
    name: "Background",
    content:
      "Currently pursuing a B.Tech in Computer Science, I've worked across startups and hackathons to develop production-ready apps using React, Node.js, FastAPI, and cloud services. From deploying real-time video chat systems to training AI models for traffic management, I've built and shipped code that matters.",
  },
  {
    id: "skills",
    name: "Skills",
    content:
      "My tech stack includes React.js, Next.js, Node.js, Express, FastAPI, MongoDB, SQL, and AWS. I'm skilled in DevOps tools like Docker and Vercel, and have a strong foundation in Data Structures, System Design, and AI integrations including facial recognition and LLM workflows.",
  },
  {
    id: "interests",
    name: "Interests",
    content:
      "Beyond the code, I'm a gamer at heart whether it's competitive FIFA on my PC or a football match on the field. I enjoy listening to music while brainstorming ideas and have a keen interest in AI ethics, open-source contributions, and discovering new tech communities.",
  },
  {
    id: "goals",
    name: "Goals",
    content:
      "My mission is to engineer tech that enhances lives, whether through smarter cities, accessible education, or safer public spaces. I'm working toward mastering full-stack AI systems, contributing to open-source, and one day leading a team that builds future-defining products.",
  },
];

export function AboutMe() {
  const [selectedSection, setSelectedSection] = useState<AboutSection>(aboutSections[0])

  return (
    <div className="flex h-full" style={{ backgroundColor: "#1c1e1f" }}>
      {/* Left Panel - About Sections */}
      <div className="flex-1 w-64 border-r border-gray-600 flex flex-col flex-shrink-0" style={{ backgroundColor: "#1c1e1f" }}>
        <div className="p-3 border-b border-gray-600">
          <h2 className="text-base font-semibold text-white">About Me</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          {aboutSections.map((section) => (
            <button
              key={section.id}
              className={`w-full p-2 text-left transition-colors flex items-center space-x-3 rounded-md mb-1 ${selectedSection.id === section.id ? "bg-blue-600" : ""
                }`}
              onClick={() => setSelectedSection(section)}
            >
              <Image height={20} width={20} src="/folder-icon.png" alt="Folder" className="w-4 h-4 flex-shrink-0" />
              <span className="text-white text-xs truncate">{section.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Middle Panel - Section Content */}
      <div className="flex-1 border-r border-gray-600 flex flex-col" style={{ backgroundColor: "#1c1e1f" }}>
        <div className="flex items-center p-3 border-b border-gray-600" style={{ backgroundColor: "#1d1f20" }}>
          <div className="flex items-center space-x-2">
            <button className="p-1 hover:bg-gray-700 rounded">
              <ChevronLeft className="w-3 h-3 text-gray-400" />
            </button>
            <button className="p-1 hover:bg-gray-700 rounded">
              <ChevronRight className="w-3 h-3 text-gray-400" />
            </button>
            <span className="text-white font-medium text-sm">{selectedSection.name}</span>
          </div>
        </div>

        <div className="flex-1 p-4 overflow-y-auto">
          <div className="bg-gray-800 rounded-lg p-4">
            <h3 className="text-white font-medium mb-3 text-sm">{selectedSection.name}</h3>
            <p className="text-gray-300 leading-relaxed text-xs">{selectedSection.content}</p>
          </div>
        </div>
      </div>

      {/* Right Panel - Profile Info */}
      <div className="w-80 flex flex-1 flex-col">
        <div className="flex items-center p-3 border-b border-gray-600" style={{ backgroundColor: "#1d1f20" }}>
          <div className="flex items-center space-x-2">
            <button className="p-1 hover:bg-gray-700 rounded">
              <ChevronLeft className="w-3 h-3 text-gray-400" />
            </button>
            <button className="p-1 hover:bg-gray-700 rounded">
              <ChevronRight className="w-3 h-3 text-gray-400" />
            </button>
          </div>
        </div>

        <div className="flex-1 p-3 flex flex-col justify-center items-center" style={{ backgroundColor: "#1d1f20" }}>
          <div className="text-center max-w-full">
            <div className="mb-3">
              <Image
                src="/portfolio/image.jpeg"
                alt="Profile"
                width={200}
                height={200}
                className="w-50 h-50 rounded-lg object-cover mx-auto shadow-lg"
              />
            </div>
            <div className="space-y-1 mb-3">
              <h1 className="text-lg font-bold text-white">Pratoosh Garg</h1>
              <p className="text-sm text-gray-400">Age: 20</p>
              <p className="text-gray-400 text-xs">Full Stack Developer</p>
            </div>

            <div className="text-left bg-gray-800 rounded-lg p-2 w-full">
              <h3 className="text-white font-medium mb-2 text-xs">Information</h3>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400 text-xs">Created</span>
                  <span className="text-white text-right text-xs">18 Oct 2004</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-xs">Modified</span>
                  <span className="text-white text-right text-xs">Never</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-xs">Resolution</span>
                  <span className="text-white text-xs">3840 x 2160 (4K)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
