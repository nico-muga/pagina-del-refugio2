import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { FavoritesSection } from './components/FavoritesSection';
import { ReservationBanner } from './components/ReservationBanner';
import { LocationSection } from './components/LocationSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { MenuModal } from './components/MenuModal';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] font-worksans selection:bg-[#ffb4a5]/30 selection:text-[#ffb4a5]">
      {/* Fixed Header */}
      <Header
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenMenu={() => setIsMenuOpen(true)}
      />

      {/* Main Page Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenReservation={() => setIsReservationOpen(true)}
          onOpenMenu={() => setIsMenuOpen(true)}
        />

        {/* Bento Grid Moments */}
        <BentoGrid />

        {/* Favorites & Menu Highlights */}
        <FavoritesSection onOpenMenu={() => setIsMenuOpen(true)} />

        {/* Call-to-action Banner */}
        <ReservationBanner onOpenReservation={() => setIsReservationOpen(true)} />

        {/* Location & Opening Hours */}
        <LocationSection />

        {/* Customer Reviews & Feedback */}
        <ReviewsSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Interactive Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Full Digital Menu Modal */}
      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
}
