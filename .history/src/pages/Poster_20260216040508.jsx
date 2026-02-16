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
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
              >
                <g filter="url(#filter0_d_460_2273)">
                  <circle
                    cx="17.5"
                    cy="17.5"
                    r="17"
                    transform="matrix(-1 0 0 1 35 0)"
                    fill="white"
                    stroke="black"
                  />
                  <g filter="url(#filter1_d_460_2273)">
                    <mask id="path-2-inside-1_460_2273" fill="white">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.1483 5.44606C16.0522 4.35001 14.2756 4.35001 13.1795 5.44606C12.0835 6.54211 12.0835 8.31878 13.1795 9.41481L20.3709 16.6052L13.1795 23.7966C12.0835 24.8927 12.0835 26.6693 13.1795 27.7654C14.2756 28.8614 16.0522 28.8614 17.1483 27.7654L26.2538 18.6599C26.8196 18.094 27.0915 17.3467 27.0731 16.6052C27.0913 15.8641 26.8194 15.1172 26.2538 14.5515L17.1483 5.44606Z"
                      />
                    </mask>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.1483 5.44606C16.0522 4.35001 14.2756 4.35001 13.1795 5.44606C12.0835 6.54211 12.0835 8.31878 13.1795 9.41481L20.3709 16.6052L13.1795 23.7966C12.0835 24.8927 12.0835 26.6693 13.1795 27.7654C14.2756 28.8614 16.0522 28.8614 17.1483 27.7654L26.2538 18.6599C26.8196 18.094 27.0915 17.3467 27.0731 16.6052C27.0913 15.8641 26.8194 15.1172 26.2538 14.5515L17.1483 5.44606Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.1795 5.44606L12.4724 4.73897L12.4724 4.73895L13.1795 5.44606ZM13.1795 9.41481L12.4725 10.122L12.4724 10.1219L13.1795 9.41481ZM20.3709 16.6052L21.078 15.8981L21.7852 16.6052L21.0781 17.3123L20.3709 16.6052ZM13.1795 27.7654L12.4724 28.4725L12.4724 28.4725L13.1795 27.7654ZM17.1483 27.7654L17.8554 28.4725L17.1483 27.7654ZM27.0731 16.6052L26.0734 16.6301L26.0728 16.6054L26.0734 16.5807L27.0731 16.6052ZM26.2538 14.5515L26.9609 13.8444L26.2538 14.5515ZM17.1483 5.44606L16.4412 6.15317C15.7357 5.44764 14.5922 5.44764 13.8866 6.15317L13.1795 5.44606L12.4724 4.73895C13.959 3.25238 16.3688 3.25238 17.8554 4.73895L17.1483 5.44606ZM13.1795 5.44606L13.8867 6.15315C13.1812 6.8587 13.1812 8.00221 13.8866 8.7077L13.1795 9.41481L12.4724 10.1219C10.9859 8.63534 10.9859 6.22552 12.4724 4.73897L13.1795 5.44606ZM13.1795 9.41481L13.8866 8.70765L21.078 15.8981L20.3709 16.6052L19.6639 17.3124L12.4725 10.122L13.1795 9.41481ZM20.3709 16.6052L21.0781 17.3123L13.8866 24.5038L13.1795 23.7966L12.4724 23.0895L19.6638 15.8981L20.3709 16.6052ZM13.1795 23.7966L13.8866 24.5038C13.1812 25.2092 13.1811 26.3528 13.8867 27.0583L13.1795 27.7654L12.4724 28.4725C10.9859 26.9859 10.9859 24.5761 12.4724 23.0895L13.1795 23.7966ZM13.1795 27.7654L13.8866 27.0583C14.5922 27.7638 15.7357 27.7638 16.4412 27.0583L17.1483 27.7654L17.8554 28.4725C16.3688 29.9591 13.959 29.9591 12.4724 28.4725L13.1795 27.7654ZM17.1483 27.7654L16.4412 27.0583L25.5467 17.9528L26.2538 18.6599L26.9609 19.367L17.8554 28.4725L17.1483 27.7654ZM26.2538 18.6599L25.5467 17.9528C25.9099 17.5896 26.0854 17.1109 26.0734 16.6301L27.0731 16.6052L28.0728 16.5804C28.0977 17.5826 27.7294 18.5985 26.9609 19.367L26.2538 18.6599ZM27.0731 16.6052L26.0734 16.5807C26.0852 16.1001 25.9097 15.6217 25.5467 15.2586L26.2538 14.5515L26.9609 13.8444C27.7291 14.6126 28.0974 15.628 28.0728 16.6298L27.0731 16.6052ZM26.2538 14.5515L25.5467 15.2586L16.4412 6.15317L17.1483 5.44606L17.8554 4.73895L26.9609 13.8444L26.2538 14.5515Z"
                      fill="black"
                      mask="url(#path-2-inside-1_460_2273)"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_460_2273"
                    x="0"
                    y="0"
                    width="37"
                    height="37"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="2" dy="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_460_2273"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_460_2273"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_460_2273"
                    x="12.3574"
                    y="4.62402"
                    width="14.7166"
                    height="26.9639"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_460_2273"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_460_2273"
                      result="shape"
                    />
                  </filter>
                </defs>
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
