import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Cancellation.css'

const terms = [
  '1. The "Better Business Bureau \u00AE\uFE0F" and the "ATTORNEY GENERAL \u00A9\uFE0F" are in charge of supervising and overseeing all of these refund-related business operations.',
  '2. Charges will be indicated within the following 24 hours, contingent upon the client\'s banking institution, due to an auto-renewal setup for Paypal\u00AE\uFE0F.',
  '3. You are not required to provide any personal information or banking credentials over the phone throughout the refund procedure. To accept the reimbursement from your end, you must log into your online bank account autonomously.',
  '4. A reimbursement ID will be generated once you complete your cancellation form; please give it to the billing team so that it may be verified.',
  '5. If you are in agreement with everything mentioned above and have no questions, click agree to go to the next section.',
]

export default function Cancellation() {
  const navigate = useNavigate()
  const [answers, setAnswers] = useState(Array(terms.length).fill(null))

  const setAnswer = (index, value) => {
    const next = [...answers]
    next[index] = value
    setAnswers(next)
  }

  const allAgreed = answers.every(a => a === 'agree')

  const handleContinue = () => {
    if (allAgreed) {
      navigate('/cancellation/form')
    }
  }

  return (
    <>
      <Navbar />
      <div className="cancellation-page">
        <div className="cancellation-container">
          <h1 className="cancellation-heading">Terms & Conditions :</h1>

          {terms.map((text, i) => (
            <div className="term-card" key={i}>
              <p className="term-text">{text}</p>
              <div className="term-options">
                <label className="term-option">
                  <input
                    type="checkbox"
                    checked={answers[i] === 'agree'}
                    onChange={() => setAnswer(i, answers[i] === 'agree' ? null : 'agree')}
                  />
                  Agree
                </label>
                <label className="term-option">
                  <input
                    type="checkbox"
                    checked={answers[i] === 'disagree'}
                    onChange={() => setAnswer(i, answers[i] === 'disagree' ? null : 'disagree')}
                  />
                  Disagree
                </label>
              </div>
            </div>
          ))}

          <div className="cancellation-note">
            <p><strong>NOTE :</strong> You are connected to the secured network of Paypal&reg; securities for your removal Of the Auto-Payment Set-up,</p>
            <p>Once your REFUND-ID is generated you will be disconnected from the Secured network.</p>
            <p>As Per The regulations & guidelines of Better Business Bureau&reg;.</p>
          </div>

          <button
            className={`cancellation-continue ${allAgreed ? '' : 'disabled'}`}
            onClick={handleContinue}
            disabled={!allAgreed}
          >
            CONTINUE
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}
