import Icon from './Icon'
import { HERO, CONTACT } from '../data/content'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.radial} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <span className={styles.badge}>
          <span className={styles.dot} aria-hidden="true" />
          {HERO.badge}
        </span>

        <h1 className={styles.title}>
          {HERO.titleLines.map((line, i) => (
            <span
              key={line}
              className={i === HERO.highlightIndex ? styles.highlight : undefined}
            >
              {line}{' '}
            </span>
          ))}
        </h1>

        <p className={`lead ${styles.sub}`}>{HERO.subtitle}</p>

        <div className={styles.actions}>
          <a href={`mailto:${CONTACT.email}`} className="btn btn-primary">
            Book a Session
            <Icon name="arrowRight" size={20} />
          </a>
          <a href="#programs" className="btn btn-ghost">Explore Programs</a>
        </div>
      </div>

      <a href="#about" className={styles.scroll} aria-label="Scroll to about section">
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </a>
    </section>
  )
}
