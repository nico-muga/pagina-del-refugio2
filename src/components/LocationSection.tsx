import React from 'react';
import { MapPin, Clock, Phone, Navigation, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const googleMapsUrl = 'https://maps.google.com/?q=Roldan+Santa+Fe+Argentina';
  const phoneNumber = '+543411234567';

  return (
    <section className="py-20 px-4 md:px-16 bg-[#131313]" id="ubicacion">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Map Dark Styled Container */}
        <div className="relative order-2 md:order-1 h-[420px] rounded-2xl overflow-hidden shadow-2xl beveled-card border border-[#56423e]/30 group">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC89eW0i_avtk2DSo7xZVUdfx-uK-G0xW1RqCFVd0c3LMDGZ0J0vwcOWRGQFZn5npCBZzdiK8KZsQ_kYhCDacFRmY2FeDBN4ECIqysOEhUTTvm6iSACAOguc6jbSt9feVEUqDoj8mRihGaqYR4TL3y0_fjyr8_ggkIy3MXzOxBKQ7oQXC__Z7xM-BHtQRt1xgcedRg0Nes83DMPBrL6BLeTGWWIY2c0iK4ICBxb-u9eeg59F3JAeuKu"
            alt="Mapa de ubicación Refugio Gastropub Roldán"
            className="w-full h-full object-cover grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#20201f]/90 text-[#ffb4a5] hover:bg-[#ffb4a5] hover:text-[#611205] px-5 py-2.5 rounded-xl font-worksans text-xs font-semibold uppercase tracking-wider flex items-center gap-2 backdrop-blur-md border border-white/10 transition-all shadow-lg"
            >
              <Navigation className="w-4 h-4" />
              <span>Abrir en Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </div>

        {/* Location Info */}
        <div className="order-1 md:order-2 flex flex-col justify-center">
          <span className="text-[#ffb4a5] font-worksans text-xs font-semibold uppercase tracking-widest mb-2">
            PUNTO DE ENCUENTRO
          </span>
          <h2 className="font-literata text-3xl sm:text-4xl font-semibold text-[#e5e2e1] mb-8">
            Encontranos
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#353535]/60 flex items-center justify-center shrink-0 border border-[#56423e]/40">
                <MapPin className="w-5 h-5 text-[#ffb4a5]" />
              </div>
              <div>
                <p className="font-worksans text-sm font-semibold text-[#e5e2e1]">Dirección</p>
                <p className="font-worksans text-base text-[#ddc0ba] mt-0.5">
                  Calle Principal 123, Roldán, Santa Fe
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#353535]/60 flex items-center justify-center shrink-0 border border-[#56423e]/40">
                <Clock className="w-5 h-5 text-[#ffb4a5]" />
              </div>
              <div>
                <p className="font-worksans text-sm font-semibold text-[#e5e2e1]">Horarios de Atención</p>
                <ul className="font-worksans text-base text-[#ddc0ba] mt-1 space-y-1">
                  <li><span className="font-medium text-[#e5e2e1]">Mar - Jue:</span> 19:00 a 00:00</li>
                  <li><span className="font-medium text-[#e5e2e1]">Vie - Sáb:</span> 19:00 a 02:00</li>
                  <li><span className="font-medium text-[#e5e2e1]">Dom:</span> 12:00 a 16:00</li>
                  <li className="text-xs text-[#a48b86] italic pt-1">Lunes cerrado por descanso del equipo.</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#353535]/60 flex items-center justify-center shrink-0 border border-[#56423e]/40">
                <Phone className="w-5 h-5 text-[#ffb4a5]" />
              </div>
              <div>
                <p className="font-worksans text-sm font-semibold text-[#e5e2e1]">Contacto Directo</p>
                <a
                  href={`tel:${phoneNumber}`}
                  className="font-worksans text-base text-[#ffb4a5] hover:underline mt-0.5 inline-block font-medium"
                >
                  +54 341 1234567
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
