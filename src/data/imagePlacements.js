/**
 * Image placements mirrored from kksmagik.com page structure.
 * All paths point to public/assets/images/all/
 */
const a = (file) => `/assets/images/all/${file}`

export const globalImages = {
  logo: "/assets/images/logo.png",
  footerGraphic: a("footer-graphic.png"),
  amazon: a("amazon-store.webp"),
  subheading: a("subheading-banner.png"),
  contactBanner: a("contact-us-banner.png"),
}

export const socialIcons = [
  { label: "Instagram", href: "https://www.instagram.com/kksmagik/", icon: a("444f49eac2e348f89128293b.png") },
  { label: "Facebook", href: "https://www.facebook.com/kksmagik", icon: a("71ac09a5a92848cc943bf2ca.png") },
  { label: "Twitter", href: "https://twitter.com/kksmagik", icon: a("8efda6398c724b5ea342287b.png") },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: a("ce6ec7c11b174c0581e20f42.png") },
  { label: "YouTube", href: "https://www.youtube.com/", icon: a("fdcfaba150fc427da298a00c.png") },
]

export const homeImages = {
  heroBg: a("11062b_ed310367d9a64b759.jpg"),
  heroVideo: "/assets/videos/hero-bg.mp4",
  heroPhoto: a("hero-amber-6382.jpg"),
  magikBadge: a("magik-badge-blue.png"),
  blurBg: a("11062b_ed310367d9a64b759.jpg"),
  welcomePortrait: a("about-amber-portrait.jpeg"),
  facilityIntro: a("facility-main.jpg"),
  introducingFacility: a("c30ee2_15574bac4bdb4e548.jpg"),
  facilityGallery: [
    a("gallery-1.jpg"),
    a("gallery-2.jpg"),
    a("gallery-3.jpg"),
    a("de5552_8bc52a9aab4f4222a.jpg"),
    a("de5552_f70f34c2732b4fb2a.jpg"),
    a("de5552_efeefcc2f88442f28.jpg"),
    a("de5552_b117cb4380094735a.jpg"),
  ],
  podcastPhoto: a("de5552_8bc52a9aab4f4222a.jpg"),
  lifeproAd: a("lifepro-ad.png"),
  lifeproAdFull: "/assets/images/lifepro-partner.png",
  lifeproBanner: a("de5552_4b0f024f62a74131b.png"),
  partnerBanner: a("de5552_adbb0081f524453cb.png"),
  subheading: a("subheading-banner.png"),
}

export const aboutImages = {
  heroPortrait: a("about-amber-portrait.jpeg"),
  meetAmberPhotos: [
    a("de5552_bc4874a7e92041e5a.jpeg"),
    a("de5552_30dab64195e14e178.jpeg"),
    a("c30ee2_ecad934d98a14e999.jpg"),
  ],
  storyPhotos: [
    a("de5552_31744e9680db4937b.jpg"),
    a("de5552_3172d738a69b4283b.jpg"),
    a("de5552_e6f882e59fc3463a8.jpg"),
    a("de5552_ef117540e4ab4e8aa.jpg"),
    a("de5552_dd06d7b95daa4d698.jpg"),
    a("de5552_04ed2d98dac24fa48.jpg"),
    a("de5552_245c25eef3b949088.jpg"),
  ],
  awardsPhoto: a("c30ee2_b1bb5f6aa6e241c78.png"),
  facilityHero: a("facility-main.jpg"),
  facilityTour: [
    a("de5552_f70f34c2732b4fb2a.jpg"),
    a("de5552_8bc52a9aab4f4222a.jpg"),
    a("gallery-3.jpg"),
    a("gallery-1.jpg"),
    a("gallery-2.jpg"),
    a("c30ee2_a00b05ac50a24a89b.jpg"),
    a("c30ee2_7f133b359daa4b35a.jpeg"),
    a("c30ee2_298dac2e3cff4569a.jpeg"),
    a("c30ee2_ec2c66837b894df79.jpeg"),
    a("c30ee2_0ed1397e93f3474ab.jpeg"),
    a("c30ee2_ddb26dfd79e54c65a.jpeg"),
    a("c30ee2_a0b1ce8bca1b43048.jpeg"),
    a("c30ee2_15574bac4bdb4e548.jpg"),
    a("c30ee2_d53432a9d01845fb8.jpg"),
    a("c30ee2_8d219b10f2f7430c9.jpg"),
    a("de5552_efeefcc2f88442f28.jpg"),
    a("de5552_b117cb4380094735a.jpg"),
  ],
}

export const pressLogos = [
  a("c30ee2_b1bb5f6aa6e241c78.png"),
  a("c30ee2_155f4976508d496bb.png"),
  a("c30ee2_f166012ae50b447d8.png"),
  a("c30ee2_60d7c14a23b147b0b.png"),
  a("c30ee2_eeb27a0ecbb648578.png"),
  a("c30ee2_9de070c597e2479fa.png"),
  a("c30ee2_e563a205d29b42918.png"),
  a("c30ee2_b2a7702253b44edd8.png"),
  a("c30ee2_c1b71222189540c68.png"),
  a("c30ee2_d5b28dc19c3f4352b.jpeg"),
  a("c30ee2_e6bd148a84a649c08.jpeg"),
  a("c30ee2_a2e3cfb093e941eea.jpg"),
  a("c30ee2_a9e23c8da3044388a.jpeg"),
  a("c30ee2_9d37c07830f74d789.jpeg"),
  a("c30ee2_44ddc2f1aa204f289.jpeg"),
  a("c30ee2_329751162b594d9ab.jpg"),
  a("c30ee2_37b7317561c841229.jpg"),
]

