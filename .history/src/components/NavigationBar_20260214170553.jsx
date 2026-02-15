import NavigationButton from './NavigationPageButtons.jsx';
import style from '../styles/NavigationBar.module.css';

export default function NavigationBar() {
  return (
    <nav className={style.navLayout}>
      <NavigationButton />
    </nav>
  );
}
