"use client";

import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const projects: { title: string; href: string; description: string }[] = [
  {
    title: "Application de burreau",
    href: "/projects/diwas",
    description: "Un logiciel métier pour créer des raports d'expertise",
  },
];

const experience: { title: string; href: string; description: string }[] = [
  {
    title: "Stage chez R2",
    href: "/experience/r2",
    description:
      "Un stage au sein de l'entreprise R2 pour acquérir une expérience professionnelle.",
  },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#top"
          className="text-sm font-semibold tracking-[0.2em] text-foreground/90 uppercase"
        >
          RM
        </a>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Expérience</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                  {experience.map((exp) => (
                    <ListItem key={exp.title} title={exp.title} href={exp.href}>
                      {exp.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:flex">
              <NavigationMenuTrigger>Projets</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                  {projects.map((project) => (
                    <ListItem
                      key={project.title}
                      title={project.title}
                      href={project.href}
                    >
                      {project.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <a
          href="#contact"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Contact
        </a>
      </div>
    </header>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
