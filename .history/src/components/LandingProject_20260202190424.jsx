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
          <p className={style.projectRight}>Graphic</p>
          <p className={style.projectRight}>Motion</p>
          <p className={style.projectRight}>Packaging</p>
          <img className={style.image4} src={image4} alt="Scaffold project" />
        </div>
      </div>
      <h4>View All Project</h4>
    </div>
  );
}
