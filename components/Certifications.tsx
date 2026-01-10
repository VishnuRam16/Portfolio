'use client'

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const certifications = [
  {
    name: 'Microsoft Certified Power BI Data Analyst PL-300',
    issuer: 'Microsoft',
    year: '2024',
  },
  {
    name: 'Python for Data Science, AI and Development',
    issuer: 'IBM via Coursera',
    year: '2023',
  },
  {
    name: 'HackerRank Advanced SQL Certification',
    issuer: 'HackerRank',
    year: '2023',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-effect rounded-xl p-8 hover:border-primary-purple/50 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                <Award className="text-black" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
              <p className="text-primary-pink mb-1">{cert.issuer}</p>
              <p className="text-gray-400 text-sm">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
