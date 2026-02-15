import { Link } from 'react-router-dom';
import style from '../styles/ProjectSelection.module.css';

/**
 * ProjectSelection(props)
 * props: { name, category, img, to, keyword, overlayText }
 * - name: string
 * - category: string
 * - img: imported image or URL string
 * - to: optional route string to wrap the item with a Link
 * - keyword: one of 'All' | 'UI/UX' | 'graphic' | 'motion'
 * - overlayText: optional string for overlay text (default: 'View')
 */
export default function ProjectSelection({
  name,
  category,
  img,
  to,
  icon,
  keyword,
  overlayText = 'View',
}) {
  const Container = to ? Link : 'div';
  const containerProps = to
    ? { to, className: style.projectframe, 'data-keyword': keyword }
    : { className: style.projectflame, 'data-keyword': keyword };

  return (
    <Container {...containerProps}>
      <div className={style.projectFrame}>
        <div className={style.projectImgContainer}>
          <img src={img} alt={name} className={style.projectImg} />
          <div className={style.overlay}>
            <span className={style.viewText}>{overlayText}</span>
          </div>
        </div>
        <div className={style.projectName}>
          <div className={style.projectNameText}>
            {icon}
            {name}
          </div>
          <p>{category}</p>
        </div>
      </div>
    </Container>
  );
}
