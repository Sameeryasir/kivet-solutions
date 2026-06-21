import SectionHeading from "../ui/SectionHeading"
import Button from "../ui/Button"
import { business } from "../../data/siteContent"

/** Text-only services teaser — matches original homepage (full services on /services) */
export default function ServicesPreview() {
  return (
    <section className="section-padding">
      <div className="container-xl max-w-3xl text-center">
        <SectionHeading
          eyebrow="Hybrid Coaching"
          title="Sports medicine, performance & the mind-game"
          description="We combine sports medicine, sports performance, health/wellness, massage/bodywork, and mental coaching into a full circle MAGIKAL experience."
        />
        <Button to="/services">View Services & Pricing</Button>
      </div>
    </section>
  )
}
