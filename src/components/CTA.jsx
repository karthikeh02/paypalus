import { scrollToSupport } from '../utils/scrollToSupport'
import './CTA.css'

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>Join the global community of PayPal users who are sending, spending, and receiving money securely every day.</h2>
        <a href="/" onClick={scrollToSupport} className="btn btn-white-filled btn-lg">Sign Up Now</a>
      </div>
    </section>
  )
}
