"use client"

import type React from "react"
import { useState } from "react"
import { Wifi, Bluetooth, Search, ChevronLeft, ChevronRight, ChevronDown, Sun, Monitor, Palette } from "lucide-react"
import Image from "next/image"

interface SettingsAppProps {
  currentWallpaper: string
  setCurrentWallpaper: (wallpaper: string) => void
  brightness: number
  setBrightness: (brightness: number) => void
}

interface SettingsSection {
  id: string
  title: string
  icon: React.ReactNode
}

const settingsSections: SettingsSection[] = [
  { id: "wifi", title: "Wi-Fi", icon: <Wifi className="w-5 h-5 text-blue-500" /> },
  { id: "bluetooth", title: "Bluetooth", icon: <Bluetooth className="w-5 h-5 text-blue-500" /> },
  { id: "displays", title: "Displays", icon: <Monitor className="w-5 h-5 text-blue-500" /> },
  { id: "wallpaper", title: "Wallpaper", icon: <Palette className="w-5 h-5 text-blue-500" /> },
  // Comment out the unused sections for later use
  // { id: "network", title: "Network", icon: <Globe className="w-5 h-5 text-blue-500" /> },
  // { id: "battery", title: "Battery", icon: <Battery className="w-5 h-5 text-green-500" /> },
  // { id: "general", title: "General", icon: <SettingsIcon className="w-5 h-5 text-gray-500" /> },
  // { id: "accessibility", title: "Accessibility", icon: <Eye className="w-5 h-5 text-blue-500" /> },
  // { id: "appearance", title: "Appearance", icon: <Moon className="w-5 h-5 text-gray-500" /> },
  // { id: "siri", title: "Apple Intelligence & Siri", icon: <User className="w-5 h-5 text-purple-500" /> },
  // { id: "control", title: "Control Centre", icon: <SettingsIcon className="w-5 h-5 text-gray-500" /> },
  // { id: "dock", title: "Desktop & Dock", icon: <Monitor className="w-5 h-5 text-blue-500" /> },
  // { id: "screensaver", title: "Screen Saver", icon: <Monitor className="w-5 h-5 text-blue-500" /> },
  // { id: "spotlight", title: "Spotlight", icon: <Search className="w-5 h-5 text-gray-500" /> },
  // { id: "notifications", title: "Notifications", icon: <Bell className="w-5 h-5 text-red-500" /> },
  // { id: "sound", title: "Sound", icon: <Volume2 className="w-5 h-5 text-red-500" /> },
  // { id: "focus", title: "Focus", icon: <Moon className="w-5 h-5 text-purple-500" /> },
  // { id: "screentime", title: "Screen Time", icon: <Clock className="w-5 h-5 text-purple-500" /> },
]

const wallpapers = [
  {
    id: "default",
    name: "Monterey Light",
    url: "/wallpapers/MontereyLight.jpg",
  },
  {
    id: "Sequoia",
    name: "Sequoia",
    url: "/wallpapers/Sequoia.jpg",
  },
  {
    id: "MontereyDark",
    name: "Monterey Dark",
    url: "/wallpapers/MontereyDark.jpg",
  },
  {
    id: "BigSurGraphicLight",
    name: "Big Sur Graphic Light",
    url: "/wallpapers/BigSurGraphicLight.jpg",
  },
  {
    id: "BigSurGraphicDark",
    name: "Big Sur Graphic Dark",
    url: "/wallpapers/BigSurGraphicDark.jpg",
  },
]

