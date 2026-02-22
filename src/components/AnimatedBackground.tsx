import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Particle system
    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      life: number
      maxLife: number
    }

    const particles: Particle[] = []
    const particleCount = 50

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        life: 0,
        maxLife: Math.random() * 3000 + 2000,
      })
    }

    let animationId: number

    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(10, 14, 39, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Update position
        p.x += p.vx
        p.y += p.vy
        p.life += 1

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Fade effect
        const lifePercent = p.life / p.maxLife
        const opacity = p.opacity * Math.sin(lifePercent * Math.PI)

        // Draw particle with glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2)
        gradient.addColorStop(0, `rgba(0, 217, 255, ${opacity})`)
        gradient.addColorStop(1, `rgba(0, 217, 255, 0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(p.x - p.size * 2, p.y - p.size * 2, p.size * 4, p.size * 4)

        // Reset particle if life ends
        if (p.life >= p.maxLife) {
          p.x = Math.random() * canvas.width
          p.y = Math.random() * canvas.height
          p.life = 0
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    // Draw grid background
    const drawGrid = () => {
      const gridSize = 50
      ctx.strokeStyle = 'rgba(0, 217, 255, 0.05)'
      ctx.lineWidth = 1

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    drawGrid()
    animate()

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawGrid()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {/* Canvas for particles */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
      />

      {/* Floating 3D-like geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating sphere 1 */}
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-accent/10 to-accent-purple/10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: '10%', left: '10%' }}
        />

        {/* Floating sphere 2 */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-accent-purple/5 to-accent/5 blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 5,
          }}
          style={{ bottom: '10%', right: '5%' }}
        />

        {/* Floating sphere 3 */}
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-cyan-500/5 to-accent-purple/5 blur-2xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 10,
          }}
          style={{ top: '50%', right: '20%' }}
        />

        {/* Animated lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          style={{ pointerEvents: 'none' }}
        >
          <motion.line
            x1="10%"
            y1="20%"
            x2="90%"
            y2="80%"
            stroke="rgba(0, 217, 255, 0.1)"
            strokeWidth="2"
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
          <motion.line
            x1="90%"
            y1="20%"
            x2="10%"
            y2="80%"
            stroke="rgba(125, 78, 255, 0.1)"
            strokeWidth="2"
            animate={{
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: 1,
            }}
          />
          <motion.circle
            cx="50%"
            cy="50%"
            r="200"
            fill="none"
            stroke="rgba(0, 217, 255, 0.05)"
            strokeWidth="2"
            animate={{
              r: [200, 300, 200],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />
        </svg>
      </div>

      {/* Radial gradient overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at center, rgba(0, 217, 255, 0.05) 0%, transparent 70%)',
          }}
        />
      </div>
    </>
  )
}

export default AnimatedBackground
