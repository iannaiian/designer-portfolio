import ScrollableSection from "@/components/ScrollableSection";

export default function HeroSection() {
  return (
    <ScrollableSection
      id="hero"
      className="relative bg-[url('/images/grid.png')] bg-cover"
      innerClassName="relative"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl"
      />

      <div className="relative grid w-full items-center gap-12 lg:grid-cols-2">
        <div className="animate-fade-up space-y-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            UI/UX Designer
          </p>
          <h1 className="font-[family-name:var(--font-syne)] text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Designing experiences people{" "}
            <span className="text-accent">love to use</span>
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted">
            I craft intuitive interfaces and meaningful product journeys for
            brands that care about clarity, beauty, and impact.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:hello@mayachen.design"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-80"
            >
              View My Work
              <span aria-hidden>→</span>
            </a>
            <span className="text-sm text-muted">Based in San Francisco</span>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl shadow-accent/10">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-100" />
            <div className="absolute inset-8 rounded-2xl border border-border/60 bg-white/80 p-6 backdrop-blur-sm">
              <div className="mb-6 h-3 w-20 rounded-full bg-accent/20" />
              <div className="space-y-3">
                <div className="h-4 w-full rounded bg-foreground/5" />
                <div className="h-4 w-4/5 rounded bg-foreground/5" />
                <div className="h-4 w-3/5 rounded bg-foreground/5" />
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="aspect-square rounded-xl bg-accent/10" />
                <div className="aspect-square rounded-xl bg-violet-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollableSection>
  );
}
