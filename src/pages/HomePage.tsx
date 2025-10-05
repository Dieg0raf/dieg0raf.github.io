import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ProjectsSection from "../components/ProjectShowCase";
import ExperienceSection from "../components/Experience";
import EducationSection from "../components/Education";
import LandingSection from "../components/Landing";
import SkillsSection from "../components/Skills";
import ContactSection from "../components/Contact";

interface LocationState {
  scrollTo?: string;
}

export default function HomePage() {
  const location = useLocation();
  const state = location.state as LocationState;

  useEffect(() => {
    if (state?.scrollTo) {
      const element = document.getElementById(state.scrollTo);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      // Clear the state after scrolling
      window.history.replaceState({}, document.title);
    }
  }, [state?.scrollTo]);

  return (
    <>
      <main className="relative z-10 max-w-5xl mx-auto space-y-16 px-4 pt-20 pb-8 md:py-0">
        <LandingSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
      <ContactSection />
    </>
  );
}