export const serviceImages = {
  facilityBackground: a("c30ee2_0750258acc364358a.jpg"),
  walkInBanner: a("c30ee2_0750258acc364358a.jpg"),
  pricingBanner: a("c30ee2_e0db5655824a4b8d9.jpg"),
  scopeGraphic: a("c30ee2_c1b71222189540c68.png"),
  fsaApprovedGraphic: a("c30ee2_c1b71222189540c68.png"),
  cards: [
    a("facility-main.jpg"),
    a("gallery-1.jpg"),
    a("about-amber-portrait.jpeg"),
    a("gallery-2.jpg"),
    a("hero-amber-6382.jpg"),
    a("gallery-3.jpg"),
  ],
}

export const mediaPodcasts = [
  { title: "It Just Takes One", detail: "Coaching Greatness", image: a("de5552_3bd3658b30c842b4b.png") },
  { title: "Healing — From Trauma to Purpose", detail: "Life Force Radio with Dr. Wade", image: a("de5552_3e5384761562463aa.png") },
  { title: "Train Fuel Thrive", detail: "Katie & Amy Podcast", image: a("de5552_5f27ce2056d742528.png") },
  { title: "Impact Show", detail: "TD Mastermind Member of the Year", image: a("de5552_9d54b06f85cf401aa.png") },
  { title: "Compete Mentality Podcast", detail: "Sports mindset & performance", image: a("de5552_13cad63daf9d4ed78.png") },
  { title: "Ricardo's Rules of Resilience", detail: "Season 3 Episode 2 — The Magik Lady Returns", image: a("de5552_3b3fcf918c8a4b0b9.png") },
  { title: "Why Not Me?", detail: "Episode 26: Overcoming Tragedy By Controlling Your Mindset", image: a("de5552_401bcd33bbfc41e1b.png") },
  { title: "Gym Lords Podcast", detail: "Strength & fitness industry feature", image: a("de5552_908e618586c243f0a.png") },
]

export const testimonialClients = [
  { quote: "Amber's approach changed everything for my chronic back pain. Relief in two sessions.", name: "Sarah M.", role: "Client since 2019", image: a("c30ee2_a9e23c8da3044388a.jpeg") },
  { quote: "The facility feels like a private retreat. Professional, warm, and results-driven.", name: "James T.", role: "Athlete & client", image: a("c30ee2_9d37c07830f74d789.jpeg") },
  { quote: "Hybrid coaching isn't just a tagline — it's real integration of bodywork and mindset.", name: "Lisa R.", role: "Wellness client", image: a("c30ee2_a2e3cfb093e941eea.jpg") },
  { quote: "I've referred dozens of patients. Her 90% success rate speaks for itself.", name: "Dr. Michael P.", role: "Referring physician", image: a("c30ee2_44ddc2f1aa204f289.jpeg") },
  { quote: "Instant pain relief after years of searching — truly MAGIKAL.", name: "Karen W.", role: "Client", image: a("de5552_5d21476698ad475f9.jpeg") },
  { quote: "Amber's cupping techniques changed my recovery timeline completely.", name: "Mike D.", role: "Athlete", image: a("de5552_b7f4967445de41618.jpeg") },
  { quote: "World-class facility with a personal, caring touch.", name: "Robert H.", role: "Client since 2015", image: a("de5552_bc4874a7e92041e5a.jpeg") },
  { quote: "Best investment in my health I've ever made.", name: "David S.", role: "Client", image: a("c30ee2_d5b28dc19c3f4352b.jpeg") },
]

export const testimonialGraphics = [
  a("de5552_f566951f55e449519.png"),
  a("de5552_7350552ef0564c16a.png"),
  a("de5552_d0fecddff6f340d39.png"),
  a("de5552_5360285a783b4bf69.png"),
  a("de5552_061ff72e9c1d4fc5a.png"),
  a("de5552_7b089bb177884be99.png"),
  a("de5552_0451a5d64746452da.jpeg"),
  a("de5552_94e2b8212812476bb.png"),
  a("de5552_a2549203410e4dfb9.png"),
  a("de5552_c613a1e0486749928.png"),
  a("de5552_c5fa7f1209cd42e39.png"),
  a("de5552_e462f98731844930b.png"),
]

export const partnershipItems = [
  { name: "Lifepro Fitness", description: "Global spokesmodel — use code AmberLP for 10% off.", image: a("lifepro-ad.png"), cta: "Shop Lifepro", code: "AmberLP" },
  { name: "Lifepro Gym", description: "Get fit with Lifepro equipment and training tools.", image: a("de5552_4b0f024f62a74131b.png"), cta: "Shop Now" },
  { name: "Amazon Storefront", description: "Visit our Amazon storefront for recommended products.", image: a("amazon-store.webp"), cta: "Visit Store" },
  { name: "B3 Sciences", description: "BFR bands — try FREE for 30 days. Call 972-214-5844.", image: a("de5552_8299ea8399644acaa.png"), cta: "Get on the Bands" },
  { name: "Dolphin Neurostim", description: "Recovery and neurostimulation partner products.", image: a("de5552_3bd3658b30c842b4b.png"), cta: "Learn More" },
  { name: "Recovery Partners", description: "Trusted recovery tools recommended by Amber.", image: a("de5552_adbb0081f524453cb.png"), cta: "Learn More" },
]

export const contactImages = {
  banner: a("contact-us-banner.png"),
  sidePromo: a("subheading-banner.png"),
  facility: a("facility-main.jpg"),
}
