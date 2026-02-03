import style from '../styles/ProjectSelection.module.css';

export default function ProjectSelection(name, category ) {
  return <div>
    <div>
        <img className="image2" src={image} alt="Landing1" loading="eager" /> 
        <div className={style.projectName}>
            <p>{name}</p>
            <p>{category}</p>
        </div>

        </div>
    </div>
  </div>;
}