import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VintageDivider } from './FloralOrnament';
import { Gift, Copy, Check, CreditCard } from 'lucide-react';

export default function WeddingGift({ data }) {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [showGiftModal, setShowGiftModal] = useState(false);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  return (
    <section className="relative bg-vintage-ivory text-vintage-darkChocolate py-12 px-4 sm:px-6 overflow-hidden flex flex-col justify-center items-center border-t border-vintage-softBeige">
      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center text-center space-y-5">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-1"
        >
          <div className="w-12 h-12 mx-auto rounded-full bg-vintage-softBeige/70 flex items-center justify-center text-vintage-antiqueGold mb-2 shadow-sm">
            <Gift className="w-6 h-6" />
          </div>
          <h3 className="font-playfair text-2xl sm:text-3xl font-bold tracking-wider text-vintage-darkChocolate">
            WEDDING GIFT
          </h3>
          <p className="font-cormorant italic text-sm text-vintage-mutedBrown max-w-xs mx-auto">
            Your blessing and presence are the greatest gifts of all. If you wish to send a gift, we provide this digital envelope.
          </p>
          <VintageDivider className="my-1" />
        </motion.div>

        {/* Bank Account Cards */}
        <div className="w-full space-y-3">
          {data.weddingGifts.map((gift, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative p-4 rounded-2xl border border-vintage-antiqueGold/40 bg-white shadow-sm flex items-center justify-between text-left group"
            >
              <div className="space-y-0.5">
                <div className="flex items-center space-x-2">
                  <CreditCard className="w-4 h-4 text-vintage-antiqueGold" />
                  <span className="font-montserrat text-xs font-bold tracking-wider text-vintage-darkChocolate uppercase">
                    {gift.bank}
                  </span>
                </div>
                <p className="font-mono text-base font-semibold tracking-wider text-vintage-darkChocolate">
                  {gift.accountNumber}
                </p>
                <p className="font-cormorant text-xs text-vintage-mutedBrown italic">
                  a.n. {gift.accountName}
                </p>
              </div>

              {/* Copy Button */}
              <button
                onClick={() => handleCopy(gift.accountNumber, idx)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-xl text-xs font-montserrat font-semibold transition-all ${
                  copiedIndex === idx
                    ? 'bg-emerald-600 text-white'
                    : 'bg-vintage-ivory hover:bg-vintage-softBeige text-vintage-darkChocolate border border-vintage-softBeige'
                }`}
              >
                {copiedIndex === idx ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-vintage-antiqueGold" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
