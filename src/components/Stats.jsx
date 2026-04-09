import { motion } from 'motion/react'
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../animations'
import './Stats.css'

const stats = [
  {
    icon: 'https://www.paypalobjects.com/marketing/web23/in/home/active-account-m4-1.png',
    alt: 'Active accounts',
    text: <>427M active accounts.<sup>4</sup></>,
  },
  {
    icon: 'https://www.paypalobjects.com/marketing/web23/in/home/payment-tansactions-m4-2.png',
    alt: 'Payment transactions',
    text: <>6.5B Total payment transactions.<sup>6</sup></>,
  },
  {
    icon: 'https://www.paypalobjects.com/marketing/web23/in/home/payment-valume-m4-3.png',
    alt: 'Payment volume',
    text: <>$403.9B total payment volume.<sup>5</sup></>,
  },
  {
    icon: 'https://www.paypalobjects.com/marketing/web23/in/home/buyer-confidence-m4-4.png',
    alt: 'Buyer confidence',
    text: <>74% increase in buyer confidence.<sup>7</sup></>,
  },
]

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          PayPal by the numbers.
        </motion.h2>
        <motion.div
          className="stats-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {stats.map((stat, i) => (
            <motion.div
              className="stat-item"
              key={i}
              variants={staggerItem}
              whileHover={{ y: -4, scale: 1.05, transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }}
            >
              <img src={stat.icon} alt={stat.alt} className="stat-icon" />
              <p>{stat.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
