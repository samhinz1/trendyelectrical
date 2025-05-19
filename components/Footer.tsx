"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import { Image } from "@/components/ui/image"
import { config } from "@/lib/config"

// Define styles based on config
const styles = {
  footer: `bg-[${config.branding.colors.background}] py-12 px-4 md:px-6`,
  heading: `font-medium text-[${config.branding.colors.primary}] mb-4`,
  link: `text-[${config.branding.colors.text}] hover:text-[${config.branding.colors.secondary}]`,
  copyright: `text-[${config.branding.colors.text}] text-sm`,
  companyName: `text-[${config.branding.colors.primary}]`,
  socialIcon: `text-[${config.branding.colors.primary}] hover:text-[${config.branding.colors.secondary}]`
}

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className={styles.footer}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-6">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-64 h-32 relative">
              <Image src={`${config.basePath}${config.branding.logo.path}`} alt={`${config.companyName} Logo`} width={800} height={800} className="w-48 h-40" />
            </div>
          </div>
        </div>

        <div className="md:col-span-3 md:text-right">
          <h3 className={styles.heading}>Menu</h3>
          <ul className="space-y-2">
            <li>
              <Link href={`${config.basePath}/`} className={styles.link}>
                Home
              </Link>
            </li>
            <li>
              <Link href={`${config.basePath}/about`} className={styles.link}>
                About
              </Link>
            </li>
            <li>
              <Link href={`${config.basePath}/services`} className={styles.link}>
                Services
              </Link>
            </li>
            <li>
              <Link href={`${config.basePath}/contact`} className={styles.link}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3 md:text-right">
          <h3 className={styles.heading}>Utilities</h3>
          <ul className="space-y-2">
            <li>
              <Link href={`${config.basePath}/privacy-policy`} className={styles.link}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href={`${config.basePath}/feedback`} className={styles.link}>
                Feedback
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-[#494544]/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <div className={`${styles.copyright} w-full md:w-auto text-center md:text-left`}>
          © {new Date().getFullYear()}{" "}
          <Link href={`${config.basePath}/`} className={styles.companyName}>
            {config.companyName}
          </Link>
          . All rights reserved.
        </div>

        <div className="flex items-center justify-center gap-4 mt-6 md:mt-0 w-full md:w-auto">
          <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
            <Link href={config.socialLinks.facebook} className={styles.socialIcon}>
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
            <Link href={config.socialLinks.instagram} className={styles.socialIcon}>
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
            <Link href={config.socialLinks.twitter} className={styles.socialIcon}>
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
            <Link href={config.socialLinks.linkedin} className={styles.socialIcon}>
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
} 