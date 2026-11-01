import React from 'react';
import { motion } from 'framer-motion';
import { VintageDivider, VintageSwirlDivider } from './FloralOrnament';

export default function LoveStory({ data }) {
  const story = data.loveStory;

  return (
    <section id="story" className="relative min-h-screen bg-vintage-ivory text-vintage-darkChocolate py-16 px-4 sm:px-6 overflow-hidden flex flex-col justify-center items-center">
      {/* Subtle vintage parchment texture and paper gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/60 via-vintage-ivory to-[#EFE4D2] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center text-center space-y-7">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-1"
        >
          <span className="font-montserrat text-[11px] tracking-[0.3em] uppercase text-vintage-mutedBrown font-semibold block">
            OUR
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold tracking-wider text-vintage-darkChocolate">
            LOVE STORY
          </h2>
          <p className="font-script text-2xl sm:text-3xl text-vintage-antiqueGold pt-1">
            {story.subtitle}
          </p>
          <VintageDivider className="my-2" />
        </motion.div>

        {/* 3 Polaroid / Framed Milestones in a Row (matching panel 03) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-3 gap-2 sm:gap-3 w-full"
        >
          {story.milestones.map((item, index) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-2 rounded-xl shadow-md border border-vintage-softBeige/90 flex flex-col items-center group"
            >
              {/* Photo Frame */}
              <div className="w-full aspect-[4/5] rounded-lg overflow-hidden bg-vintage-softBeige mb-2 border border-vintage-softBeige/60">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title & Date */}
              <span className="font-montserrat text-[8px] sm:text-[9px] font-bold tracking-wider uppercase text-vintage-darkChocolate leading-tight">
                {item.title}
              </span>
              <span className="font-cormorant text-[11px] sm:text-xs text-vintage-mutedBrown italic mt-0.5">
                {item.date}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Editorial Narrative Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-sm space-y-4 pt-2"
        >
          {/* Editorial Quote Header */}
          <h3 className="font-playfair text-xl sm:text-2xl italic font-medium text-vintage-antiqueGold">
            {story.quoteHeading}
          </h3>

          {/* Body Paragraph 1 */}
          <p className="font-cormorant text-base sm:text-lg leading-relaxed text-vintage-darkChocolate/90 px-2 font-normal">
            "{story.introText}"
          </p>

          {/* Gold Heart / Flourish Divider */}
          <div className="flex items-center justify-center space-x-2 py-1 text-vintage-champagne">
            <span className="h-[1px] w-12 bg-vintage-antiqueGold/40" />
            <span className="text-sm">♥</span>
            <span className="h-[1px] w-12 bg-vintage-antiqueGold/40" />
          </div>

          {/* Body Paragraph 2 */}
          <p className="font-cormorant text-base sm:text-lg leading-relaxed text-vintage-darkChocolate/90 px-2 font-normal">
            "{story.closingText}"
          </p>

          <VintageSwirlDivider className="pt-2" />
        </motion.div>

      </div>
    </section>
  );
}
