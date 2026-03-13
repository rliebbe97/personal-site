'use client'
import { TagPillConfig } from '../types'

export default function TagPill({ config }: { config: TagPillConfig }) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-space-mono)',
        fontSize: 10,
        letterSpacing: '0.18em',
        color: '#66625e',
        border: '1px solid #1e1c1a',
        padding: '6px 14px',
        userSelect: 'none',
        whiteSpace: 'nowrap',
        textTransform: 'uppercase',
      }}
    >
      {config.text}
    </div>
  )
}
