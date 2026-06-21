import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { business, socialIcons } from "../../data/siteContent"
import {
  EASE,
  fadeUp,
  fadeUpScale,
  scaleIn,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "../../utils/motionPresets"

const mapsUrl =
  "https://maps.google.com/?q=5797+W+McClure+Road+Monrovia+IN+46157"

const fieldClass =
  "input-focus-glow w-full border-0 border-b border-navy-900/30 bg-transparent py-2.5 text-sm text-navy-950 outline-none placeholder:text-navy-900/40"

/** Panel fades in, then staggers its children (form fields or contact rows). */
const panelReveal = (stagger = 0.06, delayChildren = 0.12) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: EASE,
      staggerChildren: stagger,
      delayChildren,
    },
  },
})

function FormField({ label, children, className = "" }) {
  return (
    <motion.div
      variants={staggerItem}
      className={className}
      whileHover={{ x: 4 }}
      transition={{ duration: 0.25, ease: EASE }}
    >
      <label className="mb-1 block text-xs font-medium text-navy-950">{label}</label>
      {children}
    </motion.div>
  )
}

export default function AboutContactSection({ standalone = false }) {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className={`section-padding ${standalone ? "" : "!pt-0"}`}>
      <motion.div
        className="container-xl overflow-hidden rounded-2xl shadow-lg shadow-black/20"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.08)}
      >
        <div className="grid lg:grid-cols-[2fr_3fr]">
          {/* Left — contact info */}
          <motion.div
            variants={panelReveal(0.07, 0.1)}
            className="bg-brand-500 px-8 py-10 text-navy-950 sm:px-10 sm:py-12"
          >
            <motion.h2 variants={staggerItem} className="font-display text-3xl font-bold text-navy-950 sm:text-4xl">
              Contact Us
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="mt-3 text-sm font-medium leading-relaxed text-navy-950 sm:text-base"
            >
              Please contact us for additional information and to schedule an appointment!
            </motion.p>

            <ul className="mt-8 space-y-5 text-sm text-navy-950">
              {[
                {
                  icon: "📍",
                  content: (
                    <>
                      {business.address}
                      <br />
                      {business.city}
                    </>
                  ),
                },
                {
                  icon: "✉️",
                  content: (
                    <a href={`mailto:${business.email}`} className="hover:underline">
                      {business.email}
                    </a>
                  ),
                },
                {
                  icon: "📞",
                  content: (
                    <a href={`tel:${business.phone.replace(/\./g, "")}`} className="hover:underline">
                      {business.phone}
                    </a>
                  ),
                },
              ].map((item) => (
                <motion.li key={item.icon} variants={staggerItem} className="flex gap-3">
                  <span className="mt-0.5 shrink-0 text-lg" aria-hidden>
                    {item.icon}
                  </span>
                  <span>{item.content}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div variants={staggerItem} className="mt-8 flex flex-wrap gap-2">
              {socialIcons.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-950/10 transition hover:bg-navy-950/20"
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, ease: EASE }}
                >
                  <img src={item.icon} alt={item.label} className="h-5 w-5 object-contain" />
                </motion.a>
              ))}
            </motion.div>

            <motion.div variants={staggerItem} className="mt-8">
              <motion.a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-navy-950 px-8 py-3 text-sm font-semibold text-white transition hover:bg-navy-900"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25, ease: EASE }}
              >
                Directions
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div variants={fadeUp} className="bg-white px-8 py-10 sm:px-10 sm:py-12">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="flex h-full min-h-[280px] flex-col items-center justify-center text-center"
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -12 }}
                  variants={fadeUpScale}
                >
                  <motion.p
                    className="text-4xl text-navy-950"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.15 }}
                  >
                    ✓
                  </motion.p>
                  <motion.p
                    className="mt-4 text-lg font-semibold text-navy-950"
                    variants={scaleIn}
                  >
                    Thank you — we&apos;ll be in touch soon!
                  </motion.p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true)
                  }}
                  className="space-y-6"
                  variants={panelReveal(0.08, 0.2)}
                  exit={{ opacity: 0, y: 16 }}
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <FormField label="First Name">
                      <motion.input
                        required
                        type="text"
                        className={fieldClass}
                      />
                    </FormField>
                    <FormField label="Last Name">
                      <motion.input
                        required
                        type="text"
                        className={fieldClass}
                      />
                    </FormField>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <FormField label="Email">
                      <motion.input
                        required
                        type="email"
                        className={fieldClass}
                      />
                    </FormField>
                    <FormField label="Phone">
                      <motion.input
                        required
                        type="tel"
                        className={fieldClass}
                      />
                    </FormField>
                  </div>

                  <FormField label="Subject">
                    <motion.input
                      required
                      type="text"
                      className={fieldClass}
                    />
                  </FormField>

                  <FormField label="Type your message here..." className="[&_label]:text-navy-950/60">
                    <motion.textarea
                      required
                      rows={4}
                      className={`${fieldClass} resize-none`}
                    />
                  </FormField>

                  <motion.div variants={staggerItem} className="pt-4 text-center">
                    <motion.button
                      type="submit"
                      className="text-base font-semibold text-navy-950 transition hover:text-navy-800"
                      whileHover={{ scale: 1.06, y: -1 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ duration: 0.2, ease: EASE }}
                    >
                      Submit
                    </motion.button>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Bottom accent line */}
        <div className="h-1 bg-brand-500" />
      </motion.div>
    </section>
  )
}
