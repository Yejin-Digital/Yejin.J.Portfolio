import NavigationBar from '../components/NavigationBar.jsx';
import Footer from '../components/Footer.jsx';
import posterImg from '../assets/poster1.jpg';

export default function Packaging() {
  return (
    <div className={style.page}>
      <NavigationBar />
      <div className={style.fullWidthImageWrap}>
        <img src={posterImg} alt="Packaging" />
      </div>
      <div className={style.content}>
        {/* Left: Product Label */}
        <section className={style.labelSection}>
          <div className={style.fruitImageWrap}>
            <img src={mangoImg} alt="Mango" className={style.fruitImage} />
          </div>
        </section>

        {/* Right: Design Concept */}
        <section className={style.infoSection}>
          <h1 className={style.conceptTitle}>Design Concept</h1>
          <p className={style.conceptText}>
            StoneVine is 100% organic sparkling fruit juice with three different
            flavors. Marketing to young children, overall design is. In order to
            appeal to young customers, the use of round and bubbly fonts and
            fruit photographs in the center of the designs allow easy
            identification of the flavors.
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
      <Mockup
        image1={canMockup1}
        image2={canMockup2}
        name1="can mockup 1"
        name2="can mockup 2"
      />
      <Footer />
    </div>
  );
}
