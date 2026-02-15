import Buttons from './Buttons.jsx';
import { Link } from 'react-router-dom';
import style from '../styles/NavigationBar.module.css';

export default function NavigationBar() {
  return (
    <nav className={style.navLayout}>
      <Buttons
        label="HOME"
        onClick={() => <Link to="/" />}
        variant="home"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
          >
            <path
              d="M21.5146 6.78613L21.7842 7.15625L22.2373 7.08496L28.9736 6.02539L27.915 12.7627L27.8438 13.2158L28.2139 13.4854L33.7256 17.5L28.2139 21.5146L27.8438 21.7842L27.915 22.2373L28.9736 28.9736L22.2373 27.915L21.7842 27.8438L21.5146 28.2139L17.5 33.7256L13.4854 28.2139L13.2158 27.8438L12.7627 27.915L6.02539 28.9736L7.08496 22.2373L7.15625 21.7842L6.78613 21.5146L1.27344 17.5L6.78613 13.4854L7.15625 13.2158L7.08496 12.7627L6.02539 6.02539L12.7627 7.08496L13.2158 7.15625L13.4854 6.78613L17.5 1.27344L21.5146 6.78613Z"
              fill="#058CD7"
              stroke="#0F0F0E"
              stroke-width="1.5"
            />
          </svg>
        }
      />
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
