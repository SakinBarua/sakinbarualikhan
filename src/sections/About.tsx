import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    skills: 0,
  })

  useEffect(() => {
    const targets = {
      experience: 5,
      projects: 25,
      skills: 35,
    }

    const timers = Object.entries(targets).map(([key, target]) => {
      const interval = setInterval(() => {
        setCounters((prev) => ({
          ...prev,
          [key]: Math.min((prev[key as keyof typeof prev] || 0) + 1, target),
        }))
      }, 30)
      return interval
    })

    return () => timers.forEach((timer) => clearInterval(timer))
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="about"
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
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover my journey, experience, and passion for creating digital experiences
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {/* Left Side - Profile Image with 3D effect */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center"
          >
            <motion.div
              className="relative w-full max-w-sm aspect-square"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glowing border */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent to-accent-purple p-0.5 opacity-50"
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <div className="w-full h-full rounded-2xl bg-primary" />
              </motion.div>

              {/* Profile Image Container */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden glass-effect p-1">
                <motion.div
                  className="w-full h-full rounded-xl bg-gradient-to-br from-accent/20 to-accent-purple/20 flex items-center justify-center"
                  animate={{ rotateY: [0, 6, -6, 0] } as any}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' } as any}
                  style={{ perspective: '1000px' } as any}
                >
                  <img
                    src="/icons/creator.jpg"
                    alt="Sakin Barua Likhan - profile"
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      const t = e.target as HTMLImageElement
                      if (t) t.src = '/icons/creator-placeholder.svg'
                    }}
                  />
                </motion.div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 glass-effect px-4 py-2 rounded-lg text-sm font-semibold text-accent"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Available
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Bio Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Creative Developer & Designer
            </h3>

            <p className="text-gray-300 leading-relaxed text-lg">
              I'm Sakin Barua Likhan, a passionate developer with a mission to create immersive
              and interactive digital experiences. With expertise in modern web technologies and
              3D design, I transform ideas into stunning reality.
            </p>

            <div className="space-y-3">
              <p className="text-gray-300 leading-relaxed">
                My journey in tech has been driven by curiosity and a desire to push boundaries.
                I specialize in building web applications with cutting-edge technologies like
                React, Three.js, and advanced animation libraries.
              </p>

              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new design trends, contributing to
                open-source projects, or experimenting with 3D modeling and interactive
                experiences.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                {
                  label: 'Years Experience',
                  value: counters.experience,
                  suffix: '+',
                },
                {
                  label: 'Projects Completed',
                  value: counters.projects,
                  suffix: '+',
                },
                {
                  label: 'Skills Mastered',
                  value: counters.skills,
                  suffix: '+',
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="glass-effect p-4 rounded-lg text-center"
                  whileHover={{ y: -5, boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)' }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                    {stat.value}
                    <span className="text-2xl">{stat.suffix}</span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Timeline / Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">My Journey</h3>

          <div className="space-y-6 max-w-2xl mx-auto">
            {[
              {
                year: '2019',
                title: 'Started My Journey',
                description: 'Began learning web development with HTML, CSS, and JavaScript',
              },
              {
                year: '2020',
                title: 'React & Frontend Mastery',
                description: 'Deepened expertise in React and modern frontend frameworks',
              },
              {
                year: '2021',
                title: '3D Web Development',
                description: 'Explored Three.js and WebGL for immersive web experiences',
              },
              {
                year: '2023',
                title: 'Full Stack Professional',
                description: 'Expanded skills to full-stack development and advanced animations',
              },
            ].map((milestone, i) => (
              <motion.div
                key={i}
                className="flex gap-4 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="w-4 h-4 rounded-full bg-accent mt-2 flex-shrink-0"
                  animate={{
                    boxShadow: ['0 0 10px rgba(0, 217, 255, 0.5)', '0 0 20px rgba(0, 217, 255, 0.8)', '0 0 10px rgba(0, 217, 255, 0.5)'],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                />

                {/* Timeline line */}
                {i !== 3 && (
                  <div className="absolute left-1.5 top-4 w-0.5 h-20 bg-gradient-to-b from-accent to-transparent opacity-30" />
                )}

                {/* Content */}
                <motion.div
                  className="glass-effect p-4 rounded-lg flex-grow"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-accent">{milestone.title}</h4>
                    <span className="text-sm text-gray-500 font-mono">{milestone.year}</span>
                  </div>
                  <p className="text-sm text-gray-400">{milestone.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
