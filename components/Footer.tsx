export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #1e1c1a', padding: '40px 52px' }}>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#4a9a6e',
              display: 'inline-block',
              animation: 'pulse 2s ease-in-out infinite',
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-space-mono)',
              fontSize: 10,
              color: '#66625e',
              letterSpacing: '0.06em',
            }}
          >
            Currently: building something new
          </span>
        </div>
        <nav style={{ display: 'flex', gap: 24 }}>
          {[
            { label: 'Twitter', href: '#' },
            { label: 'GitHub', href: '#' },
            { label: 'Instagram', href: '#' },
            { label: 'Email', href: 'mailto:hello@robyliebbe.com' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontFamily: 'var(--font-space-mono)',
                fontSize: 9,
                color: '#3a3835',
                textDecoration: 'none',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
