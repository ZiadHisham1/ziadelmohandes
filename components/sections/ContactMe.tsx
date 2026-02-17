// components/ContactMeEnhanced.tsx
'use client'
import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Calendar,
  Video,
  User,
  Sparkles,
  Paperclip,
  Loader2
} from "lucide-react"
import { toast, Toaster } from "sonner"

export default function ContactMeEnhanced() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    budget: "",
    timeline: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeTab, setActiveTab] = useState<"form" | "info" | "social">("form")

  // Generate fixed dot positions (hydration-safe)
  const dotPositions = useMemo(() => {
    const positions = []
    for (let i = 0; i < 20; i++) {
      positions.push({
        top: `${(i * 5) % 100}%`,
        left: `${(i * 4.8) % 100}%`,
        duration: 3 + (i * 0.25) % 4
      })
    }
    return positions
  }, [])

  const contactMethods = [
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: "zziadhisham947@gmail.com",
      link: "mailto:zziadhisham947@gmail.com",
      color: "bg-blue-500",
      description: "رد خلال 24 ساعة"
    },
    {
      icon: Phone,
      title: "الهاتف / واتساب",
      value: "+20 115 701 6318",
      link: "https://wa.me/201157016318",
      color: "bg-green-500",
      description: "متاح 9 صباحاً - 6 مساءً"
    },
    {
      icon: MapPin,
      title: "الموقع",
      value: "القاهرة، مصر",
      link: "https://maps.google.com",
      color: "bg-red-500",
      description: "اجتماعات شخصية متاحة"
    },
    {
      icon: Calendar,
      title: "حجز اجتماع",
      value: "Calendly",
      link: "https://calendly.com",
      color: "bg-purple-500",
      description: "30 دقيقة مجانية"
    }
  ]

  const socialLinks = [
    // {
    //   icon: Linkedin,
    //   label: "LinkedIn",
    //   handle: "@ziadelmohandes",
    //   link: "https://linkedin.com",
    //   color: "from-blue-600 to-blue-800"
    // },
    // {
    //   icon: Github,
    //   label: "GitHub",
    //   handle: "@ziadelmohandes",
    //   link: "https://github.com",
    //   color: "from-gray-800 to-gray-900"
    // },
    {
      icon: Twitter,
      label: "Twitter",
      handle: "@ziadtweets",
      link: "https://twitter.com",
      color: "from-sky-500 to-blue-500"
    },
    {
      icon: Instagram,
      label: "Instagram",
      handle: "@ziad.elmohandes",
      link: "https://www.instagram.com/ziad.elmohandes?igsh=MTNrNDF2ZTJwNHpn",
      color: "from-pink-500 to-purple-600"
    }
  ]

  const projectTypes = [
    "موقع ويب شخصي",
    "متجر إلكتروني",
    "تطبيق ويب",
    "تطبيق جوال",
    "تصميم UX/UI",
    "استشارة تقنية",
    "صيانة موقع",
    "آخر"
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast.success("تم إرسال رسالتك بنجاح! سأرد عليك خلال 24 ساعة.")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        budget: "",
        timeline: ""
      })
    }, 2000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-center" richColors />
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
        
        {/* Fixed Dots (Hydration-safe) */}
        {dotPositions.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
            style={{
              top: dot.top,
              left: dot.left,
              animation: `float ${dot.duration}s infinite ease-in-out`
            }}
          />
        ))}
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
              دعنا نعمل معاً
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            تواصل{" "}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                معي
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-lg opacity-30"></div>
            </span>{" "}
            الآن
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            أخبرني عن مشروعك وسأرد عليك خلال 24 ساعة لأبدأ في تحويل أفكارك إلى واقع رقمي
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("form")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === "form"
                ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                : "bg-white border border-gray-300 text-gray-700 hover:border-blue-300"
            }`}
          >
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              <span>إرسال رسالة</span>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("info")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === "info"
                ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/30"
                : "bg-white border border-gray-300 text-gray-700 hover:border-green-300"
            }`}
          >
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>معلومات التواصل</span>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("social")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === "social"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30"
                : "bg-white border border-gray-300 text-gray-700 hover:border-purple-300"
            }`}
          >
            <div className="flex items-center gap-2">
              <Send className="w-5 h-5" />
              <span>وسائل التواصل</span>
            </div>
          </motion.button>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          {/* Left Column - Contact Form */}
          <AnimatePresence mode="wait">
            {activeTab === "form" && (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                className="bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden"
              >
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">أخبرني عن مشروعك</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          الاسم الكامل
                        </label>
                        <div className="relative">
                          <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                            placeholder="أدخل اسمك"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          البريد الإلكتروني
                        </label>
                        <div className="relative">
                          <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                            placeholder="example@domain.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        نوع المشروع
                      </label>
                      <div className="relative">
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                        >
                          <option value="">اختر نوع المشروع</option>
                          {projectTypes.map((type, idx) => (
                            <option key={idx} value={type}>{type}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
                          <Paperclip className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          الميزانية المتوقعة
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                        >
                          <option value="">اختر ميزانية</option>
                          <option value="less-5k">أقل من 5,000 جنيه</option>
                          <option value="5k-10k">5,000 - 10,000 جنيه</option>
                          <option value="10k-20k">10,000 - 20,000 جنيه</option>
                          <option value="20k-50k">20,000 - 50,000 جنيه</option>
                          <option value="50k+">أكثر من 50,000 جنيه</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          الجدول الزمني
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                        >
                          <option value="">اختر مدة المشروع</option>
                          <option value="1-2w">1-2 أسبوع</option>
                          <option value="2-4w">2-4 أسابيع</option>
                          <option value="1-2m">1-2 شهر</option>
                          <option value="2-3m">2-3 أشهر</option>
                          <option value="3m+">أكثر من 3 أشهر</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        تفاصيل المشروع
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                        placeholder="صف لي مشروعك بالتفصيل، ما هي أهدافك؟ ما هي الميزات التي تحتاجها؟ أي أفكار أخرى تريد مشاركتها؟"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 ${
                        isSubmitting
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-lg hover:shadow-blue-500/30'
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-3">
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>جاري الإرسال...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-3">
                          <Send className="w-5 h-5" />
                          <span>إرسال الرسالة</span>
                        </div>
                      )}
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            )}

            {/* Contact Info */}
            {activeTab === "info" && (
              <motion.div
                key="info"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                className="space-y-6"
              >
                <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">وسائل التواصل المباشرة</h2>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    {contactMethods.map((method, idx) => {
                      const Icon = method.icon
                      return (
                        <motion.a
                          key={idx}
                          href={method.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -5 }}
                          className="block"
                        >
                          <div className="flex flex-col bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:border-blue-300 transition-all duration-300">
                            <div className=" gap-4">
                              <div className="flex gap-2 items-center"> 
                                <div className={`w-12 h-12 rounded-xl ${method.color} flex items-center justify-center flex-shrink-0`}>
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-1">{method.title}</h3>
                              </div>
                              
                              <div className="flex-1 py-2">
                                <p className="text-gray-600 mb-2">{method.value}</p>
                                <div className="flex items-center gap-2">
                                  <Clock className="w-4 h-4 text-gray-400" />
                                  <span className="text-sm text-gray-500">{method.description}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.a>
                      )
                    })}
                  </div>
                </div>

                {/* Working Hours */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl border border-blue-200 p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">أوقات العمل</h3>
                  <div className="space-y-3">
                    {[
                      { day: "الأحد - الخميس", time: "9:00 صباحاً - 6:00 مساءً" },
                      { day: "الجمعة", time: "10:00 صباحاً - 2:00 مساءً" },
                      { day: "السبت", time: "إجازة" }
                    ].map((schedule, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-white/50 rounded-xl">
                        <span className="font-medium text-gray-900">{schedule.day}</span>
                        <span className="text-gray-600">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Social Links */}
            {activeTab === "social" && (
              <motion.div
                key="social"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                className="space-y-6"
              >
                <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">تابعني على</h2>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {socialLinks.map((social, idx) => {
                      const Icon = social.icon
                      return (
                        <motion.a
                          key={idx}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          className={`block bg-gradient-to-br ${social.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                              <Icon className="w-6 h-6" />
                            </div>
                            
                            <div>
                              <h3 className="font-bold text-lg">{social.label}</h3>
                              <p className="text-white/80 text-sm">{social.handle}</p>
                            </div>
                          </div>
                        </motion.a>
                      )
                    })}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl border border-purple-200 p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">إجراءات سريعة</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 bg-white rounded-xl border border-gray-200 hover:border-purple-300 transition-colors duration-300 flex items-center justify-center gap-3"
                    >
                      <Video className="w-5 h-5 text-purple-600" />
                      <span className="font-medium text-gray-900">اجتماع فيديو</span>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toast.info("نسخة من السيرة الذاتية تم إرسالها إلى بريدك")}
                      className="p-4 bg-white rounded-xl border border-gray-200 hover:border-purple-300 transition-colors duration-300 flex items-center justify-center gap-3"
                    >
                      <Paperclip className="w-5 h-5 text-purple-600" />
                      <span className="font-medium text-gray-900">السيرة الذاتية</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Right Column - Info & Stats */}
          <div className="space-y-8">
            {/* Success Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 text-white relative overflow-hidden"
            >
              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    إحصائيات التواصل
                  </span>
                </h3>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "24", label: "ساعة رد", icon: Clock },
                    { value: "98%", label: "رضا العملاء", icon: CheckCircle },
                    { value: "200+", label: "مشروع مكتمل", icon: CheckCircle },
                    { value: "30", label: "دقيقة استشارة", icon: Video }
                  ].map((stat, idx) => {
                    const Icon = stat.icon
                    return (
                      <div key={idx} className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-white/10 to-white/5 mb-3">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="text-3xl font-bold mb-1">{stat.value}</div>
                        <div className="text-white/80 text-sm">{stat.label}</div>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-green-400" />
                    <p className="text-white/90">أفضل وقت للتواصل: صباحاً من 10 صباحاً - 12 ظهراً</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonials Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl border border-gray-200 shadow-xl p-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">ماذا يقول العملاء</h3>
              
              <div className="space-y-6">
                {[
                  {
                    name: "أحمد محمد",
                    company: "CEO, TechStart",
                    comment: "رد سريع ومهنية عالية. المشروع تم تسليمه قبل الوقت!",
                    rating: 5
                  },
                  {
                    name: "سارة خالد",
                    company: "Product Manager",
                    comment: "التواصل كان ممتازاً طوال فترة العمل. أنصح بالتعامل معه.",
                    rating: 5
                  }
                ].map((testimonial, idx) => (
                  <div key={idx} className="p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.company}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">{testimonial.comment}</p>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <div key={i} className="w-4 h-4 text-yellow-400">★</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* FAQ Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl border border-green-200 p-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">أسئلة شائعة</h3>
              
              <div className="space-y-4">
                {[
                  "ما هي مدة تنفيذ المشروع؟",
                  "كيف تتم عملية الدفع؟",
                  "هل تقدم صيانة بعد التسليم؟"
                ].map((question, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">؟</span>
                    </div>
                    <span className="text-gray-800">{question}</span>
                  </div>
                ))}
              </div>
              
              <button className="mt-6 text-green-600 font-medium hover:text-green-700 transition-colors">
                عرض جميع الأسئلة →
              </button>
            </motion.div>
          </div>
        </div>

        {/* Map & Location (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">موقعي</h2>
            <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">القاهرة، مصر</p>
                <p className="text-gray-500 text-sm mt-2">اجتماعات شخصية متاحة بالترتيب المسبق</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}