'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      category: 'Front-End',
      skills: [
        { name: 'React & React Hooks', level: 90 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Responsive Design', level: 95 },
      ],
    },
    {
      category: 'Web Development',
      skills: [
        { name: 'React Router', level: 85 },
        { name: 'API Integration', level: 85 },
        { name: 'State Management', level: 80 },
        { name: 'Bootstrap', level: 80 },
        { name: 'Performance Optimization', level: 75 },
      ],
    },
    {
      category: 'Tools & Practices',
      skills: [
        { name: 'Git & Version Control', level: 90 },
        { name: 'Web Accessibility (WCAG)', level: 80 },
        { name: 'Cross-Browser Testing', level: 85 },
        { name: 'Performance Auditing', level: 75 },
        { name: 'Agile Methodologies', level: 75 },
      ],
    },
  ]

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-dark-light/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -20 }
                    }
                    transition={{
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-text">{skill.name}</span>
                      <span className="text-text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-accent"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

