import { Link } from 'react-router-dom';
import style from '../styles/NavigationPageButtons.module.css';

export default function NavigationButton({ label, onClick }) {
  return (
    <div className={style.navButtons}>
      <button className={style.navButton} onClick={onClick}>
        {label}
      </button>
    </div>
  );
}
