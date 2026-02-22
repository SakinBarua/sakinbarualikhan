import { useEffect, useRef, useState, Suspense } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import ThreeDName from '@components/ThreeDName'
import TypedText from '@components/TypedText'

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background tilt effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 217, 255, 0.1) 0%, transparent 50%)`,
        }}
        transition={{ ease: 'easeOut', duration: 0.3 }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Animated intro text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-8"
        >
          <motion.span
            className="inline-block text-accent font-mono text-sm mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {'> Welcome to my digital space'}
          </motion.span>
        </motion.div>

        {/* Main heading with 3D text effect */}
        <motion.div
          className="text-center mb-8"
          animate={{
            perspective: 1000,
          }}
        >
          {/* 3D / Extruded Name (SVG-based)
              Uses a lightweight SVG extrusion and neon gradient for performance */}
          <div className="w-full flex items-center justify-center mb-6">
            <div className="w-[min(900px,90vw)] h-[220px] md:h-[300px]">
              <Suspense fallback={<div className="text-center text-sm text-gray-400">Rendering...</div>}>
                <ThreeDName />
              </Suspense>
            </div>
          </div>

          {/* Rotating text 3D effect */}
          <motion.div
            className="h-20 md:h-24 flex items-center justify-center mb-8"
            animate={{
              rotationY: [0, 5, -5, 0],
              rotationX: [0, 3, -3, 0],
            } as any}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            } as any}
            style={{
              perspective: '1200px',
              transformStyle: 'preserve-3d',
            } as any}
          >
            <motion.div
              className="text-3xl md:text-4xl font-bold"
              style={{
                textShadow:
                  '0 0 10px rgba(0, 217, 255, 0.5), 0 0 20px rgba(125, 78, 255, 0.3)',
              }}
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              Creative Developer | 3D Experience Designer | Modern Web Architect
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Subtitle with typing effect */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-gray-300 text-lg md:text-xl mb-2">
            Creative Web Developer | Photography Enthusiast | Digital Architect
          </p>
          <div className="text-sm text-accent/80">
            <TypedText texts={["Building immersive web experiences.", "3D, Motion & Architecture.", "Let\'s build something futuristic."]} />
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* View My Work Button */}
          <motion.button
            whileHover={{ scale: 1.05, x: 10 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 rounded-lg font-semibold text-primary overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.2), rgba(125, 78, 255, 0.2))',
              border: '1px solid rgba(0, 217, 255, 0.5)',
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent to-accent-purple"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative flex items-center gap-2 text-white">
              View My Work <ArrowRight size={20} />
            </span>
          </motion.button>

          {/* Contact Me Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-lg font-semibold border-2 border-accent text-accent hover:bg-accent/10 transition-all duration-300"
          >
            Contact Me
          </motion.button>

          {/* Download Resume Button */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg font-semibold border-2 border-accent-purple text-accent-purple hover:bg-accent-purple/10 transition-all duration-300 flex items-center gap-2"
          >
            <Download size={20} /> Resume
          </motion.a>
        </motion.div>

        {/* Floating Cards with Skills Preview */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {[
            { icon: '⚛️', label: 'React & Next.js' },
            { icon: '🎨', label: '3D & Animation' },
            { icon: '🚀', label: 'Performance' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="glass-effect p-4 text-center cursor-pointer"
              whileHover={{ y: -10, boxShadow: '0 0 30px rgba(0, 217, 255, 0.4)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="text-sm text-gray-300">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator cursor-pointer"
        onClick={scrollToNext}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span />
      </motion.div>

      {/* Floating elements for visual interest */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl pointer-events-none"
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-accent-purple/10 blur-3xl pointer-events-none"
        animate={{
          y: [0, -50, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
    </section>
  )
}

export default Hero
