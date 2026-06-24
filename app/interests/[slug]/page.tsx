import Link from 'next/link'
import { notFound } from 'next/navigation'
import { interests } from '@/lib/interests'

export function generateStaticParams() {
  return interests.map((interest) => ({ slug: interest.slug }))
}

const LABEL_STYLE = {
  fontFamily: 'var(--font-space-mono)',
  fontSize: 9,
  letterSpacing: '0.22em',
  textTransform: 'uppercase' as const,
  color: '#66625e',
  display: 'block',
  marginBottom: 48,
  textDecoration: 'none',
}

export default function InterestPage({ params }: { params: { slug: string } }) {
  const interest = interests.find((i) => i.slug === params.slug)

  if (!interest) {
    notFound()
  }

  return (
    <main style={{ background: '#070707', minHeight: '100vh', padding: '120px 52px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Link href="/#interests" style={LABEL_STYLE}>
          ← Interests
        </Link>

        <h1
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(48px, 7vw, 88px)',
            fontWeight: 300,
            color: '#ece8e1',
            lineHeight: 1.0,
            margin: '0 0 24px 0',
          }}
        >
          {interest.title}
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 24,
            fontWeight: 300,
            fontStyle: 'italic',
            color: '#66625e',
            lineHeight: 1.4,
            margin: 0,
            maxWidth: 680,
          }}
        >
          {interest.thought}
        </p>

        {interest.body && (
          <div style={{ marginTop: 48, maxWidth: 680 }}>
            {interest.body.map((paragraph, i) => (
              <p
                key={i}
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 20,
                  fontWeight: 300,
                  color: '#ece8e1',
                  lineHeight: 1.6,
                  margin: '0 0 20px 0',
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {interest.list && (
          <div style={{ marginTop: 48, maxWidth: 680 }}>
            {interest.list.heading && (
              <span
                style={{
                  fontFamily: 'var(--font-space-mono)',
                  fontSize: 9,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#66625e',
                  display: 'block',
                  marginBottom: 24,
                }}
              >
                {interest.list.heading}
              </span>
            )}
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {interest.list.items.map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 22,
                    fontWeight: 300,
                    color: '#ece8e1',
                    lineHeight: 1.2,
                    padding: '16px 0',
                    borderTop: '1px solid #1e1c1a',
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  )
}
