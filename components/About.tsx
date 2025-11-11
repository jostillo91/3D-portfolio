'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 relative"
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
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-primary/20">
              <img
                src="/profile.jpg"
                alt="Joshua Castillo"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 md:order-2"
          >
            <div className="bg-dark-light/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Who I Am
              </h3>
              <p className="text-text-muted leading-relaxed mb-4">
                Hey, I'm Joshua, a front-end developer passionate about creating digital experiences that users love. Based in Mesa, AZ, I specialize in building modern web applications with React, focusing on clean code, responsive design, and great user experiences.
              </p>
              <p className="text-text-muted leading-relaxed mb-4">
                What sets me apart? I don't just write code, I solve problems. I enjoy building everything from interactive React applications to e-commerce experiences. My projects demonstrate skills in state management, API integration, routing, and creating intuitive user interfaces that work seamlessly across all devices.
              </p>
              <p className="text-text-muted leading-relaxed">
                When I'm not coding, I'm staying current with the latest web technologies, contributing to open source, or sharing knowledge with the developer community. I'm always looking for opportunities to build impactful products and grow alongside talented teams.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { number: '20+', label: 'Projects Completed' },
            { number: '2+', label: 'Years Freelancing' },
            { number: '100%', label: 'Client Satisfaction' },
            { number: 'Open', label: 'To Work' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-dark-light/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: 'var(--primary)' }}
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

