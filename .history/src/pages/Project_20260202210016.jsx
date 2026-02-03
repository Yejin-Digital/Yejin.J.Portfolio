import style from '../styles/Project.module.css';
import ProjectSelection from '../components/ProjectSelection.jsx';
import montroImg from '../assets/montro_image1.jpg';
import scaffoldImg from '../assets/scaffold_image1.jpg';
import posterImg from '../assets/poster_image1.jpg';
import canImg from '../assets/can_image1.jpg';

export default function Project() {
  return (
    <div className={style.page}>
      <div className={style.section1}>
        <h1>Featured Project</h1>
        <div className={style.buttons}>
          <button className={style.button1}>All</button>
          <button className={style.button2}>UX/UI</button>
          <button className={style.button3}>Graphics</button>
          <button className={style.button4}>Motion</button>
        </div>
      </div>
      <div className={style.section2}>
        <ProjectSelection
          name="Montro"
          category="UX/UI design"
          img={montroImg}
        />
        <ProjectSelection
          name="Scaffold"
          category="UX/UI design"
          img={scaffoldImg}
        />
        <ProjectSelection
          name="Commercial Poster"
          category="Graphic design"
          img={posterImg}
        />
        <ProjectSelection
          name="StoneVine"
          category="Graphic/Packaging"
          img={canImg}
        />
      </div>
    </div>
  );
}
