import React, { useState } from 'react';
import { INVITATION_DATA } from './data/invitationData';
import WeddingLayout from './layouts/WeddingLayout';
import EnvelopeCover from './components/EnvelopeCover';
import WeddingHero from './components/WeddingHero';
import LoveStory from './components/LoveStory';
import EventDetails from './components/EventDetails';
import RSVPForm from './components/RSVPForm';
import WeddingGallery from './components/WeddingGallery';
import WeddingGift from './components/WeddingGift';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [shouldPlayMusic, setShouldPlayMusic] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    setShouldPlayMusic(true);
  };

  return (
    <>
      {/* SECTION 01 — COVER PAGE (Vintage Envelope & Wax Seal) */}
      <EnvelopeCover 
        data={INVITATION_DATA} 
        isOpened={isOpened} 
        onOpen={handleOpenInvitation} 
      />

      {/* MAIN INVITATION CONTENT (Revealed upon opening) */}
      <WeddingLayout>
        {/* SECTION 02 — HOME PAGE (Collage, Names, Date, Nav, Countdown) */}
        <WeddingHero data={INVITATION_DATA} />

        {/* SECTION 03 — OUR LOVE STORY (Editorial Milestones) */}
        <LoveStory data={INVITATION_DATA} />

        {/* SECTION 04 — EVENT DETAILS (Vintage Line Art & Venue Details) */}
        <EventDetails data={INVITATION_DATA} />

        {/* SECTION 05 — RSVP PAGE (Luxury Dark Chocolate Card & Form) */}
        <RSVPForm data={INVITATION_DATA} />

        {/* SECTION 06 — OUR GALLERY (Editorial Photography & Lightbox) */}
        <WeddingGallery data={INVITATION_DATA} />

        {/* DIGITAL WEDDING GIFT (Rekening / Digital Envelope) */}
        <WeddingGift data={INVITATION_DATA} />

        {/* FOOTER & BRANDING (dipernikahankita) */}
        <Footer data={INVITATION_DATA} />

        {/* FLOATING AUDIO CONTROLLER */}
        <MusicPlayer 
          musicData={INVITATION_DATA.music} 
          autoPlayTrigger={shouldPlayMusic} 
        />
      </WeddingLayout>
    </>
  );
}
