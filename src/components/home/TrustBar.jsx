import { motion } from "framer-motion"
import StatsCounter from "../ui/StatsCounter"
import { trustStats, trustTicker } from "../../data/siteContent"
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "../../utils/motionPresets"

export default function TrustBar() {
  const tickerItems = [...trustTicker, ...trustTicker]

  return (
    <section className="border-y border-white/8 bg-navy-900/50 overflow-hidden">
      <div className="container-xl section-padding !py-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.08)}
          className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8"
        >
          {trustStats.map((stat) => (
            <motion.div key={stat.label} variants={staggerItem} className="text-center md:text-left">
              <p className="font-display text-3xl text-white sm:text-4xl">
                <StatsCounter value={stat.value} />
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Auto-scroll social proof ticker */}
      <div className="border-t border-white/8 py-3">
        <div className="flex overflow-hidden">
          <div className="ticker-track flex shrink-0 gap-10 whitespace-nowrap px-4">
            {tickerItems.map((item, i) => (
              <span key={`${item}-${i}`} className="text-xs font-semibold uppercase tracking-widest text-brand-400/80">
                ✦ {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
