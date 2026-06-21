import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { navLinks } from "../../data/navigation"
import { business } from "../../data/siteContent"
import Button from "../ui/Button"
import BrandLogo from "../ui/BrandLogo"

export default function MobileDrawer({ open, onClose }) {
  const location = useLocation()

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    if (open) onClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-navy-950/70 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.nav
            className="fixed right-0 top-0 z-50 flex h-full w-[min(88vw,360px)] flex-col glass-card rounded-none border-l border-white/10 lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <BrandLogo linkTo={null} />
              <button
                onClick={onClose}
                className="rounded-full p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
                aria-label="Close menu"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                >
                  <Link
                    to={link.path}
                    className={`block rounded-xl px-4 py-3.5 text-base font-medium transition ${
                      location.pathname === link.path
                        ? "bg-brand-500/15 text-brand-300"
                        : "text-slate-200 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-white/10 p-6">
              <Button to="/contact" className="w-full">
                Book Appointment
              </Button>
              <p className="mt-4 text-center text-sm text-slate-400">
                {business.phone}
              </p>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  )
}
