import useReveal from '../hooks/useReveal'
import { GALLERY } from '../data/content'
import styles from './Gallery.module.css'

export default function Gallery() {
  const [ref, inView] = useReveal()
  // Duplicate the set so the marquee can loop seamlessly
  const slides = [...GALLERY.images, ...GALLERY.images]
  const count = GALLERY.images.length

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
      </div>

      <div
        className={`${styles.viewport} reveal delay-2 ${inView ? 'is-in' : ''}`}
        role="region"
        aria-label="Training and coaching photos"
      >
        <div className={styles.track}>
          {slides.map((img, i) => (
            <figure className={styles.card} key={i} aria-hidden={i >= count}>
              <img
                src={img.src}
                alt={i < count ? img.alt : ''}
                loading="lazy"
              />
              <figcaption className={styles.caption}>
                <span className={styles.dot} aria-hidden="true" />
                <span className={styles.frameLabel}>On the pitch</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
