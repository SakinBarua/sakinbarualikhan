import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleScroll = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-[100] transition-all duration-300 ${
        isScrolled ? 'glass-dark shadow-lg shadow-accent/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleScroll('#hero')}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent-purple flex items-center justify-center text-primary font-bold">
              SB
            </div>
            <span className="font-bold text-lg gradient-text hidden sm:inline">
              Sakin
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => handleScroll(item.href)}
                className="text-gray-300 hover:text-accent transition-colors duration-300 text-sm font-medium relative group"
                whileHover={{ y: -2 }}
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"
                  layoutId={`underline-${item.label}`}
                />
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScroll('#contact')}
            className="hidden md:block px-6 py-2 rounded-lg bg-gradient-to-r from-accent to-accent-purple text-primary font-semibold text-sm hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
          >
            Let's Talk
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-accent"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pb-4 pt-2 space-y-2 glass-dark rounded-lg mt-2">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => handleScroll(item.href)}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-accent hover:bg-white/5 rounded transition-colors duration-300"
                whileHover={{ x: 10 }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll('#contact')}
              className="w-full mx-4 px-4 py-2 rounded-lg bg-gradient-to-r from-accent to-accent-purple text-primary font-semibold text-sm hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
            >
              Let's Talk
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar
