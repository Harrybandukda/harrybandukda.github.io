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
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6 flex justify-center">
          <div className="glass px-4 py-2 rounded-full border border-primary">
            <span className="text-primary text-sm font-medium">Welcome to my portfolio</span>
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
        <motion.p variants={itemVariants} className="text-xl sm:text-2xl text-text-secondary mb-8 leading-relaxed">
          Full Stack Developer | Blockchain Engineer | Tech Enthusiast
          <br />
          <span className="text-primary">Building the future, one line of code at a time</span>
        </motion.p>

        {/* Description */}
        <motion.p variants={itemVariants} className="text-text-muted text-lg max-w-2xl mx-auto mb-12">
          I craft modern, responsive web applications with a passion for clean code and innovative solutions. Specializing in React, Next.js, and blockchain technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-background rounded-lg font-semibold hover:bg-accent transition-all transform hover:scale-105"
          >
            View My Work <ArrowRight className="ml-2" size={20} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-background transition-all"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex justify-center gap-6">
          <a
            href="https://github.com/harrybandukda"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-lg border border-border hover:border-primary hover:text-primary transition-all"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/harrybandukda"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-lg border border-border hover:border-primary hover:text-primary transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:harry@example.com"
            className="p-3 glass rounded-lg border border-border hover:border-primary hover:text-primary transition-all"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-primary text-sm">Scroll to explore</div>
      </motion.div>
    </section>
  )
}
