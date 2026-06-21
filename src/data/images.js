import { globalImages, homeImages, contactImages } from "./imagePlacements.js"

/** Backward-compatible image paths used across components */
export const images = {
  ...globalImages,
  hero: homeImages.heroPhoto,
  magikBadge: homeImages.magikBadge,
  blurBg: homeImages.blurBg,
  aboutAmber: homeImages.welcomePortrait,
  facility: homeImages.facilityIntro,
  gallery1: homeImages.facilityGallery[0],
  gallery2: homeImages.facilityGallery[1],
  gallery3: homeImages.facilityGallery[2],
  contactBanner: contactImages.banner,
  lifepro: homeImages.lifeproAd,
  lifeproBanner: homeImages.lifeproBanner,
  footerGraphic: globalImages.footerGraphic,
  amazon: globalImages.amazon,
}
