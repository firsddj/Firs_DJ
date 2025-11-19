import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Camera } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import corporateEventImage from "figma:asset/954ef6512f7cde4d5cf9368bf687d7630febbfa9.png";
import festivalCrowdImage from "figma:asset/2abbc85659af46cb55840a3994aeda5ccfb3499b.png";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1657208431551-cbf415b8ef26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodGNsdWIlMjBwYXJ0eSUyMGxpZ2h0c3xlbnwxfHx8fDE3NjM1NTY0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Studniówka",
    alt: "Impreza studniówkowa z DJ - kolorowe oświetlenie i parkiet taneczny"
  },
  {
    src: "https://images.unsplash.com/photo-1714972383570-44ddc9738355?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGFydHklMjBkYW5jZXxlbnwxfHx8fDE3NjM1NzkzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Wesele",
    alt: "Oprawa muzyczna wesela - DJ na ślubie w województwie dolnośląskim"
  },
  {
    src: corporateEventImage,
    title: "Impreza firmowa",
    alt: "DJ na event firmowy - profesjonalna oprawa muzyczna konferencji i gali"
  },
  {
    src: festivalCrowdImage,
    title: "Urodziny",
    alt: "DJ na urodziny - tłum bawiących się ludzi"
  },
  {
    src: "https://images.unsplash.com/photo-1600542552868-56ed242290e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMHR1cm50YWJsZXMlMjBjbHVifGVufDF8fHx8MTc2MzU3OTM3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Profesjonalny osprzęt DJski",
    alt: "Profesjonalny sprzęt DJ - Pioneer, mikser"
  },
  {
    src: "https://images.unsplash.com/photo-1647160494152-4c8eb24a844b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMG1peGluZyUyMG11c2ljfGVufDF8fHx8MTc2MzQ3MjM0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Live Mixing",
    alt: "DJ podczas live mixu - profesjonalne mixowanie muzyki na evencie"
  }
];

export function GallerySection() {
  return (
    <section id="gallery" className="w-full py-24 bg-gradient-to-b from-[var(--color-navy-dark)] to-black">
      <div className="w-full px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
        <ScrollReveal>
          <div className="text-center" style={{ marginBottom: "40px" }}>
            <div className="flex flex-col items-center" style={{ marginBottom: "20px" }}>
              <div className="flex items-center gap-2 text-[var(--color-magenta)]" style={{ marginBottom: "8px" }}>
                <Camera className="w-5 h-5" style={{ filter: "drop-shadow(0 0 8px var(--color-magenta))" }} />
                <span 
                  className="text-sm uppercase tracking-wider text-[24px]"
                  style={{ 
                    textShadow: "0 0 10px var(--color-magenta), 0 0 20px var(--color-magenta), 0 0 30px var(--color-magenta), 0 0 40px var(--color-magenta)",
                    color: "#fff"
                  }}
                >
                  Portfolio
                </span>
              </div>
              <div 
                className="h-0.5 w-16 bg-gradient-to-r from-[var(--color-magenta)] to-transparent"
                style={{ 
                  boxShadow: "0 0 10px var(--color-magenta), 0 0 20px var(--color-magenta)"
                }}
              ></div>
            </div>
            <h2 style={{ marginBottom: "12px", lineHeight: "1.3" }}>
              <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                Galeria wydarzeń
              </span>
            </h2>
            
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div
                className="group relative aspect-square overflow-hidden rounded-2xl"
              >
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-white">{image.title}</h4>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--color-magenta)]/50 rounded-2xl transition-colors duration-300"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}