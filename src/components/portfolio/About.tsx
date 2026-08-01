import { Counter, Reveal, SectionHeading } from "./primitives";

const metrics = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: "M+", label: "Records Processed" },
  { value: 500, suffix: " TPS", label: "Payment Systems" },
  { value: 11, suffix: "", label: "Business Lines Supported" },
  { value: 5, suffix: "+", label: "Production Microservices" },
  { value: 3, suffix: "", label: "Product POCs Delivered" },
];

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading eyebrow="About" title="Engineering Mindset. Product Vision." />

      <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I am a Senior Software Engineer at HSBC focused on building reliable, scalable, and
            client-loved products.
          </p>
          <p>
            Over the past three years, I have developed distributed backend systems, real-time
            payment infrastructure, and enterprise APIs serving millions of transactions.
          </p>
          <p>
            Today, I am transitioning into Technical Product Management because I enjoy
            understanding customer problems, discovering opportunities, prioritizing impactful
            features, and working across engineering and business teams to deliver products users
            genuinely love.
          </p>
          <p className="text-foreground">
            My passion is solving complex business challenges through elegant, minimalist
            technology.
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
