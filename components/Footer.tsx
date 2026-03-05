'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/harrybandukda' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/harrybandukda' },
    { name: 'Email', icon: Mail, url: 'mailto:harry@example.com' },
  ]

  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">HB</h3>
            <p className="text-text-secondary">
              Full Stack Developer & Blockchain Engineer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-text-secondary hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass rounded-lg border border-border hover:border-primary hover:text-primary transition-all"
                    aria-label={link.name}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border mb-8"></div>

        {/* Bottom */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left text-text-muted text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="flex items-center justify-center sm:justify-start gap-1 mb-4 sm:mb-0">
            Made with <Heart size={16} className="text-accent" /> by Harry Bandukda © {currentYear}
          </p>
          <p className="text-text-muted">
            Designed & developed with React, Next.js & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
