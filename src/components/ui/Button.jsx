import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { lift } from "../../utils/motionPresets"

const variants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost:
    "inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-brand-500/40 hover:bg-white/5",
  outline:
    "inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy-950/70 px-6 py-3 text-sm font-semibold text-navy-950 transition hover:bg-navy-950/5",
}

/** Site-wide button — spring lift micro-interaction */
export default function Button({
  children,
  to,
  href,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}) {
  const width = fullWidth ? "w-full sm:w-auto" : ""
  const classes = `${variants[variant] ?? variants.primary} ${width} ${className}`

  const motionWrap = (node) => (
    <motion.div {...lift} className={fullWidth ? "w-full sm:w-auto" : "inline-flex"}>
      {node}
    </motion.div>
  )

  if (to) {
    return motionWrap(
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <motion.a href={href} className={classes} {...lift} {...props}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type="button" className={classes} {...lift} {...props}>
      {children}
    </motion.button>
  )
}
