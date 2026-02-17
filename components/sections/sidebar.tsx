// components/EnhancedResponsiveSidebar.tsx
'use client'

import { 
  Home, 
  User, 
  Sparkles, 
  Phone, 
  Menu, 
  X,
  Code2,
  Briefcase,
  Award,
  Mail,
  Moon,
  Sun,
  Linkedin,
  Github,
  Twitter,
  ExternalLink,
  ChevronRight,
  FileText
} from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function EnhancedResponsiveSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Detect mobile and scroll
  useEffect(() => {
    setMounted(true)
    
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024
      setIsMobile(mobile)
      if (!mobile) setIsOpen(true)
    }
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Update active section
      const sections = ['home', 'about', 'skills', 'projects', 'testimonials', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
    if (isMobile) setIsOpen(false)
  }

  const menuItems = [
    { icon: Home, label: 'Home', section: 'home', color: 'from-blue-500 to-cyan-400' },
    { icon: User, label: 'About & Projects', section: 'about', color: 'from-purple-500 to-pink-500' },
    { icon: Code2, label: 'Skills', section: 'skills', color: 'from-green-500 to-emerald-400' },
    // { icon: Briefcase, label: 'Projects', section: 'projects', color: 'from-orange-500 to-yellow-400' },
    { icon: Award, label: 'Testimonials', section: 'testimonials', color: 'from-red-500 to-pink-500' },
    { icon: Mail, label: 'Contact', section: 'contact', color: 'from-indigo-500 to-blue-400' },
  ]

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/ziadhisham', color: 'bg-blue-600' },
    { icon: Github, label: 'GitHub', url: 'https://github.com/ziadhisham', color: 'bg-gray-800' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com/ziadhisham', color: 'bg-sky-500' },
  ]

  if (!mounted) return null

  return (
    <>
      {/* Mobile Top Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`lg:hidden fixed backdrop-blur-md border-b border-[#ffffff31] top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="sm:hidden md:block container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-3"
            >
              <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-white/20 shadow-lg">
                <Image
                  src="/images/ziadhisham.jpeg"
                  alt="Ziad Hisham"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <div className="text-left">
                <h1 className={`font-bold text-lg ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  Ziad Hisham
                </h1>
                <p className={`text-xs ${scrolled ? 'text-gray-600' : 'text-gray-300'}`}>
                  Full Stack Dev
                </p>
              </div>
            </motion.button>

            {/* Right Side Controls */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full ${
                  scrolled 
                    ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Mobile Menu Toggle */}
              
            </div>
          </div>

          {/* Mobile Nav Items (Horizontal Scroll) */}
          <div 
            className="mt-3 overflow-x-auto"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div className="flex space-x-2 pb-2">
              {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.section
                return (
                  <motion.button
                    key={item.section}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.section)}
                    className={`flex-shrink-0 px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
                      isActive
                        ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                        : scrolled
                          ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="font-medium text-sm">{item.label}</span>
                  </motion.button>
                )
              })}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Desktop Sidebar / Mobile Drawer */}
      <motion.aside
        initial={false}
        animate={{ 
          x: isOpen ? 0 : (isMobile ? '-100%' : 0),
          opacity: isMobile ? (isOpen ? 1 : 0) : 1
        }}
        transition={{ type: 'spring', damping: 25 }}
        className={`
          fixed lg:sticky top-0 left-0 hidden md:block 
          h-screen w-80
          ${isDarkMode 
            ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' 
            : 'bg-gradient-to-b from-white via-gray-50 to-white'
          }
          border-r ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}
          z-40
          overflow-hidden
          shadow-2xl
        `}
      >
        {/* Sidebar Content */}
        <div className="h-full flex flex-col">
          {/* Logo & Profile */}
          <div className={`p-8 ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} border-b`}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex flex-col items-center gap-4"
            >
              {/* Profile Image with Glow */}
              <div className="relative">
              {/* Gradient Background */}
              <div className={`absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-20 animate-pulse z-0`}></div>
              
              {/* Image Container with negative z-index */}
              <div className="relative w-36 h-36 overflow-hidden rounded-full border-4 border-white/30 shadow-2xl z-10">
                <Image
                  src="/images/ziadhisham.jpeg"
                  alt="Ziad Hisham"
                  fill
                  className="object-cover object-bottom z-20"
                  sizes="(max-width: 768px) 144px, 144px"
                  priority
                />
              </div>
              
              {/* Online Status - Separate div with high z-index */}
              <div className="absolute z-50 bottom-3 right-4 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
            </div>

              {/* Name & Title */}
              <div className="text-center">
                <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Ziad Hisham
                </h1>
                <div className="mt-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold inline-block">
                  Full Stack Developer
                </div>
                <p className={`mt-3 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Crafting digital experiences with modern web technologies
                </p>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <nav 
            className="flex-1 p-6 overflow-y-auto"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <style jsx>{`
              nav::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            <div className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.section
                return (
                  <motion.button
                    key={item.section}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection(item.section)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                      isActive
                        ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                        : isDarkMode
                          ? 'hover:bg-white/5 text-gray-400 hover:text-white'
                          : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg ${
                        isActive 
                          ? 'bg-white/20' 
                          : isDarkMode 
                            ? 'bg-gray-800/50' 
                            : 'bg-gray-100'
                      }`}>
                        <Icon size={20} />
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </div>
                    
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 rounded-full bg-white"
                      />
                    )}
                    
                    {!isActive && <ChevronRight size={16} className={isDarkMode ? 'text-gray-500' : 'text-gray-400'} />}
                  </motion.button>
                )
              })}
            </div>

            {/* Quick Actions */}
            <div className="mt-10">
              <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                isDarkMode ? 'text-gray-500' : 'text-gray-400'
              }`}>
                Quick Actions
              </h3>
              <div className="space-y-2">
                <motion.a
                  whileHover={{ x: 5 }}
                  href="/resume.pdf"
                  target="_blank"
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-800/50 hover:bg-gray-800 text-gray-300' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  <FileText size={18} />
                  <span>Download Resume</span>
                  <ExternalLink size={14} className="ml-auto" />
                </motion.a>

                <motion.button
                  whileHover={{ x: 5 }}
                  onClick={() => scrollToSection('contact')}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    isDarkMode 
                      ? 'bg-gradient-to-r from-blue-600/20 to-cyan-600/20 hover:from-blue-600/30 hover:to-cyan-600/30 text-blue-400' 
                      : 'bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 text-blue-600'
                  }`}
                >
                  <Phone size={18} />
                  <span>Hire Me Now</span>
                  <Sparkles size={14} className="ml-auto" />
                </motion.button>
              </div>
            </div>
          </nav>

          {/* Footer */}
          <div className={`p-6 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
            {/* Social Links */}
            <div className="flex justify-center gap-3 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.url}
                    target="_blank"
                    className={`${social.color} w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow`}
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>

            {/* Theme Toggle */}
            <div className={`flex items-center justify-between p-3 rounded-lg ${
              isDarkMode ? 'bg-gray-800/50' : 'bg-gray-100'
            }`}>
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {isDarkMode ? 'Dark Mode' : 'Light Mode'}
              </span>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full transition-colors ${
                  isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            {/* Copyright */}
            <p className={`text-center text-xs mt-6 ${
              isDarkMode ? 'text-gray-500' : 'text-gray-400'
            }`}>
              © {new Date().getFullYear()} Ziad Hisham<br />
              All rights reserved
            </p>
          </div>
        </div>

        {/* Desktop Sidebar Toggle (Collapse) */}
        {!isMobile && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`absolute hidden -right-3 top-6 w-6 h-12 rounded-r-lg flex items-center justify-center ${
              isDarkMode 
                ? 'bg-gray-800 border border-gray-700 text-gray-400 hover:text-white' 
                : 'bg-white border border-gray-200 text-gray-500 hover:text-gray-900'
            } shadow-lg`}
          >
            <ChevronRight className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} size={16} />
          </button>
        )}
      </motion.aside>

      {/* Mobile Sidebar Close Button */}
      {isOpen && isMobile && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsOpen(false)}
          className="fixed top-4 right-4 z-50 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg lg:hidden"
        >
          <X size={20} />
        </motion.button>
      )}
    </>
  )
}