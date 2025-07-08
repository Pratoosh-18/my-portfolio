"use client";

import { useState, useEffect } from "react";
import { Wifi, BatteryLow , Search, Bell } from "lucide-react";
import Image from "next/image";

export function TopBar() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    let hour = date.getHours();
    const minute = date.getMinutes().toString().padStart(2, "0");
    const ampm = hour >= 12 ? "PM" : "AM";

    hour = hour % 12;
    hour = hour === 0 ? 12 : hour;

    return `${dayName} ${day} ${month} ${hour}:${minute} ${ampm}`;
  };
  return (
    <div className="h-8 bg-black/20 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4 text-white text-sm font-medium fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center space-x-6">
        <div className="text-lg">
          <Image width={30} height={30} src={"/apple-logo.png"} alt="icon" className="fill-white"/>
        </div>
        <span>Finder</span>
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Go</span>
        <span>Window</span>
        <span>Help</span>
      </div>
      <div className="flex items-center space-x-2">
        <span>18%</span>
        <BatteryLow className="w-5 h-5" />
        <Wifi className="w-5 h-5" />
        <Search className="w-5 h-5" />
        <span>{formatTime(currentTime)}</span>
      </div>
    </div>
  );
}
