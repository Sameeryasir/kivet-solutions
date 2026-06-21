import SectionHeading from "../ui/SectionHeading"
import Button from "../ui/Button"
import AnimatedSection from "../ui/AnimatedSection"
import { homeImages } from "../../data/siteContent"

/** Rocky Snyder podcast section from original homepage */
export default function HomePodcast() {
  return (
    <section className="section-padding bg-navy-900/40">
      <div className="container-xl grid items-center gap-10 lg:grid-cols-2">
        <AnimatedSection>
          <div className="glass-card overflow-hidden rounded-2xl">
            <img
              src={homeImages.podcastPhoto}
              alt="Podcast feature with Rocky Snyder"
              className="aspect-video w-full object-cover"
            />
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <SectionHeading
            align="left"
            eyebrow="Media"
            title="Featured on the Rock Fit Files Podcast"
            description="An amazing opportunity to be interviewed with Rocky Snyder — 2023 NSCA Personal Trainer of the Year, author, and consultant to NFL, NBA, NHL, MLS, and MLB teams."
          />
          <Button to="/media">Media Page</Button>
        </AnimatedSection>
      </div>
    </section>
  )
}
