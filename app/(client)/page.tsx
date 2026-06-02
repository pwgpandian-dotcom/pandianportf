import Banner from "@/components/Banner";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Banner />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <FeaturedProjects />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
