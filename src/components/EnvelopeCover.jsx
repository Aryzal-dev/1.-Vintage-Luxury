import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  VintageFloralBouquet, 
  VintageDivider, 
  VintageSwirlDivider, 
  WaxSeal 
} from './FloralOrnament';

export default function EnvelopeCover({ data, onOpen, isOpened }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenInvitation = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Trigger celebratory gold and champagne confetti
    try {
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C5A46D', '#E6D3A3', '#FAF6EE', '#872935', '#A78650'],
        disableForReducedMotion: true
      });
    } catch (e) {
      // safe fallback
    }

    setTimeout(() => {
      onOpen();
    }, 1100);
  };

  return (
    <AnimatePresence>
      {!isOpened && (
        <motion.div
          key="cover-envelope-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -60, transition: { duration: 0.9, ease: [0.65, 0, 0.35, 1] } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-vintage-espresso overflow-hidden select-none p-4 sm:p-6"
        >
          {/* Subtle vignette radial background */}
          <div className="absolute inset-0 bg-vintage-texture pointer-events-none" />

          {/* Golden double frame */}
          <div className="relative w-full max-w-md h-[92vh] max-h-[820px] rounded-3xl border border-vintage-antiqueGold/40 p-4 sm:p-6 flex flex-col justify-between items-center text-center shadow-2xl overflow-hidden backdrop-blur-sm bg-vintage-espresso/80">
            {/* Inner fine border */}
            <div className="absolute inset-2.5 rounded-2xl border border-vintage-antiqueGold/20 pointer-events-none" />

            {/* Corner Dried Floral Bouquets (matching 01 COVER PAGE) */}
            <VintageFloralBouquet 
              className="absolute -top-6 -left-6 w-36 h-36 sm:w-44 sm:h-44 z-20" 
            />
            <VintageFloralBouquet 
              className="absolute -bottom-6 -right-6 w-36 h-36 sm:w-44 sm:h-44 z-20" 
              flipX 
              flipY 
            />

            {/* Top Typography: Save The Date */}
            <div className="relative z-10 pt-4 sm:pt-6 space-y-1">
              <motion.h1 
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-script text-5xl sm:text-6xl text-vintage-lightIvory font-normal tracking-wide drop-shadow-md"
              >
                Save The Date
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-montserrat text-[11px] sm:text-xs tracking-[0.28em] uppercase text-vintage-champagne font-medium"
              >
                {data.subtitle || "A BEAUTIFUL BEGINNING AWAITS"}
              </motion.p>

              {/* Ornate Flourish */}
              <VintageDivider light className="my-2" />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-cormorant italic text-lg sm:text-xl text-vintage-softBeige"
              >
                {data.groom.shortName} & {data.bride.shortName}
              </motion.div>
            </div>

            {/* Center: The Vintage Envelope Presentation */}
            <div className="relative z-10 w-full flex flex-col items-center justify-center my-auto py-2">
              <motion.div
                onClick={handleOpenInvitation}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-72 sm:w-80 h-48 sm:h-52 cursor-pointer transition-shadow duration-500 rounded-xl"
                style={{ perspective: 1000 }}
              >
                {/* Envelope Base Body */}
                <div 
                  className="w-full h-full rounded-xl relative overflow-hidden shadow-envelope-depth"
                  style={{
                    background: 'linear-gradient(145deg, #3D2619 0%, #2B1A10 60%, #1F120A 100%)',
                    border: '1.5px solid rgba(197, 164, 109, 0.45)'
                  }}
                >
                  {/* Textured subtle noise / grain effect */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C5A46D_1px,transparent_1px)] [background-size:12px_12px]" />

                  {/* Envelope Interior Letter Peek */}
                  <motion.div
                    animate={isOpening ? { y: -80, opacity: 1 } : { y: 0, opacity: 0.8 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="absolute inset-x-4 top-2 h-36 bg-[#F7F0E3] rounded-t-lg p-3 text-vintage-darkChocolate shadow-inner flex flex-col items-center justify-start border border-vintage-goldBorder/40"
                  >
                    <span className="font-playfair text-[10px] tracking-widest uppercase text-vintage-mutedBrown">Exclusive Invitation</span>
                    <span className="font-cormorant font-semibold text-sm mt-1">{data.weddingDate.shortDisplay}</span>
                    <span className="font-script text-xl text-vintage-darkChocolate mt-0.5">{data.groom.shortName} & {data.bride.shortName}</span>
                  </motion.div>

                  {/* Side pocket folds of envelope */}
                  <div 
                    className="absolute bottom-0 left-0 w-full h-32"
                    style={{
                      background: 'linear-gradient(to top, #2C1A11, #382216)',
                      clipPath: 'polygon(0 0, 50% 55%, 100% 0, 100% 100%, 0 100%)',
                      borderTop: '1px solid rgba(197, 164, 109, 0.25)'
                    }}
                  />
                  <div 
                    className="absolute bottom-0 left-0 w-full h-24"
                    style={{
                      background: 'linear-gradient(to top, #23140C, #321F13)',
                      clipPath: 'polygon(0 100%, 50% 20%, 100% 100%)',
                      borderTop: '1px solid rgba(197, 164, 109, 0.35)'
                    }}
                  />

                  {/* Interactive Opening Flap */}
                  <motion.div
                    animate={isOpening ? { rotateX: 180, zIndex: 0 } : { rotateX: 0, zIndex: 30 }}
                    transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                    style={{ transformOrigin: 'top center' }}
                    className="absolute top-0 left-0 w-full h-28"
                  >
                    <div 
                      className="w-full h-full relative flex items-center justify-center pt-2"
                      style={{
                        background: 'linear-gradient(180deg, #3D2619 0%, #2E1B11 80%, #24140B 100%)',
                        clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                        borderBottom: '1.5px solid rgba(197, 164, 109, 0.4)'
                      }}
                    >
                      {/* Script Calligraphy on flap */}
                      <span className="font-script text-2xl sm:text-3xl text-vintage-champagne/90 tracking-wide -mt-6 drop-shadow">
                        You Are Invited
                      </span>
                    </div>
                  </motion.div>

                  {/* Center Wax Seal positioned right at the flap tip */}
                  <div className="absolute top-24 left-1/2 -translate-x-1/2 -translate-y-2 z-40">
                    <motion.div
                      animate={isOpening ? { scale: [1, 1.25, 0], opacity: [1, 1, 0] } : { scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <WaxSeal text="A & C" size="md" interactive />
                    </motion.div>
                  </div>
                </div>

                {/* Subtle soft gold ambient glow on hover */}
                <div className="absolute -inset-1 rounded-xl bg-vintage-champagne/15 filter blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            </div>

            {/* Bottom Call To Action: CLICK THE ENVELOPE TO OPEN */}
            <div className="relative z-10 pb-4 sm:pb-6 space-y-2">
              <motion.button
                onClick={handleOpenInvitation}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center space-x-2 px-6 py-2.5 rounded-full border border-vintage-champagne/60 bg-vintage-darkChocolate/80 text-vintage-lightIvory shadow-lg hover:border-vintage-champagne hover:bg-vintage-darkChocolate transition-all duration-300"
              >
                <span className="font-montserrat text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-vintage-champagne group-hover:text-vintage-lightIvory transition-colors">
                  {isOpening ? "Opening Invitation..." : "CLICK THE ENVELOPE TO OPEN"}
                </span>
                <span className="text-vintage-champagne animate-pulse">✦</span>
              </motion.button>

              <VintageSwirlDivider />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
