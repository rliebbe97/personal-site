import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import PhotoGrid from '@/components/PhotoGrid'
import WritingList from '@/components/WritingList'
import ShelfGrid from '@/components/ShelfGrid'
import RevealSection from '@/components/RevealSection'
import Footer from '@/components/Footer'
import { projects } from '@/lib/projects'
import { writings } from '@/lib/writing'
import { shelf } from '@/lib/shelf'
import { aboutFacts } from '@/lib/about'

const LABEL_STYLE = {
  fontFamily: 'var(--font-space-mono)',
  fontSize: '9px',
  letterSpacing: '0.22em',
  textTransform: 'uppercase' as const,
  color: '#66625e',
  marginBottom: '48px',
  display: 'block',
}

const SECTION_INNER = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '120px 52px',
}

export default function HomePage() {
  return (
    <main style={{ background: '#070707', color: '#ece8e1', minHeight: '100vh' }}>
      <Hero />

      {/* Work */}
      <section id="work" style={{ borderTop: '1px solid #1e1c1a' }}>
        <div style={SECTION_INNER}>
          <RevealSection>
            <span style={LABEL_STYLE}>Work</span>
          </RevealSection>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1px',
              background: '#1e1c1a',
            }}
          >
            {projects.map((project, i) => (
              <RevealSection key={project.id} delay={i * 0.1}>
                <ProjectCard project={project} index={i} />
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Photos */}
      <section id="photos" style={{ borderTop: '1px solid #1e1c1a' }}>
        <div style={SECTION_INNER}>
          <RevealSection>
            <span style={LABEL_STYLE}>Photos</span>
          </RevealSection>
          <RevealSection delay={0.1}>
            <PhotoGrid />
          </RevealSection>
        </div>
      </section>

      {/* Words */}
      <section id="words" style={{ borderTop: '1px solid #1e1c1a' }}>
        <div style={SECTION_INNER}>
          <RevealSection>
            <span style={LABEL_STYLE}>Words</span>
          </RevealSection>
          <RevealSection delay={0.1}>
            <WritingList posts={writings} />
          </RevealSection>
        </div>
      </section>

      {/* Shelf */}
      <section id="shelf" style={{ borderTop: '1px solid #1e1c1a' }}>
        <div style={SECTION_INNER}>
          <RevealSection>
            <span style={LABEL_STYLE}>Shelf</span>
          </RevealSection>
          <RevealSection delay={0.1}>
            <ShelfGrid items={shelf} />
          </RevealSection>
        </div>
      </section>

      {/* The Human */}
      <section id="about" style={{ borderTop: '1px solid #1e1c1a' }}>
        <div style={SECTION_INNER}>
          <RevealSection>
            <span style={LABEL_STYLE}>The Human</span>
          </RevealSection>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '24px 48px',
            }}
          >
            {aboutFacts.map((fact, i) => (
              <RevealSection key={i} delay={i * 0.05}>
                <p
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 22,
                    fontWeight: 300,
                    color: '#66625e',
                    lineHeight: 1.4,
                    margin: 0,
                  }}
                >
                  <strong style={{ color: '#ece8e1', fontWeight: 400 }}>{fact.bold}</strong>
                  {fact.rest}
                </p>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
