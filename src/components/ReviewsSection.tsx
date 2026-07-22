import React, { useState } from 'react';
import { Star, MessageSquarePlus, CheckCircle2, User, Send, X } from 'lucide-react';
import { INITIAL_REVIEWS } from '../data/reviewsData';
import { Review } from '../types';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form state
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      name: name.trim(),
      rating,
      date: 'Recientemente',
      comment: comment.trim(),
      verifiedGuest: true,
    };

    setReviews([newRev, ...reviews]);
    setSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setSubmitted(false);
      setName('');
      setComment('');
      setRating(5);
    }, 1800);
  };

  return (
    <section className="py-20 px-4 md:px-16 bg-[#1c1b1b]" id="resenas">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[#ffb4a5] font-worksans text-xs font-semibold uppercase tracking-widest">
              OPINIONES DE NUESTROS CLIENTES
            </span>
            <h2 className="font-literata text-3xl sm:text-4xl font-semibold text-[#e5e2e1] mt-2">
              Experiencias en Refugio
            </h2>
          </div>

          <div className="flex items-center gap-4 bg-[#20201f] p-4 rounded-2xl border border-[#56423e]/30">
            <div className="text-center pr-4 border-r border-[#56423e]/40">
              <span className="font-literata text-3xl font-bold text-[#f0bd8b]">4.9</span>
              <p className="font-worksans text-xs text-[#ddc0ba]">de 5 estrellas</p>
            </div>
            <div>
              <div className="flex gap-1 text-[#ffb4a5] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="font-worksans text-xs text-[#ddc0ba]">
                Más de +280 opiniones verificadas
              </p>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="ml-auto bg-[#353535] hover:bg-[#ffb4a5] hover:text-[#611205] text-[#e5e2e1] text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Opinar</span>
            </button>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#20201f] beveled-card p-6 rounded-2xl flex flex-col justify-between border border-[#56423e]/30 hover:border-[#ffb4a5]/30 transition-all"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#353535] flex items-center justify-center text-[#ffb4a5] font-semibold font-literata text-base">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-worksans text-sm font-semibold text-[#e5e2e1] flex items-center gap-1">
                        {rev.name}
                        {rev.verifiedGuest && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#ffb4a5]" title="Cliente verificado" />
                        )}
                      </h4>
                      <p className="font-worksans text-xs text-[#a48b86]">{rev.date}</p>
                    </div>
                  </div>

                  <div className="flex gap-0.5 text-[#ffb4a5]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="font-worksans text-sm text-[#ddc0ba] leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Write Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#1c1b1b] border border-[#56423e] rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-[#a48b86] hover:text-[#e5e2e1]"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#ffb4a5] mx-auto animate-bounce" />
                <h3 className="font-literata text-2xl font-semibold text-[#e5e2e1]">
                  ¡Gracias por tu opinión!
                </h3>
                <p className="font-worksans text-sm text-[#ddc0ba]">
                  Tu reseña ha sido publicada con éxito. Nos ayuda a seguir mejorando.
                </p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-5">
                <div>
                  <h3 className="font-literata text-2xl font-semibold text-[#e5e2e1]">
                    Dejá tu opinión sobre Refugio
                  </h3>
                  <p className="font-worksans text-xs text-[#ddc0ba] mt-1">
                    Compartí tu experiencia con nosotros y la comunidad.
                  </p>
                </div>

                <div>
                  <label className="block font-worksans text-xs font-semibold text-[#ddc0ba] uppercase mb-1">
                    Nombre o Apodo
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Sofía M."
                    className="w-full bg-[#2a2a2a] border border-[#56423e] rounded-xl px-4 py-3 text-[#e5e2e1] text-sm focus:outline-none focus:border-[#ffb4a5]"
                  />
                </div>

                <div>
                  <label className="block font-worksans text-xs font-semibold text-[#ddc0ba] uppercase mb-1">
                    Puntuación
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className={`p-2 rounded-lg border transition-all ${
                          rating >= star
                            ? 'bg-[#ffb4a5]/10 border-[#ffb4a5] text-[#ffb4a5]'
                            : 'border-[#56423e] text-[#a48b86]'
                        }`}
                      >
                        <Star className={`w-6 h-6 ${rating >= star ? 'fill-current' : ''}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-worksans text-xs font-semibold text-[#ddc0ba] uppercase mb-1">
                    Comentario
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Contanos qué comiste y qué tal la pasaste..."
                    className="w-full bg-[#2a2a2a] border border-[#56423e] rounded-xl p-4 text-[#e5e2e1] text-sm focus:outline-none focus:border-[#ffb4a5]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ffb4a5] text-[#611205] font-worksans font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Publicar Reseña</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
