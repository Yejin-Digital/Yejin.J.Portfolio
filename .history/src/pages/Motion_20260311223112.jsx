import style from '../styles/Motion.module.css';
import mobiPreviewImg from '../assets/mobi_preview1.jpg';
import mobiLogo from '../assets/mobi_logo.png';

export default function Motion() {
  return (
    <div className={style.page}>
      <div className={style.titleSection}>
        <h1>
          Motion <br /> Graphic
        </h1>
        <div className={style.imageSection}></div>
        <div className={style.subTitle}>
          <div className={style.subtitleLogo}>
            <img src={mobiLogo} alt="Mobi by Rogers logo" />
          </div>
          <p>Bike share Service Explainer Video</p>
        </div>
      </div>
      <div className={style.content}>
        {/* Motion page content - 세로 레이아웃 */}
      </div>
    </div>
  );
}
