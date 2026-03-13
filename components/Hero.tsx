import AuroraBlobs from './AuroraBlobs'

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingBottom: '10vh',
        overflow: 'hidden',
      }}
    >
      <AuroraBlobs />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: 1200,
          margin: '0 auto',
          width: '100%',
          padding: '0 52px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-space-mono)',
            fontSize: 9,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#66625e',
            marginBottom: 24,
            display: 'block',
          }}
        >
          Building · Thinking · Living
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(88px, 13vw, 170px)',
            fontWeight: 300,
            lineHeight: 0.88,
            color: '#ece8e1',
            margin: 0,
          }}
        >
          Roby
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(48px, 7vw, 96px)',
            fontWeight: 300,
            lineHeight: 1.0,
            fontStyle: 'italic',
            color: 'rgba(236,232,225,0.35)',
            margin: 0,
          }}
        >
          —still figuring it out
        </p>
        <p
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 18,
            fontWeight: 400,
            color: '#66625e',
            marginTop: 32,
            letterSpacing: '0.02em',
          }}
        >
          Based in Washington, DC. Building things and enjoying the ride.
        </p>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 40,
          right: 52,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-space-mono)',
            fontSize: 9,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#66625e',
            writingMode: 'vertical-lr',
          }}
        >
          Scroll
        </span>
        <div style={{ width: 1, height: 36, background: '#3a3835' }} />
      </div>
    </section>
  )
}
