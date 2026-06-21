import { motion } from "framer-motion"
import Button from "./Button"
import { lift, scaleIn } from "../../utils/motionPresets"

export default function PricingCard({
  name,
  subtitle,
  price,
  period,
  features = [],
  highlight = false,
  badge,
  cta = "Book Session",
  ctaTo = "/contact",
}) {
  return (
    <motion.div
      variants={scaleIn}
      {...lift}
      className={`pricing-card flex flex-col p-6 sm:p-8 ${highlight ? "pricing-card--featured" : ""}`}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy-950">
          {badge}
        </span>
      )}

      <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-400">{name}</p>
      <h3 className="mt-2 font-display text-2xl text-white">{subtitle}</h3>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="font-display text-4xl text-white">{price}</span>
        <span className="text-sm text-slate-500">{period}</span>
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex gap-2 text-sm leading-relaxed text-slate-400">
            <span className="text-brand-400">✓</span>
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button to={ctaTo} variant={highlight ? "primary" : "secondary"} fullWidth className="btn-mobile-full w-full">
          {cta}
        </Button>
      </div>
    </motion.div>
  )
}
