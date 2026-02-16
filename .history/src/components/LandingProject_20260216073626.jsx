import style from '../styles/LandingProject.module.css';
import image1 from '../assets/poster_image1.jpg';
import image2 from '../assets/magazine_mockup4.jpg';
import image3 from '../assets/can_mockup2.jpg';
import image4 from '../assets/scaffold_image1.jpg';
import { Link } from 'react-router-dom';
import Buttons from './Buttons.jsx';
import Label from './Label.jsx';

const CARDS = [
  {
    id: 'uiux',
    src: image4,
    alt: 'Scaffold UI/UX project',
    to: '/scaffold',

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
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 67 67"
                  fill="none"
                >
                  <path
                    d="M41.958 11.8516L42.2969 12.2627L42.8271 12.2109L56.0742 10.9248L54.7891 24.1729L54.7373 24.7031L55.1484 25.042L65.4248 33.5L55.1484 41.958L54.7373 42.2969L54.7891 42.8271L56.0742 56.0742L42.8271 54.7891L42.2969 54.7373L41.958 55.1484L33.5 65.4248L25.042 55.1484L24.7031 54.7373L24.1729 54.7891L10.9248 56.0742L12.2109 42.8271L12.2627 42.2969L11.8516 41.958L1.57422 33.5L11.8516 25.042L12.2627 24.7031L12.2109 24.1729L10.9248 10.9248L24.1729 12.2109L24.7031 12.2627L25.042 11.8516L33.5 1.57422L41.958 11.8516Z"
                    fill="#058CD7"
                    stroke="black"
                    stroke-width="2"
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

      {/* Decorative Shapes - Right */}
      <div className={style.decorativeShapesRight}>
        <div className={style.pinkRectangle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="210"
            height="110"
            viewBox="0 0 232 131"
            fill="none"
          >
            <rect
              x="4.65918"
              y="4.37305"
              width="221.215"
              height="120.749"
              fill="#FB7DA8"
              stroke="black"
              stroke-width="2"
            />
            <rect width="9.51409" height="8.76776" fill="black" />
            <rect y="121.399" width="9.51409" height="8.76776" fill="black" />
            <rect
              x="221.752"
              y="121.399"
              width="9.51409"
              height="8.76776"
              fill="black"
            />
            <rect
              x="221.752"
              y="60.7002"
              width="9.51409"
              height="8.76776"
              fill="black"
            />
            <rect y="60.7002" width="9.51409" height="8.76776" fill="black" />
            <rect x="221.752" width="9.51409" height="8.76776" fill="black" />
            <rect x="110.51" width="9.51409" height="8.76776" fill="black" />
            <rect
              x="110.51"
              y="121.399"
              width="9.51409"
              height="8.76776"
              fill="black"
            />
            <line x1="107" y1="64" x2="124" y2="64" stroke="black" />
            <line x1="116" y1="56" x2="116" y2="73" stroke="black" />
          </svg>
        </div>
        <div className={style.emptyRectangle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="157"
            height="120"
            viewBox="0 0 157 120"
            fill="none"
          >
            <rect
              x="3.0726"
              y="3.30664"
              width="124.44"
              height="81.9278"
              stroke="black"
              stroke-width="2"
            />
            <rect width="5.38923" height="5.99484" fill="black" />
            <rect y="83.0049" width="5.38923" height="5.99484" fill="black" />
            <rect
              x="125.611"
              y="83.0049"
              width="5.38923"
              height="5.99484"
              fill="black"
            />
            <rect
              x="125.611"
              y="41.5029"
              width="5.38923"
              height="5.99484"
              fill="black"
            />
            <rect y="41.5029" width="5.38923" height="5.99484" fill="black" />
            <rect x="125.611" width="5.38923" height="5.99484" fill="black" />
            <rect x="62.5981" width="5.38923" height="5.99484" fill="black" />
            <rect
              x="62.5981"
              y="83.0049"
              width="5.38923"
              height="5.99484"
              fill="black"
            />
            <path
              d="M133.033 93.7716C132.914 92.9075 133.882 92.3155 134.597 92.8149L152.086 105.033C152.802 105.533 152.578 106.646 151.724 106.83L144.246 108.439C143.581 108.582 142.983 108.948 142.553 109.475L137.717 115.401C137.164 116.077 136.07 115.771 135.951 114.906L133.033 93.7716Z"
              fill="white"
              stroke="black"
              stroke-width="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
