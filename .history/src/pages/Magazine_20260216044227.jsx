import style from '../styles/Magazine.module.css';
import Mockup from '../components/Mockup.jsx';
import magazineImg from '../assets/magazine2.jpg';
import magazineMockup1 from '../assets/magazine_mockup1.jpg';
import magazineMockup2 from '../assets/magazine_mockup3.jpg';
import magazineMockup3 from '../assets/magazine_mockup2.jpg';
import photoshopSvg from '../assets/photoshop.svg';
import illustratorSvg from '../assets/illustrator.svg';
import indesignSvg from '../assets/indesign.svg';
import Buttons from '../components/Buttons.jsx';
export default function Magazine() {
  return (
    <div className={style.page}>
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
            This magazine-style brochure shows a G.Adventures tour that starts
            in Athens and ends in Istanbul.
            <br />
            The layout and photos guide readers through the journey in a clear
            order. Maps, images, and text are used in a simple and balanced way.
            The design focuses on the travel route and the overall experience
            without visual clutter.
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
      <section className={style.mockupSection}>
        <Mockup
          image1={magazineMockup2}
          image2={magazineMockup3}
          name1="magazine mockup 2"
          name2="magazine mockup 3"
        />
        <div className={style.nextProjectButton}>
          <Buttons
            label="View Next Project"
            variant="icon"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="24"
                viewBox="0 0 39 24"
                fill="none"
              >
                <path
                  d="M20.7188 3L35.3438 12L20.7188 21L20.7188 16.5L7.3125 16.5C6.98927 16.5 6.67927 16.421 6.45071 16.2803C6.22215 16.1397 6.09375 15.9489 6.09375 15.75L6.09375 8.25C6.09375 8.05109 6.22215 7.86032 6.45071 7.71967C6.67927 7.57902 6.98927 7.5 7.3125 7.5L20.7188 7.5L20.7188 3Z"
                  fill="#0F0F0E"
                  stroke="#0F0F0E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
        </div>
      </section>
    </div>
  );
}
