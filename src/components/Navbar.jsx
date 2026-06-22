import { useEffect, useState } from 'react'
import Icon from './Icon'
import { MEDIA, NAV_LINKS } from '../data/content'
import styles from './Navbar.module.css'

export default function Navbar({ onBookingClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#home" className={styles.logo} onClick={close} aria-label="Pitch Partners — home">
          <img src={MEDIA.logo} alt="Pitch Partners" />
        </a>

        <nav className={styles.links} aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <button onClick={onBookingClick} className={`btn btn-primary ${styles.cta}`}>
            Book Now
          </button>
        </nav>

        <button
          className={styles.burger}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <Icon name={open ? 'close' : 'menu'} size={26} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`} aria-hidden={!open}>
        <nav className={styles.drawerLinks} aria-label="Mobile">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
          ))}
          <button onClick={() => { onBookingClick(); close(); }} className="btn btn-primary">
            Book Now
          </button>
        </nav>
      </div>
      {open && <div className={styles.scrim} onClick={close} aria-hidden="true" />}
    </header>
  )
}
