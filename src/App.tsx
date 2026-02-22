import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import ScrollAssistant from './components/ScrollAssistant'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

  useEffect(() => {
    // Simulate loading
    const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  if (isLoading) {
    return <Preloader />
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen bg-primary overflow-x-hidden"
    >
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Custom Cursor */}
      <CustomCursor position={mousePosition} />

      {/* Navigation */}
      <Navbar />

      {/* Scroll Assistant */}
      <ScrollAssistant />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </motion.div>
  )
}

export default App
