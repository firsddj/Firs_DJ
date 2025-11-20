import { Music, Menu, X, Mail } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-white/10">
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3" style={{ paddingLeft: '32px' }}>
            <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-magenta)] to-[var(--color-navy)] rounded-lg flex items-center justify-center">
              <Music className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl bg-gradient-to-r from-[var(--color-magenta)] to-blue-400 bg-clip-text text-transparent">
              firs_dj
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8" style={{ paddingRight: '32px' }}>
            <button
              onClick={() => scrollToSection("home")}
              className="text-white/80 hover:text-white transition-colors"
            >
              Start
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-white/80 hover:text-white transition-colors"
            >
              Usługi
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white/80 hover:text-white transition-colors"
            >
              O mnie
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-white/80 hover:text-white transition-colors"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white/80 hover:text-white transition-colors"
            >
              Kontakt
            </button>
            <a
              href="mailto:firsddj@gmail.com"
              className="w-10 h-10 bg-gradient-to-br from-[var(--color-magenta)] to-[var(--color-navy)] rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-2 border-t border-white/10">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-center text-white/90 hover:text-white hover:bg-white/5 transition-colors py-4 px-6 border-b border-white/10"
            >
              Start
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-center text-white/90 hover:text-white hover:bg-white/5 transition-colors py-4 px-6 border-b border-white/10"
            >
              Usługi
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-center text-white/90 hover:text-white hover:bg-white/5 transition-colors py-4 px-6 border-b border-white/10"
            >
              O mnie
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-center text-white/90 hover:text-white hover:bg-white/5 transition-colors py-4 px-6 border-b border-white/10"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-center text-white/90 hover:text-white hover:bg-white/5 transition-colors py-4 px-6"
            >
              Kontakt
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}