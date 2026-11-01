import React from 'react';
import { motion } from 'framer-motion';
import { 
  VintageFloralBouquet, 
  VintageDivider, 
  WaxSeal 
} from './FloralOrnament';
import Countdown from './Countdown';
import { Calendar, MapPin, Heart, BookOpen, Image as ImageIcon, CheckCircle } from 'lucide-react';

export default function WeddingHero({ data }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-vintage-espresso text-vintage-lightIvory py-10 px-4 sm:px-6 overflow-hidden flex flex-col justify-center items-center">
      {/* Background vignette & subtle texture */}
      <div className="absolute inset-0 bg-vintage-texture pointer-events-none" />

      {/* Decorative Floral Bouquets on corners */}
      <VintageFloralBouquet className="absolute -top-6 -left-6 w-36 h-36 sm:w-48 sm:h-48 z-10" />
      <VintageFloralBouquet className="absolute -bottom-6 -right-6 w-36 h-36 sm:w-48 sm:h-48 z-10" flipX flipY />

      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col space-y-5">
        
        {/* Top Collage Grid: Arch Photo + Date Card + Names Card */}
        <div className="grid grid-cols-2 gap-3.5 items-stretch">
          
          {/* Top Left: Arch Couple Portrait */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col space-y-3"
          >
            <div className="relative rounded-t-full rounded-b-xl overflow-hidden border-2 border-vintage-antiqueGold/70 shadow-vintage-card h-44 sm:h-52 group">
              <img 
                src={data.photos.archPortrait} 
                alt="Anthony & Charlotte" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vintage-espresso/70 via-transparent to-transparent" />
            </div>

            {/* Couple Names Card (underneath arch photo) */}
            <div className="rounded-xl border border-vintage-antiqueGold/60 bg-vintage-ivory p-3 text-center shadow-md">
              <span className="font-montserrat text-[8px] uppercase tracking-widest text-vintage-mutedBrown font-semibold block mb-0.5">
                The Wedding Of
              </span>
              <h2 className="font-script text-2xl sm:text-3xl text-vintage-darkChocolate leading-none py-1">
                {data.groom.shortName} <span className="text-vintage-antiqueGold text-lg font-serif">&</span> {data.bride.shortName}
              </h2>
            </div>
          </motion.div>

          {/* Top Right: Date & Venue Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-2xl border-2 border-vintage-antiqueGold/80 bg-vintage-ivory p-4 text-center text-vintage-darkChocolate shadow-vintage-card flex flex-col justify-between"
          >
            <div className="pt-1">
              <span className="font-montserrat text-[9px] uppercase tracking-[0.25em] text-vintage-mutedBrown font-semibold block">
                Save The Date
              </span>
              <div className="my-2 border-t border-b border-vintage-antiqueGold/40 py-2">
                <span className="font-cormorant text-4xl sm:text-5xl font-bold text-vintage-darkChocolate block leading-none">
                  {data.weddingDate.day}
                </span>
                <span className="font-playfair text-xs sm:text-sm font-semibold tracking-widest uppercase text-vintage-antiqueGold block mt-1">
                  {data.weddingDate.month}
                </span>
                <span className="font-cormorant text-base font-semibold text-vintage-mutedBrown block">
                  {data.weddingDate.year}
                </span>
              </div>
            </div>

            <div className="text-[10px] font-montserrat space-y-1 text-vintage-darkChocolate/80 pb-1">
              <p className="font-semibold text-vintage-darkChocolate">AT 09:00 AM</p>
              <p className="tracking-wide uppercase text-[9px] text-vintage-mutedBrown">Willow Creek Estate</p>
              <p className="text-[8px] text-vintage-mutedBrown/90">San Francisco, CA</p>
            </div>
          </motion.div>

        </div>

        {/* 3 Quick Navigation Pill Buttons (matching reference panel 02) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-2 text-center"
        >
          <button 
            onClick={() => scrollTo('story')}
            className="group flex flex-col items-center justify-center py-2.5 px-1 rounded-xl border border-vintage-antiqueGold/50 bg-[#352115]/90 hover:bg-vintage-darkChocolate transition-all shadow-sm"
          >
            <BookOpen className="w-4 h-4 text-vintage-champagne mb-1 group-hover:scale-110 transition-transform" />
            <span className="font-montserrat text-[9px] uppercase tracking-wider font-semibold text-vintage-lightIvory">
              Our Story
            </span>
          </button>

          <button 
            onClick={() => scrollTo('details')}
            className="group flex flex-col items-center justify-center py-2.5 px-1 rounded-xl border border-vintage-antiqueGold/50 bg-[#352115]/90 hover:bg-vintage-darkChocolate transition-all shadow-sm"
          >
            <Calendar className="w-4 h-4 text-vintage-champagne mb-1 group-hover:scale-110 transition-transform" />
            <span className="font-montserrat text-[9px] uppercase tracking-wider font-semibold text-vintage-lightIvory">
              Details
            </span>
          </button>

          <button 
            onClick={() => scrollTo('gallery')}
            className="group flex flex-col items-center justify-center py-2.5 px-1 rounded-xl border border-vintage-antiqueGold/50 bg-[#352115]/90 hover:bg-vintage-darkChocolate transition-all shadow-sm"
          >
            <ImageIcon className="w-4 h-4 text-vintage-champagne mb-1 group-hover:scale-110 transition-transform" />
            <span className="font-montserrat text-[9px] uppercase tracking-wider font-semibold text-vintage-lightIvory">
              Gallery
            </span>
          </button>
        </motion.div>

        {/* Middle Photo Strip: 2 framed landscape photos */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-2.5 rounded-2xl p-2 border border-vintage-antiqueGold/40 bg-[#332015]/60 shadow-lg"
        >
          <div className="relative rounded-xl overflow-hidden h-28 border border-vintage-antiqueGold/30">
            <img 
              src={data.photos.storyStrip1} 
              alt="Moments" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
            />
          </div>
          <div className="relative rounded-xl overflow-hidden h-28 border border-vintage-antiqueGold/30">
            <img 
              src={data.photos.storyStrip2} 
              alt="Moments" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </motion.div>

        {/* Action Badges Row: Wax Seal RSVP + Event Details + Mini Portrait */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-3 gap-2 items-center"
        >
          {/* Left: Make RSVP Now button */}
          <button 
            onClick={() => scrollTo('rsvp')}
            className="relative flex flex-col items-center justify-center p-3 rounded-2xl border border-vintage-antiqueGold bg-vintage-ivory text-vintage-darkChocolate hover:bg-white transition-all shadow-md group"
          >
            <div className="absolute -top-3 -left-2 scale-75">
              <WaxSeal text="RSVP" size="sm" />
            </div>
            <span className="font-script text-xl text-vintage-antiqueGold font-bold mt-1">Make</span>
            <span className="font-montserrat text-[10px] font-bold tracking-wider uppercase text-vintage-darkChocolate">
              RSVP Now
            </span>
          </button>

          {/* Middle: Event Details Pill */}
          <button 
            onClick={() => scrollTo('details')}
            className="flex flex-col items-center justify-center p-3 rounded-2xl border border-vintage-antiqueGold/70 bg-[#3D2517] text-vintage-lightIvory hover:border-vintage-champagne transition-all shadow-md group"
          >
            <MapPin className="w-4 h-4 text-vintage-champagne mb-1 group-hover:scale-110 transition-transform" />
            <span className="font-playfair text-xs italic text-vintage-champagne">Event</span>
            <span className="font-montserrat text-[9px] font-bold tracking-wider uppercase text-vintage-lightIvory">
              Details
            </span>
          </button>

          {/* Right: Round Portrait Card */}
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-vintage-antiqueGold shadow-vintage-glow">
              <img 
                src={data.photos.roundBadge} 
                alt="Couple" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </motion.div>

        {/* Bottom: Countdown Timer Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="pt-2"
        >
          <Countdown targetDate={data.weddingDate.isoDate} />
        </motion.div>

      </div>
    </section>
  );
}
