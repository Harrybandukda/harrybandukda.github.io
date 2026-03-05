'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'REST APIs'],
  },
  {
    category: 'Blockchain',
    skills: ['Solidity', 'Web3.js', 'Smart Contracts', 'Ethereum', 'DeFi'],
  },
  {
    category: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'GitHub Actions', 'Vercel', 'AWS'],
  },
]

export default function Skills() {
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

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I&apos;ve mastered throughout my career
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-6 transition-all"
              style={{ borderColor: 'rgba(0, 217, 255, 0.2)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.2)'
              }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ color: '#00d9ff' }}>{category.category}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#00d9ff' }}></span>
                    <span className="text-gray-400">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Technologies */}
        <motion.div
          className="mt-16 glass rounded-xl p-8"
          style={{ borderColor: 'rgba(0, 217, 255, 0.2)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">Currently Interested In</h3>
          <div className="flex flex-wrap gap-3">
            {['AI/ML', 'Web3', 'Quantum Computing', 'Cloud Architecture', 'DevOps', 'Performance Optimization'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                style={{ 
                  backgroundColor: 'rgba(0, 217, 255, 0.1)',
                  borderColor: '#00d9ff',
                  color: '#00d9ff'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 217, 255, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 217, 255, 0.1)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
