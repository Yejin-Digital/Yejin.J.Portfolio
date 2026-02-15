import NavigationButton from './NavigationPageButtons.jsx';
import { Link } from 'react-router-dom';
import style from '../styles/NavigationBar.module.css';

export default function NavigationBar() {
  return (
    <nav className={style.navLayout}>
      <div className={style.navLayoutButtons}>
        <NavigationButton
          label="PROJECT"
          onClick={() => <Link to="/projects" />}
        />
        <NavigationButton
          label="RESUME"
          onClick={() => <Link to="/resume" />}
        />
      </div>
    </nav>
  );
}
