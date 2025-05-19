"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import { Image } from "@/components/ui/image"
import { motion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Phone, FileText, Users, Info, ClipboardEdit } from "lucide-react"
import { config } from "@/lib/config"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
}

const slideInFromLeft = {
  hidden: { x: -60, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
}

const slideInFromRight = {
  hidden: { x: 60, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const cardVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#f5f5f5] py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInFromLeft}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#242131] leading-tight">
                {config.tagline}
              </h1>
              <div className="h-1 w-32 bg-[#d4af37]"></div>
              <p className="text-[#494544] text-lg">
                {config.description}
              </p>
              
              {/* Rating Badge */}
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex items-center"
              >
                <div className="bg-[#242131] text-white px-4 py-2 rounded-lg flex items-center gap-3 border border-[#d4af37]">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full border-2 border-[#d4af37] overflow-hidden bg-gray-200">
                      <Image src={`${config.basePath}/avatar1.png`} alt="Customer" width={40} height={40} className="object-cover" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-[#d4af37] overflow-hidden bg-gray-200">
                      <Image src={`${config.basePath}/avatar2.png`} alt="Customer" width={40} height={40} className="object-cover" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-[#d4af37] overflow-hidden bg-gray-200">
                      <Image src={`${config.basePath}/avatar3.png`} alt="Customer" width={40} height={40} className="object-cover" />
                    </div>
                  </div>
                  <div>
                    <div className="flex mb-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-[#d4af37] fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <Image src={`${config.basePath}/googlelogo.webp`} alt="Google" width={16} height={16} className="object-contain" />
                      <p className="text-sm font-medium text-[#d4af37]">From 100+ reviews</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                    <Button className="bg-[#242131] hover:bg-[#242131]/90 text-[#d4af37] rounded-md text-lg py-6 px-6 flex items-center gap-2 shadow-lg border border-[#d4af37] w-full justify-center">
                      <ClipboardEdit className="h-5 w-5" />
                      Get your free quote
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                    <Button variant="outline" className="border-[#d4af37] text-[#242131] hover:bg-[#d4af37]/10 rounded-md text-lg py-6 px-6 flex items-center gap-2 shadow-md w-full justify-center" asChild>
                      <a href={`tel:${config.phoneNumber.replace(/\s/g, '')}`}>
                        <Phone className="h-5 w-5" />
                        Call us now
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInFromRight}
              className="relative"
            >
              <div className="relative h-[400px] rounded-lg md:h-[500px]">
                <Image
                  src={`${config.basePath}${config.branding.images.hero}`}
                  alt="Brisbane"
                  fill
                  className="object-cover"
                  style={{ borderRadius: '1rem' }}
                />
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
                  className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#494544]/30 rounded-full"
                ></motion.div>
                <motion.div 
                  animate={{ 
                    y: [0, 5, 0],
                    rotate: [0, 2, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute top-4 right-4 w-16 h-8"
                >
                  <svg viewBox="0 0 60 30" className="w-full h-full">
                    <path d="M0,15 C20,0 40,30 60,15" stroke="#242131" strokeWidth="2" fill="none" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
          <div className="max-w-6xl mx-auto space-y-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-left mb-12"
            >
              <div className="inline-flex items-center gap-2 mb-2">
                <div className="h-0.5 w-6 bg-[#d4af37]"></div>
                <span className="text-[#d4af37] font-medium">Services</span>
                <div className="h-0.5 w-6 bg-[#d4af37]"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-[#242131]">
                Residential & Commercial Electrical Services
              </h2>
              <p className="text-[#494544] mt-4 max-w-3xl">
                Comprehensive electrical solutions catering to all customer needs across Brisbane
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <motion.div variants={cardVariant}>
                <ServiceCard
                  icon="lighting"
                  title="Lighting"
                  description="Indoor and outdoor lighting solutions, LED upgrades, smart lighting systems, emergency lighting, and decorative installations"
                />
              </motion.div>
              <motion.div variants={cardVariant}>
                <ServiceCard
                  icon="air-conditioning"
                  title="Air Conditioning"
                  description="Sales, installations, repairs, maintenance, fault diagnosis"
                />
              </motion.div>
              <motion.div variants={cardVariant}>
                <ServiceCard
                  icon="solar"
                  title="Solar"
                  description="Performance testing, diagnosis, repairs, replacements, upgrades, cleaning"
                />
              </motion.div>
              <motion.div variants={cardVariant}>
                <ServiceCard
                  icon="home-battery"
                  title="Home Battery"
                  description="Installation, integration with solar systems, maintenance, and optimization for energy independence"
                />
              </motion.div>
              <motion.div variants={cardVariant}>
                <ServiceCard
                  icon="off-grid"
                  title="Off Grid & Backup Systems"
                  description="Complete off-grid electrical solutions, backup power systems, generators, and emergency power supplies"
                />
              </motion.div>
              <motion.div variants={cardVariant}>
                <ServiceCard
                  icon="fault-diagnosis"
                  title="Fault Diagnosis"
                  description="Comprehensive electrical troubleshooting, safety checks, circuit testing, and expert solutions for all electrical issues"
                />
              </motion.div>
            </motion.div>

          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-[#f5f5f5]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInFromLeft}
              className="relative"
            >
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src={`${config.basePath}${config.branding.images.experience}`}
                  alt="Powerline"
                  fill
                  className="object-cover"
                />
              </div>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#494544]/30 rounded-full"
              ></motion.div>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                className="absolute -top-8 -right-8 w-32 h-32 border-4 border-[#d4af37] rounded-full"
              ></motion.div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInFromRight}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2">
                <div className="h-0.5 w-6 bg-[#d4af37]"></div>
                <span className="text-[#d4af37] font-medium">Experience</span>
                <div className="h-0.5 w-6 bg-[#d4af37]"></div>
              </div>

              <h2 className="text-3xl md:text-4xl font-medium text-[#242131]">
                Decades of expert electrical solutions
              </h2>

              <p className="text-[#494544] text-lg">
                Providing reliable electrical solutions backed by over 20 years of industry experience. From
                installations to troubleshooting, our seasoned professionals deliver unmatched quality and proficiency,
                ensuring your electrical needs are met with precision and care.
              </p>

              <motion.ul 
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-4"
              >
                <motion.li variants={cardVariant} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#d4af37] flex items-center justify-center text-white">✓</div>
                  <span className="text-[#494544]">Over 20 years of industry experience</span>
                </motion.li>
                <motion.li variants={cardVariant} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#d4af37] flex items-center justify-center text-white">✓</div>
                  <span className="text-[#494544]">Comprehensive electrical solutions</span>
                </motion.li>
                <motion.li variants={cardVariant} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#d4af37] flex items-center justify-center text-white">✓</div>
                  <span className="text-[#494544]">Unmatched quality and proficiency</span>
                </motion.li>
              </motion.ul>

              <div className="flex flex-wrap gap-4 pt-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-[#242131] hover:bg-[#242131]/90 text-[#d4af37] rounded-md text-lg py-6 px-6 flex items-center gap-2 shadow-lg border border-[#d4af37]">
                    <Info className="h-5 w-5" />
                    About us
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="border-[#d4af37] text-[#242131] hover:bg-[#d4af37]/10 rounded-md text-lg py-6 px-6 flex items-center gap-2 shadow-md">
                    <Users className="h-5 w-5" />
                    Meet the team 
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-[#f5f5f5] overflow-hidden">
          <div className="max-w-6xl mx-auto space-y-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-4 max-w-3xl relative"
            >
              <div className="inline-flex items-center gap-2 mb-2">
                <div className="h-0.5 w-6 bg-[#d4af37]"></div>
                <span className="text-[#d4af37] font-medium">Testimonials</span>
                <div className="h-0.5 w-6 bg-[#d4af37]"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-[#242131]">Hear what our customers have to say</h2>
              <p className="text-[#494544] text-lg">
                Dive into a collection of testimonials that showcase our dedication to exceeding expectations in every
                electrical project.
              </p>
            </motion.div>

            {/* Infinite testimonial carousel */}
            <div className="relative w-full overflow-hidden">
              <div className="flex flex-wrap justify-center md:justify-start">
                <motion.div
                  className="flex gap-8"
                  animate={{
                    x: [0, -1500]
                  }}
                  transition={{
                    x: {
                      duration: 40,
                      ease: "linear",
                      repeat: Infinity,
                      repeatType: "loop"
                    }
                  }}
                >
                  {/* First set of testimonials - each with fixed dimensions */}
                  {config.testimonials.map((testimonial, index) => (
                    <div key={`testimonial-${index}`} className="flex-shrink-0 w-[320px] h-[400px] flex-grow-0 mx-2">
                      <div className="h-full">
                        <TestimonialCard
                          quote={testimonial.quote}
                          author={testimonial.author}
                          rating={testimonial.rating}
                          image={testimonial.image}
                        />
                      </div>
                    </div>
                  ))}
                  
                  {/* Duplicate set for seamless looping */}
                  {config.testimonials.map((testimonial, index) => (
                    <div key={`testimonial-duplicate-${index}`} className="flex-shrink-0 w-[320px] h-[400px] flex-grow-0 mx-2">
                      <div className="h-full">
                        <TestimonialCard
                          quote={testimonial.quote}
                          author={testimonial.author}
                          rating={testimonial.rating}
                          image={testimonial.image}
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-[#242131] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
                <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                  <rect width="100" height="100" fill="url(#smallGrid)" />
                  <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInFromLeft}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-medium text-white">Contact us for a free quote</h2>
              <motion.div 
                animate={{ 
                  x: [0, 10, 0],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="relative w-24 h-16"
              >
                <svg viewBox="0 0 100 60" className="w-full h-full">
                  <path d="M0,30 L80,30 L100,10" stroke="#d4af37" strokeWidth="3" fill="none" />
                  <polygon points="90,10 100,10 100,20" fill="#d4af37" />
                </svg>
              </motion.div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInFromRight}
              className="space-y-6"
            >
              <p className="text-white text-lg">
                With years of experience serving residential homes in the area, we're committed to delivering reliable
                and expert electrical solutions tailored to your needs. Trust {config.companyName} for all your home electrical needs,
                get a quote today!
              </p>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-[#d4af37] hover:bg-[#d4af37]/90 text-[#242131] rounded-md font-medium text-lg py-6 px-6 flex items-center gap-2 shadow-lg">
                  <ClipboardEdit className="h-5 w-5" />
                  Get a quote
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
