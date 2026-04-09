import { motion } from 'motion/react'
import { scrollToSupport } from '../utils/scrollToSupport'
import { fadeUp, staggerContainer, staggerItem, viewportOnce, cardHover, cardTap, buttonHover, buttonTap } from '../animations'
import './ShoppingCards.css'

const cards = [
  {
    img: 'https://www.paypalobjects.com/marketing/web23/in/home/shopping-mall-m3-1.jpg',
    alt: 'The world is your shopping mall',
    title: 'The world is your shopping mall.',
    desc: 'From big brands to little boutiques, you can shop safely at over millions of online stores with PayPal.',
    btn: 'Shop Now',
  },
  {
    img: 'https://www.paypalobjects.com/marketing/web23/in/home/preferred-card-m3-2.jpg',
    alt: 'Pay with your preferred card',
    title: 'Pay with your preferred card.',
    desc: <>Link all your cards and choose which one to use at checkout. Shopping online has never been this easy. You can also keep earning rewards from your favourite cards.<sup>1</sup></>,
    btn: 'Link a Card Now',
  },
  {
    img: 'https://www.paypalobjects.com/marketing/web23/in/home/online-confidence-m3-3.jpg',
    alt: 'Shop online with confidence',
    title: 'Shop online with confidence.',
    desc: <>Shop online with confidence &ndash; with 24/7 fraud monitoring and Buyer Protection<sup>2</sup> on eligible purchases.</>,
    btn: 'Find Out More',
  },
]

export default function ShoppingCards() {
  return (
    <section className="shopping-section">
      <div className="container">
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          Find more ways to shop with PayPal for you.
        </motion.h2>
        <motion.div
          className="cards-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {cards.map((card, i) => (
            <motion.div
              className="card"
              key={i}
              variants={staggerItem}
              whileHover={cardHover}
              whileTap={cardTap}
            >
              <img src={card.img} alt={card.alt} className="card-img" />
              <div className="card-body">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <motion.a
                  href="/"
                  onClick={scrollToSupport}
                  className="btn btn-filled-blue"
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                >
                  {card.btn}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
