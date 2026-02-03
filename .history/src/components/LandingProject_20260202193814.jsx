import style from '../styles/LandingProject.module.css';
import image1 from '../assets/montro_image1.jpg';
import image2 from '../assets/poster_image1.jpg';
import image3 from '../assets/can_image1.jpg';
import image4 from '../assets/scaffold_image1.jpg';

export default function LandingProject() {
  return (
    <div className={style.landingProject}>
      <h3>Featured Project</h3>
      <div className={style.contents}>
        <div className={style.projectLayoutLeft}>
          <img className={style.image1} src={image1} alt="Montro Project" />
          <div className={style.projectLeft}>
            <p>Interface</p>
            <p>User Experience</p>
          </div>
          <img
            className={style.image2}
            src={image2}
            alt="Poster design project"
          />
        </div>
        <div className={style.projectLayoutRight}>
          <img
            className={style.image3}
            src={image3}
            alt="Can Packaging design project"
          />
          <div className={style.projectRight}>
            <p>Graphic</p>
            <p>Motion</p>
            <p>Packaging</p>
          </div>
          <img className={style.image4} src={image4} alt="Scaffold project" />
        </div>
      </div>
      <div className={style.viewAll}>
        <h4>View All Project</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="30"
          viewBox="0 0 34 30"
          fill="none"
        >
          <path
            d="M33.4142 16.1422C34.1953 15.3612 34.1953 14.0949 33.4142 13.3138L20.6863 0.585892C19.9052 -0.195157 18.6389 -0.195157 17.8579 0.585892C17.0768 1.36694 17.0768 2.63327 17.8579 3.41432L29.1716 14.728L17.8579 26.0417C17.0768 26.8228 17.0768 28.0891 17.8579 28.8702C18.6389 29.6512 19.9052 29.6512 20.6863 28.8702L33.4142 16.1422ZM0 14.728V16.728H32V14.728V12.728H0V14.728Z"
            fill="#234485"
          />
        </svg>
      </div>
    </div>
  );
}
