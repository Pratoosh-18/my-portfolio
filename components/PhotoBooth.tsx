"use client"
import { useState, useRef, useCallback, useEffect } from "react"

interface PhotoBoothProps {
  onPhotoCapture?: (imageData: string) => void
}

export function PhotoBooth({ onPhotoCapture }: PhotoBoothProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isStreaming, setIsStreaming] = useState(false)
  const [countdown, setCountdown] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)
  const streamRef = useRef<MediaStream | null>(null)

  const startCamera = useCallback(async () => {
    try {
      setError(null)
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: "user",
        },
        audio: false,
      })

      streamRef.current = stream

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        await videoRef.current.play()
        setIsStreaming(true)
      }
    } catch (err) {
      console.error("Error accessing camera:", err)
      setError("Camera access denied. Please allow camera permissions and refresh.")
    }
  }, [])

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null
    }
    setIsStreaming(false)
  }, [])

  const capturePhoto = useCallback(() => {
    if (!videoRef.current || !canvasRef.current || !isStreaming) return

    setCountdown(3)
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(countdownInterval)

          const canvas = canvasRef.current!
          const video = videoRef.current!
          const context = canvas.getContext("2d")!

          canvas.width = video.videoWidth
          canvas.height = video.videoHeight

          context.scale(-1, 1)
          context.drawImage(video, -canvas.width, 0, canvas.width, canvas.height)

          const imageData = canvas.toDataURL("image/png")

          if (onPhotoCapture) {
            onPhotoCapture(imageData)
          }

          return null
        }
        return prev! - 1
      })
    }, 1000)
  }, [onPhotoCapture, isStreaming])

  useEffect(() => {
    startCamera()
    return () => {
      stopCamera()
    }
  }, [startCamera, stopCamera])

  return (
    <div className="flex flex-col h-full relative bg-black">
      <div className="flex-1 flex items-center justify-center relative">
        {isStreaming && (
          <div className="relative w-full h-full">
            <video
              ref={videoRef}
              className="w-full h-full object-cover transform scale-x-[-1]"
              autoPlay
              muted
              playsInline
            />

            {countdown && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="text-white text-8xl font-bold animate-pulse">{countdown}</div>
              </div>
            )}
          </div>
        )}

        {error && (
          <div className="w-full h-full bg-gray-900 flex items-center justify-center">
            <div className="text-center text-white p-8">
              <div className="text-6xl mb-4">📷</div>
              <p className="text-lg mb-2">Camera Error</p>
              <p className="text-sm text-gray-400 mb-4">{error}</p>
              <button
                onClick={startCamera}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {!isStreaming && !error && (
          <div className="w-full h-full bg-gray-900 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-6xl mb-4 animate-pulse">📷</div>
              <p className="text-lg">Starting Camera...</p>
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={capturePhoto}
          disabled={!isStreaming || countdown !== null}
          className="w-16 h-16 bg-white rounded-full border-4 border-gray-300 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
            {countdown ? (
              <span className="text-black font-bold text-lg">{countdown}</span>
            ) : (
              <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-400"></div>
            )}
          </div>
        </button>
      </div>

      <canvas ref={canvasRef} className="hidden" />
    </div>
  )
}
