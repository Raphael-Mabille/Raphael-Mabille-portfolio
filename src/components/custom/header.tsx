import { GithubIcon, LinkedinIcon } from "@/components/custom/brand-icons"

const navigation = [
  { label: "Expérience", href: "#experience" },
  { label: "Formation", href: "#formation" },
  { label: "Projets", href: "#projects" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/65">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        <span className="text-sm font-semibold">Raphaël Mabille</span>
        <nav aria-label="Navigation principale" className="flex items-center gap-1 sm:gap-2">
          {navigation.map((item) => <a key={item.href} href={item.href} className="hidden rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:block">{item.label}</a>)}
          <a href="https://github.com/Raphael-Mabille" target="_blank" rel="noreferrer" className="ml-1 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary" aria-label="Profil GitHub de Raphaël Mabille"><GithubIcon className="h-4 w-4" /><span className="hidden lg:inline">GitHub</span></a>
          <a href="https://www.linkedin.com/in/raphael-mabille-674948315/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary" aria-label="Profil LinkedIn de Raphaël Mabille"><LinkedinIcon className="h-4 w-4" /><span className="hidden lg:inline">LinkedIn</span></a>
        </nav>
      </div>
    </header>
  )
}
