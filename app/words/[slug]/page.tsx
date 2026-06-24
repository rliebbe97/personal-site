import Link from 'next/link'
import { notFound } from 'next/navigation'
import PortableTextBody from '@/components/PortableTextBody'
import { getPost, getPostSlugs } from '@/sanity/lib/fetch'

export const revalidate = 60
export const dynamicParams = true

export async function generateStaticParams() {
  const slugs = await getPostSlugs()
  return slugs.map(({ slug }) => ({ slug }))
}

function formatDate(value: string) {
  if (!value) return ''
  const d = new Date(value)
  if (isNaN(d.getTime())) return value
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function WordPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main style={{ background: '#070707', minHeight: '100vh', padding: '120px 52px' }}>
      <article style={{ maxWidth: 720, margin: '0 auto' }}>
        <Link
          href="/#words"
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
          ← Words
        </Link>

        <div
          style={{
            fontFamily: 'var(--font-space-mono)',
            fontSize: 10,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#66625e',
            marginBottom: 20,
          }}
        >
          {[formatDate(post.date), post.tag].filter(Boolean).join('  ·  ')}
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(40px, 6vw, 64px)',
            fontWeight: 300,
            color: '#ece8e1',
            lineHeight: 1.05,
            margin: '0 0 48px 0',
          }}
        >
          {post.title}
        </h1>

        {post.body && post.body.length > 0 ? (
          <PortableTextBody value={post.body} />
        ) : (
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 20,
              fontWeight: 300,
              color: '#66625e',
            }}
          >
            {post.excerpt || 'This essay is still being written.'}
          </p>
        )}
      </article>
    </main>
  )
}
