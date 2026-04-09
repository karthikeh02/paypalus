import { motion } from 'motion/react'
import { scrollToSupport } from '../utils/scrollToSupport'
import { fadeUp, viewportOnce, buttonHover, buttonTap } from '../animations'
import './Ribbon.css'

export default function Ribbon() {
  return (
    <motion.section
      className="ribbon"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="container">
        <div className="ribbon-text">
          <h3>Looking for PayPal Business Solutions?</h3>
          <p>Across regions and around the world, we are here to support you.</p>
        </div>
        <motion.a
          href="/"
          onClick={scrollToSupport}
          className="btn btn-filled-blue"
          whileHover={buttonHover}
          whileTap={buttonTap}
        >
          PayPal for business
        </motion.a>
      </div>
    </motion.section>
  )
}
