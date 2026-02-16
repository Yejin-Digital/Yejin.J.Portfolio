import style from '../styles/LandingProject.module.css';
import image1 from '../assets/poster_image1.jpg';
import image2 from '../assets/magazine1.jpg';
import image3 from '../assets/can_mockup2.jpg';
import image4 from '../assets/montro_image1.jpg';
import { Link } from 'react-router-dom';
import Buttons from './Buttons.jsx';
import Label from './Label.jsx';

const CARDS = [
  {
    id: 'uiux',
    src: image4,
    alt: 'Montro UI/UX project',
    to: '/projects',

    gridClass: style.cellTopLeft,
  },
  {
    id: 'packaging',
    src: image3,
    alt: 'Can Packaging design project',
    to: '/packaging',

    gridClass: style.cellTopRight,
  },
  {
    id: 'graphic',
    src: image1,
    alt: 'Poster design project',
    to: '/poster',

    gridClass: style.cellBottomLeft,
  },
  {
    id: 'editorial',
    src: image2,
    alt: 'Magazine design project',
    to: '/magazine',
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
            {card.id === 'uiux' && (
              <Label
                text="UI/UX Design"
                color="#FFC567"
                className={style.labelCard}
              />
            )}
            {card.id === 'packaging' && (
              <Label
                text="Packaging Design"
                color="#FD5A46"
                className={style.labelCard}
              />
            )}
            {card.id === 'graphic' && (
              <Label
                text="Graphic Design"
                color="#FB7DA8"
                className={style.labelCard}
              />
            )}

            {/* decoration shapes */}
            {card.id === 'uiux' && (
              <div className={style.shapePurpleHex}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="35"
                  viewBox="0 0 30 35"
                  fill="none"
                >
                  <path
                    d="M28.4451 9.31836V25.6807L14.7224 33.8369L0.999756 25.6807V9.31836L14.7224 1.16211L28.4451 9.31836Z"
                    fill="#552CB7"
                    stroke="black"
                    stroke-width="2"
                  />
                </svg>
              </div>
            )}

            {card.id === 'packaging' && (
              <div className={style.shapeYellowStar}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="47"
                  height="47"
                  viewBox="0 0 47 47"
                  fill="none"
                >
                  <path
                    d="M30.415 16.1357L30.5645 16.4355L30.8643 16.585L44.7549 23.5L30.8643 30.415L30.5645 30.5645L30.415 30.8643L23.5 44.7549L16.585 30.8643L16.4355 30.5645L16.1357 30.415L2.24414 23.5L16.1357 16.585L16.4355 16.4355L16.585 16.1357L23.5 2.24414L30.415 16.1357Z"
                    fill="#FFC567"
                    stroke="black"
                    stroke-width="2"
                  />
                </svg>
              </div>
            )}

            {card.id === 'graphic' && (
              <>
                <div className={style.shapeGreenStar}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 47 47"
                    fill="none"
                  >
                    <path
                      d="M30.415 16.1357L30.5645 16.4355L30.8643 16.585L44.7549 23.5L30.8643 30.415L30.5645 30.5645L30.415 30.8643L23.5 44.7549L16.585 30.8643L16.4355 30.5645L16.1357 30.415L2.24414 23.5L16.1357 16.585L16.4355 16.4355L16.585 16.1357L23.5 2.24414L30.415 16.1357Z"
                      fill="#00995E"
                      stroke="black"
                      stroke-width="2"
                    />
                  </svg>
                </div>
                <div className={style.shapePinkStar}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 47 47"
                    fill="none"
                  >
                    <path
                      d="M30.415 16.1357L30.5645 16.4355L30.8643 16.585L44.7549 23.5L30.8643 30.415L30.5645 30.5645L30.415 30.8643L23.5 44.7549L16.585 30.8643L16.4355 30.5645L16.1357 30.415L2.24414 23.5L16.1357 16.585L16.4355 16.4355L16.585 16.1357L23.5 2.24414L30.415 16.1357Z"
                      fill="#FB7DA8"
                      stroke="black"
                      stroke-width="2"
                    />
                  </svg>
                </div>
              </>
            )}

            {card.id === 'editorial' && (
              <div className={style.shapeBlueStar}>
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z"
                    fill="#058CD7"
                    stroke="#0F0F0E"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            )}

            <Link to={card.to} className={style.card}>
              <span className={style.cardImgFrame}>
                <img src={card.src} alt={card.alt} />
              </span>
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
