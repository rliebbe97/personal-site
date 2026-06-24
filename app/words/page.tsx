import WritingList from '@/components/WritingList'
import { getSubstackPosts } from '@/lib/substack'

export const revalidate = 600

export default async function Words() {
  const posts = await getSubstackPosts()

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
        {posts.length === 0 ? (
          <p style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 32,
            color: '#ece8e1',
            fontWeight: 300,
          }}>
            Essays coming soon.
          </p>
        ) : (
          <WritingList posts={posts} />
        )}
      </div>
    </main>
  )
}
