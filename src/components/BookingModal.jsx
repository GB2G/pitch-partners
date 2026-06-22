import { motion, AnimatePresence } from 'framer-motion'
import Icon from './Icon'
import styles from './BookingModal.module.css'

export default function BookingModal({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
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
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            role="dialog"
            aria-modal="true"
          >
            <button
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Close booking modal"
            >
              <Icon name="close" size={24} />
            </button>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
