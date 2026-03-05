// CMS Default Data — seed values used when no localStorage data exists yet.
// All frontend components read from CMSContext which is initialized from this file.

const cmsDefaults = {
  // ─── Hero Section ─────────────────────────────────────────────
  hero: {
    headline: "Where Growth Meets",
    headlineAccent: "Connection",
    subtext:
      "A purpose-driven community for professionals, creators, and entrepreneurs fostering intentional growth through conversation and accountability",
    ctaPrimary: { label: "Join the Circle", url: "https://chat.whatsapp.com/IiEYrl55uAcFCQXwBXehg6" },
    ctaSecondary: { label: "Attend a Meetup", url: "/events" },
    images: [
      "/hero-bg.jpg",
      "/images/gallery/gallery1.jpg",
      "/images/gallery/gallery5.jpg",
      "/images/gallery/gallery6.jpg",
      "/images/gallery/gallery9.jpg",
    ],
  },

  // ─── Events ───────────────────────────────────────────────────
  events: [
    {
      id: "evt-1",
      type: "Mixer & Network",
      title: "Setting Goals: How To Set Goals That Actually Work In 2026",
      tagline: "Professional Breakfast Meet-Up",
      description: "A Professional and Networking Breakfast Meet-Up with Rev. Edward Agyekum Kufuor. Learn why your goals failed in 2025 and how to make them work in 2026.",
      location: "Pistachio Restaurant, Spintex — Accra",
      date: "February 2026",
      time: "9:30 AM - 12:00 PM",
      action: "Register Now",
      ctaUrl: "https://chat.whatsapp.com/IiEYrl55uAcFCQXwBXehg6",
      featured: true,
      image: "/feb-flyer.jpg",
      gallery: [
        "/feb-flyer.jpg",
        "/images/community/img2.jpg",
        "/images/community/img3.jpg",
        "/images/gallery/gallery1.jpg",
      ],
      videoUrl: "",
      whatYouGet: [
        "Top 10 Business Ideas in Ghana: Explore lucrative opportunities tailored for the Ghanaian market",
        "Zero to Hero: Launch your business with little to no capital",
        "First Paying Customer Guaranteed: Proven strategies to land your first client",
        "Hidden Capital: Discover untapped funding sources for your business",
        "Sell Faster, Stress Less: Implement proven sales systems for rapid growth",
        "Q&A Sessions: Get answers to your burning business questions",
      ],
      highlights: [
        "Expert insights and real-life case studies",
        "Practical tools and templates for immediate implementation",
        "Community support to connect with fellow entrepreneurs",
        "Actionable strategies for business growth and scaling",
      ],
      whoShouldJoin: [
        "Aspiring entrepreneurs looking for a business idea",
        "Small business owners seeking to scale",
        "Anyone wanting to turn their passion into profit",
      ],
    },
    {
      id: "evt-2",
      type: "Talk Series",
      title: "How To Build Wealth [FAST] In 2026",
      tagline: "Financial Growth Masterclass",
      description: "Discover proven strategies to accelerate your financial growth and build sustainable wealth in the new economy.",
      location: "Pistachio Restaurant, Spintex — Accra",
      date: "March 2026",
      time: "8:00 AM - 9:30 AM",
      action: "RSVP",
      ctaUrl: "https://chat.whatsapp.com/IiEYrl55uAcFCQXwBXehg6",
      featured: false,
      image: "/images/community/img3.jpg",
      gallery: ["/images/community/img3.jpg", "/images/community/img4.jpg"],
      videoUrl: "",
      whatYouGet: [
        "Top wealth-building strategies tailored for the Ghanaian market",
        "Zero to wealth — starting from scratch with little capital",
        "Hidden investment vehicles most people overlook",
        "Networking with Accra's top financial minds",
      ],
      highlights: [
        "Expert speakers with proven wealth track records",
        "Interactive panel discussion & live Q&A",
        "Take-home investment blueprint",
      ],
      whoShouldJoin: [
        "Young professionals wanting to start investing",
        "Entrepreneurs looking to diversify their income",
        "Anyone serious about financial freedom",
      ],
    },
    {
      id: "evt-3",
      type: "Master Class",
      title: "Career Pivot Workshop",
      tagline: "Reinvent Your Professional Path",
      description: "A guided workshop to help you map out your next big career move with clarity, confidence, and community.",
      location: "Pistachio Restaurant, Spintex — Accra",
      date: "April 2026",
      time: "6:00 PM - 8:00 PM",
      action: "Register",
      ctaUrl: "https://chat.whatsapp.com/IiEYrl55uAcFCQXwBXehg6",
      featured: false,
      image: "/images/community/img2.jpg",
      gallery: ["/images/community/img2.jpg", "/images/community/img5.jpg"],
      videoUrl: "",
      whatYouGet: [
        "A personalized career pivot roadmap",
        "How to leverage your existing skills in a new industry",
        "Scripts for cold-outreach and landing new opportunities",
        "Peer feedback on your transition plan",
      ],
      highlights: [
        "Hands-on workshop format — not just theory",
        "One-on-one coaching moments with facilitators",
        "Practical tools and templates to accelerate your transition",
      ],
      whoShouldJoin: [
        "Professionals feeling stuck or unfulfilled in their current role",
        "Those exploring entirely new industries or entrepreneurship",
        "Anyone ready to bet on themselves",
      ],
    },
  ],

  // ─── Speakers ─────────────────────────────────────────────────
  speakers: [
    {
      id: "spk-1",
      name: "Rev. Edward Agyekum Kufuor",
      role: "Guest Speaker",
      image: "/images/speakers/rev-edward.png",
    },
    {
      id: "spk-2",
      name: "Mr. Solomon Mensah",
      role: "Guest Speaker",
      image: "/images/speakers/solomon-mensah.png",
    },
    {
      id: "spk-3",
      name: "Mr. Courage Mensah",
      role: "Guest Speaker",
      image: "/images/speakers/solomon-owusu.png",
    },
    {
      id: "spk-4",
      name: "Mr. James Kliffin",
      role: "Co-Founder",
      image: "/images/speakers/james-kliffin.png",
    },
    {
      id: "spk-5",
      name: "Mr. Philip O. Agyemang",
      role: "Co-Founder",
      image: "/images/speakers/philip-agyemang.png",
    },
  ],

  // ─── Testimonials ─────────────────────────────────────────────
  testimonials: [
    {
      id: "tst-1",
      quote:
        "I felt completely stuck in my career. Joining The Growth Circle gave me the accountability I needed to finally launch my own Agency. The people here genuinely care.",
      name: "Mr. Courage Mensah",
      role: "Entrepreneur",
      image: "/images/speakers/courage-mensah.jpg",
    },
    {
      id: "tst-2",
      quote:
        "The curated meetups are unlike any other networking event I've attended. No fluff, just deep conversations and actionable advice. It's been a game changer.",
      name: "Mr. James Kliffin",
      role: "Co-Founder & CEO",
      image: "/images/speakers/james-kliffin.png",
    },
  ],

  // ─── Membership Benefits ──────────────────────────────────────
  membership: {
    tagline: "Premium Access",
    headline: "Why Become a Member?",
    subtext:
      "Unlock a world of opportunities designed to accelerate your personal and professional growth. It's more than a membership; it's a partnership for your success.",
    benefits: [
      {
        id: "ben-1",
        icon: "Calendar",
        title: "Curated Meetups",
        description: "Monthly gatherings focused on key topics and authentic connection.",
      },
      {
        id: "ben-2",
        icon: "Users",
        title: "Accountability Pods",
        description: "Small, dedicated groups to help you set and crush your quarterly goals.",
      },
      {
        id: "ben-3",
        icon: "Library",
        title: "Resource Library",
        description: "Exclusive access to recorded talks, templates, and career guides.",
      },
      {
        id: "ben-4",
        icon: "MessageSquare",
        title: "Private Community",
        description: "24/7 access to members, diverse for quick feedback and support.",
      },
    ],
  },

  // ─── Site Settings ────────────────────────────────────────────
  settings: {
    siteName: "The Growth Circle",
    whatsappLink: "https://chat.whatsapp.com/IiEYrl55uAcFCQXwBXehg6",
    footerDescription:
      "Fostering intentional growth through personal connection, mentorship, and accountability for the modern professional.",
    socialLinks: {
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
    adminPassword: "growthcircle2026",
  },
};

export default cmsDefaults;
