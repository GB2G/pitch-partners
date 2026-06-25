import useScrollToSection from '../hooks/useScrollToSection'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import About from '../components/About'
import Programs from '../components/Programs'
import Gallery from '../components/Gallery'
import CTA from '../components/CTA'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  useScrollToSection()

  return (
    <>
      <a href="#home" className="sr-skip">Skip to content</a>
      <main>
        <Hero />
        <Stats />
        <About />
        <Programs />
        <Gallery />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
