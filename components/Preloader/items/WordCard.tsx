'use client'
import { WordCardConfig } from '../types'

export default function WordCard({ config }: { config: WordCardConfig }) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-cormorant)',
        fontSize: config.fontSize,
        color: config.color,
        fontStyle: config.italic ? 'italic' : 'normal',
        fontWeight: 300,
        lineHeight: 1,
        userSelect: 'none',
        whiteSpace: 'nowrap',
      }}
    >
      {config.text}
    </div>
  )
}
