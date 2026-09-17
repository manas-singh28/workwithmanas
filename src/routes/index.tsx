import { createFileRoute } from "@tanstack/react-router";
import { AmbientBackground } from "@/components/portfolio/AmbientBackground";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { CaseStudies } from "@/components/portfolio/CaseStudies";
import { Education, Certifications } from "@/components/portfolio/EducationCerts";
import { Contact, SiteFooter } from "@/components/portfolio/Contact";

const title = "Manas Singh — AI & Technical Product Builder";
const description =
  "Manas Singh builds AI, payments, API and data products at HSBC, combining engineering expertise with product discovery and cross-functional delivery.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <AmbientBackground />
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <CaseStudies />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
