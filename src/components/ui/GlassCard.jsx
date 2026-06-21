import { motion } from "framer-motion"
import { lift } from "../../utils/motionPresets"

export default function GlassCard({ children, className = "", hover = true, ...props }) {
  const Component = hover ? motion.div : "div"
  const motionProps = hover ? lift : {}

  return (
    <Component className={`glass glass-hover rounded-2xl ${className}`} {...motionProps} {...props}>
      {children}
    </Component>
  )
}
