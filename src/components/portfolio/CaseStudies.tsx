import { useState } from "react";
import {
  BrainCircuit,
  Bike,
  Download,
  Heart,
  LayoutTemplate,
  LineChart,
  Music4,
  Salad,
  Users,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./primitives";

import aiCareerCoach from "@/assets/case-studies/AI_CAREER_COACH_CASE_STUDY.pdf.asset.json";
import weekenderPrd from "@/assets/case-studies/APPP_FOR_WEEKEND_PRD.pdf.asset.json";
import weekenderWireframe from "@/assets/case-studies/APP_FOR_WEEKEND_WIREFRAME.pdf.asset.json";
import virtualCompanions from "@/assets/case-studies/MARKET_ANALYSIS_VIRTUAL_COMPANIES.pdf.asset.json";
import rapido from "@/assets/case-studies/RAPIDO_USER_ENGAGEMENT.pdf.asset.json";
import spotify from "@/assets/case-studies/SPOTIFY_CASE_STUDY.pdf.asset.json";
import tooGoodToGo from "@/assets/case-studies/TOO_GOOD_TO_GO_APP_TEARDOWN.pdf.asset.json";
import zerodha from "@/assets/case-studies/ZERODHA_Product_Teardown.pdf.asset.json";
import wiseWallet from "@/assets/case-studies/WISEWALLET_CASE_STUDY.pdf.asset.json";

import aiCareerCoachCover from "@/assets/covers/AI_CAREER_COACH_CASE_STUDY.jpg.asset.json";
import weekenderPrdCover from "@/assets/covers/APPP_FOR_WEEKEND_PRD.jpg.asset.json";
import weekenderWireframeCover from "@/assets/covers/APP_FOR_WEEKEND_WIREFRAME.jpg.asset.json";
import virtualCompanionsCover from "@/assets/covers/MARKET_ANALYSIS_VIRTUAL_COMPANIES.jpg.asset.json";
import rapidoCover from "@/assets/covers/RAPIDO_USER_ENGAGEMENT.jpg.asset.json";
import spotifyCover from "@/assets/covers/SPOTIFY_CASE_STUDY.jpg.asset.json";
import tooGoodToGoCover from "@/assets/covers/TOO_GOOD_TO_GO_APP_TEARDOWN.jpg.asset.json";
import zerodhaCover from "@/assets/covers/ZERODHA_Product_Teardown.jpg.asset.json";
import wiseWalletCover from "@/assets/covers/WISEWALLET_CASE_STUDY.jpg.asset.json";

const caseStudies = [
  {
    icon: Wallet,
    tag: "Fintech · SMB · Case Study",
    title: "WiseWallet — AI Expense Management for SMBs",
    summary:
      "A case study on the $7.64B expense management market: SMBs find SAP Concur and Expensify too costly and complex, so WiseWallet ships a WhatsApp chatbot with IDP-powered receipt reading, automated approvals and a freemium model built for teams without an IT function.",
    chapters: ["Market Overview", "User Research", "Problem", "Ideation & RICE", "System Design", "Wireframes", "AARRR Metrics", "Launch Plan"],
    file: wiseWallet,
    cover: wiseWalletCover,
  },

  {
    icon: BrainCircuit,
    tag: "AI · Career Tech · Case Study",
    title: "AI Career Coach",
    summary:
      "An AI-powered career platform that helps professionals discover career paths, build personalised learning roadmaps, sharpen resumes and prepare for interviews with adaptive coaching.",
    chapters: ["Problem Discovery", "User Interviews", "MVP Scope", "AI Features", "Wireframes", "Success Metrics"],
    file: aiCareerCoach,
    cover: aiCareerCoachCover,
  },
  {
    icon: Music4,
    tag: "Consumer · Growth Strategy",
    title: "Increasing Time Spent Listening on Spotify",
    summary:
      "A growth case study on India's ₹1,109M music streaming market — analysing search trends, regional content shifts and user penetration to design discovery and engagement loops that lift listening hours.",
    chapters: ["Market Landscape", "Google Trends", "User Segments", "Growth Levers", "Experiments", "Metrics"],
    file: spotify,
    cover: spotifyCover,
  },
  {
    icon: Bike,
    tag: "Mobility · PRD",
    title: "Rapido — Commuter Subscription & Engagement",
    summary:
      "A PRD tackling surge-driven price volatility and churn for daily commuters through a prepaid ride subscription: predictable fares, loyalty benefits and stronger revenue visibility.",
    chapters: ["Problem Definition", "Target Users", "Goals", "Functional Metrics", "Solution", "Success Criteria"],
    file: rapido,
    cover: rapidoCover,
  },
  {
    icon: Users,
    tag: "Social · PRD",
    title: "Weekender — Social Weekend Planning (PRD)",
    summary:
      "A product requirements doc for an app that fights urban loneliness by curating low-pressure, solo-friendly weekend plans for 22–35 year olds, monetised via event partnerships and ticketing.",
    chapters: ["Problem", "Personas", "Business Value", "Why Now", "Goals", "Metrics"],
    file: weekenderPrd,
    cover: weekenderPrdCover,
  },
  {
    icon: LayoutTemplate,
    tag: "Design · Wireframes",
    title: "Weekender — Onboarding & App Wireframes",
    summary:
      "End-to-end wireframes for Weekender: quiz-led onboarding capturing vibe and comfort level, trust-boosting profile verification, and a “This Weekend's Picks” home experience.",
    chapters: ["Onboarding Quiz", "Verification", "Home Feed", "Plan Detail", "Group Flow", "Post-Event"],
    file: weekenderWireframe,
    cover: weekenderWireframeCover,
  },
  {
    icon: Heart,
    tag: "Market Research",
    title: "Virtual Companions — India Market Analysis",
    summary:
      "Market sizing for AI companions in India: Gen Z scale, 78% mobile penetration and a mental-health app market growing from $195M (2024) to $1.97B (2035), with a 25–60M potential user base by 2030.",
    chapters: ["Market Overview", "Adoption Trends", "Sub-segments", "Target Audience", "Growth Projections", "Risks"],
    file: virtualCompanions,
    cover: virtualCompanionsCover,
  },
  {
    icon: Salad,
    tag: "Product Teardown",
    title: "Too Good To Go — App Teardown",
    summary:
      "A teardown of the Danish food-waste marketplace: how surprise “Magic Bags” of surplus food, a commission model and a sustainability mission create a win for users, merchants and the planet.",
    chapters: ["About", "Business Model", "Target User", "User Journey", "Market Landscape", "Financials"],
    file: tooGoodToGo,
    cover: tooGoodToGoCover,
  },
  {
    icon: LineChart,
    tag: "Fintech · Product Teardown",
    title: "Zerodha — Product Teardown",
    summary:
      "A teardown of India's largest discount broker — ₹8,320 Cr revenue and ₹4,700 Cr profit in FY24 — unpacking the zero-brokerage model, product ecosystem and what drives its profitability.",
    chapters: ["About", "Market Landscape", "Business Model", "Product Suite", "User Journey", "Opportunities"],
    file: zerodha,
    cover: zerodhaCover,
  },
];

function topicFromTag(tag: string) {
  const normalized = tag.toLowerCase();
  if (normalized.includes("prd")) return "PRD";
  if (normalized.includes("product teardown")) return "Product Teardown";
  if (normalized.includes("market research")) return "Market Research";
  if (normalized.includes("wireframes") || normalized.includes("design"pro")) return "Design";
  const first = tag.split("·")[0]?.trim() ?? "";
  if (first === "Fintech" || first === "Mobility") return "Case Study";
  return first;
}

export function CaseStudies() {
  const [active, setActive] = useState<string>("All");

  const topics = Array.from(
    new Set(caseStudies.map((cs) => topicFromTag(cs.tag)))
  ).sort();

  const filtered =
    active === "All"
      ? caseStudies
      : caseStudies.filter((cs) => topicFromTag(cs.tag) === active);

  const chipBase =
    "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors duration-300";
  const chipInactive =
    "border-border bg-surface/60 text-muted-foreground hover:border-primary/40 hover:text-foreground";
  const chipActive =
    "border-primary/50 bg-primary/15 text-primary-glow";

  return (
    <section id="case-studies" className="section-shell">
      <SectionHeading
        eyebrow="Case Studies"
        title="Product thinking, end to end."
        subtitle="PRDs, teardowns, market analyses and growth strategies — download any of them as a PDF."
      />

      <div className="mb-10 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive("All")}
          className={cn(chipBase, active === "All" ? chipActive : chipInactive)}
        >
          All
        </button>
        {topics.map((topic) => (
          <button
            type="button"
            key={topic}
            onClick={() => setActive(topic)}
            className={cn(chipBase, active === topic ? chipActive : chipInactive)}
          >
            {topic}
          </button>
        ))}
      </div>

      <div className="grid gap-6">
        {filtered.map((cs, i) => (
          <Reveal key={cs.title} delay={i * 0.06}>
            <article className="glass-card glass-card-hover group grid gap-8 p-6 sm:p-9 lg:grid-cols-[0.85fr_1.15fr]">
              <a
                href={cs.file.url}
                target="_blank"
                rel="noreferrer"
                className="relative block overflow-hidden rounded-2xl border border-border bg-surface/60"
              >
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(120%_90%_at_50%_100%,hsl(var(--primary)/0.28),transparent_70%)]" />
                <img
                  src={cs.cover.url}
                  alt={`${cs.title} case study cover page`}
                  loading="lazy"
                  className="aspect-[16/10] w-full bg-background/40 object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </a>

              <div className="flex flex-col">
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

                <div className="mt-6 flex flex-wrap gap-2">
                  {cs.chapters.map((c) => (
                    <span
                      key={c}
                      className="rounded-lg border border-border bg-background/50 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                <a
                  href={cs.file.url}
                  download={cs.file.original_filename}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl border border-border bg-surface/70 px-4 py-2 text-sm font-medium text-primary-glow transition-colors duration-300 hover:border-primary/50 hover:bg-surface"
                >
                  <Download className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                  Download PDF
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
