import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { projects, companies } from '@/lib/data'

export default function Projects() {
  return (
    <main className="min-h-screen bg-parchment pt-24">
      <div className="max-w-5xl mx-auto px-8 py-16">
        <h1 className="font-header font-bold text-3xl md:text-4xl text-pitch mb-12">
          Projects
        </h1>

        {/* Personal Projects Section */}
        <div className="mb-20">
          <h2 className="font-header font-bold text-2xl md:text-3xl text-pitch mb-8">
            Personal Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.id}>
                {project.image && (
                  <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-pitch font-header text-xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-pitch/70 text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pitch/70 hover:text-cyan transition-colors text-sm font-medium"
                    >
                      View Project →
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="my-12" />

        {/* Experience Section */}
        <div>
          <h2 className="font-header font-bold text-2xl md:text-3xl text-pitch mb-8">
            Experience
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {companies.map((company) => (
              <Card key={company.id}>
                <CardHeader>
                  <CardTitle className="text-pitch font-header text-xl">
                    {company.name}
                  </CardTitle>
                  <div className="flex flex-col gap-1">
                    <span className="text-pitch font-medium text-base">
                      {company.role}
                    </span>
                    <span className="text-pitch/60 text-sm">
                      {company.period}
                    </span>
                  </div>
                  <CardDescription className="text-pitch/70 text-base mt-2">
                    {company.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {company.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
