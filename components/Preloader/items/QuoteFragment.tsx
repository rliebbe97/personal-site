'use client'
import { QuoteFragmentConfig } from '../types'

export default function QuoteFragment({ config }: { config: QuoteFragmentConfig }) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-cormorant)',
        fontSize: 18,
        fontStyle: 'italic',
        color: '#3a3835',
        userSelect: 'none',
        whiteSpace: 'nowrap',
      }}
    >
      {config.text}
    </div>
  )
}
