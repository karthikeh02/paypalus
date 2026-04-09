import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'motion/react'
import { fadeUp, viewportOnce } from '../animations'
import './Footer.css'

const IndiaFlag = () => (
  <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
    <rect width="24" height="16" rx="2" fill="#fff" stroke="#eee" strokeWidth="0.5"/>
    <rect width="24" height="5.33" fill="#FF9933"/>
    <rect y="5.33" width="24" height="5.33" fill="#fff"/>
    <rect y="10.67" width="24" height="5.33" fill="#138808"/>
    <circle cx="12" cy="8" r="1.8" fill="#000080"/>
  </svg>
)

function FooterLink({ children }) {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleClick = (e) => {
    e.preventDefault()
    if (pathname === '/') {
      document.getElementById('supportbtn')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: 'supportbtn' } })
    }
  }

  return (
    <motion.a
      href="/"
      onClick={handleClick}
      whileHover={{ x: 2, color: '#0070e0' }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.a>
  )
}

export default function Footer() {
  return (
    <>
      {/* Terms & Conditions Section */}
      <motion.section
        className="terms-section"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className="container">
          <h4 className="terms-heading">Terms & Conditions:</h4>
          <p>* Buyer Protection is available on eligible purchases only. See the Buyer Protection section of the User Agreement for more information.</p>
          <p>** Subject to issuer&apos;s reward programme terms and conditions.</p>
          <br />
          <p><sup>1</sup> Reward scheme terms may differ when using PayPal. Please refer to your card issuer.</p>
          <p><sup>2</sup> For eligible purchases within 180 days of payment. Terms and conditions apply.</p>
          <p><sup>3</sup> Available on eligible purchases. Limitations apply.</p>
          <p><sup>4</sup> PayPal Earnings&ndash;Q1, 2024, based on PayPal internal data. Active accounts are accounts that have completed a transaction within the past 12 months.</p>
          <p><sup>5</sup> PayPal Earnings&ndash;Q1, 2024, based on PayPal internal data.</p>
          <p><sup>6</sup> PayPal Earnings&ndash;Q1, 2024, based on PayPal internal data.</p>
          <p><sup>7</sup> Nielsen, commissioned by PayPal, Nielsen Media Attitudinal Survey of USA (Feb 2023) with 3,999 recent purchasers (past 2 weeks) from large enterprise merchants, including 1,999 PayPal transactions & 2,000 non&ndash;PayPal transactions. Base N. PayPal users = 3,350.</p>
          <br />
          <p>PayPal Services in India are provided by PayPal Payments Private Limited (CIN U74990MH2009PTC194653). Users are advised to read the terms and conditions carefully.</p>
          <br />
          <p>When you visit or interact with our sites, services, applications, tools or messaging, we or our authorised service providers may use cookies, web beacons, and other similar technologies for storing information to help provide you with a better, faster and safer experience and for advertising purposes. Learn more here.</p>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="footer"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className="container">
          <div className="footer-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
              <path fill="#003087" d="M 18.6 7 L 7 7 C 6.4 7 5.8 7.5 5.7 8.1 L 1.2 36.7 C 1.1 37.2 1.5 37.6 2 37.6 L 7.7 37.6 C 8.3 37.6 8.9 37.1 9 36.5 L 10.3 28.2 C 10.4 27.6 10.9 27.1 11.6 27.1 L 14.8 27.1 C 21.6 27.1 25.5 23.8 26.6 17.3 C 27 14.5 26.7 12.2 25.4 10.6 C 23.9 8.8 21.5 7 18.6 7 Z"/>
              <path fill="#009cde" d="M 32.6 7 L 28.4 7 C 27.8 7 27.2 7.5 27.1 8.1 L 22.6 36.7 C 22.5 37.2 22.9 37.6 23.4 37.6 L 29.4 37.6 C 30 37.6 30.6 37.1 30.7 36.5 L 32 28.2 C 32.1 27.6 32.6 27.1 33.3 27.1 L 36.5 27.1 C 43.3 27.1 47.2 23.8 48.3 17.3 C 48.7 14.5 48.4 12.2 47.1 10.6 C 45.6 8.8 43.2 7 40.3 7 Z"/>
            </svg>
            <span className="footer-logo-text">PayPal</span>
          </div>

          <div className="footer-row footer-row-primary">
            <div className="footer-row-links">
              <FooterLink>Help</FooterLink>
              <FooterLink>Contact us</FooterLink>
              <FooterLink>Fees</FooterLink>
              <FooterLink>Security</FooterLink>
              <FooterLink>Shop</FooterLink>
            </div>
            <IndiaFlag />
          </div>

          <hr className="footer-divider" />

          <div className="footer-row">
            <FooterLink>About</FooterLink>
            <FooterLink>Newsroom</FooterLink>
            <FooterLink>Jobs</FooterLink>
            <FooterLink>Developers</FooterLink>
            <FooterLink>Partners</FooterLink>
          </div>

          <div className="footer-row" style={{ marginTop: '16px' }}>
            <FooterLink>Accessibility</FooterLink>
            <FooterLink>Cookies</FooterLink>
            <FooterLink>Privacy</FooterLink>
            <FooterLink>CSR</FooterLink>
            <FooterLink>Annual Returns</FooterLink>
            <FooterLink>Legal</FooterLink>
          </div>

          <div className="footer-legal">
            <p>PayPal Services in India are provided by PayPal Payments Private Limited (CIN U74990MH2009PTC194653). Users are advised to read the terms and conditions carefully.</p>
            <p>When you visit or interact with our sites, services, applications, tools or messaging, we or our authorised service providers may use cookies, web beacons, and other similar technologies for storing information to help provide you with a better, faster and safer experience and for advertising purposes. Learn more here.</p>
          </div>
        </div>
      </motion.footer>
    </>
  )
}
