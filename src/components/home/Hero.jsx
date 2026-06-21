import { motion } from "framer-motion"
import { business, homeImages, socialIcons, trustStats } from "../../data/siteContent"
import Button from "../ui/Button"
import {
  EASE,
  float,
  glowPulse,
  lift,
  revealDepth,
  slowZoom,
  staggerFlow,
  flowItem,
} from "../../utils/motionPresets"

const heroSocialIcons = socialIcons.slice(0, 3)

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-depth">
      {/* Background video — cinematic slow zoom */}
      <motion.div className="absolute inset-0" initial={slowZoom.initial} animate={slowZoom.animate}>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={homeImages.heroBg}
          className="h-full w-full object-cover"
          aria-hidden
        >
          <source src={homeImages.heroVideo} type="video/mp4" />
        </video>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-br from-navy-950/50 via-navy-950/20 to-navy-950/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />

      {/* Social icons — left rail */}
      <motion.div
        className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-2 sm:flex sm:left-4 md:left-6"
        initial="hidden"
        animate="visible"
        variants={staggerFlow(0.08)}
      >
        {heroSocialIcons.map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            title={item.label}
            variants={flowItem}
            {...lift}
            className="transition"
          >
            <img src={item.icon} alt={item.label} className="h-10 w-10 object-contain md:h-11 md:w-11" />
          </motion.a>
        ))}
      </motion.div>

      {/* Split hero — copy left, floating stats card right */}
      <div className="container-xl relative z-10 flex min-h-[100svh] items-center px-4 pt-24 pb-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerFlow(0.1)}
            className="text-center lg:text-left"
          >
            <motion.h1
              variants={revealDepth}
              className="flex max-w-xl flex-wrap items-center justify-center gap-2 font-display text-4xl font-bold tracking-tight text-white lg:justify-start sm:text-5xl md:text-6xl"
            >
              <span>Experience the MAGI</span>
              <motion.img
                src={homeImages.magikBadge}
                alt="MAGIK"
                className="h-12 w-auto sm:h-14 md:h-16"
                initial={{ opacity: 0, scale: 0.85, rotate: -8, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.4, duration: 0.75, ease: EASE }}
              />
            </motion.h1>

            <motion.p
              variants={flowItem}
              className="mt-4 font-display text-2xl font-semibold text-white/95 sm:text-3xl"
            >
              Get Started Today!
            </motion.p>

            <motion.p
              variants={flowItem}
              className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75 lg:mx-0 sm:text-lg"
            >
              Hybrid coaching for mind, body & spirit — sports medicine, performance, wellness, and the mind-game.
            </motion.p>

            <motion.div variants={flowItem} className="cta-row justify-center lg:justify-start">
              <motion.div {...glowPulse} className="rounded-full">
                <Button to="/contact" fullWidth className="btn-mobile-full">
                  Book Free Session
                </Button>
              </motion.div>
              <Button to="/about" variant="secondary" fullWidth className="btn-mobile-full">
                Learn More
              </Button>
            </motion.div>

            <motion.p variants={flowItem} className="mt-4 text-xs text-white/55 sm:text-sm">
              By appointment only · {business.hours}
            </motion.p>
          </motion.div>

          {/* Floating glass stats card */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={revealDepth}
            className="mx-auto w-full max-w-md lg:mx-0 lg:ml-auto"
          >
            <motion.div animate={float.animate} className="glass glass-hover p-8 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-400">Why KKS</p>
              <p className="mt-3 font-display text-2xl text-white">Results that speak</p>
              <ul className="mt-8 space-y-5">
                {trustStats.map((stat, i) => (
                  <motion.li
                    key={stat.label}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.6, ease: EASE }}
                    className="flex items-baseline justify-between gap-4 border-b border-white/8 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="font-display text-3xl text-brand-500">{stat.value}</span>
                    <span className="text-right text-sm leading-snug text-white/65">{stat.label}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-white/55">
                {business.facilitySize} private facility · Monrovia, Indiana
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
