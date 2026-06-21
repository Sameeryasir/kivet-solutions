import { motion } from "framer-motion"
import AboutContactSection from "../components/about/AboutContactSection"
import ServiceCostsSection from "../components/services/ServiceCostsSection"
import { business, servicesHero } from "../data/siteContent"
import { lift, revealDepth, viewportOnce } from "../utils/motionPresets"

export default function ServicesPage() {
  const facilityBg = servicesHero.background

  return (
    <div className="page-shell services-page">
      <div className="services-stage">
        <div className="services-bg-pin" aria-hidden>
          <div
            className="services-bg-image"
            style={{ backgroundImage: `url(${facilityBg})` }}
          />
          <div className="services-bg-overlay" />
        </div>

        <div className="services-stage__content">
          <div className="services-accent-bar" />

          <section className="services-hero">
            <div className="container-xl">
              <motion.h1
                initial={revealDepth.hidden}
                whileInView={revealDepth.visible}
                viewport={viewportOnce}
                className="services-hero__title"
              >
                SERVICES
              </motion.h1>

              <motion.div
                initial={revealDepth.hidden}
                whileInView={revealDepth.visible}
                viewport={viewportOnce}
                {...lift}
                className="services-hero__panel"
              >
                <p className="services-hero__headline">{servicesHero.headline}</p>

                <p className="services-hero__cta">
                  Call us{" "}
                  <a href={`tel:${business.phone.replace(/\./g, "")}`} className="services-link">
                    {business.phone}
                  </a>{" "}
                  to schedule your treatment!
                </p>

                <p className="services-hero__body">{servicesHero.body}</p>

                <p className="services-hero__disclaimer">{servicesHero.disclaimer}</p>
              </motion.div>
            </div>
          </section>

          <ServiceCostsSection embedded />
        </div>
      </div>

      <div className="services-contact-bridge">
        <AboutContactSection />
      </div>
    </div>
  )
}
