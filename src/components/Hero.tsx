import React from 'react';
import { Utensils, BookOpen } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
  onOpenMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onOpenMenu }) => {
  return (
    <section className="relative min-h-[750px] h-[85vh] flex items-end overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCiHooADseT3wnofg5JDx_oH6X8M6Qb9_GVgR7-CJexC6aHF6jGAcnXn2S5kQ2VukpPUifGIvKYLiNtwYCwowKRZIFqp-SPpfgDqTtxHZRi1uX-oHlzY3BTp1a26s-StjJXIkEd6QROfgXv_EKne7hGOym1V2kjDAwGGvYz8IHIO6rHuW1vuCXixzAkeZjKxPEhkQyfeaub7YZVQ7OHs3EtZ1HL5SM8xkWUh3wnaLRswGf4RqXXFNxf')`,
        }}
      />

      {/* Hero Ambient Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient z-10" />

      {/* Content Container */}
      <div className="relative z-20 px-4 md:px-16 pb-20 max-w-5xl w-full mx-auto md:mx-0">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#353535]/80 backdrop-blur-md border border-[#56423e]/50 mb-6 text-[#ffb4a5] text-xs font-semibold tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-[#e2725b] animate-pulse" />
          Gastropub & Cocina de Autor
        </div>

        <h1 className="font-literata text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-[1.15] text-[#e5e2e1] tracking-tight">
          Tu lugar de encuentro <br />
          <span className="text-[#ffb4a5]">en Roldán</span>
        </h1>

        <p className="font-worksans text-lg sm:text-xl text-[#ddc0ba] mb-10 max-w-2xl leading-relaxed font-normal">
          Descubrí un refugio gastronómico donde la calidez del hogar se fusiona con la sofisticación de la cocina de autor. Sabores auténticos en un ambiente diseñado para desconectar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
          <button
            onClick={onOpenReservation}
            className="bg-[#ffb4a5] text-[#611205] px-8 py-4 font-worksans font-semibold rounded-xl flex items-center justify-center gap-3 shadow-xl shadow-[#ffb4a5]/10 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
          >
            <Utensils className="w-5 h-5 text-[#611205]" />
            <span>Reservar Mesa</span>
          </button>

          <button
            onClick={onOpenMenu}
            className="border-2 border-[#a48b86]/40 px-8 py-4 text-[#e5e2e1] font-worksans font-semibold rounded-xl flex items-center justify-center gap-3 hover:bg-[#393939]/30 hover:border-[#ffb4a5] active:scale-95 transition-all cursor-pointer"
          >
            <BookOpen className="w-5 h-5 text-[#ffb4a5]" />
            <span>Ver Menú Completo</span>
          </button>
        </div>
      </div>
    </section>
  );
};
