import { motion } from 'motion/react'
import { pageTransition } from '../animations'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Ribbon from '../components/Ribbon'
import ServerSection from '../components/ServerSection'
import ShoppingCards from '../components/ShoppingCards'
import BusinessSection from '../components/BusinessSection'
import Stats from '../components/Stats'
import Brands from '../components/Brands'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <motion.div {...pageTransition}>
      <Navbar />
      <Hero />
      <Ribbon />
      <ServerSection />
      <ShoppingCards />
      <BusinessSection />
      <Stats />
      <Brands />
      <CTA />
      <Footer />
    </motion.div>
  )
}
