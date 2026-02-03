import style from '../styles/Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.contact}>
          <p>Contact</p>
          <div className={style.contactLink}>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ylmsicb@gmail.com"
              target="_blank"
              rel="noreferrer"
              className={style.contactAnchor}
            >
              Email
            </a>
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
