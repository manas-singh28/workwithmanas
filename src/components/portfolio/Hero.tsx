import { motion } from "motion/react";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import profile from "@/assets/manas.jpg";
import resume from "@/assets/resume/PM_ManasSingh_Resume.pdf.asset.json";

export function Hero() {
  return (
    <section id="home" className="relative">
      <div className="section-shell grid items-center gap-14 pt-36 md:pt-44 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <Sparkles className="size-3.5 text-primary-glow" />
            AI &amp; Technical Product Builder
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[2.95rem]"
          >
            <span className="text-gradient">Technical Product Builder.</span>
            <br />
            Turning Complex Problems
            <br />
            Into Products That Ship.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            Hi, I&apos;m <span className="font-medium text-foreground">Manas</span> — I bridge
            engineering and product to turn ambiguous problems into simple, scalable experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="#case-studies"
              className="bg-gradient-primary group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              View Case Studies
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={resume.url}
              target="_blank"
              rel="noreferrer"
              download="PM_ManasSingh_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium transition-colors hover:border-ring"
            >
              <Download className="size-4" />
              Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="bg-gradient-primary animate-pulse-ring absolute inset-6 rounded-full blur-3xl opacity-40" />
          <div className="bg-gradient-primary relative rounded-full p-[2px] shadow-[var(--shadow-glow)]">
            <img
              src={profile}
              alt="Portrait of Manas, Senior Software Engineer at HSBC"
              width={816}
              height={816}
              className="aspect-square w-full rounded-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
