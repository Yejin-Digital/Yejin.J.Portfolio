import React from 'react';
import styles from '../styles/PackagingSection.module.css';
import poster from '../assets/poster_image1.jpg';
import can from '../assets/can_image1.jpg';
import scaffold from '../assets/scaffold_image1.jpg';

export default function PackagingSection() {
  return (
    <section className={styles.packagingSection} aria-labelledby="packaging-title">
      <div className={styles.content}>
        <p className={styles.kicker}>Packaging</p>
        <h2 id="packaging-title" className={styles.title}>Product packaging that tells a story</h2>
        <p className={styles.lead}>
          We craft packaging that speaks to users and elevates the product. From structure and materials to surface graphics and motion, each solution is informed by research and brand strategy.
        </p>
        <div className={styles.cta}>
          <a href="/projects" className={styles.primary}>See Packaging Work</a>
          <a href="#contact" className={styles.secondary}>Get in touch</a>
        </div>
      </div>

      <div className={styles.gallery} aria-hidden="true">
        <div className={styles.large}>
          <img src={poster} alt="Poster packaging" />
        </div>
        <div className={styles.stack}>
          <div className={styles.small}><img src={can} alt="Can packaging" /></div>
          <div className={styles.small}><img src={scaffold} alt="Scaffold project" /></div>
        </div>
      </div>
    </section>
  );
}
