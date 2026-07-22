import React from 'react';
import { MessageSquare } from 'lucide-react';

interface ReservationBannerProps {
  onOpenReservation: () => void;
}

export const ReservationBanner: React.FC<ReservationBannerProps> = ({ onOpenReservation }) => {
  return (
    <section className="py-16 px-4 md:px-16 bg-[#e2725b] text-[#5a0d02]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h2 className="font-literata text-3xl sm:text-4xl font-bold mb-3">
            ¿Tenés planes para hoy?
          </h2>
          <p className="font-worksans text-lg text-[#5a0d02]/90 max-w-xl leading-relaxed">
            Asegurá tu lugar de forma rápida por WhatsApp o desde nuestro sistema de reservas. Te esperamos para vivir la experiencia completa.
          </p>
        </div>

        <button
          onClick={onOpenReservation}
          className="whitespace-nowrap bg-[#5a0d02] text-[#ffb4a5] hover:bg-[#3e0500] px-8 py-4 rounded-full font-worksans font-semibold text-base flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl cursor-pointer"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span>Reservar por WhatsApp</span>
        </button>
      </div>
    </section>
  );
};
