import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './CancellationForm.css'

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

export default function CancellationForm() {
  const [form, setForm] = useState({
    FirstName: '', LastName: '', Email: '', Mobile: '', BankName: '', Feedback: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Placeholder for EmailJS integration
    console.log('Form submitted:', form)
    alert('Form submitted successfully! Your Refund ID will be generated shortly.')
  }

  return (
    <>
      <Navbar />

      {/* Banner */}
      <div className="cf-banner">
        <div className="container">
          <h1>Better Business Bureau&reg; Regulated Cancellation Form</h1>
        </div>
      </div>

      {/* Main content */}
      <div className="cf-main">
        <div className="container">
          <div className="cf-grid">

            {/* Left - Policy + Form */}
            <div>
              <div className="cf-policy">
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
              </div>

              <form onSubmit={handleSubmit}>
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
                <button type="submit" className="cf-submit">SUBMIT</button>
              </form>
            </div>

            {/* Right - Contact Info + Map */}
            <div className="cf-contact">
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
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <section className="cf-testimonials">
        <div className="container">
          <div className="cf-testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className={`cf-tcard cf-tcard--${t.theme}`}>
                <div className="cf-tcard-header">
                  <div className="cf-tcard-avatar">&#128100;</div>
                  <div className="cf-tcard-info">
                    <h4>{t.name}</h4>
                    <span>Verified Client</span>
                  </div>
                </div>
                <h3>{t.heading}</h3>
                <p>{t.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
