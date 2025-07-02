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
    id: "freelance-developer",
    company: "Freelance",
    position: "Full Stack Developer",
    duration: "Jan 2024 - Present",
    location: "Remote",
    type: "Freelance",
    description:
      "Working as a freelance full-stack developer, creating custom web applications and solutions for various clients. Specializing in React, Next.js, and Node.js development with a focus on modern, scalable architectures.",
    responsibilities: [
      "Develop custom web applications using React and Next.js",
      "Build RESTful APIs and backend services with Node.js",
      "Implement responsive designs and user interfaces",
      "Collaborate with clients to understand requirements and deliver solutions",
      "Maintain and optimize existing applications for performance",
      "Provide technical consultation and project planning",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "AWS", "Vercel"],
    achievements: [
      "Successfully delivered 10+ projects with 100% client satisfaction",
      "Reduced application load times by 40% through optimization",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
    ],
  },
  {
    id: "tech-intern",
    company: "TechCorp Solutions",
    position: "Software Development Intern",
    duration: "Jun 2023 - Dec 2023",
    location: "Bangalore, India",
    type: "Internship",
    description:
      "Worked as a software development intern in a fast-paced startup environment, contributing to the development of a customer relationship management system and learning industry best practices.",
    responsibilities: [
      "Assisted in developing features for the main CRM application",
      "Wrote unit tests and participated in code reviews",
      "Fixed bugs and improved application performance",
      "Collaborated with senior developers on feature implementation",
      "Participated in daily standups and sprint planning meetings",
      "Created technical documentation for new features",
    ],
    technologies: ["React", "JavaScript", "Python", "Django", "MySQL", "Git", "Docker"],
    achievements: [
      "Implemented 5 major features that improved user experience",
      "Reduced bug count by 25% through thorough testing",
      "Received 'Outstanding Intern' recognition",
    ],
  },
  {
    id: "research-assistant",
    company: "University Research Lab",
    position: "Research Assistant",
    duration: "Aug 2022 - May 2023",
    location: "Delhi, India",
    type: "Part-time",
    description:
      "Worked as a research assistant in the Computer Vision lab, contributing to research projects focused on machine learning and image processing applications.",
    responsibilities: [
      "Conducted research on computer vision algorithms",
      "Implemented machine learning models using Python",
      "Analyzed datasets and prepared research reports",
      "Assisted in writing research papers and publications",
      "Presented findings at academic conferences",
      "Mentored junior students in research methodologies",
    ],
    technologies: ["Python", "TensorFlow", "OpenCV", "NumPy", "Pandas", "Jupyter", "MATLAB"],
    achievements: [
      "Co-authored 2 research papers published in international conferences",
      "Developed a novel image classification algorithm with 95% accuracy",
      "Received research excellence award from the university",
    ],
  },
]

export function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<Experience>(experiences[0])

  return (
    <div className="flex h-full" style={{ backgroundColor: "#1d1f20" }}>
      {/* Left Panel - Experience List */}
      <div className="w-64 border-r border-gray-600 flex flex-col flex-shrink-0" style={{ backgroundColor: "#1d1f20" }}>
        <div className="p-3 border-b border-gray-600">
          <h2 className="text-base font-semibold text-white">Experience</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          {experiences.map((experience) => (
            <button
              key={experience.id}
              className={`w-full p-2 text-left transition-colors flex items-center space-x-3 rounded-md mb-1 ${
                selectedExperience.id === experience.id ? "bg-blue-600" : ""
              }`}
              onClick={() => setSelectedExperience(experience)}
            >
              <Image src="/folder-icon.png" alt="Folder" className="w-4 h-4 flex-shrink-0" />
              <span className="text-white text-xs truncate">{experience.position}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Middle Panel - Skills & Technologies */}
      <div className="w-80 border-r border-gray-600 flex flex-col flex-shrink-0" style={{ backgroundColor: "#1d1f20" }}>
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
              {selectedExperience.responsibilities.slice(0, 4).map((responsibility, index) => (
                <div key={index} className="flex items-start space-x-3 p-2">
                  <FileText className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-xs">{responsibility}</span>
                </div>
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
          </div>
        </div>
      </div>
    </div>
  )
}
