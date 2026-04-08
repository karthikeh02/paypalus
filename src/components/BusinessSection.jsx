import { scrollToSupport } from '../utils/scrollToSupport'
import './BusinessSection.css'

export default function BusinessSection() {
  return (
    <section className="business-section">
      <div className="container">
        <h2 className="section-title">Make and receive payments with ease.</h2>
        <div className="business-grid">
          <div className="business-text">
            <div className="business-item">
              <h3>Popular payments, happy customers.</h3>
              <p>Help maximise conversion and reduce cart abandonment with a wide range of digital payment options, customisable in one account.</p>
              <a href="/" onClick={scrollToSupport} className="btn btn-filled-blue">Optimise Checkout</a>
            </div>
            <div className="business-item">
              <h3>Invoice and get paid fast.</h3>
              <p>Send unlimited invoices that customers can pay even if they don&apos;t have a PayPal account &ndash; with Seller Protection from fraud and unauthorised transactions.<sup>3</sup></p>
              <a href="/" onClick={scrollToSupport} className="btn btn-filled-blue">Send an Invoice</a>
            </div>
          </div>
          <div className="business-image">
            <img
              src="https://www.paypalobjects.com/marketing/web23/in/home/paypal-for-business-m3-4.png"
              alt="PayPal Business App"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
