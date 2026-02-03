import style from '../styles/LandingProject.module.css';

export default function LandingProject() {
  return (
    <div className={style.landingProject}>
      <h3>Featured Project</h3>
      <div className={style.projectLayoutLeft}>
        <img src="../assets/montro_image1.jpg" alt="Montro Project" />
        <p>Interface</p>
        <p>User Experience</p>
        <img src="../assets/poster_image1.jpg" alt="Poster design project" />
      </div>
      <div className={style.projectLayoutRight}>
        <img
          src="../assets/can_image1.jpg"
          alt="Can Packaging design project"
        />
        <p>Graphic</p>
        <p>Motion</p>
        <p>Packaging</p>
        <img src="../assets/scaffold_image1.jpg" alt="Scaffold project" />
      </div>
      <h4>View All Project</h4>
    </div>
  );
}
