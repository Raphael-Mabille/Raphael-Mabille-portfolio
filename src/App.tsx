import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/custom/header"
import { GithubIcon, LinkedinIcon } from "@/components/custom/brand-icons"
import { ArrowDownRight, ArrowUpRight, Code2, GraduationCap, MapPin, Sparkles } from "lucide-react"

type Project = {
  title: string
  description: string
  technologies: string[]
  detail?: string
  link?: string
  featured?: boolean
}

const experiences = [
  {
    period: "Décembre 2024 — aujourd’hui",
    company: "Voith Turbo France",
    location: "",
    type: "Freelance",
    role: "Développeur Full-Stack",
    description: "Développement et maintenance de logiciels métier pour le service après-vente dans le cadre d’une migration d’ERP.",
    achievements: [
      "Évolution d’un logiciel métier pour accompagner la migration d’ERP et développement d’un nouvel outil pour le SAV.",
      "Maintenance corrective, documentation technique et audit de sécurité des outils internes.",
      "Configuration et sécurisation d’un VPS Linux avec Nginx, Fail2Ban et iptables.",
    ],
    technologies: ["React", "TanStack", "Vite", "PostgreSQL", "Supabase", "Tailwind CSS", "shadcn/ui", "Linux"],
  },
  {
    period: "Février — juillet 2025",
    company: "R2",
    location: "Rennes",
    type: "Stage · 6 mois",
    role: "Développeur Frontend / DevOps",
    description: "Développement autonome d’évolutions pour un site client et mise en place d’outils internes de suivi de la qualité du code.",
    achievements: [
      "Création de composants réutilisables et prise en charge des évolutions fonctionnelles et techniques.",
      "Déploiement d’outils internes de monitoring de la qualité du code.",
      "Veille technique hebdomadaire et rédaction de documentation client.",
    ],
    technologies: ["PHP", "jQuery", "SCSS", "GSAP", "SonarQube", "Docker", "Linux"],
  },
  {
    period: "Juillet — décembre 2024",
    company: "Voith Turbo France",
    location: "",
    type: "Stage · 6 mois",
    role: "Développeur Full-Stack",
    description: "Conception d’un logiciel métier de visualisation de schémas techniques et de génération automatisée de rapports d’expertise.",
    achievements: [
      "Analyse des besoins métier, rédaction du cahier des charges et conception de l’architecture.",
      "Intégration avec Microsoft Access et Navision, puis automatisation des rapports d’expertise.",
      "Démonstrations clients et échanges en anglais avec plusieurs sites internationaux.",
    ],
    technologies: ["JavaScript", "HTML / CSS", "SQL", "Microsoft Access", "Excel", "jsPDF"],
  },
]

const personalProjects: Project[] = [
  {
    title: "OPERATIVES — Mod Unity",
    description: "Création d’un mod pour un jeu Unity avec une pipeline de développement automatisée et assistée par l’IA.",
    detail: "Sans mod préexistant pour servir de base : exploration des fonctions d’une DLL et automatisation du flux de développement.",
    technologies: ["C#", "PowerShell", "Python", "Unity"],
    link: "https://github.com/Raphael-Mabille/OPERATIVES-Revolve-mod-collection",
  },
  {
    title: "Contributions open source",
    description: "Contributions à NanoForge, un moteur de jeu étudiant, avec notamment la correction d’un problème de compilation sous Windows.",
    detail: "Corrections également apportées à des fichiers de configuration d’extensions pour The Battle for Wesnoth.",
    technologies: ["Open source", "C++", "Windows", "Debug"],
    link: "https://github.com/NanoForge-dev/CLI",
  },
]

