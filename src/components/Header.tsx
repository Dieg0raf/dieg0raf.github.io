import { useState } from "react";
const Header = () => {
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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent border-b border-gray-700 backdrop-blur-sm z-50">
      <nav className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-white">DR</span>
          </div>
          {/* Navigation Links */}
          <div className="hidden sm:block">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("my-experience")}
                className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("my-projects")}
                className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("my-skills")}
                className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("my-contact")}
                className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-lg"
              >
                Contact
              </button>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-200 hover:text-white focus:outline-none"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button className="text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Home
              </button>
              <button className="text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                About
              </button>
              <button className="text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Projects
              </button>
              <button className="text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
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
