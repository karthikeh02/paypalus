import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { scrollToSupport } from '../utils/scrollToSupport'
import { heroSlide, EASE, buttonHover, buttonTap } from '../animations'
import heroBanner1 from '../assets/hero-banner-desktop-1.jpg'
import heroBanner2 from '../assets/hero-banner-desktop-2.jpg'
import './Hero.css'

const slides = [
  {
    bg: heroBanner1,
    h1: 'Secure payments. Smooth shopping.',
    p: 'More ways to pay and more places to shop. Send money quickly and easily around the globe.',
    btnText: 'Sign Up',
  },
  {
    bg: heroBanner2,
    h1: 'Sell just about anywhere in the world.',
    p: 'Whether you have an online shop or need to accept payments remotely, we can help you get paid fast.',
    btnText: 'Connect With Us',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  const goTo = useCallback((index) => {
    setCurrent((index + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 4000)
    return () => clearInterval(timer)
  }, [current, goTo])

  const slide = slides[current]

  return (
    <section className="hero">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={current}
          className="hero-slide"
          style={{ backgroundImage: `url('${slide.bg}')` }}
          variants={heroSlide}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
          >
            <h1>{slide.h1}</h1>
            <p>{slide.p}</p>
            <motion.a
              href="/"
              onClick={scrollToSupport}
              className="btn btn-white-outline btn-lg"
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              {slide.btnText}
            </motion.a>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="hero-arrows">
        <motion.button
          className="hero-arrow"
          onClick={() => goTo(current - 1)}
          whileHover={{ scale: 1.15, backgroundColor: 'rgba(255,255,255,0.4)' }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.18, ease: EASE }}
        >
          &#10094;
        </motion.button>
        <motion.button
          className="hero-arrow"
          onClick={() => goTo(current + 1)}
          whileHover={{ scale: 1.15, backgroundColor: 'rgba(255,255,255,0.4)' }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.18, ease: EASE }}
        >
          &#10095;
        </motion.button>
      </div>

      <div className="hero-dots">
        {slides.map((_, i) => (
          <motion.button
            key={i}
            className="hero-dot"
            onClick={() => goTo(i)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              width: i === current ? 24 : 10,
              backgroundColor: i === current ? '#fff' : 'rgba(255,255,255,0.45)',
            }}
            transition={{ duration: 0.3, ease: EASE }}
          />
        ))}
      </div>
    </section>
  )
}
