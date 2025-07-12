"use client"
import { useState } from "react"
import type React from "react"
import { ChevronLeft, ChevronRight, FileText } from "lucide-react"
import Image from "next/image"
import { Skill, skillCategories, SkillCategory } from "@/constants/Skills"


export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>(skillCategories[0])
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(selectedCategory.skills[0])

  const handleCategoryChange = (category: SkillCategory) => {
    setSelectedCategory(category)
    setSelectedSkill(category.skills[0] || null)
  }

  return (
    <div className="flex h-full" style={{ backgroundColor: "#1d1f20" }}>
      <div className="w-1/4 border-r border-gray-600 flex flex-col flex-shrink-0" style={{ backgroundColor: "#1d1f20" }}>
        <div className="p-3 border-b border-gray-600">
          <h2 className="text-base font-semibold text-white">Skills & Expertise</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              className={`w-full p-2 text-left transition-colors flex items-center space-x-3 mb-1 ${
                selectedCategory.id === category.id ? "bg-blue-600 rounded-sm" : ""
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              <Image height={20} width={20} src="/folder-icon.png" alt="Folder" className="w-4 h-4 flex-shrink-0" />
              <span className="text-white text-xs truncate">{category.name}</span>
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
            <span className="text-white font-medium text-sm">{selectedCategory.name}</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          <div className="space-y-1">
            {selectedCategory.skills.map((skill) => (
              <div
                key={skill.id}
                className={`flex items-center space-x-3 p-2 cursor-pointer transition-colors ${
                  selectedSkill?.id === skill.id ? "bg-blue-600 rounded-sm" : ""
                }`}
                onClick={() => setSelectedSkill(skill)}
              >
                <Image height={12} width={12} src={"/file-icon.png"} alt="file-icon"/>
                <div className="flex-1 min-w-0">
                  <span className="text-white text-xs block truncate">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-2/4 flex flex-col min-w-0" style={{ backgroundColor: "#1d1f20" }}>
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
