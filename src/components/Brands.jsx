import './Brands.css'

const brands = [
  { src: 'https://www.paypalobjects.com/marketing/web23/in/home/spotify-premium.png', alt: 'Spotify' },
  { src: 'https://www.paypalobjects.com/marketing/web23/in/home/asos.png', alt: 'ASOS' },
  { src: 'https://www.paypalobjects.com/marketing/web23/in/home/grab.png', alt: 'Grab' },
  { src: 'https://www.paypalobjects.com/marketing/web23/in/home/qoo10.png', alt: 'Qoo10' },
  { src: 'https://www.paypalobjects.com/marketing/web23/in/home/foodpanda.png', alt: 'Foodpanda' },
]

export default function Brands() {
  return (
    <section className="brands-section">
      <div className="container">
        <h2 className="section-title">Shop from brands you love.</h2>
        <div className="brands-grid">
          {brands.map((brand, i) => (
            <img key={i} src={brand.src} alt={brand.alt} className="brand-logo" />
          ))}
        </div>
      </div>
    </section>
  )
}
