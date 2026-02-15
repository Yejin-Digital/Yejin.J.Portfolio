import Buttons from './Buttons.jsx';
import { Link } from 'react-router-dom';
import style from '../styles/NavigationBar.module.css';

export default function NavigationBar() {
  return (
    <nav className={style.navLayout}>
      <Buttons label="HOME" onClick={() => <Link to="/" />} variant="home" />
      <div className={style.navLayoutButtons}>
        <Buttons
          label="VIEW ALL PROJECTS"
          onClick={() => <Link to="/projects" />}
          variant="icon"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="24"
              viewBox="0 0 39 24"
              fill="none"
            >
              <path
                d="M20.7188 3L35.3438 12L20.7188 21L20.7188 16.5L7.3125 16.5C6.98927 16.5 6.67927 16.421 6.45071 16.2803C6.22215 16.1397 6.09375 15.9489 6.09375 15.75L6.09375 8.25C6.09375 8.05109 6.22215 7.86032 6.45071 7.71967C6.67927 7.57902 6.98927 7.5 7.3125 7.5L20.7188 7.5L20.7188 3Z"
                fill="#0F0F0E"
                stroke="#0F0F0E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
        />
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
