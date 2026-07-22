import React from 'react';
import { BookOpen } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';

interface FavoritesSectionProps {
  onOpenMenu: () => void;
}

export const FavoritesSection: React.FC<FavoritesSectionProps> = ({ onOpenMenu }) => {
  const favorites = MENU_ITEMS.filter((item) => item.isFavorite);

  return (
    <section className="bg-[#1c1b1b] py-20 px-4 md:px-16 overflow-hidden relative" id="menu">
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Menu Favorites List */}
        <div>
          <div className="inline-block text-[#ffb4a5] font-worksans text-xs font-semibold uppercase tracking-widest mb-2">
            GASTRONOMÍA & COCTELERÍA
          </div>
          <h2 className="font-literata text-3xl sm:text-4xl font-semibold text-[#e5e2e1] mb-8">
            Nuestros favoritos
          </h2>

          <div className="space-y-8 mb-10">
            {favorites.map((item) => (
              <div key={item.id} className="menu-divider pb-6">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-literata text-xl font-semibold text-[#f0bd8b]">
                    {item.name}
                  </h3>
                  <span className="font-worksans font-semibold text-[#ffb4a5] text-base">
                    ${item.price.toLocaleString('es-AR')}
                  </span>
                </div>
                <p className="font-worksans text-[#ddc0ba] text-base italic leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={onOpenMenu}
            className="bg-[#ffb4a5] text-[#611205] px-8 py-4 rounded-xl font-worksans font-semibold text-base flex items-center gap-3 hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#ffb4a5]/10 cursor-pointer"
          >
            <BookOpen className="w-5 h-5 text-[#611205]" />
            <span>Ver Menú Completo</span>
          </button>
        </div>

        {/* Menu Card Physical Photo Presentation */}
        <div className="relative flex justify-center">
          <div className="beveled-card rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 max-w-lg w-full">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHua_wxlsbvn8nxbLaBFNbr-11G7scLR6b9-2BZcEfEIRlnVX7lmeip5W_1UuXtk18p_26UlRUm7XU88jf1g57aJU0koqOZeKDg4Hmtu89yPtgh0Fljscbv6Wkk-fhnS5RF2AbH0NJ0-sGf4lN4w4Y5d-mkcHgCGkZPi6wU6gzfCVLDbZWsxkEiaNCStUdvwJjQ6QR9S1ajPwO_dDJvo8Gg2kR7bXb3K6iF3-beMtA7nNSkiD26bMn"
              alt="Menú impreso Refugio Gastropub"
              className="w-full h-[480px] sm:h-[540px] object-cover"
            />
          </div>

          {/* Glowing ambient background circle */}
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#e2725b]/10 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
