import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Mail,
  Github,
  ExternalLink,
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // Determine header background based on current section
  const getHeaderStyle = () => {
    if (currentSection === "home" || currentSection === "contact") {
      return "bg-[#00292f]";
    } else {
      return "bg-white/95 backdrop-blur-md shadow-lg";
    }
  };

  const getTextColor = () => {
    if (currentSection === "home" || currentSection === "contact") {
      return "text-white";
    } else {
      return "text-gray-900";
    }
  };

  const getLogoColor = () => {
    if (currentSection === "home" || currentSection === "contact") {
      return "text-[rgb(212,234,255)]";
    } else {
      return "text-gray-900";
    }
  };

  const getBorderColor = () => {
    if (currentSection === "home" || currentSection === "contact") {
      return "border-[rgb(115,146,173)]";
    } else {
      return "border-gray-200";
    }
  };

  const getButtonStyle = () => {
    if (currentSection === "home" || currentSection === "contact") {
      return "border-[rgb(115,146,173)] text-[rgb(115,146,173)] hover:bg-[rgb(115,146,173)] hover:text-[#00292f]";
    } else {
      return "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white";
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderStyle()}`}
    >
      <div
        className={`max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 border-b ${getBorderColor()}`}
      >
        <div className="flex items-center justify-between h-[12vh] ">
          <div className="flex-shrink-0">
            <h1
              className={`text-[5vh] font-bold transition-colors duration-300 font-['Poppins'] ${getLogoColor()}`}
            >
              CHANDU.
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex w-full  justify-end gap-5 space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`flex items-center space-x-1 transition-colors duration-300 hover:text-blue-600 font-['Poppins'] font-semibold ${getTextColor()}`}
            >
              {/* <Home size={16} /> */}
              <span className="">HOME</span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`flex items-center space-x-1 transition-colors duration-300 hover:text-blue-600 font-['Poppins'] font-semibold ${getTextColor()}`}
            >
              {/* <User size={16} /> */}
              <span>ABOUT</span>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`flex items-center space-x-1 transition-colors duration-300 hover:text-blue-600 font-['Poppins'] font-semibold ${getTextColor()}`}
            >
              {/* <Briefcase size={16} /> */}
              <span>PROJECTS</span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`flex items-center space-x-1 transition-colors duration-300 hover:text-blue-600 font-['Poppins'] font-semibold ${getTextColor()}`}
            >
              {/* <Mail size={16} /> */}
              <span>CONTACT</span>
            </button>
            <div className="hidden md:flex items-center space-x-4 ">
              <a
                href="https://github.com/ChanduSpace"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-300 hover:text-blue-600 ${getTextColor()}`}
              >
                <Github size={20} />
              </a>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1JBy986l3XQgz7KJTCz2RVbWAtf-KVBa4/view?usp=sharing",
                    "_blank"
                  )
                }
                className={`px-4 py-2 border-2 rounded-lg font-semibold transition-all duration-300 font-['Poppins'] ${getButtonStyle()}`}
              >
                Resume
              </button>
            </div>
          </nav>

          {/* Social Links */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors duration-300 ${getTextColor()}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className={`md:hidden ${
              currentSection === "home" || currentSection === "contact"
                ? "bg-[#00292f]"
                : "bg-white"
            } border-t ${getBorderColor()}`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className={`block w-full text-left px-3 py-2 hover:text-emerald-600 hover:bg-gray-50 rounded-md font-['Poppins'] font-semibold ${getTextColor()}`}
              >
                <Home size={16} className="inline mr-2" />
                HOME
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`block w-full text-left px-3 py-2 hover:text-emerald-600 hover:bg-gray-50 rounded-md font-['Poppins'] font-semibold ${getTextColor()}`}
              >
                <User size={16} className="inline mr-2" />
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`block w-full text-left px-3 py-2 hover:text-emerald-600 hover:bg-gray-50 rounded-md font-['Poppins'] font-semibold ${getTextColor()}`}
              >
                <Briefcase size={16} className="inline mr-2" />
                PROJECTS
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`block w-full text-left px-3 py-2 hover:text-emerald-600 hover:bg-gray-50 rounded-md font-['Poppins'] font-semibold ${getTextColor()}`}
              >
                <Mail size={16} className="inline mr-2" />
                CONTACT
              </button>
              <div className="flex space-x-4 px-3 py-2">
                <a
                  href="https://github.com/dulamchandu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:text-emerald-600 ${getTextColor()}`}
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:writetodulamchandu@gmail.com"
                  className={`hover:text-emerald-600 ${getTextColor()}`}
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
