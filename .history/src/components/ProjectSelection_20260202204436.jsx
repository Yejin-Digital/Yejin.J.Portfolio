import style from '../styles/ProjectSelection.module.css';

/**
 * ProjectSelection(props)
 * props: { name, category, img }
 * - name: string
 * - category: string
 * - img: imported image or URL string
 */
export default function ProjectSelection({ name, category, img }) {
  return (
    <div className={style.projectflame}>
      <div className={style.projectImg}>
        <img src={img} alt={name} />
      </div>
      <div className={style.projectName}>
        <p>{name}</p>
        <p>{category}</p>
      </div>
    </div>
  );
}
