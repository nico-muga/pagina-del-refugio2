import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface BentoItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  gridClass: string;
}

const BENTO_ITEMS: BentoItem[] = [
  {
    id: 'burgers',
    title: 'Hamburguesas de Autor',
    subtitle: 'Blends de carnes seleccionadas',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqrLG8Kqg7eH4oAxwVdSyMS09ZVmhBJ9ZAoq-Xdd1ZgUcyBAekvsHu4Pzmsgf8OsEDPy-ag44Hbaii8bBBOdxiuZ6u_rbrJdsH_mUEdQRQ4PfFf2HbMfZxqyvlVMbwNWB8aVet9BNkov10cowiGcTOii7DXZOrs8bX3ELzJU6CnMYk6npKlUWWEO7bBL_fPj9cdlQVKvZ5_VHl2xMCcHqXWhH63F3y3z_gPwYToI71WLIcChkMpvqQ',
    description: 'Nuestras hamburguesas se elaboran a diario con un blend especial de cortes vacunos madurados, pan brioche horneado en el día y quesos ahumados artesanales.',
    gridClass: 'md:col-span-2 md:row-span-2 min-h-[360px] md:min-h-[520px]',
  },
  {
    id: 'cocteleria',
    title: 'Coctelería de Estación',
    subtitle: 'Tragos ahumados & macerados caseros',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYcbIiUJRzLD4C2fV0whikSorRfkNSt9u_-4xhlHArDhtGofDi-eQAk2o6VoJmNK5nO6YoV1w0qojbAmBQ_c_cPUsW0GqtFO-h26eKCjAaIS8jkJeTunIh0rDCDPi3ODoGXSwi2kspmwZtyOMoTcHW6xFCSF4IqnuMCVCMMtOr7QslWUWwQjKqTx1wMKvwssCMgg8gjBRfWX2cMaNDk1stnGhpjmBlrvquJq0L1vcQkJwu-HIuPedw',
    description: 'Una barra de autor ideada para sorprender. Infusiones propias, almíbares especiados y destilados de máxima pureza servidos a temperatura perfecta.',
    gridClass: 'md:col-span-2 min-h-[220px] md:min-h-[250px]',
  },
  {
    id: 'ambiente',
    title: 'Ambiente & Encuentro',
    subtitle: 'Un espacio íntimo y acogedor',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZILNR1KhhO87vcnksYIi1Rzk7VTEjqAn-59ROp2qgynj59lyMeyPXdgDVWNrQr2Uvh6DPuxV0r9yXbpmr1SLmeOmjWtRNatOwmOltMXWFT_9yp40WkddwwBxQ9L4p3Gnx70NeMkpiLi48wDAeLRZhd045JJcfWZwYH3cuOEHct7xxNHNGMQWOX9C6umEcFst9-jEucv9PADjf1qQTxUQQ6vJDipImeH0avanHfUWnGd-3fOAdNBOc',
    description: 'Luces cálidas, maderas nobles y sillones confortables pensados para disfrutar sin prisa de charlas e historias inolvidables.',
    gridClass: 'min-h-[220px] md:min-h-[250px]',
  },
  {
    id: 'horno',
    title: 'Horno de Barro',
    subtitle: 'Pizzas de masa madre & provoletas',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFZJZLN4Kp1jlWkeQi0mbF0Q21vHXt_m3knzmZiUAw4KDpj7kPTXacpJp2V7pB9NrZ7eJbnW16sc6HPMKBdaKAuVdggNZMFTFaUuNcXqavlXZg60HRgEpRMZMcIXWsLfWiRsnlqnIVDbr8k9EUbspN0332As4M20Gn7UdilB-w_2qkKci0YhyjN6z6TdNdMOaVTCzEs112PRKYJH-3MwksqkvRlBBalfeQtmkIShgIn7ZEiRJeSULP',
    description: 'Fuego real a leña de quebracho que otorga ese perfume ahumado característico a nuestros platos horneados.',
    gridClass: 'min-h-[220px] md:min-h-[250px]',
  },
];

export const BentoGrid: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<BentoItem | null>(null);

  return (
    <section className="py-20 px-4 md:px-16 max-w-7xl mx-auto" id="experiencia">
      <div className="mb-12">
        <span className="text-[#ffb4a5] font-worksans text-xs font-semibold tracking-[0.2em] uppercase">
          MOMENTOS REFUGIO
        </span>
        <h2 className="font-literata text-3xl md:text-4xl font-semibold text-[#e5e2e1] mt-2">
          Vibras que inspiran
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {BENTO_ITEMS.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className={`relative group overflow-hidden rounded-2xl bg-[#20201f] beveled-card cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#ffb4a5]/10 ${item.gridClass}`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url('${item.image}')` }}
            />

            {/* Permanent Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Hover Zoom Icon Badge */}
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="w-4 h-4 text-[#ffb4a5]" />
            </div>

            {/* Text Overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
              <p className="font-literata text-xl md:text-2xl font-semibold text-white drop-shadow-md">
                {item.title}
              </p>
              <p className="font-worksans text-sm text-[#ddc0ba] mt-1 opacity-90 group-hover:opacity-100 transition-opacity">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-[#1c1b1b] border border-[#56423e] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-[#e5e2e1] hover:text-[#ffb4a5] flex items-center justify-center backdrop-blur-md border border-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-64 sm:h-80 relative bg-cover bg-center" style={{ backgroundImage: `url('${selectedItem.image}')` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1b] via-transparent to-black/30" />
            </div>

            <div className="p-6 sm:p-8">
              <span className="text-[#ffb4a5] font-worksans text-xs font-semibold uppercase tracking-widest">
                {selectedItem.subtitle}
              </span>
              <h3 className="font-literata text-2xl sm:text-3xl font-semibold text-[#e5e2e1] mt-1 mb-4">
                {selectedItem.title}
              </h3>
              <p className="font-worksans text-[#ddc0ba] leading-relaxed text-base">
                {selectedItem.description}
              </p>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="bg-[#353535] text-[#e5e2e1] hover:bg-[#393939] px-6 py-2.5 rounded-xl font-worksans text-sm font-medium transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
