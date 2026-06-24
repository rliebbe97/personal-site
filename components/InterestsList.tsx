'use client'
import { useState } from 'react'
import Link from 'next/link'

interface Interest {
  slug: string
  title: string
  thought: string
}

function InterestRow({ interest }: { interest: Interest }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={`/interests/${interest.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '200px 1fr',
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
          fontFamily: 'var(--font-cormorant)',
          fontSize: 22,
          fontStyle: hovered ? 'italic' : 'normal',
          color: '#ece8e1',
          lineHeight: 1.2,
        }}
      >
        {interest.title}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 18,
          fontWeight: 300,
          color: '#66625e',
          lineHeight: 1.4,
        }}
      >
        {interest.thought}
      </span>
    </Link>
  )
}

export default function InterestsList({ interests }: { interests: Interest[] }) {
  return (
    <div style={{ borderBottom: '1px solid #1e1c1a' }}>
      {interests.map((interest) => (
        <InterestRow key={interest.slug} interest={interest} />
      ))}
    </div>
  )
}
