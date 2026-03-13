import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { blogPosts } from '@/lib/data'

export default function Writing() {
  return (
    <main className="min-h-screen bg-parchment pt-24">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <h1 className="font-header font-bold text-3xl md:text-4xl text-pitch mb-12">
          Writing
        </h1>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Card key={post.slug}>
              <CardHeader>
                <Link href={`/writing/${post.slug}`}>
                  <CardTitle className="text-pitch font-header text-xl md:text-2xl hover:text-cyan transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                </Link>
                <div className="flex items-center gap-3 text-sm text-pitch/60 mt-2">
                  <span>{new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <CardDescription className="text-pitch/70 text-base mt-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
