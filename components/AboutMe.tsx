"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { AboutSection } from "@/types"
import { aboutSections } from "@/constants/about"

export function AboutMe() {
  const [selectedSection, setSelectedSection] = useState<AboutSection>(aboutSections[0])

  return (
    <div className="flex h-full" style={{ backgroundColor: "#1c1e1f" }}>
      <div className="w-2/8 border-r border-gray-600 flex flex-col flex-shrink-0" style={{ backgroundColor: "#1c1e1f" }}>
        <div className="p-3 border-b border-gray-600">
          <h2 className="text-base font-semibold text-white">About Me</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          {aboutSections.map((section) => (
            <button
              key={section.id}
              className={`w-full p-2 text-left transition-colors flex items-center space-x-3 rounded-md mb-1 ${selectedSection.id === section.id ? "bg-blue-600 rounded-sm" : ""
                }`}
              onClick={() => setSelectedSection(section)}
            >
              <Image height={20} width={20} src="/folder-icon.png" alt="Folder" className="w-4 h-4 flex-shrink-0" />
              <span className="text-white text-xs truncate">{section.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="w-3/8 border-r border-gray-600 flex flex-col" style={{ backgroundColor: "#1c1e1f" }}>
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

      <div className="w-3/8 flex flex-1 flex-col">
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

        <div className="flex-1 flex flex-col justify-center items-center" style={{ backgroundColor: "#1d1f20" }}>
          <div className="text-center w-full px-2">
            <div className="mb-3">
              <Image
                src="/portfolio/image.jpeg"
                alt="Profile"
                width={200}
                height={200}
                className="w-full h-full max-h-[400px] max-w-[400px] rounded-lg object-cover mx-auto shadow-lg"
              />
            </div>
            <div className="space-y-1 mb-3">
              <h1 className="text-lg font-bold text-white">Pratoosh Garg</h1>
              <p className="text-sm text-gray-400">Age: 20</p>
              <p className="text-gray-400 text-xs">Full Stack Developer</p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-3 text-sm">Information</h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Created</span>
                  <span className="text-white">18 Oct 2004</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Modified</span>
                  <span className="text-white">Never</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Resolution</span>
                  <span className="text-white">3840 x 2160 (4K)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
