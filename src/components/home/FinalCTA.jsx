import { motion } from "framer-motion"
import CTAButton from "../ui/CTAButton"
import MotionSection from "../ui/MotionSection"
import { business, contactImages } from "../../data/siteContent"
import { fadeUpScale } from "../../utils/motionPresets"

export default function FinalCTA() {
  return (
    <section className="section-padding">
      <div className="container-xl">
        <MotionSection className="relative overflow-hidden rounded-3xl glass-card px-8 py-16 text-center sm:px-16" as="div">
          <img
            src={contactImages.banner}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-15"
          />
          <motion.div
            className="hero-glow absolute inset-0 opacity-60"
            animate={{ opacity: [0.4, 0.65, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpScale}
            className="relative"
          >
            <h2 className="font-display text-4xl text-white sm:text-5xl">
              Start Your Transformation This Week
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              {business.address}, {business.city} · {business.phone}
            </p>
            <p className="mt-2 text-sm text-slate-500">{business.hoursNote}</p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <CTAButton to="/contact" heartbeatAnim pulse>
                Book Free Consultation
              </CTAButton>
              <CTAButton to="/services" variant="secondary">
                View Programs
              </CTAButton>
            </div>
          </motion.div>
        </MotionSection>
      </div>
    </section>
  )
}
