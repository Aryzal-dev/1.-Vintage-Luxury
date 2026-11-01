import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VintageDivider, VintageSwirlDivider } from './FloralOrnament';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function WeddingGallery({ data }) {
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const gallery = data.gallery;

  const openLightbox = (index) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % gallery.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + gallery.images.length) % gallery.images.length);
  };

  return (
    <section id="gallery" className="relative min-h-screen bg-vintage-ivory text-vintage-darkChocolate py-16 px-4 sm:px-6 overflow-hidden flex flex-col justify-center items-center">
      {/* Background paper texture & warm gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/70 via-vintage-ivory to-[#EFE2CE] pointer-events-none" />

      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center text-center space-y-6">
        
        {/* Header (matching panel 06) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-1"
        >
          <VintageDivider className="mb-2" />
          <span className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-vintage-mutedBrown font-semibold block">
            OUR
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold tracking-widest text-vintage-darkChocolate">
            GALLERY
          </h2>
          <p className="font-montserrat text-[10px] tracking-[0.25em] uppercase text-vintage-antiqueGold font-medium">
            {gallery.subtitle || "A GLIMPSE OF OUR LOVE"}
          </p>
        </motion.div>

        {/* Editorial Photo Collage matching reference layout */}
        <div className="w-full space-y-3">
          
          {/* Top Hero Photo */}
          {gallery.images[0] && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              onClick={() => openLightbox(0)}
              className="relative rounded-2xl overflow-hidden border-2 border-vintage-antiqueGold/60 shadow-md cursor-pointer group h-52 sm:h-64"
            >
              <img
                src={gallery.images[0].url}
                alt={gallery.images[0].caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="px-3 py-1.5 rounded-full bg-vintage-espresso/80 text-vintage-champagne text-xs font-montserrat flex items-center space-x-1.5 shadow-lg">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>View Photo</span>
                </span>
              </div>
            </motion.div>
          )}

          {/* Middle Two Photos Grid */}
          <div className="grid grid-cols-2 gap-3">
            {gallery.images.slice(1, 3).map((img, idx) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={() => openLightbox(idx + 1)}
                className="relative rounded-2xl overflow-hidden border border-vintage-antiqueGold/60 shadow-md cursor-pointer group h-44 sm:h-52"
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="w-5 h-5 text-vintage-champagne" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Two Photos Grid */}
          <div className="grid grid-cols-2 gap-3">
            {gallery.images.slice(3, 5).map((img, idx) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={() => openLightbox(idx + 3)}
                className="relative rounded-2xl overflow-hidden border border-vintage-antiqueGold/60 shadow-md cursor-pointer group h-44 sm:h-52"
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="w-5 h-5 text-vintage-champagne" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Footer Flourish & Romantic Quote (Matching bottom of panel 06) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-4 text-center space-y-1.5"
        >
          {/* Gold flourish divider */}
          <div className="flex items-center justify-center space-x-2 text-vintage-antiqueGold">
            <span className="text-xs">✦</span>
            <span className="text-sm">♥</span>
            <span className="text-xs">✦</span>
          </div>

          <p className="font-montserrat text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-vintage-mutedBrown font-semibold">
            {gallery.footerQuote || "EVERY PICTURE REMINDS US"}
          </p>
          <p className="font-script text-3xl sm:text-4xl text-vintage-antiqueGold font-normal">
            {gallery.footerScript || "how lucky we are."}
          </p>

          <VintageSwirlDivider className="pt-2" />
        </motion.div>

      </div>

      {/* Lightbox Modal with Fullscreen Zoom & Keyboard navigation */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 select-none"
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev button */}
            <button
              onClick={prevImage}
              className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next button */}
            <button
              onClick={nextImage}
              className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Image Display */}
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl max-h-[85vh] flex flex-col items-center"
            >
              <motion.img
                key={activeImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={gallery.images[activeImageIndex].url}
                alt={gallery.images[activeImageIndex].caption}
                className="max-h-[75vh] w-auto object-contain rounded-xl border border-vintage-champagne/40 shadow-2xl"
              />
              <p className="font-cormorant italic text-vintage-lightIvory text-base sm:text-lg mt-3 text-center px-4">
                "{gallery.images[activeImageIndex].caption}"
              </p>
              <span className="font-montserrat text-xs text-vintage-champagne mt-1">
                {activeImageIndex + 1} / {gallery.images.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
