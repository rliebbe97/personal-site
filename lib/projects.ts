export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  year: string
  slug: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: '001',
    title: 'Project Alpha',
    description: 'A platform for creative professionals to showcase work and connect with collaborators across disciplines.',
    tags: ['Product', 'Design', 'Web'],
    year: '2024',
    slug: 'project-alpha',
    featured: true,
  },
  {
    id: '002',
    title: 'Project Beta',
    description: 'Mobile-first experience for tracking personal growth — journaling, habit formation, and reflection.',
    tags: ['Mobile', 'UX', 'React Native'],
    year: '2023',
    slug: 'project-beta',
    featured: true,
  },
  {
    id: '003',
    title: 'Project Gamma',
    description: 'Developer tooling for rapid UI prototyping — bridging the gap between design and production code.',
    tags: ['Dev Tools', 'Open Source'],
    year: '2023',
    slug: 'project-gamma',
    featured: true,
  },
]
