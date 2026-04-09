import { motion } from 'motion/react'
import { fadeUp, viewportOnce } from '../animations'
import './Brands.css'

const brands = [
  { src: 'https://www.paypalobjects.com/marketing/web23/in/home/spotify-premium.png', alt: 'Spotify' },
  { src: 'https://www.paypalobjects.com/marketing/web23/in/home/asos.png', alt: 'ASOS' },
  { src: 'https://www.paypalobjects.com/marketing/web23/in/home/grab.png', alt: 'Grab' },
  { src: 'https://www.paypalobjects.com/marketing/web23/in/home/qoo10.png', alt: 'Qoo10' },
  { src: 'https://www.paypalobjects.com/marketing/web23/in/home/foodpanda.png', alt: 'Foodpanda' },
]

const brandsContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
}

const brandItem = {
  hidden:  { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

export default function Brands() {
  return (
    <section className="brands-section">
      <div className="container">
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          Shop from brands you love.
        </motion.h2>
        <motion.div
          className="brands-grid"
          variants={brandsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {brands.map((brand, i) => (
            <motion.img
              key={i}
              src={brand.src}
              alt={brand.alt}
              className="brand-logo"
              variants={brandItem}
              whileHover={{ scale: 1.08, opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
