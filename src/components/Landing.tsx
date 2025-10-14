import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const LandingPage = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto w-full">
        {/* Avatar and Decorative Elements */}
        <div className="flex items-start gap-6 mb-8">
          {/* Avatar */}
          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
            <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
              <span className="text-accent font-bold text-lg">DR</span>
            </div>
          </div>

          {/* Decorative Circles */}
          <div className="flex items-center gap-3 mt-2">
            <div className="w-3 h-3 bg-accent rounded-full"></div>
            <div className="w-3 h-3 bg-accent/80 rounded-full"></div>
            <div className="w-3 h-3 bg-accent/60 rounded-full"></div>
            <div className="w-3 h-3 bg-accent/40 rounded-full"></div>
            <div className="w-3 h-3 bg-accent/20 rounded-full"></div>
          </div>
        </div>

        {/* Main Heading with Typewriter Effect */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight text-foreground mb-4">
            The digital home for
            <br />
            <span className="text-accent">
              <Typewriter
                options={{
                  strings: [
                    "Diego's creativity",
                    "Diego's projects",
                    "Diego's journey",
                    "Diego's work",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </span>
          </h1>
          {/* Title and Degree */}
          <div className="mt-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="bg-accent/5 px-3 py-1 rounded-md text-xl md:text-2xl font-medium w-fit">
                Full Stack Software Engineer
              </span>
              <span className="text-muted-foreground text-xl md:text-2xl font-medium hidden sm:inline">
                ·
              </span>
              <span className="bg-accent/5 px-3 py-1 rounded-md text-xl md:text-2xl font-medium w-fit">
                CS Graduate
              </span>
            </div>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="mb-8 max-w-2xl">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Welcome to my corner of the web where I write about development,
            systems programming, and just about anything that interests me.
          </p>
        </div>

        {/* About Section */}
        <div className="mb-12 max-w-2xl">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
            Back in 2020, I began my journey as a computer science student and
            developer. Over the last 5 years I've built a portfolio of projects,
            focusing on full-stack development, systems programming, and
            performance optimization.
          </p>
          <a
            href="#my-experience"
            className="text-accent hover:text-accent/80 underline underline-offset-4 transition-colors duration-150"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("my-experience")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Read more
          </a>
        </div>

        {/* CTA and Social Links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          {/* Reach Out Button */}
          <Link
            to="#my-contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("my-contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-6 py-3 border border-border/50 hover:border-accent/50 rounded-lg text-foreground hover:text-accent transition-all duration-150 group"
          >
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
            Reach out
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.github.com/dieg0raf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-border/50 hover:border-accent/50 rounded-lg flex items-center justify-center text-foreground hover:text-accent transition-all duration-150 group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-150" />
            </a>
            <a
              href="https://www.linkedin.com/in/diego-rafael-8668b02b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-border/50 hover:border-accent/50 rounded-lg flex items-center justify-center text-foreground hover:text-accent transition-all duration-150 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-150" />
            </a>
            <a
              href="mailto:rafael2002diego@gmail.com"
              className="w-10 h-10 border border-border/50 hover:border-accent/50 rounded-lg flex items-center justify-center text-foreground hover:text-accent transition-all duration-150 group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-150" />
            </a>
            <a
              href="/Diego_Resume_New__1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-border/50 hover:border-accent/50 rounded-lg flex items-center justify-center text-foreground hover:text-accent transition-all duration-150 group"
              aria-label="Resume PDF"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 group-hover:scale-110 transition-transform duration-150"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
