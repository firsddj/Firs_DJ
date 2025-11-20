import { Music, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="w-full bg-black border-t border-white/10 py-16">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10" style={{ marginBottom: "20px" }}>
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2" style={{ marginBottom: "10px" }}>
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-magenta)] to-[var(--color-navy)] rounded-lg flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl bg-gradient-to-r from-[var(--color-magenta)] to-blue-400 bg-clip-text text-transparent">
                Firs_DJ
              </span>
            </div>
            <p className="text-white/60 text-sm" style={{ lineHeight: "1.5" }}>
              Profesjonalna obsługa muzyczna eventów. Twoja impreza, Moja muzyka.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ marginBottom: "14px" }}>Szybkie linki</h4>
            <ul className="text-sm" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <li>
                <a href="#services" className="text-white/60 hover:text-[var(--color-magenta)] transition-colors">
                  Usługi
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/60 hover:text-[var(--color-magenta)] transition-colors">
                  O mnie
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/60 hover:text-[var(--color-magenta)] transition-colors">
                  Galeria
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ marginBottom: "14px" }}>Kontakt</h4>
            <ul className="text-sm text-white/60" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <li>Wrocław, Polska</li>
              <li>
                
              </li>
              <li>
                <a href="mailto:firsddj@gmail.com" className="hover:text-[var(--color-magenta)] transition-colors">
                  firsddj@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className="text-sm text-white/60">
            © 2025 Firs_DJ. Wszystkie prawa zastrzeżone.
          </p>
          <p className="text-sm text-white/60 flex items-center gap-1.5">
            Made with <Heart className="w-4 h-4 text-[var(--color-magenta)] fill-[var(--color-magenta)]" /> for music lovers
          </p>
        </div>
      </div>
    </footer>
  );
}