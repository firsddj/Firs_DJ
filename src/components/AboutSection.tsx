import { Award, Heart, Zap, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScrollReveal } from "./ScrollReveal";

export function AboutSection() {
  return (
    <section id="about" className="w-full py-24 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--color-magenta)]/10 rounded-full blur-3xl"></div>

      <div className="w-full px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-magenta)] to-[var(--color-navy)] rounded-3xl opacity-20 blur-2xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1647160494152-4c8eb24a844b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMG1peGluZyUyMG11c2ljfGVufDF8fHx8MTc2MzQ3MjM0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Profesjonalny DJ mixujący muzykę na weselu - DJ Dolny Śląsk"
                className="relative z-10 w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="order-1 lg:order-2">
              <div style={{ marginBottom: "20px" }}>
                <div className="flex items-center gap-2 text-[var(--color-magenta)]" style={{ marginBottom: "8px" }}>
                  <Star className="w-5 h-5" style={{ filter: "drop-shadow(0 0 8px var(--color-magenta))" }} />
                  <span 
                    className="text-sm uppercase tracking-wider text-[24px]"
                    style={{ 
                      textShadow: "0 0 10px var(--color-magenta), 0 0 20px var(--color-magenta), 0 0 30px var(--color-magenta), 0 0 40px var(--color-magenta)",
                      color: "#fff"
                    }}
                  >
                    O mnie
                  </span>
                </div>
                <div 
                  className="h-0.5 w-16 bg-gradient-to-r from-[var(--color-magenta)] to-transparent"
                  style={{ 
                    boxShadow: "0 0 10px var(--color-magenta), 0 0 20px var(--color-magenta)"
                  }}
                ></div>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <h2 style={{ lineHeight: "1.3" }}>
                  <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent block" style={{ marginBottom: "8px" }}>
                    Pasja do muzyki,
                  </span>
                  <span className="bg-gradient-to-r from-[var(--color-magenta)] to-blue-400 bg-clip-text text-transparent block">
                    Profesjonalizm w działaniu
                  </span>
                </h2>
              </div>

              <p className="text-lg text-white/70" style={{ marginBottom: "12px", lineHeight: "1.6" }}>
                Witam! Jestem profesjonalnym DJ-em z ponad 5-letnim doświadczeniem w branży rozrywkowej. 
                Moja przygoda z muzyką rozpoczęła się w małym pokoju, a dziś gram na imprezach 
                w całym kraju.
              </p>

              <p className="text-lg text-white/70" style={{ marginBottom: "20px", lineHeight: "1.6" }}>
                Wierzę, że muzyka ma moc tworzenia niezapomnianych wspomnień. Dlatego każdy event traktuję 
                indywidualnie, dbając o każdy detal - od doboru repertuaru po atmosferę na parkiecie.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-magenta)] to-[var(--color-navy)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white" style={{ marginBottom: "3px" }}>Certyfikowany</div>
                    <div className="text-sm text-white/60">Ukończone kursy</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-magenta)] to-[var(--color-navy)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white" style={{ marginBottom: "3px" }}>Najnowszy sprzęt</div>
                    <div className="text-sm text-white/60">Pioneer, Allen & Heath</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-magenta)] to-[var(--color-navy)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white" style={{ marginBottom: "3px" }}>Pasja</div>
                    <div className="text-sm text-white/60">Muzyka to moje życie</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-magenta)] to-[var(--color-navy)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white" style={{ marginBottom: "3px" }}>Doświadczenie</div>
                    <div className="text-sm text-white/60">100+ eventów</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}