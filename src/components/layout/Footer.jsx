import { Link } from "react-router-dom"
import { business, socialIcons } from "../../data/siteContent"
import { globalImages } from "../../data/imagePlacements"
import { footerLinks, navLinks } from "../../data/navigation"
import BrandLogo from "../ui/BrandLogo"
import Button from "../ui/Button"

export default function Footer() {
  const exploreLinks = navLinks.filter((l) => l.path !== "/")

  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <div className="border-b border-white/8 bg-gradient-to-r from-navy-900/80 via-navy-900/40 to-navy-900/80">
        <div className="container-xl flex flex-col items-start justify-between gap-6 px-4 py-10 sm:flex-row sm:items-center sm:px-6">
          <div className="max-w-md">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">Get Started</p>
            <h3 className="mt-2 font-display text-2xl text-white sm:text-3xl">
              Ready to experience the MAGIK?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{business.hoursNote}</p>
          </div>
          <Button to="/contact" fullWidth className="btn-mobile-full shrink-0 sm:w-auto">
            Book Free Session
          </Button>
        </div>
      </div>

      <div className="section-padding !pb-10 !pt-14">
        <div className="container-xl">
          <div className="mb-12 flex justify-center">
            <img src={globalImages.footerGraphic} alt="" className="max-h-12 w-auto opacity-70" />
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <BrandLogo linkTo="/" className="mb-5" />
              <p className="max-w-xs text-sm leading-relaxed text-white/75">
                Hybrid coaching — sports medicine, performance, and wellness. Delivering MAGIK since {business.since}.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {socialIcons.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-white/25 hover:bg-white/10"
                  >
                    <img src={link.icon} alt={link.label} className="h-5 w-5 object-contain" />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-white">Explore</h3>
              <ul className="space-y-2.5">
                {exploreLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm text-white/75 transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-white">More</h3>
              <ul className="space-y-2.5">
                {footerLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm text-white/75 transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-white">Contact</h3>
              <ul className="space-y-2.5 text-sm text-white/75">
                <li className="leading-relaxed">
                  {business.address}
                  <br />
                  {business.city}
                </li>
                <li>
                  <a href={`tel:${business.phone.replace(/\./g, "")}`} className="transition hover:text-white">
                    {business.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${business.email}`} className="transition hover:text-white">
                    {business.email}
                  </a>
                </li>
                <li className="pt-1 text-xs text-white/60">{business.hours}</li>
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row">
            <p className="text-xs text-white/60">
              © {new Date().getFullYear()} {business.name}. All rights reserved.
            </p>
            <p className="text-xs font-medium tracking-wide text-white/80">{business.tagline}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
