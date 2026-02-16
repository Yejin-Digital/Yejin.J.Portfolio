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
                width="15"
                height="27"
                viewBox="0 0 15 27"
                fill="none"
              >
                <g filter="url(#filter0_d_460_2275)">
                  <mask id="path-1-inside-1_460_2275" fill="white">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.79087 0.822035C3.69482 -0.274012 1.91817 -0.274012 0.82212 0.822035C-0.273879 1.91809 -0.273911 3.69475 0.82212 4.79079L8.01353 11.9812L0.82212 19.1726C-0.273914 20.2687 -0.273889 22.0453 0.82212 23.1414C1.91817 24.2374 3.69482 24.2374 4.79087 23.1414L13.8963 14.0359C14.4622 13.47 14.7341 12.7227 14.7157 11.9812C14.7339 11.24 14.462 10.4931 13.8963 9.9275L4.79087 0.822035Z"
                    />
                  </mask>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.79087 0.822035C3.69482 -0.274012 1.91817 -0.274012 0.82212 0.822035C-0.273879 1.91809 -0.273911 3.69475 0.82212 4.79079L8.01353 11.9812L0.82212 19.1726C-0.273914 20.2687 -0.273889 22.0453 0.82212 23.1414C1.91817 24.2374 3.69482 24.2374 4.79087 23.1414L13.8963 14.0359C14.4622 13.47 14.7341 12.7227 14.7157 11.9812C14.7339 11.24 14.462 10.4931 13.8963 9.9275L4.79087 0.822035Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.82212 0.822035L0.114996 0.114945L0.115013 0.114928L0.82212 0.822035ZM0.82212 4.79079L0.115061 5.49794L0.115013 5.49789L0.82212 4.79079ZM8.01353 11.9812L8.72058 11.2741L9.42779 11.9812L8.72063 12.6883L8.01353 11.9812ZM0.82212 23.1414L0.115013 23.8485L0.115 23.8485L0.82212 23.1414ZM4.79087 23.1414L5.49798 23.8485L4.79087 23.1414ZM14.7157 11.9812L13.716 12.0061L13.7154 11.9814L13.716 11.9567L14.7157 11.9812ZM13.8963 9.9275L14.6034 9.2204L13.8963 9.9275ZM4.79087 0.822035L4.08376 1.52914C3.37824 0.823619 2.23475 0.823619 1.52923 1.52914L0.82212 0.822035L0.115013 0.114928C1.60158 -1.37164 4.0114 -1.37164 5.49798 0.114928L4.79087 0.822035ZM0.82212 0.822035L1.52924 1.52913C0.82373 2.23467 0.823736 3.37819 1.52923 4.08368L0.82212 4.79079L0.115013 5.49789C-1.37156 4.01132 -1.37149 1.6015 0.114996 0.114945L0.82212 0.822035ZM0.82212 4.79079L1.52918 4.08363L8.72058 11.2741L8.01353 11.9812L7.30647 12.6884L0.115061 5.49794L0.82212 4.79079ZM8.01353 11.9812L8.72063 12.6883L1.52923 19.8797L0.82212 19.1726L0.115013 18.4655L7.30642 11.2741L8.01353 11.9812ZM0.82212 19.1726L1.52923 19.8797C0.82373 20.5852 0.823725 21.7287 1.52924 22.4343L0.82212 23.1414L0.115 23.8485C-1.3715 22.3619 -1.37156 19.9521 0.115013 18.4655L0.82212 19.1726ZM0.82212 23.1414L1.52923 22.4343C2.23475 23.1398 3.37824 23.1398 4.08376 22.4343L4.79087 23.1414L5.49798 23.8485C4.0114 25.335 1.60158 25.335 0.115013 23.8485L0.82212 23.1414ZM4.79087 23.1414L4.08376 22.4343L13.1892 13.3288L13.8963 14.0359L14.6034 14.743L5.49798 23.8485L4.79087 23.1414ZM13.8963 14.0359L13.1892 13.3288C13.5525 12.9656 13.7279 12.4868 13.716 12.0061L14.7157 11.9812L15.7154 11.9564C15.7403 12.9586 15.372 13.9745 14.6034 14.743L13.8963 14.0359ZM14.7157 11.9812L13.716 11.9567C13.7278 11.4761 13.5523 10.9977 13.1892 10.6346L13.8963 9.9275L14.6034 9.2204C15.3717 9.98862 15.74 11.0039 15.7154 12.0057L14.7157 11.9812ZM13.8963 9.9275L13.1892 10.6346L4.08376 1.52914L4.79087 0.822035L5.49798 0.114928L14.6034 9.2204L13.8963 9.9275Z"
                    fill="black"
                    mask="url(#path-1-inside-1_460_2275)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_460_2275"
                    x="0"
                    y="0"
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
                      result="effect1_dropShadow_460_2275"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_460_2275"
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
