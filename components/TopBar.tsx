"use client"

import { useState, useEffect } from "react"
import { Wifi, Battery, Search, Bell } from "lucide-react"

export function TopBar() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  }

  return (
    <div className="h-6 bg-black/20 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4 text-white text-sm font-medium fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center space-x-6">
        <div className="text-lg">🍎</div>
        <span>Finder</span>
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Go</span>
        <span>Window</span>
        <span>Help</span>
      </div>
      <div className="flex items-center space-x-2">
        <Battery className="w-4 h-4" />
        <span>19%</span>
        <Wifi className="w-4 h-4" />
        <Search className="w-4 h-4" />
        <Bell className="w-4 h-4" />
        <span>{formatTime(currentTime)}</span>
      </div>
    </div>
  )
}
