import { useState } from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const skillCategories = {
    all: [
      { name: 'React', level: 95, category: 'frontend', icon: '⚛️' },
      { name: 'Next.js', level: 90, category: 'frontend', icon: '▲' },
      { name: 'TypeScript', level: 85, category: 'frontend', icon: '𝑇𝑆' },
      { name: 'Tailwind CSS', level: 95, category: 'frontend', icon: '🎨' },
      { name: 'Framer Motion', level: 90, category: 'animation', icon: '✨' },
      { name: 'Three.js', level: 85, category: '3d', icon: '📦' },
      { name: 'GSAP', level: 80, category: 'animation', icon: '⚡' },
      { name: 'Node.js', level: 80, category: 'backend', icon: '🟢' },
      { name: 'Express', level: 78, category: 'backend', icon: '🔗' },
      { name: 'MongoDB', level: 85, category: 'database', icon: '🍃' },
      { name: 'PostgreSQL', level: 82, category: 'database', icon: '📊' },
      { name: 'Firebase', level: 80, category: 'tools', icon: '🔥' },
      { name: 'Git & GitHub', level: 90, category: 'tools', icon: '📚' },
      { name: 'Figma', level: 85, category: 'design', icon: '🖼️' },
      { name: 'UI/UX Design', level: 88, category: 'design', icon: '🎭' },
      { name: 'Web Performance', level: 85, category: 'tools', icon: '⚙️' },
    ],
  }

  const categories = ['all', 'frontend', 'backend', 'database', 'animation', '3d', 'design', 'tools']

  const filteredSkills =
    activeCategory === 'all'
      ? skillCategories.all
      : skillCategories.all.filter((skill) => skill.category === activeCategory)

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section
      id="skills"
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
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
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
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              {/* Rotating Card Container */}
              <motion.div
                className="relative h-full perspective"
                style={{
                  perspective: '1000px',
                } as React.CSSProperties}
              >
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/20 to-accent-purple/20"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />

                <div className="relative glass-effect p-6 rounded-xl h-full group-hover:shadow-glow transition-all duration-300">
                  {/* Icon */}
                  <div className="text-4xl mb-4">{skill.icon}</div>

                  {/* Skill Name */}
                  <h3 className="text-xl font-bold text-white mb-4">{skill.name}</h3>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Proficiency</span>
                      <span className="text-accent font-semibold">{skill.level}%</span>
                    </div>

                    {/* Animated Progress Bar */}
                    <motion.div
                      className="h-2 bg-white/10 rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-accent to-accent-purple rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                        viewport={{ once: true }}
                      />
                    </motion.div>
                  </div>

                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(circle at center, rgba(0, 217, 255, 0.2) 0%, transparent 70%)',
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Flip animation on hover */}
                  <motion.div
                    className="absolute top-2 right-2 w-8 h-8 rounded-lg glass-effect flex items-center justify-center opacity-0 group-hover:opacity-100"
                    animate={{
                      rotateY: [0, 360],
                    } as any}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    } as any}
                    style={{
                      perspective: '1000px',
                    } as React.CSSProperties}
                  >
                    ✨
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* 3D Skill Sphere (Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 hidden lg:block"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white">Skill Distribution</h3>
          </div>

          <motion.div
            className="relative h-64 bg-gradient-to-br from-accent/5 to-accent-purple/5 rounded-2xl glass-effect p-8 flex items-center justify-center overflow-hidden"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            } as any}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            } as any}
          >
            {/* 3D Sphere visualization */}
            <motion.div
              animate={{
                rotateX: [0, 360],
                rotateY: [0, 360],
              } as any}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              } as any}
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d',
              } as React.CSSProperties}
            >
              <div className="relative w-48 h-48">
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-accent/50"
                  animate={{
                    boxShadow: [
                      '0 0 30px rgba(0, 217, 255, 0.3)',
                      '0 0 60px rgba(0, 217, 255, 0.6)',
                      '0 0 30px rgba(0, 217, 255, 0.3)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="absolute inset-4 rounded-full border border-accent-purple/50"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-4xl"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    💫
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 right-4 text-xs text-gray-400">
              <p>Frontend: 85% | Backend: 80% | 3D/Animation: 87% | Design: 86%</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
