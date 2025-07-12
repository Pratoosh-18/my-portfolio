"use client"
import { useState } from "react"
import type React from "react"

import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Achievement } from "@/types"
import { achievements } from "@/constants/achievements"

export function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement>(achievements[0])

  return (
    <div className="flex h-full" style={{ backgroundColor: "#1d1f20" }}>
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
            <div className="w-full flex justify-center">
              <Image
                height={1000} width={1000}
                src={selectedAchievement.image || "/placeholder.svg"}
                alt={selectedAchievement.title}
                className="w-[450px] h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
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
