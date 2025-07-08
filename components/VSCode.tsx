"use client"
import { useState } from "react"

import { Search, GitBranch, Play, Square, Settings, Folder, Plus, X } from "lucide-react"

interface File {
  id: string
  name: string
  content: string
  language: string
}

const getLanguageFromExtension = (filename: string): string => {
  const ext = filename.split(".").pop()?.toLowerCase()
  const languageMap: Record<string, string> = {
    js: "javascript",
    jsx: "javascript",
    ts: "typescript",
    tsx: "typescript",
    py: "python",
    html: "html",
    css: "css",
    json: "json",
    md: "markdown",
    txt: "text",
  }
  return languageMap[ext || ""] || "text"
}

const getFileIcon = (language: string) => {
  const iconMap: Record<string, string> = {
    javascript: "🟨",
    typescript: "🔷",
    python: "🐍",
    html: "🌐",
    css: "🎨",
    json: "📋",
    markdown: "📝",
    text: "📄",
  }
  return iconMap[language] || "📄"
}

export function VSCode() {
  const [files, setFiles] = useState<File[]>([
    {
      id: "1",
      name: "Untitled-1.js",
      content:
        "// Welcome to VS Code\nconsole.log('Hello, World!');\n\nfunction greet(name) {\n  return `Hello, ${name}!`;\n}\n\nconst message = greet('Developer');\nconsole.log(message);",
      language: "javascript",
    },
  ])
  const [activeFileId, setActiveFileId] = useState("1")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [editingFileId, setEditingFileId] = useState<string | null>(null)
  const [editingFileName, setEditingFileName] = useState("")
  const [cursorPosition, setCursorPosition] = useState({ line: 1, column: 1 })

  const activeFile = files.find((f) => f.id === activeFileId)

  const updateFileContent = (content: string) => {
    setFiles(files.map((f) => (f.id === activeFileId ? { ...f, content } : f)))
  }

  const startEditingFileName = (fileId: string, currentName: string) => {
    setEditingFileId(fileId)
    setEditingFileName(currentName)
  }

  const saveFileName = () => {
    if (editingFileId && editingFileName.trim()) {
      const language = getLanguageFromExtension(editingFileName)
      setFiles(files.map((f) => (f.id === editingFileId ? { ...f, name: editingFileName.trim(), language } : f)))
    }
    setEditingFileId(null)
    setEditingFileName("")
  }

  const cancelEditingFileName = () => {
    setEditingFileId(null)
    setEditingFileName("")
  }

  const createNewFile = () => {
    const newFile: File = {
      id: Date.now().toString(),
      name: `Untitled-${files.length + 1}.js`,
      content: "",
      language: "javascript",
    }
    setFiles([...files, newFile])
    setActiveFileId(newFile.id)
  }

  const closeFile = (fileId: string) => {
    if (files.length <= 1) return // Don't close if it's the last file

    const newFiles = files.filter((f) => f.id !== fileId)
    setFiles(newFiles)

    if (activeFileId === fileId && newFiles.length > 0) {
      setActiveFileId(newFiles[0].id)
    }
  }

  const deleteFile = (fileId: string) => {
    if (files.length <= 1) return // Don't delete if it's the last file

    const newFiles = files.filter((f) => f.id !== fileId)
    setFiles(newFiles)

    if (activeFileId === fileId && newFiles.length > 0) {
      setActiveFileId(newFiles[0].id)
    }
  }

  // Generate line numbers based on content
  const generateLineNumbers = (content: string) => {
    const lines = content.split("\n")
    return lines.map((_, index) => (
      <div key={index} className="text-gray-500 text-sm text-right pr-2 select-none leading-6">
        {index + 1}
      </div>
    ))
  }

  const updateCursorPosition = (e: React.ChangeEvent<HTMLTextAreaElement> | React.SyntheticEvent<HTMLTextAreaElement>) => {
    const value = e.currentTarget.value
    const caretIndex = e.currentTarget.selectionStart

    const lines = value.substring(0, caretIndex).split("\n")
    const line = lines.length
    const column = lines[lines.length - 1].length + 1 // 1-based index

    setCursorPosition({ line, column })
  }


  return (
    <div className="flex h-full bg-gray-900 text-white">
      {/* Activity Bar */}
      <div className="w-12 bg-gray-900 border-r border-gray-700 flex flex-col items-center py-2 space-y-4 flex-shrink-0">
        <button className="p-2 hover:bg-gray-700 rounded">
          <Folder className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-700 rounded">
          <Search className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-700 rounded">
          <GitBranch className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-700 rounded">
          <Play className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-700 rounded">
          <Square className="w-5 h-5" />
        </button>
        <div className="flex-1"></div>
        <button className="p-2 hover:bg-gray-700 rounded">
          <Settings className="w-5 h-5" />
        </button>
      </div>

      {/* File Explorer Sidebar */}
      <div
        className={`${sidebarCollapsed ? "w-0" : "w-64"} bg-gray-800 border-r border-gray-700 flex flex-col transition-all duration-200 overflow-hidden`}
      >
        {!sidebarCollapsed && (
          <div className="flex-1 p-3">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-semibold text-gray-400 uppercase">Explorer</h3>
              <div className="flex items-center space-x-1">
                <button onClick={createNewFile} className="p-1 hover:bg-gray-700 rounded">
                  <Plus className="w-3 h-3" />
                </button>
                <button onClick={() => setSidebarCollapsed(true)} className="p-1 hover:bg-gray-700 rounded">
                  <X className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="space-y-1">
              {files.map((file) => (
                <div
                  key={file.id}
                  className={`flex items-center space-x-2 p-1 rounded cursor-pointer group ${activeFileId === file.id ? "bg-gray-700" : "hover:bg-gray-700"
                    }`}
                  onClick={() => setActiveFileId(file.id)}
                >
                  <span className="text-sm">{getFileIcon(file.language)}</span>
                  {editingFileId === file.id ? (
                    <input
                      type="text"
                      value={editingFileName}
                      onChange={(e) => setEditingFileName(e.target.value)}
                      onBlur={saveFileName}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          saveFileName()
                        }
                        if (e.key === "Escape") {
                          cancelEditingFileName()
                        }
                      }}
                      className="bg-gray-600 text-white text-sm px-1 rounded flex-1 outline-none"
                      autoFocus
                    />
                  ) : (
                    <span className="text-sm flex-1" onDoubleClick={() => startEditingFileName(file.id, file.name)}>
                      {file.name}
                    </span>
                  )}
                  {files.length > 1 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        deleteFile(file.id)
                      }}
                      className="opacity-0 group-hover:opacity-100 p-0.5 hover:bg-gray-600 rounded"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="h-8 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            {sidebarCollapsed && (
              <button onClick={() => setSidebarCollapsed(false)} className="text-gray-400 hover:text-white">
                <Folder className="w-4 h-4" />
              </button>
            )}
            <button className="text-gray-400 hover:text-white">←</button>
            <button className="text-gray-400 hover:text-white">→</button>
          </div>

          <div className="flex-1 max-w-md mx-4">
            <div className="bg-gray-700 rounded px-3 py-1 flex items-center space-x-2">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-sm text-white placeholder-gray-400 border-none outline-none flex-1"
              />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-gray-800 border-b border-gray-700 flex">
          {files.map((file) => (
            <div
              key={file.id}
              className={`flex items-center space-x-2 px-3 py-2 border-r border-gray-700 cursor-pointer ${activeFileId === file.id ? "bg-gray-900" : "hover:bg-gray-700"
                }`}
              onClick={() => setActiveFileId(file.id)}
            >
              <span className="text-sm">{getFileIcon(file.language)}</span>
              <span className="text-sm">{file.name}</span>
              {files.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    closeFile(file.id)
                  }}
                  className="p-0.5 hover:bg-gray-600 rounded"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Editor */}
        <div className="flex-1 flex bg-gray-900">
          {/* Line Numbers */}
          <div className="w-12 bg-gray-800 border-r border-gray-700 pt-4 pb-4 overflow-hidden">
            {generateLineNumbers(activeFile?.content || "")}
          </div>

          {/* Text Area */}
          <div className="flex-1">
            <textarea
              value={activeFile?.content || ""}
              onChange={(e) => {
                updateFileContent(e.target.value)
                updateCursorPosition(e)
              }}
              className="w-full h-full bg-gray-900 text-white pl-4 pt-4 pr-4 pb-4 resize-none border-none outline-none font-mono text-sm leading-6"
              placeholder="Start coding..."
              spellCheck={false}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              data-gramm="false"
            />
          </div>
        </div>

        {/* Status Bar */}
        <div className="h-6 bg-blue-600 flex items-center justify-between px-4 text-xs">
          <div className="flex items-center space-x-4">
            <span>Ln {cursorPosition.line}, Col {cursorPosition.column}</span>
            <span>{activeFile?.language || "JavaScript"}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
