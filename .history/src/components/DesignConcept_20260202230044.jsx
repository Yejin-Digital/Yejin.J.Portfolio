import mangoImg from '../assets/mango.png';
import photoshopSvg from '../assets/photoshop.svg';
import illustratorSvg from '../assets/illustrator.svg';
import style from '../styles/DesignConcept.module.css';

export default function DesignConcept() {
  return (
    <div className={style.content}>
      {/* Left: Product Label */}
      <section className={style.labelSection}>
        <div className={style.fruitImageWrap}>
          <img src={mangoImg} alt="Mango" className={style.fruitImage} />
        </div>
        <p className={style.dieline}>
          Dieline
          <div className={style.dielineItems}></div>
          <span>Mango</span>
          <span>Peach</span>
          <span>Green Grape</span>
        </p>
      </section>

      {/* Right: Design Concept */}
      <section className={style.infoSection}>
        <h1 className={style.conceptTitle}>Design Concept</h1>
        <p className={style.conceptText}>
          StoneVine is 100% organic sparkling fruit juice with three different
          flavors. Marketing to young children, overall design is. In order to
          appeal to young customers, the use of round and bubbly fonts and fruit
          photographs in the center of the designs allow easy identification of
          the flavors.
        </p>
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
