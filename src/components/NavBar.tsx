import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
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
    // Update active section
    setActiveSection(sectionId.replace("my-", ""));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-1/2 -translate-y-1/2 w-[62px] h-[352px] z-50 backdrop-blur-md bg-card shadow-lg hidden lg:flex lg:flex-col rounded-lg">
        <nav className="flex flex-col items-center justify-between h-full py-4">
          {/* Logo */}
          <div className="flex-shrink-0 relative group">
            <div
              className={`w-10 h-10 flex items-center justify-center text-lg font-extrabold text-foreground tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md transition-all duration-200 hover:scale-110 active:scale-95`}
            >
              DR
            </div>
            {/* Enhanced Tooltip */}
            <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-primary text-primary-foreground text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              Diego Rafael
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-primary rotate-45"></div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center space-y-3 flex-1 justify-center">
            <div className="relative group">
              <Link
                to="/"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setActiveSection("home");
                }}
                className={`w-10 h-10 flex items-center justify-center rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent hover:scale-110 active:scale-95 ${
                  activeSection === "home"
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-primary/10"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </Link>
              {/* Enhanced Tooltip */}
              <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-primary text-primary-foreground text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                Home
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-primary rotate-45"></div>
              </div>
            </div>

            {/* Experience */}
            <div className="relative group">
              <button
                onClick={() => scrollToSection("my-experience")}
                className={`w-10 h-10 flex items-center justify-center rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent hover:scale-110 active:scale-95 ${
                  activeSection === "experience"
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-primary/10"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"
                  />
                </svg>
              </button>
              {/* Enhanced Tooltip */}
              <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-primary text-primary-foreground text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                Experience
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-primary rotate-45"></div>
              </div>
            </div>

            {/* Education */}
            <div className="relative group">
              <button
                onClick={() => scrollToSection("my-education")}
                className={`w-10 h-10 flex items-center justify-center rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent hover:scale-110 active:scale-95 ${
                  activeSection === "education"
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-primary/10"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
              </button>
              {/* Enhanced Tooltip */}
              <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-primary text-primary-foreground text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                Education
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-primary rotate-45"></div>
              </div>
            </div>

            {/* Skills */}
            <div className="relative group">
              <button
                onClick={() => scrollToSection("my-skills")}
                className={`w-10 h-10 flex items-center justify-center rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent hover:scale-110 active:scale-95 ${
                  activeSection === "skills"
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-primary/10"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </button>
              {/* Enhanced Tooltip */}
              <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-primary text-primary-foreground text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                Skills
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-primary rotate-45"></div>
              </div>
            </div>

            {/* Projects */}
            <div className="relative group">
              <button
                onClick={() => scrollToSection("my-projects")}
                className={`w-10 h-10 flex items-center justify-center rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent hover:scale-110 active:scale-95 ${
                  activeSection === "projects"
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-primary/10"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </button>
              {/* Enhanced Tooltip */}
              <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-primary text-primary-foreground text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                Projects
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-primary rotate-45"></div>
              </div>
            </div>
          </div>

          {/* Contact Button */}
          <div className="flex-shrink-0 relative group">
            <button
              onClick={() => scrollToSection("my-contact")}
              className={`w-10 h-10 flex items-center justify-center rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent hover:scale-110 active:scale-95 ${
                activeSection === "contact"
                  ? "bg-accent text-accent-foreground"
                  : "text-foreground hover:bg-accent/10"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </button>
            {/* Enhanced Tooltip */}
            <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-accent text-accent-foreground text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              Contact
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-accent rotate-45"></div>
            </div>
          </div>
        </nav>
      </aside>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-card border-b border-border shadow-lg lg:hidden">
        <nav className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                to={"/"}
                className="text-2xl font-extrabold text-foreground tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md transition"
              >
                DR
              </Link>
            </div>
            {/* Mobile menu button */}
            <div>
              <button
                onClick={toggleMenu}
                className="text-foreground hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
                aria-label="Open menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile menu dropdown */}
          {isMenuOpen && (
            <div>
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-b-lg shadow-lg border-t border-border">
                <Link
                  to="/"
                  onClick={toggleMenu}
                  className="text-foreground hover:text-accent block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  Home
                </Link>
                <Link
                  to="/projects"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    toggleMenu();
                  }}
                  className="text-foreground hover:text-accent block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  Projects
                </Link>
                <button
                  onClick={() => {
                    scrollToSection("my-experience");
                    toggleMenu();
                  }}
                  className="text-foreground hover:text-accent block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  Experience
                </button>
                <button
                  onClick={() => {
                    scrollToSection("my-education");
                    toggleMenu();
                  }}
                  className="text-foreground hover:text-accent block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  Education
                </button>
                <button
                  onClick={() => {
                    scrollToSection("my-skills");
                    toggleMenu();
                  }}
                  className="text-foreground hover:text-accent block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  Skills
                </button>
                <button
                  onClick={() => {
                    scrollToSection("my-contact");
                    toggleMenu();
                  }}
                  className="bg-accent text-accent-foreground hover:bg-accent/90 block px-4 py-2 rounded-md text-base font-semibold shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
