"use client"

import { useEffect, useState } from "react"

interface LogoProps {
  width?: number
  height?: number
  className?: string
}

export function Logo({ width = 200, height = 80, className = "" }: LogoProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={`relative inline-block ${className} animate-float`} style={{ width: width, height: height }}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 200 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md"
      >
        <rect width="200" height="80" rx="8" fill="white" fillOpacity="0.9" />
        <path d="M40 20H50V60H40V20Z" fill="#0087C7" />
        <path d="M60 20H160V30H60V20Z" fill="#0087C7" />
        <path d="M60 35H140V45H60V35Z" fill="#0087C7" />
        <path d="M60 50H120V60H60V50Z" fill="#0087C7" />
        <circle cx="150" cy="53" r="7" fill="#00BFFF" />
        <text x="60" y="75" fontSize="12" fontWeight="bold" fill="#0087C7" fontFamily="sans-serif">
          EchoScore.ai
        </text>
      </svg>
    </div>
  )
}
