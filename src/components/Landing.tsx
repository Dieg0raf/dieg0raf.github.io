import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const LandingPage = () => {
  const handleScrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
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
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-white px-4">
      {/* Main content */}
      <div className="relative z-10 max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Hi, I'm <span className="text-blue-400">Diego Rafael</span>
        </h1>

        <div className="space-y-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
            Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            I specialize in building scalable web applications and solving
            complex problems with clean, efficient code. I'm passionate about
            exploring new technologies and creating impactful products. With
            over four years of coding experience, I’m always eager to learn and
            grow.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => scrollToSection("my-projects")}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
          >
            View My Work
          </button>
          <a
            href="/Diego_s_Resume_New_2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium border border-gray-700 transition-colors"
          >
            View Resume
          </a>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6 mb-16">
          <a
            href="https://www.github.com/dieg0raf"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-6 h-6 md:w-7 md:h-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/diego-rafael-8668b02b1/"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6 md:w-7 md:h-7" />
          </a>
          <a
            href="mailto:rafael2002diego@gmail.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail className="w-6 h-6 md:w-7 md:h-7" />
          </a>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={handleScrollToContent}
          className="left-1/2 -translate-x-1/2 text-gray-400 hover:text-white transition-colors animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default LandingPage;
