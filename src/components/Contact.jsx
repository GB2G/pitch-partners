import Icon from './Icon'
import useReveal from '../hooks/useReveal'
import { CONTACT } from '../data/content'
import styles from './Contact.module.css'

const CARDS = [
  { icon: 'mail', label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}`, external: false },
  { icon: 'instagram', label: 'Instagram', value: CONTACT.instagram.handle, href: CONTACT.instagram.url, external: true },
  { icon: 'linkedin', label: 'LinkedIn', value: CONTACT.linkedin.handle, href: CONTACT.linkedin.url, external: true },
]

export default function Contact() {
  const [ref, inView] = useReveal()
  return (
    <section id="contact" className={`section ${styles.contact}`} ref={ref}>
      <div className="container">
        <p className={`eyebrow reveal ${inView ? 'is-in' : ''}`}>Get In Touch</p>
        <h2 className={`section-title reveal delay-1 ${inView ? 'is-in' : ''}`}>
          Contact <span className="gold-text">Us</span>
        </h2>

        <ul className={`${styles.list} reveal delay-2 ${inView ? 'is-in' : ''}`}>
          {CARDS.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                className={styles.row}
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className={styles.iconWrap}>
                  <Icon name={c.icon} size={20} />
                </span>
                <span className={styles.label}>{c.label}</span>
                <span className={styles.value}>{c.value}</span>
                <span className={styles.arrow}>
                  <Icon name="arrowRight" size={18} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
