// components/IncreasProfits.tsx
'use client'
import { motion } from "framer-motion"
import { 
  TrendingUp, 
  Globe, 
  Users, 
  Zap, 
  ArrowUpRight,
  CheckCircle,
  Sparkles,
  Target,
  BarChart3
} from "lucide-react"
import { useState } from "react"

export default function IncreasProfits() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  const steps = [
    {
      id: 1,
      title: "الوجود الرقمي",
      description: "موقع احترافي يعرض خدماتك على مدار الساعة",
      icon: Globe,
      stats: "+300%",
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      title: "الوصول للجمهور",
      description: "وصول لا محدود للعملاء المحتملين عبر الإنترنت",
      icon: Users,
      stats: "10x",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "الحجوزات الآلية",
      description: "نظام حجوزات تلقائي يوفر وقتك ويزيد الكفاءة",
      icon: Zap,
      stats: "24/7",
      color: "from-orange-500 to-yellow-400"
    },
    {
      id: 4,
      title: "تحليل البيانات",
      description: "تقارير مفصلة لفهم عملائك وتحسين الخدمات",
      icon: BarChart3,
      stats: "+80%",
      color: "from-green-500 to-emerald-400"
    }
  ]

  const benefits = [
    "زيادة المبيعات بنسبة تصل إلى 300%",
    "تخفيض التكاليف التسويقية",
    "وصول عالمي على مدار الساعة",
    "مصداقية وثقة أعلى لدى العملاء",
    "تتبع وتحليل سلوك العملاء",
    "منافسة أقوى في السوق الرقمي"
  ]

  return (
    <div dir="rtl" className="relative overflow-hidden border-t bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #888 1px, transparent 1px),
                            linear-gradient(to bottom, #888 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <Sparkles className="w-5 h-5 text-blue-500" />
            <span className="text-blue-700 font-semibold text-sm">
              استراتيجية رقمية مجربة
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            كيف تضاعف{" "}
            <motion.span
              className="relative inline-block"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="relative">
                أرباحك
                <span className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30"></span>
              </span>
            </motion.span>{" "}
            إلى{" "}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                3 أضعاف
              </span>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-xl opacity-20"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            خطوات عملية مدعومة بإحصائيات حقيقية لتحويل عملك إلى إمبراطورية رقمية
          </p>
        </motion.div>

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { label: "زيادة المبيعات", value: "300%", icon: TrendingUp },
            { label: "عملاء جدد", value: "10x", icon: Users },
            { label: "نمو سنوي", value: "150%", icon: Target },
            { label: "عائد استثماري", value: "5x", icon: ArrowUpRight }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 mb-4">
                <stat.icon className="w-7 h-7 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Steps Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                خطوات عملية للتحول الرقمي
              </h2>
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.id}
                    className={`relative p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                      hoveredStep === step.id
                        ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-white shadow-xl'
                        : 'border-gray-200 bg-white hover:border-blue-300'
                    }`}
                    onMouseEnter={() => setHoveredStep(step.id)}
                    onMouseLeave={() => setHoveredStep(null)}
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-7 h-7 text-white" />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-2 border-white flex items-center justify-center">
                          <span className="text-xs font-bold text-gray-900">{step.id}</span>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                          <motion.span
                            className={`text-lg font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
                            animate={hoveredStep === step.id ? { scale: [1, 1.2, 1] } : {}}
                            transition={{ duration: 0.5 }}
                          >
                            {step.stats}
                          </motion.span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>

                    {/* Progress Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute -bottom-6 right-8 w-0.5 h-6 bg-gradient-to-b from-blue-300 to-transparent"></div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Benefits & CTA */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 text-white relative overflow-hidden"
            >
              {/* Floating Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-2xl"></div>

              <h3 className="text-2xl font-bold mb-6 relative z-10">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  فوائد التحول الرقمي
                </span>
              </h3>

              <div className="space-y-4 mb-8 relative z-10">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-200">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="relative z-10">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  موقع ويب احترافي هو استثمار ذكي يبدأ من 5000 جنيه فقط ويعود عليك بأرباح تصل إلى 10x خلال أول 6 أشهر.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <span>ابدأ التحول الرقمي الآن</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.button>

                  <button className="px-6 py-4 border-2 border-white/20 text-white rounded-xl hover:bg-white/10 transition-colors duration-300">
                    احجز استشارة مجانية
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Stats Bottom */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { value: "98%", label: "رضا العملاء" },
                { value: "24/7", label: "دعم فني" },
                { value: "15 يوم", label: "تسليم الموقع" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-xl border border-gray-200">
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop"
                alt="Client"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">أحمد محمود</h4>
              <p className="text-gray-600 text-sm">مالك مركز علاج طبيعي</p>
            </div>
          </div>
          <p className="text-gray-800 text-lg italic">
            "بعد إنشاء الموقع الإلكتروني، زادت حجوزات العملاء بنسبة 400% في أول 3 أشهر. 
            أفضل استثمار قمنا به على الإطلاق!"
          </p>
          <div className="flex gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-6 h-6 text-yellow-400">
                ★
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}