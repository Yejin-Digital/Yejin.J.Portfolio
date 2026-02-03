import { Link } from 'react-router-dom';
import style from '../styles/ProjectSelection.module.css';

/**
 * ProjectSelection(props)
 * props: { name, category, img, to }
 * - name: string
 * - category: string
 * - img: imported image or URL string
 * - to: optional route string to wrap the item with a Link
 */
export default function ProjectSelection({ name, category, img, to }) {
  const Container = to ? Link : 'div';
  const containerProps = to
    ? { to, className: style.projectflame }
    : { className: style.projectflame };

  return (
    <Container {...containerProps}>
      <div className={style.projectImg}>
        <img src={img} alt={name} />
      </div>
      <div className={style.projectName}>
        <p>{name}</p>
        <p>{category}</p>
      </div>
    </Container>
  );
}
