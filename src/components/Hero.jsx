import { useEffect, useMemo, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "./Icon";
import { HERO } from "../data/content";
import styles from "./Hero.module.css";

// Word-by-word blur-in reveal (21st.dev "Animated Hero Section" pattern)
function RevealWords({ text, className, delay = 0 }) {
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          aria-hidden="true"
          className={styles.revealWord}
          initial={{ opacity: 0, filter: "blur(8px)", y: 12 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.12,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const navigate = useNavigate();
  const words = useMemo(() => HERO.rotatingWords, []);
  const [index, setIndex] = useState(0);

  // Cycle the headline word (21st.dev rotating-headline pattern)
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2400);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <section id="home" className={styles.hero}>
      <video
        className={styles.videoBg}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src={`${import.meta.env.BASE_URL}hero-bg.mov`} type="video/quicktime" />
        <source src={`${import.meta.env.BASE_URL}hero-bg.mp4`} type="video/mp4" />
      </video>
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.radial} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.beamLeft} aria-hidden="true" />
      <div className={styles.beamRight} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <motion.span
          className={styles.badge}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.dot} aria-hidden="true" />
          {HERO.badge}
        </motion.span>

        <h1 className={styles.title}>
          <RevealWords
            text={HERO.titleStatic}
            className={styles.titleStatic}
            delay={0.15}
          />
          <span className={styles.rotator}>
            {words.map((word, i) => (
              <motion.span
                key={word}
                className={styles.rotatorWord}
                initial={{ opacity: 0, y: "110%" }}
                animate={
                  index === i
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: index > i ? "-110%" : "110%" }
                }
                transition={{ type: "spring", stiffness: 90, damping: 14 }}
                aria-hidden={index !== i}
              >
                {word}
              </motion.span>
            ))}
            {/* Reserve height with the longest word (invisible) */}
            <span className={styles.rotatorGhost} aria-hidden="true">
              {words.reduce((a, b) => (b.length > a.length ? b : a), "")}
            </span>
          </span>
        </h1>

        <motion.p
          className={`lead ${styles.sub}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {HERO.subtitle}
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <button onClick={() => navigate('/booking')} className="btn btn-primary">
            Book a Session
            <Icon name="arrowRight" size={20} />
          </button>
          <Link to="/#programs" className="btn btn-ghost">
            Explore Programs
          </Link>
        </motion.div>
      </div>

      <Link
        to="/#about"
        className={styles.scroll}
        aria-label="Scroll to about section"
      >
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </Link>
    </section>
  );
}
