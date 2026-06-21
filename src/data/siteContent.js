import {
  globalImages,
  socialIcons,
  homeImages,
  aboutImages,
  pressLogos,
  serviceImages,
  mediaPodcasts,
  testimonialClients,
  testimonialGraphics,
  partnershipItems,
  contactImages,
} from "./imagePlacements.js"

export const business = {
  name: "Kivett Kinetic Solutions",
  tagline: "Experience the MAGIK",
  founder: "Amber Kivett",
  email: "support@kksmagik.com",
  phone: "317.446.7971",
  address: "5797 W McClure Road",
  city: "Monrovia, IN 46157",
  hours: "Monday – Sunday · 9 AM – 9 PM",
  hoursNote: "Closing time may vary · By appointment only",
  since: 2008,
  facilitySize: "4,000 sq ft",
}

export { socialIcons, homeImages, aboutImages, pressLogos, serviceImages, mediaPodcasts, testimonialClients, testimonialGraphics, partnershipItems, contactImages, globalImages }

export const trustStats = [
  { value: "90%", label: "Instant relief success rate" },
  { value: "2008", label: "Serving clients since" },
  { value: "4,000", label: "Sq ft world-class facility" },
  { value: "20+", label: "Specialty certifications" },
]

const serviceDefs = [
  { title: "Sports Medicine & Recovery", description: "Targeted clinical bodywork and KIPRS techniques for acute and chronic pain relief — often within 1–3 sessions.", icon: "⚡" },
  { title: "Hybrid Performance Coaching", description: "Integrated strength, corrective exercise, BFR training, and speed/agility programming for athletes of every level.", icon: "🏆" },
  { title: "Wellness & Mind-Game", description: "Life coaching, mental performance, and holistic wellness to align mind, body, and spirit for lasting change.", icon: "✨" },
  { title: "Clinical Massage & Bodywork", description: "Cupping, IASTM, vibration therapy, and eastern medicine modalities tailored to your body's unique needs.", icon: "🌿" },
  { title: "Walk-In Express Care", description: "Injury evaluation and immediate treatment when you need relief without the ER — scope-of-practice assessed first.", icon: "🩺" },
  { title: "Group & Private Training", description: "One-on-one sessions with Amber or team-led group classes in our private Monrovia facility.", icon: "💪" },
]

export const services = serviceDefs.map((s, i) => ({
  ...s,
  image: serviceImages.cards[i],
}))

export const pricing = [
  { days: "Mon – Thu", time: "9 AM – 7 PM", rate: "$175 / hour" },
  { days: "Mon – Thu", time: "After 7 PM", rate: "$200 / hour" },
  { days: "Fri – Sun", time: "9 AM – 9 PM", rate: "$200 / hour" },
]

export const servicesHero = {
  background: serviceImages.facilityBackground,
  headline: "KKS offers services that range from targeted individual appointments.",
  body:
    "We provide immediate treatment for acute injuries to help save you an unnecessary trip to the ER. Most clients experience relief within 1–3 appointments.",
  disclaimer:
    "* If we determine your injury is outside our scope of practice, you will not be charged for the visit.",
}

export const serviceCosts = {
  background: serviceImages.facilityBackground,
  fsaGraphic: serviceImages.fsaApprovedGraphic,
  title: "Service Costs",
  intro: "Private Appointment Services Can Be Booked With Amber Kivett:",
  blocks: [
    {
      days: "Monday – Thursday",
      lines: ["9 AM – 7 PM $175 per hour", "After 7 PM $200 per hour"],
    },
    {
      days: "Friday – Sunday",
      lines: ["9 AM – 9 PM $200 per hour"],
    },
  ],
  note: "Weekend Hours May Vary",
}

export const testimonials = testimonialClients

export const homePortfolio = [
  { title: "World-Class Facility", category: "Facility", image: homeImages.facilityIntro },
  ...homeImages.facilityGallery.map((image, i) => ({
    title: ["Performance Training", "Recovery Session", "MAGIK Experience", "Coaching", "Bodywork", "Training", "Community"][i] || "KKS Experience",
    category: ["Training", "Recovery", "Community", "Coaching", "Medicine", "Performance", "Facility"][i] || "Gallery",
    image,
  })),
]

export const mediaFeatures = mediaPodcasts

export const partnerships = partnershipItems

export const awards = [
  "2023 Todd Durkin Mastermind IMPACT Fit Pro of the Year",
  "2021 Inaugural Jack LaLanne Pass It Forward Award",
  "2× IDEA World Inspirational Medal recipient",
  "2× #1 Amazon Bestseller co-author",
]

export const aboutHighlights = [
  "Known globally as the MAGIK LADY and GATEKEEPER OF DREAMS",
  "90% instant pain relief success rate in 1–3 sessions",
  "Purdue University graduate — Athletic Training & Exercise Science",
  "Creator of KIPRS and proprietary cupping product line",
  "Featured on Fox 59, Forbes, Shape, Prevention, and more",
]

export const amberBio = {
  credentials: "ATC, LAT, CSCS, FMS, FMT",
  image: "/assets/images/all/de5552_bc4874a7e92041e5a.jpeg",
  impactPhoto: "/assets/images/all/de5552_8299ea8399644acaa.png",
  teamPhoto: "/assets/images/all/de5552_efeefcc2f88442f28.jpg",
  text: `Amber Kivett is known across the globe as the "MAGIK LADY" and the "GATEKEEPER OF DREAMS". She earned these ICONIC names after re-inventing the wheel of non-medicinal pain relief using natural, holistic modalities to provide INSTANT PAIN RELIEF for her clients. She has a 90% success rate for INSTANT RELIEF in 1-3 sessions.

Amber offers a unique whole body approach, blending integrated techniques in sports medicine, bodywork, mental coaching, corrective exercise, and eastern medicine. She is one of the TOP EXPERTS in fascia and bio-hacking in the world.

Amber suffered from 8 spinal injuries, a head injury, fibromyalgia, and several other injuries as a result of a motor vehicle accident in 2005. After winning a 2-year battle of learning to walk again and rehabilitating herself back to a functional lifestyle, she began the journey of living each new day with the Devine purpose of transforming lives, delivering greatness, mentoring others, and changing the world one person at a time!`,
}

export const trustTicker = [
  "500+ Lives Transformed",
  "Certified Hybrid Coach",
  "Sports Medicine + Performance",
  "90% Instant Relief Rate",
  "Private 4,000 sq ft Facility",
  "By Appointment · Mon–Sun",
]

export const programPlans = [
  {
    name: "Starter",
    subtitle: "Walk-In Express Care",
    price: "$175",
    period: "/ hour · Mon–Thu",
    features: ["Injury evaluation on arrival", "Immediate hands-on treatment", "Scope-of-practice assessed first"],
    highlight: false,
  },
  {
    name: "Pro",
    subtitle: "Hybrid Coaching",
    price: "$175",
    period: "/ hour · Mon–Thu",
    features: ["Sports medicine + performance", "Mind-game & wellness coaching", "World-class private facility"],
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Elite",
    subtitle: "Premium Sessions",
    price: "$200",
    period: "/ hour · Evenings & weekends",
    features: ["Extended evening availability", "1-on-1 with Amber Kivett", "Full recovery + training stack"],
    highlight: false,
  },
]

export const portfolioItems = homePortfolio
