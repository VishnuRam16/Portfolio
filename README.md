# Portfolio Website

A dynamic, modern portfolio website built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Dynamic Animations**: Smooth scroll animations and interactive elements powered by Framer Motion
- 🎯 **Modern UI**: Beautiful glass-morphism effects, gradient backgrounds, and responsive design
- 📱 **Fully Responsive**: Optimized for all screen sizes from mobile to desktop
- ⚡ **Performance**: Built with Next.js for optimal performance and SEO
- 🎨 **Custom Color Palette**: 
  - Primary Black: `#000000`
  - Purple: `#9929EA`
  - Pink: `#FF5FCF`
  - Yellow: `#FAEB92`

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- **Node.js 20.9.0 or higher** (required for Next.js 16)
- npm or yarn

> ⚠️ **Important**: This project requires Node.js 20.9.0 or higher. If you're using an older version, please upgrade using [nvm](https://github.com/nvm-sh/nvm) or download from [nodejs.org](https://nodejs.org/).

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio-website/
├── app/
│   ├── globals.css       # Global styles and Tailwind directives
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Main page component
├── components/
│   ├── Navigation.tsx    # Navigation bar with smooth scrolling
│   ├── Hero.tsx          # Hero section with animations
│   ├── About.tsx         # About me section
│   ├── Experience.tsx    # Experience timeline
│   ├── Skills.tsx        # Skills with animated progress bars
│   ├── Projects.tsx      # Projects grid with modals
│   ├── Certifications.tsx # Certifications display
│   ├── Blogs.tsx         # Blog posts section
│   ├── Contact.tsx       # Contact form
│   └── FloatingParticles.tsx # Animated background particles
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## Customization

### Update Personal Information

Edit the data in each component file to update:
- Personal details in `components/Hero.tsx` and `components/About.tsx`
- Experience in `components/Experience.tsx`
- Skills in `components/Skills.tsx`
- Projects in `components/Projects.tsx`
- Certifications in `components/Certifications.tsx`
- Blog posts in `components/Blogs.tsx`
- Social links throughout the components

### Color Palette

The color palette is defined in `tailwind.config.js` and can be customized:

```javascript
colors: {
  primary: {
    black: '#000000',
    purple: '#9929EA',
    pink: '#FF5FCF',
    yellow: '#FAEB92',
  },
}
```

## Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

This Next.js app can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Railway
- Render

## License

ISC

## Author

Vishnu Ram Murali.
