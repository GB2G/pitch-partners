import Icon from './Icon'
import useReveal from '../hooks/useReveal'
import { CONTACT } from '../data/content'
import styles from './CTA.module.css'

export default function CTA() {
  const [ref, inView] = useReveal()
  return (
    <section className={styles.cta} ref={ref}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <p className={`eyebrow reveal ${inView ? 'is-in' : ''}`}>Get Started</p>
        <h2 className={`section-title reveal delay-1 ${inView ? 'is-in' : ''}`}>
          Ready to <span className="gold-text">Elevate</span> Your Game?
        </h2>
        <p className={`lead ${styles.text} reveal delay-2 ${inView ? 'is-in' : ''}`}>
          Join a community of passionate footballers dedicated to excellence. Your pathway to
          success starts with a single step.
        </p>
        <a
          href={`mailto:${CONTACT.email}`}
          className={`btn btn-primary reveal delay-3 ${inView ? 'is-in' : ''}`}
        >
          Book a Session Today
          <Icon name="arrowRight" size={20} />
        </a>
      </div>
    </section>
  )
}
