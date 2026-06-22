import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useScrollToSection() {
  const location = useLocation()

  useEffect(() => {
    // Extract the hash from the URL
    const hash = location.hash.slice(1) // Remove the '#' character

    if (hash) {
      // Wait for DOM to be ready, then scroll to element
      const element = document.getElementById(hash)
      if (element) {
        // Add a small delay to ensure smooth scroll behavior
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 0)
      }
    } else {
      // No hash, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])
}
