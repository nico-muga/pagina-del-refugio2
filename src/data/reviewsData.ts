import { Review } from '../types';

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Mateo Rossi',
    rating: 5,
    date: 'Hace 3 días',
    comment: '¡Increíble la Patagonia Burger! El punto de la carne y el ahumado son perfectos. El ambiente cálido y la atención de primera. Definitivamente el mejor lugar de Roldán.',
    verifiedGuest: true,
  },
  {
    id: 'rev-2',
    name: 'Carolina Fernández',
    rating: 5,
    date: 'Hace 1 semana',
    comment: 'Pedimos el Old Fashioned Ahumado y el Risotto de Hongos. Una experiencia sensorial tremenda. La música a volumen justo para poder charlar agusto.',
    verifiedGuest: true,
  },
  {
    id: 'rev-3',
    name: 'Gonzalo & Sofia',
    rating: 5,
    date: 'Hace 2 semanas',
    comment: 'Celebramos nuestro aniversario en la terraza. Reservamos fácilmente por WhatsApp y nos tenían una mesa especial esperándonos. 10/10.',
    verifiedGuest: true,
  },
];