const studentProjects: Project[] = [
  { title: "GRIFFON Security", description: "Création d’une boîte à outils Linux orientée cybersécurité dans le cadre de l’Epitech Innovative Project.", technologies: ["Rust", "React", "Tauri", "Tailwind CSS", "Plugin system"], link: "https://github.com/GriffonAV", featured: true },
  { title: "AREA", description: "Plateforme web et mobile d’automatisation reliant des actions et réactions issues de services externes, à la manière d’IFTTT.", technologies: ["TypeScript", "React", "Node.js", "OAuth2", "API REST", "SQL"], link: "https://github.com/mlargeot/Area", featured: true },
  { title: "R-Type", description: "Jeu de tir multijoueur avec moteur de jeu, serveur autoritaire et protocole réseau dédié.", technologies: ["C++", "CMake", "ECS", "UDP / TCP", "Conan"], link: "https://github.com/DiaboloAB/RType", featured: true },
  { title: "Gomoku", description: "Moteur d’intelligence artificielle jouant au Gomoku sous contrainte de temps via un protocole standardisé.", technologies: ["C++", "Minimax", "Alpha-bêta", "Heuristiques"] },
  { title: "Zappy", description: "Projet Epitech réalisé en équipe, avec son code source et son historique de développement disponibles sur GitHub.", technologies: ["Projet d’équipe"], link: "https://github.com/jean-yanis-jeffroy/zappy" },
  { title: "Game Design — Echo", description: "Design et réalisation d’un jeu vidéo avec Godot.", technologies: ["Godot", "Game design", "Interface", "Architecture"], link: "https://github.com/Tom-Mendy/Echo" },
  { title: "VR Game — Taupe Chef", description: "Création d’un jeu vidéo en réalité virtuelle avec interactions et retours haptiques.", technologies: ["Unity", "Meta Horizon Link", "VR", "Haptique"], link: "https://github.com/enzo-cesaretti/Taupe-Chef" },
  { title: "Game AI", description: "Utilisation d’algorithmes et de machine learning pour concevoir une intelligence artificielle de jeu vidéo.", technologies: ["Unity", "PyTorch", "Machine learning", "Algorithmie"] },
  { title: "Modélisation & animation 3D", description: "Modélisation 3D, rigging et animation de différents objets et personnages.", technologies: ["Maya", "Blender", "Rigging", "Animation"] },
  { title: "NanoTekSpice", description: "Simulateur de circuits numériques capable de charger un schéma et de propager des états logiques entre composants.", technologies: ["C++", "Makefile", "Composite", "Factory", "Parsing"], featured: true },
  { title: "Arcade", description: "Plateforme chargeant à chaud plusieurs jeux et bibliothèques graphiques interchangeables.", technologies: ["C++", "SDL2", "SFML", "NCurses", "Dynamic libraries"], link: "https://github.com/jean-yanis-jeffroy/arcade" },
  { title: "MinilibC", description: "Réimplémentation en assembleur x86-64 d’un sous-ensemble de fonctions usuelles de la bibliothèque C.", technologies: ["x86-64", "NASM", "C", "ELF", "Shared library"] },
  { title: "Popeye", description: "Déploiement local d’une application multi-services décrite et orchestrée avec des conteneurs.", technologies: ["Docker", "Docker Compose", "SQL", "Java", "Python"] },
  { title: "Groundhog", description: "Analyseur en flux de températures détectant tendances, écarts et changements brusques.", technologies: ["C++", "Statistiques", "Traitement de flux"] },
  { title: "Trade", description: "Agent de trading automatisé prenant des décisions à partir d’un flux de données de marché simulé.", technologies: ["C++", "Séries temporelles", "Temps réel", "Optimisation"] },
]

const featuredSkills = ["React", "TypeScript", "C++", "Rust", "PostgreSQL", "Docker", "Linux", "Python"]

