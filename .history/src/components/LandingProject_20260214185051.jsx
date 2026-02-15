import style from '../styles/LandingProject.module.css';
import image1 from '../assets/poster_image1.jpg';
import image2 from '../assets/magazine1.jpg';
import image3 from '../assets/can_mockup2.jpg';
import image4 from '../assets/montro_image1.jpg';
import { Link } from 'react-router-dom';

export default function LandingProject() {
  return (
    <div className={style.landingProject}>
      <h3>Featured Project</h3>
      <div className={style.contents}>
        <div className={style.projectLayoutLeft}>
          <Link to="/poster" className={style.imageWrapper}>
            <img
              className={style.image1}
              src={image1}
              alt="Poster design project"
            />
          </Link>
          <div className={style.projectLeft}>
            <p>Interface</p>
            <p>User Experience</p>
          </div>
          <Link to="/magazine" className={style.imageWrapper}>
            <img
              className={style.image2}
              src={image2}
              alt="Magazine design project"
            />
          </Link>
        </div>
        <div className={style.projectLayoutRight}>
          <Link to="/packaging" className={style.imageWrapper}>
            <img
              className={style.image3}
              src={image3}
              alt="Can Packaging design project"
            />
          </Link>
          <div className={style.projectRight}>
            <p>Graphic</p>
            <p>Motion</p>
            <p>Packaging</p>
          </div>
          <div className={style.imageWrapper}>
            <img className={style.image4} src={image4} alt="Montro project" />
          </div>
        </div>
      </div>
      <Link to="/projects" className={style.viewAll}>
        <Buttons
          label="View All Project"
          variant="default"
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
      </Link>
    </div>
  );
}
