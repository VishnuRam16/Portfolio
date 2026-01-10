# Customization Guide

Quick reference for updating your portfolio information.

## Social Media Links

Update these in the following files:

1. **Hero Section** (`components/Hero.tsx`):
   - LinkedIn: `https://linkedin.com/in/yourusername`
   - GitHub: `https://github.com/yourusername`
   - Email: `mailto:your.email@example.com`
   - Medium: `https://medium.com/@yourusername`

2. **Contact Section** (`components/Contact.tsx`):
   - Same social links as above

## Personal Information

### Hero Section (`components/Hero.tsx`)
- Name: Line 55-59
- Title: Line 68
- Tagline: Line 77

### About Section (`components/About.tsx`)
- Bio text: Line 41-48
- Superpower section: Line 73-76
- Off the clock: Line 81-84
- Let's connect: Line 88-91

## Experience (`components/Experience.tsx`)

Update the `experiences` array starting at line 5 with your work history:
```typescript
{
  company: 'Company Name',
  role: 'Your Role',
  location: 'City, State, Country',
  period: 'Start Date - End Date',
  description: 'Brief description of your role and achievements.',
}
```

## Skills (`components/Skills.tsx`)

Update the `skillCategories` array starting at line 4:
```typescript
{
  name: 'Skill Name',
  years: 5
}
```

## Projects (`components/Projects.tsx`)

Update the `projects` array starting at line 5:
```typescript
{
  id: 1,
  title: 'Project Title',
  tools: 'Tech Stack Used',
  description: 'Project description',
  github: 'https://github.com/username/repo',
  category: 'AI/ML' | 'Data Viz' | 'Data Engineering' | 'Database' | 'Web App',
}
```

## Certifications (`components/Certifications.tsx`)

Update the `certifications` array starting at line 5:
```typescript
{
  name: 'Certification Name',
  issuer: 'Issuing Organization',
  year: '2024',
}
```

## Blog Posts (`components/Blogs.tsx`)

Update the `blogs` array starting at line 5:
```typescript
{
  title: 'Blog Post Title',
  url: 'https://medium.com/@yourusername/article-slug',
}
```

## Contact Form

The contact form in `components/Contact.tsx` currently simulates form submission. To integrate with a real backend:

1. Replace the `handleSubmit` function (line 23) with your API call
2. Update the success/error handling as needed
3. Consider using services like:
   - Formspree
   - EmailJS
   - Your own API endpoint

## Color Palette

The colors are defined in `tailwind.config.js`:
- Primary Black: `#000000`
- Purple: `#9929EA`
- Pink: `#FF5FCF`
- Yellow: `#FAEB92`

To change colors, update the theme in `tailwind.config.js` and the color classes will automatically update throughout the site.
