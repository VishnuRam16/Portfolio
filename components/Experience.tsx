'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'

const experiences = [
  {
    company: 'Dataparts.ai',
    role: 'Data Engineer',
    location: 'Houston, TX, US - Remote',
    period: 'May 2025 - Present',
    logo: '/experience-image-assets/dataparts.jpeg',
  },
  {
    company: 'One Community Inc',
    role: 'Data Engineer',
    location: 'Philadelphia, PA, US - Remote',
    period: 'Oct 2024 - May 2025',
    logo: '/experience-image-assets/One%20Community.png',
  },
  {
    company: 'PrimePay',
    role: 'Business Intelligence Engineer',
    location: 'Philadelphia, PA, US',
    period: 'July 2024 - October 2024',
    logo: '/experience-image-assets/primepay.png',
  },
  {
    company: 'PrimePay',
    role: 'Data Analytics Intern',
    location: 'Philadelphia, PA, US',
    period: 'June 2023 - September 2023',
    logo: '/experience-image-assets/primepay.png',
  },
  {
    company: 'Algonomy',
    role: 'Data Scientist Co-op',
    location: 'San Francisco, CA - Remote',
    period: 'June 2021 - May 2022',
    logo: '/experience-image-assets/Algonomy.png',
  },
  {
    company: 'PowerGrid',
    role: 'Data Analyst Intern',
    location: 'New Delhi, DL, IN - Remote',
    period: 'June 2020 - September 2020',
    logo: '/experience-image-assets/PowerGrid.png',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative bg-black/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-purple via-primary-pink to-primary-yellow transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-gradient-primary transform md:-translate-x-1/2 z-10 border-4 border-black" />

                {/* Content card */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass-effect rounded-xl p-6 hover:border-primary-purple/50 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-lg bg-white/5 flex-shrink-0"
                        />
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{exp.company}</h3>
                          <p className="text-primary-pink font-semibold text-lg">{exp.role}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
