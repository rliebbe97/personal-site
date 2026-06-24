import Link from 'next/link'
import { notFound } from 'next/navigation'
import PortableTextBody from '@/components/PortableTextBody'
import { getProject, getProjectSlugs } from '@/sanity/lib/fetch'
import { urlFor } from '@/sanity/lib/image'

export const revalidate = 60
export const dynamicParams = true

export async function generateStaticParams() {
  const slugs = await getProjectSlugs()
  return slugs.map(({ slug }) => ({ slug }))
}

const LINK_BTN = {
  fontFamily: 'var(--font-space-mono)',
  fontSize: 10,
  letterSpacing: '0.14em',
  textTransform: 'uppercase' as const,
  color: '#ece8e1',
  textDecoration: 'none',
  border: '1px solid #3a3835',
  padding: '10px 18px',
  display: 'inline-block',
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug)

  if (!project) {
    notFound()
  }

  const coverUrl = project.coverImage
    ? urlFor(project.coverImage).width(1600).fit('max').auto('format').url()
    : null

  return (
    <main style={{ background: '#070707', minHeight: '100vh', padding: '120px 52px' }}>
      <article style={{ maxWidth: 820, margin: '0 auto' }}>
        <Link
          href="/#work"
          style={{
            fontFamily: 'var(--font-space-mono)',
            fontSize: 9,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#66625e',
            display: 'block',
            marginBottom: 48,
            textDecoration: 'none',
          }}
        >
          ← Work
        </Link>

        <h1
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(40px, 6vw, 64px)',
            fontWeight: 300,
            color: '#ece8e1',
            lineHeight: 1.05,
            margin: '0 0 16px 0',
          }}
        >
          {project.title}
        </h1>

        <div
          style={{
            fontFamily: 'var(--font-space-mono)',
            fontSize: 9,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#3a3835',
            marginBottom: 32,
          }}
        >
          {[...(project.tags || []), project.year].filter(Boolean).join('  ·  ')}
        </div>

        {coverUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={coverUrl}
            alt={project.title}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              border: '1px solid #1e1c1a',
              marginBottom: 40,
            }}
          />
        )}

        <p
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 24,
            fontWeight: 300,
            color: '#ece8e1',
            lineHeight: 1.5,
            margin: '0 0 32px 0',
          }}
        >
          {project.description}
        </p>

        {(project.liveUrl || project.repoUrl) && (
          <div style={{ display: 'flex', gap: 12, marginBottom: 48, flexWrap: 'wrap' }}>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={LINK_BTN}>
                Live ↗
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" style={LINK_BTN}>
                Code ↗
              </a>
            )}
          </div>
        )}

        {project.body && project.body.length > 0 && (
          <div style={{ marginTop: 8 }}>
            <PortableTextBody value={project.body} />
          </div>
        )}
      </article>
    </main>
  )
}
