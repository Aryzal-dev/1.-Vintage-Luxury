import React from 'react';

// Vintage Floral Corner Bouquet (matching the burgundy, champagne, and cream dried flowers in the reference)
export const VintageFloralBouquet = ({ className = '', flipX = false, flipY = false }) => {
  const transform = `${flipX ? 'scaleX(-1)' : ''} ${flipY ? 'scaleY(-1)' : ''}`.trim();
  
  return (
    <div 
      className={`pointer-events-none select-none ${className}`}
      style={{ transform: transform || undefined }}
    >
      <svg
        viewBox="0 0 220 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        <defs>
          <radialGradient id="burgundyPetal" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#872935" />
            <stop offset="60%" stopColor="#58161E" />
            <stop offset="100%" stopColor="#350E14" />
          </radialGradient>
          <radialGradient id="creamRose" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#FFF9EE" />
            <stop offset="70%" stopColor="#E3D1B5" />
            <stop offset="100%" stopColor="#B39977" />
          </radialGradient>
          <linearGradient id="goldStem" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E6D3A3" />
            <stop offset="50%" stopColor="#C5A46D" />
            <stop offset="100%" stopColor="#7E6032" />
          </linearGradient>
          <linearGradient id="driedLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A88B68" />
            <stop offset="100%" stopColor="#5E4733" />
          </linearGradient>
          <linearGradient id="eucalyptus" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7D8A78" />
            <stop offset="100%" stopColor="#4A5646" />
          </linearGradient>
        </defs>

        {/* Pampas grass / dried fern sprays */}
        <g opacity="0.85">
          <path d="M15 15 C 50 70, 110 110, 190 145" stroke="url(#goldStem)" strokeWidth="1.5" strokeDasharray="2 3" />
          <path d="M20 25 C 65 60, 125 90, 175 110" stroke="url(#driedLeaf)" strokeWidth="1.2" />
          <path d="M10 40 C 45 85, 95 130, 140 185" stroke="url(#goldStem)" strokeWidth="1.5" />
          {/* Feathered pampas foliage */}
          {[
            { x: 30, y: 55, r: -35 },
            { x: 55, y: 80, r: -40 },
            { x: 85, y: 105, r: -30 },
            { x: 120, y: 130, r: -25 },
            { x: 155, y: 145, r: -20 },
          ].map((pt, i) => (
            <ellipse
              key={i}
              cx={pt.x}
              cy={pt.y}
              rx="16"
              ry="4"
              transform={`rotate(${pt.r} ${pt.x} ${pt.y})`}
              fill="url(#driedLeaf)"
              opacity="0.7"
            />
          ))}
        </g>

        {/* Eucalyptus leaves */}
        <g>
          <circle cx="65" cy="50" r="10" fill="url(#eucalyptus)" opacity="0.8" />
          <circle cx="82" cy="40" r="12" fill="url(#eucalyptus)" opacity="0.85" />
          <circle cx="50" cy="75" r="11" fill="url(#eucalyptus)" opacity="0.8" />
          <circle cx="95" cy="65" r="14" fill="url(#eucalyptus)" opacity="0.9" />
          <circle cx="125" cy="85" r="12" fill="url(#eucalyptus)" opacity="0.75" />
        </g>

        {/* Main Burgundy Rose */}
        <g transform="translate(68, 68)">
          <circle cx="22" cy="22" r="24" fill="url(#burgundyPetal)" />
          {/* Petal curves */}
          <path d="M8 20 C8 12, 18 6, 26 8 C34 10, 38 18, 36 26 C34 34, 24 38, 16 35 C10 32, 8 26, 8 20" stroke="#B84453" strokeWidth="1.5" fill="none" opacity="0.8" />
          <path d="M14 22 C14 17, 20 13, 25 15 C30 17, 32 22, 30 26 C28 30, 22 32, 18 30 C15 28, 14 25, 14 22" stroke="#E66A7B" strokeWidth="1.2" fill="none" opacity="0.9" />
          <circle cx="22" cy="22" r="5" fill="#FFE3E7" opacity="0.7" />
        </g>

        {/* Secondary Cream / Vintage White Rose */}
        <g transform="translate(32, 95)">
          <circle cx="18" cy="18" r="18" fill="url(#creamRose)" />
          <path d="M8 18 C8 11, 15 7, 21 8 C27 9, 30 15, 28 21 C26 27, 19 29, 14 27 C10 25, 8 22, 8 18" stroke="#9E8058" strokeWidth="1.2" fill="none" opacity="0.8" />
          <circle cx="18" cy="18" r="4" fill="#C5A46D" opacity="0.8" />
        </g>

        {/* Smaller accent buds and berries */}
        <g>
          <circle cx="118" cy="50" r="5" fill="url(#burgundyPetal)" />
          <circle cx="128" cy="58" r="4" fill="url(#burgundyPetal)" />
          <circle cx="112" cy="62" r="4.5" fill="url(#burgundyPetal)" />
          {/* Golden berry clusters */}
          <circle cx="45" cy="40" r="3.5" fill="url(#goldStem)" />
          <circle cx="52" cy="35" r="3" fill="url(#goldStem)" />
          <circle cx="40" cy="46" r="3" fill="url(#goldStem)" />
          <circle cx="102" cy="115" r="3.5" fill="url(#goldStem)" />
          <circle cx="110" cy="122" r="3" fill="url(#goldStem)" />
        </g>

        {/* Golden branch flourish */}
        <path
          d="M20 20 Q 70 45, 110 40 Q 150 35, 185 70"
          stroke="url(#goldStem)"
          strokeWidth="1.2"
          fill="none"
        />
      </svg>
    </div>
  );
};

