import React from 'react';
import { useCountdown } from '../hooks/useCountdown';

export default function Countdown({ targetDate, light = false }) {
  const { days, hours, minutes, seconds, isEnded } = useCountdown(targetDate);

  if (isEnded) {
    return (
      <div className="w-full text-center py-4 px-6 rounded-2xl border border-vintage-antiqueGold/50 bg-vintage-darkChocolate/70 backdrop-blur-sm">
        <p className="font-playfair text-xl text-vintage-champagne italic">
          The Wedding Celebration is Taking Place Today!
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Vintage ornate frame container matching screenshot panel 02 */}
      <div 
        className={`relative rounded-2xl p-4 sm:p-5 text-center shadow-vintage-card overflow-hidden ${
          light 
            ? 'bg-vintage-lightIvory/95 border-2 border-vintage-antiqueGold text-vintage-darkChocolate' 
            : 'bg-[#26170E]/90 border border-vintage-antiqueGold/60 text-vintage-lightIvory'
        }`}
      >
        {/* Vintage corner accents */}
        <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-vintage-champagne/70" />
        <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-vintage-champagne/70" />
        <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-vintage-champagne/70" />
        <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-vintage-champagne/70" />

        {/* Header label */}
        <p className="font-montserrat text-[10px] tracking-[0.25em] uppercase text-vintage-champagne font-semibold mb-2">
          WEDDING DAY COUNTDOWN
        </p>

        {/* Digits Display */}
        <div className="flex items-center justify-center space-x-2 sm:space-x-3 font-cormorant">
          {/* Days */}
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-vintage-goldHighlight">
              {days}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-vintage-softBeige/80 font-montserrat mt-0.5">
              Days
            </span>
          </div>

          <span className="text-2xl text-vintage-champagne/70 -translate-y-2">:</span>

          {/* Hours */}
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-vintage-goldHighlight">
              {hours}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-vintage-softBeige/80 font-montserrat mt-0.5">
              Hours
            </span>
          </div>

          <span className="text-2xl text-vintage-champagne/70 -translate-y-2">:</span>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-vintage-goldHighlight">
              {minutes}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-vintage-softBeige/80 font-montserrat mt-0.5">
              Mins
            </span>
          </div>

          <span className="text-2xl text-vintage-champagne/70 -translate-y-2">:</span>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-vintage-goldHighlight tabular-nums">
              {seconds}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-vintage-softBeige/80 font-montserrat mt-0.5">
              Secs
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
