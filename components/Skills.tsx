'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const skillCategories = [
  {
    title: 'Core Technologies',
    skills: [
      { name: 'SQL', years: 5 },
      { name: 'Python', years: 4 },
      { name: 'Excel', years: 4 },
      { name: 'Power BI', years: 3 },
      { name: 'Data Analytics', years: 3 },
      { name: 'Database Modeling', years: 3 },
      { name: 'ETL Development', years: 3 },
      { name: 'Apache Airflow', years: 3 },
      { name: 'Predictive Analytics', years: 3 },
    ],
  },
  {
    title: 'AI & Advanced',
    skills: [
      { name: 'Machine Learning', years: 3 },
      { name: 'CI/CD (GitHub Actions, Jenkins),', years: 2 },
      { name: 'LLMs/RAG', years: 1 },
      { name: 'ChromaDB', years: 1 },
      { name: 'REST APIs', years: 2 },
      { name: 'Tableau', years: 2 },
      { name: 'Docker', years: 2 },
      { name: 'AWS', years: 1 },
    ],
  },
]

interface SkillBarProps {
  name: string
  years: number
  index: number
}

function SkillBar({ name, years, index }: SkillBarProps) {
  const barRef = useRef<HTMLDivElement>(null)
  const maxYears = 5

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && barRef.current) {
            const percentage = (years / maxYears) * 100
            setTimeout(() => {
              if (barRef.current) {
                barRef.current.style.width = `${percentage}%`
              }
            }, index * 50)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (barRef.current) {
      observer.observe(barRef.current.parentElement!)
    }

    return () => observer.disconnect()
  }, [years, index])

  const getColor = () => {
    if (years >= 4) return 'from-primary-purple to-primary-pink'
    if (years >= 2) return 'from-primary-pink to-primary-yellow'
    return 'from-primary-yellow to-primary-purple'
  }

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 font-medium">{name}</span>
        <span className="text-primary-pink text-sm">{years} {years === 1 ? 'year' : 'years'}</span>
      </div>
      <div className="h-2 bg-black/50 rounded-full overflow-hidden">
        <motion.div
          ref={barRef}
          initial={{ width: 0 }}
          className={`h-full bg-gradient-to-r ${getColor()} rounded-full transition-all duration-1000 ease-out`}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4" />
          <p className="text-gray-400 italic text-sm max-w-2xl mx-auto">
            The listed experience reflects practical, hands-on involvement, not solely formal work experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="glass-effect rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-primary-purple mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    years={skill.years}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional tools */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Also proficient with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Power BI', 'Excel', 'Tableau', 'SQL', 'Azure', 'Python', 'AWS', 'Salesforce'].map((tool) => (
              <motion.span
                key={tool}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 glass-effect rounded-full text-sm text-gray-300 hover:text-primary-pink transition-colors"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
