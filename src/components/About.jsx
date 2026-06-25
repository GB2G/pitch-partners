import useReveal from '../hooks/useReveal'
import { ABOUT, MEDIA } from '../data/content'
import styles from './About.module.css'

export default function About() {
  const [ref, inView] = useReveal()
  return (
    <section id="about" className={`section ${styles.about}`} ref={ref}>
      <div className={`container ${styles.grid}`}>
        <div className={`${styles.media} reveal delay-1 ${inView ? 'is-in' : ''}`}>
          <div className={styles.frame}>
            <img
              src={MEDIA.founder}
              alt={`${ABOUT.name}, ${ABOUT.role}`}
              loading="lazy"
              width="540"
              height="960"
            />
            <span className={styles.cardTag}>Head Coach</span>
          </div>
        </div>

        <div className={styles.text}>
          <p className={`eyebrow reveal ${inView ? 'is-in' : ''}`}>{ABOUT.eyebrow}</p>
          <h2 className={`section-title reveal delay-1 ${inView ? 'is-in' : ''}`}>{ABOUT.name}</h2>
          <p className={`${styles.role} reveal delay-1 ${inView ? 'is-in' : ''}`}>{ABOUT.role}</p>

          <div className={`${styles.body} reveal delay-2 ${inView ? 'is-in' : ''}`}>
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className={`${styles.journey} reveal delay-3 ${inView ? 'is-in' : ''}`}>
            <p className={`data ${styles.journeyLabel}`}>The Pathway</p>
            <ol className={styles.ladder}>
              {ABOUT.journey.map((stop) => (
                <li key={stop.place} className={styles.stop}>
                  <span className={styles.stopPlace}>{stop.place}</span>
                  <span className={styles.stopNote}>{stop.note}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
