'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'Code Explanation & Translation with Local AI',
    tools: 'Mistral, Python, Streamlit',
    description: 'Simple Coding Helper is a Streamlit web app that explains and translates code across multiple languages using a locally hosted Ollama model, ensuring offline functionality, privacy, and a user-friendly experience.',
    github: 'https://github.com/VishnuRam16/Coding-Helper-Translator',
    category: 'AI/ML',
  },
  {
    id: 2,
    title: 'AI-Powered Music Genre Classification System',
    tools: 'Streamlit, Python, Tensorflow, librosa',
    description: 'A machine learning application that analyzes audio files to classify music genres. Using advanced audio feature extraction and multiple ML models, it provides real-time genre predictions through an intuitive Streamlit interface.',
    github: 'https://github.com/VishnuRam16/Music-Genre-Classification',
    category: 'AI/ML',
  },
  {
    id: 3,
    title: 'PDF-based QA Chatbot',
    tools: 'Mistral, RAG, FASTAPI, ChromaDB, Streamlit',
    description: 'A PDF-based QA system using Streamlit, FastAPI, ChromaDB, and a local Mistral model, enabling private, efficient document analysis and question answering through RAG and vector embeddings.',
    github: 'https://github.com/VishnuRam16/PDF-Parser-Chatbot',
    category: 'AI/ML',
  },
  {
    id: 4,
    title: 'Bar Hopping Guide',
    tools: 'Mistral, Streamlit, Python, Folium, Geopy, OSRM',
    description: 'AI-generated content and geospatial mapping to create an interactive web application for planning and enhancing bar-hopping routes using Streamlit and Folium.',
    github: 'https://github.com/VishnuRam16/Bar-Hopping-Guide',
    category: 'Web App',
  },
  {
    id: 5,
    title: 'AI-Generated KPI Insights',
    tools: 'LLM, Streamlit, Python, Ollama',
    description: "Developed an LLM driven data insights tool using Streamlit, Pandas, and LangChain's Ollama model, enabling users to upload CSV/Excel files for automatic data cleaning, preprocessing, and structured AI-generated analysis.",
    github: '#',
    category: 'AI/ML',
  },
  {
    id: 6,
    title: 'FLIGHT STATUS DASHBOARD',
    tools: 'Power BI',
    description: 'This flight status dashboard, created using Power BI, summarizes flight trends, delays, cancellations, top cities, airlines, and cancellation reasons.',
    github: '#',
    category: 'Data Viz',
  },
  {
    id: 7,
    title: 'Store Sales Dashboard',
    tools: 'Power BI',
    description: 'This sales dashboard, created using Power BI, highlights key metrics like total sales, profit, product performance, sales type, and payment modes.',
    github: '#',
    category: 'Data Viz',
  },
  {
    id: 8,
    title: 'HR Attrition Analysis Dashboard',
    tools: 'Power BI',
    description: 'This is an HR dashboard analyzing employee attrition patterns at IBM across different factors including job roles, education, age, distance from work, and satisfaction levels.',
    github: '#',
    category: 'Data Viz',
  },
  {
    id: 9,
    title: 'British Airways Reviews Dashboard',
    tools: 'Tableau',
    description: 'British Airways performance dashboard displays customer ratings across services, timeframes, aircraft types, and countries, highlighting strengths and areas for improvement.',
    github: '#',
    category: 'Data Viz',
  },
  {
    id: 10,
    title: 'Emergency Room Dashboard',
    tools: 'Tableau',
    description: 'Diverse ER data showing patient demographics, wait times, satisfaction, and referrals. Highlights gender balance, age trends, racial diversity, and common medical needs.',
    github: '#',
    category: 'Data Viz',
  },
  {
    id: 11,
    title: 'Amazon Data Engineering Books ETL Project',
    tools: 'Apache Airflow',
    description: 'Apache Airflow ETL pipeline that extracts Amazon book data via API, transforms it with SQL, and loads into PostgreSQL using Docker.',
    github: 'https://github.com/VishnuRam16/Airflow-ETL-Project',
    category: 'Data Engineering',
  },
  {
    id: 12,
    title: 'Patient-Centric Healthcare Database',
    tools: 'SQL',
    description: 'This ER diagram represents a patient-centric healthcare database, capturing patient demographics, medical history (procedures, medications, allergies, immunizations), and geographic data, with standardized reference tables ensuring consistency, scalability, and compliance.',
    github: 'https://github.com/VishnuRam16/Synthetic-Patient-Database',
    category: 'Database',
  },
]

const categories = ['All', 'AI/ML', 'Data Viz', 'Data Engineering', 'Database', 'Web App']

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'AI/ML': 'border-primary-purple text-primary-purple',
      'Data Viz': 'border-primary-pink text-primary-pink',
      'Data Engineering': 'border-primary-yellow text-primary-yellow',
      'Database': 'border-primary-purple text-primary-purple',
      'Web App': 'border-primary-pink text-primary-pink',
    }
    return colors[category] || 'border-gray-500 text-gray-500'
  }

  return (
    <section id="projects" className="section-padding relative bg-black/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-primary text-black'
                  : 'glass-effect text-gray-300 hover:text-primary-pink'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedProject(project)}
                className="glass-effect rounded-xl p-6 cursor-pointer hover:border-primary-purple/50 transition-all duration-300"
              >
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 border ${getCategoryColor(project.category)}`}>
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{project.title}</h3>
                <p className="text-primary-pink text-sm mb-3">{project.tools}</p>
                <p className="text-gray-400 text-sm line-clamp-3 mb-4">{project.description}</p>
                <div className="flex items-center gap-3 text-gray-500 text-sm">
                  <Github size={18} />
                  <span>View Code</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-effect rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 border ${getCategoryColor(selectedProject.category)}`}>
                      {selectedProject.category}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                    <p className="text-primary-pink">{selectedProject.tools}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X size={24} className="text-gray-400" />
                  </button>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">{selectedProject.description}</p>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-black font-semibold rounded-lg hover:scale-105 transition-transform"
                >
                  <Github size={20} />
                  View on GitHub
                  <ExternalLink size={16} />
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
