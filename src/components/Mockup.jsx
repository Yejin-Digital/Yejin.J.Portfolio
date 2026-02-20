import style from '../styles/Mockup.module.css';

export default function Mockup({
  image1,
  image2,
  image3,
  image4,
  name1,
  name2,
  name3,
  name4,
}) {
  return (
    <div className={style.mockup}>
      {/* 위쪽 왼쪽 그래픽 */}
      <div className={style.graphicTopLeft}>
        <svg
          className={style.star}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 63 63"
          fill="none"
        >
          <path
            d="M29.6571 1.7832C29.907 0.0724506 32.3759 0.072447 32.6259 1.7832L35.9042 24.2656C36.0638 25.3597 36.9234 26.2193 38.0175 26.3789L60.4999 29.6572C62.2106 29.9072 62.2106 32.376 60.4999 32.626L38.0175 35.9043C36.9234 36.0639 36.0638 36.9235 35.9042 38.0176L32.6259 60.5C32.3759 62.2107 29.9071 62.2108 29.6571 60.5L26.3788 38.0176C26.2192 36.9235 25.3596 36.0639 24.2655 35.9043L1.78308 32.626C0.0723285 32.376 0.0723249 29.9072 1.78308 29.6572L24.2655 26.3789C25.3596 26.2193 26.2192 25.3597 26.3788 24.2656L29.6571 1.7832Z"
            fill="#FD5A46"
            stroke="black"
          />
        </svg>
        <div className={style.dashedLineTopLeft}></div>
      </div>

      {/* 이미지들 - 스크롤 시 로드되도록 지연 로딩 */}
      <img
        className={style.image1}
        src={image1}
        alt={name1}
        loading="lazy"
        decoding="async"
      />
      <img
        className={style.image2}
        src={image2}
        alt={name2}
        loading="lazy"
        decoding="async"
      />
      <img
        className={style.image3}
        src={image3}
        alt={name3}
        loading="lazy"
        decoding="async"
      />
      <img
        className={style.image4}
        src={image4}
        alt={name4}
        loading="lazy"
        decoding="async"
      />

      {/* 아래쪽 오른쪽 그래픽 */}
      <div className={style.graphicBottomRight}>
        <svg
          className={style.star}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 63 63"
          fill="none"
        >
          <path
            d="M29.6571 1.7832C29.907 0.0724506 32.3759 0.072447 32.6259 1.7832L35.9042 24.2656C36.0638 25.3597 36.9234 26.2193 38.0175 26.3789L60.4999 29.6572C62.2106 29.9072 62.2106 32.376 60.4999 32.626L38.0175 35.9043C36.9234 36.0639 36.0638 36.9235 35.9042 38.0176L32.6259 60.5C32.3759 62.2107 29.9071 62.2108 29.6571 60.5L26.3788 38.0176C26.2192 36.9235 25.3596 36.0639 24.2655 35.9043L1.78308 32.626C0.0723285 32.376 0.0723249 29.9072 1.78308 29.6572L24.2655 26.3789C25.3596 26.2193 26.2192 25.3597 26.3788 24.2656L29.6571 1.7832Z"
            fill="#FD5A46"
            stroke="black"
          />
        </svg>
        <div className={style.dashedLineBottomRight}></div>
      </div>
    </div>
  );
}
