import styles from '../styles/Hero.module.css';
import image from '../assets/Landing_image.png';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <header className={styles.hero} role="banner">
      <img className={styles.bg} src={image} alt="" aria-hidden="true" />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.title}>Yejin.J Portfolio</h1>
        <p className={styles.subtitle}>Crafting thoughtful UX/UI and graphic experiences</p>
        <div className={styles.ctaGroup}>
          <Link to="/projects" className={styles.cta}>View Projects</Link>
          <a className={styles.secondary} href="#contact">Contact</a>
        </div>
      </div>
    </header>
  );
}
