import { motion } from 'motion/react'
import { scrollToSupport } from '../utils/scrollToSupport'
import { fadeUp, viewportOnce, buttonHover, buttonTap } from '../animations'
import './CTA.css'

export default function CTA() {
  return (
    <motion.section
      className="cta-section"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="container">
        <h2>Join the global community of PayPal users who are sending, spending, and receiving money securely every day.</h2>
        <motion.a
          href="/"
          onClick={scrollToSupport}
          className="btn btn-white-filled btn-lg"
          whileHover={buttonHover}
          whileTap={buttonTap}
        >
          Sign Up Now
        </motion.a>
      </div>
    </motion.section>
  )
}
