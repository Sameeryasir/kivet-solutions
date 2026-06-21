import { useState, useEffect, useCallback } from "react"
import { AnimatePresence, motion } from "framer-motion"

const SLIDE_MS = 5000

function Chevron({ direction }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      {direction === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
  )
}

/** Premium auto carousel — full image visible, cinematic frame */
export default function AutoCarousel({ items, interval = SLIDE_MS, className = "" }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const goTo = useCallback(
    (next) => {
      setIndex((next + items.length) % items.length)
    },
    [items.length]
  )

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index])
  const goNext = useCallback(() => goTo(index + 1), [goTo, index])

  useEffect(() => {
    if (items.length <= 1 || paused) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % items.length)
    }, interval)
    return () => clearInterval(timer)
  }, [items.length, paused, interval])

  const current = items[index]
  const prev = items[(index - 1 + items.length) % items.length]
  const next = items[(index + 1) % items.length]

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Ambient glow behind carousel */}
      <div
        className="pointer-events-none absolute -inset-4 rounded-[2rem] opacity-30 blur-3xl sm:-inset-6"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(230,255,68,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative overflow-hidden rounded-3xl border border-brand-500/20 bg-navy-900/60 shadow-2xl shadow-black/40 backdrop-blur-sm">
        {/* Main stage */}
        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[21/9]">
          {/* Soft blurred backdrop fills empty space — main image stays uncropped */}
          <AnimatePresence mode="wait">
            <motion.img
              key={`bg-${current.image}`}
              src={current.image}
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full scale-110 object-cover opacity-30 blur-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/20 via-transparent to-navy-950/80" />

          {/* Center image — never cropped */}
          <AnimatePresence mode="wait">
            <motion.img
              key={current.image}
              src={current.image}
              alt={current.title}
              className="absolute inset-0 z-10 m-auto max-h-[88%] max-w-[92%] rounded-2xl object-contain drop-shadow-2xl"
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.04, y: -12 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            />
          </AnimatePresence>

          {/* Side peek previews — desktop only */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-[5] hidden w-24 overflow-hidden rounded-l-2xl opacity-40 lg:block xl:w-32">
            <img src={prev.image} alt="" className="h-full w-full rounded-l-2xl object-cover blur-[1px]" aria-hidden />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 to-transparent" />
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 z-[5] hidden w-24 overflow-hidden rounded-r-2xl opacity-40 lg:block xl:w-32">
            <img src={next.image} alt="" className="h-full w-full rounded-r-2xl object-cover blur-[1px]" aria-hidden />
            <div className="absolute inset-0 bg-gradient-to-l from-navy-950/80 to-transparent" />
          </div>

          {/* Caption overlay */}
          <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-navy-950 via-navy-950/90 to-transparent px-6 pb-6 pt-16 sm:px-8 sm:pb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.image}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
              >
                <span className="inline-block rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-brand-400">
                  {current.category}
                </span>
                <h3 className="mt-3 font-display text-2xl text-white sm:text-3xl">{current.title}</h3>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav arrows */}
          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-navy-950/70 text-white backdrop-blur-md transition hover:border-brand-500/40 hover:bg-brand-500/20 hover:text-brand-400 sm:left-5"
              >
                <Chevron direction="left" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-navy-950/70 text-white backdrop-blur-md transition hover:border-brand-500/40 hover:bg-brand-500/20 hover:text-brand-400 sm:right-5"
              >
                <Chevron direction="right" />
              </button>
            </>
          )}

          {/* Slide counter */}
          <div className="absolute right-4 top-4 z-30 rounded-full border border-white/10 bg-navy-950/60 px-3 py-1 text-xs font-semibold tabular-nums text-slate-300 backdrop-blur-md sm:right-6 sm:top-6">
            <span className="text-brand-400">{String(index + 1).padStart(2, "0")}</span>
            <span className="text-white/30"> / </span>
            {String(items.length).padStart(2, "0")}
          </div>
        </div>

        {/* Auto-advance progress bar */}
        {items.length > 1 && !paused && (
          <motion.div
            key={index}
            className="h-1 origin-left bg-brand-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: interval / 1000, ease: "linear" }}
          />
        )}
        {items.length > 1 && paused && (
          <div className="h-1 bg-brand-500/30" />
        )}
      </div>

      {/* Thumbnail strip */}
      {items.length > 1 && (
        <div className="mt-6 flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item, i) => (
            <button
              key={item.image}
              type="button"
              aria-label={`Show ${item.title}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
              className={`relative shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                i === index
                  ? "w-20 border-brand-500 shadow-lg shadow-brand-500/20 sm:w-24"
                  : "w-16 border-transparent opacity-50 hover:opacity-80 sm:w-20"
              }`}
            >
              <img src={item.image} alt="" className="aspect-[4/3] w-full rounded-xl object-cover" />
              {i === index && (
                <div className="absolute inset-0 ring-2 ring-inset ring-brand-500/50" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
