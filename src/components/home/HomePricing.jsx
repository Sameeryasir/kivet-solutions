import { motion } from "framer-motion"
import SectionHeading from "../ui/SectionHeading"
import PricingCard from "../ui/PricingCard"
import { programPlans } from "../../data/siteContent"
import { staggerFlow, viewportOnce } from "../../utils/motionPresets"

export default function HomePricing() {
  return (
    <section className="section-padding section-alt">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent rates"
          description="Private hybrid coaching in a world-class facility — 30 minutes west of Indianapolis."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerFlow(0.12)}
          className="grid gap-6 lg:grid-cols-3 lg:gap-8"
        >
          {programPlans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
