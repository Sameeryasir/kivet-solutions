import { imageAssets } from "./imageAssets.js"

const all = Object.values(imageAssets)

/** Every downloaded asset path (91 images) */
export const allSiteImages = all

export const socialIcons = all.filter((src) =>
  ["444f49", "71ac09a5", "8efda639", "ce6ec7c11", "fdcfaba"].some((id) =>
    src.includes(id),
  ),
)

export const bannerImages = all.filter((src) =>
  [
    "contact-us-banner",
    "subheading-banner",
    "footer-graphic",
    "lifepro-ad",
    "amazon-store",
    "de5552_4b0f024f",
    "de5552_8299ea8399644acaa",
    "de5552_3bd3658b",
    "de5552_adbb0081f524453cb",
    "magik-badge-blue",
  ].some((name) => src.includes(name)),
)

export const facilityPhotos = all.filter(
  (src) =>
    /\.(jpe?g|webp)$/i.test(src) &&
    !src.includes("amazon-store") &&
    !src.includes("11062b"),
)

export const pressImages = all.filter((src) => src.includes("c30ee2_"))

export const mediaImages = all.filter(
  (src) =>
    src.endsWith(".png") &&
    src.includes("de5552_") &&
    !bannerImages.includes(src) &&
    !src.includes("de5552_061ff72e") &&
    !src.includes("de5552_5360285a") &&
    !src.includes("de5552_7350552ef"),
)

export const testimonialImages = [
  ...pressImages.filter((src) => /\.(jpe?g|png)$/i.test(src)),
  ...all.filter((src) =>
    [
      "de5552_0451a5d64746452da",
      "de5552_5d21476698ad475f9",
      "de5552_b7f4967445de41618",
      "de5552_bc4874a7e92041e5a",
      "de5552_061ff72e9c1d4fc5a",
      "de5552_5360285a783b4bf69",
      "de5552_7350552ef0564c16a",
      "de5552_7b089bb177884be99",
    ].some((id) => src.includes(id)),
  ),
]

export const partnershipImages = all.filter((src) =>
  [
    "lifepro-ad",
    "amazon-store",
    "de5552_4b0f024f",
    "de5552_8299ea8399644acaa",
    "de5552_3bd3658b",
    "de5552_adbb0081f524453cb",
    "de5552_c5fa7f1209cd42e39",
    "de5552_c613a1e0486749928",
    "de5552_d0fecddff6f340d39",
    "de5552_e462f98731844930b",
    "de5552_f566951f55e449519",
  ].some((id) => src.includes(id)),
)

/** Label helper for gallery items */
export function imageLabel(src) {
  const file = src.split("/").pop().replace(/\.[^.]+$/, "")
  if (src.includes("facility-main")) return "World-Class Facility"
  if (src.includes("hero-amber")) return "Amber Kivett"
  if (src.includes("gallery-1")) return "Performance Training"
  if (src.includes("gallery-2")) return "Recovery Session"
  if (src.includes("gallery-3")) return "Experience the MAGIK"
  if (src.includes("about-amber")) return "Meet Amber"
  if (src.includes("lifepro")) return "Lifepro Partnership"
  if (src.includes("contact-us")) return "Contact KKS"
  return file.replace(/[-_]/g, " ").slice(0, 40)
}
