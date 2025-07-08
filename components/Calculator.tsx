"use client"
import { useState } from "react"
import type React from "react"

export function Calculator() {
  const [display, setDisplay] = useState("0")
  const [previousValue, setPreviousValue] = useState<number | null>(null)
  const [operation, setOperation] = useState<string | null>(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num)
      setWaitingForOperand(false)
    } else {
      setDisplay(display === "0" ? num : display + num)
    }
  }

  const inputOperation = (nextOperation: string) => {
    const inputValue = Number.parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const currentValue = previousValue || 0
      const newValue = calculate(currentValue, inputValue, operation)

      setDisplay(String(newValue))
      setPreviousValue(newValue)
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }

  const calculate = (firstValue: number, secondValue: number, operation: string) => {
    switch (operation) {
      case "+":
        return firstValue + secondValue
      case "-":
        return firstValue - secondValue
      case "×":
        return firstValue * secondValue
      case "÷":
        return firstValue / secondValue
      case "=":
        return secondValue
      default:
        return secondValue
    }
  }

  const performCalculation = () => {
    const inputValue = Number.parseFloat(display)

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation)
      setDisplay(String(newValue))
      setPreviousValue(null)
      setOperation(null)
      setWaitingForOperand(true)
    }
  }

  const clear = () => {
    setDisplay("0")
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  const percentage = () => {
    const value = Number.parseFloat(display)
    setDisplay(String(value / 100))
  }

  const toggleSign = () => {
    const value = Number.parseFloat(display)
    setDisplay(String(value * -1))
  }

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.")
      setWaitingForOperand(false)
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".")
    }
  }

  // Truncate display if too long to prevent size changes
  const formatDisplay = (value: string) => {
    if (value.length > 12) {
      const num = Number.parseFloat(value)
      if (num > 999999999999) {
        return num.toExponential(6)
      }
      return value.substring(0, 12)
    }
    return value
  }

  const Button = ({
    onClick,
    className = "",
    children,
    ...props
  }: {
    onClick: () => void
    className?: string
    children: React.ReactNode
  }) => (
    <button
      onClick={onClick}
      className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-medium text-xl transition-all duration-150 active:scale-95 ${className}`}
      {...props}
    >
      {children}
    </button>
  )

  return (
    <div className="w-full h-full flex items-center justify-center p-4" style={{ backgroundColor: "#252526" }}>
      <div
        className="w-80 rounded-2xl p-4 shadow-2xl flex flex-col"
        style={{ backgroundColor: "#252526", height: "450px" }}
      >
        {/* Display - Fixed height */}
        <div className="mb-4 h-20 flex flex-col justify-end">
          <div className="text-right text-gray-400 text-sm mb-1 h-4 overflow-hidden">
            {previousValue !== null && operation ? `${previousValue} ${operation}` : ""}
          </div>
          <div className="text-right text-white text-4xl font-light h-12 flex items-end justify-end overflow-hidden">
            <span className="truncate">{formatDisplay(display)}</span>
          </div>
        </div>

        {/* Buttons - Fixed grid */}
        <div className="grid grid-cols-4 gap-3 flex-1">
          {/* Row 1 */}
          <Button onClick={clear} className="bg-gray-600 hover:bg-gray-500">
            AC
          </Button>
          <Button onClick={toggleSign} className="bg-gray-600 hover:bg-gray-500">
            +/-
          </Button>
          <Button onClick={percentage} className="bg-gray-600 hover:bg-gray-500">
            %
          </Button>
          <Button onClick={() => inputOperation("÷")} className="bg-orange-500 hover:bg-orange-400">
            ÷
          </Button>

          {/* Row 2 */}
          <Button onClick={() => inputNumber("7")} className="bg-gray-700 hover:bg-gray-600">
            7
          </Button>
          <Button onClick={() => inputNumber("8")} className="bg-gray-700 hover:bg-gray-600">
            8
          </Button>
          <Button onClick={() => inputNumber("9")} className="bg-gray-700 hover:bg-gray-600">
            9
          </Button>
          <Button onClick={() => inputOperation("×")} className="bg-orange-500 hover:bg-orange-400">
            ×
          </Button>

          {/* Row 3 */}
          <Button onClick={() => inputNumber("4")} className="bg-gray-700 hover:bg-gray-600">
            4
          </Button>
          <Button onClick={() => inputNumber("5")} className="bg-gray-700 hover:bg-gray-600">
            5
          </Button>
          <Button onClick={() => inputNumber("6")} className="bg-gray-700 hover:bg-gray-600">
            6
          </Button>
          <Button onClick={() => inputOperation("-")} className="bg-orange-500 hover:bg-orange-400">
            -
          </Button>

          {/* Row 4 */}
          <Button onClick={() => inputNumber("1")} className="bg-gray-700 hover:bg-gray-600">
            1
          </Button>
          <Button onClick={() => inputNumber("2")} className="bg-gray-700 hover:bg-gray-600">
            2
          </Button>
          <Button onClick={() => inputNumber("3")} className="bg-gray-700 hover:bg-gray-600">
            3
          </Button>
          <Button onClick={() => inputOperation("+")} className="bg-orange-500 hover:bg-orange-400">
            +
          </Button>

          {/* Row 5 */}
          <Button onClick={() => {}} className="bg-gray-700 hover:bg-gray-600">
            <div className="grid grid-cols-2 gap-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </Button>
          <Button onClick={() => inputNumber("0")} className="bg-gray-700 hover:bg-gray-600">
            0
          </Button>
          <Button onClick={inputDecimal} className="bg-gray-700 hover:bg-gray-600">
            .
          </Button>
          <Button onClick={performCalculation} className="bg-orange-500 hover:bg-orange-400">
            =
          </Button>
        </div>
      </div>
    </div>
  )
}
