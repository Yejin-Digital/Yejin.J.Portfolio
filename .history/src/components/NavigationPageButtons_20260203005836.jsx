import { Link } from 'react-router-dom';
import style from '../styles/NavigationPageButtons.module.css';

export default function NavigationButton() {
  return (
    <div className={style.navButtons}>
      <Link className={style.navButton} to="/">
        Home
      </Link>
      <Link className={style.navButton} to="/projects">
        Project
      </Link>
      <Link className={style.navButton} to="/resume">
        Resume
      </Link>
    </div>
  );
}
