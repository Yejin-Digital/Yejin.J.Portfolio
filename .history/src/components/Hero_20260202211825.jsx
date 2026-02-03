import styles from '../styles/Hero.module.css';
import { Link } from 'react-router-dom';
import image from '../assets/Landing_image.png';

export default function Hero() {
  return (
    <header className={styles.hero} role="banner">
      <div className={styles.content}>
        <p className={styles.kicker}>UX/UI Designer</p>
        <h1 className={styles.title}>Hi — I’m Yejin. I design thoughtful digital experiences.</h1>
        <p className={styles.lead}>
          I create clear, accessible interfaces and delightful interactions for web
          and mobile. Scroll to explore featured projects and case studies.
        </p>
        <div className={styles.cta}>
          <Link to="/projects" className={styles.primary} aria-label="View Projects">
            View Projects
          </Link>
          <a href="#contact" className={styles.secondary} aria-label="Contact">
            Contact
          </a>
        </div>
      </div>

      <div className={styles.visual} aria-hidden="true">
        <img src={image} alt="" />
      </div>
    </header>
  );
}
