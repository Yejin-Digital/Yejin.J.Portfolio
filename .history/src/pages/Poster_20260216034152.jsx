import style from '../styles/Poster.module.css';
import Mockup from '../components/Mockup.jsx';
import posterImg from '../assets/poster1.jpg';
import posterMockup1 from '../assets/poster_mockup.jpg';
import posterMockup2 from '../assets/poster_mockup2.jpg';
import photoshopSvg from '../assets/photoshop.svg';
import illustratorSvg from '../assets/illustrator.svg';
import poster1 from '../assets/poster.jpg';
import poster2 from '../assets/poster2.jpg';
import poster3 from '../assets/poster3.jpg';

export default function Poster() {
  return (
    <div className={style.page}>
      <div className={style.fullWidthImageWrap}>
        <img src={posterImg} alt="Poster" />
      </div>
      <div className={style.content}>
        {/* Left: Product Label */}
        <section className={style.labelSection}>
          <div className={style.fruitImageWrap}>
            <img src={poster1} alt="Poster 1" />
            <img src={poster2} alt="Poster 2" />
            <img src={poster3} alt="Poster 3" />
          </div>
        </section>

        {/* Right: Design Concept */}
        <section className={style.infoSection}>
          <h1 className={style.conceptTitle}>Design Concept</h1>
          <p className={style.conceptText}>
            This magazine-style brochure showcases a G Adventures tour from
            Athens to Istanbul. The layout and photos guide readers through the
            journey, while maps, images, and text remain simple and balanced.
            The design emphasizes the travel route and experience without
            unnecessary clutter. The cover uses collage techniques to capture
            the journey's highlights, inviting readers to experience them at a
            glance.
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
      <section className={style.mockupSection}>
        <Mockup
          image1={posterMockup1}
          image2={posterMockup2}
          name1="poster mockup 1"
          name2="poster mockup 2"
        />
        <div className={style.nextProjectButton}>
          <Link to="/magazine">
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
          </Link>
        </div>
      </section>
    </div>
  );
}
