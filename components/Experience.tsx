"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Briefcase, Calendar, MapPin, FileText } from "lucide-react"
import Image from "next/image"

interface Experience {
  id: string
  company: string
  position: string
  duration: string
  location: string
  type: string
  description: string
  responsibilities: string[]
  technologies: string[]
  achievements: string[]
}

const experiences: Experience[] = [
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
    technologies: ["React", "Next.js", "Node.js", "FastAPI", "MongoDB", "Vercel", "Docker", "AWS"],
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
    technologies: ["FastAPI", "AWS", "Docker", "React", "Microfrontends", "Redis"],
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
    technologies: ["OpenCV", "Python", "React", "DeepFace", "FastAPI", "Docker"],
    achievements: [
      "Secured 2nd place at UHack 3.0 (₹20,000) and 3rd at HackQuest (₹10,000)",
      "Processed video feeds of 10,000+ people per frame for crowd safety analysis",
      "Delivered real-time threat detection systems for mass gatherings",
    ],
  },
];


export function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<Experience>(experiences[0])
  const [selectedDetail, setSelectedDetail] = useState<{
    type: 'responsibility' | 'achievement' | null
    content: string
  }>({ type: null, content: '' })

  const getShortenedText = (text: string) => {
    const words = text.split(' ')
    if (words.length <= 4) return text
    return words.slice(0, 4).join(' ') + '...'
  }

  return (
    <div className="flex h-full" style={{ backgroundColor: "#1c1e1f" }}>
      {/* Left Panel - Experience List (unchanged) */}
      <div className="flex-1 w-64 border-r border-gray-600 flex flex-col flex-shrink-0" style={{ backgroundColor: "#1c1e1f" }}>
        <div className="p-3 border-b border-gray-600">
          <h2 className="text-base font-semibold text-white">Experience</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          {experiences.map((experience) => (
            <button
              key={experience.id}
              className={`w-full p-2 text-left transition-colors flex items-center space-x-3 rounded-md mb-1 ${selectedExperience.id === experience.id ? "bg-blue-600" : ""
                }`}
              onClick={() => {
                setSelectedExperience(experience)
                setSelectedDetail({ type: null, content: '' }) // Reset detail when changing experience
              }}
            >
              <Image height={20} width={20} src="/folder-icon.png" alt="Folder" className="w-4 h-4 flex-shrink-0" />
              <span className="text-white text-xs truncate">{experience.position}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Middle Panel - Skills & Technologies */}
      <div className="flex-1 w-80 border-r border-gray-600 flex flex-col flex-shrink-0" style={{ backgroundColor: "#1c1e1f" }}>
        <div className="flex items-center p-3 border-b border-gray-600" style={{ backgroundColor: "#1d1f20" }}>
          <div className="flex items-center space-x-2">
            <button className="p-1 hover:bg-gray-700 rounded">
              <ChevronLeft className="w-3 h-3 text-gray-400" />
            </button>
            <button className="p-1 hover:bg-gray-700 rounded">
              <ChevronRight className="w-3 h-3 text-gray-400" />
            </button>
            <span className="text-white font-medium text-sm">Skills Used</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          <div className="space-y-1">
            {/* Technologies */}
            <div className="mb-4">
              <h3 className="text-white font-medium mb-2 text-sm px-2">Technologies & Tools</h3>
              {selectedExperience.technologies.map((tech, index) => (
                <div key={index} className="flex items-center space-x-3 p-2">
                  <FileText className="w-4 h-4 text-blue-500" />
                  <span className="text-white text-xs">{tech}</span>
                </div>
              ))}
            </div>

            {/* Key Responsibilities */}
            <div>
              <h3 className="text-white font-medium mb-2 text-sm px-2">Key Responsibilities</h3>
              {selectedExperience.responsibilities.map((responsibility, index) => (
                <button
                  key={index}
                  className={`w-full text-left flex items-start space-x-3 p-2 rounded-md ${selectedDetail.type === 'responsibility' && selectedDetail.content === responsibility
                      ? 'bg-gray-700'
                      : 'hover:bg-gray-700'
                    }`}
                  onClick={() => setSelectedDetail({
                    type: 'responsibility',
                    content: responsibility
                  })}
                >
                  <FileText className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-xs">{getShortenedText(responsibility)}</span>
                </button>
              ))}
            </div>

            {/* Key Achievements */}
            <div className="mt-4">
              <h3 className="text-white font-medium mb-2 text-sm px-2">Key Achievements</h3>
              {selectedExperience.achievements.map((achievement, index) => (
                <button
                  key={index}
                  className={`w-full text-left flex items-start space-x-3 p-2 rounded-md ${selectedDetail.type === 'achievement' && selectedDetail.content === achievement
                      ? 'bg-gray-700'
                      : 'hover:bg-gray-700'
                    }`}
                  onClick={() => setSelectedDetail({
                    type: 'achievement',
                    content: achievement
                  })}
                >
                  <FileText className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-xs">{getShortenedText(achievement)}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Experience Details */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex items-center p-3 border-b border-gray-600" style={{ backgroundColor: "#1d1f20" }}>
          <div className="flex items-center space-x-2">
            <button className="p-1 hover:bg-gray-700 rounded">
              <ChevronLeft className="w-3 h-3 text-gray-400" />
            </button>
            <button className="p-1 hover:bg-gray-700 rounded">
              <ChevronRight className="w-3 h-3 text-gray-400" />
            </button>
            <span className="text-white font-medium text-sm">{selectedExperience.position}</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4" style={{ backgroundColor: "#1d1f20" }}>
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <Briefcase className="w-6 h-6 text-blue-500" />
                <div>
                  <h1 className="text-lg font-bold text-white">{selectedExperience.position}</h1>
                  <h2 className="text-sm font-medium text-blue-400">{selectedExperience.company}</h2>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-3 h-3 text-gray-400" />
                  <span className="text-gray-300">{selectedExperience.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-3 h-3 text-gray-400" />
                  <span className="text-gray-300">{selectedExperience.location}</span>
                </div>
              </div>

              <div className="mt-3">
                <span className="inline-block px-2 py-1 bg-blue-600 text-white rounded text-xs">
                  {selectedExperience.type}
                </span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-white font-medium mb-2 text-sm">Description</h3>
              <p className="text-gray-300 leading-relaxed text-xs">{selectedExperience.description}</p>
            </div>

            {/* Selected Detail Section */}
            {selectedDetail.type && (
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-white font-medium mb-2 text-sm">
                  {selectedDetail.type === 'responsibility' ? 'Responsibility Detail' : 'Achievement Detail'}
                </h3>
                <p className="text-gray-300 text-xs">
                  {selectedDetail.content}
                </p>
              </div>
            )}

            {/* All Responsibilities (now hidden by default, shown when nothing is selected) */}
            {!selectedDetail.type && (
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-white font-medium mb-2 text-sm">All Responsibilities</h3>
                <ul className="space-y-1">
                  {selectedExperience.responsibilities.map((responsibility, index) => (
                    <li key={index} className="text-gray-300 text-xs flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Key Achievements (now hidden by default, shown when nothing is selected) */}
            {!selectedDetail.type && (
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-white font-medium mb-2 text-sm">Key Achievements</h3>
                <ul className="space-y-1">
                  {selectedExperience.achievements.map((achievement, index) => (
                    <li key={index} className="text-gray-300 text-xs flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}