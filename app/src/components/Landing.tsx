import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const LandingPage = () => {
  const handleScrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-white px-4">
      {/* Main content */}
      <div className="relative z-10 max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Hi, I'm <span className="text-blue-400">Diego Rafael</span>
        </h1>

        <div className="space-y-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
            Full Stack Software Engineer
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            I build scalable web applications and solve complex problems with
            clean, efficient code.
          </p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["React", "Node.js", "Python", "TypeScript", "AWS"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-gray-800/50 rounded-full text-sm md:text-base border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => {}}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
          >
            View My Work
          </button>
          <button
            onClick={() => {}}
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium border border-gray-700 transition-colors"
          >
            Download Resume
          </button>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6 mb-16">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-6 h-6 md:w-7 md:h-7" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6 md:w-7 md:h-7" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail className="w-6 h-6 md:w-7 md:h-7" />
          </a>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={handleScrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-white transition-colors animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
