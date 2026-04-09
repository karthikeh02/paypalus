import { motion } from 'motion/react'
import { scrollToSupport } from '../utils/scrollToSupport'
import { fadeUp, fadeLeft, fadeRight, viewportOnce, buttonHover, buttonTap } from '../animations'
import './BusinessSection.css'

export default function BusinessSection() {
  return (
    <section className="business-section">
      <div className="container">
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          Make and receive payments with ease.
        </motion.h2>
        <div className="business-grid">
          <motion.div
            className="business-text"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="business-item">
              <h3>Popular payments, happy customers.</h3>
              <p>Help maximise conversion and reduce cart abandonment with a wide range of digital payment options, customisable in one account.</p>
              <motion.a
                href="/"
                onClick={scrollToSupport}
                className="btn btn-filled-blue"
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                Optimise Checkout
              </motion.a>
            </div>
            <div className="business-item">
              <h3>Invoice and get paid fast.</h3>
              <p>Send unlimited invoices that customers can pay even if they don&apos;t have a PayPal account &ndash; with Seller Protection from fraud and unauthorised transactions.<sup>3</sup></p>
              <motion.a
                href="/"
                onClick={scrollToSupport}
                className="btn btn-filled-blue"
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                Send an Invoice
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            className="business-image"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <img
              src="https://www.paypalobjects.com/marketing/web23/in/home/paypal-for-business-m3-4.png"
              alt="PayPal Business App"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
