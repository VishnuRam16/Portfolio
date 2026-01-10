'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Linkedin, Github, Mail, BookOpen } from 'lucide-react'
import { useEffect, useState } from 'react'

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/vishnurammurali/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/VishnuRam16', label: 'GitHub' },
  { icon: Mail, href: 'mailto:murali.vishnu1605@gmail.com', label: 'Email' },
  { icon: BookOpen, href: 'https://medium.com/@murali.vishnu1605', label: 'Medium' },
]

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding"
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(153, 41, 234, 0.4), transparent 50%)`,
          transition: 'background 0.3s ease-out',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-primary blur-xl opacity-50 animate-pulse-slow"></div>
              <motion.img
                src="/profile.jpeg"
                alt="Vishnu Ram Murali"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary-purple/30 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="text-white">Vishnu Ram</span>
            <br />
            <span className="text-gradient animate-gradient bg-gradient-to-r from-primary-purple via-primary-pink to-primary-yellow bg-clip-text text-transparent bg-[length:200%_auto]">
              Murali
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Data Engineer
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Building Scalable Data Pipelines & Infrastructure
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-6 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full glass-effect text-gray-300 hover:text-primary-pink transition-colors"
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary-purple transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              opacity: { delay: 1.1, duration: 0.6 },
              y: { repeat: Infinity, duration: 2, ease: 'easeInOut' }
            }}
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-2xl opacity-20"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              background: i % 3 === 0 ? '#9929EA' : i % 3 === 1 ? '#FF5FCF' : '#FAEB92',
              left: `${10 + i * 20}%`,
              top: `${10 + i * 15}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </section>
  )
}
