import { Instagram, Facebook } from "lucide-react";

export function FloatingButton() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
      {/* Instagram Button */}
      <a
        href="https://www.instagram.com/firs_dj?igsh=MTFwejVtaHNzNjZtYw=="
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 bg-gradient-to-br from-[var(--color-magenta)] to-[var(--color-navy)] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
        aria-label="Instagram"
      >
        <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
      </a>
      
      {/* Facebook Button */}
      <a
        href="https://www.facebook.com/share/1GtFGQTFf4/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 bg-gradient-to-br from-[var(--color-magenta)] to-[var(--color-navy)] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
        aria-label="Facebook"
      >
        <Facebook className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
}