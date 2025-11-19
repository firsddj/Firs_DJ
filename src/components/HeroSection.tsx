import { Music2, Play, Volume2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  const scrollToGallery = () => {
    const element = document.getElementById("gallery");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pb-32 pt-20 w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1600542552868-56ed242290e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMHR1cm50YWJsZXMlMjBjbHVifGVufDF8fHx8MTc2MzU3OTM3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="DJ Setup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[var(--color-magenta)]/20 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[var(--color-navy)]/30 rounded-full blur-3xl animate-pulse-glow"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Heading */}
          <div style={{ marginBottom: "24px" }} className="w-full">
            <h1 style={{ lineHeight: "1.3", textAlign: "center" }}>
              <span 
                className="block" 
                style={{ 
                  marginBottom: "8px",
                  textShadow: '0 0 30px rgba(236, 72, 153, 0.6), 0 0 60px rgba(236, 72, 153, 0.4), 0 0 90px rgba(236, 72, 153, 0.2)',
                  filter: 'drop-shadow(0 0 20px rgba(236, 72, 153, 0.5))'
                }}
              >
                Twoje wydarzenie,
              </span>
              <span className="block bg-gradient-to-r from-[var(--color-magenta)] via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Moja muzyka
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-xl text-white/80 max-w-2xl" style={{ marginBottom: "28px", lineHeight: "1.6", textAlign: "center" }}>
            Dostarczam niezapomniane wrażenia muzyczne dla wesel, imprez firmowych i klubowych.  
            DJ na wesele, urodziny, imprezę firmową, imprezę prywatną, jubileusz, 18stkę, 30stkę, 40stkę. Inna impreza? Skontaktuj się!!!
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4" style={{ marginBottom: "40px" }}>
            <button
              onClick={scrollToGallery}
              className="group px-8 py-4 bg-gradient-to-r from-[var(--color-magenta)] to-[var(--color-navy)] rounded-[241px] hover:scale-105 transition-transform flex items-center gap-2"
            >
              Zobacz portfolio
              <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="mailto:firsddj@gmail.com"
              className="px-8 py-4 border border-white/30 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Skontaktuj się
            </a>
          </div>

          {/* Stats - centered with 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl bg-gradient-to-r from-[var(--color-magenta)] to-blue-400 bg-clip-text text-transparent" style={{ marginBottom: "6px" }}>
                100+
              </div>
              <div className="text-white/60">Eventów</div>
            </div>
            <div className="text-center">
              <div className="text-4xl bg-gradient-to-r from-[var(--color-magenta)] to-blue-400 bg-clip-text text-transparent" style={{ marginBottom: "6px" }}>
                5+
              </div>
              <div className="text-white/60">Lat doświadczenia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl bg-gradient-to-r from-[var(--color-magenta)] to-blue-400 bg-clip-text text-transparent" style={{ marginBottom: "6px" }}>
                100%
              </div>
              <div className="text-white/60">Zadowolonych klientów</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}