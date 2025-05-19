"use client"

import { Plug, Wind, Droplet, Sun, Fan, Lightbulb, Power, Tv, Battery, HardDrive, Search, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { config } from "@/lib/config"

interface ServiceCardProps {
  icon: "electrical" | "air-conditioning" | "refrigeration" | "solar" | "lighting" | "powerpoints" | "appliances" | "home-battery" | "off-grid" | "fault-diagnosis"
  title: string
  description: string
  subtitle?: string
  licenseNumber?: string
}

export default function ServiceCard({ icon, title, description, subtitle, licenseNumber }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getIcon = () => {
    switch (icon) {
      case "electrical":
        return <Plug className={`w-12 h-12 text-[${config.branding.colors.primary}]`} />
      case "air-conditioning":
        return <Fan className={`w-12 h-12 text-[${config.branding.colors.primary}]`} />
      case "refrigeration":
        return <Droplet className={`w-12 h-12 text-[${config.branding.colors.primary}]`} />
      case "solar":
        return <Sun className={`w-12 h-12 text-[${config.branding.colors.primary}]`} />
      case "lighting":
        return <Lightbulb className={`w-12 h-12 text-[${config.branding.colors.primary}]`} />
      case "powerpoints":
        return <Power className={`w-12 h-12 text-[${config.branding.colors.primary}]`} />
      case "appliances":
        return <Tv className={`w-12 h-12 text-[${config.branding.colors.primary}]`} />
      case "home-battery":
        return <Battery className={`w-12 h-12 text-[${config.branding.colors.primary}]`} />
      case "off-grid":
        return <HardDrive className={`w-12 h-12 text-[${config.branding.colors.primary}]`} />
      case "fault-diagnosis":
        return <Search className={`w-12 h-12 text-[${config.branding.colors.primary}]`} />
      default:
        return null
    }
  }

  return (
    <motion.button 
      className={`text-left bg-[${config.branding.colors.background}] p-8 rounded-3xl shadow-md hover:shadow-lg w-full h-[320px] flex flex-col cursor-pointer group outline-none focus:ring-2 focus:ring-[${config.branding.colors.secondary}] focus:ring-offset-2`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="mb-6 h-12 relative">
        <motion.div 
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0"
        >
          {getIcon()}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <ArrowRight className={`w-12 h-12 text-[${config.branding.colors.primary}]`} />
        </motion.div>
      </div>
      <motion.h3 
        className={`text-2xl font-medium text-[${config.branding.colors.primary}] mb-4 group-hover:underline decoration-[${config.branding.colors.secondary}] decoration-2 underline-offset-4`}
      >
        {title}
      </motion.h3>
      {subtitle && <p className={`text-[${config.branding.colors.text}]`}>{subtitle}</p>}
      {licenseNumber && <p className={`text-[${config.branding.colors.text}] mb-4`}>{licenseNumber}</p>}
      <div className="flex-grow overflow-y-auto">
        <p className={`text-[${config.branding.colors.text}]`}>{description}</p>
      </div>
    </motion.button>
  )
}
