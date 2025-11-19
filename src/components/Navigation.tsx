import { Music, Menu, X } from "lucide-react";
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3" style={{ paddingLeft: '32px' }}>
            <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-magenta)] to-[var(--color-navy)] rounded-lg flex items-center justify-center">
              <Music className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl bg-gradient-to-r from-[var(--color-magenta)] to-blue-400 bg-clip-text text-transparent">
              Firs_DJ
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
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
          <div className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-white/80 hover:text-white transition-colors"
            >
              Start
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-white/80 hover:text-white transition-colors"
            >
              Usługi
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-white/80 hover:text-white transition-colors"
            >
              O mnie
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-left text-white/80 hover:text-white transition-colors"
            >
              Galeria
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}