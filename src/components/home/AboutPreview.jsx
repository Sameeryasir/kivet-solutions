import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import SectionHeading from "../ui/SectionHeading"
import Button from "../ui/Button"
import MotionSection from "../ui/MotionSection"
import { business, aboutHighlights, homeImages } from "../../data/siteContent"
import { staggerContainer, staggerItem } from "../../utils/motionPresets"

export default function AboutPreview() {
  const imageRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ["start end", "end start"] })
  const imageY = useTransform(scrollYProgress, [0, 1], [24, -24])

  return (
    <section className="section-padding section-alt">
      <div className="container-xl grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <MotionSection className="order-2 lg:order-1" as="div">
          <div ref={imageRef} className="glass-card overflow-hidden rounded-2xl p-2">
            <motion.img
              style={{ y: imageY }}
              src={homeImages.welcomePortrait}
              alt={business.founder}
              className="aspect-[4/5] w-full rounded-xl object-cover"
            />
          </div>
        </MotionSection>

        <MotionSection delay={0.08} className="order-1 lg:order-2" as="div">
          <SectionHeading
            align="left"
            eyebrow="About Coach"
            title={`Meet ${business.founder}`}
            description="Hybrid coaching that helps clients become their best — mind, body, and spirit."
          />

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer(0.08)}
            className="space-y-3"
          >
            {aboutHighlights.slice(0, 3).map((item) => (
              <motion.li key={item} variants={staggerItem} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                <span className="text-brand-400">✓</span>
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <div className="cta-row">
            <Button to="/contact" fullWidth className="btn-mobile-full">
              Book Free Session
            </Button>
          </div>
        </MotionSection>
      </div>
    </section>
  )
}
