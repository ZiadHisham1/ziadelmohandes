// components/Hero.tsx
'use client'
import { useState, useEffect, useMemo } from "react"
import { motion } from "framer-motion"
import { 
  ChevronDown, 
  Sparkles, 
  Code2, 
  Palette, 
  Zap,
  ArrowRight,
  MousePointerClick,
  Rocket
} from "lucide-react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [mounted, setMounted] = useState(false)
  const roles = ["Full Stack Developer", "UI/UX Designer", "Problem Solver", "Tech Innovator"]
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // Generate consistent particle positions (hydration-safe)
  const particlePositions = useMemo(() => {
    // Generate fixed positions that don't change between server/client
    const positions = []
    for (let i = 0; i < 30; i++) {
      positions.push({
        x: (i * 3.33) % 100, // Deterministic pattern instead of Math.random()
        y: (i * 2.77) % 100,
        duration: 3 + (i * 0.13) % 4,
        delay: (i * 0.067) % 2
      })
    }
    return positions
  }, [])

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentRole.length) {
          setTypedText(currentRole.substring(0, typedText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentRole.substring(0, typedText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [typedText, isDeleting, currentRoleIndex])

  // Set mounted state
  useEffect(() => {
    setMounted(true)
    
    // Background image loading
    const img = new Image()
    img.src = "/images/hero-bg.jpg"
    img.onload = () => setIsLoaded(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Don't render dynamic content during SSR
  if (!mounted) {
    return (
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="text-white text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h1 className="text-2xl font-bold">Loading Portfolio...</h1>
        </div>
      </section>
    )
  }

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Fallback gradient background */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div> */}
        
        {/* Background Image */}
        {!isLoaded && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/banner.png)',
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center -00%',
            }}
          />
        )}

        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
        
        {/* Fixed Particle System (Hydration-safe) */}
        <div className="absolute inset-0">
          {particlePositions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              initial={{ 
                x: `${pos.x}vw`,
                y: `${pos.y}vh`
              }}
              animate={{
                y: [null, -20, 20],
                x: [null, (i % 10) - 5],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{
                duration: pos.duration,
                repeat: Infinity,
                ease: "linear",
                delay: pos.delay
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">مرحباً بك في عالم الابتكار الرقمي</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="block">أنا</span>
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  زياد هشام
                </span>
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-xl opacity-30"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </span>
            </h1>

            {/* Typewriter Text */}
            <div className="h-20 mb-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90"
              >
                <span className="text-cyan-400">|</span>{" "}
                {typedText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-1 h-8 bg-cyan-400 ml-2 align-middle"
                />
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-white/80 mb-10 max-w-2xl"
            >
              أبتكر حلولاً رقمية استثنائية تجمع بين الجمال البصري والأداء الفائق. 
              متخصص في بناء تجارب مستخدم لا تُنسى مع أحدث تقنيات الويب.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("projects")}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-3"
              >
                <span>عرض أعمالي</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
              >
                <MousePointerClick className="w-5 h-5" />
                <span>تواصل معي</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { value: "6+", label: "سنوات خبرة", icon: Code2 },
                { value: "200+", label: "مشروع ناجح", icon: Palette },
                { value: "99%", label: "رضا العملاء", icon: Zap }
              ].map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <div key={idx} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm mb-2">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Floating Elements Container */}
            <div className="relative h-[500px]">
              
              {/* Main Floating Card */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 2, 0, -2, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64"
              >
                <div className="relative w-full h-full">
                  {/* Profile Image */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden border-4 border-white/30 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20"></div>
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage: 'url(/images/ziad-hisham.jpeg)',
                        objectPosition: 'center_60%'
                      }}
                    />
                    {/* Fallback Initials */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                      <span className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        ZH
                      </span>
                    </div>
                  </div>
                  
                  {/* Floating Badge */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 10, 0, -10, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full font-bold shadow-lg"
                  >
                    متاح الآن
                  </motion.div>
                </div>
              </motion.div>

              {/* Fixed Tech Icons (no random positioning) */}
              {[
                { icon: "⚛️", label: "React", x: "10%", y: "20%", delay: 0 },
                { icon: "▲", label: "Next.js", x: "80%", y: "30%", delay: 0.5 },
                { icon: "λ", label: "TypeScript", x: "15%", y: "70%", delay: 1 },
                { icon: "🎨", label: "Figma", x: "85%", y: "75%", delay: 1.5 }
              ].map((tech, idx) => (
                <motion.div
                  key={idx}
                  className="absolute"
                  style={{ left: tech.x, top: tech.y }}
                  animate={{ 
                    y: [0, -30, 0],
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 3 + idx,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: tech.delay
                  }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex flex-col items-center justify-center shadow-lg">
                    <span className="text-2xl mb-1">{tech.icon}</span>
                    <span className="text-xs text-white/80">{tech.label}</span>
                  </div>
                </motion.div>
              ))}

              {/* Animated Rings */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-white/10"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-cyan-500/20"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.button
          onClick={() => scrollToSection("about")}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
        >
          <span className="text-sm mb-2">اكتشف المزيد</span>
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-60 h-60 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
    </section>
  )
}