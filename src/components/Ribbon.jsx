import { scrollToSupport } from '../utils/scrollToSupport'
import './Ribbon.css'

export default function Ribbon() {
  return (
    <section className="ribbon">
      <div className="container">
        <div className="ribbon-text">
          <h3>Looking for PayPal Business Solutions?</h3>
          <p>Across regions and around the world, we are here to support you.</p>
        </div>
        <a href="/" onClick={scrollToSupport} className="btn btn-filled-blue">PayPal for business</a>
      </div>
    </section>
  )
}
