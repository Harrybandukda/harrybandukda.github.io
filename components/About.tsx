'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I&apos;m a passionate full-stack developer and blockchain engineer based in Toronto, Canada. With a strong foundation in Computer Science and hands-on experience in building scalable web applications, I love turning complex problems into simple, elegant solutions.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              My journey into tech started with curiosity about how websites work. Over the years, I&apos;ve developed expertise in modern frontend frameworks like React and Next.js, backend systems with Node.js and Python, and cutting-edge blockchain technologies.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying ahead of industry trends.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div>
                <p className="text-3xl font-bold" style={{ color: '#00d9ff' }}>50+</p>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold" style={{ color: '#00d9ff' }}>5+</p>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold" style={{ color: '#00d9ff' }}>100%</p>
                <p className="text-gray-400 text-sm">Client Satisfaction</p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              style={{ backgroundColor: '#00d9ff' }}
              className="inline-flex px-8 py-4 text-black rounded-lg font-semibold hover:opacity-90 transition-all"
            >
              Start a Project
            </a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-96 lg:h-full min-h-96"
          >
            <div className="glass rounded-xl overflow-hidden h-full relative" style={{ borderColor: 'rgba(0, 217, 255, 0.3)' }}>
              <Image
                src="/assets/images/IMG_1627.jpg"
                alt="Harry Bandukda"
                fill
                className="object-cover"
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
