import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitted(true)
    setIsLoading(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
      setIsSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@sakinlikhan.com',
      link: 'mailto:hello@sakinlikhan.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      link: '#',
    },
  ]

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
      id="contact"
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
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's collaborate and create something amazing together. Feel free to reach out!
          </p>
        </motion.div>

        {/* Main Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Whether you have a project in mind, want to discuss collaboration opportunities,
                or just want to say hello, I'd love to hear from you. Get in touch using the
                information below or fill out the contact form.
              </p>
            </div>

            {/* Contact Cards */}
            {contactInfo.map((info) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={info.label}
                  href={info.link}
                  variants={itemVariants}
                  whileHover={{ x: 10, boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)' }}
                  className="glass-effect p-6 rounded-lg flex items-start gap-4 group hover:border-accent/50 duration-300"
                >
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent-purple flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    animate={{
                      boxShadow: ['0 0 10px rgba(0, 217, 255, 0.3)', '0 0 20px rgba(0, 217, 255, 0.6)', '0 0 10px rgba(0, 217, 255, 0.3)'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <Icon className="text-primary" size={24} />
                  </motion.div>

                  <div>
                    <h4 className="text-white font-semibold mb-1">{info.label}</h4>
                    <p className="text-gray-400 text-sm">{info.value}</p>
                  </div>
                </motion.a>
              )
            })}

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="pt-8 border-t border-white/10"
            >
              <h4 className="text-white font-semibold mb-4">Social Links</h4>
              <div className="flex gap-4">
                {[
                  { icon: '🐙', label: 'GitHub' },
                  { icon: '💼', label: 'LinkedIn' },
                  { icon: '𝕏', label: 'Twitter' },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-lg glass-effect flex items-center justify-center text-xl hover:shadow-glow transition-all duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="glass-effect p-8 rounded-2xl"
          >
            {isSubmitted ? (
              /* Success Message */
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-4"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <CheckCircle className="w-16 h-16 text-accent mx-auto" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-gray-400">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>

                <motion.div
                  className="text-accent text-sm font-mono pt-4"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  {'> Redirecting...'}
                </motion.div>
              </motion.div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-8">Send Me a Message</h3>

                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    whileFocus={{
                      boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
                    }}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none transition-all duration-300 focus:border-accent"
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    whileFocus={{
                      boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
                    }}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none transition-all duration-300 focus:border-accent"
                  />
                </motion.div>

                {/* Subject Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <motion.input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquire"
                    required
                    whileFocus={{
                      boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
                    }}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none transition-all duration-300 focus:border-accent"
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    whileFocus={{
                      boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
                    }}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none transition-all duration-300 focus:border-accent resize-none"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-accent to-accent-purple text-primary font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    <>
                      <Send size={18} /> Send Message
                    </>
                  )}
                </motion.button>

                {/* Form Note */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center text-xs text-gray-500"
                >
                  I usually respond within 24 hours
                </motion.p>
              </form>
            )}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-20 text-center"
        >
          <div className="glass-effect p-8 md:p-12 rounded-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create something extraordinary together. Whether you need a website, app, or
              3D experience, I'm ready to bring your vision to life.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const form = document.querySelector('form')
                form?.scrollIntoView({ behavior: 'smooth', block: 'center' })
              }}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-accent to-accent-purple text-primary font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 inline-block"
            >
              Start a Conversation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
