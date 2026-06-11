import ScrollableSection from "@/components/ScrollableSection";

const skills = [
  "User Research",
  "Wireframing",
  "Prototyping",
  "Design Systems",
  "Usability Testing",
  "Interaction Design",
];

export default function AboutSection() {
  return (
    <ScrollableSection
      id="about"
      className="bg-[url('/images/wave.png')] bg-cover"
    >
      <div className="grid w-full gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div className="relative mx-auto aspect-square w-full max-w-sm lg:mx-0">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/20 to-violet-200/50" />
          <div className="absolute inset-4 overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="flex h-full flex-col items-center justify-center gap-4 bg-gradient-to-b from-indigo-50 to-white p-8">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-accent/10 font-[family-name:var(--font-syne)] text-3xl font-bold text-accent">
                MC
              </div>
              <p className="text-center text-sm text-muted">Maya Chen</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              About Me
            </p>
            <h2 className="font-[family-name:var(--font-syne)] text-4xl font-bold tracking-tight md:text-5xl">
              Human-centered design, built with intention
            </h2>
          </div>

          <div className="space-y-4 text-lg leading-relaxed text-muted">
            <p>
              I&apos;m a UI/UX designer with 6+ years of experience turning
              complex problems into elegant, accessible digital products. I
              believe great design is invisible—it just works.
            </p>
            <p>
              From early-stage startups to enterprise teams, I partner closely
              with product and engineering to ship experiences that feel
              effortless and look refined.
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Core Skills
            </p>
            <ul className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ScrollableSection>
  );
}
