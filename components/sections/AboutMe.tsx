// components/AboutMeEnhanced.tsx
'use client'
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Code2, 
  Palette, 
  Globe, 
  Users, 
  Calendar,
  Award,
  Trophy,
  Sparkles,
  ExternalLink,
  ArrowRight,
  Briefcase,
  Rocket,
  TrendingUp,
  Clock,
  CheckCircle,
  Star
} from "lucide-react"
import Link from "next/link"

export default function AboutMe() {
  const [activeProject, setActiveProject] = useState<string | null>("apple")
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)

  const projects = [
    {
      id: "apple",
      title: "Apple Mac Experience",
      role: "خبير تصميم UI/UX",
      description: "إعادة تصميم تجربة مستخدم متجر Apple Mac مع التركيز على سلاسة التصفح وتحسين التحويلات",
      link: "https://mac-blond.vercel.app",
      tech: ["Next.js 14", "Tailwind CSS", "Framer Motion", "TypeScript"],
      stats: { conversions: "+40%", speed: "98", satisfaction: "4.9" },
      color: "from-gray-900 to-gray-700",
      icon: Palette
    },
    {
      id: "stockify",
      title: "Stockify",
      role: "مطور Full Stack",
      description: "منصة متكاملة للأسواق المالية مع تحليل بيانات في الوقت الحقيقي وتنبؤات ذكية",
      link: "https://stockify-two-gamma.vercel.app",
      tech: ["Next.js", "Node.js", "PostgreSQL", "D3.js", "WebSocket"],
      stats: { users: "10K+", accuracy: "92%", growth: "300%" },
      color: "from-blue-600 to-cyan-500",
      icon: TrendingUp
    },
    {
      id: "clients",
      title: "مشاريع العملاء",
      role: "مستشار تقني",
      description: "مساعدة أكثر من 200 عميل على بناء وتحسين وجودهم الرقمي",
      tech: ["E-commerce", "Dashboards", "Landing Pages", "Web Apps"],
      stats: { projects: "200+", satisfaction: "98%", retention: "85%" },
      color: "from-purple-600 to-pink-500",
      icon: Users
    }
  ]

  const timeline = [
    {
      year: "2024",
      title: "خبير تصميم تجربة المستخدم",
      company: "مشاريع عالمية",
      description: "تخصص في تصميم واجهات المستخدم المعقدة مع التركيز على قابلية الاستخدام"
    },
    {
      year: "2023",
      title: "مطور Full Stack متقدم",
      company: "شركات ناشئة",
      description: "بناء أنظمة متكاملة مع بنية قابلة للتطوير وأداء عالي"
    },
    {
      year: "2022",
      title: "مستشار تقني",
      company: "عملاء متنوعين",
      description: "مساعدة الشركات على التحول الرقمي وتحسين وجودها على الإنترنت"
    },
    {
      year: "2021",
      title: "مطور ويب متخصص",
      company: "مشاريع حرّة",
      description: "بداية التخصص في تقنيات JavaScript الحديثة"
    },
    {
      year: "2020",
      title: "بداية الرحلة",
      company: "تعلم وتطوير",
      description: "البداية مع أساسيات البرمجة وتطوير الويب"
    }
  ]

  const stats = [
    { icon: Calendar, value: "6+", label: "سنوات خبرة", color: "bg-blue-500" },
    { icon: Users, value: "200+", label: "عميل راضٍ", color: "bg-green-500" },
    { icon: Trophy, value: "50+", label: "مشروع مكتمل", color: "bg-yellow-500" },
    { icon: Award, value: "98%", label: "رضا العملاء", color: "bg-purple-500" },
    { icon: Clock, value: "24/7", label: "دعم فني", color: "bg-pink-500" },
    { icon: Star, value: "4.9", label: "تقييم عام", color: "bg-orange-500" }
  ]

  const skills = [
    { name: "Next.js", level: 95, category: "Frontend" },
    { name: "React", level: 98, category: "Frontend" },
    { name: "TypeScript", level: 90, category: "Language" },
    { name: "UI/UX Design", level: 92, category: "Design" },
    { name: "Node.js", level: 88, category: "Backend" },
    { name: "Tailwind CSS", level: 96, category: "Frontend" },
    { name: "Framer Motion", level: 94, category: "Animation" },
    { name: "PostgreSQL", level: 85, category: "Database" }
  ]

  return (
    <div dir="rtl" className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 mb-6">
            <Sparkles className="w-5 h-5 text-blue-500" />
            <span className="text-blue-700 font-semibold text-sm">
              محفظة الأعمال والخبرات
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            أعمالي و{" "}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                خبراتي
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-lg opacity-30"></div>
            </span>{" "}
            السابقة
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            أكثر من 6 سنوات في تطوير الويب وتصميم تجارب المستخدم، مسجلاً نجاحات ملحوظة مع العملاء المحليين والعالميين
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 text-center shadow-lg transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${stat.color} mb-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
                
                {/* Hover Effect */}
                <AnimatePresence>
                  {hoveredStat === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl border-2 border-blue-200 -z-10"
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Projects Showcase */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">أبرز المشاريع</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {projects.map((project) => {
              const Icon = project.icon
              const isActive = activeProject === project.id
              
              return (
                <motion.div
                  key={project.id}
                  className={`relative cursor-pointer ${
                    isActive ? 'lg:scale-105' : 'lg:scale-95'
                  } transition-all duration-500`}
                  onClick={() => setActiveProject(project.id)}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Card */}
                  <div className={`relative rounded-3xl overflow-hidden border-2 ${
                    isActive ? 'border-blue-500 shadow-2xl' : 'border-gray-200 shadow-lg'
                  }`}>
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`}></div>
                    
                    {/* Content */}
                    <div className="relative bg-white/90 backdrop-blur-sm p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 text-lg">{project.title}</h3>
                            <p className="text-sm text-gray-600">{project.role}</p>
                          </div>
                        </div>
                        
                        {project.link && (
                          <Link 
                            href={project.link}
                            target="_blank"
                            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                          >
                            <ExternalLink className="w-5 h-5 text-gray-700" />
                          </Link>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 mb-6">{project.description}</p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(project.stats).map(([key, value], idx) => (
                          <div key={key} className="text-center">
                            <div className="text-xl font-bold text-gray-900">{value}</div>
                            <div className="text-xs text-gray-600 capitalize">
                              {key === 'conversions' && 'تحويلات'}
                              {key === 'speed' && 'سرعة'}
                              {key === 'satisfaction' && 'رضا'}
                              {key === 'users' && 'مستخدمين'}
                              {key === 'accuracy' && 'دقة'}
                              {key === 'growth' && 'نمو'}
                              {key === 'projects' && 'مشاريع'}
                              {key === 'retention' && 'استمرارية'}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {isActive && (
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">رحلة الخبرة</h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute right-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-purple-300"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-start gap-6"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center">
                    <span className="font-bold text-gray-900">{item.year}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                        {item.company}
                      </span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">المهارات التقنية</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {skills.slice(0, 4).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="font-medium text-gray-900">{skill.name}</span>
                    </div>
                    <span className="text-gray-600 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-full rounded-full ${
                        skill.level > 90 ? 'bg-green-500' :
                        skill.level > 80 ? 'bg-blue-500' :
                        skill.level > 70 ? 'bg-yellow-500' : 'bg-purple-500'
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6">
              {skills.slice(4).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (index + 4) * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      <span className="font-medium text-gray-900">{skill.name}</span>
                    </div>
                    <span className="text-gray-600 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: (index + 4) * 0.1 }}
                      className={`h-full rounded-full ${
                        skill.level > 90 ? 'bg-green-500' :
                        skill.level > 80 ? 'bg-blue-500' :
                        skill.level > 70 ? 'bg-yellow-500' : 'bg-purple-500'
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    مستعد لبدء مشروعك؟
                  </span>
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  دعنا نعمل معاً لتحويل أفكارك إلى واقع رقمي مذهل
                </p>
                
                <div className="flex flex-wrap gap-4">
                  {[
                    "تطوير ويب متكامل",
                    "تصميم UX/UI احترافي",
                    "استشارات تقنية",
                    "صيانة وتطوير"
                  ].map((service, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-200">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <span>تواصل معي الآن</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <button className="px-8 py-4 border-2 border-white/20 text-white rounded-xl hover:bg-white/10 transition-colors duration-300">
                  عرض أعمال أخرى
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}