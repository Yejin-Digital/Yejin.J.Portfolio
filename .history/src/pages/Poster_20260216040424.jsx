import { useState } from 'react';
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
import Buttons from '../components/Buttons.jsx';
import { Link } from 'react-router-dom';

export default function Poster() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const posterImages = [poster1, poster2, poster3];

  const handlePrev = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? posterImages.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === posterImages.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div className={style.page}>
      <div className={style.fullWidthImageWrap}>
        <img src={posterImg} alt="Poster" />
      </div>
      <div className={style.content}>
        {/* Left: Product Label */}
        <section className={style.labelSection}>
          <div className={style.carouselContainer}>
            <button
              className={style.arrowButton}
              onClick={handlePrev}
              aria-label="Previous image"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="#0F0F0E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className={style.fruitImageWrap}>
              <img
                src={posterImages[currentImageIndex]}
                alt={`Poster ${currentImageIndex + 1}`}
                className={style.carouselImage}
              />
            </div>
            <button
              className={style.arrowButton}
              onClick={handleNext}
              aria-label="Next image"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#0F0F0E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className={style.carouselDots}>
              {posterImages.map((_, index) => (
                <button
                  key={index}
                  className={`${style.dot} ${index === currentImageIndex ? style.dotActive : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Right: Design Concept */}
        <section className={style.infoSection}>
          <div className={style.conceptTextWrap}>
            <h1 className={style.conceptTitle}>Design Concept</h1>
            <p className={style.conceptText}>
              This magazine-style brochure showcases a G Adventures tour from
              Athens to Istanbul. The layout and photos guide readers through
              the journey, while maps, images, and text remain simple and
              balanced. The design emphasizes the travel route and experience
              without unnecessary clutter. The cover uses collage techniques to
              capture the journey's highlights, inviting readers to experience
              them at a glance.
            </p>
          </div>
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
