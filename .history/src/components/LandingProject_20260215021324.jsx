import style from '../styles/LandingProject.module.css';
import image1 from '../assets/poster_image1.jpg';
import image2 from '../assets/magazine1.jpg';
import image3 from '../assets/can_mockup2.jpg';
import image4 from '../assets/montro_image1.jpg';
import { Link } from 'react-router-dom';
import Buttons from './Buttons.jsx';

const CARDS = [
  {
    id: 'uiux',
    src: image4,
    alt: 'Montro UI/UX project',
    to: '/projects',
    label: 'UI/UX Design',
    labelClass: style.labelYellow,
    gridClass: style.cellTopLeft,
  },
  {
    id: 'packaging',
    src: image3,
    alt: 'Can Packaging design project',
    to: '/packaging',
    label: 'Packaging Design',
    labelClass: style.labelOrange,
    gridClass: style.cellTopRight,
  },
  {
    id: 'graphic',
    src: image1,
    alt: 'Poster design project',
    to: '/poster',
    label: 'Graphic Design',
    labelClass: style.labelPink,
    gridClass: style.cellBottomLeft,
  },
  {
    id: 'editorial',
    src: image2,
    alt: 'Magazine design project',
    to: '/magazine',
    label: null,
    labelClass: style.labelBlue,
    gridClass: style.cellBottomRight,
  },
];

export default function LandingProject() {
  return (
    <div className={style.landingProject}>
      <h3>Featured Project</h3>
      <div className={style.grid}>
        {CARDS.map((card) => (
          <div key={card.id} className={`${style.cardWrap} ${card.gridClass}`}>
            <span className={`${style.cardLabel} ${card.labelClass}`}>
              {card.label}
            </span>
            <Link to={card.to} className={style.card}>
              <img src={card.src} alt={card.alt} />
            </Link>
          </div>
        ))}
      </div>
      <Link to="/projects" className={style.viewAll}>
        <Buttons
          label="View All Project"
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
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />
      </Link>
    </div>
  );
}
