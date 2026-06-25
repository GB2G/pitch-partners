import useReveal from '../hooks/useReveal'
import { GALLERY } from '../data/content'
import styles from './Gallery.module.css'

export default function Gallery() {
  const [ref, inView] = useReveal()
  return (
    <section id="gallery" className={`section ${styles.gallery}`} ref={ref}>
      <div className="container">
        <div className={styles.head}>
          <div>
            <p className={`eyebrow reveal ${inView ? 'is-in' : ''}`}>{GALLERY.eyebrow}</p>
            <h2 className={`section-title reveal delay-1 ${inView ? 'is-in' : ''}`}>
              In <span className="gold-text">Action</span>
            </h2>
          </div>
          <p className={`lead reveal delay-2 ${inView ? 'is-in' : ''}`}>{GALLERY.lead}</p>
        </div>

        <div className={styles.grid}>
          {GALLERY.images.map((img, i) => (
            <figure
              key={img.src}
              className={`${styles.frame} reveal delay-${(i % 4) + 1} ${inView ? 'is-in' : ''}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