// Vintage Ornate Divider with Diamond Crest
export const VintageDivider = ({ className = '', light = false }) => (
  <div className={`flex items-center justify-center space-x-3 my-4 select-none ${className}`}>
    <div className={`h-[1px] w-12 sm:w-20 ${light ? 'bg-gradient-to-r from-transparent to-vintage-champagne/80' : 'bg-gradient-to-r from-transparent to-vintage-antiqueGold/80'}`} />
    
    <div className="flex items-center space-x-1.5 text-vintage-champagne">
      <span className="text-[10px]">&#9670;</span>
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
      </svg>
      <span className="text-[10px]">&#9670;</span>
    </div>

    <div className={`h-[1px] w-12 sm:w-20 ${light ? 'bg-gradient-to-l from-transparent to-vintage-champagne/80' : 'bg-gradient-to-l from-transparent to-vintage-antiqueGold/80'}`} />
  </div>
);

// Vintage Floral Swirl Monogram Divider
export const VintageSwirlDivider = ({ className = '' }) => (
  <div className={`flex items-center justify-center select-none py-2 ${className}`}>
    <svg viewBox="0 0 160 20" fill="none" className="w-36 sm:w-44 h-5 text-vintage-champagne">
      <path
        d="M10 10 C 30 10, 45 4, 60 10 C 70 14, 75 14, 80 10 C 85 6, 90 6, 100 10 C 115 16, 130 10, 150 10"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="80" cy="10" r="2.5" fill="currentColor" />
      <circle cx="70" cy="10" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="90" cy="10" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="15" cy="10" r="1.5" fill="currentColor" />
      <circle cx="145" cy="10" r="1.5" fill="currentColor" />
    </svg>
  </div>
);

