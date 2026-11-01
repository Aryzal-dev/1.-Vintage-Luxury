import React from 'react';
import { motion } from 'framer-motion';
import { VintageLineArt, VintageDivider } from './FloralOrnament';
import { ExternalLink, CalendarPlus, Home } from 'lucide-react';

export default function EventDetails({ data }) {
  const scrollToHome = () => {
    const el = document.getElementById('home');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const openGoogleCalendar = () => {
    const startTime = "20271025T090000Z";
    const endTime = "20271025T220000Z";
    const title = encodeURIComponent(`The Wedding of ${data.groom.shortName} & ${data.bride.shortName}`);
    const details = encodeURIComponent("We joyfully invite you to celebrate our holy matrimony and wedding celebration at Willow Creek Estate.");
    const location = encodeURIComponent(data.events.venueAddress);
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
    window.open(url, '_blank');
  };

  return (
    <section id="details" className="relative min-h-screen bg-vintage-ivory text-vintage-darkChocolate py-12 px-4 sm:px-6 overflow-hidden flex flex-col justify-center items-center">
      {/* Vintage ribbon header decoration at top */}
      <div className="w-full max-w-md mx-auto mb-4 flex items-center justify-between px-2">
        <button
          onClick={scrollToHome}
          className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-vintage-antiqueGold/50 bg-[#EFE4D2]/80 text-vintage-darkChocolate hover:bg-[#E5D7C2] text-xs font-montserrat font-semibold tracking-wider transition-all"
        >
          <Home className="w-3.5 h-3.5 text-vintage-antiqueGold" />
          <span>BACK TO HOME</span>
        </button>

        {/* Wedding Rings Icon */}
        <div className="flex items-center space-x-1 text-vintage-antiqueGold">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="9" cy="12" r="5" />
            <circle cx="15" cy="12" r="5" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center text-center space-y-6">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-1"
        >
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold tracking-widest uppercase text-vintage-darkChocolate">
            KINDLY
          </h2>
          <p className="font-script text-2xl text-vintage-antiqueGold">
            Event Details & Itinerary
          </p>
          <VintageDivider className="my-1" />
        </motion.div>

        {/* 2x2 Grid with Vintage Line-Art Illustrations (matching panel 04) */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full text-center">
          
          {/* Card 1: Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-between p-3 rounded-2xl bg-white/70 border border-vintage-antiqueGold/30 shadow-sm"
          >
            <div className="flex flex-col items-center">
              <div className="text-vintage-darkChocolate mb-1">
                <VintageLineArt type="location" className="w-16 h-16 sm:w-20 sm:h-20" />
              </div>
              <h3 className="font-script text-2xl text-vintage-antiqueGold font-bold mt-1">
                Location
              </h3>
              <p className="font-cormorant text-sm text-vintage-darkChocolate/90 leading-snug mt-1 px-1">
                {data.events.summary.locationText}
              </p>
            </div>

            {/* View Address Capsule Button */}
            <div className="mt-3 w-full">
              <a
                href={data.events.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-1.5 px-3 py-1.5 rounded-full border border-vintage-antiqueGold bg-vintage-ivory hover:bg-vintage-darkChocolate hover:text-vintage-lightIvory text-vintage-darkChocolate transition-colors text-[10px] font-montserrat font-bold tracking-wider uppercase shadow-xs w-full"
              >
                <span>VIEW ADDRESS</span>
                <ExternalLink className="w-3 h-3 text-vintage-antiqueGold" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Date */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center justify-between p-3 rounded-2xl bg-white/70 border border-vintage-antiqueGold/30 shadow-sm"
          >
            <div className="flex flex-col items-center">
              <div className="text-vintage-darkChocolate mb-1">
                <VintageLineArt type="date" className="w-16 h-16 sm:w-20 sm:h-20" />
              </div>
              <h3 className="font-script text-2xl text-vintage-antiqueGold font-bold mt-1">
                Date
              </h3>
              <p className="font-cormorant text-sm text-vintage-darkChocolate/90 leading-snug mt-1 px-1">
                {data.events.summary.dateText}
              </p>
            </div>

            {/* Add to Calendar Button */}
            <div className="mt-3 w-full">
              <button
                onClick={openGoogleCalendar}
                className="inline-flex items-center justify-center space-x-1 px-3 py-1.5 rounded-full border border-vintage-antiqueGold/60 bg-vintage-ivory hover:bg-vintage-darkChocolate hover:text-vintage-lightIvory text-vintage-darkChocolate transition-colors text-[10px] font-montserrat font-bold tracking-wider uppercase shadow-xs w-full"
              >
                <span>SAVE DATE</span>
                <CalendarPlus className="w-3 h-3 text-vintage-antiqueGold" />
              </button>
            </div>
          </motion.div>

          {/* Card 3: Ceremony */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center justify-between p-3 rounded-2xl bg-white/70 border border-vintage-antiqueGold/30 shadow-sm"
          >
            <div className="flex flex-col items-center">
              <div className="text-vintage-darkChocolate mb-1">
                <VintageLineArt type="ceremony" className="w-16 h-16 sm:w-20 sm:h-20" />
              </div>
              <h3 className="font-script text-2xl text-vintage-antiqueGold font-bold mt-1">
                Ceremony
              </h3>
              <p className="font-montserrat text-[10px] font-bold text-vintage-mutedBrown tracking-wider mt-0.5">
                09:00 AM – 11:00 AM
              </p>
              <p className="font-cormorant text-sm text-vintage-darkChocolate/90 leading-snug mt-1 px-1">
                Our solemn holy matrimony will take place in the Glass Chapel where we seal our sacred vows.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Reception */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center justify-between p-3 rounded-2xl bg-white/70 border border-vintage-antiqueGold/30 shadow-sm"
          >
            <div className="flex flex-col items-center">
              <div className="text-vintage-darkChocolate mb-1">
                <VintageLineArt type="reception" className="w-16 h-16 sm:w-20 sm:h-20" />
              </div>
              <h3 className="font-script text-2xl text-vintage-antiqueGold font-bold mt-1">
                Reception
              </h3>
              <p className="font-montserrat text-[10px] font-bold text-vintage-mutedBrown tracking-wider mt-0.5">
                06:00 PM – 10:00 PM
              </p>
              <p className="font-cormorant text-sm text-vintage-darkChocolate/90 leading-snug mt-1 px-1">
                Please join us for an evening of romantic dinner, wine toasts, and celebratory banquet dancing.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
