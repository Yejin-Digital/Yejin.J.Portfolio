import NavigationButton from './NavigationPageButtons.jsx';
import style from '../styles/NavigationBar.module.css';

export default function NavigationBar() {
  return (
    <nav className={style.navLayout}>
      <div className={style.navLayoutButtons}>
        <NavigationButton label="PROJECT" onClick={() => {}} />
        <NavigationButton label="RESUME" onClick={() => {}} />
      </div>
    </nav>
  );
}
