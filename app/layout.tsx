import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vishnu Ram Murali - Data Engineer | Portfolio',
  description: 'Data Engineer specializing in building data foundations for LLM and AI applications. Building scalable, real-world AI systems.',
  keywords: ['Data Engineer', 'Machine Learning', 'LLMs', 'REST APIs', 'CI/CD', 'Portfolio'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  )
}
