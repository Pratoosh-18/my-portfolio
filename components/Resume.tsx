"use client"
import { ChevronLeft, ChevronRight, Download, ExternalLink } from "lucide-react"

export function Resume() {
  const resumeUrl = "https://drive.google.com/file/d/1KVGnHH3SafYMOA2DXa1QFQthammEKsQ1/view?usp=drive_link"
  const embedUrl = "https://drive.google.com/file/d/1KVGnHH3SafYMOA2DXa1QFQthammEKsQ1/preview"

  const handleDownload = () => {
    window.open(resumeUrl, "_blank")
  }

  const handleOpenExternal = () => {
    window.open(resumeUrl, "_blank")
  }

  return (
    <div className="flex flex-col h-full" style={{ backgroundColor: "#1d1f20" }}>
      {/* Toolbar */}
      <div
        className="flex items-center justify-between p-3 border-b border-gray-600"
        style={{ backgroundColor: "#1d1f20" }}
      >
        <div className="flex items-center space-x-2">
          <button className="p-1 hover:bg-gray-700 rounded">
            <ChevronLeft className="w-3 h-3 text-gray-400" />
          </button>
          <button className="p-1 hover:bg-gray-700 rounded">
            <ChevronRight className="w-3 h-3 text-gray-400" />
          </button>
          <span className="text-white font-medium text-sm">Resume - Pratoosh Garg</span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleDownload}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-xs transition-colors"
          >
            <Download className="w-3 h-3" />
            <span>Download</span>
          </button>
          <button
            onClick={handleOpenExternal}
            className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-3 py-1.5 rounded text-xs transition-colors"
          >
            <ExternalLink className="w-3 h-3" />
            <span>Open in Drive</span>
          </button>
        </div>
      </div>

      {/* Resume Content */}
      <div className="flex-1 p-4" style={{ backgroundColor: "#1d1f20" }}>
        <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-lg">
          <iframe src={embedUrl} className="w-full h-full border-0" title="Resume - Pratoosh Garg" allow="autoplay" />
        </div>
      </div>
    </div>
  )
}
