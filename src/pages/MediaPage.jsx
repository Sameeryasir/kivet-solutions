import { motion } from "framer-motion"
import AboutContactSection from "../components/about/AboutContactSection"
import AnimatedSection from "../components/ui/AnimatedSection"
import SectionHeading from "../components/ui/SectionHeading"
import { mediaFeatures } from "../data/siteContent"
import { EASE, lift, revealDepth, staggerFlow, viewportOnce } from "../utils/motionPresets"

export default function MediaPage() {
  return (
    <div className="page-shell">
      <AnimatedSection className="section-padding hero-glow">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Media & Podcasts"
            title="Featured interviews & press"
            description="Podcasts and media appearances featuring Amber Kivett."
          />
        </div>
      </AnimatedSection>

      <section className="section-padding !pt-0">
        <motion.div
          className="container-xl grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerFlow(0.1)}
        >
          {mediaFeatures.map((item) => (
            <motion.article
              key={item.image}
              variants={revealDepth}
              {...lift}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/20"
            >
              <div className="overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="aspect-square w-full object-contain p-2"
                  loading="lazy"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.35, ease: EASE }}
                />
              </div>

              <div className="border-t border-white/10 px-4 py-4">
                <h3 className="text-sm font-semibold leading-snug text-white">{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-brand-300">{item.detail}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <AboutContactSection />
    </div>
  )
}
