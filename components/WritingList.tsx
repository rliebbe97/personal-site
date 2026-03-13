'use client'
import { useState } from 'react'
import Link from 'next/link'

interface Post {
  title: string
  date: string
  tag: string
  slug: string
}

function WritingRow({ post }: { post: Post }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={`/words/${post.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '80px 1fr auto',
        gap: hovered ? 32 : 24,
        alignItems: 'baseline',
        padding: '20px 0',
        borderTop: '1px solid #1e1c1a',
        textDecoration: 'none',
        transition: 'gap 0.2s ease',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-space-mono)',
          fontSize: 10,
          color: '#3a3835',
          letterSpacing: '0.06em',
        }}
      >
        {post.date}
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
      </span>
    </Link>
  )
}

export default function WritingList({ posts }: { posts: Post[] }) {
  return (
    <div style={{ borderBottom: '1px solid #1e1c1a' }}>
      {posts.map((post) => (
        <WritingRow key={post.slug} post={post} />
      ))}
    </div>
  )
}