// Gold Wax Seal Component
export const WaxSeal = ({ text = "A & C", size = "md", onClick, interactive = false }) => {
  const sizeClasses = {
    sm: "w-11 h-11 text-xs",
    md: "w-16 h-16 text-sm",
    lg: "w-20 h-20 text-base",
    xl: "w-24 h-24 text-lg"
  }[size] || "w-16 h-16 text-sm";

  return (
    <div
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-full shadow-wax-seal select-none transition-transform duration-300 ${
        interactive ? 'cursor-pointer hover:scale-105 active:scale-95' : ''
      } ${sizeClasses}`}
      style={{
        background: 'radial-gradient(circle at 35% 30%, #E6D3A3 0%, #C5A46D 30%, #A78650 70%, #5E4624 100%)',
        border: '2px solid rgba(255, 230, 175, 0.4)'
      }}
    >
      {/* Outer scalloped ring */}
      <div className="absolute inset-1 rounded-full border border-dashed border-[#5A3E1B]/60" />
      
      {/* Inner embossed stamp */}
      <div className="w-4/5 h-4/5 rounded-full flex flex-col items-center justify-center border border-[#7A5728]/50 shadow-inner bg-gradient-to-br from-[#D9BC82] to-[#997339] text-[#36210A] font-cormorant font-bold">
        <span className="tracking-widest font-playfair drop-shadow-sm">{text}</span>
      </div>
    </div>
  );
};

// Line-Art Illustrations matching Panel 04 (Ceremony, Reception, Location, Date)
export const VintageLineArt = ({ type = 'location', className = 'w-20 h-20' }) => {
  if (type === 'location') {
    // Wedding Floral Arch
    return (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
        {/* Arch pillars */}
        <path d="M25 90 L25 45 Q25 15, 50 15 Q75 15, 75 45 L75 90" />
        <path d="M20 90 L80 90" strokeWidth="2" />
        <path d="M30 90 L30 45" strokeWidth="1" strokeDasharray="2 3" />
        <path d="M70 90 L70 45" strokeWidth="1" strokeDasharray="2 3" />
        {/* Floral drape over arch */}
        <path d="M22 35 Q35 22, 50 25 Q65 28, 78 35" strokeWidth="1.8" />
        {/* Leaves & flowers */}
        <circle cx="35" cy="26" r="3" fill="currentColor" fillOpacity="0.2" />
        <circle cx="50" cy="24" r="3.5" fill="currentColor" fillOpacity="0.2" />
        <circle cx="65" cy="28" r="3" fill="currentColor" fillOpacity="0.2" />
        <path d="M22 32 Q15 42, 25 48" />
        <path d="M78 32 Q85 42, 75 48" />
        {/* Hanging chandelier/lantern */}
        <line x1="50" y1="26" x2="50" y2="42" />
        <polygon points="46,42 54,42 50,50" fill="currentColor" fillOpacity="0.3" />
      </svg>
    );
  }

  if (type === 'date') {
    // Classic desk calendar with ribbon
    return (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
        {/* Calendar frame with 3D slant */}
        <polygon points="25,30 75,25 82,85 20,85" />
        <line x1="24" y1="42" x2="76" y2="37" strokeWidth="1.8" />
        {/* Rings at top */}
        <path d="M36 24 C36 18, 42 18, 42 28" />
        <path d="M58 22 C58 16, 64 16, 64 26" />
        {/* Heart on the special date */}
        <path d="M47 56 C44 52, 38 53, 38 58 C38 64, 47 70, 47 70 C47 70, 56 64, 56 58 C56 53, 50 52, 47 56 Z" fill="currentColor" fillOpacity="0.25" />
        {/* Calendar grid lines */}
        <line x1="26" y1="50" x2="77" y2="47" strokeWidth="1" strokeDasharray="1 3" />
        <line x1="24" y1="62" x2="79" y2="60" strokeWidth="1" strokeDasharray="1 3" />
        <line x1="22" y1="74" x2="80" y2="72" strokeWidth="1" strokeDasharray="1 3" />
      </svg>
    );
  }

  if (type === 'ceremony') {
    // Romantic Bride & Groom Dancing / Embracing
    return (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
        {/* Groom */}
        <circle cx="42" cy="22" r="5" />
        <path d="M42 27 L42 52" />
        <path d="M42 35 L52 40" />
        <path d="M42 52 L36 82" />
        <path d="M42 52 L46 82" />
        {/* Bride */}
        <circle cx="58" cy="25" r="4.5" />
        {/* Bride veil floating */}
        <path d="M56 22 Q48 20, 48 35 Q48 50, 40 60" strokeDasharray="2 2" strokeWidth="1.2" />
        {/* Bride dress silhouette */}
        <path d="M58 29.5 Q54 42, 50 50 Q40 70, 36 85 L76 85 Q68 70, 62 50 Z" fill="currentColor" fillOpacity="0.15" />
        {/* Bride arm holding groom */}
        <path d="M56 36 L46 38" />
        {/* Bouquet in hand */}
        <circle cx="48" cy="45" r="3" fill="currentColor" />
        <circle cx="45" cy="48" r="2.5" fill="currentColor" />
      </svg>
    );
  }

  if (type === 'reception') {
    // Elegant banquet table with candles & champagne
    return (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
        {/* Table surface and cloth */}
        <ellipse cx="50" cy="55" rx="36" ry="12" />
        <path d="M14 55 Q14 85, 20 88 L80 88 Q86 85, 86 55" fill="currentColor" fillOpacity="0.15" />
        <path d="M30 65 Q50 72, 70 65" strokeWidth="1" strokeDasharray="2 3" />
        {/* Candelabra with glowing candles */}
        <line x1="50" y1="55" x2="50" y2="35" strokeWidth="2" />
        <path d="M42 42 Q50 46, 58 42" strokeWidth="1.5" />
        <line x1="42" y1="42" x2="42" y2="33" />
        <line x1="58" y1="42" x2="58" y2="33" />
        {/* Flames */}
        <ellipse cx="50" cy="30" rx="2" ry="3.5" fill="currentColor" />
        <ellipse cx="42" cy="28" rx="1.5" ry="3" fill="currentColor" />
        <ellipse cx="58" cy="28" rx="1.5" ry="3" fill="currentColor" />
        {/* Champagne flutes on sides */}
        <path d="M26 50 L30 50 L28 44 Z" />
        <line x1="28" y1="50" x2="28" y2="55" />
        <path d="M70 50 L74 50 L72 44 Z" />
        <line x1="72" y1="50" x2="72" y2="55" />
      </svg>
    );
  }

  return null;
};
