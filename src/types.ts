export type CategoryId = 'all' | 'burgers' | 'principales' | 'cocteleria' | 'entradas' | 'postres' | 'bebidas';

export interface MenuItem {
  id: string;
  name: string;
  category: CategoryId;
  categoryLabel: string;
  price: number;
  description: string;
  image?: string;
  isFavorite?: boolean;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
  isChefRecommendation?: boolean;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  avatar?: string;
  verifiedGuest?: boolean;
}

export interface ReservationData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  area: 'interior' | 'terraza' | 'barra';
  notes: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
}
