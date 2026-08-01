import { ArrowUpRight, BrainCircuit, Music4, Wallet } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";

const caseStudies = [
  {
    icon: Wallet,
    tag: "Fintech · AI · B2B",
    title: "AI Smart Wallet for Corporate Expense Management",
    summary:
      "An AI-powered enterprise expense platform that automates receipt scanning, fraud detection, policy compliance, intelligent categorization, and corporate spending insights.",
    chapters: [
      "Problem",
      "Research",
      "User Personas",
      "Competitive Analysis",
      "Opportunity",
      "Product Vision",
      "PRD",
      "Wireframes",
      "Roadmap",
      "KPIs",
      "Business Impact",
    ],
  },
  {
    icon: Music4,
    tag: "Consumer · Growth",
    title: "Spotify Product Growth Strategy",
    summary:
      "Increase listening time through AI-powered recommendations, social listening experiences, personalized discovery, and durable engagement loops.",
    chapters: [
      "Current Problems",
      "Market Research",
      "Growth Opportunities",
      "Feature Prioritization",
      "User Journey",
      "Experiments",
      "Metrics",
      "Expected Impact",
    ],
  },
  {
    icon: BrainCircuit,
    tag: "AI · Career Tech",
    title: "AI Career Coach",
    summary:
      "An AI-powered career platform helping professionals discover career paths, build learning roadmaps, improve resumes, prepare for interviews, and receive personalized coaching.",
    chapters: [
      "Problem Discovery",
      "User Interviews",
      "MVP",
      "Product Strategy",
      "AI Features",
      "Wireframes",
      "Success Metrics",
      "Roadmap",
    ],
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="section-shell">
      <SectionHeading
        eyebrow="Case Studies"
        title="Product thinking, end to end."
        subtitle="From discovery and research to PRDs, prioritization, experiments and measurable impact."
      />

      <div className="grid gap-6">
        {caseStudies.map((cs, i) => (
          <Reveal key={cs.title} delay={i * 0.08}>
            <article className="glass-card glass-card-hover group grid gap-8 p-6 sm:p-9 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="flex items-center gap-3">
                  <span className="rounded-xl border border-border bg-surface p-2.5 text-primary-glow">
                    <cs.icon className="size-5" />
                  </span>
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {cs.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-balance text-xl font-semibold sm:text-2xl">{cs.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{cs.summary}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary-glow">
                  Read case study
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>

              <div className="rounded-2xl border border-border bg-surface/60 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Inside the study
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cs.chapters.map((c) => (
                    <span
                      key={c}
                      className="rounded-lg border border-border bg-background/50 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
