import NavigationBar from '../components/NavigationBar.jsx';
import Footer from '../components/Footer.jsx';
import posterImg from '../assets/poster1.jpg';
import posterMockup1 from '../assets/poster_mockup1.jpg';
import posterMockup2 from '../assets/poster_mockup2.jpg';

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
            This advertising poster series showcases skateboard sneakers from
            three distinct brands, capturing the raw, active vibe, and liberated
            energy of street culture. While maintaining a consistent layout, the
            design embraces visual diversity through experimental typography.
            Each brand’s unique identity comes to life with vibrant textures and
            custom typefaces tailored to the specific aesthetics of each shoe
            model.
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
        image1={posterMockup1}
        image2={posterMockup2}
        name1="can mockup 1"
        name2="can mockup 2"
      />
      <Footer />
    </div>
  );
}
