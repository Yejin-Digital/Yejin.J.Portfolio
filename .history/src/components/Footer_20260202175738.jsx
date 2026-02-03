import style from '../styles/Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <p className={style.copy}>© {year} Yejin.J Portfolio</p>

        <nav className={style.links} aria-label="Footer navigation">
          <a className={style.link} href="#about">About</a>
          <a className={style.link} href="#projects">Projects</a>
          <a className={style.link} href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
