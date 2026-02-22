import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, X } from 'lucide-react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const projects = [
    {
      id: '1',
      title: 'Interactive 3D Portfolio',
      description: 'A stunning portfolio website featuring interactive 3D elements and smooth animations',
      category: 'web3d',
      tags: ['React', 'Three.js', 'Framer Motion'],
      image: '🎨',
      githubLink: '#',
      liveLink: '#',
      details:
        'Built a fully responsive 3D portfolio website with interactive elements, smooth animations, and modern UI design. Features include particle effects, 3D text transformations, and scroll-triggered animations.',
    },
    {
      id: '2',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time updates',
      category: 'fullstack',
      tags: ['Next.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      githubLink: '#',
      liveLink: '#',
      details:
        'Developed a complete e-commerce platform with product catalog, shopping cart, payment integration, and order management. Implemented real-time inventory updates and user authentication.',
    },
    {
      id: '3',
      title: 'AI Task Assistant',
      description: 'Smart task management app powered by AI',
      category: 'webapp',
      tags: ['React', 'OpenAI API', 'TypeScript'],
      image: '🤖',
      githubLink: '#',
      liveLink: '#',
      details:
        'Created an intelligent task management application that uses AI to help organize, prioritize, and complete tasks. Features natural language processing and smart recommendations.',
    },
    {
      id: '4',
      title: 'Real-time Collaboration Tool',
      description: 'Web-based tool for team collaboration and project management',
      category: 'web3d',
      tags: ['React', 'WebSocket', 'Node.js'],
      image: '🤝',
      githubLink: '#',
      liveLink: '#',
      details:
        'Built a real-time collaboration platform for teams with live editing, comments, and notifications. Supports multiple concurrent users with automatic synchronization.',
    },
    {
      id: '5',
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard with advanced data visualization',
      category: 'webapp',
      tags: ['React', 'D3.js', 'Rest API'],
      image: '📊',
      githubLink: '#',
      liveLink: '#',
      details:
        'Developed an analytics dashboard with interactive charts, real-time data updates, and customizable widgets. Supports multiple data sources and export features.',
    },
    {
      id: '6',
      title: 'Mobile App Design System',
      description: 'Comprehensive design system for mobile applications',
      category: 'design',
      tags: ['Figma', 'UI/UX', 'Components'],
      image: '📱',
      githubLink: '#',
      liveLink: '#',
      details:
        'Created a scalable design system with 100+ components, comprehensive documentation, and design tokens. Ensures consistency across all mobile and web applications.',
    },
  ]

  const categories = ['all', 'web3d', 'fullstack', 'webapp', 'design']

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    exit: { opacity: 0, y: -30 },
  }

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 section-container"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore some of my best work showcasing creativity and technical excellence
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background:
                  activeCategory === category
                    ? 'linear-gradient(135deg, rgba(0, 217, 255, 0.3), rgba(125, 78, 255, 0.3))'
                    : 'rgba(255, 255, 255, 0.05)',
                border:
                  activeCategory === category
                    ? '1px solid rgba(0, 217, 255, 0.6)'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                color: activeCategory === category ? '#00d9ff' : '#cbd5e1',
              }}
            >
              {category === 'web3d' ? '3D Web' : category === 'fullstack' ? 'Full Stack' : category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                exit="exit"
                layoutId={project.id}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                {/* 3D Card with Tilt Effect */}
                <motion.div
                  className="relative h-full"
                  style={{
                    perspective: '1000px',
                  } as React.CSSProperties}
                  whileHover={{
                    rotateX: 5,
                    rotateY: -5,
                  } as any}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glowing background */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/30 to-accent-purple/30 blur-xl"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  />

                  {/* Card content */}
                  <div className="relative glass-effect p-6 rounded-xl h-full flex flex-col group-hover:shadow-glow transition-all duration-300">
                    {/* Image Area */}
                    <motion.div
                      className="w-full h-40 rounded-lg bg-gradient-to-br from-accent/20 to-accent-purple/20 flex items-center justify-center mb-4 overflow-hidden relative"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className="text-6xl"
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                        }}
                      >
                        {project.image}
                      </motion.div>

                      {/* Hover overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4"
                      >
                        <p className="text-sm text-white font-semibold">Click to explore</p>
                      </motion.div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400 mb-4 flex-grow line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 2).map((tag) => (
                        <motion.span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full glass-effect text-accent"
                          whileHover={{ scale: 1.1 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2 pt-4 border-t border-white/10">
                      <motion.a
                        href={project.githubLink}
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg glass-effect text-accent hover:bg-accent/10 transition-colors duration-300 text-sm font-medium"
                      >
                        <Github size={16} /> Code
                      </motion.a>

                      <motion.a
                        href={project.liveLink}
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg glass-effect text-accent-purple hover:bg-accent-purple/10 transition-colors duration-300 text-sm font-medium"
                      >
                        <ExternalLink size={16} /> Live
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              className="relative max-w-2xl w-full glass-effect p-8 rounded-2xl z-10"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setSelectedProject(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-4 right-4 p-2 rounded-lg glass-effect text-accent hover:bg-accent/10 transition-colors"
              >
                <X size={20} />
              </motion.button>

              {/* Project Details */}
              {projects.find((p) => p.id === selectedProject) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {/* Image */}
                  <motion.div
                    className="w-full h-64 rounded-xl bg-gradient-to-br from-accent/20 to-accent-purple/20 flex items-center justify-center mb-6"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  >
                    <div className="text-8xl">
                      {projects.find((p) => p.id === selectedProject)?.image}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {projects.find((p) => p.id === selectedProject)?.title}
                  </h2>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {projects.find((p) => p.id === selectedProject)?.details}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects
                      .find((p) => p.id === selectedProject)
                      ?.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full glass-effect text-accent text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={projects.find((p) => p.id === selectedProject)?.githubLink}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-accent to-accent-purple text-primary font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
                    >
                      <Github size={20} /> View Code
                    </motion.a>

                    <motion.a
                      href={projects.find((p) => p.id === selectedProject)?.liveLink}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-all duration-300"
                    >
                      <ExternalLink size={20} /> Live Demo
                    </motion.a>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
