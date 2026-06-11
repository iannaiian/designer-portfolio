import ScrollableSection from "@/components/ScrollableSection";

const experiences = [
  {
    role: "Senior Product Designer",
    company: "Linear",
    period: "2022 — Present",
    description:
      "Lead design for core product workflows, established component library, and improved onboarding conversion by 34%.",
  },
  {
    role: "UI/UX Designer",
    company: "Stripe",
    period: "2020 — 2022",
    description:
      "Designed merchant dashboard experiences and collaborated on accessibility improvements across payment flows.",
  },
  {
    role: "Product Designer",
    company: "Freelance",
    period: "2018 — 2020",
    description:
      "Partnered with early-stage startups on brand identity, mobile apps, and marketing sites from concept to launch.",
  },
  {
    role: "Product Designer",
    company: "Freelance2",
    period: "2018 — 2020",
    description:
      "Partnered with early-stage startups on brand identity, mobile apps, and marketing sites from concept to launch.",
  },
];

export default function ExperiencesSection() {
  return (
    <ScrollableSection id="experiences" innerClassName="justify-start">
      <div className="w-full">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Experience
          </p>
          <h2 className="font-[family-name:var(--font-syne)] text-4xl font-bold tracking-tight md:text-5xl">
            Where I&apos;ve made an impact
          </h2>
        </div>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <article
              key={`${exp.company}-${index}`}
              className="group rounded-2xl border border-border bg-surface p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 md:p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex gap-5">
                  <span className="font-[family-name:var(--font-syne)] text-2xl font-bold text-accent/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold">
                      {exp.role}
                    </h3>
                    <p className="mt-1 font-medium text-accent">{exp.company}</p>
                  </div>
                </div>
                <time className="shrink-0 text-sm font-medium text-muted">
                  {exp.period}
                </time>
              </div>
              <p className="mt-4 max-w-3xl pl-0 text-muted md:pl-14">
                {exp.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </ScrollableSection>
  );
}
