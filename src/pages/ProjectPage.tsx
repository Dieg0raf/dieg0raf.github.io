import ProjectShowcase from "../components/ProjectShowCase";
import ContactSection from "../components/Contact";

export default function ProjectsPage() {
  return (
    <>
      <main className="relative z-10 max-w-5xl mx-auto space-y-16 px-4 pt-20 pb-8">
        <ProjectShowcase />
      </main>
      <ContactSection />
    </>
  );
}
