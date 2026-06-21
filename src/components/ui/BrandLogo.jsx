import { Link } from "react-router-dom"
import { business } from "../../data/siteContent"

const LOGO_SRC = "/assets/images/logo.png"

/** Site logo — public/assets/images/logo.png */
export default function BrandLogo({ className = "", linkTo = "/", subtle = false }) {
  const wrapClass = subtle
    ? `inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 ${className}`
    : `inline-flex items-center justify-center rounded-xl bg-brand-500 px-4 py-2 shadow-sm shadow-brand-500/15 ${className}`

  const img = (
    <div className={wrapClass}>
      <img
        src={LOGO_SRC}
        alt={business.name}
        className="h-10 w-auto max-w-[200px] object-contain sm:h-11 sm:max-w-[220px]"
        draggable={false}
      />
    </div>
  )

  if (linkTo) {
    return (
      <Link to={linkTo} className="shrink-0 transition hover:opacity-90">
        {img}
      </Link>
    )
  }

  return img
}
