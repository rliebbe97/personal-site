import { PortableText, type PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import { urlFor } from '@/sanity/lib/image'

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 20,
          fontWeight: 300,
          color: '#ece8e1',
          lineHeight: 1.7,
          margin: '0 0 24px 0',
        }}
      >
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 32,
          fontWeight: 400,
          color: '#ece8e1',
          lineHeight: 1.2,
          margin: '48px 0 16px 0',
        }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 24,
          fontWeight: 400,
          color: '#ece8e1',
          lineHeight: 1.3,
          margin: '36px 0 12px 0',
        }}
      >
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontStyle: 'italic',
          fontSize: 22,
          color: '#66625e',
          borderLeft: '2px solid #3a3835',
          paddingLeft: 24,
          margin: '32px 0',
          lineHeight: 1.5,
        }}
      >
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#ece8e1', textDecoration: 'underline' }}
      >
        {children}
      </a>
    ),
    em: ({ children }) => <em style={{ fontStyle: 'italic' }}>{children}</em>,
    strong: ({ children }) => (
      <strong style={{ fontWeight: 600, color: '#ece8e1' }}>{children}</strong>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 20,
          fontWeight: 300,
          color: '#ece8e1',
          lineHeight: 1.7,
          margin: '0 0 24px 0',
          paddingLeft: 24,
        }}
      >
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 20,
          fontWeight: 300,
          color: '#ece8e1',
          lineHeight: 1.7,
          margin: '0 0 24px 0',
          paddingLeft: 24,
        }}
      >
        {children}
      </ol>
    ),
  },
  types: {
    image: ({ value }) => {
      const url = urlFor(value).width(1400).fit('max').auto('format').url()
      if (!url) return null
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={url}
          alt={value?.alt || ''}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            margin: '32px 0',
            border: '1px solid #1e1c1a',
          }}
        />
      )
    },
  },
}

export default function PortableTextBody({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />
}