export function SettingsApp({ currentWallpaper, setCurrentWallpaper, brightness, setBrightness }: SettingsAppProps) {
  const [activeSection, setActiveSection] = useState("wallpaper")
  const [wifiEnabled, setWifiEnabled] = useState(true)
  const [bluetoothEnabled, setBluetoothEnabled] = useState(true)
  const [trueTone, setTrueTone] = useState(true)
  const [autoBrightness, setAutoBrightness] = useState(false)

  const renderContent = () => {
    switch (activeSection) {
      case "wifi":
        return (
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                <Wifi className="w-8 h-8 text-blue-500 flex-shrink-0" />
                <div className="min-w-0">
                  <h3 className="text-sm font-medium text-white">Wi-Fi</h3>
                  <p className="text-xs text-gray-400 break-words">
                    Set up Wi-Fi to wirelessly connect your Mac to the internet. Turn on Wi-Fi, then choose a network to
                    join. <span className="text-blue-400 cursor-pointer">Learn More...</span>
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 ml-4">
                <div
                  className={`w-12 h-6 rounded-full cursor-pointer transition-colors flex items-center ${wifiEnabled ? "bg-blue-500" : "bg-gray-600"
                    }`}
                  onClick={() => setWifiEnabled(!wifiEnabled)}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full transition-transform ${wifiEnabled ? "translate-x-6" : "translate-x-0.5"
                      }`}
                  />
                </div>
              </div>
            </div>

            {wifiEnabled && (
              <>
                <div className="rounded-lg p-4" style={{ backgroundColor: "#1d1f20" }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-white text-sm font-medium">realme 8s 5G</span>
                      <span className="text-xs text-gray-400">Connected</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 text-gray-400">🔒</div>
                      <Wifi className="w-4 h-4 text-white" />
                      <button className="px-3 py-1 rounded text-xs text-white" style={{ backgroundColor: "#1d1f20" }}>
                        Details...
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-medium text-sm mb-3">Personal Hotspots</h4>
                  <div className="rounded-lg p-4" style={{ backgroundColor: "#1d1f20" }}>
                    <div className="flex items-center justify-between">
                      <span className="text-white text-sm">{"Pratoosh's iPhone"}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 text-gray-400">🔒</div>
                        <div className="w-4 h-4 text-gray-400">📱</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-medium text-sm mb-3">Known Networks</h4>
                  <div className="rounded-lg p-4" style={{ backgroundColor: "#1d1f20" }}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-green-500">✓</span>
                        <span className="text-white text-sm">realme 8s 5G</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 text-gray-400">🔒</div>
                        <Wifi className="w-4 h-4 text-white" />
                        <button className="text-gray-400">⋯</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-medium text-sm mb-3">Other Networks</h4>
                  <div className="rounded-lg p-8 text-center" style={{ backgroundColor: "#1d1f20" }}>
                    <span className="text-gray-400">No Networks</span>
                  </div>
                  <div className="mt-2 text-right">
                    <button className="px-3 py-1 rounded text-xs text-white" style={{ backgroundColor: "#1d1f20" }}>
                      Other...
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        )

      case "bluetooth":
        return (
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                <Bluetooth className="w-8 h-8 text-blue-500 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-medium text-sm">Bluetooth</h3>
                  <p className="text-xs text-gray-400">
                    Connect wirelessly to keyboards, mice, headphones, speakers, and other devices.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 ml-4">
                <div
                  className={`w-12 h-6 rounded-full cursor-pointer transition-colors flex items-center ${bluetoothEnabled ? "bg-blue-500" : "bg-gray-600"
                    }`}
                  onClick={() => setBluetoothEnabled(!bluetoothEnabled)}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full transition-transform ${bluetoothEnabled ? "translate-x-6" : "translate-x-0.5"
                      }`}
                  />
                </div>
              </div>
            </div>

            {bluetoothEnabled && (
              <div className="rounded-lg p-8 text-center" style={{ backgroundColor: "#1d1f20" }}>
                <span className="text-gray-400">No devices found</span>
              </div>
            )}
          </div>
        )

      case "displays":
        return (
          <div className="p-4 space-y-4">
            <div className="text-center">
              <div className="inline-block rounded-lg p-4 mb-4" style={{ backgroundColor: "#1d1f20" }}>
                <div className="w-32 h-20 bg-gradient-to-br from-blue-600 to-black rounded border-2 border-gray-600 relative">
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-600 rounded-full" />
                </div>
              </div>
              <h3 className="text-white font-medium text-sm">Built-in Display</h3>
            </div>

            <div className="rounded-lg p-4" style={{ backgroundColor: "#1d1f20" }}>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="rounded p-3 mb-2" style={{ backgroundColor: "#1d1f20" }}>
                    <div className="text-xs text-gray-300">Here's to the crazy ones...</div>
                  </div>
                  <span className="text-xs text-white">Larger Text</span>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 rounded p-3 mb-2 border-2 border-blue-400">
                    <div className="text-xs text-white">Here's to the crazy ones...</div>
                  </div>
                  <span className="text-xs text-white">Default</span>
                </div>
                <div className="text-center">
                  <div className="rounded p-3 mb-2" style={{ backgroundColor: "#1d1f20" }}>
                    <div className="text-xs text-gray-300">Here's to the crazy ones...</div>
                  </div>
                  <span className="text-xs text-white">More Space</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">Brightness</span>
                  <div className="flex items-center space-x-2">
                    <Sun className="w-4 h-4 text-gray-400" />
                    <Sun className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Sun className="w-4 h-4 text-gray-400" />
                  <div className="flex-1 relative">
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={brightness}
                      onChange={(e) => setBrightness(Number(e.target.value))}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>
                  <Sun className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="rounded-lg p-4" style={{ backgroundColor: "#1d1f20" }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">Automatically adjust brightness</span>
                  <div
                    className={`w-12 h-6 rounded-full cursor-pointer transition-colors flex items-center ${autoBrightness ? "bg-blue-500" : "bg-gray-600"
                      }`}
                    onClick={() => setAutoBrightness(!autoBrightness)}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full transition-transform ${autoBrightness ? "translate-x-6" : "translate-x-0.5"
                        }`}
                    />
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-yellow-500 text-xs">⚠️</span>
                  <p className="text-xs text-gray-400">
                    Energy usage may be higher when your display does not automatically adjust. Display and battery
                    performance may also be reduced over time when this is turned off.
                  </p>
                </div>
              </div>

              <div className="rounded-lg p-4" style={{ backgroundColor: "#1d1f20" }}>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-white font-medium text-sm">True Tone</span>
                    <p className="text-xs text-gray-400">
                      Automatically adapt display to make colours appear consistent in different ambient lighting
                      conditions.
                    </p>
                  </div>
                  <div
                    className={`w-12 h-6 rounded-full cursor-pointer transition-colors flex items-center ${trueTone ? "bg-blue-500" : "bg-gray-600"
                      }`}
                    onClick={() => setTrueTone(!trueTone)}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full transition-transform ${trueTone ? "translate-x-6" : "translate-x-0.5"
                        }`}
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-lg p-4" style={{ backgroundColor: "#1d1f20" }}>
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium text-sm">Colour profile</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400">Colour LCD</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "wallpaper":
        return (
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between mb-4">
              <div className="rounded-lg p-4 w-48" style={{ backgroundColor: "#1d1f20" }}>
                <img
                  src={currentWallpaper || "/placeholder.svg"}
                  alt="Current wallpaper"
                  className="w-full h-24 object-cover rounded"
                />
              </div>
              <div className="flex-1 ml-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium text-sm">Chroma Blue</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400">Automatic</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium text-sm">Show on all Spaces</span>
                  <div className="w-12 h-6 rounded-full bg-blue-500 cursor-pointer">
                    <div className="w-5 h-5 bg-white rounded-full mt-0.5 translate-x-6" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mb-4">
              <button className="px-4 py-2 rounded text-white text-xs" style={{ backgroundColor: "#1d1f20" }}>
                Add Photo ▼
              </button>
              <button className="px-4 py-2 rounded text-white text-xs" style={{ backgroundColor: "#1d1f20" }}>
                Add Folder or Album ▼
              </button>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-white font-medium text-sm">Dynamic Wallpapers</h4>
                <span className="text-gray-400 text-xs">Show All (33)</span>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {wallpapers.map((wallpaper) => (
                  <div
                    key={wallpaper.id}
                    className={`relative cursor-pointer rounded-lg overflow-hidden ${currentWallpaper === wallpaper.url ? "ring-2 ring-blue-500" : ""
                      }`}
                    onClick={() => { console.log(wallpaper.url), setCurrentWallpaper(wallpaper.url) }}
                  >
                    <div className="relative w-full h-20">
                      <Image
                        src={wallpaper.url}
                        alt={wallpaper.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all" />
                    <div className="absolute bottom-1 left-1 right-1 text-center">
                      <span className="text-white text-xs font-medium bg-black bg-opacity-50 px-2 py-1 rounded">
                        {wallpaper.name}
                      </span>
                    </div>
                    {currentWallpaper === wallpaper.url && (
                      <div className="absolute top-2 right-2 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="p-4">
            <h3 className="text-white font-medium text-sm mb-4">{activeSection}</h3>
            <p className="text-gray-400">Settings for {activeSection} will be implemented here.</p>
          </div>
        )
    }
  }

  return (
    <div className="flex h-full text-white" style={{ backgroundColor: "#1d1f20" }}>
      {/* Sidebar */}
      <div className="w-80 border-r border-gray-700" style={{ backgroundColor: "#1d1f20" }}>
        {/* Search */}
        <div className="p-4 border-b border-gray-700">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-lg pl-10 pr-4 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ backgroundColor: "#1d1f20" }}
            />
          </div>
        </div>

        {/* Settings List */}
        <div className="flex-1 overflow-y-auto">
          {settingsSections.map((section) => (
            <button
              key={section.id}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-700 transition-colors ${activeSection === section.id ? "bg-blue-600 hover:bg-blue-600" : ""
                }`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.icon}
              <span className="text-sm text-white text-sm">{section.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center space-x-4 p-4 border-b border-gray-700">
          <button className="p-1 hover:bg-gray-700 rounded">
            <ChevronLeft className="w-5 h-5 text-gray-400" />
          </button>
          <button className="p-1 hover:bg-gray-700 rounded">
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
          <h2 className="text-sm font-medium text-white capitalize">
            {settingsSections.find((s) => s.id === activeSection)?.title || activeSection}
          </h2>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">{renderContent()}</div>
      </div>
    </div>
  )
}
