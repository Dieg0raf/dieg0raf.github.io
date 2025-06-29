import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center items-center px-4">
      <div className="relative z-10 max-w-3xl w-full text-center flex flex-col items-center gap-8 py-12">
        {/* Name and Title Block */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl md:text-3xl font-bold tracking-widest text-accent uppercase mb-1">
            Diego Rafael
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-foreground drop-shadow-lg">
            Systems Software Engineer
          </h1>
        </div>
        {/* Subtitle */}
        <div className="mt-2">
          <span className="text-xl md:text-2xl text-muted-foreground font-medium">
            Computer Science graduate passionate about systems, performance, and
            low-level programming.
          </span>
        </div>
        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          <Link
            to={"/projects"}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-8 py-3 bg-accent hover:bg-primary text-accent-foreground rounded-lg font-semibold text-lg transition-colors shadow"
          >
            View My Work
          </Link>
        </div>
        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-2">
          <a
            href="https://www.github.com/dieg0raf"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 md:w-7 md:h-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/diego-rafael-8668b02b1/"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 md:w-7 md:h-7" />
          </a>
          <a
            href="mailto:rafael2002diego@gmail.com"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 md:w-7 md:h-7" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
