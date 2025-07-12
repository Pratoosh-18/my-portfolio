"use client";

import React, { useState, useEffect } from "react";
import {
  FileText,
  Mail,
  Terminal,
  Search,
  Trash2,
  Clock,
  Award,
  Briefcase,
  Edit3,
} from "lucide-react";
import { Window } from "@/components/Window";
import { Dock } from "@/components/Dock";
import { TopBar } from "@/components/TopBar";
import { TaskbarProvider, useTaskbar } from "@/context/TaskbarContext";
import { SettingsApp } from "@/components/settings-app";
import { AboutMe } from "@/components/AboutMe";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Achievements } from "@/components/Achievements";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Resume } from "@/components/Resume";
import { PhotoBooth } from "@/components/PhotoBooth";
import { Notepad } from "@/components/Notepad";
import { VSCode } from "@/components/VSCode";
import { Calendar } from "@/components/Calendar";
import { Calculator } from "@/components/Calculator";
import { GitHub } from "@/components/GitHub";
import { Chess } from "@/components/Chess";
import Image from "next/image";

interface DockApp {
  id: string;
  title: string;
  icon: React.ReactNode;
  isActive: boolean;
}

interface WebsiteWindow {
  id: string;
  title: string;
  url: string;
}

const DockIcon = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-14 h-14 flex items-center justify-center">
    <Image src={src} alt={alt} width={50} height={50} className="object-contain w-14 h-14" />
  </div>
);

