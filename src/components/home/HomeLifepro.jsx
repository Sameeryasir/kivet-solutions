import SectionHeading from "../ui/SectionHeading"
import Button from "../ui/Button"
import AnimatedSection from "../ui/AnimatedSection"
import { business, homeImages } from "../../data/siteContent"

/** Lifepro promo — same layout, text CSS, and gap as FacilityIntro */
export default function HomeLifepro() {
  return (
    <section className="section-padding">
      <div className="container-xl grid items-center gap-12 lg:grid-cols-2">
        <AnimatedSection>
          <SectionHeading
            align="left"
            eyebrow="Lifepro Partnership"
            title="Use Code: AmberLP for 10% off"
            description={`Save on top-rated fitness equipment — whole-body vibration, at-home wellness tools, and pro training gear. ${business.founder} is a global Lifepro spokesmodel. Enter code AmberLP at checkout for an extra 10% off.`}
          />
          <Button to="/partnerships" fullWidth className="btn-mobile-full sm:w-auto">
            Shop Lifepro
          </Button>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <div className="glass-card overflow-hidden rounded-3xl p-2">
            <img
              src={homeImages.lifeproAdFull}
              alt="Lifepro Fitness — use code AmberLP for 10% off"
              className="w-full rounded-2xl object-contain"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
