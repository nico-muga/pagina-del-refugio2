import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MapPin, CheckCircle2, MessageSquare, ChevronRight } from 'lucide-react';
import { ReservationData } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '21:00',
    guests: 2,
    area: 'interior',
    notes: '',
  });

  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const timeOptions = ['19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00'];

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const areaLabels = {
      interior: 'Salon Interior (Cálido)',
      terraza: 'Terraza (Al aire libre)',
      barra: 'Barra Principal',
    };

    const message = `Hola! Quisiera realizar una reserva en Refugio Gastropub:
📌 *Nombre:* ${formData.name}
📱 *Teléfono:* ${formData.phone}
📅 *Fecha:* ${formData.date}
⏰ *Hora:* ${formData.time} hs
👥 *Comensales:* ${formData.guests} personas
🛋️ *Sector:* ${areaLabels[formData.area]}
${formData.notes ? `📝 *Notas:* ${formData.notes}` : ''}`;

    const encodedMsg = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/543411234567?text=${encodedMsg}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#1c1b1b] border border-[#56423e] rounded-2xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl my-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#a48b86] hover:text-[#e5e2e1] p-1 rounded-lg hover:bg-[#353535] transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {confirmed ? (
          <div className="text-center py-10 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-[#ffb4a5]/20 text-[#ffb4a5] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 text-[#ffb4a5]" />
            </div>
            <h3 className="font-literata text-3xl font-semibold text-[#e5e2e1]">
              ¡Solicitud Enviada!
            </h3>
            <p className="font-worksans text-sm text-[#ddc0ba] max-w-md mx-auto leading-relaxed">
              Te serás redirigido a WhatsApp para enviar el mensaje de confirmación al equipo de Refugio. Te responderemos en breve para confirmar tu mesa.
            </p>
            <div className="bg-[#20201f] p-4 rounded-xl text-left border border-[#56423e]/30 text-xs text-[#ddc0ba] space-y-1 max-w-sm mx-auto">
              <p><strong className="text-[#e5e2e1]">Reserva a nombre de:</strong> {formData.name}</p>
              <p><strong className="text-[#e5e2e1]">Fecha y Hora:</strong> {formData.date} - {formData.time} hs</p>
              <p><strong className="text-[#e5e2e1]">Personas:</strong> {formData.guests} comensales</p>
            </div>
            <button
              onClick={() => {
                setConfirmed(false);
                onClose();
              }}
              className="mt-4 bg-[#ffb4a5] text-[#611205] font-worksans font-semibold px-8 py-3 rounded-xl hover:brightness-110"
            >
              Cerrar Ventana
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmitWhatsApp} className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[#ffb4a5] text-xs font-semibold uppercase tracking-widest mb-1">
                <Calendar className="w-3.5 h-3.5" />
                Reserva de Mesa
              </div>
              <h2 className="font-literata text-2xl sm:text-3xl font-semibold text-[#e5e2e1]">
                Asegurá tu lugar
              </h2>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-worksans text-xs font-semibold text-[#ddc0ba] uppercase mb-1.5 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#ffb4a5]" />
                  Fecha
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-[#2a2a2a] border border-[#56423e] rounded-xl px-4 py-3 text-[#e5e2e1] text-sm focus:outline-none focus:border-[#ffb4a5]"
                />
              </div>

              <div>
                <label className="block font-worksans text-xs font-semibold text-[#ddc0ba] uppercase mb-1.5 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#ffb4a5]" />
                  Horario
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-[#2a2a2a] border border-[#56423e] rounded-xl px-4 py-3 text-[#e5e2e1] text-sm focus:outline-none focus:border-[#ffb4a5]"
                >
                  {timeOptions.map((t) => (
                    <option key={t} value={t}>
                      {t} hs
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Guests & Sector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-worksans text-xs font-semibold text-[#ddc0ba] uppercase mb-1.5 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-[#ffb4a5]" />
                  Comensales
                </label>
                <div className="flex gap-2">
                  {[2, 3, 4, 6, 8].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setFormData({ ...formData, guests: num })}
                      className={`flex-1 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                        formData.guests === num
                          ? 'bg-[#ffb4a5] text-[#611205] border-[#ffb4a5]'
                          : 'bg-[#2a2a2a] text-[#e5e2e1] border-[#56423e] hover:border-[#a48b86]'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-worksans text-xs font-semibold text-[#ddc0ba] uppercase mb-1.5 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#ffb4a5]" />
                  Sector Preferido
                </label>
                <select
                  value={formData.area}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      area: e.target.value as 'interior' | 'terraza' | 'barra',
                    })
                  }
                  className="w-full bg-[#2a2a2a] border border-[#56423e] rounded-xl px-4 py-3 text-[#e5e2e1] text-sm focus:outline-none focus:border-[#ffb4a5]"
                >
                  <option value="interior">Salón Interior (Cálido)</option>
                  <option value="terraza">Terraza (Al aire libre)</option>
                  <option value="barra">Barra Principal</option>
                </select>
              </div>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-worksans text-xs font-semibold text-[#ddc0ba] uppercase mb-1">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Mateo Rossi"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#2a2a2a] border border-[#56423e] rounded-xl px-4 py-3 text-[#e5e2e1] text-sm focus:outline-none focus:border-[#ffb4a5]"
                />
              </div>

              <div>
                <label className="block font-worksans text-xs font-semibold text-[#ddc0ba] uppercase mb-1">
                  WhatsApp / Celular
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ej. 341 555 1234"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#2a2a2a] border border-[#56423e] rounded-xl px-4 py-3 text-[#e5e2e1] text-sm focus:outline-none focus:border-[#ffb4a5]"
                />
              </div>
            </div>

            {/* Special Notes */}
            <div>
              <label className="block font-worksans text-xs font-semibold text-[#ddc0ba] uppercase mb-1">
                Aclaraciones o Pedidos Especiales (Opcional)
              </label>
              <input
                type="text"
                placeholder="Ej. Aniversario, cumpleaños, trona para bebé..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-[#2a2a2a] border border-[#56423e] rounded-xl px-4 py-3 text-[#e5e2e1] text-sm focus:outline-none focus:border-[#ffb4a5]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#e2725b] text-[#5a0d02] font-worksans font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-lg cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>Enviar Reserva por WhatsApp</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
