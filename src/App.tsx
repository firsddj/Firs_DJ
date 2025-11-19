import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { GallerySection } from "./components/GallerySection";
import { Footer } from "./components/Footer";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Set page title and meta tags for SEO
    document.title = "Profesjonalny DJ na Wesela i Imprezy | DJ Wrocław - Dolny Śląsk";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Profesjonalny DJ na imprezy w województwie dolnośląskim – wesela, eventy firmowe, urodziny. Gwarancja świetnej muzyki, prowadzenia zabawy i niezapomnianej atmosfery.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Profesjonalny DJ na imprezy w województwie dolnośląskim – wesela, eventy firmowe, urodziny. Gwarancja świetnej muzyki, prowadzenia zabawy i niezapomnianej atmosfery.";
      document.head.appendChild(meta);
    }

    // Set keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", "dj wrocław, dj dolny śląsk, dj na wesele, dj na imprezę firmową, dj na urodziny, dj na studniówkę, oprawa muzyczna wesela, dj dolnośląskie, profesjonalny dj, dj eventy");
    } else {
      const meta = document.createElement('meta');
      meta.name = "keywords";
      meta.content = "dj wrocław, dj dolny śląsk, dj na wesele, dj na imprezę firmową, dj na urodziny, dj na studniówkę, oprawa muzyczna wesela, dj dolnośląskie, profesjonalny dj, dj eventy";
      document.head.appendChild(meta);
    }

    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = "Profesjonalny DJ na Wesela i Imprezy | DJ Wrocław - Dolny Śląsk";
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = "Profesjonalny DJ na imprezy w województwie dolnośląskim – wesela, eventy firmowe, urodziny. Gwarancja świetnej muzyki, prowadzenia zabawy i niezapomnianej atmosfery.";
      document.head.appendChild(meta);
    }

    const ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:type');
      meta.content = "website";
      document.head.appendChild(meta);
    }

    // Structured Data (JSON-LD) for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "DJ Profesjonalny - Dolny Śląsk",
      "image": "https://images.unsplash.com/photo-1647160494152-4c8eb24a844b",
      "description": "Profesjonalny DJ na imprezy w województwie dolnośląskim – wesela, eventy firmowe, urodziny. Gwarancja świetnej muzyki, prowadzenia zabawy i niezapomnianej atmosfery.",
      "areaServed": {
        "@type": "State",
        "name": "Dolnośląskie"
      },
      "priceRange": "$$",
      "serviceType": ["Wesela", "Eventy firmowe", "Imprezy prywatne", "Studniówki", "Jubileusze", "Imprezy klubowe"],
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Dolnośląskie",
        "addressCountry": "PL"
      }
    };

    const script = document.createElement('script');
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <Footer />
    </div>
  );
}