import React from 'react';

export default function WeddingLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#1F120A] flex justify-center selection:bg-vintage-champagne selection:text-vintage-espresso">
      {/* Luxury vintage side background pattern for desktop viewports */}
      <div className="w-full max-w-lg min-h-screen shadow-2xl relative bg-vintage-espresso overflow-x-hidden border-x border-vintage-antiqueGold/20">
        {children}
      </div>
    </div>
  );
}
