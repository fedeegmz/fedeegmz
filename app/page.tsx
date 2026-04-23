import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { TechStack } from "@/components/sections/tech-stack";
import { Timeline } from "@/components/sections/timeline";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import { siteData } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero data={siteData.hero} />
        <TechStack items={siteData.techStack} />
        <Timeline items={siteData.timeline} />
        <Projects projects={siteData.projects} />
        <Contact data={siteData.contact} />
      </main>
      <Footer />
    </>
  );
}
