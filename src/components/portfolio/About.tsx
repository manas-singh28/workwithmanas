import { Counter, Reveal, SectionHeading } from "./primitives";

const metrics = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: "M+", label: "Records Processed" },
  { value: 23, suffix: "%", label: "Self-Service Deflection" },
  { value: 11, suffix: "", label: "Business Lines Supported" },
  { value: 98, suffix: "%", label: "Login Success" },
  { value: 200, suffix: " TPS", label: "AI Load Validated" },
];

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading eyebrow="About" title="Engineering Mindset. Product Vision." />

      <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I am a technical product builder at HSBC, combining software engineering depth with
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

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.06}>
              <div className="glass-card glass-card-hover h-full p-5">
                <p className="font-display text-2xl font-semibold text-gradient sm:text-3xl">
                  <Counter value={m.value} suffix={m.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{m.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
