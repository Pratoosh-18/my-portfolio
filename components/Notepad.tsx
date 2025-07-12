"use client"
import { useState } from "react"

export function Notepad() {
  const [content, setContent] = useState("")
  const [title, setTitle] = useState("")

  return (
    <div className="flex flex-col h-full text-white" style={{ backgroundColor: "#1e1e1e" }}>
      <div
        className="flex items-center justify-between p-4 border-b border-gray-700"
        style={{ backgroundColor: "#1e1e1e" }}
      >
        <div className="flex items-center space-x-3">
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

      <div className="flex-1 p-4" style={{ backgroundColor: "#1e1e1e" }}>
        <div className="relative h-full">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-full resize-none border-none outline-none text-base leading-relaxed text-white"
            style={{ backgroundColor: "#1e1e1e" }}
            placeholder="Start typing..."
            autoFocus
          />
        </div>
      </div>
    </div>
  )
}