function GithubLink({ href, label = "Voir le dépôt" }: { href: string; label?: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-foreground">
      <GithubIcon className="h-4 w-4" />{label}<ArrowUpRight className="h-3.5 w-3.5" />
    </a>
  )
}

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section id="top" className="relative overflow-hidden border-b border-border/70">
        <div className="hero-grid absolute inset-0 -z-20" />
        <div className="hero-glow absolute -right-44 -top-28 -z-10 h-[34rem] w-[34rem] rounded-full blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Portfolio · Full-Stack & ingénierie logicielle
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[5.4rem]">
              Raphaël Mabille
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
              Développeur full-stack formé à Epitech, je construis des logiciels métier, des architectures robustes et des expériences interactives — du web au jeu vidéo.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-6"><a href="#projects">Explorer les projets <ArrowDownRight className="ml-2 h-4 w-4" /></a></Button>
              <Button variant="outline" asChild size="lg" className="rounded-full px-6"><a href="#experience">Voir le parcours</a></Button>
            </div>
          </div>

          <Card className="relative overflow-hidden border-primary/20 bg-card/80 shadow-2xl shadow-black/20 backdrop-blur">
            <CardContent className="p-0">
              <div className="border-b border-border/60 p-6 sm:p-8">
                <div className="flex items-start justify-between gap-5">
                  <div><p className="eyebrow">En ce moment</p><h2 className="mt-3 text-2xl font-semibold tracking-tight">Freelance chez Voith Turbo France</h2></div>
                  <span className="mt-1 flex h-3 w-3 shrink-0"><span className="absolute h-3 w-3 animate-ping rounded-full bg-emerald-400 opacity-50" /><span className="relative h-3 w-3 rounded-full bg-emerald-400" /></span>
                </div>
                <p className="mt-4 leading-7 text-muted-foreground">Logiciels métier, migration d’ERP, sécurité et infrastructure Linux pour le service après-vente.</p>
              </div>
              <div className="grid grid-cols-2 divide-x divide-border/60">
                <div className="p-5 sm:p-6"><p className="text-2xl font-semibold">3 ans</p><p className="mt-1 text-xs leading-5 text-muted-foreground">expériences professionnelles</p></div>
                <div className="p-5 sm:p-6"><p className="text-2xl font-semibold">FR · KR</p><p className="mt-1 text-xs leading-5 text-muted-foreground">parcours international</p></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:py-28">
        <div className="section-heading">
          <div><p className="eyebrow">Expérience</p><h2>Du besoin métier au déploiement.</h2></div>
          <p>Trois missions menées au contact des équipes, avec une attention constante portée à l’autonomie, la maintenabilité et la documentation.</p>
        </div>
        <div className="mt-12 border-t border-border/70">
          {experiences.map((experience) => (
            <article key={`${experience.company}-${experience.type}`} className="experience-row grid gap-6 border-b border-border/70 py-9 lg:grid-cols-[0.8fr_1.05fr_2fr] lg:gap-10">
              <div><p className="text-sm font-semibold text-primary">{experience.period}</p><div className="mt-3 flex flex-wrap gap-2"><Badge variant="secondary">{experience.type}</Badge>{experience.location && <Badge variant="outline">{experience.location}</Badge>}</div></div>
              <div><p className="text-sm text-muted-foreground">{experience.company}</p><h3 className="mt-1 text-xl font-semibold tracking-tight">{experience.role}</h3><p className="mt-4 leading-7 text-muted-foreground">{experience.description}</p></div>
              <div>
                <ul className="space-y-3 text-sm leading-6 text-muted-foreground">{experience.achievements.map((achievement) => <li key={achievement} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{achievement}</li>)}</ul>
                <div className="mt-5 flex flex-wrap gap-2">{experience.technologies.map((technology) => <Badge key={technology} variant="outline" className="font-normal text-muted-foreground">{technology}</Badge>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="formation" className="border-y border-border/70 bg-card/35">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:py-28">
          <div className="section-heading">
            <div><p className="eyebrow">Formation</p><h2>Une formation technique, ouverte sur le monde.</h2></div>
            <p>Un cursus Epitech entre Rennes et Paris, enrichi par une année universitaire en Corée du Sud dédiée au développement de jeux vidéo.</p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
            <Card className="border-primary/20 bg-background/70 lg:row-span-2"><CardContent className="p-7 sm:p-8">
              <div className="icon-box"><GraduationCap /></div><p className="mt-7 text-sm font-semibold text-primary">2022 — 2027</p><h3 className="mt-2 text-3xl font-semibold tracking-tight">EPITECH</h3><p className="mt-4 max-w-md text-lg leading-8 text-muted-foreground">Diplôme d’Expert en Technologies de l’information.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2"><div className="formation-stop"><MapPin /><div><strong>Rennes</strong><span>2022 — 2025</span></div></div><div className="formation-stop"><MapPin /><div><strong>Paris</strong><span>2026 — 2027</span></div></div></div>
            </CardContent></Card>
            <Card className="bg-background/70 lg:col-span-2"><CardContent className="grid gap-6 p-7 sm:grid-cols-[auto_1fr] sm:p-8">
              <div className="icon-box"><Code2 /></div><div><div className="flex flex-wrap items-center gap-x-4 gap-y-2"><h3 className="text-2xl font-semibold tracking-tight">Keymyung University</h3><Badge variant="secondary">Daegu · Corée du Sud</Badge></div><p className="mt-2 text-sm font-semibold text-primary">2025 — 2026</p><p className="mt-4 leading-7 text-muted-foreground">Cursus spécialisé en développement de jeux vidéo.</p></div>
            </CardContent></Card>
            <Card className="bg-background/70 lg:col-span-2"><CardContent className="grid gap-6 p-7 sm:grid-cols-[auto_1fr] sm:p-8">
              <div className="icon-box"><Sparkles /></div><div><h3 className="text-2xl font-semibold tracking-tight">Lycée</h3><p className="mt-3 leading-7 text-muted-foreground">Spécialités mathématiques et physique-chimie en terminale, NSI en première, mathématiques expertes et anglais en classe européenne.</p></div>
            </CardContent></Card>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:py-28">
        <div className="section-heading"><div><p className="eyebrow">Projets personnels</p><h2>Explorer, comprendre, contribuer.</h2></div><p>Des projets initiés par curiosité technique : modding, rétro-ingénierie, automatisation et contributions à l’open source.</p></div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {personalProjects.map((project, index) => (
            <Card key={project.title} className="project-card group overflow-hidden border-primary/15 bg-card/70"><CardContent className="p-0">
              <div className="flex items-center justify-between border-b border-border/60 px-7 py-5"><span className="font-mono text-sm text-primary">0{index + 1}</span><ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
              <div className="p-7 sm:p-8"><h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3><p className="mt-4 text-base leading-7 text-muted-foreground">{project.description}</p>{project.detail && <p className="mt-3 text-sm leading-6 text-muted-foreground/80">{project.detail}</p>}<div className="my-6 flex flex-wrap gap-2">{project.technologies.map((technology) => <Badge key={technology} variant="secondary">{technology}</Badge>)}</div>{project.link && <GithubLink href={project.link} />}</div>
            </CardContent></Card>
          ))}
        </div>

        <div className="mt-24 section-heading"><div><p className="eyebrow">Projets Epitech</p><h2>Apprendre en construisant.</h2></div><p>Systèmes, réseau, IA, web, cybersécurité et jeu vidéo : une sélection de projets menés individuellement ou en équipe.</p></div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {studentProjects.map((project) => (
            <Card key={project.title} className={`project-card flex h-full flex-col bg-card/55 ${project.featured ? "border-primary/20" : ""}`}><CardContent className="flex h-full flex-col p-6">
              <div className="flex min-h-4 justify-end">{project.link && <GithubIcon className="h-4 w-4 text-muted-foreground" />}</div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{project.title}</h3><p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">{project.technologies.map((technology) => <span key={technology} className="rounded-md bg-secondary/70 px-2 py-1 text-[0.7rem] text-secondary-foreground/80">{technology}</span>)}</div>
              {project.link && <div className="mt-6"><GithubLink href={project.link} /></div>}
            </CardContent></Card>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-border/70 bg-card/35">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:py-28">
          <Card className="contact-card relative overflow-hidden border-primary/20"><div className="contact-glow absolute -right-20 -top-36 h-96 w-96 rounded-full blur-3xl" /><CardContent className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div><p className="eyebrow">Profil technique</p><h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Une approche full-stack, de l’idée à l’exploitation.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Analyse métier, architecture, développement, déploiement et documentation : un même fil conducteur pour livrer des solutions durables.</p></div>
            <div><p className="mb-5 text-sm font-medium text-muted-foreground">Technologies & pratiques</p><div className="flex flex-wrap gap-2">{featuredSkills.map((skill) => <Badge key={skill} variant="secondary" className="px-3 py-1.5">{skill}</Badge>)}</div><div className="mt-7 flex flex-col gap-3 sm:flex-row"><Button asChild size="lg" className="rounded-full"><a href="https://github.com/Raphael-Mabille" target="_blank" rel="noreferrer"><GithubIcon className="mr-2 h-4 w-4" /> Voir mon GitHub</a></Button><Button asChild size="lg" variant="outline" className="rounded-full"><a href="https://www.linkedin.com/in/raphael-mabille-674948315/" target="_blank" rel="noreferrer"><LinkedinIcon className="mr-2 h-4 w-4" /> LinkedIn</a></Button></div></div>
          </CardContent></Card>
        </div>
      </section>

      <footer className="border-t border-border/70"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-7 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-10"><p>© {new Date().getFullYear()} Raphaël Mabille</p><p>Conçu avec React, TypeScript & 95% par IA.</p></div></footer>
    </main>
  )
}
