import style from '../styles/Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.contact}>
          <p>Contact</p>
          <div className={style.contactLink}>
            <p>Email</p>
            <a
              href="https://www.linkedin.com/in/yejin-j"
              target="_blank"
              rel="noreferrer"
              className={style.contactAnchor}
            >
              LinkedIn
            </a>
          </div>
        </div>
        <p className={style.copy}>© Yejin Jang | {year}</p>
      </div>
    </footer>
  );
}

import style from '../styles/Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.contact}>
          <p>Contact</p>
          <div className={style.contactLink}>
            <p>Email</p>
            <p>LinkedIn</p>
          </div>
        </div>
        <p className={style.copy}>© Yejin Jang | {year}</p>
      </div>
    </footer>
  );
}
