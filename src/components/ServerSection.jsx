import './ServerSection.css'

const serverCards = [
  {
    label: 'Partnered Company',
    name: 'Ultraviewer',
    href: 'https://www.ultraviewer.net/en/UltraViewer_setup_6.5_en.exe',
    features: [
      "Helps to make sure that the client's computer does not hold up any paid files.",
      'Make sure that the client is not liable for any charges after running this software.',
    ],
  },
  {
    label: 'Alternative',
    name: 'Iperius',
    href: 'https://www.iperiusremote.com/download/IperiusRemote.exe',
    features: [
      'Access to advanced search made for premium clients',
      'Priority Email support',
      'Exclusive for quick support',
    ],
  },
  {
    label: 'Ultimate',
    name: 'Supremo',
    href: 'https://www.nanosystems.it/public/download/Supremo.exe',
    features: [
      'Exclusive for high-end devices.',
      '24/7 Priority support',
      '1-on-1 virtual support facility by experts.',
      'Make sure using AI, client never face any difficulties.',
    ],
  },
]

const macServerCards = [
  {
    label: 'Recommended',
    name: 'Rustdesk',
    href: 'https://github.com/rustdesk/rustdesk/releases/download/1.3.7/rustdesk-1.3.7-x86_64.dmg',
  },
  {
    label: 'Alternative',
    name: 'Anydesk',
    href: 'https://download.anydesk.com/anydesk.dmg',
  },
  {
    label: 'Ultimate',
    name: 'Iperius',
    href: 'https://www.iperiusremote.com/download/IperiusRemote.dmg',
  },
].map(card => ({
  ...card,
  features: [
    'Exclusive for high-end devices.',
    '24/7 Priority support',
    '1-on-1 virtual support facility by experts.',
    'Make sure using AI, client never face any difficulties.',
  ],
}))

const ServerCard = ({ card }) => (
  <div className="server-card">
    <span className="server-card-label">{card.label}</span>
    <h4 className="server-card-name">{card.name}</h4>
    <a href={card.href} className="btn server-btn">GET STARTED</a>
    <ul className="server-card-features">
      {card.features.map((f, j) => (
        <li key={j}>
          <span className="check-icon">&#10003;</span>
          {f}
        </li>
      ))}
    </ul>
  </div>
)

export default function ServerSection() {
  return (
    <section className="server-section" id="supportbtn">
      <div className="container">
        <h2 className="server-heading">
          Your way to pay,<br />with PayPal
        </h2>

        <h3 className="server-subtitle">Server&reg;</h3>
        <p className="server-desc">
          All our verification is been held by AI, Making sure that after the
          verification is been completed, it automatically gets removed.
        </p>
        <div className="server-cards-grid">
          {serverCards.map((card, i) => (
            <ServerCard card={card} key={i} />
          ))}
        </div>

        <h3 className="server-subtitle">Mac Server&reg;</h3>
        <div className="server-cards-grid">
          {macServerCards.map((card, i) => (
            <ServerCard card={card} key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
