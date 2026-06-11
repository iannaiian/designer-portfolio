"use client";

import { sections, type SectionId } from "@/lib/sections";

type NavigationProps = {
  activeSection: SectionId;
  onNavigate: (sectionId: SectionId) => void;
};

export default function Navigation({
  activeSection,
  onNavigate,
}: NavigationProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        <button
          type="button"
          onClick={() => onNavigate("hero")}
          className="font-[family-name:var(--font-syne)] text-lg font-bold tracking-tight transition-opacity hover:opacity-70"
        >
          Maya<span className="text-accent">.</span>
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {sections.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => onNavigate("works")}
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
        >
          Start a Project
        </button>
      </nav>
    </header>
  );
}
