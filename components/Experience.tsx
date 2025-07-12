"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Briefcase, Calendar, MapPin, FileText } from "lucide-react"
import Image from "next/image"
import { ExperienceSection, experiences } from "@/constants/Experience"

export function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceSection>(experiences[0])

  return (
    <div className="flex h-full" style={{ backgroundColor: "#1c1e1f" }}>
      <div className="w-1/4 border-r border-gray-600 flex flex-col flex-shrink-0" style={{ backgroundColor: "#1c1e1f" }}>
        <div className="p-3 border-b border-gray-600">
          <h2 className="text-base font-semibold text-white">Experience</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          {experiences.map((experience) => (
            <button
              key={experience.id}
              className={`w-full p-2 text-left transition-colors flex items-center space-x-3 rounded-md mb-1 ${selectedExperience.id === experience.id ? "bg-blue-600 rounded-sm" : ""
                }`}
              onClick={() => {
                setSelectedExperience(experience)
              }}
            >
              <Image height={20} width={20} src="/folder-icon.png" alt="Folder" className="w-4 h-4 flex-shrink-0" />
              <span className="text-white text-xs truncate">{experience.position}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="w-1/4 border-r border-gray-600 flex flex-col flex-shrink-0" style={{ backgroundColor: "#1c1e1f" }}>
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
            <div className="mb-4">
              <h3 className="text-white font-medium mb-2 text-sm px-2">Technologies & Tools</h3>
              {selectedExperience.technologies.map((tech, index) => (
                <div key={index} className="flex items-center space-x-3 p-2">
                  <Image height={12} width={12} src={"/file-icon.png"} alt="file-icon"/>
                  <span className="text-white text-xs">{tech}</span>
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