function MacOSDesktop() {
  const { openApp, closeApp, minimizeApp, isAppOpen, isAppMinimized } =
    useTaskbar();
  const [currentWallpaper, setCurrentWallpaper] = useState(
    "/wallpapers/MontereyLight.jpg"
  );
  const [brightness, setBrightness] = useState(75);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [windowZIndices, setWindowZIndices] = useState<Record<string, number>>(
    {}
  );
  const [highestZIndex, setHighestZIndex] = useState(1000);
  const [websiteWindows, setWebsiteWindows] = useState<WebsiteWindow[]>([]);
  const [windowOffsets, setWindowOffsets] = useState<
    Record<string, { x: number; y: number }>
  >({});
  const [capturedPhotos, setCapturedPhotos] = useState<
    Array<{ id: string; data: string; timestamp: number }>
  >([]);
  const [isDraggingAnyWindow, setIsDraggingAnyWindow] = useState(false);

  useEffect(() => {
    if (isDraggingAnyWindow) {
      document.body.classList.add("dragging");
    } else {
      document.body.classList.remove("dragging");
    }

    return () => {
      document.body.classList.remove("dragging");
    };
  }, [isDraggingAnyWindow]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const dockApps: DockApp[] = [
    {
      id: "about",
      title: "About Me",
      icon: <Image height={50} width={50} src="/folder-icon.png" alt="About Me" className="w-[40px] h-[40px]" />,
      isActive: false,
    },
    {
      id: "experience",
      title: "Experience",
      icon: <Briefcase className="w-8 h-8" />,
      isActive: false,
    },
    {
      id: "projects",
      title: "Projects",
      icon: <Terminal className="w-8 h-8" />,
      isActive: false,
    },
    {
      id: "skills",
      title: "Skills",
      icon: <FileText className="w-8 h-8" />,
      isActive: false,
    },
    {
      id: "achievements",
      title: "Achievements",
      icon: <Award className="w-8 h-8" />,
      isActive: false,
    },
    {
      id: "resume",
      title: "Resume",
      icon: <FileText className="w-8 h-8" />,
      isActive: false,
    },
    {
      id: "contact",
      title: "Contact",
      icon: <Mail className="w-8 h-8" />,
      isActive: false,
    },
    {
      id: "notepad",
      title: "Notepad",
      icon: <Edit3 className="w-8 h-8" />,
      isActive: false,
    },
    {
      id: "vscode",
      title: "VS Code",
      icon: <DockIcon src="/dock/vscode.png" alt="vscode" />,
      isActive: false,
    },
    {
      id: "calendar",
      title: "Calendar",
      icon: <DockIcon src="/dock/calendar.webp" alt="about" />,
      isActive: false,
    },
    {
      id: "calculator",
      title: "Calculator",
      icon: <DockIcon src="/dock/calculator.png" alt="calculator" />,
      isActive: false,
    },
    {
      id: "chess",
      title: "Chess",
      icon: <span className="text-2xl">♛</span>,
      isActive: false,
    },
    {
      id: "photobooth",
      title: "Photo Booth",
      icon: (
        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-lg">📷</span>
        </div>
      ),
      isActive: false,
    },
    { 
      id: "settings",
      title: "Settings",
      icon: <DockIcon src="/dock/settings.png" alt="settings" />,
      isActive: false,
    },
    {
      id: "github",
      title: "GitHub",
      icon: <Search className="w-8 h-8" />,
      isActive: false,
    },
    {
      id: "google",
      title: "Google",
      icon: <DockIcon src="/dock/chrome.webp" alt="chrome" />,
      isActive: false,
    },
    {
      id: "trash",
      title: "Trash",
      icon: <Trash2 className="w-8 h-8" />,
      isActive: false,
    },
  ];

  const bringToFront = (appId: string) => {
    const newZIndex = highestZIndex + 1;
    setWindowZIndices((prev) => ({ ...prev, [appId]: newZIndex }));
    setHighestZIndex(newZIndex);
  };

  const generateWindowOffset = (appId: string) => {
    if (!windowOffsets[appId]) {
      const openWindowsCount = Object.keys(windowOffsets).length;
      const offsetX = (openWindowsCount % 5) * 30;
      const offsetY = Math.floor(openWindowsCount / 5) * 30;

      setWindowOffsets((prev) => ({
        ...prev,
        [appId]: { x: offsetX, y: offsetY },
      }));

      return { x: offsetX, y: offsetY };
    }
    return windowOffsets[appId];
  };

  const handleOpenWebsite = (url: string, title: string) => {
    const websiteId = `website-${Date.now()}`;
    const newWebsiteWindow: WebsiteWindow = {
      id: websiteId,
      title: title,
      url: url,
    };

    setWebsiteWindows((prev) => [...prev, newWebsiteWindow]);
    bringToFront(websiteId);
  };

  const closeWebsiteWindow = (websiteId: string) => {
    setWebsiteWindows((prev) => prev.filter((w) => w.id !== websiteId));
    setWindowOffsets((prev) => {
      const newOffsets = { ...prev };
      delete newOffsets[websiteId];
      return newOffsets;
    });
  };

  const handlePhotoCapture = (imageData: string) => {
    const newPhoto = {
      id: `photo-${Date.now()}`,
      data: imageData,
      timestamp: Date.now(),
    };
    setCapturedPhotos((prev) => [...prev, newPhoto]);
  };

  const getWindowContent = (appId: string) => {
    const contentMap: Record<string, React.ReactNode> = {
      about: <AboutMe />,
      experience: <Experience />,
      projects: <Projects onOpenWebsite={handleOpenWebsite} />,
      skills: <Skills />,
      achievements: <Achievements />,
      resume: <Resume />,
      contact: <Contact/>,
      notepad: <Notepad />,
      vscode: <VSCode />,
      calendar: <Calendar />,
      calculator: <Calculator />,
      chess: <Chess />,
      settings: (
        <SettingsApp
          currentWallpaper={currentWallpaper}
          setCurrentWallpaper={setCurrentWallpaper}
          brightness={brightness}
          setBrightness={setBrightness}
        />
      ),
      github: <GitHub />,
      google: (
        <div className="w-full h-full" style={{ backgroundColor: "#1d1f20" }}>
          <iframe
            src="https://www.google.com/webhp?igu=1"
            className="w-full h-full border-0"
            title="Google"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
          />
        </div>
      ),
      trash: (
        <div className="flex h-full" style={{ backgroundColor: "#1d1f20" }}>
          <div
            className="w-80 border-r border-gray-600 flex flex-col flex-shrink-0"
            style={{ backgroundColor: "#1d1f20" }}
          >
            <div className="p-3 border-b border-gray-600">
              <h2 className="text-base font-semibold text-white">Trash</h2>
            </div>

            <div className="flex-1 overflow-y-auto p-2">
              {[
                "Old Project Files",
                "Unused Images",
                "Draft Documents",
                "Temporary Downloads",
                "Cache Files",
                "Old Screenshots",
                "Backup Folder",
                "Test Files",
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-full p-2 text-left flex items-center space-x-3 mb-1"
                >
                  <Image
                    src="/folder-icon.png"
                    height={20} width={20}
                    alt="Folder"
                    className="w-4 h-4 flex-shrink-0"
                  />
                  <span className="text-white text-xs truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col min-w-0">
            <div
              className="flex items-center p-3 border-b border-gray-600"
              style={{ backgroundColor: "#1d1f20" }}
            >
              <span className="text-white font-medium text-sm">Trash Info</span>
            </div>

            <div
              className="flex-1 overflow-y-auto p-4"
              style={{ backgroundColor: "#1d1f20" }}
            >
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Trash2 className="w-16 h-16 text-gray-400" />
                </div>
                <h3 className="text-white font-medium mb-2">Trash</h3>
                <p className="text-gray-400 text-sm">8 items in trash</p>

                <div className="mt-6 space-y-2">
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm transition-colors">
                    Empty Trash
                  </button>
                  <button className="w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded text-sm transition-colors">
                    Restore All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      photobooth: <PhotoBooth onPhotoCapture={handlePhotoCapture} />,
    };
    return (
      contentMap[appId] || (
        <div
          className="p-6 text-white h-full"
          style={{ backgroundColor: "#1d1f20" }}
        >
          App content
        </div>
      )
    );
  };

  // Function to get app preview for minimized apps
  const getAppPreview = (appId: string) => {
    return getWindowContent(appId);
  };

  const handleAppClick = (appId: string) => {
    if (isAppOpen(appId)) {
      if (isAppMinimized(appId)) {
        // If minimized, restore it
        openApp(appId);
      }
      // Always bring to front when clicking on open app
      bringToFront(appId);
    } else {
      // If not open, open it
      openApp(appId);
      bringToFront(appId);
    }
  };

  const getWindowPosition = (appId: string) => {
    const offset = generateWindowOffset(appId);
    const centerX = Math.max(0, (window.innerWidth - 800) / 2);
    const centerY = Math.max(24, (window.innerHeight - 600) / 2);

    return {
      x: centerX + offset.x,
      y: centerY + offset.y,
    };
  };

  const getWindowProps = (appId: string) => {
    if (appId === "calculator") {
      return {
        disableMaximize: true,
        fixedSize: { width: 280, height: 500 },
      };
    }
    if (appId === "chess") {
      return {
        disableMaximize: true,
        fixedSize: { width: 600, height: 700 },
      };
    }
    if (appId === "settings") {
      return {
        disableMaximize: true,
      };
    }
    return {};
  };

  return (
    <div
      className="h-screen w-screen overflow-hidden bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${currentWallpaper})`,
        filter: `brightness(${brightness}%)`,
      }}
    >
      <TopBar />

      {/* Desktop Widgets */}
      <div className="absolute top-8 left-4 space-y-4 pt-6">
        <div className="w-32 h-32 bg-white rounded-2xl shadow-lg flex items-center justify-center">
          <div className="text-center">
            <Clock className="w-16 h-16 mx-auto mb-2" />
            <div className="text-xs font-medium">
              {currentTime.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                hour12: false,
              })}
            </div>
          </div>
        </div>

        <div className="w-32 h-32 bg-black rounded-2xl shadow-lg flex flex-col items-center justify-center text-white">
          <div className="text-red-500 text-xs font-medium">
            {currentTime.toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
            })}
          </div>
          <div className="text-4xl font-light">{currentTime.getDate()}</div>
        </div>
      </div>

      {/* Captured Photos on Desktop */}
      {capturedPhotos.map((photo, index) => (
        <div
          key={photo.id}
          className="absolute"
          style={{
            right: 20 + index * 120,
            top: 100 + index * 20,
            zIndex: 10,
          }}
        >
          <div className="bg-white p-2 rounded-lg shadow-lg">
            <Image
              height={20} width={20}
              src={photo.data || "/placeholder.svg"}
              alt={`Captured ${new Date(photo.timestamp).toLocaleTimeString()}`}
              className="w-24 h-18 object-cover rounded"
            />
            <p className="text-xs text-center mt-1 text-gray-600">
              {new Date(photo.timestamp).toLocaleTimeString()}
            </p>
          </div>
        </div>
      ))}

      {/* Regular App Windows */}
      {dockApps.map((app) =>
        isAppOpen(app.id) && !isAppMinimized(app.id) ? (
          <Window
            key={app.id}
            appId={app.id}
            title={app.title}
            onClose={() => {
              closeApp(app.id);
              setWindowOffsets((prev) => {
                const newOffsets = { ...prev };
                delete newOffsets[app.id];
                return newOffsets;
              });
            }}
            onMinimize={() => minimizeApp(app.id)}
            content={getWindowContent(app.id)}
            initialPosition={getWindowPosition(app.id)}
            zIndex={windowZIndices[app.id] || 1000}
            onFocus={() => bringToFront(app.id)}
            onDragStart={() => setIsDraggingAnyWindow(true)}
            onDragEnd={() => setIsDraggingAnyWindow(false)}
            {...getWindowProps(app.id)}
          />
        ) : null
      )}

      {/* Website Windows */}
      {websiteWindows.map((website) => (
        <Window
          key={website.id}
          appId={website.id}
          title={website.title}
          onClose={() => closeWebsiteWindow(website.id)}
          onMinimize={() => {}}
          content={
            <div
              className="w-full h-full"
              style={{ backgroundColor: "#1d1f20" }}
            >
              <iframe
                src={website.url}
                className="w-full h-full border-0"
                title={website.title}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </div>
          }
          initialPosition={getWindowPosition(website.id)}
          zIndex={windowZIndices[website.id] || 1000}
          onFocus={() => bringToFront(website.id)}
          onDragStart={() => setIsDraggingAnyWindow(true)}
          onDragEnd={() => setIsDraggingAnyWindow(false)}
        />
      ))}

      <Dock
        apps={dockApps}
        onAppClick={handleAppClick}
        getAppPreview={getAppPreview}
      />
    </div>
  );
}

export default function Home() {
  return (
    <TaskbarProvider>
      <MacOSDesktop />
    </TaskbarProvider>
  );
}
