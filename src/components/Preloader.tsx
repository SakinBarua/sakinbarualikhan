import { motion } from 'framer-motion'

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-primary z-[9999] flex items-center justify-center"
    >
      <div className="relative w-24 h-24">
        {/* Outer rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent border-r-accent/50"
        />

        {/* Middle rotating ring (opposite direction) */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-2 rounded-full border-2 border-transparent border-b-accent-purple border-l-accent-purple/50"
        />

        {/* Inner pulsing circle */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-4 rounded-full border border-accent/30"
        />

        {/* Center dot */}
        <motion.div
          animate={{
            boxShadow: [
              '0 0 10px rgba(0, 217, 255, 0.3)',
              '0 0 30px rgba(0, 217, 255, 0.6)',
              '0 0 10px rgba(0, 217, 255, 0.3)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 w-2 h-2 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Loading text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-20 text-center"
      >
        <motion.h2
          animate={{ letterSpacing: ['-2px', '2px', '-2px'] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-accent text-lg font-mono"
        >
          {'[LOADING]'.split('').map((char, i) => (
            <motion.span
              key={i}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>
      </motion.div>

      {/* Background animated grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"
            style={{
              top: `${25 * (i + 1)}%`,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Preloader
