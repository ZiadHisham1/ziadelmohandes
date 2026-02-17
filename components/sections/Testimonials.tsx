// components/TestimonialCarousel.tsx
'use client'
import { useState, useRef, useEffect } from "react"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import TestimonialCard from "../custom-ui/testimonialCard"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1) // Start with middle card
  const [isDragging, setIsDragging] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const dragX = useMotionValue(0)
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO at TechCorp",
      content: "The dashboard he built transformed our workflow. Performance improved by 300%!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b786d4d9?w=400&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      content: "Exceptional attention to detail. The React components are perfectly optimized.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Alex Rodriguez",
      role: "Startup Founder",
      content: "Delivered ahead of schedule with outstanding quality. Will definitely work again!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Emma Wilson",
      role: "UX Lead",
      content: "The animations are smooth and the UX is flawless. Exactly what we needed.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "David Park",
      role: "Engineering Director",
      content: "Scalable architecture with clean code. The team was impressed with the delivery.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop"
    }
  ]

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 300
    }
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 300
    }
  }

  const handleCardClick = (index: number) => {
    setActiveIndex(index)
  }

  // Auto-scroll to center the active card
  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = 320 // Card width + gap
      const scrollPosition = activeIndex * cardWidth - (carouselRef.current.clientWidth / 2) + (cardWidth / 2)
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })
    }
  }, [activeIndex])

  return (
    <div className="w-full bg-[#000d1a] py-8 px-4">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Client Testimonials
        </h2>
        <p className="text-gray-100 max-w-2xl mx-auto">
          See what clients say about working with me
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Navigation Buttons - Desktop */}
        <button
          onClick={handlePrev}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <button
          onClick={handleNext}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>

        {/* Carousel */}
        <div className="relative overflow-visible">
          <div
            ref={carouselRef}
            className="flex gap-6 p-8 md:gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex
              const distance = Math.abs(index - activeIndex)
              
              return (
                <motion.div
                  key={testimonial.id}
                  className={`flex-shrink-0 snap-center ${
                    isActive ? 'cursor-default' : 'cursor-pointer'
                  }`}
                  onClick={() => handleCardClick(index)}
                  initial={false}
                  animate={{
                    scale: isActive ? 1 : 0.85,
                    opacity: isActive ? 1 : 0.7,
                    y: isActive ? 0 : 20
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  whileHover={!isActive ? { scale: 0.9 } : {}}
                  style={{
                    width: isActive ? '320px' : '280px',
                  }}
                >
                  <div className={`relative ${
                    isActive 
                      ? 'shadow-2xl ring-2 ring-blue-500 ring-opacity-20' 
                      : 'shadow-lg'
                  } rounded-2xl overflow-hidden transition-all duration-300`}>
                    <TestimonialCard
                      {...testimonial}
                      isActive={isActive}
                    />
                    
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center gap-3 mt-8 md:hidden">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleCardClick(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Desktop Navigation Numbers */}
        <div className="hidden md:flex justify-center items-center gap-2 mt-8">
          <span className="text-white/50 font-semibold">
            {activeIndex + 1}
          </span>
          <span className="text-white/60">/</span>
          <span className="text-white">{testimonials.length}</span>
        </div>
      </div>

      {/* Mobile Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-8 md:hidden">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={handleNext}
          className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  )
}