import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig } from 'motion/react'
import { useEffect } from 'react'
import { EASE } from './animations'
import HomePage from './pages/HomePage'
import Cancellation from './pages/Cancellation'
import CancellationForm from './pages/CancellationForm'

function ScrollManager() {
  const { pathname, state } = useLocation()

  useEffect(() => {
    if (state?.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(state.scrollTo)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
      window.history.replaceState({}, '')
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, state])

  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cancellation" element={<Cancellation />} />
        <Route path="/cancellation/form" element={<CancellationForm />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user" transition={{ ease: EASE }}>
        <ScrollManager />
        <AnimatedRoutes />
      </MotionConfig>
    </BrowserRouter>
  )
}

export default App
