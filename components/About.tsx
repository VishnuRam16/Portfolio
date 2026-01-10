'use client'

import { motion } from 'framer-motion'
import { Sparkles, Code, Rocket, Activity } from 'lucide-react'

const features = [
  {
    icon: Code,
    title: 'Technical Excellence',
    description: 'Proficient in Python, ETL pipelines, and data infrastructure with expertise in building scalable data foundations that power AI and LLM applications.',
  },
  {
    icon: Sparkles,
    title: 'R&D to Production',
    description: 'Experienced in designing and deploying production-ready data pipelines and infrastructure, ensuring reliable data delivery for AI/LLM systems at scale.',
  },
  {
    icon: Rocket,
    title: 'Business Value',
    description: 'Skilled in building data infrastructure that enables business intelligence and AI applications. Clean, reliable data is the foundation for impactful AI solutions.',
  },
  {
    icon: Activity,
    title: 'Continuous Learning',
    description: 'Continuously expanding expertise in modern data engineering tools, vector databases, and MLOps to build robust data foundations for the evolving AI landscape.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-xl text-gray-300 leading-relaxed">
              👋 Hey, I'm <span className="text-primary-pink font-semibold">Vishnu!</span>
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              <span className="text-primary-purple font-semibold">Data Engineer @ Dataparts.ai</span> | Building data foundations for LLM and AI applications
            </p>
            <p className="text-gray-400 leading-relaxed">
            I’ve worked across data engineering, analytics, and applied AI, from building AI-powered assistants to setting up reporting systems and automating workflows. I enjoy working close to both the data and the code, and I’m comfortable moving between business requirements and technical implementation.
            <br />
            <br />
            I care a lot about building things that last. That means prioritizing reliability, clear data models, and simple designs over over-engineering. My goal is always to make data easier to trust, easier to use, and genuinely helpful for decision-making.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-effect rounded-2xl p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-primary-pink mb-4">⚡ My Superpower?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Merging deep technical expertise with a product-driven mindset. I focus on building AI systems that work—systems that align with business goals, user needs, and operational realities.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary-yellow mb-4">⚽ Off the Clock:</h3>
                <p className="text-gray-300 leading-relaxed">
                  You'll still find me on the soccer field or backing Manchester United (through thick and thin). Data, football, and a bit of code—that's my game plan.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary-purple mb-4">🚀 Let's Connect!</h3>
                <p className="text-gray-300 leading-relaxed">
                  Whether you're building with AI, solving complex business challenges, or just want to talk models and matches, I'm all ears. Let's create AI that actually delivers.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-effect rounded-xl p-6 hover:border-primary-purple/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <Icon className="text-black" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
