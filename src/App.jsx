import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Programs from './components/Programs'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'
import BookingForm from './components/BookingForm'
import { useBookingModal } from './hooks/useBookingModal'

export default function App() {
  const { isOpen, openModal, closeModal } = useBookingModal()

  return (
    <>
      <a href="#home" className="sr-skip">Skip to content</a>
      <Navbar onBookingClick={openModal} />
      <main>
        <Hero onBookingClick={openModal} />
        <Stats />
        <About />
        <Programs />
        <CTA onBookingClick={openModal} />
        <Contact />
      </main>
      <Footer />
      <BookingModal isOpen={isOpen} onClose={closeModal}>
        <BookingForm onClose={closeModal} />
      </BookingModal>
    </>
  )
}
