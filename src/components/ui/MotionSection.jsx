import { motion } from "framer-motion"
import { fadeUp, viewportOnce } from "../../utils/motionPresets"

/** Wraps major sections — auto fade-up on scroll */
export default function MotionSection({
  children,
  className = "",
  delay = 0,
  id,
  as = "section",
}) {
  const MotionTag = as === "div" ? motion.div : motion.section

  return (
    <MotionTag
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        hidden: fadeUp.hidden,
        visible: {
          ...fadeUp.visible,
          transition: { ...fadeUp.visible.transition, delay },
        },
      }}
    >
      {children}
    </MotionTag>
  )
}
