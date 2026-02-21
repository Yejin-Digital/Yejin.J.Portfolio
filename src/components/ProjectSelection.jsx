import { Link } from 'react-router-dom';
import style from '../styles/ProjectSelection.module.css';
import { preloadImage } from '../utils/preloadImage.js';

/**
 * ProjectSelection(props)
 * props: { name, category, img, to, heroImg?, keyword, overlayText }
 * - heroImg: 해당 페이지 imageSection 히어로 이미지 URL (호버 시 preload)
 */
export default function ProjectSelection({
  name,
  category,
  img,
  to,
  heroImg,
  icon,
  keyword,
  overlayText = 'View',
}) {
  const Container = to ? Link : 'div';
  const containerProps = to
    ? {
        to,
        className: style.projectframe,
        'data-keyword': keyword,
        onMouseEnter: () => heroImg && preloadImage(heroImg),
        onFocus: () => heroImg && preloadImage(heroImg),
      }
    : { className: style.projectflame, 'data-keyword': keyword };

  return (
    <Container {...containerProps}>
      <div className={style.projectFrame}>
        <div className={style.projectImgContainer}>
          <div className={style.projectImgWrapper}>
            <img
            src={img}
            alt={name}
            className={style.projectImg}
            loading="lazy"
            decoding="async"
          />
            <div className={style.overlay}>
              <span className={style.viewText}>{overlayText}</span>
            </div>
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
