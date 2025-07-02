"use client"

import type React from "react"
import { useTaskbar } from "@/context/TaskbarContext"
import { useEffect, useState } from "react"

interface DockApp {
  id: string
  title: string
  icon: React.ReactNode
  isActive: boolean
}

interface DockProps {
  apps: DockApp[]
  onAppClick: (appId: string) => void
  getAppPreview?: (appId: string) => React.ReactNode
}

export function Dock({ apps, onAppClick, getAppPreview }: DockProps) {
  const { isAppOpen, minimizedApps } = useTaskbar()
  const [screenWidth, setScreenWidth] = useState(1200)

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    updateScreenWidth()
    window.addEventListener("resize", updateScreenWidth)
    return () => window.removeEventListener("resize", updateScreenWidth)
  }, [])

  // Separate regular apps and trash
  const regularApps = apps.slice(0, -1)
  const trashApp = apps[apps.length - 1]

  // Get minimized apps that aren't already in regular apps
  const minimizedAppData = minimizedApps
    .map((appId) => {
      const app = apps.find((a) => a.id === appId)
      return app ? { ...app, isMinimized: true } : null
    })
    .filter(Boolean)

  // Calculate dock width with base sizing
  const baseAppSize = 48
  const baseSpacing = 4
  const basePadding = 16
  const separatorWidth = 10

  // Count total apps that will be shown (regular + minimized + trash)
  const totalApps = regularApps.length + minimizedAppData.length + 1 // +1 for trash
  const dockWidth = totalApps * (baseAppSize + baseSpacing) + basePadding + separatorWidth

  // Calculate available width (screen width minus 10px margin on each side)
  const availableWidth = screenWidth - 10

  // Determine if we need to scale down
  const isOverflowing = dockWidth > availableWidth
  const scale = isOverflowing ? Math.max(0.6, availableWidth / dockWidth) : 1

  const appSize = Math.floor(baseAppSize * scale)
  const spacing = Math.max(1, Math.floor(baseSpacing * scale))

  // Generate app preview for minimized apps
  const getMinimizedAppIcon = (appId: string) => {
    if (getAppPreview) {
      const preview = getAppPreview(appId)
      if (preview) {
        return (
          <div
            className="w-full h-full rounded-lg overflow-hidden bg-gray-800 border border-gray-600"
            style={{ transform: `scale(${Math.min(scale * 0.8, 1)})` }}
          >
            <div className="w-full h-full transform scale-50 origin-top-left">{preview}</div>
          </div>
        )
      }
    }

    // Fallback to default icon with dimmed effect
    const app = apps.find((a) => a.id === appId)
    return app ? <div style={{ transform: `scale(${scale})`, opacity: 0.7 }}>{app.icon}</div> : null
  }

  return (
    <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2" style={{ zIndex: 9999 }}>
      <div
        className="bg-white/10 backdrop-blur-md rounded-2xl p-2 flex items-center border border-white/20"
        style={{ gap: `${spacing}px` }}
      >
        {/* Regular apps */}
        {regularApps.map((app) => (
          <div key={app.id} className="relative">
            <button
              className="rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                width: `${appSize}px`,
                height: `${appSize}px`,
              }}
              onClick={() => onAppClick(app.id)}
              title={app.title}
            >
              <div style={{ transform: `scale(${scale})` }}>{app.icon}</div>
            </button>

            {/* App Open Indicator - White dot for open, non-minimized apps */}
            {isAppOpen(app.id) && !minimizedApps.includes(app.id) && (
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
            )}
          </div>
        ))}

        {/* Minimized apps with UI previews */}
        {minimizedAppData.map((app) => (
          <div key={`minimized-${app.id}`} className="relative">
            <button
              className="rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 border border-white/20"
              style={{
                width: `${appSize}px`,
                height: `${appSize}px`,
              }}
              onClick={() => onAppClick(app.id)}
              title={`${app.title} (Minimized)`}
            >
              {getMinimizedAppIcon(app.id)}
            </button>

            {/* White dot for minimized apps */}
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
          </div>
        ))}

        {/* Separator before trash */}
        <div className=" mx-1" style={{ width: "1px", height: `${Math.floor(32 * scale)}px` }}></div>

        {/* Trash */}
        <div className="relative">
          <button
            className=" rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              width: `${appSize}px`,
              height: `${appSize}px`,
            }}
            onClick={() => onAppClick(trashApp.id)}
            title={trashApp.title}
          >
            <div style={{ transform: `scale(${scale})` }}>{trashApp.icon}</div>
          </button>

          {/* App Open Indicator for Trash */}
          {isAppOpen(trashApp.id) && !minimizedApps.includes(trashApp.id) && (
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
          )}
        </div>
      </div>
    </div>
  )
}
