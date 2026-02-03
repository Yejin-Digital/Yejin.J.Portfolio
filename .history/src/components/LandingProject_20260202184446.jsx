import style from '../styles/LandingProject.module.css';
import image1 from '../assets/montro_image1.jpg';
import image2 from '../assets/poster_image1.jpg';
import image3 from '../assets/can_image1.jpg';
import image4 from '../assets/scaffold_image1.jpg';

export default function LandingProject() {
  return (
    <div className={style.landingProject}>
      <h3>Featured Project</h3>
      <div className={style.projectLayoutLeft}>
        <img src={image1} alt="Montro Project" />
        <p>Interface</p>
        <p>User Experience</p>
        <img src={image2} alt="Poster design project" />
      </div>
      <div className={style.projectLayoutRight}>
        <img src={image3} alt="Can Packaging design project" />
        <p>Graphic</p>
        <p>Motion</p>
        <p>Packaging</p>
        <img src={image4} alt="Scaffold project" />
      </div>
      <h4>View All Project</h4>
    </div>
  );
}
