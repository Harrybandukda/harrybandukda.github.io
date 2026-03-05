'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'harry@example.com',
      href: 'mailto:harry@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (416) 123-4567',
      href: 'tel:+14161234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Toronto, Canada',
      href: '#',
    },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/harrybandukda',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/harrybandukda',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/harrybandukda',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you!
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.a
                key={index}
                href={method.href}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glass rounded-xl p-6 border border-border hover:border-primary transition-all text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary bg-opacity-10 rounded-lg group-hover:bg-opacity-20 transition-all">
                    <Icon size={32} className="text-primary" />
                  </div>
                </div>
                <p className="text-text-muted text-sm mb-2">{method.label}</p>
                <p className="font-semibold text-white group-hover:text-primary transition-colors">{method.value}</p>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="glass rounded-xl p-8 border border-border mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:border-primary focus:outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:border-primary focus:outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:border-primary focus:outline-none transition-all"
                placeholder="What is this about?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:border-primary focus:outline-none transition-all resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-background rounded-lg font-semibold hover:bg-accent transition-all"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-text-secondary mb-6">Or connect with me on social media</p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-lg border border-border hover:border-primary hover:text-primary hover:bg-opacity-20 transition-all"
                  aria-label={link.name}
                >
                  <Icon size={24} />
                </a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
