'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

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

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

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
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border rounded-lg text-white focus:outline-none transition-all"
                  style={{ borderColor: 'rgba(0, 217, 255, 0.3)' }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(0, 217, 255, 0.6)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(0, 217, 255, 0.3)')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border rounded-lg text-white focus:outline-none transition-all"
                  style={{ borderColor: 'rgba(0, 217, 255, 0.3)' }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(0, 217, 255, 0.6)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(0, 217, 255, 0.3)')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border rounded-lg text-white focus:outline-none transition-all resize-none"
                  style={{ borderColor: 'rgba(0, 217, 255, 0.3)' }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(0, 217, 255, 0.6)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(0, 217, 255, 0.3)')}
                />
              </div>
              <button
                type="submit"
                style={{ backgroundColor: '#00d9ff' }}
                className="w-full px-8 py-3 text-black rounded-lg font-semibold hover:opacity-90 transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <a
                  key={index}
                  href={method.href}
                  className="glass p-6 rounded-xl flex items-start gap-4 hover:scale-105 transition-transform"
                  style={{ borderColor: 'rgba(0, 217, 255, 0.2)' }}
                >
                  <div style={{ color: '#00d9ff' }}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">{method.label}</p>
                    <p className="text-gray-400">{method.value}</p>
                  </div>
                </a>
              )
            })}

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-sm font-medium mb-4">Follow me</p>
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass rounded-lg transition-all hover:scale-110"
                      style={{ borderColor: 'rgba(0, 217, 255, 0.2)' }}
                      aria-label={link.name}
                    >
                      <Icon size={20} style={{ color: '#00d9ff' }} />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
