// components/GlassTestimonialCard.tsx
import { Star } from "lucide-react"

interface GlassTestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
  image: string
  isActive?: boolean
}

export default function TestimonialCard({
  name,
  role,
  content,
  rating,
  image,
  isActive = false
}: GlassTestimonialCardProps) {
  return (
    <div className={`
      relative
      ${isActive ? 'backdrop-blur-xl' : 'backdrop-blur-lg'}
      bg-white/10
      border border-white/20
      rounded-2xl
      p-6
      shadow-2xl
      ${isActive ? 'shadow-blue-500/10' : 'shadow-white/5'}
      overflow-hidden
      transition-all duration-500
      hover:border-white/30
      ${isActive ? 'scale-105' : 'scale-95'}
    `}>
      {/* Glass Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
      
      {/* Animated Border Glow for Active Card */}
      {isActive && (
        <div className="absolute inset-0 rounded-2xl p-[2px]">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse" />
        </div>
      )}
      
      {/* Inner Content Container */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`
            relative
            ${isActive ? 'w-16 h-16' : 'w-14 h-14'}
            rounded-full
            overflow-hidden
            border-2
            ${isActive ? 'border-white/40' : 'border-white/30'}
            shadow-lg
          `}>
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
            {/* Profile Image Glass Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          
          <div className="flex-1">
            <h3 className={`
              font-bold
              ${isActive ? 'text-lg' : 'text-base'}
              text-white
              drop-shadow-lg
            `}>
              {name}
            </h3>
            <p className={`
              ${isActive ? 'text-sm' : 'text-xs'}
              text-white/80
            `}>
              {role}
            </p>
          </div>
        </div>

        {/* Rating with Glass Stars */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={`
                p-1
                rounded-lg
                backdrop-blur-sm
                ${i < rating ? 'bg-yellow-400/20' : 'bg-white/10'}
                border
                ${i < rating ? 'border-yellow-400/30' : 'border-white/10'}
              `}
            >
              <Star
                className={`w-4 h-4 ${
                  i < rating 
                    ? 'fill-yellow-400 text-yellow-400' 
                    : 'fill-white/30 text-white/30'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Content with Glass Background */}
        <div className={`
          mb-6
          p-4
          rounded-xl
          backdrop-blur-md
          bg-white/5
          border border-white/10
        `}>
          <p className={`
            text-white/90
            leading-relaxed
            ${isActive ? 'text-base' : 'text-sm'}
            italic
          `}>
            "{content}"
          </p>
        </div>

        {/* Footer - Only show on active card */}
        {isActive && (
          <div className="pt-4 border-t border-white/20">
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/60">Verified Client</span>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-300">Project Completed</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}