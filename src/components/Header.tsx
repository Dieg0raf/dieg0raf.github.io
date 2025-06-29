import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
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
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-card border-b border-accent shadow-lg">
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
          {/* Navigation Links */}
          <div className="hidden sm:block">
            <div className="flex items-center space-x-8">
              <Link
                to="/"
                className="text-foreground hover:text-accent px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Home
              </Link>
              <Link
                to="/projects"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="text-foreground hover:text-accent px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Projects
              </Link>
              <button
                onClick={() => scrollToSection("my-experience")}
                className="text-foreground hover:text-accent px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("my-skills")}
                className="text-foreground hover:text-accent px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("my-contact")}
                className="bg-accent text-accent-foreground hover:bg-primary px-4 py-2 rounded-md text-base font-semibold transition-colors shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Contact
              </button>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="sm:hidden">
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
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-b-lg shadow-lg border-t border-accent">
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
                className="bg-accent text-accent-foreground hover:bg-primary block px-4 py-2 rounded-md text-base font-semibold shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
