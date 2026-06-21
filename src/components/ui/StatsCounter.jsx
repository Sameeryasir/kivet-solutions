import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

function parseStat(value) {
  const str = String(value)
  const suffix = str.replace(/[\d,]/g, "")
  const num = parseFloat(str.replace(/,/g, "").replace(/[^\d.]/g, ""))
  return { num: Number.isFinite(num) ? num : 0, suffix, raw: str }
}

function formatNum(n, raw) {
  if (raw.includes(",")) return Math.round(n).toLocaleString()
  if (raw.includes(".")) return n.toFixed(0)
  return Math.round(n).toString()
}

export default function StatsCounter({ value, className = "" }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const { num, suffix, raw } = parseStat(value)
  const [display, setDisplay] = useState(raw)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - t) ** 3
      setDisplay(`${formatNum(num * eased, raw)}${suffix}`)
      if (t < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, num, suffix, raw])

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  )
}
