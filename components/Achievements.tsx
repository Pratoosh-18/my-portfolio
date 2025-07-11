"use client"
import { useState } from "react"
import type React from "react"

import { ChevronLeft, ChevronRight, Award, Trophy, Star, Medal } from "lucide-react"
import Image from "next/image"

interface Achievement {
  id: string
  title: string
  category: string
  date: string
  description: string
  image: string
  icon: React.ReactNode
}

const achievements: Achievement[] = [
  {
    id: "hackathon-winner",
    title: "Hackathon Winner",
    category: "Competition",
    date: "March 2024",
    description:
      "Won first place in the National Tech Hackathon 2024 for developing an innovative AI-powered road monitoring system. The project impressed judges with its real-world application and technical excellence, competing against 200+ teams from across the country.",
    image: "/placeholder.svg?height=300&width=400",
    icon: <Trophy className="w-4 h-4 text-yellow-500" />,
  },
  {
    id: "certification-aws",
    title: "AWS Certified Developer",
    category: "Certification",
    date: "January 2024",
    description:
      "Successfully obtained AWS Certified Developer - Associate certification, demonstrating proficiency in developing and maintaining applications on the Amazon Web Services platform. This certification validates expertise in core AWS services, security, and deployment best practices.",
    image: "/placeholder.svg?height=300&width=400",
    icon: <Award className="w-4 h-4 text-orange-500" />,
  },
  {
    id: "open-source",
    title: "Open Source Contributor",
    category: "Community",
    date: "Ongoing",
    description:
      "Active contributor to various open-source projects with over 50+ contributions to popular repositories. Maintained several npm packages and helped improve documentation for React-based libraries, contributing to the developer community.",
    image: "/placeholder.svg?height=300&width=400",
    icon: <Star className="w-4 h-4 text-blue-500" />,
  },
  {
    id: "academic-excellence",
    title: "Academic Excellence",
    category: "Education",
    date: "2023",
    description:
      "Graduated with distinction in Computer Science Engineering with a CGPA of 8.7/10. Received the Dean's List recognition for academic excellence and was awarded the Best Student Project award for the final year capstone project.",
    image: "/placeholder.svg?height=300&width=400",
    icon: <Medal className="w-4 h-4 text-purple-500" />,
  },
  {
    id: "coding-contest",
    title: "Coding Contest Champion",
    category: "Competition",
    date: "September 2023",
    description:
      "Secured top 10 position in multiple national-level coding competitions including CodeChef Cook-Off and Codeforces contests. Consistently maintained a 4-star rating on CodeChef and achieved Expert level on Codeforces platform.",
    image: "/placeholder.svg?height=300&width=400",
    icon: <Trophy className="w-4 h-4 text-green-500" />,
  },
]

export function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement>(achievements[0])

  return (
    <div className="flex h-full" style={{ backgroundColor: "#1d1f20" }}>
      {/* Left Panel - Achievements List */}
      <div className="w-80 border-r border-gray-600 flex flex-col flex-shrink-0" style={{ backgroundColor: "#1d1f20" }}>
        <div className="p-3 border-b border-gray-600">
          <h2 className="text-base font-semibold text-white">Achievements</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          {achievements.map((achievement) => (
            <button
              key={achievement.id}
              className={`w-full p-2 text-left transition-colors flex items-center space-x-3 rounded-md mb-1 ${
                selectedAchievement.id === achievement.id ? "bg-blue-600" : ""
              }`}
              onClick={() => setSelectedAchievement(achievement)}
            >
              <Image height={20} width={20} src="/folder-icon.png" alt="Folder" className="w-4 h-4 flex-shrink-0" />
              <span className="text-white text-xs truncate">{achievement.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Right Panel - Achievement Details */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex items-center p-3 border-b border-gray-600" style={{ backgroundColor: "#1d1f20" }}>
          <div className="flex items-center space-x-2">
            <button className="p-1 hover:bg-gray-700 rounded">
              <ChevronLeft className="w-3 h-3 text-gray-400" />
            </button>
            <button className="p-1 hover:bg-gray-700 rounded">
              <ChevronRight className="w-3 h-3 text-gray-400" />
            </button>
            <span className="text-white font-medium text-sm">{selectedAchievement.title}</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4" style={{ backgroundColor: "#1d1f20" }}>
          <div className="space-y-4">
            <div className="w-full">
              <Image
                height={20} width={20}
                src={selectedAchievement.image || "/placeholder.svg"}
                alt={selectedAchievement.title}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                {selectedAchievement.icon}
                <div>
                  <h1 className="text-lg font-bold text-white">{selectedAchievement.title}</h1>
                  <div className="flex items-center space-x-2 text-xs text-gray-400">
                    <span>{selectedAchievement.category}</span>
                    <span>•</span>
                    <span>{selectedAchievement.date}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2 text-sm">Description</h3>
                <p className="text-gray-300 leading-relaxed text-xs">{selectedAchievement.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
