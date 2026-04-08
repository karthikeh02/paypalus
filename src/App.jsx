import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
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

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cancellation" element={<Cancellation />} />
        <Route path="/cancellation/form" element={<CancellationForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
