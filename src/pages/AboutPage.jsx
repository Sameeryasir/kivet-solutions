import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import AnimatedSection from "../components/ui/AnimatedSection"
import AboutContactSection from "../components/about/AboutContactSection"
import { amberBio, business } from "../data/siteContent"
import { scaleIn, staggerFlow, flowItem, viewportOnce, float, lift } from "../utils/motionPresets"

export default function AboutPage() {
  const paragraphs = amberBio.text.split("\n\n")

  return (
    <div className="page-shell">
      {/* Bio + portrait */}
      <section className="section-padding">
        <div className="container-xl grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <motion.div animate={float.animate} className="glass-card overflow-hidden rounded-2xl p-2">
              <img
                src={amberBio.image}
                alt={business.founder}
                className="w-full rounded-xl object-contain"
              />
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-brand-400">
              {amberBio.credentials}
            </p>

            <div className="mt-6 space-y-5">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-base leading-loose text-slate-300 sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Impact + team — with motion */}
      <section className="section-padding !pt-0">
        <motion.div
          className="container-xl overflow-hidden rounded-2xl shadow-lg shadow-black/20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerFlow(0.1)}
        >
          {/* Top row — neon yellow */}
          <div className="grid bg-brand-500 md:grid-cols-2">
            <motion.div
              variants={scaleIn}
              className="border-b border-navy-950/10 p-3 md:border-b-0 md:border-r md:p-5"
            >
              <motion.img
                src={amberBio.impactPhoto}
                alt="IMPACT team"
                className="mx-auto w-full max-h-[220px] rounded-xl border border-navy-950/20 object-cover sm:max-h-[280px] md:max-h-[320px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <motion.div
              variants={flowItem}
              className="flex items-center justify-center px-6 py-10 md:py-14"
            >
              <motion.div {...lift}>
                <Link
                  to="/contact"
                  className="inline-block bg-navy-950 px-8 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-navy-900 sm:text-base"
                >
                  Learn More About Amber
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom row — lime green */}
          <div className="grid bg-brand-400 md:grid-cols-2">
            <motion.div
              variants={flowItem}
              className="order-2 flex items-center justify-center px-6 py-10 md:order-1 md:py-14"
            >
              <motion.div {...lift}>
                <Link
                  to="/services"
                  className="inline-block bg-navy-950 px-8 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-navy-900 sm:text-base"
                >
                  Qualifications - Certificates - Specialties
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              variants={scaleIn}
              className="order-1 border-b border-navy-950/10 p-3 md:order-2 md:border-b-0 md:p-5"
            >
              <motion.img
                src={amberBio.teamPhoto}
                alt={`${business.founder} with clients`}
                className="mx-auto w-full max-h-[220px] rounded-xl border border-navy-950/20 object-cover shadow-md sm:max-h-[280px] md:max-h-[320px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      <AboutContactSection />
    </div>
  )
}
