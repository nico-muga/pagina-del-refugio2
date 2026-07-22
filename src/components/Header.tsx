import React, { useState } from 'react';
import { Menu, X, CalendarCheck, UtensilsCrossed, MapPin, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenReservation: () => void;
  onOpenMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenReservation, onOpenMenu }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#131313]/85 backdrop-blur-xl border-b border-[#56423e]/30 shadow-md h-20 flex justify-between items-center px-4 md:px-16 transition-all duration-300">
      {/* Brand Logo */}
      <a href="#" className="flex items-center gap-2 group">
        <span className="material-symbols-outlined text-[#ffb4a5] text-2xl group-hover:scale-110 transition-transform">
          shelter
        </span>
        <span className="font-literata text-2xl font-bold tracking-tight text-[#ffb4a5]">
          Refugio
        </span>
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <button
          onClick={() => scrollToSection('experiencia')}
          className="font-worksans text-sm font-semibold text-[#ddc0ba] hover:text-[#ffb4a5] transition-colors cursor-pointer"
        >
          Experiencia
        </button>
        <button
          onClick={() => {
            scrollToSection('menu');
          }}
          className="font-worksans text-sm font-semibold text-[#ddc0ba] hover:text-[#ffb4a5] transition-colors cursor-pointer"
        >
          Menú
        </button>
        <button
          onClick={() => scrollToSection('ubicacion')}
          className="font-worksans text-sm font-semibold text-[#ddc0ba] hover:text-[#ffb4a5] transition-colors cursor-pointer"
        >
          Ubicación
        </button>
        <button
          onClick={() => scrollToSection('resenas')}
          className="font-worksans text-sm font-semibold text-[#ddc0ba] hover:text-[#ffb4a5] transition-colors cursor-pointer"
        >
          Reseñas
        </button>
      </nav>

      {/* Header CTA Button */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenReservation}
          className="bg-[#e2725b] text-[#5a0d02] font-worksans text-sm font-semibold px-5 py-2.5 rounded-full hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#e2725b]/10 flex items-center gap-2 cursor-pointer"
        >
          <CalendarCheck className="w-4 h-4" />
          <span>Reservar</span>
        </button>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#e5e2e1] hover:text-[#ffb4a5] focus:outline-none"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bg-[#131313]/95 backdrop-blur-2xl border-b border-[#56423e]/40 p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <button
            onClick={() => scrollToSection('experiencia')}
            className="flex items-center gap-3 py-3 text-left font-worksans text-base font-medium text-[#e5e2e1] border-b border-[#2a2a2a]"
          >
            <Sparkles className="w-5 h-5 text-[#ffb4a5]" />
            Experiencia
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenMenu();
            }}
            className="flex items-center gap-3 py-3 text-left font-worksans text-base font-medium text-[#e5e2e1] border-b border-[#2a2a2a]"
          >
            <UtensilsCrossed className="w-5 h-5 text-[#ffb4a5]" />
            Menú Digital Completo
          </button>
          <button
            onClick={() => scrollToSection('ubicacion')}
            className="flex items-center gap-3 py-3 text-left font-worksans text-base font-medium text-[#e5e2e1] border-b border-[#2a2a2a]"
          >
            <MapPin className="w-5 h-5 text-[#ffb4a5]" />
            Ubicación y Horarios
          </button>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenReservation();
            }}
            className="mt-2 w-full bg-[#ffb4a5] text-[#611205] font-worksans font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
          >
            <CalendarCheck className="w-5 h-5" />
            Reservar Mesa
          </button>
        </div>
      )}
    </header>
  );
};
