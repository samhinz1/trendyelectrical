"use client"

import Link from "next/link"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Image } from "@/components/ui/image"
import { Menu, Phone, X } from "lucide-react"
import { config } from "@/lib/config"
import { useState, useRef } from "react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

// Define styles based on config
const styles = {
  header: `bg-[${config.branding.colors.background}] py-2 px-4 md:px-6 sticky top-0 z-50 shadow-sm`,
  navLink: `text-[${config.branding.colors.primary}] hover:text-[${config.branding.colors.text}]`,
  callButton: `bg-[${config.branding.colors.secondary}] hover:bg-[${config.branding.colors.secondary}]/90 text-white rounded-md`
}

// Menu animation variants
const menuVariants = {
  hidden: { 
    x: "100%",
    opacity: 0,
    transition: { 
      duration: 0.4, 
      ease: [0.25, 1, 0.5, 1] 
    }
  },
  visible: { 
    x: "0%",
    opacity: 1,
    transition: { 
      duration: 0.4, 
      ease: [0.25, 1, 0.5, 1],
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
}

const menuItemVariants = {
  hidden: { 
    y: 10, 
    opacity: 0
  },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.3
    }
  }
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)
  const { scrollY } = useScroll()
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    // Only apply hide/show behavior on mobile
    if (window.innerWidth < 768) {
      const currentScrollY = latest
      
      if (currentScrollY <= 10) {
        // Always show header at the top of the page
        setIsVisible(true)
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up, show header
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down, hide header
        setIsVisible(false)
      }
      
      lastScrollY.current = currentScrollY
    } else {
      // Always visible on desktop
      setIsVisible(true)
    }
  })
  
  return (
    <motion.header 
      initial={{ y: -10, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.3 }}
      className={styles.header}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href={`${config.basePath}`} className="flex items-center gap-2 text-[#242131] text-base md:text-2xl font-medium">
            <motion.div 
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
              className="w-40 h-24 md:w-48 md:h-28 relative"
            >
              <Image src={`${config.basePath}${config.branding.logo.path}`} alt={config.branding.logo.altText} width={config.branding.logo.width} height={config.branding.logo.height} className="md:w-48 md:h-28 w-40 h-24" />
            </motion.div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href={`${config.basePath}/about`} className={styles.navLink}>
            About us
          </Link>
          <Link href={`${config.basePath}/services`} className={styles.navLink}>
            Services
          </Link>
          <Link href={`${config.basePath}/projects`} className={styles.navLink}>
            Projects
          </Link>
          <Link href={`${config.basePath}/contact`} className={styles.navLink}>
            Contact
          </Link>
        </nav>

        {/* Desktop Call Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block"
        >
          <Button className={styles.callButton}>
            <Phone size={18} className="mr-2" />
            {config.phoneNumber}
          </Button>
        </motion.div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Mobile Phone Icon */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href={`tel:${config.phoneNumber.replace(/\s/g, '')}`} aria-label="Call us">
              <Button variant="ghost" size="icon" className="p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#242131]"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="sr-only">Call {config.phoneNumber}</span>
              </Button>
            </a>
          </motion.div>

          {/* Mobile Hamburger Menu */}
          <Sheet onOpenChange={(open) => setIsOpen(open)}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#242131]"
                >
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 overflow-hidden bg-transparent shadow-none border-none">
              <motion.div
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
                variants={menuVariants}
                className="h-full w-full bg-white shadow-lg pt-12 px-6"
              >
                <nav className="flex flex-col space-y-6">
                  <motion.div variants={menuItemVariants}>
                    <Link 
                      href={`${config.basePath}/about`} 
                      className="text-lg font-medium text-[#242131] hover:text-[#494544]"
                    >
                      About us
                    </Link>
                  </motion.div>
                  <motion.div variants={menuItemVariants}>
                    <Link 
                      href={`${config.basePath}/services`} 
                      className="text-lg font-medium text-[#242131] hover:text-[#494544]"
                    >
                      Services
                    </Link>
                  </motion.div>
                  <motion.div variants={menuItemVariants}>
                    <Link 
                      href={`${config.basePath}/projects`} 
                      className="text-lg font-medium text-[#242131] hover:text-[#494544]"
                    >
                      Projects
                    </Link>
                  </motion.div>
                  <motion.div variants={menuItemVariants}>
                    <Link 
                      href={`${config.basePath}/contact`} 
                      className="text-lg font-medium text-[#242131] hover:text-[#494544]"
                    >
                      Contact
                    </Link>
                  </motion.div>
                  
                  <motion.div variants={menuItemVariants} className="pt-4">
                    <a href={`tel:${config.phoneNumber.replace(/\s/g, '')}`} className="w-full block">
                      <Button className="w-full bg-[#d4af37] hover:bg-[#d4af37]/90 text-white rounded-md">
                        <Phone size={18} className="mr-2" />
                        {config.phoneNumber}
                      </Button>
                    </a>
                  </motion.div>
                </nav>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
} 