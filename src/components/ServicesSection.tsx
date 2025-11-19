import { Music4, PartyPopper, Briefcase, Users, Disc3, Radio } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const services = [
  {
    icon: PartyPopper,
    title: "Wesela",
    description: "Niezapomniana oprawa muzyczna Twojego najważniejszego dnia. Dostosowana playlista i profesjonalna obsługa.",
    features: ["Konsultacja muzyczna", "Nagłośnienie", "Oświetlenie", "Prowadzenie imprezy"]
  },
  {
    icon: Briefcase,
    title: "Eventy firmowe",
    description: "Profesjonalna muzyka na konferencje, gale i imprezy integracyjne. Dopasowana do charakteru wydarzenia.",
    features: ["Muzyka tła", "After party", "Branding dźwiękowy", "Elastyczny repertuar"]
  },
  {
    icon: Disc3,
    title: "Imprezy klubowe",
    description: "Najlepsze sety klubowe, które porwą każdy parkiet. House, techno, bass i więcej.",
    features: ["Autorskie sety", "Mixowanie na żywo", "Najnowsze hity", "Klasyka klubowa"]
  },
  {
    icon: Users,
    title: "Imprezy prywatne",
    description: "Urodziny, chrzciny, rocznice - każda okazja zasługuje na świetną muzykę.",
    features: ["Indywidualne podejście", "Dowolny gatunek", "Pełen sprzęt", "Konkurencyjne ceny"]
  },
  {
    icon: Music4,
    title: "Jubileusze",
    description: "Profesjonalna oprawa muzyczna okrągłych urodzin i rocznic. Muzyka dopasowana do pokolenia i gustu jubilata.",
    features: ["Dedykowane playlisty", "Retro hity", "Profesjonalne nagłośnienie", "Prowadzenie uroczystości"]
  },
  {
    icon: Radio,
    title: "Studniówki",
    description: "Niezapomniana muzyka na bal studniówkowy. Najlepsze hity, które porwą całą salę do zabawy do białego rana.",
    features: ["Najnowsze przeboje", "Klasyka muzyki", "Gry i konkursy", "Energetyczna atmosfera"]
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-24 bg-gradient-to-b from-black to-[var(--color-navy-dark)]">
      <div className="w-full px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center w-full" style={{ marginBottom: "40px" }}>
            <div className="flex flex-col items-center w-full" style={{ marginBottom: "20px" }}>
              <div className="flex items-center justify-center gap-2 text-[var(--color-magenta)]" style={{ marginBottom: "8px" }}>
                <Music4 className="w-5 h-5" style={{ filter: "drop-shadow(0 0 8px var(--color-magenta))" }} />
                <span 
                  className="text-sm uppercase tracking-wider text-[20px]" 
                  style={{ 
                    textShadow: "0 0 10px var(--color-magenta), 0 0 20px var(--color-magenta), 0 0 30px var(--color-magenta), 0 0 40px var(--color-magenta)",
                    color: "#fff"
                  }}
                >
                  Moje usługi
                </span>
              </div>
              <div 
                className="h-0.5 w-20 bg-gradient-to-r from-[var(--color-magenta)] to-transparent mx-auto"
                style={{ 
                  boxShadow: "0 0 10px var(--color-magenta), 0 0 20px var(--color-magenta)"
                }}
              ></div>
            </div>
            
            <h2 className="w-full" style={{ marginBottom: "12px", lineHeight: "1.3" }}>
              <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                Jak mogę pomóc?
              </span>
            </h2>
            
          </div>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div
                  className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[var(--color-magenta)]/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-magenta)]/0 to-[var(--color-navy)]/0 group-hover:from-[var(--color-magenta)]/10 group-hover:to-[var(--color-navy)]/10 rounded-2xl transition-all duration-300"></div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-[var(--color-magenta)] to-[var(--color-navy)] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" style={{ marginBottom: "14px" }}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 style={{ marginBottom: "10px" }}>{service.title}</h3>
                    <p className="text-white/60 px-4" style={{ marginBottom: "16px", lineHeight: "1.5" }}>{service.description}</p>

                    <ul className="w-full px-4" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center justify-center gap-2 text-sm text-white/70">
                          <div className="w-1.5 h-1.5 bg-[var(--color-magenta)] rounded-full flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}