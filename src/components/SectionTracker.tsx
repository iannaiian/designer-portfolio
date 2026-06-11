"use client";

import { sections, type SectionId } from "@/lib/sections";

type SectionTrackerProps = {
  activeSection: SectionId;
  onNavigate: (sectionId: SectionId) => void;
};

export default function SectionTracker({
  activeSection,
  onNavigate,
}: SectionTrackerProps) {
  const activeIndex = sections.findIndex((s) => s.id === activeSection);
  const current = sections[activeIndex] ?? sections[0];

  return (
    <div
      className="fixed bottom-6 left-6 z-40 flex flex-col gap-3 md:bottom-8 md:left-10"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="rounded-2xl border border-border/60 bg-background/80 px-4 py-3 backdrop-blur-md">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(sections.length).padStart(2, "0")}
        </p>
        <p className="mt-0.5 font-[family-name:var(--font-syne)] text-sm font-bold tracking-tight md:text-base">
          {current.caption}
        </p>
      </div>

      <div className="flex items-center gap-2" role="tablist" aria-label="Sections">
        {sections.map((section, index) => {
          const isActive = section.id === activeSection;
          return (
            <button
              key={section.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to ${section.caption}`}
              onClick={() => onNavigate(section.id)}
              className={`h-2 rounded-full transition-all ${
                isActive
                  ? "w-6 bg-accent"
                  : "w-2 bg-border hover:bg-muted"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
