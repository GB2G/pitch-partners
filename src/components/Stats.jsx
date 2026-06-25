import useReveal from '../hooks/useReveal'
import useCountUp from '../hooks/useCountUp'
import { STATS } from '../data/content'
import styles from './Stats.module.css'

function Stat({ stat, index, active }) {
  const count = useCountUp(stat.value, active)
  return (
    <div className={styles.item}>
      <div className={styles.value}>
        {stat.display ? stat.display : `${stat.prefix || ''}${count}${stat.suffix || ''}`}
      </div>
      <div className={styles.label}>{stat.label}</div>
      {stat.note && <div className={styles.note}>{stat.note}</div>}
    </div>
  )
}

export default function Stats() {
  const [ref, inView] = useReveal()
  return (
    <section className={styles.band} ref={ref} aria-label="By the numbers">
      <div className={`container ${styles.grid}`}>
        {STATS.map((stat, i) => (
          <Stat key={stat.label} stat={stat} index={i} active={inView} />
        ))}
      </div>
    </section>
  )
}
