import { Link } from 'react-router-dom';
import style from '../styles/NavigationPageButtons.module.css';

export default function NavigationButton() {
  return (
    <div className={style.navButtons}>
      <Link className={style.navButton} to="/">Home</Link>
      <Link className={style.navButton} to="/projects">Project</Link>
      <button className={style.navButton}>Resume</button>
    </div>
  );
}
