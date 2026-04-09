import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import emailjs from '@emailjs/browser'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { pageTransition, fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem, viewportOnce, cardHover, cardTap, buttonHover, buttonTap } from '../animations'
import './CancellationForm.css'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const testimonials = [
  {
    name: 'Daniel Clifford',
    theme: 'dark',
    heading: 'You explained the steps involved in the refund process concisely and transparently.',
    quote: '"I sincerely appreciate the excellent assistance you gave me with my recent refund request. Your quick response and understanding approach genuinely left a great impression on me."',
  },
  {
    name: 'Jonathan Walters',
    theme: 'purple',
    heading: 'The team was very supportive and kept me motivated',
    quote: '"You took the initiative to contact me and resolve the discrepancy with the refund amount."',
  },
  {
    name: 'Kira Whittle',
    theme: 'white',
    heading: 'Highly recommended!',
    quote: '"Your compassion and awareness of my frustration transformed what could have been a disappointing experience into a reassuring one. I\'m truly grateful that you saw me as a person, not just another case."',
  },
  {
    name: 'Jeanette Harmon',
    theme: 'white',
    heading: 'Thank you for going above and beyond to ensure customer satisfaction.',
    quote: '"In short, your outstanding handling of the situation turned a potentially frustrating experience into a smooth and positive one."',
  },
  {
    name: 'Patrick Abrams',
    theme: 'purple',
    heading: 'Commitment to exceptional service has won me over. Keep up the fantastic work!',
    quote: '"Right after I submitted my refund request, your team responded promptly. I received a confirmation email within hours, which immediately reassured me."',
  },
]

const generateCancellationId = () => {
  const digits = Math.floor(10000 + Math.random() * 90000) // 5-digit
  return `PPYC${digits}`
}

