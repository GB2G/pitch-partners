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

        <div className={styles.grid}>
          {PROGRAMS.map((p, i) => (
            <button
              type="button"
              key={p.id}
              onClick={() => setSelected(p)}
              aria-label={`View details for ${p.name}`}
              className={`${styles.card} reveal delay-${(i % 4) + 1} ${inView ? 'is-in' : ''}`}
            >
              <span className={styles.iconWrap}>
                <Icon name={p.icon} size={26} />
              </span>
              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.desc}>{p.desc}</p>
              <ul className={styles.tags}>
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <span className={styles.more}>
                Learn more
                <Icon name="arrowRight" size={16} />
              </span>
            </button>
          ))}
        </div>
      </div>

      <ProgramModal program={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
