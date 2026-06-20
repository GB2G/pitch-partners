import { MEDIA, NAV_LINKS } from '../data/content'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <a href="#home" className={styles.logo} aria-label="Pitch Partners — home">
          <img src={MEDIA.logo} alt="Pitch Partners" />
        </a>

        <p className={styles.copy}>© Pitch Partners {new Date().getFullYear()}. All rights reserved.</p>

        <nav className={styles.links} aria-label="Footer">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
