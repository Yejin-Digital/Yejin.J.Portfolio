import { useState } from 'react';
import style from '../styles/Poster.module.css';
import Mockup from '../components/Mockup.jsx';
import posterMockup1 from '../assets/poster_mockup.jpg';
import posterMockup2 from '../assets/poster_mockup2.jpg';
import posterMockup3 from '../assets/poster_image1.jpg';
import posterMockup4 from '../assets/poster_mockup3.jpg';
import photoshopSvg from '../assets/photoshop.svg';
import illustratorSvg from '../assets/illustrator.svg';
import poster1 from '../assets/poster.jpg';
import poster2 from '../assets/poster2.jpg';
import poster3 from '../assets/poster3.jpg';
import Buttons from '../components/Buttons.jsx';
import { Link } from 'react-router-dom';
import posterImg1 from '../assets/poster_preview1.png';
import posterImg2 from '../assets/poster_preview2.png';
import posterImg3 from '../assets/poster_preview3.png';
export default function Poster() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
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

  const handleImageClick = () => {
    setIsImageModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsImageModalOpen(false);
  };

  return (
    <div className={style.page}>
      <div className={style.projectPreview}>
        <div className={style.titleSection}>
          <h1>
            Poster <br /> Design
          </h1>
          <div className={style.subTitle}>
            <p>
              Commercial Poster <br /> Skateboard shoes Brand
            </p>
          </div>
        </div>
        <div className={style.imageSection}>
          <img
            className={style.image1}
            src={posterImg1}
            alt="Poster"
            fetchPriority="high"
            decoding="async"
          />
          <img
            className={style.image2}
            src={posterImg2}
            alt="Poster"
            loading="lazy"
            decoding="async"
          />
          <img
            className={style.image3}
            src={posterImg3}
            alt="Poster"
            loading="lazy"
            decoding="async"
          />
        </div>
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
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="27"
                viewBox="0 0 15 27"
                fill="none"
              >
                <g filter="url(#filter0_d_460_2271)">
                  <mask id="path-1-inside-1_460_2271" fill="white">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.92567 0.82189C11.0217 -0.273995 12.7984 -0.273931 13.8944 0.82189C14.9904 1.9179 14.9904 3.69459 13.8944 4.79064L6.70302 11.9811L13.8944 19.1725C14.9905 20.2685 14.9905 22.0462 13.8944 23.1422C12.7984 24.2379 11.0216 24.2379 9.92567 23.1422L0.820206 14.0358C0.254513 13.47 -0.017407 12.7233 0.000869941 11.982C-0.0174794 11.2407 0.25441 10.4932 0.820206 9.92736L9.92567 0.82189Z"
                    />
                  </mask>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.92567 0.82189C11.0217 -0.273995 12.7984 -0.273931 13.8944 0.82189C14.9904 1.9179 14.9904 3.69459 13.8944 4.79064L6.70302 11.9811L13.8944 19.1725C14.9905 20.2685 14.9905 22.0462 13.8944 23.1422C12.7984 24.2379 11.0216 24.2379 9.92567 23.1422L0.820206 14.0358C0.254513 13.47 -0.017407 12.7233 0.000869941 11.982C-0.0174794 11.2407 0.25441 10.4932 0.820206 9.92736L9.92567 0.82189Z"
                    fill="white"
                  />
                  <path
                    d="M9.92567 0.82189L9.2186 0.114749L9.21857 0.114783L9.92567 0.82189ZM13.8944 0.82189L14.6015 0.114783L14.6015 0.114715L13.8944 0.82189ZM13.8944 4.79064L14.6015 5.49779L14.6016 5.49771L13.8944 4.79064ZM6.70302 11.9811L5.99596 11.2739L5.28876 11.981L5.99591 12.6882L6.70302 11.9811ZM13.8944 19.1725L13.1873 19.8796L13.8944 19.1725ZM13.8944 23.1422L14.6014 23.8494L14.6015 23.8493L13.8944 23.1422ZM9.92567 23.1422L9.21853 23.8493L9.21865 23.8494L9.92567 23.1422ZM0.820206 14.0358L1.52735 13.3287L1.52733 13.3287L0.820206 14.0358ZM0.000869941 11.982L1.00057 12.0067L1.00118 11.982L1.00056 11.9573L0.000869941 11.982ZM9.92567 0.82189L10.6327 1.52903C11.3382 0.823658 12.4818 0.823644 13.1874 1.52906L13.8944 0.82189L14.6015 0.114715C13.115 -1.37151 10.7051 -1.37165 9.2186 0.114749L9.92567 0.82189ZM13.8944 0.82189L13.1873 1.529C13.8928 2.23445 13.8928 3.378 13.1873 4.08357L13.8944 4.79064L14.6016 5.49771C16.088 4.01118 16.0881 1.60136 14.6015 0.114783L13.8944 0.82189ZM13.8944 4.79064L13.1874 4.08348L5.99596 11.2739L6.70302 11.9811L7.41008 12.6882L14.6015 5.49779L13.8944 4.79064ZM6.70302 11.9811L5.99591 12.6882L13.1873 19.8796L13.8944 19.1725L14.6015 18.4654L7.41013 11.274L6.70302 11.9811ZM13.8944 19.1725L13.1873 19.8796C13.8928 20.5851 13.8928 21.7296 13.1873 22.4351L13.8944 23.1422L14.6015 23.8493C16.0881 22.3627 16.0881 19.9519 14.6015 18.4654L13.8944 19.1725ZM13.8944 23.1422L13.1874 22.435C12.4819 23.1403 11.3381 23.1403 10.6327 22.435L9.92567 23.1422L9.21865 23.8494C10.7051 25.3355 13.115 25.3354 14.6014 23.8494L13.8944 23.1422ZM9.92567 23.1422L10.6328 22.4351L1.52735 13.3287L0.820206 14.0358L0.113061 14.7428L9.21853 23.8493L9.92567 23.1422ZM0.820206 14.0358L1.52733 13.3287C1.16413 12.9654 0.98872 12.4872 1.00057 12.0067L0.000869941 11.982L-0.998826 11.9574C-1.02353 12.9595 -0.655106 13.9746 0.11308 14.7428L0.820206 14.0358ZM0.000869941 11.982L1.00056 11.9573C0.988663 11.4765 1.16423 10.9975 1.52731 10.6345L0.820206 9.92736L0.113099 9.22025C-0.655416 9.98877 -1.02362 11.0048 -0.998824 12.0068L0.000869941 11.982ZM0.820206 9.92736L1.52731 10.6345L10.6328 1.529L9.92567 0.82189L9.21857 0.114783L0.113099 9.22025L0.820206 9.92736Z"
                    fill="black"
                    mask="url(#path-1-inside-1_460_2271)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_460_2271"
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
                      result="effect1_dropShadow_460_2271"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_460_2271"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </button>
            <div className={style.fruitImageWrap}>
              <img
                src={posterImages[currentImageIndex]}
                alt={`Poster ${currentImageIndex + 1}`}
                className={style.carouselImage}
                onClick={handleImageClick}
                loading="lazy"
                decoding="async"
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
              This advertising poster series highlights skateboard sneakers from
              three brands, capturing the gritty energy and free spirit of
              street culture. While maintaining a consistent layout, the design
              creates visual energy with bold typography. Each brand stands out
              through strong textures and custom typefaces designed to match its
              shoe’s unique style.
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
          image3={posterMockup3}
          image4={posterMockup4}
          name1="poster mockup 1"
          name2="poster mockup 2"
        />
        <div className={style.nextProjectButton}>
          <Link to="/scaffold">
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

      {/* Image Modal */}
      {isImageModalOpen && (
        <div className={style.imageModalOverlay} onClick={handleCloseModal}>
          <div
            className={style.imageModalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={style.closeButton} onClick={handleCloseModal}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="#0F0F0E"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className={style.modalCarouselContainer}>
              <button
                className={style.modalArrowButton}
                onClick={handlePrev}
                aria-label="Previous image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="27"
                  viewBox="0 0 15 27"
                  fill="none"
                >
                  <g filter="url(#filter0_d_460_2271)">
                    <mask id="path-1-inside-1_460_2271" fill="white">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.92567 0.82189C11.0217 -0.273995 12.7984 -0.273931 13.8944 0.82189C14.9904 1.9179 14.9904 3.69459 13.8944 4.79064L6.70302 11.9811L13.8944 19.1725C14.9905 20.2685 14.9905 22.0462 13.8944 23.1422C12.7984 24.2379 11.0216 24.2379 9.92567 23.1422L0.820206 14.0358C0.254513 13.47 -0.017407 12.7233 0.000869941 11.982C-0.0174794 11.2407 0.25441 10.4932 0.820206 9.92736L9.92567 0.82189Z"
                      />
                    </mask>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.92567 0.82189C11.0217 -0.273995 12.7984 -0.273931 13.8944 0.82189C14.9904 1.9179 14.9904 3.69459 13.8944 4.79064L6.70302 11.9811L13.8944 19.1725C14.9905 20.2685 14.9905 22.0462 13.8944 23.1422C12.7984 24.2379 11.0216 24.2379 9.92567 23.1422L0.820206 14.0358C0.254513 13.47 -0.017407 12.7233 0.000869941 11.982C-0.0174794 11.2407 0.25441 10.4932 0.820206 9.92736L9.92567 0.82189Z"
                      fill="white"
                    />
                    <path
                      d="M9.92567 0.82189L9.2186 0.114749L9.21857 0.114783L9.92567 0.82189ZM13.8944 0.82189L14.6015 0.114783L14.6015 0.114715L13.8944 0.82189ZM13.8944 4.79064L14.6015 5.49779L14.6016 5.49771L13.8944 4.79064ZM6.70302 11.9811L5.99596 11.2739L5.28876 11.981L5.99591 12.6882L6.70302 11.9811ZM13.8944 19.1725L13.1873 19.8796L13.8944 19.1725ZM13.8944 23.1422L14.6014 23.8494L14.6015 23.8493L13.8944 23.1422ZM9.92567 23.1422L9.21853 23.8493L9.21865 23.8494L9.92567 23.1422ZM0.820206 14.0358L1.52735 13.3287L1.52733 13.3287L0.820206 14.0358ZM0.000869941 11.982L1.00057 12.0067L1.00118 11.982L1.00056 11.9573L0.000869941 11.982ZM9.92567 0.82189L10.6327 1.52903C11.3382 0.823658 12.4818 0.823644 13.1874 1.52906L13.8944 0.82189L14.6015 0.114715C13.115 -1.37151 10.7051 -1.37165 9.2186 0.114749L9.92567 0.82189ZM13.8944 0.82189L13.1873 1.529C13.8928 2.23445 13.8928 3.378 13.1873 4.08357L13.8944 4.79064L14.6016 5.49771C16.088 4.01118 16.0881 1.60136 14.6015 0.114783L13.8944 0.82189ZM13.8944 4.79064L13.1874 4.08348L5.99596 11.2739L6.70302 11.9811L7.41008 12.6882L14.6015 5.49779L13.8944 4.79064ZM6.70302 11.9811L5.99591 12.6882L13.1873 19.8796L13.8944 19.1725L14.6015 18.4654L7.41013 11.274L6.70302 11.9811ZM13.8944 19.1725L13.1873 19.8796C13.8928 20.5851 13.8928 21.7296 13.1873 22.4351L13.8944 23.1422L14.6015 23.8493C16.0881 22.3627 16.0881 19.9519 14.6015 18.4654L13.8944 19.1725ZM13.8944 23.1422L13.1874 22.435C12.4819 23.1403 11.3381 23.1403 10.6327 22.435L9.92567 23.1422L9.21865 23.8494C10.7051 25.3355 13.115 25.3354 14.6014 23.8494L13.8944 23.1422ZM9.92567 23.1422L10.6328 22.4351L1.52735 13.3287L0.820206 14.0358L0.113061 14.7428L9.21853 23.8493L9.92567 23.1422ZM0.820206 14.0358L1.52733 13.3287C1.16413 12.9654 0.98872 12.4872 1.00057 12.0067L0.000869941 11.982L-0.998826 11.9574C-1.02353 12.9595 -0.655106 13.9746 0.11308 14.7428L0.820206 14.0358ZM0.000869941 11.982L1.00056 11.9573C0.988663 11.4765 1.16423 10.9975 1.52731 10.6345L0.820206 9.92736L0.113099 9.22025C-0.655416 9.98877 -1.02362 11.0048 -0.998824 12.0068L0.000869941 11.982ZM0.820206 9.92736L1.52731 10.6345L10.6328 1.529L9.92567 0.82189L9.21857 0.114783L0.113099 9.22025L0.820206 9.92736Z"
                      fill="black"
                      mask="url(#path-1-inside-1_460_2271)"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_460_2271"
                      x="0"
                      y="0"
                      width="14.7166"
                      height="26.9639"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                        result="effect1_dropShadow_460_2271"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_460_2271"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </button>
              <div className={style.modalFruitImageWrap}>
                <img
                  src={posterImages[currentImageIndex]}
                  alt={`Poster ${currentImageIndex + 1}`}
                  className={style.modalCarouselImage}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <button
                className={style.modalArrowButton}
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
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.79087 0.822035C3.69482 -0.274012 1.91817 -0.274012 0.82212 0.822035C-0.273879 1.91809 -0.273911 3.69475 0.82212 4.79079L8.01353 11.9812L0.82212 19.1726C-0.273914 20.2687 -0.273889 22.0453 0.82212 23.1414C1.91817 24.2374 3.69482 24.2374 4.79087 23.1414L13.8963 14.0359C14.4622 13.47 14.7341 12.7227 14.7157 11.9812C14.7339 11.24 14.462 10.4931 13.8963 9.9275L4.79087 0.822035Z"
                      />
                    </mask>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.79087 0.822035C3.69482 -0.274012 1.91817 -0.274012 0.82212 0.822035C-0.273879 1.91809 -0.273911 3.69475 0.82212 4.79079L8.01353 11.9812L0.82212 19.1726C-0.273914 20.2687 -0.273889 22.0453 0.82212 23.1414C1.91817 24.2374 3.69482 24.2374 4.79087 23.1414L13.8963 14.0359C14.4622 13.47 14.7341 12.7227 14.7157 11.9812C14.7339 11.24 14.462 10.4931 13.8963 9.9275L4.79087 0.822035Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
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
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
              <div className={style.modalCarouselDots}>
                {posterImages.map((_, index) => (
                  <button
                    key={index}
                    className={`${style.modalDot} ${index === currentImageIndex ? style.modalDotActive : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
