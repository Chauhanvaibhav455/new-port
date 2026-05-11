import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExpertiseSection } from "@/components/expertise-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ImpactSection } from "@/components/impact-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <SkillsSection />
      <ProjectsSection />
      <ImpactSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
