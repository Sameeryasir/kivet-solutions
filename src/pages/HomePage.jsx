import Hero from "../components/home/Hero"
import TrustBar from "../components/home/TrustBar"
import AboutPreview from "../components/home/AboutPreview"
import FacilityIntro from "../components/home/FacilityIntro"
import HomeLifepro from "../components/home/HomeLifepro"
import Portfolio from "../components/home/Portfolio"
import HomePricing from "../components/home/HomePricing"

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutPreview />
      <FacilityIntro />
      <HomeLifepro />
      <Portfolio />
      <HomePricing />
    </>
  )
}
