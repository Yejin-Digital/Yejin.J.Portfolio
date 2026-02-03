import style from '../styles/Project.module.css';
import ProjectSelection from '../components/ProjectSelection.jsx';

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
        <ProjectSelection />
    </div>
  );
}
