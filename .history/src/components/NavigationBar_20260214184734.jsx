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
            width="30"
            height="30"
            viewBox="0 0 35 35"
            fill="none"
          >
            <path
              d="M21.5146 6.78613L21.7842 7.15625L22.2373 7.08496L28.9736 6.02539L27.915 12.7627L27.8438 13.2158L28.2139 13.4854L33.7256 17.5L28.2139 21.5146L27.8438 21.7842L27.915 22.2373L28.9736 28.9736L22.2373 27.915L21.7842 27.8438L21.5146 28.2139L17.5 33.7256L13.4854 28.2139L13.2158 27.8438L12.7627 27.915L6.02539 28.9736L7.08496 22.2373L7.15625 21.7842L6.78613 21.5146L1.27344 17.5L6.78613 13.4854L7.15625 13.2158L7.08496 12.7627L6.02539 6.02539L12.7627 7.08496L13.2158 7.15625L13.4854 6.78613L17.5 1.27344L21.5146 6.78613Z"
              fill="#058CD7"
              stroke="#0F0F0E"
              stroke-width="2"
            />
          </svg>
        }
      />
      <div className={style.navLayoutButtons}>
        <Buttons
          label="RESUME"
          onClick={() => <Link to="/resume" />}
          variant="default"
          icon={null}
        />
        <Buttons
          label="PROJECT"
          onClick={() => <Link to="/projects" />}
          variant="default"
          icon={null}
        />
      </div>
    </nav>
  );
}
