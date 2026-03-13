export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  link?: string
  image?: string
  featured: boolean
}

export interface Company {
  id: string
  name: string
  role: string
  period: string
  description: string
  tags: string[]
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  tags: string[]
  readTime: string
}

export const projects: Project[] = [
  {
    id: 'monkeez',
    title: 'Monkeez NFT Platform',
    description: 'A full-stack NFT marketplace built with Next.js and Web3 technologies, featuring real-time minting, trading, and wallet integration.',
    tags: ['Next.js', 'Web3', 'React', 'Smart Contracts'],
    featured: true,
    image: '/monkeezSite.png'
  },
  {
    id: 'task-manager',
    title: 'Collaborative Task Manager',
    description: 'Real-time task management application with team collaboration features, built with React and Firebase.',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'TypeScript'],
    featured: true,
    link: 'https://github.com/placeholder'
  },
  {
    id: 'weather-app',
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with forecasts and location search, integrating multiple weather APIs.',
    tags: ['Vue.js', 'API Integration', 'Chart.js'],
    featured: false,
    link: 'https://github.com/placeholder'
  },
  {
    id: 'portfolio-generator',
    title: 'Portfolio Site Generator',
    description: 'A CLI tool to generate customizable portfolio websites from markdown files and templates.',
    tags: ['Node.js', 'CLI', 'Markdown', 'Templates'],
    featured: true,
    link: 'https://github.com/placeholder'
  }
]

export const companies: Company[] = [
  {
    id: 'tech-corp',
    name: 'TechCorp Solutions',
    role: 'Senior Full-Stack Developer',
    period: '2022 - Present',
    description: 'Led development of enterprise web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver scalable solutions.',
    tags: ['React', 'Node.js', 'AWS', 'TypeScript']
  },
  {
    id: 'startup-inc',
    name: 'Startup Inc',
    role: 'Frontend Developer',
    period: '2020 - 2022',
    description: 'Built responsive user interfaces and implemented design systems. Worked directly with designers to create pixel-perfect implementations.',
    tags: ['React', 'CSS/SCSS', 'Redux', 'Figma']
  },
  {
    id: 'web-agency',
    name: 'Creative Web Agency',
    role: 'Web Developer',
    period: '2018 - 2020',
    description: 'Developed custom websites for clients across various industries. Focused on performance optimization and accessibility.',
    tags: ['JavaScript', 'WordPress', 'PHP', 'jQuery']
  }
]

export const blogPosts: BlogPost[] = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js 14',
    date: '2024-01-15',
    excerpt: 'Learn how to build modern web applications with Next.js 14 and the App Router. This comprehensive guide covers everything from setup to deployment.',
    content: `
      <h2>Introduction</h2>
      <p>Next.js 14 introduces powerful new features that make building web applications easier than ever. In this guide, we'll explore the App Router, Server Components, and more.</p>

      <h2>Getting Started</h2>
      <p>First, create a new Next.js project using the following command:</p>
      <pre><code>npx create-next-app@latest my-app</code></pre>

      <h2>App Router Basics</h2>
      <p>The App Router is a new paradigm that leverages React Server Components by default. This allows for better performance and smaller JavaScript bundles.</p>

      <h2>Conclusion</h2>
      <p>Next.js 14 provides an excellent developer experience while maintaining top-tier performance. Start building today!</p>
    `,
    tags: ['Next.js', 'React', 'Web Development'],
    readTime: '5 min read'
  },
  {
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices for 2024',
    date: '2024-01-10',
    excerpt: 'Discover essential TypeScript patterns and practices that will improve your code quality and developer experience.',
    content: `
      <h2>Why TypeScript?</h2>
      <p>TypeScript adds static typing to JavaScript, catching errors before runtime and improving code maintainability.</p>

      <h2>Best Practices</h2>
      <h3>1. Use Strict Mode</h3>
      <p>Always enable strict mode in your tsconfig.json for maximum type safety.</p>

      <h3>2. Avoid Any</h3>
      <p>The 'any' type defeats the purpose of TypeScript. Use 'unknown' when the type is truly unknown.</p>

      <h3>3. Leverage Type Inference</h3>
      <p>TypeScript is smart about inferring types. Don't over-annotate your code.</p>

      <h2>Conclusion</h2>
      <p>Following these practices will help you write more maintainable TypeScript code.</p>
    `,
    tags: ['TypeScript', 'Best Practices', 'JavaScript'],
    readTime: '7 min read'
  },
  {
    slug: 'building-accessible-web-apps',
    title: 'Building Accessible Web Applications',
    date: '2024-01-05',
    excerpt: 'A practical guide to web accessibility, covering ARIA attributes, semantic HTML, and testing strategies.',
    content: `
      <h2>Why Accessibility Matters</h2>
      <p>Web accessibility ensures that all users, regardless of ability, can access and use your web applications.</p>

      <h2>Key Principles</h2>
      <h3>Semantic HTML</h3>
      <p>Use the right HTML elements for the job. Buttons should be buttons, not divs with click handlers.</p>

      <h3>ARIA Attributes</h3>
      <p>ARIA (Accessible Rich Internet Applications) attributes help assistive technologies understand your UI.</p>

      <h3>Keyboard Navigation</h3>
      <p>Ensure all interactive elements are keyboard accessible. Test with Tab, Enter, and arrow keys.</p>

      <h2>Testing</h2>
      <p>Use tools like axe DevTools and NVDA to test your applications for accessibility issues.</p>
    `,
    tags: ['Accessibility', 'Web Development', 'UX'],
    readTime: '6 min read'
  },
  {
    slug: 'modern-css-techniques',
    title: 'Modern CSS Techniques You Should Know',
    date: '2023-12-28',
    excerpt: 'Explore modern CSS features like container queries, CSS Grid, and custom properties that make styling easier.',
    content: `
      <h2>CSS Has Evolved</h2>
      <p>Modern CSS provides powerful layout and styling tools that reduce the need for complex JavaScript.</p>

      <h2>Container Queries</h2>
      <p>Unlike media queries, container queries respond to the size of a container, not the viewport.</p>

      <h2>CSS Grid</h2>
      <p>CSS Grid is perfect for two-dimensional layouts. It's more powerful than flexbox for complex layouts.</p>

      <h2>Custom Properties</h2>
      <p>CSS custom properties (variables) make theming and dynamic styling much easier.</p>

      <h2>Conclusion</h2>
      <p>These modern CSS features enable you to build responsive, maintainable interfaces with less code.</p>
    `,
    tags: ['CSS', 'Web Development', 'Frontend'],
    readTime: '8 min read'
  }
]
