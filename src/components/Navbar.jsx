import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'motion/react'
import { EASE, buttonHover, buttonTap } from '../animations'
import './Navbar.css'

const PPIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 48 48" className="pp-icon">
    <path fill="#003087" d="M 18.6 7 L 7 7 C 6.4 7 5.8 7.5 5.7 8.1 L 1.2 36.7 C 1.1 37.2 1.5 37.6 2 37.6 L 7.7 37.6 C 8.3 37.6 8.9 37.1 9 36.5 L 10.3 28.2 C 10.4 27.6 10.9 27.1 11.6 27.1 L 14.8 27.1 C 21.6 27.1 25.5 23.8 26.6 17.3 C 27 14.5 26.7 12.2 25.4 10.6 C 23.9 8.8 21.5 7 18.6 7 Z"/>
    <path fill="#009cde" d="M 32.6 7 L 28.4 7 C 27.8 7 27.2 7.5 27.1 8.1 L 22.6 36.7 C 22.5 37.2 22.9 37.6 23.4 37.6 L 29.4 37.6 C 30 37.6 30.6 37.1 30.7 36.5 L 32 28.2 C 32.1 27.6 32.6 27.1 33.3 27.1 L 36.5 27.1 C 43.3 27.1 47.2 23.8 48.3 17.3 C 48.7 14.5 48.4 12.2 47.1 10.6 C 45.6 8.8 43.2 7 40.3 7 Z"/>
  </svg>
)

const Chevron = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="nav-chevron">
    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

function NavLink({ children }) {
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
      whileHover={{ color: '#0070e0', y: -1 }}
      transition={{ duration: 0.18, ease: EASE }}
    >
      {children}
    </motion.a>
  )
}

export default function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <div className="container">
        <div className="navbar-left">
          <NavLink><span className="navbar-logo"><PPIcon /><span className="navbar-logo-text">PayPal</span></span></NavLink>
          <ul className="navbar-nav">
            <li><NavLink>Personal <Chevron /></NavLink></li>
            <li><NavLink>Small Business <Chevron /></NavLink></li>
            <li><NavLink>Enterprise <Chevron /></NavLink></li>
            <li><NavLink>Partners <Chevron /></NavLink></li>
            <li>
              <motion.span
                whileHover={{ color: '#0070e0', y: -1 }}
                transition={{ duration: 0.18, ease: EASE }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}
              >
                <Link to="/cancellation" style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                  Cancellation <Chevron />
                </Link>
              </motion.span>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <NavLink>
            <motion.span className="btn btn-nav-login nav-desktop-only" whileHover={buttonHover} whileTap={buttonTap}>
              Log In
            </motion.span>
          </NavLink>
          <NavLink>
            <motion.span className="btn btn-nav-signup nav-desktop-only" whileHover={buttonHover} whileTap={buttonTap}>
              Sign Up
            </motion.span>
          </NavLink>
          <Link to="/cancellation" className="nav-mobile-only">
            <motion.span className="btn btn-nav-cancellation" whileHover={buttonHover} whileTap={buttonTap}>
              Cancellation
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
