"use client"
import { useState, useEffect } from "react"
import { FileText } from "lucide-react"

export function Notepad() {
  const [content, setContent] = useState("")
  const [title, setTitle] = useState("Untitled")

  useEffect(() => {
    const now = new Date()
    const timeString = now.toLocaleString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
    setTitle(`${timeString}`)
  }, [])

  return (
    <div className="flex flex-col h-full text-white" style={{ backgroundColor: "#1e1e1e" }}>
      {/* Header */}
      <div
        className="flex items-center justify-between p-4 border-b border-gray-700"
        style={{ backgroundColor: "#1e1e1e" }}
      >
        <div className="flex items-center space-x-3">
          <FileText className="w-5 h-5 text-yellow-500" />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-transparent text-white text-lg font-medium border-none outline-none"
            style={{ backgroundColor: "transparent" }}
            placeholder="Untitled"
          />
        </div>
      </div>

      {/* Date/Time Display */}
      <div className="px-4 py-2 border-b border-gray-800" style={{ backgroundColor: "#1e1e1e" }}>
        <div className="text-right text-sm text-gray-400">
          {new Date().toLocaleString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })}
        </div>
      </div>

      {/* Text Area */}
      <div className="flex-1 p-4" style={{ backgroundColor: "#1e1e1e" }}>
        <div className="relative h-full">
          <div className="absolute left-0 top-0 w-1 h-6 bg-yellow-500"></div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-full resize-none border-none outline-none pl-6 text-base leading-relaxed text-white"
            style={{ backgroundColor: "#1e1e1e" }}
            placeholder="Start typing..."
            autoFocus
          />
        </div>
      </div>
    </div>
  )
}
