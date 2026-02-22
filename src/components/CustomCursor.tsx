import { motion } from 'framer-motion'

interface CustomCursorProps {
  position: { x: number; y: number }
}

const CustomCursor = ({ position }: CustomCursorProps) => {
  return (
    <>
      {/* Main cursor circle */}
      <motion.div
        className="fixed w-3 h-3 bg-accent rounded-full pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 100,
        }}
      />

      {/* Outer glow ring */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-accent rounded-full pointer-events-none z-[49]"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          opacity: { duration: 1.5, repeat: Infinity },
          default: {
            type: 'spring',
            stiffness: 400,
            damping: 120,
          },
        }}
      />

      {/* Secondary trailing cursor */}
      <motion.div
        className="fixed w-10 h-10 border border-accent-purple rounded-full pointer-events-none z-[48]"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          opacity: { duration: 1.5, repeat: Infinity },
          default: {
            type: 'spring',
            stiffness: 300,
            damping: 140,
          },
        }}
      />
    </>
  )
}

export default CustomCursor
