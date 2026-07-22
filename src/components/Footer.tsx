import React from 'react';
import { Camera, QrCode } from 'lucide-react';

interface FooterProps {
  onOpenMenu: () => void;
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenMenu, onOpenReservation }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0e0e0e] border-t border-[#56423e]/30">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 px-4 md:px-16 max-w-7xl mx-auto">
        {/* Brand Column */}
        <div>
          <span className="font-literata text-2xl font-bold text-[#ffb4a5] mb-4 block">
            Refugio
          </span>
          <p className="font-worksans text-sm text-[#ddc0ba] opacity-90 max-w-xs leading-relaxed">
            Un espacio pensado para el disfrute de los sentidos. Gastronomía honesta y coctelería de autor.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-3">
          <p className="font-worksans text-sm font-semibold text-[#e5e2e1] mb-2 uppercase tracking-wider text-xs">
            Navegación
          </p>
          <button
            onClick={() => scrollTo('ubicacion')}
            className="text-left font-worksans text-sm text-[#ddc0ba] hover:text-[#e5e2e1] hover:underline decoration-[#ffb4a5] underline-offset-4 transition-all w-fit cursor-pointer"
          >
            Ubicación
          </button>
          <button
            onClick={onOpenMenu}
            className="text-left font-worksans text-sm text-[#ddc0ba] hover:text-[#e5e2e1] hover:underline decoration-[#ffb4a5] underline-offset-4 transition-all w-fit cursor-pointer"
          >
            Menú Digital
          </button>
          <button
            onClick={() => scrollTo('experiencia')}
            className="text-left font-worksans text-sm text-[#ddc0ba] hover:text-[#e5e2e1] hover:underline decoration-[#ffb4a5] underline-offset-4 transition-all w-fit cursor-pointer"
          >
            Experiencia
          </button>
          <button
            onClick={onOpenReservation}
            className="text-left font-worksans text-sm text-[#ddc0ba] hover:text-[#e5e2e1] hover:underline decoration-[#ffb4a5] underline-offset-4 transition-all w-fit cursor-pointer"
          >
            Reservar Mesa
          </button>
        </div>

        {/* Socials & Copyright Column */}
        <div>
          <p className="font-worksans text-sm font-semibold text-[#e5e2e1] mb-4 uppercase tracking-wider text-xs">
            Seguinos
          </p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Refugio"
              className="w-10 h-10 rounded-full border border-[#56423e]/40 flex items-center justify-center text-[#ddc0ba] hover:border-[#ffb4a5] hover:text-[#ffb4a5] transition-all bg-[#1c1b1b]"
            >
              <Camera className="w-5 h-5" />
            </a>
            <a
              href="#menu"
              onClick={(e) => {
                e.preventDefault();
                onOpenMenu();
              }}
              aria-label="Código QR Menú Digital"
              className="w-10 h-10 rounded-full border border-[#56423e]/40 flex items-center justify-center text-[#ddc0ba] hover:border-[#ffb4a5] hover:text-[#ffb4a5] transition-all bg-[#1c1b1b]"
            >
              <QrCode className="w-5 h-5" />
            </a>
          </div>

          <p className="mt-8 font-worksans text-xs text-[#a48b86] opacity-80">
            © {new Date().getFullYear()} Refugio Gastropub - Roldán, Santa Fe. Crafted for comfort.
          </p>
        </div>
      </div>
    </footer>
  );
};
