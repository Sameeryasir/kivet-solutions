import { motion } from "framer-motion"
import { revealDepth, staggerFlow, flowItem, viewportOnce } from "../../utils/motionPresets"

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  id,
}) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        hidden: revealDepth.hidden,
        visible: {
          ...revealDepth.visible,
          transition: { ...revealDepth.visible.transition, delay },
        },
      }}
    >
      {children}
    </motion.section>
  )
}

export function StaggerContainer({ children, className = "", stagger = 0.1 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerFlow(stagger)}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = "" }) {
  return (
    <motion.div className={className} variants={flowItem}>
      {children}
    </motion.div>
  )
}
