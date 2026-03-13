'use client'
import { motion } from 'framer-motion'
import { StatusDotConfig } from '../types'

export default function StatusDot({ config }: { config: StatusDotConfig }) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-space-mono)',
        fontSize: 11,
        color: '#66625e',
        userSelect: 'none',
        whiteSpace: 'nowrap',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
      }}
    >
      <motion.span
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ color: '#4a9a6e' }}
      >
        ●
      </motion.span>
      <span>{config.text.replace('● ', '')}</span>
    </div>
  )
}
