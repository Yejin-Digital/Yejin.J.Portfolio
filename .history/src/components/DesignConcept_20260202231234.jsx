import mangoImg from '../assets/mango.png';
import photoshopSvg from '../assets/photoshop.svg';
import illustratorSvg from '../assets/illustrator.svg';
import style from '../styles/DesignConcept.module.css';

export default function DesignConcept(designContent) {
  return (
    <div className={style.content}>
      {/* Left: Product Label */}
      <section className={style.labelSection}>
        <div className={style.fruitImageWrap}>
          <img src={mangoImg} alt="Mango" className={style.fruitImage} />
        </div>
        <div className={style.dieline}>
          <p>Dieline</p>
          <div className={style.dielineItems}>
            <span>Mango</span>
            <span>Peach</span>
            <span>Green Grape</span>
          </div>
        </div>
      </section>

      {/* Right: Design Concept */}
      <section className={style.infoSection}>
        <h1 className={style.conceptTitle}>Design Concept</h1>
        <p className={style.conceptText}>{designContent}</p>
        <div className={style.tools}>
          <span className={style.toolsTitle}>Tools</span>
          <div className={style.toolIcons}>
            <img
              src={photoshopSvg}
              alt="Photoshop"
              className={style.toolIcon}
            />
            <img
              src={illustratorSvg}
              alt="Illustrator"
              className={style.toolIcon}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
