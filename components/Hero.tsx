'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ backgroundColor: '#00d9ff' }}></div>
        <div className="absolute top-40 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ backgroundColor: '#ff006e' }}></div>
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6 flex justify-center">
          <div className="glass px-4 py-2 rounded-full border" style={{ borderColor: 'rgba(0, 217, 255, 0.3)' }}>
            <span style={{ color: '#00d9ff' }} className="text-sm font-medium">Welcome to my portfolio</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Hi, I&apos;m <span className="gradient-text">Harry Bandukda</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p variants={itemVariants} className="text-xl sm:text-2xl text-gray-400 mb-8 leading-relaxed">
          Full Stack Developer | Blockchain Engineer | Tech Enthusiast
          <br />
          <span style={{ color: '#00d9ff' }}>Building the future, one line of code at a time</span>
        </motion.p>

        {/* Description */}
        <motion.p variants={itemVariants} className="text-gray-500 text-lg max-w-2xl mx-auto mb-12">
          I craft modern, responsive web applications with a passion for clean code and innovative solutions. Specializing in React, Next.js, and blockchain technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            style={{ backgroundColor: '#00d9ff' }}
            className="inline-flex items-center justify-center px-8 py-4 text-black rounded-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105"
          >
            View My Work <ArrowRight className="ml-2" size={20} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border rounded-lg font-semibold transition-all"
            style={{ borderColor: '#00d9ff', color: '#00d9ff' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#00d9ff'
              e.currentTarget.style.color = '#000'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#00d9ff'
            }}
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex justify-center gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:scale-110 transition-transform" style={{ borderColor: 'rgba(0, 217, 255, 0.3)' }}>
            <Github size={24} style={{ color: '#00d9ff' }} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:scale-110 transition-transform" style={{ borderColor: 'rgba(0, 217, 255, 0.3)' }}>
            <Linkedin size={24} style={{ color: '#00d9ff' }} />
          </a>
          <a href="mailto:your@email.com" className="p-3 glass rounded-full hover:scale-110 transition-transform" style={{ borderColor: 'rgba(0, 217, 255, 0.3)' }}>
            <Mail size={24} style={{ color: '#00d9ff' }} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