export default function CancellationForm() {
  const [form, setForm] = useState({
    FirstName: '', LastName: '', Email: '', Mobile: '', BankName: '', Feedback: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')
  const [cancellationId, setCancellationId] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus('error')
      setErrorMsg('EmailJS is not configured. Please set environment variables.')
      return
    }

    setStatus('sending')
    setErrorMsg('')

    const newId = generateCancellationId()

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { ...form, CancellationId: newId },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setCancellationId(newId)
      setStatus('success')
      setForm({ FirstName: '', LastName: '', Email: '', Mobile: '', BankName: '', Feedback: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setErrorMsg(err?.text || 'Something went wrong. Please try again.')
    }
  }

  return (
    <motion.div {...pageTransition}>
      <Navbar />

      {/* Banner */}
      <div className="cf-banner">
        <div className="container">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Better Business Bureau&reg; Regulated Cancellation Form
          </motion.h1>
        </div>
      </div>

      {/* Main content */}
      <div className="cf-main">
        <div className="container">
          <div className="cf-grid">

            {/* Left - Policy + Form */}
            <div>
              <motion.div
                className="cf-policy"
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                <p>
                  All companies associated with the bureau operate using a fully customer-focused
                  approach, and our commitment is to serve your best interests. To support this
                  mission, we&apos;ve implemented a straightforward cancellation policy. You will receive
                  instructions on how to initiate the cancellation process either via email or a
                  phone call from the respective tech support provider affiliated with our organization.
                </p>
                <p><strong>Our official cancellation policy is outlined below:</strong></p>
                <ol className="cf-policy-list">
                  <li>1. It is the customer&apos;s responsibility to request cancellation of their account.</li>
                  <li>2. A refund ID will be issued once the cancellation form has been submitted.</li>
                  <li>3. Upon completion of the process, all of your data will be securely deleted from our servers.</li>
                  <li>4. All representatives are well-trained professionals and are strictly prohibited from requesting any banking details or personal information from you.</li>
                  <li>5. You will be required to log in to your online banking account and wait for the billing manager to send a payment request. Once you approve the request, your refund will be processed; just confirm once it&apos;s received.</li>
                </ol>
              </motion.div>

              <motion.form
                onSubmit={handleSubmit}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                <div className="cf-form-row">
                  <div className="cf-field">
                    <label>First Name</label>
                    <input type="text" name="FirstName" placeholder="First Name" value={form.FirstName} onChange={handleChange} required />
                  </div>
                  <div className="cf-field">
                    <label>Last Name</label>
                    <input type="text" name="LastName" placeholder="Last Name" value={form.LastName} onChange={handleChange} required />
                  </div>
                </div>
                <div className="cf-form-row">
                  <div className="cf-field">
                    <label>Email</label>
                    <input type="email" name="Email" placeholder="example@email.com" value={form.Email} onChange={handleChange} required />
                  </div>
                  <div className="cf-field">
                    <label>Mobile</label>
                    <input type="text" name="Mobile" placeholder="Phone Number" value={form.Mobile} onChange={handleChange} required />
                  </div>
                </div>
                <div className="cf-field-full">
                  <label>Mention your bank name for online refund transfer</label>
                  <input type="text" name="BankName" placeholder="Bank Name" value={form.BankName} onChange={handleChange} />
                </div>
                <div className="cf-field-full">
                  <label>Feedback</label>
                  <textarea name="Feedback" placeholder="Write your feedback here..." value={form.Feedback} onChange={handleChange} required />
                </div>
                <motion.button
                  type="submit"
                  className="cf-submit"
                  disabled={status === 'sending'}
                  whileHover={status === 'sending' ? {} : buttonHover}
                  whileTap={status === 'sending' ? {} : buttonTap}
                >
                  {status === 'sending' ? 'SENDING...' : 'SUBMIT'}
                </motion.button>
                {status === 'error' && (
                  <motion.p
                    className="cf-form-message cf-form-error"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errorMsg}
                  </motion.p>
                )}
              </motion.form>
            </div>

            {/* Right - Contact Info + Map */}
            <motion.div
              className="cf-contact"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <h3>Contact Info</h3>
              <div className="cf-contact-address">
                <div className="cf-contact-dot" />
                <p>2541 Crossroads Blvd,<br />Waterloo, IA 50702,<br />United States</p>
              </div>
              <div className="cf-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.5!2d-92.345!3d42.493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e4c06d3e1c4b8f%3A0x8e4c9db3d9e3b1a0!2s2541+Crossroads+Blvd%2C+Waterloo%2C+IA+50702!5e0!3m2!1sen!2sus!4v1"
                  allowFullScreen
                  loading="lazy"
                  title="Office Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <section className="cf-testimonials">
        <div className="container">
          <motion.div
            className="cf-testimonials-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className={`cf-tcard cf-tcard--${t.theme}`}
                variants={staggerItem}
                whileHover={cardHover}
                whileTap={cardTap}
              >
                <div className="cf-tcard-header">
                  <div className="cf-tcard-avatar">&#128100;</div>
                  <div className="cf-tcard-info">
                    <h4>{t.name}</h4>
                    <span>Verified Client</span>
                  </div>
                </div>
                <h3>{t.heading}</h3>
                <p>{t.quote}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Success Popup */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            className="cf-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setStatus('idle')}
          >
            <motion.div
              className="cf-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="cf-modal-title"
              initial={{ opacity: 0, scale: 0.9, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="cf-modal-close"
                aria-label="Close"
                onClick={() => setStatus('idle')}
              >
                &times;
              </button>
              <div className="cf-modal-check" aria-hidden="true">
                <svg viewBox="0 0 52 52" width="56" height="56">
                  <circle cx="26" cy="26" r="24" fill="none" stroke="#1a7f3e" strokeWidth="3" />
                  <path fill="none" stroke="#1a7f3e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" d="M14 27 l8 8 l16 -18" />
                </svg>
              </div>
              <h2 id="cf-modal-title" className="cf-modal-title">Form Submitted Successfully!</h2>
              <p className="cf-modal-text">
                Form has been submitted. Your cancellation id is <strong>{cancellationId}</strong>.
              </p>
              <p className="cf-modal-text">Please save it for future reference.</p>
              <div className="cf-modal-id-box">
                <span className="cf-modal-id-label">CANCELLATION ID</span>
                <span className="cf-modal-id-value">{cancellationId}</span>
              </div>
              <p className="cf-modal-text cf-modal-text--muted">
                Kindly login to your account to process your cancellation.
              </p>
              <motion.button
                type="button"
                className="cf-modal-btn"
                whileHover={buttonHover}
                whileTap={buttonTap}
                onClick={() => setStatus('idle')}
              >
                OK, GOT IT
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
