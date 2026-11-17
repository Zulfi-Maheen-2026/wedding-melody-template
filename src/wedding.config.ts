/**
 * ============================================================
 *  YOUR WEDDING DETAILS
 * ============================================================
 *  This is the ONLY file you need to change to make the website yours.
 *
 *  Rules for editing by hand:
 *   - Only change the text inside the quotes "like this".
 *   - Keep every quote mark, comma and bracket where it is.
 *   - Photos, video and music go in the "public" folder. Then write
 *     their path here starting with a slash, for example "/images/couple.jpg".
 *   - To hide something optional, set it to "" (empty quotes).
 *
 *  Easier option: ask Claude to do it for you. See GUIDE.md.
 * ============================================================
 */

export const wedding = {
  // ---------- The couple ----------
  couple: {
    partner1: "Zulficar",
    partner2: "Maheen",
  },

  // ---------- Date ----------
  // Short date shown on the big welcome screen and in the footer.
  date: "December 27, 2026",
  // Full date shown above the timeline.
  dateWithDay: "Sunday, December 27, 2026",

  // ---------- Welcome screen (top of the page) ----------
  hero: {
    // A small blessing or greeting shown above your names. Use "" to hide it.
    blessing: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    // A short quote shown below the date. Use "" to hide it.
    quote:
      "And He placed between you affection and mercy. — Surah Ar-Rum (30:21)",
    // Background video (MP4, under 5 MB is best). Use "" to show the image below instead.
    video: "",
    // Background image, used when there is no video.
    image: "/images/hero.svg",
  },

  // ---------- Logo (top left corner) ----------
  // Use "" to show the couple's initials automatically.
  logo: "",

  // ---------- Events timeline ----------
  // Add or remove events by copying or deleting a whole { ... } block.
  events: [
    {
      name: "Mehndi & Haldi Ceremony",
      time: "Date & time to be announced",
      description: "An evening of vibrant colors, cherished traditions, laughter, and beautiful memories as we celebrate the beginning of our wedding festivities.",
      image: "/images/mehndi.jpg",
    },
    {
      name: "Nikah & Baraat",
      time: "Sunday, December 27 · Time to be announced",
      description: "Two hearts, two families, and one sacred promise. Join us as Zulficar and Maheen unite in the blessed bond of Nikah.",
      image: "/images/nikah.jpg",
    },
    {
      name: "Walima Reception",
      time: "Tuesday, December 29 (tentative) · Time to be announced",
      description: "With gratitude to Almighty Allah, we invite you to celebrate our new beginning with an evening of togetherness, blessings, and joyful memories.",
      image: "/images/walima.jpg",
    },
  ],

  // ---------- Families ----------
  families: {
    sectionIntro: "With the blessings of Almighty Allah",
    // Add or remove family cards the same way as events.
    groups: [
      {
        title: "Groom's Parents",
        names: "Mr. Shakir Ahmed & Mrs. Jahanara Parvin",
        message: "request the honour of your presence at the wedding of their beloved son Zulficar Ali Ahmed with Maheen Khan",
        // Optional extra line inside the card, such as siblings. Use "" for both to hide it.
        extraTitle: "Sisters & Family",
        extraNames: "Mrs. Kaniz Fatima & Mr. Jamaluddin, Ms. Syada Bano",
      },
      {
        title: "Bride's Family",
        names: "The Family of Maheen Khan",
        message: "warmly invite you to witness and celebrate her blessed union with Zulficar Ali Ahmed",
        extraTitle: "",
        extraNames: "",
      },
    ],
    // Optional tribute to elders, with a photo. Set "names" to [] to hide this box.
    elders: {
      heading: "With duas and blessings from",
      names: [],
      photo: "/images/elders.svg",
    },
  },

  // ---------- Venue ----------
  venue: {
    name: "Officers' Association B.S.P. – Pragati Bhawan",
    addressLine1: "Civic Center Area, Sector 5 / Sector 6",
    addressLine2: "Bhilai, Chhattisgarh, India",
    // What to search on Google Maps to find the venue.
    // Tip: copy the exact venue name and city from Google Maps.
    mapSearch: "Officers Association BSP Pragati Bhawan, Bhilai",
  },

  // ---------- Footer (bottom of the page) ----------
  footer: {
    // Short line under the address. Use "" to hide it.
    blessingLine: "Two Souls, One Beautiful Destiny. United by Love, Blessed by Allah.",
  },

  // ---------- Background music ----------
  music: {
    // MP3 file in public/audio. Use "" to turn music off completely.
    file: "",
    // Volume from 0 (silent) to 1 (full).
    volume: 0.3,
    // Android phones block music until the guest taps. This welcome box asks them to tap.
    welcomeTitle: "Welcome to Zulficar & Maheen's Nikah",
    welcomeMessage: "Your presence, prayers, and blessings will make our celebration truly memorable.",
    welcomeButton: "Enter the Celebration",
  },

  // ---------- Link preview (WhatsApp, iMessage, social media) ----------
  share: {
    title: "Zulficar & Maheen | The Royal Nikah Celebration",
    description:
      "Join us in celebrating the Nikah of Zulficar & Maheen on December 27, 2026 in Bhilai.",
    // Image shown in the link preview. A 1200 x 630 JPG works best.
    image: "/images/share-preview.jpg",
  },
};

export type WeddingConfig = typeof wedding;
