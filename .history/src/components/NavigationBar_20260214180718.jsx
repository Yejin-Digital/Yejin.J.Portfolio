import Buttons from './Buttons.jsx';
import { Link } from 'react-router-dom';
import style from '../styles/NavigationBar.module.css';

export default function NavigationBar() {
  return (
    <nav className={style.navLayout}>
      <div className={style.navLayoutButtons}>
        <Buttons
          label="PROJECT"
          onClick={() => <Link to="/projects" />}
          variant="default"
          icon={null}
        />
        <Buttons
          label="RESUME"
          onClick={() => <Link to="/resume" />}
          variant="default"
          icon={null}
        />
      </div>
    </nav>
  );
}
