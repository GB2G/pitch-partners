import { useEffect, useRef, useState } from 'react'

const prefersReduced =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Counts from 0 up to `target` once `active` becomes true.
export default function useCountUp(target, active, duration = 1400) {
  const [value, setValue] = useState(0)
  const frame = useRef()

  useEffect(() => {
    if (!active) return
    if (prefersReduced) {
      setValue(target)
      return
    }

    let start
    const step = (now) => {
      if (start === undefined) start = now
      const progress = Math.min((now - start) / duration, 1)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) frame.current = requestAnimationFrame(step)
    }

    frame.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame.current)
  }, [active, target, duration])

  return value
}
