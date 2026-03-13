import style from '../styles/Motion.module.css';
import mobiPreviewImg from '../assets/mobi_preview1.jpg';
import mobiPreviewVideo from '../assets/motion_preview.mp4';
import iMacPreviewImg from '../assets/iMac_frame.png';
import MacbookPreviewImg from '../assets/macBook_frame.png';
import mobiLogo from '../assets/mobi_logo.png';

export default function Motion() {
  return (
    <div className={style.page}>
      <div className={style.titleSection}>
        <h1>
          Motion <br /> Graphic
        </h1>
        <div className={style.imageSection}>
          <img
            className={style.mockupImg1}
            src={iMacPreviewImg}
            alt=""
            loading="eager"
            decoding="async"
          />
          <img
            className={style.mockupImg2}
            src={MacbookPreviewImg}
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>
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
