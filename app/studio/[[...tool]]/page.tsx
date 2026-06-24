import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'
import { projectId } from '../../../sanity/env'

export const dynamic = 'force-static'

export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  if (!projectId) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#070707',
          color: '#ece8e1',
          fontFamily: 'var(--font-space-mono), monospace',
          fontSize: 13,
          textAlign: 'center',
          padding: 40,
          lineHeight: 1.8,
        }}
      >
        <div>
          Sanity isn&apos;t connected yet.
          <br />
          Set <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> in{' '}
          <code>.env.local</code> and restart the dev server.
        </div>
      </div>
    )
  }
  return <NextStudio config={config} />
}
