import { useNavigate } from 'react-router-dom'
import useScrollToSection from '../hooks/useScrollToSection'
import BookingForm from '../components/BookingForm'
import styles from './BookingPage.module.css'

export default function BookingPage() {
  useScrollToSection()
  const navigate = useNavigate()

  const handleSuccess = () => {
    navigate('/')
  }

  return (
    <>
      <a href="#content" className="sr-skip">Skip to form</a>
      <div className={styles.hero}>
        <div className={styles.container}>
          <h1>Book Your Session</h1>
          <p className={styles.subtitle}>Start your journey to athletic excellence</p>
        </div>
      </div>

      <main id="content" className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.form}>
              <BookingForm onClose={handleSuccess} />
            </div>
            <div className={styles.info}>
              <h2>Why Choose Pitch Partners?</h2>
              <ul>
                <li>Professional coaching from an internationally experienced player</li>
                <li>Personalized training tailored to your goals</li>
                <li>Access to elite networks and recruitment opportunities</li>
                <li>Proven pathway to professional football</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
