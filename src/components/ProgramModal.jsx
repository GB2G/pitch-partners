import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from './Icon'
import styles from './ProgramModal.module.css'

export default function ProgramModal({ program, onClose }) {
  const navigate = useNavigate()

  // Close on Escape and lock body scroll while open
  useEffect(() => {
    if (!program) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [program, onClose])

  return (
    <AnimatePresence>
      {program && (
        <>
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <div className={styles.positioner}>
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="program-modal-title"
            >
              <button
                className={styles.closeBtn}
                onClick={onClose}
                aria-label="Close program details"
              >
                <Icon name="close" size={24} />
              </button>

              <span className={styles.iconWrap}>
                <Icon name={program.icon} size={28} />
              </span>
              <h2 id="program-modal-title" className={styles.title}>
                {program.name}
              </h2>
              <p className={styles.details}>{program.details}</p>

              <ul className={styles.tags}>
                {program.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>

              <button
                className={`btn btn-primary ${styles.cta}`}
                onClick={() => {
                  onClose()
                  navigate('/booking')
                }}
              >
                Book a Session
                <Icon name="arrowRight" size={20} />
              </button>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
