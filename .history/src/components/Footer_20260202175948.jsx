import style from '../styles/Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <p className={style.copy}>© {year} Yejin.J Portfolio</p>
      </div>
    </footer>
  );
}
