'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc.',
    period: '2022 - Present',
    description: 'Leading frontend development initiatives, mentoring junior developers, and architecting scalable React applications.',
    achievements: [
      'Built and maintained 10+ production React applications',
      'Improved application performance by 40% through optimization',
      'Led team of 4 developers on critical features',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: '2020 - 2022',
    description: 'Developed full-stack web applications using React and Node.js, implementing RESTful APIs and database designs.',
    achievements: [
      'Developed 5 end-to-end web applications',
      'Implemented authentication and authorization systems',
      'Reduced API response time by 50%',
    ],
  },
  {
    title: 'Junior Web Developer',
    company: 'StartupXYZ',
    period: '2019 - 2020',
    description: 'Started career building web interfaces and learning modern development practices.',
    achievements: [
      'Created responsive web pages using HTML, CSS, and JavaScript',
      'Collaborated with designers on UI implementation',
      'Fixed 100+ bugs and improved code quality',
    ],
  },
]

export default function Experience() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
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
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            My journey in software development and tech industry
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass rounded-xl p-8 border border-border hover:border-primary transition-all group"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-primary font-semibold mb-1">{exp.company}</p>
                  <p className="text-text-muted text-sm">{exp.period}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-text-secondary mb-6 leading-relaxed">{exp.description}</p>

              {/* Achievements */}
              <div className="space-y-3">
                <p className="font-semibold text-sm text-primary mb-3">Key Achievements:</p>
                {exp.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-text-secondary">{achievement}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="mt-16 glass rounded-xl p-8 border border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">Education</h3>
          <div className="space-y-4">
            <div>
              <p className="text-lg font-bold">Bachelor of Science in Computer Science</p>
              <p className="text-primary">University of Toronto</p>
              <p className="text-text-muted text-sm">Graduated 2019</p>
            </div>
            <hr className="border-border" />
            <div>
              <p className="text-lg font-bold">Advanced Web Development Bootcamp</p>
              <p className="text-primary">Codepath</p>
              <p className="text-text-muted text-sm">2019</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
