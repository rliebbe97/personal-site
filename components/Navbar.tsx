'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '28px 52px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        pointerEvents: 'none',
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 16,
          color: '#ece8e1',
          textDecoration: 'none',
          pointerEvents: 'auto',
          fontWeight: 400,
        }}
      >
        Roby
      </Link>

      <div style={{ display: 'flex', gap: 32, pointerEvents: 'auto' }}>
        {[
          { href: '/#work', label: 'Work' },
          { href: '/photos', label: 'Photos' },
          { href: '/words', label: 'Words' },
          { href: '/#shelf', label: 'Shelf' },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            style={{
              fontFamily: 'var(--font-space-mono)',
              fontSize: 10,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.16em',
              color: '#66625e',
              textDecoration: 'none',
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
