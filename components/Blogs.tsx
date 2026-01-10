'use client'

import { motion } from 'framer-motion'
import { ExternalLink, BookOpen } from 'lucide-react'

const blogs = [
  {
    title: 'Mastering SQL: Understanding CTEs, Stored Procedures, Indexes, Views, and Temp Tables',
    url: 'https://medium.com/@murali.vishnu1605/mastering-sql-understanding-ctes-stored-procedures-indexes-views-and-temp-tables-111a3cf33002',
  },
  {
    title: 'AI-Powered Data Insights: Unleashing the Power of LLMs for Smarter Analysis',
    url: 'https://medium.com/@murali.vishnu1605/llm-powered-kpi-insights-unleashing-the-power-of-ai-for-smarter-analysis-76d981196503',
  },
  {
    title: 'User Acceptance Testing (UAT): The Final Check Before Go-Live',
    url: 'https://medium.com/@murali.vishnu1605/user-acceptance-testing-uat-the-final-check-before-go-live-6a2dd54d5d1e',
  },
  {
    title: 'A/B Testing in Data Science: Making Smarter Decisions with Experiments',
    url: 'https://medium.com/@murali.vishnu1605/a-b-testing-in-data-science-making-smarter-decisions-with-experiments-70a2142fe9da',
  },
  {
    title: 'What is Retrieval-Augmented Generation (RAG) and Why AI Needs It',
    url: 'https://medium.com/@murali.vishnu1605/what-is-retrieval-augmented-generation-rag-and-why-ai-needs-it-abd2a454e2ac',
  },
  {
    title: 'Why AI Understands You: The Magic of Transformers (Explained Simply)',
    url: 'https://medium.com/@murali.vishnu1605/what-is-a-transformer-a-guide-to-the-model-powering-ai-like-chatgpt-3184f9161ebf',
  },
  {
    title: 'The Secret Sauce of Power BI: A Deep Dive into DAX',
    url: 'https://medium.com/@murali.vishnu1605/the-secret-sauce-of-power-bi-a-deep-dive-into-dax-39c15362e6fd',
  },
]

export default function Blogs() {
  return (
    <section id="blogs" className="section-padding relative bg-black/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Medium Blogs</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <motion.a
              key={blog.title}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-effect rounded-xl p-6 hover:border-primary-pink/50 transition-all duration-300 block group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <BookOpen className="text-black" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-pink transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 text-primary-purple text-sm">
                <span>Read on Medium</span>
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
