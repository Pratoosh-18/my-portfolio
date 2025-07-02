"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface TaskbarContextType {
  openApps: string[]
  minimizedApps: string[]
  openApp: (appId: string) => void
  closeApp: (appId: string) => void
  minimizeApp: (appId: string) => void
  isAppOpen: (appId: string) => boolean
  isAppMinimized: (appId: string) => boolean
}

const TaskbarContext = createContext<TaskbarContextType | undefined>(undefined)

export function TaskbarProvider({ children }: { children: ReactNode }) {
  const [openApps, setOpenApps] = useState<string[]>([])
  const [minimizedApps, setMinimizedApps] = useState<string[]>([])

  const openApp = (appId: string) => {
    setOpenApps((prev) => (prev.includes(appId) ? prev : [...prev, appId]))
    setMinimizedApps((prev) => prev.filter((id) => id !== appId))
  }

  const closeApp = (appId: string) => {
    setOpenApps((prev) => prev.filter((id) => id !== appId))
    setMinimizedApps((prev) => prev.filter((id) => id !== appId))
  }

  const minimizeApp = (appId: string) => {
    setMinimizedApps((prev) => (prev.includes(appId) ? prev : [...prev, appId]))
  }

  const isAppOpen = (appId: string) => openApps.includes(appId)
  const isAppMinimized = (appId: string) => minimizedApps.includes(appId)

  return (
    <TaskbarContext.Provider
      value={{
        openApps,
        minimizedApps,
        openApp,
        closeApp,
        minimizeApp,
        isAppOpen,
        isAppMinimized,
      }}
    >
      {children}
    </TaskbarContext.Provider>
  )
}

export function useTaskbar() {
  const context = useContext(TaskbarContext)
  if (context === undefined) {
    throw new Error("useTaskbar must be used within a TaskbarProvider")
  }
  return context
}
