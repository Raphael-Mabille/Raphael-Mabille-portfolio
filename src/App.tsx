import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Mail } from "lucide-react"
import { Header } from "@/components/custom/header"

export default function App() {
  const skills = [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "shadcn/ui",
    "JavaScript",
    "Responsive Design",
    "UI/UX",
  ]

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern personal portfolio designed to showcase frontend work with clean structure, polished UI, and strong performance.",
      tags: ["React", "TypeScript", "shadcn/ui"],
      link: "#",
    },
    {
      title: "Frontend Web App",
      description:
        "A responsive application focused on accessibility, maintainable components, and a smooth user experience across devices.",
      tags: ["Vite", "Tailwind", "UX"],
      link: "#",
    },
    {
      title: "Creative UI Showcase",
      description:
        "A curated set of interface experiments and polished layouts that highlight visual design and frontend craftsmanship.",
      tags: ["UI Design", "Components", "Animation"],
      link: "#",
    },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section
        id="top"
        className="relative overflow-hidden border-b border-border/50"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,hsl(var(--muted))_0%,transparent_35%),radial-gradient(circle_at_20%_20%,hsl(var(--muted))_0%,transparent_25%)]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background to-muted/20" />

        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-28">
          <div>

            <p className="mb-3 text-sm font-medium text-muted-foreground">
              Hello, I’m
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Raphael Mabille
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Frontend developer crafting clean, modern, and user-focused digital
              experiences with React, TypeScript, and thoughtful design systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button variant="outline" asChild size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {skills.slice(0, 5).map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="rounded-full px-3 py-1"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-muted/40 via-transparent to-muted/20 blur-2xl" />
            <Card className="border-border/60 bg-card/70 backdrop-blur-xl shadow-2xl">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Frontend Focus
                    </p>
                    <h2 className="mt-1 text-xl font-semibold">
                      Building polished interfaces
                    </h2>
                  </div>
                  <div className="h-3 w-3 rounded-full bg-emerald-500" />
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-border/60 bg-muted/30 p-4">
                    <p className="text-sm font-medium">Component-driven UI</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Reusable, scalable interfaces built for maintainability.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border/60 bg-muted/30 p-4">
                    <p className="text-sm font-medium">Responsive by default</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Smooth layouts across desktop, tablet, and mobile devices.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border/60 bg-muted/30 p-4">
                    <p className="text-sm font-medium">Clean developer experience</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Type-safe code, modern tooling, and thoughtful architecture.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:py-24"
      >
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Projects</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Selected work
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              A selection of projects that reflect my approach to modern frontend
              development, UI clarity, and user experience.
            </p>
          </div>

          <Button variant="outline" asChild>
            <a href="#contact">Request full portfolio</a>
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden border-border/60 bg-card/70 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-xl"
            >
              <CardContent className="p-0">
                <div className="h-40 border-b border-border/50 bg-gradient-to-br from-muted/50 via-muted/20 to-background" />

                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="rounded-full">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {project.description}
                  </p>

                  <Button variant="link" className="mt-4 px-0" asChild>
                    <a href={project.link}>
                      View project
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About + Skills */}
      <section id="about" className="border-y border-border/50 bg-muted/20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <p className="text-sm font-medium text-muted-foreground">About</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              I build interfaces that feel simple, fast, and refined
            </h2>

            <p className="mt-6 leading-8 text-muted-foreground">
              I focus on creating modern frontend experiences that balance clean
              code, strong visual hierarchy, and intuitive interactions. My goal is
              to build products that not only work well, but also feel polished and
              enjoyable to use.
            </p>

            <p className="mt-4 leading-8 text-muted-foreground">
              I enjoy working with React, TypeScript, component-based systems, and
              scalable UI architecture that supports both performance and long-term
              maintainability.
            </p>
          </div>

          <div>
            <Card className="border-border/60 bg-card/70 backdrop-blur">
              <CardContent className="p-6 sm:p-8">
                <p className="text-sm font-medium text-muted-foreground">
                  Core skills
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="rounded-full px-3 py-1.5 text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border/60 bg-muted/30 p-4">
                    <p className="text-2xl font-semibold">3+</p>
                    <p className="text-sm text-muted-foreground">
                      Key showcase projects
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border/60 bg-muted/30 p-4">
                    <p className="text-2xl font-semibold">100%</p>
                    <p className="text-sm text-muted-foreground">
                      Responsive-first mindset
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:py-24"
      >
        <Card className="overflow-hidden border-border/60 bg-card/80 backdrop-blur">
          <CardContent className="relative p-8 sm:p-10">
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-muted/30 via-transparent to-muted/20" />

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-medium text-muted-foreground">
                  Contact
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Let’s build something great together
                </h2>
                <p className="mt-4 leading-7 text-muted-foreground">
                  If you’re looking for a frontend developer for a project,
                  collaboration, or new opportunity, I’d be happy to connect.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href="mailto:your@email.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Send an Email
                  </a>
                </Button>

                <Button variant="outline" size="lg" asChild>
                  <a href="#top">Back to Top</a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-muted-foreground md:px-10 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Raphael Mabille</p>
          <p>Built with React, Vite, TypeScript & shadcn/ui</p>
        </div>
      </footer>
    </main>
  )
}