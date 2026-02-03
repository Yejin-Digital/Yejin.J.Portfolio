import style from '../styles/NavigationPageButtons.module.css';

export default function NavigationButton() {
  return (
    <div className={style.navButtons}>
      <button className={style.navButton}>Home</button>
      <button className={style.navButton}>Project</button>
      <button className={style.navButton}>Resume</button>
    </div>
  );
}
