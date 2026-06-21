import { motion } from "framer-motion"
import { serviceCosts } from "../../data/siteContent"
import { EASE, lift, revealDepth, staggerFlow, flowItem, viewportOnce } from "../../utils/motionPresets"

export default function ServiceCostsSection({ embedded = false }) {
  return (
    <section className={`services-costs ${embedded ? "" : "services-stage relative overflow-hidden"}`}>
      {!embedded && (
        <>
          <div
            className="services-bg-image"
            style={{ backgroundImage: `url(${serviceCosts.background})` }}
            aria-hidden
          />
          <div className="services-bg-overlay" aria-hidden />
        </>
      )}

      <div className={`container-xl ${embedded ? "" : "relative z-10"}`}>
        <motion.h2
          initial={revealDepth.hidden}
          whileInView={revealDepth.visible}
          viewport={viewportOnce}
          className="services-costs__title"
        >
          {serviceCosts.title}
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.55, ease: EASE }}
          className="services-costs__divider"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerFlow(0.1)}
          {...lift}
          className="services-costs__grid"
        >
          <motion.div variants={revealDepth} className="services-pricing-panel">
            <p className="services-pricing-panel__intro">{serviceCosts.intro}</p>

            <div className="services-pricing-panel__blocks">
              {serviceCosts.blocks.map((block) => (
                <motion.div key={block.days} variants={flowItem}>
                  <p className="services-pricing-panel__day">{block.days}</p>
                  {block.lines.map((line) => (
                    <p key={line} className="services-pricing-panel__line">
                      {line}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>

            <p className="services-pricing-panel__note">{serviceCosts.note}</p>
          </motion.div>

          <motion.div variants={revealDepth} className="services-fsa-panel">
            <img
              src={serviceCosts.fsaGraphic}
              alt="FSA and HSA approved — Kivett Kinetic Solutions"
              className="services-fsa-panel__image"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
