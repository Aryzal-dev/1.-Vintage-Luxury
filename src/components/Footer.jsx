import React from 'react';
import { VintageDivider, VintageFloralBouquet } from './FloralOrnament';
import { Heart } from 'lucide-react';

export default function Footer({ data }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-vintage-espresso text-vintage-lightIvory py-14 px-4 sm:px-6 overflow-hidden text-center border-t border-vintage-antiqueGold/30">
      <div className="absolute inset-0 bg-vintage-texture pointer-events-none" />

      {/* Subtle corner florals */}
      <VintageFloralBouquet className="absolute -bottom-6 -left-6 w-32 h-32 opacity-40" />
      <VintageFloralBouquet className="absolute -bottom-6 -right-6 w-32 h-32 opacity-40" flipX flipY />

      <div className="relative z-10 w-full max-w-md mx-auto space-y-4">
        {/* Thank You Note */}
        <span className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-vintage-champagne font-semibold block">
          THANK YOU
        </span>

        <p className="font-cormorant italic text-base sm:text-lg text-vintage-softBeige leading-relaxed px-4">
          "It would be our greatest honor and happiness to celebrate the start of our new journey with you."
        </p>

        {/* Couple Names */}
        <div className="pt-2">
          <h3 className="font-script text-3xl sm:text-4xl text-vintage-goldHighlight">
            {data.groom.shortName} & {data.bride.shortName}
          </h3>
          <p className="font-montserrat text-[9px] tracking-widest uppercase text-vintage-mutedBrown mt-1">
            {data.weddingDate.display}
          </p>
        </div>

        <VintageDivider light className="my-3" />

        {/* dipernikahankita branding */}
        <div className="pt-2 text-center space-y-1">
          <p className="font-montserrat text-[9px] uppercase tracking-widest text-vintage-softBeige/60">
            Created with Love by
          </p>
          <a
            href={data.branding.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 font-playfair font-bold text-sm tracking-widest text-vintage-champagne hover:text-vintage-goldHighlight transition-colors"
          >
            <span>{data.branding.brandName}</span>
          </a>
          <p className="text-[8px] text-vintage-mutedBrown font-montserrat">
            &copy; 2027 dipernikahankita. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
