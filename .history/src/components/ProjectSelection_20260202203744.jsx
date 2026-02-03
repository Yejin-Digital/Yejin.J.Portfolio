import style from '../styles/ProjectSelection.module.css';

export default function ProjectSelection(name, category, img) {
  return (
    <div className={style.projectflame}>
      <div className={style.projectImg}>{img}</div>
      <div className={style.projectName}>
        <p>{name}</p>
        <p>{category}</p>
      </div>
    </div>
  );
}
