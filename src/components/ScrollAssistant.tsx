import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface SectionInfo {
  id: string
  title: string
  message: string
}

const ScrollAssistant = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [currentSection, setCurrentSection] = useState<SectionInfo | null>(null)
  const [isHovering, setIsHovering] = useState(false)

  const sections: SectionInfo[] = [
    { id: 'hero', title: 'Welcome!', message: 'Hey there! 👋 Welcome to my portfolio. I\'m Sakin, a creative developer.' },
    { id: 'about', title: 'About Me', message: 'Let me tell you a bit about myself and my journey in tech.' },
    { id: 'skills', title: 'My Skills', message: 'Here are the tools and technologies I\'ve mastered over the years.' },
    { id: 'projects', title: 'My Work', message: 'Check out some of the amazing projects I\'ve built. Click on any to learn more!' },
    { id: 'contact', title: 'Get in Touch', message: 'Ready to collaborate? Let\'s connect and create something amazing together!' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrolledAmount = window.scrollY
      const progress = (scrolledAmount / (documentHeight - windowHeight)) * 100
      setScrollProgress(progress)

      // Determine current section
      for (const section of sections) {
        const element = document.querySelector(`#${section.id}`)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            setCurrentSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Floating Assistant Character */}
      <motion.div
        className="fixed right-4 sm:right-8 bottom-24 z-40"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {/* Character Body */}
        <motion.div
          className="relative"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          onHoverStart={() => setIsHovering(true)}
          onHoverEnd={() => setIsHovering(false)}
        >
          {/* Head */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto">
            {/* Head circle with gradient */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-accent-purple shadow-lg shadow-accent/50"
              animate={{
                scale: isHovering ? 1.1 : 1,
              }}
            />

            {/* Eyes */}
            <div className="absolute top-5 sm:top-6 left-3 sm:left-4 flex gap-3 sm:gap-4">
              <motion.div
                className="w-2 sm:w-3 h-2 sm:h-3 bg-white rounded-full"
                animate={{
                  scale: isHovering ? 1.2 : 1,
                }}
              />
              <motion.div
                className="w-2 sm:w-3 h-2 sm:h-3 bg-white rounded-full"
                animate={{
                  y: [0, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
            </div>

            {/* Smile */}
            <motion.svg
              className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 w-4 sm:w-5 h-2 sm:h-3"
              viewBox="0 0 24 12"
              animate={{
                scaleY: isHovering ? 1.5 : 1,
              }}
            >
              <path
                d="M4 10 Q12 2 20 10"
                stroke="white"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </motion.svg>
          </div>

          {/* Body */}
          <motion.div
            className="w-12 sm:w-16 h-12 sm:h-16 mx-auto bg-gradient-to-b from-accent/70 to-accent-purple/70 rounded-lg mt-1 shadow-lg shadow-accent/30 relative"
            animate={{
              rotateZ: isHovering ? 5 : 0,
            }}
          >
            {/* Arms */}
            <motion.div className="absolute -left-2 sm:-left-3 top-2 sm:top-3 w-2 sm:w-3 h-6 sm:h-8 bg-accent rounded-full" />
            <motion.div
              className="absolute -right-2 sm:-right-3 top-2 sm:top-3 w-2 sm:w-3 h-6 sm:h-8 bg-accent rounded-full"
              animate={{
                rotateZ: isHovering ? -20 : 0,
              }}
            />
          </motion.div>

          {/* Speech Bubble */}
          {currentSection && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              className="absolute -top-20 -left-24 sm:-left-32 w-32 sm:w-40 glass-effect p-3 sm:p-4 rounded-lg text-xs sm:text-sm"
            >
              <h3 className="font-bold text-accent mb-1">{currentSection.title}</h3>
              <p className="text-gray-300 leading-tight">{currentSection.message}</p>
              <div className="absolute bottom-0 right-4 w-3 h-3 bg-white/5 rounded-full" />
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed right-4 sm:right-8 bottom-8 w-2 h-24 glass-effect rounded-full overflow-hidden z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-accent to-accent-purple"
          style={{
            height: `${scrollProgress}%`,
            bottom: 0,
          }}
        />
      </motion.div>
    </>
  )
}

export default ScrollAssistant
