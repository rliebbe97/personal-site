import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import PhotoGrid from '@/components/PhotoGrid'
import WritingList from '@/components/WritingList'
import ShelfGrid from '@/components/ShelfGrid'
import InterestsList from '@/components/InterestsList'
import RevealSection from '@/components/RevealSection'
import Footer from '@/components/Footer'
import { shelf } from '@/lib/shelf'
import { interests } from '@/lib/interests'
import { getProjects, getPhotos } from '@/sanity/lib/fetch'
import { getSubstackPosts } from '@/lib/substack'

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

const EMPTY_STYLE = {
  fontFamily: 'var(--font-cormorant)',
  fontSize: 22,
  fontWeight: 300,
  color: '#66625e',
  margin: 0,
}

export default async function HomePage() {
  const [projects, posts, photos] = await Promise.all([
    getProjects(),
    getSubstackPosts(),
    getPhotos(),
  ])

  return (
    <main style={{ background: '#070707', color: '#ece8e1', minHeight: '100vh' }}>
      <Hero />

      {/* Work */}
      <section id="work" style={{ borderTop: '1px solid #1e1c1a' }}>
        <div style={SECTION_INNER}>
          <RevealSection>
            <span style={LABEL_STYLE}>Work</span>
          </RevealSection>
          {projects.length === 0 ? (
            <RevealSection>
              <p style={EMPTY_STYLE}>Projects coming soon.</p>
            </RevealSection>
          ) : (
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
          )}
        </div>
      </section>

      {/* Photos */}
      <section id="photos" style={{ borderTop: '1px solid #1e1c1a' }}>
        <div style={SECTION_INNER}>
          <RevealSection>
            <span style={LABEL_STYLE}>Photos</span>
          </RevealSection>
          <RevealSection delay={0.1}>
            {photos.length === 0 ? (
              <p style={EMPTY_STYLE}>Gallery coming soon.</p>
            ) : (
              <PhotoGrid photos={photos} showViewAll />
            )}
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
            {posts.length === 0 ? (
              <p style={EMPTY_STYLE}>Essays coming soon.</p>
            ) : (
              <WritingList posts={posts} />
            )}
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

      {/* Interests */}
      <section id="interests" style={{ borderTop: '1px solid #1e1c1a' }}>
        <div style={SECTION_INNER}>
          <RevealSection>
            <span style={LABEL_STYLE}>Interests</span>
          </RevealSection>
          <RevealSection delay={0.1}>
            <InterestsList interests={interests} />
          </RevealSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}
