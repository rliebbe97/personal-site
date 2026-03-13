import LinkedinIcon from '@/components/Icons/LinkedinIcon'
import GithubIcon from '@/components/Icons/GithubIcon'
import { Separator } from '@/components/ui/separator'

export default function About() {
  return (
    <main className="min-h-screen bg-parchment pt-24">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <h1 className="font-header font-bold text-3xl md:text-4xl text-pitch mb-12">
          About Me
        </h1>

        {/* Bio Section */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-base md:text-lg text-pitch/80 leading-relaxed mb-6">
            I'm a full-stack developer and product builder passionate about creating
            meaningful digital experiences. With a strong foundation in modern web
            technologies, I specialize in building scalable applications that solve
            real-world problems.
          </p>

          <p className="text-base md:text-lg text-pitch/80 leading-relaxed mb-6">
            My journey in software development started with a curiosity about how
            things work and evolved into a career focused on crafting elegant solutions.
            I believe in writing clean, maintainable code and staying up-to-date with
            the latest industry trends and best practices.
          </p>

          <p className="text-base md:text-lg text-pitch/80 leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge through writing
            and mentoring. I'm always excited to collaborate on projects that make a
            positive impact.
          </p>
        </div>

        {/* @ts-expect-error - Separator component types */}
        <Separator className="my-12" />

        {/* Currently Section */}
        <div className="mb-12">
          <h2 className="font-header font-bold text-2xl md:text-3xl text-pitch mb-6">
            Currently
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-pitch/40 mr-3 text-xl">•</span>
              <span className="text-base text-pitch/80">
                Building full-stack applications with Next.js, React, and TypeScript
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-pitch/40 mr-3 text-xl">•</span>
              <span className="text-base text-pitch/80">
                Exploring Web3 technologies and blockchain development
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-pitch/40 mr-3 text-xl">•</span>
              <span className="text-base text-pitch/80">
                Writing about web development and sharing insights on modern frontend
                practices
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-pitch/40 mr-3 text-xl">•</span>
              <span className="text-base text-pitch/80">
                Contributing to open-source projects and learning in public
              </span>
            </li>
          </ul>
        </div>

        {/* @ts-expect-error - Separator component types */}
        <Separator className="my-12" />

        {/* Connect Section */}
        <div>
          <h2 className="font-header font-bold text-2xl md:text-3xl text-pitch mb-6">
            Let's Connect
          </h2>
          <p className="text-base text-pitch/80 mb-6">
            I'm always open to interesting conversations and collaboration opportunities.
            Feel free to reach out!
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-pitch/70 hover:text-cyan transition-colors"
            >
              <LinkedinIcon className="fill-current h-6 w-6" />
              <span className="text-base font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-pitch/70 hover:text-cyan transition-colors"
            >
              <GithubIcon className="fill-current h-6 w-6" />
              <span className="text-base font-medium">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
