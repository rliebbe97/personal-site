'use client'
import { useState } from 'react'

interface ShelfItem {
  id?: string
  title: string
  creator?: string
  type: 'book' | 'film' | 'podcast'
  coverImage?: string | null
  coverColor?: string
  note?: string
}

function ShelfCard({ item }: { item: ShelfItem }) {
  const [hovered, setHovered] = useState(false)
  const [imgFailed, setImgFailed] = useState(false)
  const showImage = Boolean(item.coverImage) && !imgFailed

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: hovered ? 'translateY(-6px)' : 'none',
        transition: 'transform 0.2s ease',
      }}
    >
      <div
        style={{
          aspectRatio: '2/3',
          background: item.coverColor || '#100f0f',
          border: '1px solid #1e1c1a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: showImage ? 0 : 12,
          marginBottom: 10,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {showImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.coverImage as string}
            alt={item.title}
            loading="lazy"
            onError={() => setImgFailed(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: hovered ? 'scale(1.03)' : 'scale(1)',
              transition: 'transform 0.4s ease',
            }}
          />
        ) : (
          <span
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 13,
              fontStyle: 'italic',
              color: 'rgba(236,232,225,0.4)',
              textAlign: 'center',
              lineHeight: 1.4,
            }}
          >
            {item.title}
          </span>
        )}
      </div>
      <p
        style={{
          fontFamily: 'var(--font-space-mono)',
          fontSize: 9,
          color: '#66625e',
          letterSpacing: '0.06em',
          lineHeight: 1.5,
          margin: '0 0 2px 0',
        }}
      >
        {item.title}
      </p>
      {item.creator && (
        <p
          style={{
            fontFamily: 'var(--font-space-mono)',
            fontSize: 9,
            color: '#3a3835',
            letterSpacing: '0.04em',
            margin: 0,
          }}
        >
          {item.creator}
        </p>
      )}
    </div>
  )
}

export default function ShelfGrid({ items }: { items: ShelfItem[] }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
        gap: 20,
      }}
    >
      {items.map((item, i) => (
        <ShelfCard key={item.id || i} item={item} />
      ))}
    </div>
  )
}
