// Content for the /robotaxi page.
// Keep claims factual: Meyer Visions is *planning* a fleet. Don't imply a
// Tesla partnership or publish revenue/profit figures here.
export default {
  meta: {
    title: "Jacksonville Robotaxi Fleet · Meyer Visions",
  },
  hero: {
    eyebrow: "Jacksonville, FL · Planned fleet",
    title: "Go anywhere in Jacksonville. Anytime.",
    subtitle: "Your time back, every ride.",
    description: "Meyer Visions is planning a Jacksonville-based Robotaxi fleet that makes getting around the city easier, safer and more affordable for everyone, from daily commutes and errands to airport runs, game days and nights out. As Robotaxi service expands across Florida, we're building the local groundwork so Jacksonville is ready on day one.",
    primaryCta: { name: "Become a partner", url: "#interest" },
    secondaryCta: { name: "See the plan", url: "#plan" },
  },
  focus: {
    title: "Built for every kind of trip",
    intro: "No driver, no parking, no car payment. Just the freedom to get where you're going, whether or not you drive. We're planning service around how Jacksonville actually moves.",
    items: [
      {
        icon: "fa-solid fa-route",
        name: "Everyday life",
        text: "Commutes, errands, appointments and trips across town. Ride, work, rest or catch up on a show with the time you'd have spent driving.",
      },
      {
        icon: "fa-solid fa-plane-arrival",
        name: "Airport",
        text: "JAX to downtown, the beaches and every neighborhood in between, around the clock, with room for your luggage.",
      },
      {
        icon: "fa-solid fa-ticket",
        name: "Events & nights out",
        text: "Game days, concerts, festivals and dinner downtown. Staged pickup areas get everyone home safely when the crowd heads out.",
      },
    ],
  },
  hubs: {
    title: "Mobility hubs",
    text: "We're scouting one or two hub sites to park, charge and clean vehicles between trips: secure lots with room for 20+ vehicles, solid power for charging, 24/7 access, and within about ten minutes of downtown or JAX.",
    note: "Own or manage a lot near downtown or the airport? Let us know in the form below.",
  },
  plan: {
    title: "The plan",
    steps: [
      {
        phase: "Now",
        name: "Build the local network",
        text: "Sign up preferred pickup and drop-off partners across the city, hear from residents and visitors, and learn where and when people need rides most.",
      },
      {
        phase: "Next",
        name: "Hubs and approvals",
        text: "Lock in hub sites with charging capacity and work through Florida's autonomous vehicle rules and airport ground-transportation permits.",
      },
      {
        phase: "Launch",
        name: "Rides in Jacksonville",
        text: "As Robotaxi service and fleet ownership open up in Jacksonville, bring vehicles online and turn on partner pickup zones, starting with our busiest areas.",
      },
    ],
  },
  partners: {
    title: "Become a preferred pickup & drop-off location",
    intro: "We're inviting Jacksonville businesses of every kind, from restaurants, hotels and shops to offices, venues and property owners, to join our network before launch. It's free and non-binding.",
    benefits: [
      "A designated pickup zone that's easy for customers and guests to find",
      "Easier access for people who don't drive, or would rather not",
      "Less congestion and parking pressure at your door",
      "Recognition as a founding partner when we launch",
    ],
  },
  form: {
    // Paste a Formspree (or similar) endpoint here, e.g.
    // "https://formspree.io/f/xxxxxxx". When empty, the form falls back to
    // opening a pre-filled email to the address below.
    endpoint: "https://formspree.io/f/xyewbppw",
    fallbackEmail: "contact@meyervisions.com",
    venueTypes: [
      "Restaurant or bar",
      "Hotel",
      "Retail or shopping center",
      "Office or workplace",
      "Event or entertainment venue",
      "Event or festival promoter",
      "Healthcare or community facility",
      "Parking lot or property owner",
      "Other",
    ],
    notesHint: "What else should we know? Parking or charging space, typical capacity, peak days & hours, upcoming events, etc.",
    consent: "I understand this is a non-binding expression of interest and that Meyer Visions may contact me and share our support with partners and local officials.",
    success: "Thanks! We've got your details and will be in touch soon.",
  },
  disclaimer: "Meyer Visions is an independent company and is not affiliated with, endorsed by, or sponsored by Tesla, Inc. Tesla, Robotaxi and Cybercab are trademarks of Tesla, Inc. Service areas, timing and availability depend on Tesla's rollout and local approvals.",
}
