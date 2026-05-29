// ────────────────────────────────────────────────────────────────
// EDIT THIS FILE TO PERSONALIZE YOUR LANDING PAGE
// Almost every text change you'll want to make lives here.
// You don't need to touch the components — they read from this file.
// ────────────────────────────────────────────────────────────────

export const business = {
  name: "Casa Foque · Lanzarote",
  shortName: "Casa Foque",
  tagline: "Holiday home rental in Playa Honda, Lanzarote.",
};

export const nav = {
  links: [
    { label: "The property", href: "#services" },
    { label: "Neighbourhood", href: "#neighbourhood" },
    { label: "How to book", href: "#how" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  ctaLabel: "Check availability",
  ctaHref: "#contact",
};

export const hero = {
  eyebrow: "Playa Honda · Lanzarote · Canary Islands",
  heading: "Your own corner of Lanzarote, by the week.",
  subheading:
    "A comfortable holiday home in the heart of Playa Honda — steps from the beach, minutes from Puerto del Carmen, and a short drive from everything the island has to offer. Available for stays of 1 to 4 weeks.",
  ctaPrimary: { label: "Check availability", href: "#contact" },
  ctaSecondary: { label: "See the neighbourhood", href: "#neighbourhood" },
};

export const services = {
  heading: "The property",
  intro: "Calle Foque 31 — everything you need for a relaxed, sun-filled stay.",
  items: [
    {
      title: "Outdoor living",
      summary:
        "Private terrace with sun loungers, outdoor dining, and a BBQ. Lanzarote gets over 300 sunny days a year — the terrace is where you'll spend most of them.",
    },
    {
      title: "Fully equipped kitchen",
      summary:
        "Full-size fridge, oven, hob, and all the cookware you need. A washing machine is included too. There's a supermarket within easy walking distance for your weekly shop.",
    },
    {
      title: "Comfortable and connected",
      summary:
        "Air-conditioned bedrooms, fast Wi-Fi throughout, and a television in the living room. Off-street parking is included at no extra cost.",
    },
  ],
};

export const neighbourhood = {
  heading: "What's nearby",
  intro:
    "Playa Honda sits between Arrecife and Puerto del Carmen — a central, residential spot with easy access to the whole island.",
  items: [
    {
      name: "Playa Honda Beach",
      distance: "10 min walk",
      summary:
        "A long sandy beach popular with locals. Calmer and less crowded than the tourist beaches further south, with a beach bar and lifeguards in season.",
      image: "/neighbourhood/playa-honda.jpg",
      mapUrl: "https://www.google.com/maps/search/Playa+Honda+Beach,+Lanzarote",
    },
    {
      name: "Puerto del Carmen",
      distance: "5 min by car",
      summary:
        "Lanzarote's liveliest resort town. Dozens of restaurants, beach bars, water sports hire, and a buzzing seafront promenade. Great for an evening out.",
      image: "/neighbourhood/puerto-del-carmen.jpg",
      mapUrl: "https://www.google.com/maps/search/Puerto+del+Carmen,+Lanzarote",
    },
    {
      name: "Arrecife",
      distance: "10 min by car",
      summary:
        "The island capital. Weekly market, local shops, the Castillo de San Gabriel fortress, and the pretty Charco de San Ginés lagoon make it worth an afternoon visit.",
      image: "/neighbourhood/arrecife.jpg",
      mapUrl: "https://www.google.com/maps/search/Arrecife,+Lanzarote",
    },
    {
      name: "César Manrique Foundation",
      distance: "20 min by car",
      summary:
        "The home and studio of the artist who shaped the look of modern Lanzarote — built inside five volcanic lava bubbles. One of the most unusual houses you'll ever visit.",
      image: "/neighbourhood/manrique.jpg",
      mapUrl: "https://www.google.com/maps/search/Fundacion+Cesar+Manrique,+Lanzarote",
    },
    {
      name: "La Geria Wine Region",
      distance: "30 min by car",
      summary:
        "Unique vineyards where Malvasía grapes grow in individual volcanic craters ringed by low stone walls. Several bodegas offer free tastings of the local white wine.",
      image: "/neighbourhood/la-geria.jpg",
      mapUrl: "https://www.google.com/maps/search/La+Geria,+Lanzarote",
    },
    {
      name: "Timanfaya National Park",
      distance: "35 min by car",
      summary:
        "One of Europe's most dramatic volcanic landscapes. A guided bus tour winds through ancient lava fields and geysers still vent steam from the ground. Unmissable.",
      image: "/neighbourhood/timanfaya.jpg",
      mapUrl: "https://www.google.com/maps/search/Timanfaya+National+Park,+Lanzarote",
    },
    {
      name: "Papagayo Beaches",
      distance: "40 min by car",
      summary:
        "A string of sheltered coves with crystal-clear turquoise water inside a nature reserve. Some of the best swimming on the island — go early to beat the crowds.",
      image: "/neighbourhood/papagayo.jpg",
      mapUrl: "https://www.google.com/maps/search/Playa+Papagayo,+Lanzarote",
    },
    {
      name: "Jameos del Agua",
      distance: "45 min by car",
      summary:
        "A spectacular volcanic cave turned arts venue by César Manrique. Home to the endemic blind cave crab found nowhere else on Earth, and beautiful gardens above ground.",
      image: "/neighbourhood/jameos.jpg",
      mapUrl: "https://www.google.com/maps/search/Jameos+del+Agua,+Lanzarote",
    },
  ],
};

export const howItWorks = {
  heading: "How to book",
  steps: [
    {
      title: "Check the dates",
      summary:
        "We rent by the full week, with a minimum of 1 week and a maximum of 4 weeks per stay. Tell us your planned arrival date and how many weeks you need.",
    },
    {
      title: "Send an enquiry",
      summary:
        "Drop us a message by email with your dates and the number of guests. We'll confirm availability and send you the full details and pricing.",
    },
    {
      title: "Confirm and arrive",
      summary:
        "Once agreed, we confirm the booking and send joining instructions. Check-in is from 15:00. We'll be there to hand over the keys in person.",
    },
  ],
};

export const benefits = {
  heading: "Why Playa Honda",
  items: [
    {
      title: "A real neighbourhood",
      summary:
        "Playa Honda is a residential area — quieter and more authentic than the main tourist strips. You get peace, local bakeries, and everyday life, with Puerto del Carmen five minutes away when you want it.",
    },
    {
      title: "Everything on your doorstep",
      summary:
        "Beach, supermarket, pharmacy, and restaurants are all within walking distance. The airport is just 2 km away, so arrival and departure day are completely stress-free.",
    },
    {
      title: "Perfect base for the island",
      summary:
        "Timanfaya National Park, Jameos del Agua, the Papagayo beaches, and the César Manrique Foundation are all within 45 minutes by car. You can explore the whole island from here.",
    },
  ],
};

export const testimonials = {
  heading: "What guests say",
  quotes: [
    {
      text:
        "We spent two weeks here in February and it felt like the ideal winter escape. The terrace was perfect for morning coffee in the sun, and Playa Honda is a much more relaxed base than the big resorts. We'll definitely be back.",
      author: "Sarah M.",
      role: "London, UK",
    },
    {
      text:
        "Everything was clean, comfortable, and exactly as described. Having the airport so close made arrival completely effortless. We hired a car and used the house as a base to see the whole island. Highly recommend.",
      author: "Klaus W.",
      role: "Hamburg, Germany",
    },
  ],
};

export const faq = {
  heading: "Questions about the rental",
  items: [
    {
      q: "What are the minimum and maximum stays?",
      a: "We rent by the full week only. The minimum stay is 1 week and the maximum is 4 weeks per booking.",
    },
    {
      q: "What are the check-in and check-out times?",
      a: "Check-in is from 15:00, check-out by 11:00. If you need to arrange different times, let us know when you enquire — we'll do our best to help.",
    },
    {
      q: "Is parking included?",
      a: "Yes. Off-street parking is available at the property at no extra cost.",
    },
    {
      q: "Do I need a car?",
      a: "For day-to-day life in Playa Honda — beach, shops, local restaurants — you don't need one. To explore Timanfaya, the north coast, and the southern beaches properly, a hire car is recommended. Several rental companies have desks at the airport, just 2 km away.",
    },
    {
      q: "What's the nearest airport?",
      a: "Lanzarote Airport (ACE) is about 2 km from the property — roughly 5 minutes by taxi. It has direct flights from most major European cities year-round.",
    },
    {
      q: "Are pets allowed?",
      a: "Please ask us before booking. We consider pet requests on a case-by-case basis.",
    },
  ],
};

export const contact = {
  heading: "Get in touch",
  body:
    "To check availability, ask a question, or make a booking enquiry, send us a message. We typically reply within a few hours.",
  email: "incrediball@gmail.com",
  phone: "+34 XXX XXX XXX",
  hours: "Available most days · reply within a few hours",
  address: "Calle Foque 31, Playa Honda, 35509 Lanzarote, Spain",
};

export const meta = {
  title: "Casa Foque · Holiday home rental in Playa Honda, Lanzarote",
  description:
    "A comfortable holiday home in Playa Honda, Lanzarote. Weekly rentals from 1 to 4 weeks. Steps from the beach, minutes from Puerto del Carmen.",
};
