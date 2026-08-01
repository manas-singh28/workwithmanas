import { Cpu, Compass } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";

const engineering = [
  "Java",
  "Spring Boot",
  "Python",
  "Kafka",
  "REST APIs",
  "Microservices",
  "SQL",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Docker",
  "Kubernetes",
  "AWS",
  "Jenkins",
  "System Design",
  "Performance Optimization",
];

const product = [
  "Product Discovery",
  "Product Strategy",
  "User Research",
  "Product Roadmapping",
  "PRD Writing",
  "Prioritization (RICE, MoSCoW)",
  "Product Analytics",
  "Success Metrics",
  "Experimentation",
  "Market Research",
  "Stakeholder Management",
  "Cross-functional Leadership",
  "AI Product Design",
];

function SkillGroup({
  title,
  icon,
  items,
  delay,
}: {
  title: string;
  icon: React.ReactNode;
  items: string[];
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="glass-card glass-card-hover h-full p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="rounded-xl border border-border bg-surface p-2.5 text-primary-glow">
            {icon}
          </span>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {items.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-ring hover:text-foreground hover:shadow-[var(--shadow-glow)]"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="Depth in engineering. Fluency in product."
        subtitle="The toolkit I use to move from customer problem to shipped, measurable outcome."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <SkillGroup title="Engineering" icon={<Cpu className="size-5" />} items={engineering} delay={0} />
        <SkillGroup
          title="Product Management"
          icon={<Compass className="size-5" />}
          items={product}
          delay={0.1}
        />
      </div>
    </section>
  );
}
