'use client'
import { useState } from 'react'
import Link from 'next/link'

interface Post {
  title: string
  date: string
  tag: string
  slug: string
  link?: string // when set (e.g. Substack), the row links out instead of to /words/[slug]
  external?: boolean
}

const ROW_STYLE = (hovered: boolean) =>
  ({
    display: 'grid',
    gridTemplateColumns: '80px 1fr auto',
    gap: hovered ? 32 : 24,
    alignItems: 'baseline',
    padding: '20px 0',
    borderTop: '1px solid #1e1c1a',
    textDecoration: 'none',
    transition: 'gap 0.2s ease',
  }) as const

function RowContent({ post, hovered }: { post: Post; hovered: boolean }) {
  return (
    <>
      <span
        style={{
          fontFamily: 'var(--font-space-mono)',
          fontSize: 10,
          color: '#3a3835',
          letterSpacing: '0.06em',
        }}
      >
        {post.date?.slice(0, 4)}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 22,
          fontStyle: hovered ? 'italic' : 'normal',
          color: '#ece8e1',
          lineHeight: 1.2,
        }}
      >
        {post.title}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-space-mono)',
          fontSize: 9,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#66625e',
          whiteSpace: 'nowrap',
        }}
      >
        {post.tag}
        {post.external ? '  ↗' : ''}
      </span>
    </>
  )
}

function WritingRow({ post }: { post: Post }) {
  const [hovered, setHovered] = useState(false)
  const events = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  }

  if (post.external && post.link) {
    return (
      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        style={ROW_STYLE(hovered)}
        {...events}
      >
        <RowContent post={post} hovered={hovered} />
      </a>
    )
  }

  return (
    <Link href={`/words/${post.slug}`} style={ROW_STYLE(hovered)} {...events}>
      <RowContent post={post} hovered={hovered} />
    </Link>
  )
}

export default function WritingList({ posts }: { posts: Post[] }) {
  return (
    <div style={{ borderBottom: '1px solid #1e1c1a' }}>
      {posts.map((post) => (
        <WritingRow key={post.link || post.slug} post={post} />
      ))}
    </div>
  )
}
