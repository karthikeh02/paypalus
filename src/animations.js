// Shared animation tokens & variants for the whole site.
// All components import from here for consistency.

export const EASE = [0.22, 1, 0.36, 1] // soft easeOutExpo
export const DURATION = 0.5
export const STAGGER = 0.08

// Page route transitions (used by AnimatePresence)
export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -12 },
  transition: { duration: 0.35, ease: EASE },
}

// Section reveals
export const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION, ease: EASE } },
}
export const fadeLeft = {
  hidden:  { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: DURATION, ease: EASE } },
}
export const fadeRight = {
  hidden:  { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: DURATION, ease: EASE } },
}

// Stagger
export const staggerContainer = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: STAGGER, delayChildren: 0.1 },
  },
}
export const staggerItem = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
}

// Micro-interactions
export const buttonHover = { scale: 1.03, transition: { duration: 0.18, ease: EASE } }
export const buttonTap   = { scale: 0.97 }
export const cardHover   = { scale: 1.02, y: -4, transition: { duration: 0.22, ease: EASE } }
export const cardTap     = { scale: 0.98 }

// Hero crossfade
export const heroSlide = {
  enter:  { opacity: 0, scale: 1.03 },
  center: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: EASE } },
  exit:   { opacity: 0, scale: 1, transition: { duration: 0.6, ease: EASE } },
}

// Shared viewport config — fires once per element on first view
export const viewportOnce = { once: true, amount: 0.2 }
