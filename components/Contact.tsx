'use client'

import { motion } from 'framer-motion'
import { useState, FormEvent } from 'react'
import { Send, Linkedin, Github, Mail, BookOpen, CheckCircle } from 'lucide-react'

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/vishnurammurali/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/VishnuRam16', label: 'GitHub' },
  { icon: Mail, href: 'mailto:murali.vishnu1605@gmail.com', label: 'Email' },
  { icon: BookOpen, href: 'https://medium.com/@murali.vishnu1605', label: 'Medium' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 3000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Contact Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            If you enjoyed my projects please feel free to reach out for any potential opportunities or collaborations!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name <span className="text-primary-pink">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:border-primary-purple focus:outline-none text-white transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email <span className="text-primary-pink">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:border-primary-purple focus:outline-none text-white transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-300 mb-2">
                  Phone Number <span className="text-gray-500 text-sm">(optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:border-primary-purple focus:outline-none text-white transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message <span className="text-primary-pink">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:border-primary-purple focus:outline-none text-white transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-4 bg-gradient-primary text-black font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={20} />
                    Submit
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Thanks!</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                If you enjoyed my projects please feel free to reach out for any potential opportunities or collaborations!
              </p>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-primary-purple mb-4">Connect with me:</h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-4 rounded-lg glass-effect hover:border-primary-pink/50 transition-all flex items-center gap-3 group"
                    >
                      <Icon className="text-primary-purple group-hover:text-primary-pink transition-colors" size={24} />
                      <span className="text-gray-300 group-hover:text-white transition-colors">{label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-8 text-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Vishnu Ram Murali. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
