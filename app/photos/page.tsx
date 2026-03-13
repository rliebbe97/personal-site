export default function Photos() {
  return (
    <main style={{ background: '#070707', minHeight: '100vh', padding: '120px 52px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <span style={{
          fontFamily: 'var(--font-space-mono)',
          fontSize: 9,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: '#66625e',
          display: 'block',
          marginBottom: 48,
        }}>
          Photos
        </span>
        <p style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 32,
          color: '#ece8e1',
          fontWeight: 300,
        }}>
          Gallery coming soon.
        </p>
      </div>
    </main>
  )
}
