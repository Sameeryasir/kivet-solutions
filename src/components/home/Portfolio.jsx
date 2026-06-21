import SectionHeading from "../ui/SectionHeading"
import AutoCarousel from "../ui/AutoCarousel"
import { homePortfolio } from "../../data/siteContent"

export default function Portfolio() {
  return (
    <section className="section-padding section-alt">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Our World"
          title="Experience the MAGIK"
          description="World-class equipment and recovery tools in a 4,000 sq ft private facility."
        />

        <AutoCarousel items={homePortfolio} />
      </div>
    </section>
  )
}
