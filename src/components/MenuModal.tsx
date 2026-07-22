import React, { useState } from 'react';
import { X, Search, Utensils, Sparkles, ShoppingBag, Plus, Minus, Trash2, Check } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';
import { CategoryId, MenuItem, CartItem } from '../types';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterVeggie, setFilterVeggie] = useState(false);
  const [filterGlutenFree, setFilterGlutenFree] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  if (!isOpen) return null;

  const categories: { id: CategoryId; label: string }[] = [
    { id: 'all', label: 'Todo el Menú' },
    { id: 'burgers', label: 'Hamburguesas' },
    { id: 'principales', label: 'Platos Principales' },
    { id: 'cocteleria', label: 'Coctelería' },
    { id: 'entradas', label: 'Entradas' },
    { id: 'postres', label: 'Postres' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    if (activeCategory !== 'all' && item.category !== activeCategory) return false;
    if (filterVeggie && !item.isVegetarian) return false;
    if (filterGlutenFree && !item.isGlutenFree) return false;
    if (
      searchQuery.trim() &&
      !item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !item.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.item.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => {
          if (i.item.id === itemId) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const totalCartPrice = cart.reduce((acc, c) => acc + c.item.price * c.quantity, 0);
  const totalCartCount = cart.reduce((acc, c) => acc + c.quantity, 0);

  const handleSendOrderWhatsApp = () => {
    if (cart.length === 0) return;
    const itemsList = cart
      .map((c) => `• ${c.quantity}x ${c.item.name} ($${(c.item.price * c.quantity).toLocaleString('es-AR')})`)
      .join('\n');

    const msg = `Hola Refugio! Quisiera hacer el siguiente pedido:\n\n${itemsList}\n\n*Total Estimado:* $${totalCartPrice.toLocaleString(
      'es-AR'
    )}`;

    window.open(`https://wa.me/543411234567?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-2xl flex flex-col justify-between overflow-hidden animate-in fade-in duration-200">
      {/* Top Header */}
      <div className="bg-[#1c1b1b] border-b border-[#56423e]/40 p-4 md:px-12 flex justify-between items-center shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#ffb4a5]/10 text-[#ffb4a5] flex items-center justify-center">
            <Utensils className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-literata text-xl md:text-2xl font-bold text-[#e5e2e1]">
              Menú Digital Refugio
            </h2>
            <p className="font-worksans text-xs text-[#ddc0ba]">Gastronomía & Coctelería de Autor</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-[#a48b86] hover:text-[#e5e2e1] hover:bg-[#353535] rounded-full transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[#131313] border-b border-[#56423e]/20 p-4 md:px-12 shrink-0 space-y-3">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#a48b86]" />
            <input
              type="text"
              placeholder="Buscar plato, ingrediente o trago..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#20201f] border border-[#56423e]/60 rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#e5e2e1] placeholder-[#a48b86] focus:outline-none focus:border-[#ffb4a5]"
            />
          </div>

          {/* Dietary Filter Toggles */}
          <div className="flex gap-2">
            <button
              onClick={() => setFilterVeggie(!filterVeggie)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                filterVeggie
                  ? 'bg-[#ffb4a5]/20 text-[#ffb4a5] border-[#ffb4a5]'
                  : 'bg-[#20201f] text-[#a48b86] border-[#56423e]/40'
              }`}
            >
              🌱 Vegetariano
            </button>
            <button
              onClick={() => setFilterGlutenFree(!filterGlutenFree)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                filterGlutenFree
                  ? 'bg-[#ffb4a5]/20 text-[#ffb4a5] border-[#ffb4a5]'
                  : 'bg-[#20201f] text-[#a48b86] border-[#56423e]/40'
              }`}
            >
              🌾 Sin TACC
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pt-1 pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#ffb4a5] text-[#611205] shadow-md shadow-[#ffb4a5]/10'
                  : 'bg-[#2a2a2a] text-[#ddc0ba] hover:bg-[#353535] hover:text-[#e5e2e1]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid Items */}
      <div className="flex-1 overflow-y-auto p-4 md:p-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#1c1b1b] beveled-card border border-[#56423e]/30 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#ffb4a5]/40 transition-all duration-300 group"
            >
              {/* Image & Badges */}
              {item.image && (
                <div className="h-48 relative overflow-hidden bg-[#20201f]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {item.isChefRecommendation && (
                      <span className="bg-[#e2725b] text-[#5a0d02] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                        ★ Chef
                      </span>
                    )}
                    {item.isVegetarian && (
                      <span className="bg-emerald-900/90 text-emerald-200 text-[10px] font-bold px-2 py-1 rounded-full backdrop-blur-md">
                        Veggie
                      </span>
                    )}
                    {item.isGlutenFree && (
                      <span className="bg-amber-900/90 text-amber-200 text-[10px] font-bold px-2 py-1 rounded-full backdrop-blur-md">
                        Sin TACC
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h3 className="font-literata text-lg font-semibold text-[#f0bd8b]">
                      {item.name}
                    </h3>
                    <span className="font-worksans font-bold text-[#ffb4a5] text-base shrink-0">
                      ${item.price.toLocaleString('es-AR')}
                    </span>
                  </div>
                  <p className="font-worksans text-xs text-[#ddc0ba] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#56423e]/20 flex justify-between items-center">
                  <span className="text-[11px] font-medium text-[#a48b86] uppercase tracking-wider">
                    {item.categoryLabel}
                  </span>

                  <button
                    onClick={() => addToCart(item)}
                    className="bg-[#2a2a2a] hover:bg-[#ffb4a5] hover:text-[#611205] text-[#e5e2e1] text-xs font-semibold px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Agregar</span>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {filteredItems.length === 0 && (
            <div className="col-span-full py-16 text-center text-[#a48b86]">
              <p className="font-literata text-lg">No encontramos platos con esos filtros.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                  setFilterVeggie(false);
                  setFilterGlutenFree(false);
                }}
                className="mt-3 text-xs text-[#ffb4a5] underline hover:text-[#e5e2e1]"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Floating Cart / Order Bar */}
      {totalCartCount > 0 && (
        <div className="bg-[#20201f] border-t border-[#56423e]/40 p-4 md:px-12 flex items-center justify-between shadow-2xl shrink-0 z-10">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="bg-[#ffb4a5] text-[#611205] px-4 py-2.5 rounded-xl font-worksans text-xs font-bold flex items-center gap-2 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>
                {totalCartCount} {totalCartCount === 1 ? 'item' : 'items'}
              </span>
            </button>

            <div>
              <p className="text-xs text-[#ddc0ba]">Total Estimado</p>
              <p className="font-worksans font-bold text-lg text-[#ffb4a5]">
                ${totalCartPrice.toLocaleString('es-AR')}
              </p>
            </div>
          </div>

          <button
            onClick={handleSendOrderWhatsApp}
            className="bg-[#e2725b] text-[#5a0d02] hover:brightness-110 font-worksans font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl flex items-center gap-2 cursor-pointer shadow-lg active:scale-95 transition-all"
          >
            <span>Pedir por WhatsApp</span>
          </button>
        </div>
      )}

      {/* Expanded Cart Drawer */}
      {isCartOpen && totalCartCount > 0 && (
        <div className="fixed inset-x-0 bottom-20 z-20 bg-[#1c1b1b] border-t border-[#56423e] p-6 max-h-80 overflow-y-auto shadow-2xl animate-in slide-in-from-bottom duration-200">
          <div className="max-w-3xl mx-auto space-y-3">
            <div className="flex justify-between items-center border-b border-[#56423e]/40 pb-2">
              <h4 className="font-literata text-base font-bold text-[#e5e2e1]">Tu Pedido Actual</h4>
              <button
                onClick={() => setCart([])}
                className="text-xs text-red-400 hover:underline flex items-center gap-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Vaciar
              </button>
            </div>

            {cart.map(({ item, quantity }) => (
              <div
                key={item.id}
                className="flex items-center justify-between text-sm py-2 border-b border-[#2a2a2a]"
              >
                <div>
                  <p className="font-semibold text-[#e5e2e1]">{item.name}</p>
                  <p className="text-xs text-[#a48b86]">
                    ${item.price.toLocaleString('es-AR')} x {quantity} = $
                    {(item.price * quantity).toLocaleString('es-AR')}
                  </p>
                </div>

                <div className="flex items-center gap-2 bg-[#2a2a2a] px-3 py-1 rounded-lg">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="text-[#a48b86] hover:text-[#ffb4a5]"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-bold text-xs text-[#e5e2e1]">{quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="text-[#a48b86] hover:text-[#ffb4a5]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
