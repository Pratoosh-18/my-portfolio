"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const goToToday = () => {
    setCurrentDate(new Date())
  }

  const renderCalendarGrid = () => {
    const daysInMonth = getDaysInMonth(currentDate)
    const firstDay = getFirstDayOfMonth(currentDate)
    const today = new Date()
    const isCurrentMonth =
      today.getMonth() === currentDate.getMonth() && today.getFullYear() === currentDate.getFullYear()

    const days = []

    // Previous month's trailing days
    const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0)
    const prevMonthDays = prevMonth.getDate()

    for (let i = firstDay - 1; i >= 0; i--) {
      days.push(
        <div
          key={`prev-${prevMonthDays - i}`}
          className="h-20 border border-gray-700 p-2"
          style={{ backgroundColor: "#1c1e20" }}
        >
          <span className="text-gray-500 text-sm">{prevMonthDays - i}</span>
        </div>,
      )
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = isCurrentMonth && day === today.getDate()

      days.push(
        <div key={day} className="h-20 border border-gray-700 p-2 relative" style={{ backgroundColor: "#1c1e20" }}>
          <div
            className={`text-sm font-medium ${isToday ? "bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center" : "text-white"}`}
          >
            {day}
          </div>
        </div>,
      )
    }

    // Next month's leading days
    const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7
    const remainingCells = totalCells - (firstDay + daysInMonth)

    for (let day = 1; day <= remainingCells; day++) {
      days.push(
        <div key={`next-${day}`} className="h-20 border border-gray-700 p-2" style={{ backgroundColor: "#1c1e20" }}>
          <span className="text-gray-500 text-sm">{day}</span>
        </div>,
      )
    }

    return days
  }

  return (
    <div className="flex flex-col h-full text-white" style={{ backgroundColor: "#1c1e20" }}>
      <div
        className="flex items-center justify-between px-4 py-3 border-b border-gray-700 flex-shrink-0"
        style={{ backgroundColor: "#1c1e20" }}
      >
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h1>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-2 flex-shrink-0" style={{ backgroundColor: "#1c1e20" }}>
        <div className="flex items-center space-x-2">
          <button onClick={() => navigateMonth("prev")} className="p-1 hover:bg-gray-700 rounded">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={goToToday} className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm">
            Today
          </button>
          <button onClick={() => navigateMonth("next")} className="p-1 hover:bg-gray-700 rounded">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <button className="p-2 hover:bg-gray-700 rounded">
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 px-4 py-2 min-h-0" style={{ backgroundColor: "#1c1e20" }}>
        <div className="grid grid-cols-7 flex-shrink-0">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center text-sm font-medium text-gray-400 py-2">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-0 border border-gray-700" style={{ height: "calc(100% - 40px)" }}>
          {renderCalendarGrid()}
        </div>
      </div>
    </div>
  )
}
