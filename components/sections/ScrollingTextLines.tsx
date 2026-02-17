// components/ScrollingTextLines.tsx
'use client'
import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export default function ScrollingTextLines() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth)
    }
  }, [])

  const lines = [
    "متخصص في تصاميم الواجهة",
    "ساعدت اكتر من 200 شخص في تطوير اعمالهم",
    "UI/UX Enthusiast",
    "TypeScript Expert",
    "Problem Solver",
    "Clean Code Advocate",
    "Modern Web Technologies",
    "Responsive Design"
  ]

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* First Row - Scroll Right */}
      <div ref={containerRef} className="flex overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ x: [-containerWidth, 0] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...lines, ...lines].map((text, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center gap-8 shrink-0"
            >
              <span className="text-4xl md:text-5xl font-bold text-gray-800 whitespace-nowrap">
                {text}
              </span>
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second Row - Scroll Left (with delay) */}
      <div className="flex overflow-hidden mt-8">
        <motion.div
          className="flex gap-8"
          animate={{ x: [0, -containerWidth] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...lines.reverse(), ...lines.reverse()].map((text, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center gap-8 shrink-0"
            >
              <div className="w-6 h-6 rounded-full bg-pink-500"></div>
              <span className="text-4xl md:text-5xl font-bold text-gray-600 whitespace-nowrap">
                {text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Third Row - Different Animation */}
      <div className="flex overflow-hidden mt-8">
        <motion.div
          className="flex gap-12"
          animate={{ x: [-containerWidth * 2, 0] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...lines, ...lines, ...lines].map((text, index) => (
            <div
              key={`third-${index}`}
              className="flex items-center gap-12 shrink-0"
            >
              <span className="text-3xl md:text-4xl font-semibold text-gray-400 whitespace-nowrap">
                {text}
            </span>
              <span className="text-2xl">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}