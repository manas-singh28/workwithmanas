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

const title = "Manas — Software Engineer & Technical Product Manager";
const description =
  "Portfolio of Manas, Senior Software Engineer at HSBC transitioning into Technical Product Management — payments infrastructure, scalable APIs and AI product case studies.";

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
