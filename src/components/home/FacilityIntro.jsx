import SectionHeading from "../ui/SectionHeading"
import Button from "../ui/Button"
import AnimatedSection from "../ui/AnimatedSection"
import { business, homeImages } from "../../data/siteContent"

/** "Introducing Kivett Kinetic Solutions" — facility intro from original homepage */
export default function FacilityIntro() {
  return (
    <section className="section-padding">
      <div className="container-xl grid items-center gap-12 lg:grid-cols-2">
        <AnimatedSection>
          <SectionHeading
            align="left"
            eyebrow="Introducing"
            title="Kivett Kinetic Solutions"
            description={`Where everyone experiences the MAGIK. A ${business.facilitySize} private-practice world-class facility in Monrovia, Indiana — delivering MAGIK since ${business.since}.`}
          />
          <div className="mt-8">
            <Button to="/about#facility" fullWidth className="btn-mobile-full sm:w-auto">
              Explore Our Facility
            </Button>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <div className="glass-card overflow-hidden rounded-3xl p-2">
            <img
              src={homeImages.introducingFacility}
              alt="Experience the MAGIK — Amber Kivett facility"
              className="w-full rounded-2xl object-contain"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
