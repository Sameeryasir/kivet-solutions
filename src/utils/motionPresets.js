/**
 * Premium motion language — physical lift, depth reveal, controlled stagger.
 * Legacy names (fadeUp, staggerContainer, etc.) map to these presets for compatibility.
 */
export const EASE = [0.22, 1, 0.36, 1]

const DEPTH_TRANSITION = { duration: 0.7, ease: EASE }
const FLOW_TRANSITION = { duration: 0.6, ease: EASE }

/** Primary scroll reveal — depth + soft de-blur */
export const revealDepth = {
  hidden: { opacity: 0, y: 24, scale: 0.98, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: DEPTH_TRANSITION,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: DEPTH_TRANSITION,
  },
}

/** Stagger parent — subtle delayed cascade */
export const staggerFlow = (stagger = 0.08) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: 0.1 },
  },
  show: {
    transition: { staggerChildren: stagger, delayChildren: 0.1 },
  },
})

/** Stagger child — flows upward into place */
export const flowItem = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: FLOW_TRANSITION,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: FLOW_TRANSITION,
  },
}

/** Premium hover — spring lift, not zoom */
export const lift = {
  whileHover: {
    y: -6,
    scale: 1.02,
    transition: { type: "spring", stiffness: 260, damping: 18 },
  },
  whileTap: {
    y: -2,
    scale: 0.98,
    transition: { type: "spring", stiffness: 400, damping: 22 },
  },
}

/** Hero-only ambient float */
export const float = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
}

/** CTA accent pulse — use sparingly */
export const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 0px rgba(230,255,68,0)",
      "0 0 30px rgba(230,255,68,0.25)",
      "0 0 0px rgba(230,255,68,0)",
    ],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
}

export const viewportOnce = { once: true, margin: "-80px" }

export const slowZoom = {
  initial: { scale: 1 },
  animate: {
    scale: 1.06,
    transition: { duration: 14, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" },
  },
}

/** Image / card scale-in with depth */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: EASE },
  },
}

// --- Legacy aliases (keep existing imports working) ---
export const fadeUp = revealDepth
export const fadeUpScale = revealDepth
export const staggerContainer = staggerFlow
export const staggerItem = flowItem
export const pulseGlow = glowPulse

export const heartbeat = {
  animate: {
    scale: [1, 1.03, 1, 1.015, 1],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
}
