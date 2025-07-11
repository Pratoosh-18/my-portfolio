"use client"

import type React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import { X, Minus, Square } from "lucide-react"

interface WindowProps {
  appId: string
  title: string
  onClose: () => void
  onMinimize: () => void
  content: React.ReactNode
  initialPosition: { x: number; y: number }
  zIndex?: number
  onFocus?: () => void
  onDragStart?: () => void
  onDragEnd?: () => void
  disableMaximize?: boolean
  fixedSize?: { width: number; height: number }
}

export function Window({
  title,
  onClose,
  onMinimize,
  content,
  initialPosition,
  zIndex = 1000,
  onFocus,
  onDragStart,
  onDragEnd,
  disableMaximize = false,
  fixedSize,
}: WindowProps) {
  const [position, setPosition] = useState(initialPosition)
  const [size, setSize] = useState(fixedSize || { width: 800, height: 600 })
  const [isMaximized, setIsMaximized] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [isAnimating, setIsAnimating] = useState(false)

  const windowRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) {
      e.preventDefault()
      setPosition({
        x: e.clientX - dragOffset.x,
        y: Math.max(24, e.clientY - dragOffset.y),
      })
    }
  }, [isDragging, dragOffset])

  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false)
      onDragEnd?.()
    }
    document.body.style.userSelect = ""
    document.body.style.webkitUserSelect = ""
  }, [isDragging, onDragEnd])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget || (e.target as HTMLElement).closest(".window-header")) {
      e.preventDefault()
      setIsDragging(true)
      setDragOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      })
      onDragStart?.()

      document.body.style.userSelect = "none"
      document.body.style.webkitUserSelect = "none"
    }
  }

  const handleMaximize = () => {
    if (disableMaximize || fixedSize) return

    setIsAnimating(true)

    if (isMaximized) {
      setSize({ width: 800, height: 600 })
      setPosition(initialPosition)
    } else {
      setSize({ width: window.innerWidth, height: window.innerHeight - 24 - 80 })
      setPosition({ x: 0, y: 24 })
    }
    setIsMaximized(!isMaximized)

    setTimeout(() => setIsAnimating(false), 300)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
      }
    }
  }, [isDragging, handleMouseMove, handleMouseUp])

  const handleWindowClick = () => {
    onFocus?.()
  }

  return (
    <div
      ref={windowRef}
      className={`absolute rounded-lg shadow-2xl overflow-hidden border border-gray-600 ${isDragging ? "select-none" : ""}`}
      style={{
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        zIndex,
        backgroundColor: "rgba(28,30,31,255)",
        transition: isAnimating ? "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
      }}
      onClick={handleWindowClick}
    >
      {/* Window Title Bar */}
      <div
        className="window-header h-8 border-b border-gray-600 flex items-center justify-between px-4 cursor-move bg-[#1c1e1f]"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center space-x-2">
          {/* Traffic Light Buttons */}
          <button
            className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 flex items-center justify-center group"
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
          >
            <X className="w-2 h-2 text-red-800 opacity-0 group-hover:opacity-100" />
          </button>
          <button
            className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 flex items-center justify-center group"
            onClick={(e) => {
              e.stopPropagation()
              onMinimize()
            }}
          >
            <Minus className="w-2 h-2 text-yellow-800 opacity-0 group-hover:opacity-100" />
          </button>
          <button
            className={`w-3 h-3 rounded-full flex items-center justify-center group ${
              disableMaximize || fixedSize ? "bg-gray-500 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
            }`}
            onClick={(e) => {
              e.stopPropagation()
              handleMaximize()
            }}
            disabled={disableMaximize || !!fixedSize}
          >
            <Square
              className={`w-2 h-2 opacity-0 group-hover:opacity-100 ${
                disableMaximize || fixedSize ? "text-gray-700" : "text-green-800"
              }`}
            />
          </button>
        </div>
        <div className="flex-1 text-center">
          <span className="text-sm font-medium text-gray-300">{title}</span>
        </div>
        <div className="w-12"></div>
      </div>

      {/* Window Content */}
      <div className="h-full overflow-auto" style={{ height: "calc(100% - 32px)" }}>
        {content}
      </div>
    </div>
  )
}
