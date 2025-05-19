"use client"

import { Star } from "lucide-react"
import { Image } from "@/components/ui/image"
import { motion } from "framer-motion"
import { config } from "@/lib/config"

interface TestimonialCardProps {
  quote: string
  author: string
  rating: number
  image?: string
}

export default function TestimonialCard({ quote, author, rating, image = "/placeholder.svg?height=48&width=48" }: TestimonialCardProps) {
  return (
    <motion.div 
      className={`border border-[${config.branding.colors.primary}]/10 rounded-lg p-6 space-y-4 bg-white relative shadow-sm hover:shadow-md transition-shadow h-full flex flex-col`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <motion.div 
        className="flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2, delay: 0.1 * i }}
          >
            <Star className={`w-5 h-5 ${i < rating ? `fill-[${config.branding.colors.secondary}] text-[${config.branding.colors.secondary}]` : "text-gray-300"}`} />
          </motion.div>
        ))}
      </motion.div>

      <div className="flex-grow overflow-hidden">
        <p className={`text-[${config.branding.colors.text}] line-clamp-6 text-ellipsis`}>"{quote}"</p>
      </div>

      <div className="flex items-center gap-3 pt-2 mt-auto">
        <motion.div 
          className={`w-12 h-12 rounded-full overflow-hidden relative border-2 border-[${config.branding.colors.secondary}]/20`}
          whileHover={{ scale: 1.1 }}
        >
          <Image 
            src={image} 
            alt={author} 
            width={48} 
            height={48} 
            className="object-cover" 
          />
        </motion.div>
        <span className={`font-medium text-[${config.branding.colors.primary}]`}>{author}</span>
      </div>
    </motion.div>
  )
}
