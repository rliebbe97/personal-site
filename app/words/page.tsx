import WritingList from '@/components/WritingList'
import { writings } from '@/lib/writing'

export default function Words() {
  return (
    <main style={{ background: '#070707', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 52px' }}>
        <span style={{
          fontFamily: 'var(--font-space-mono)',
          fontSize: 9,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: '#66625e',
          display: 'block',
          marginBottom: 48,
        }}>
          Words
        </span>
        <WritingList posts={writings} />
      </div>
    </main>
  )
}
