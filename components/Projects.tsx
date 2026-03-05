'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Tenup dApp',
    description: 'A decentralized application leveraging blockchain technology for peer-to-peer transactions and smart contract management.',
    tags: ['Web3', 'Solidity', 'React', 'Ethereum'],
    image: '/assets/images/Tenup dApp.png',
    github: 'https://github.com/harrybandukda',
    live: '#',
  },
  {
    id: 2,
    title: 'Flavorly',
    description: 'Food delivery platform with real-time order tracking, restaurant management, and seamless payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/assets/images/Flavorly.png',
    github: 'https://github.com/harrybandukda',
    live: '#',
  },
  {
    id: 3,
    title: 'Travelo App',
    description: 'Travel planning application with itinerary management, hotel bookings, and AI-powered recommendations.',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind'],
    image: '/assets/images/Travelo App.png',
    github: 'https://github.com/harrybandukda',
    live: '#',
  },
  {
    id: 4,
    title: 'Employee Management System',
    description: 'Enterprise-level HR management system with scheduling, payroll, and performance tracking capabilities.',
    tags: ['React', 'Django', 'PostgreSQL', 'Redux'],
    image: '/assets/images/Emp-management-system.png',
    github: 'https://github.com/harrybandukda',
    live: '#',
  },
]

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing my skills and experience
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group glass rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-64 overflow-hidden bg-surface">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-text-secondary text-sm mb-4 line-clamp-3">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-primary bg-opacity-10 text-primary rounded-full border border-primary border-opacity-30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-background rounded-lg font-semibold hover:bg-accent transition-all"
                  >
                    <Github size={18} /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-background transition-all"
                  >
                    <ExternalLink size={18} /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/harrybandukda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-background transition-all"
          >
            View All Projects <ExternalLink size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
