import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function MusicPlayer({ musicData, autoPlayTrigger }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.log("Audio autoplay was restricted by browser policy:", err);
            setIsPlaying(false);
          });
      }
    }
  }, [autoPlayTrigger]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.log(e));
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 select-none">
      <audio
        ref={audioRef}
        src={musicData.url}
        loop
        preload="auto"
      />

      <button
        onClick={toggleMusic}
        title={isPlaying ? "Pause Background Music" : "Play Background Music"}
        className={`relative w-12 h-12 rounded-full border border-vintage-antiqueGold/70 shadow-vintage-glow flex items-center justify-center transition-all duration-300 ${
          isPlaying 
            ? 'bg-vintage-darkChocolate text-vintage-champagne' 
            : 'bg-vintage-espresso/90 text-vintage-softBeige/70'
        }`}
      >
        {/* Animated Rotating Vinyl Ring */}
        {isPlaying && (
          <div className="absolute inset-0 rounded-full border border-dashed border-vintage-champagne/40 animate-spin" style={{ animationDuration: '6s' }} />
        )}

        {/* Center Icon */}
        {isPlaying ? (
          <Volume2 className="w-5 h-5 animate-pulse" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}
