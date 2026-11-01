import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { VintageFloralBouquet, VintageDivider, WaxSeal } from './FloralOrnament';
import { Send, CheckCircle2, User, Phone, MessageSquare, Users, Sparkles } from 'lucide-react';

export default function RSVPForm({ data }) {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    attendance: 'attending',
    guests: '1',
    wishes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [wishesList, setWishesList] = useState([
    {
      name: "Arthur & Evelyn",
      attendance: "attending",
      guests: "2",
      wishes: "Wishing you both a lifetime of eternal love, happiness, and abundant blessings!",
      time: "2 hours ago"
    },
    {
      name: "Claire de Lune",
      attendance: "attending",
      guests: "1",
      wishes: "So delighted for you two! Can't wait to witness this beautiful day in San Francisco.",
      time: "Yesterday"
    }
  ]);

  // Load stored RSVP submissions from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('wedding_rsvp_wishes');
      if (saved) {
        setWishesList(JSON.parse(saved));
      }
    } catch (e) {
      // fallback
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    setIsSubmitting(true);

    // Simulate API call & save to localStorage
    setTimeout(() => {
      const newEntry = {
        name: formData.name.trim(),
        attendance: formData.attendance,
        guests: formData.guests,
        wishes: formData.wishes.trim() || "Warmest congratulations and best wishes for your marriage!",
        time: "Just now"
      };

      const updated = [newEntry, ...wishesList];
      setWishesList(updated);
      try {
        localStorage.setItem('wedding_rsvp_wishes', JSON.stringify(updated));
      } catch (err) {
        // safe
      }

      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#C5A46D', '#A78650', '#872935', '#E6D3A3']
        });
      } catch (err) {}
    }, 700);
  };

  return (
    <section id="rsvp" className="relative min-h-screen bg-vintage-darkChocolate text-vintage-lightIvory py-16 px-4 sm:px-6 overflow-hidden flex flex-col justify-center items-center">
      {/* Background vignette & texture */}
      <div className="absolute inset-0 bg-vintage-texture pointer-events-none" />

      {/* Dried Floral Corner Accents */}
      <VintageFloralBouquet className="absolute -top-6 -left-6 w-36 h-36 sm:w-44 sm:h-44 z-10 opacity-70" />
      <VintageFloralBouquet className="absolute -bottom-6 -right-6 w-36 h-36 sm:w-44 sm:h-44 z-10 opacity-70" flipX flipY />

      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center space-y-6">
        
        {/* Title Header: KINDLY RSVP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-1"
        >
          <span className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-vintage-champagne font-semibold block">
            KINDLY
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold tracking-widest text-vintage-goldHighlight">
            RSVP
          </h2>
          <VintageDivider light className="my-1" />
          <p className="font-montserrat text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-vintage-softBeige/80">
            WE HOPE YOU CAN JOIN US
          </p>
        </motion.div>

        {/* Envelope Top Flap with RSVP Deadline Note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full relative rounded-2xl overflow-hidden border border-vintage-antiqueGold/60 shadow-vintage-card"
          style={{
            background: 'linear-gradient(160deg, #442A1C 0%, #29180E 100%)'
          }}
        >
          {/* Inner Card peaking out */}
          <div className="p-4 sm:p-5 text-center flex flex-col items-center border-b border-vintage-antiqueGold/30 bg-[#341F14]/70">
            <span className="font-script text-2xl sm:text-3xl text-vintage-champagne leading-snug">
              Please Respond By
            </span>
            <span className="font-montserrat text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-vintage-lightIvory mt-0.5">
              {data.weddingDate.rsvpDeadline || "JULY 15, 2027"}
            </span>

            {/* Wax Seal Stamp */}
            <div className="mt-3">
              <WaxSeal text="RSVP" size="sm" />
            </div>
          </div>

          {/* Warm Ivory Form Body (Matching Panel 05) */}
          <div className="bg-vintage-lightIvory text-vintage-darkChocolate p-5 sm:p-6">
            <div className="text-center mb-5">
              <h3 className="font-playfair text-2xl font-bold text-vintage-darkChocolate">
                You're Invited
              </h3>
              <p className="font-cormorant italic text-sm text-vintage-mutedBrown">
                Please complete the form below to confirm your presence
              </p>
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="rsvp-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-6 px-4 space-y-3"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-playfair text-xl font-bold text-vintage-darkChocolate">
                    Thank You, {formData.name}!
                  </h4>
                  <p className="font-cormorant text-base text-vintage-mutedBrown">
                    {formData.attendance === 'attending' 
                      ? `Your RSVP for ${formData.guests} guest(s) has been recorded. We eagerly look forward to celebrating with you!`
                      : `Your response has been recorded. Thank you for your warm thoughts and prayers for our new beginning.`
                    }
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        whatsapp: '',
                        attendance: 'attending',
                        guests: '1',
                        wishes: '',
                      });
                    }}
                    className="mt-4 px-4 py-1.5 rounded-full border border-vintage-antiqueGold text-xs font-montserrat font-semibold tracking-wider uppercase text-vintage-darkChocolate hover:bg-vintage-ivory transition-colors"
                  >
                    Send Another Response
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="rsvp-form-fields"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Field 1: Name */}
                  <div className="space-y-1">
                    <label className="font-montserrat text-[11px] font-bold uppercase tracking-wider text-vintage-darkChocolate flex items-center space-x-1.5">
                      <User className="w-3.5 h-3.5 text-vintage-antiqueGold" />
                      <span>Your Full Name <span className="text-red-700">*</span></span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-vintage-softBeige bg-white text-sm text-vintage-darkChocolate placeholder-vintage-mutedBrown/50 focus:outline-none focus:ring-1 focus:ring-vintage-antiqueGold focus:border-vintage-antiqueGold"
                    />
                  </div>

                  {/* Field 2: WhatsApp (Optional) */}
                  <div className="space-y-1">
                    <label className="font-montserrat text-[11px] font-bold uppercase tracking-wider text-vintage-darkChocolate flex items-center space-x-1.5">
                      <Phone className="w-3.5 h-3.5 text-vintage-antiqueGold" />
                      <span>WhatsApp Number (Optional)</span>
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      placeholder="e.g. +1 555-0199 or 08123456789"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-vintage-softBeige bg-white text-sm text-vintage-darkChocolate placeholder-vintage-mutedBrown/50 focus:outline-none focus:ring-1 focus:ring-vintage-antiqueGold focus:border-vintage-antiqueGold"
                    />
                  </div>

                  {/* Field 3: Attendance Radio Option (Joyfully accepts / Regretfully declines) */}
                  <div className="space-y-1.5 pt-1">
                    <label className="font-montserrat text-[11px] font-bold uppercase tracking-wider text-vintage-darkChocolate block">
                      Will you be attending our wedding? <span className="text-red-700">*</span>
                    </label>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <label 
                        className={`flex items-center justify-center space-x-2 p-2.5 rounded-xl border cursor-pointer text-xs font-montserrat transition-all ${
                          formData.attendance === 'attending'
                            ? 'border-vintage-antiqueGold bg-[#FAF0E1] font-bold text-vintage-darkChocolate shadow-xs'
                            : 'border-vintage-softBeige bg-white text-vintage-mutedBrown hover:bg-neutral-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="attendance"
                          value="attending"
                          checked={formData.attendance === 'attending'}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span className="font-script text-base text-vintage-antiqueGold">Joyfully</span>
                        <span className="text-[10px] tracking-wider uppercase">Accepts</span>
                      </label>

                      <label 
                        className={`flex items-center justify-center space-x-2 p-2.5 rounded-xl border cursor-pointer text-xs font-montserrat transition-all ${
                          formData.attendance === 'declining'
                            ? 'border-vintage-antiqueGold bg-[#FAF0E1] font-bold text-vintage-darkChocolate shadow-xs'
                            : 'border-vintage-softBeige bg-white text-vintage-mutedBrown hover:bg-neutral-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="attendance"
                          value="declining"
                          checked={formData.attendance === 'declining'}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span className="font-script text-base text-vintage-antiqueGold">Regretfully</span>
                        <span className="text-[10px] tracking-wider uppercase">Declines</span>
                      </label>
                    </div>
                  </div>

                  {/* Field 4: Number of Guests */}
                  {formData.attendance === 'attending' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-1 pt-1"
                    >
                      <label className="font-montserrat text-[11px] font-bold uppercase tracking-wider text-vintage-darkChocolate flex items-center space-x-1.5">
                        <Users className="w-3.5 h-3.5 text-vintage-antiqueGold" />
                        <span>Number of Guests Attending</span>
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-vintage-softBeige bg-white text-sm text-vintage-darkChocolate focus:outline-none focus:ring-1 focus:ring-vintage-antiqueGold"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons</option>
                        <option value="3">3 Persons</option>
                        <option value="4">4 Persons</option>
                      </select>
                    </motion.div>
                  )}

                  {/* Field 5: Wishes & Prayers */}
                  <div className="space-y-1">
                    <label className="font-montserrat text-[11px] font-bold uppercase tracking-wider text-vintage-darkChocolate flex items-center space-x-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-vintage-antiqueGold" />
                      <span>Wishes for the Couple</span>
                    </label>
                    <textarea
                      name="wishes"
                      rows={3}
                      placeholder="Write your heartfelt blessing and prayers..."
                      value={formData.wishes}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2 rounded-xl border border-vintage-softBeige bg-white text-sm text-vintage-darkChocolate placeholder-vintage-mutedBrown/50 focus:outline-none focus:ring-1 focus:ring-vintage-antiqueGold"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-3 px-4 rounded-xl font-montserrat text-xs font-bold uppercase tracking-[0.2em] text-vintage-lightIvory shadow-md transition-all duration-300 flex items-center justify-center space-x-2"
                    style={{
                      background: 'linear-gradient(135deg, #3B2519 0%, #26160E 100%)',
                      border: '1px solid rgba(197, 164, 109, 0.5)'
                    }}
                  >
                    <span>{isSubmitting ? "CONFIRMING..." : "SUBMIT RSVP"}</span>
                    <Send className="w-3.5 h-3.5 text-vintage-champagne" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Wishes & Prayers Carousel / Feed */}
        {wishesList.length > 0 && (
          <div className="w-full pt-4 space-y-3">
            <div className="flex items-center justify-center space-x-2 text-vintage-champagne">
              <Sparkles className="w-3.5 h-3.5" />
              <h4 className="font-playfair text-sm uppercase tracking-widest text-vintage-goldHighlight">
                Wedding Wishes & Blessings
              </h4>
              <Sparkles className="w-3.5 h-3.5" />
            </div>

            <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
              {wishesList.map((item, idx) => (
                <div 
                  key={idx}
                  className="rounded-xl border border-vintage-antiqueGold/30 bg-[#2C1A10]/90 p-3 text-left space-y-1 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-montserrat text-xs font-bold text-vintage-goldHighlight">
                      {item.name}
                    </span>
                    <span className="text-[10px] text-vintage-softBeige/60 font-montserrat">
                      {item.time}
                    </span>
                  </div>
                  <p className="font-cormorant italic text-sm text-vintage-lightIvory/90 leading-snug">
                    "{item.wishes}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
