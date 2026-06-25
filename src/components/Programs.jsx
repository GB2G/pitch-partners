import { useState } from 'react'
import Icon from './Icon'
import useReveal from '../hooks/useReveal'
import { PROGRAMS } from '../data/content'
import ProgramModal from './ProgramModal'
import styles from './Programs.module.css'

export default function Programs() {
  const [ref, inView] = useReveal()
  const [selected, setSelected] = useState(null)

  return (
    <section id="programs" className={`section ${styles.programs}`} ref={ref}>
      <div className="container">
        <div className={styles.head}>
          <div>
            <p className={`eyebrow reveal ${inView ? 'is-in' : ''}`}>What We Offer</p>
            <h2 className={`section-title reveal delay-1 ${inView ? 'is-in' : ''}`}>
              Training <span className="gold-text">Programs</span>
            </h2>
          </div>
          <p className={`lead reveal delay-2 ${inView ? 'is-in' : ''}`}>
            Tailored pathways for players at every level — from one-on-one skill work to
            professional scouting support.
          </p>
        </div>

        <ul className={`${styles.sheet} reveal delay-2 ${inView ? 'is-in' : ''}`}>
          {PROGRAMS.map((p) => (
            <li key={p.id}>
              <button
                type="button"
                onClick={() => setSelected(p)}
                aria-label={`View details for ${p.name}`}
                className={styles.row}
              >
                <span className={styles.iconWrap}>
                  <Icon name={p.icon} size={24} />
                </span>

                <span className={styles.main}>
                  <span className={styles.name}>{p.name}</span>
                  <span className={styles.desc}>{p.desc}</span>
                  <span className={styles.tags}>
                    {p.tags.map((t) => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </span>
                </span>

                <span className={styles.more}>
                  <span className={styles.moreText}>Details</span>
                  <Icon name="arrowRight" size={18} />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <ProgramModal program={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
