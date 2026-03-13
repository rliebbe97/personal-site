import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { blogPosts } from '@/lib/data'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-parchment pt-24">
      <div className="max-w-3xl mx-auto px-8 py-16">
        {/* Back link */}
        <Link
          href="/writing"
          className="text-pitch/60 hover:text-pitch transition-colors font-medium mb-8 inline-block"
        >
          ← Back to Writing
        </Link>

        {/* Post header */}
        <article>
          <h1 className="font-header font-bold text-3xl md:text-4xl text-pitch mb-4 mt-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 text-pitch/60 mb-6">
            <span>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <Separator className="my-8" />

          {/* Post content */}
          <div
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </main>
  )
}
