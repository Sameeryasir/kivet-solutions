import { motion } from "framer-motion"
import { revealDepth, viewportOnce } from "../../utils/motionPresets"

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}) {
  const alignClass =
    align === "center" ? "text-center mx-auto" : align === "left" ? "text-left" : "text-right ml-auto"

  return (
    <div className={`mb-12 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <motion.p
          initial={revealDepth.hidden}
          whileInView={revealDepth.visible}
          viewport={viewportOnce}
          className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-400"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={revealDepth.hidden}
        whileInView={revealDepth.visible}
        viewport={viewportOnce}
        transition={{ ...revealDepth.visible.transition, delay: 0.05 }}
        className={`font-display text-3xl leading-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-gradient"
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={revealDepth.hidden}
          whileInView={revealDepth.visible}
          viewport={viewportOnce}
          transition={{ ...revealDepth.visible.transition, delay: 0.1 }}
          className="mt-4 text-base leading-loose text-slate-400 sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
