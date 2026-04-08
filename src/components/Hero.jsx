import { useState, useEffect, useCallback } from 'react'
import { scrollToSupport } from '../utils/scrollToSupport'
import './Hero.css'

const slides = [
  {
    bg: 'https://www.paypalobjects.com/marketing/web23/in/home/hero-banner-desktop-1.jpg',
    h1: 'Secure payments. Smooth shopping.',
    p: 'More ways to pay and more places to shop. Send money quickly and easily around the globe.',
    btnText: 'Sign Up',
  },
  {
    bg: 'https://www.paypalobjects.com/marketing/web23/in/home/hero-banner-desktop-2.jpg',
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
    const timer = setInterval(() => goTo(current + 1), 3000)
    return () => clearInterval(timer)
  }, [current, goTo])

  return (
    <section className="hero">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide ${i === current ? 'active' : ''}`}
          style={{ backgroundImage: `url('${slide.bg}')` }}
        >
          <div className="hero-content">
            <h1>{slide.h1}</h1>
            <p>{slide.p}</p>
            <a href="/" onClick={scrollToSupport} className="btn btn-white-outline btn-lg">{slide.btnText}</a>
          </div>
        </div>
      ))}

      <div className="hero-arrows">
        <button className="hero-arrow" onClick={() => goTo(current - 1)}>&#10094;</button>
        <button className="hero-arrow" onClick={() => goTo(current + 1)}>&#10095;</button>
      </div>

      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  )
}
