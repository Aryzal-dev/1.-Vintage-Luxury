// =======================================================================
// INVITATION DATA CONFIGURATION - VINTAGE LUXURY WEDDING
// Template: dipernikahankita - Vintage Romantic Edition
// All event & couple data is decoupled here for easy customization
// =======================================================================

export const INVITATION_DATA = {
  // General Info & Meta
  title: "The Wedding of Anthony & Charlotte",
  subtitle: "A Beautiful Beginning Awaits",
  tagline: "Every love tale is a forever",
  
  // Couple Profile
  groom: {
    fullName: "Arisal",
    shortName: "Arisal",
    title: "S.T., M.Sc.",
    father: "Mr. William Harrison",
    mother: "Mrs. Eleanor Harrison",
    instagram: "https://instagram.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
  },
  bride: {
    fullName: "Yuspa",
    shortName: "Yuspa",
    title: "B.A., M.Des.",
    father: "Mr. Arthur Montgomery",
    mother: "Mrs. Evelyn Montgomery",
    instagram: "https://instagram.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
  },

  // Wedding Date & Target for Countdown
  weddingDate: {
    display: "Monday, October 25, 2027",
    shortDisplay: "25 OCTOBER 2027",
    dayName: "Monday",
    day: "25",
    month: "October",
    year: "2027",
    // Target date ISO for countdown timer (configured into the future)
    isoDate: "2027-10-25T09:00:00+07:00",
    rsvpDeadline: "JULY 15, 2027"
  },

  // Hero / Couple Featured Images (Authentic vintage luxury wedding aesthetic)
  photos: {
    archPortrait: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85",
    coverCouple: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=85",
    storyStrip1: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    storyStrip2: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
    storyStrip3: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
    roundBadge: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80"
  },

  // Love Story Milestones (Section 03)
  loveStory: {
    heading: "OUR LOVE STORY",
    subtitle: "Every love tale is a forever",
    quoteHeading: "Every chapter, written with love",
    introText: "We started as a chance meeting, grew into best friends and a lifetime, forever side by side. We knew from our very first hello that our souls had found their home.",
    closingText: "We've celebrated victories, supported each other through challenges, and found countless little reasons to fall even more in love every single day.",
    milestones: [
      {
        id: 1,
        title: "THE FIRST MEETING",
        date: "May 7, 2020",
        location: "St. James Library Cafe",
        image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
        description: "An unexpected encounter on a rainy autumn afternoon over coffee and shared books sparked our lifelong connection."
      },
      {
        id: 2,
        title: "FIRST DATE",
        date: "August 14, 2020",
        location: "Botanical Garden Conservatory",
        image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80",
        description: "Walking hand in hand through the garden paths under twilight, talking endlessly until the stars filled the sky."
      },
      {
        id: 3,
        title: "THE PROPOSAL",
        date: "June 9, 2023",
        location: "Sunset Cliffs, California",
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
        description: "As golden sunlight touched the Pacific Ocean, Anthony got down on one knee, and Charlotte answered with an eternal 'Yes!'."
      }
    ]
  },

  // Event Details (Section 04)
  events: {
    heading: "KINDLY",
    venueName: "Willow Creek Estate",
    venueAddress: "Willow Creek Estate, 4500 Skyline Blvd, San Francisco, CA 94132",
    googleMapsUrl: "https://maps.google.com/?q=San+Francisco+CA",
    summary: {
      locationText: "Our wedding will be held in Willow Creek Estate, San Francisco, CA",
      dateText: "Join us on October 25, 2027, as we celebrate our wedding with the people we love most."
    },
    items: [
      {
        id: "ceremony",
        badge: "HOLY MATRIMONY",
        title: "Akad Nikah Ceremony",
        date: "Monday, October 25, 2027",
        time: "09:00 WITA - 11:00 AM WITA",
        location: "The Glass Conservatory, Willow Creek Estate",
        description: "Our solemn ceremony will take place in the historical glass chapel surrounded by family and close friends.",
        dressCode: "Vintage Formal / Earth Tones & Champagne Gold"
      },
      {
        id: "reception",
        badge: "WEDDING CELEBRATION",
        title: "Resepsi Pernikahan",
        date: "Monday, October 25, 2027",
        time: "06:00 WITA - 10:00 PM WITA",
        location: "The Grand Ballroom, Willow Creek Estate",
        description: "Please join us for an evening of romantic dinner, wine toasts, live acoustic symphony, and celebratory dancing.",
        dressCode: "Black Tie / Vintage Glamour"
      }
    ]
  },

  // Wedding Gallery (Section 06)
  gallery: {
    heading: "OUR GALLERY",
    subtitle: "A GLIMPSE OF OUR LOVE",
    footerQuote: "EVERY PICTURE REMINDS US",
    footerScript: "how lucky we are.",
    images: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
        caption: "A timeless promise whispered in the afternoon breeze",
        aspect: "aspect-[4/3]"
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=85",
        caption: "Shared smiles beneath cathedral arches",
        aspect: "aspect-[3/4]"
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=85",
        caption: "Two souls walking in harmony",
        aspect: "aspect-[3/4]"
      },
      {
        id: 4,
        url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=85",
        caption: "Laughter that makes eternity feel like a moment",
        aspect: "aspect-[3/4]"
      },
      {
        id: 5,
        url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=85",
        caption: "The gentle warmth of your hand in mine",
        aspect: "aspect-[3/4]"
      },
      {
        id: 6,
        url: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1200&q=85",
        caption: "Into forever, hand in hand and heart with heart",
        aspect: "aspect-[16/9]"
      }
    ]
  },

  // Wedding Gift / Digital Envelope (Wedding Angpao / Registry)
  weddingGifts: [
    {
      bank: "BCA",
      accountNumber: "8830192831",
      accountName: "Anthony William Harrison",
      logo: "BCA"
    },
    {
      bank: "Bank Mandiri",
      accountNumber: "1370019283741",
      accountName: "Charlotte Audrey Montgomery",
      logo: "MANDIRI"
    }
  ],

  // Background Music
  music: {
    title: "Canon in D (Romantic Piano & Strings)",
    artist: "Vintage Classical Ensemble",
    // Royalty free wedding piano instrumental audio
    url: "https://cdn.pixabay.com/download/audio/2022/05/16/audio_db6591201e.mp3?filename=romantic-wedding-piano-112191.mp3"
  },

  // RSVP Configuration
  rsvp: {
    deadline: "July 15, 2027",
    attendOptions: [
      { label: "Joyfully Accepts", value: "attending" },
      { label: "Regretfully Declines", value: "declining" }
    ],
    maxGuests: 4
  },

  // Brand and Credits
  branding: {
    brandName: "dipernikahankita",
    website: "https://di.pernikahankita.com",
    tagline: "Premium Digital Wedding Invitations"
  }
};
