import ScrollableSection from "@/components/ScrollableSection";

const projects = [
  {
    title: "Nova Banking App",
    category: "Mobile · Fintech",
    description:
      "Redesigned the mobile banking experience with a focus on clarity and trust for first-time users.",
    color: "from-indigo-500 to-violet-600",
  },
  {
    title: "Arc Health Platform",
    category: "Web · Healthcare",
    description:
      "Built a patient portal and provider dashboard that reduced appointment no-shows by 28%.",
    color: "from-emerald-400 to-teal-600",
  },
  {
    title: "Bloom E-commerce",
    category: "Web · Retail",
    description:
      "Crafted a premium shopping experience with personalized recommendations and streamlined checkout.",
    color: "from-orange-400 to-rose-500",
  },
  {
    title: "Pulse Analytics",
    category: "SaaS · Data",
    description:
      "Designed an intuitive analytics dashboard that made complex data accessible to non-technical teams.",
    color: "from-sky-400 to-blue-600",
  },
];

export default function PastWorksSection() {
  return (
    <ScrollableSection id="works" innerClassName="justify-start">
      <div className="w-full">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Past Works
            </p>
            <h2 className="font-[family-name:var(--font-syne)] text-4xl font-bold tracking-tight md:text-5xl">
              Selected projects
            </h2>
          </div>
          <a
            href="mailto:hello@mayachen.design"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
          >
            hello@mayachen.design
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
            >
              <div
                className={`aspect-[16/10] bg-gradient-to-br ${project.color} p-6 transition-transform group-hover:scale-[1.02]`}
              >
                <div className="flex h-full flex-col justify-end rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                  <span className="text-xs font-medium uppercase tracking-wider text-white/80">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </ScrollableSection>
  );
}
