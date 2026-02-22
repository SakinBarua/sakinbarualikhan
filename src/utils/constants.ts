/**
 * Application constants and configuration
 */

export const SITE_TITLE = 'Sakin Barua Likhan - Creative Developer'
export const SITE_DESCRIPTION = 'Creative Developer | 3D Experience Designer | Modern Web Architect'

export const THEME_COLORS = {
  primary: '#0a0e27',
  secondary: '#1a1f3a',
  accent: '#00d9ff',
  accentPurple: '#7d4eff',
  glow: '#00d9ff',
  background: '#0a0e27',
  text: '#e2e8f0',
  textMuted: '#94a3b8',
}

export const ANIMATION_DURATION = {
  fast: 0.2,
  base: 0.3,
  slow: 0.5,
  slower: 0.8,
}

export const ANIMATION_EASING = {
  easeOut: [0.16, 1, 0.3, 1],
  easeInOut: [0.33, 0.66, 0.66, 1],
  spring: { type: 'spring', stiffness: 100, damping: 10 },
}

export const BREAKPOINTS = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  wide: 1440,
}

export const SOCIAL_LINKS = {
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  email: 'hello@sakinlikhan.com',
}

export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const SKILLS_BY_CATEGORY = {
  frontend: [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Vue.js',
    'HTML5',
    'CSS3',
    'JavaScript',
  ],
  backend: ['Node.js', 'Express', 'Python', 'Django', 'GraphQL', 'REST API'],
  database: ['MongoDB', 'PostgreSQL', 'Firebase', 'MySQL', 'Redis'],
  tools: ['Git', 'GitHub', 'Docker', 'Webpack', 'Vite', 'CI/CD'],
  design: ['Figma', 'Adobe XD', 'UI/UX Design', 'Prototyping'],
  animation: ['Framer Motion', 'GSAP', 'Three.js', 'WebGL'],
}

export const CONTACT_INFO = {
  email: 'hello@sakinlikhan.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  timezone: 'PT (Pacific Time)',
}

export default {}
