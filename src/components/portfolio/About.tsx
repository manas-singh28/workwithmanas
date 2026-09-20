import { Reveal, SectionHeading } from "./primitives";

const capabilities = [
  {
    title: "AI Products",
    description: "Building trustworthy AI experiences for banking.",
  },
  {
    title: "Payments",
    description: "Designing products around real-time financial workflows.",
  },
  {
    title: "Platform Products",
    description: "Turning complex internal processes into scalable self-service tools.",
  },
  {
    title: "Product Discovery",
    description: "From stakeholder problems to requirements, priorities, and MVPs.",
  },
  {
    title: "Technical Execution",
    description: "Working across APIs, microservices, data, and cloud to ship products.",
  },
  {
    title: "Responsible AI",
    description: "Designing guardrails, reliability, and measurable outcomes into AI products.",
  },
];

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading eyebrow="About" title="Engineering Mindset. Product Vision." />

      <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I am a senior software engineer at HSBC, combining software engineering depth with
            hands-on product discovery, requirements definition, prioritization, and delivery.
          </p>
          <p>
            Over the past three years, I have shipped conversational AI, authentication, API, and
            data products used in enterprise banking—improving self-service, reliability, and
            operational efficiency.
          </p>
          <p>
            My work spans the full product lifecycle: understanding user and stakeholder needs,
            defining guardrails and success metrics, shaping roadmaps, and partnering across teams
            to take complex capabilities into production.
          </p>
          <p className="text-foreground">
            I am especially interested in building trustworthy AI and technical products that turn
            complex systems into simple, measurable customer outcomes.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className="glass-card glass-card-hover h-full p-5">
                <p className="font-display text-base font-semibold text-gradient sm:text-lg">
                  {c.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
