'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Image from 'next/image'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'Movie Database App',
      description:
        'A modern, responsive movie database application with search functionality, trending movies, popular movies, top rated films, and detailed movie information. Built with React and TMDB API.',
      tech: ['React', 'React Router', 'Bootstrap', 'TMDB API'],
      github: 'https://github.com/jostillo91/Movie-Database-App',
      live: 'https://jostillo91.github.io/Movie-Database-App/',
      image: '/movie-database-screenshot.jpeg',
    },
    {
      title: 'E-Commerce Product Page',
      description:
        'Full-featured e-commerce storefront with product listing, individual product pages, shopping cart, image gallery, size/color selection, and checkout flow. Built with React and React Router.',
      tech: ['React', 'React Router', 'Vite', 'E-commerce'],
      github: 'https://github.com/jostillo91/E-commerce-product-page',
      live: 'https://jostillo91.github.io/E-commerce-product-page',
      image: '/ecommerce-screenshot.jpeg',
    },
    {
      title: 'Task Manager (React)',
      description:
        'A responsive task management application with filtering, categorization, and local data persistence. Features real-time search and intuitive UI built with React hooks.',
      tech: ['React', 'Tailwind CSS', 'LocalStorage'],
      github: 'https://github.com/jostillo91/jostillo91-task-manager-final-project',
      live: '',
      image: '/task-manager.jpg.jpeg',
    },
  ]

  return (
    <section
      id="projects"
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
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-dark-light/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 hover:border-primary/50 transition-all group overflow-hidden"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">
                {project.title}
              </h3>
              <p className="text-text-muted mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FiGithub /> Code
                  </motion.a>
                )}
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FiExternalLink /> Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

