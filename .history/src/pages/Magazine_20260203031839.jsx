import NavigationBar from '../components/NavigationBar.jsx';
import Footer from '../components/Footer.jsx';
import style from '../styles/Magazine.module.css';
import Mockup from '../components/Mockup.jsx';
import magazineImg from '../assets/magazine1.jpg';
import magazineMockup1 from '../assets/magazine_mockup1.jpg';
import magazineMockup2 from '../assets/magazine_mockup3.jpg';
import magazineMockup3 from '../assets/magazine_mockup2.jpg';
import photoshopSvg from '../assets/photoshop.svg';
import illustratorSvg from '../assets/illustrator.svg';
import indesignSvg from '../assets/indesign.svg';

export default function Magazine() {
  return (
    <div className={style.page}>
      <NavigationBar />
      <div className={style.fullWidthImageWrap}>
        <img src={magazineImg} alt="Magazine" />
      </div>
      <div className={style.content}>
        {/* Left: Product Label */}
        <section className={style.labelSection}>
          <div className={style.fruitImageWrap}>
            <img src={magazineMockup1} alt="Magazine 1" />
          </div>
        </section>

        {/* Right: Design Concept */}
        <section className={style.infoSection}>
          <h1 className={style.conceptTitle}>Design Concept</h1>
          <p className={style.conceptText}>
            This magazine-style brochure shows a G Adventures tour that starts
            in Athens and ends in Istanbul. The layout and photos guide readers
            through the journey in a clear order. Maps, images, and text are
            used in a simple and balanced way. The design focuses on the travel
            route and the overall experience without visual clutter.
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
              <img
                src={indesignSvg}
                alt="Indesign"
                className={style.toolIcon}
              />
            </div>
          </div>
        </section>
      </div>
      <Mockup
        image1={magazineMockup2}
        image2={magazineMockup3}
        name1="magazine mockup 2"
        name2="magazine mockup 3"
      />
      <Footer />
    </div>
  );
}
