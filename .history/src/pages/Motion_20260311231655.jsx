import style from '../styles/Motion.module.css';
import mobiPreviewImg from '../assets/mobi_preview1.jpg';
import mobiPreviewVideo from '../assets/motion_preview.mp4';
import iMacPreviewImg from '../assets/iMac_frame.png';
import MacbookPreviewImg from '../assets/macBook_frame.png';
import mobiLogo from '../assets/mobi_logo.png';
import aftereffectSvg from '../assets/aftereffect.svg';
import photoshopSvg from '../assets/photoshop.svg';

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
          <video
            className={style.mockupVideo}
            src={mobiPreviewVideo}
            alt=""
            loading="lazy"
            decoding="async"
          />
          <img
            className={style.mockupImg3}
            src={mobiPreviewImg}
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
        <section className={style.labelSection}>
          <div className={style.videoPlaceholder}>
            <span className={style.videoPlaceholderText}>
              Video placeholder
            </span>
          </div>
        </section>
        <section className={style.infoSection}>
          <div className={style.conceptTextWrap}>
            <h2 className={style.projectDescriptionLabel}>
              Project Description
            </h2>
            <div className={style.conceptTextBlock}>
              <p className={style.conceptText}>
                The motion graphic video introduces the Mobi bike share service
                and shows how users rent and return bicycles in Vancouver. It
                visualizes the service journey, including account creation,
                station identification, bike unlocking, and ride completion.
              </p>
              <p className={style.conceptText}>
                Motion graphics and simple visual storytelling help viewers
                follow each step. Key features, such as finding a station,
                unlocking a bike with a code, and returning the bike, are
                illustrated with animated screens and easy-to-understand icons.
              </p>
              <p className={style.conceptText}>
                The project aims to show how the service works through a clear,
                engaging visual explanation. Using animated diagrams, simple
                screen graphics, and step-by-step storytelling, the video
                explains the service in an easy-to-understand way.
              </p>
            </div>
          </div>
          <div className={style.tools}>
            <span className={style.toolsTitle}>Tools</span>
            <div className={style.toolIcons}>
              <img
                src={aftereffectSvg}
                alt="After Effects"
                className={style.toolIcon}
              />
              <img
                src={photoshopSvg}
                alt="Photoshop"
                className={style.toolIcon}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
