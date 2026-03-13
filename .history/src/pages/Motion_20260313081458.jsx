import { useState, useRef, useEffect } from 'react';
import style from '../styles/Motion.module.css';
import mobiPreviewImg from '../assets/mobi_preview1.jpg';
import mobiPreviewVideo from '../assets/motion_preview.mp4';
import iMacPreviewImg from '../assets/iMac_frame.png';
import MacbookPreviewImg from '../assets/macBook_frame.png';
import mobiLogo from '../assets/mobi_logo.png';
import aftereffectSvg from '../assets/aftereffect.svg';
import photoshopSvg from '../assets/photoshop.svg';
import motionVideo1 from '../assets/motion_1.mp4';
import motionVideo2 from '../assets/motion_2.mp4';
import motionVideo3 from '../assets/motion_3.mp4';
import mobiFullVideo from '../assets/motion_full.mp4';

const MOTION_VIDEOS = [motionVideo1, motionVideo2, motionVideo3];

function ArrowLeft(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="27"
      viewBox="0 0 15 27"
      fill="none"
      aria-hidden
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.92567 0.82189C11.0217 -0.273995 12.7984 -0.273931 13.8944 0.82189C14.9904 1.9179 14.9904 3.69459 13.8944 4.79064L6.70302 11.9811L13.8944 19.1725C14.9905 20.2685 14.9905 22.0462 13.8944 23.1422C12.7984 24.2379 11.0216 24.2379 9.92567 23.1422L0.820206 14.0358C0.254513 13.47 -0.017407 12.7233 0.000869941 11.982C-0.0174794 11.2407 0.25441 10.4932 0.820206 9.92736L9.92567 0.82189Z"
        fill="white"
        stroke="black"
        strokeWidth="1"
      />
    </svg>
  );
}

function ArrowRight(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="27"
      viewBox="0 0 15 27"
      fill="none"
      aria-hidden
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.79087 0.822035C3.69482 -0.274012 1.91817 -0.274012 0.82212 0.822035C-0.273879 1.91809 -0.273911 3.69475 0.82212 4.79079L8.01353 11.9812L0.82212 19.1726C-0.273914 20.2687 -0.273889 22.0453 0.82212 23.1414C1.91817 24.2374 3.69482 24.2374 4.79087 23.1414L13.8963 14.0359C14.4622 13.47 14.7341 12.7227 14.7157 11.9812C14.7339 11.24 14.462 10.4931 13.8963 9.9275L4.79087 0.822035Z"
        fill="white"
        stroke="black"
        strokeWidth="1"
      />
    </svg>
  );
}

export default function Motion() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const modalVideoRef = useRef(null);
  const mockupVideoRef = useRef(null);

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setCurrentVideoIndex((prev) =>
      prev === 0 ? MOTION_VIDEOS.length - 1 : prev - 1,
    );
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setCurrentVideoIndex((prev) =>
      prev === MOTION_VIDEOS.length - 1 ? 0 : prev + 1,
    );
  };

  const handleVideoSectionClick = () => {
    setIsVideoModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsVideoModalOpen(false);
  };

  useEffect(() => {
    if (!isVideoModalOpen || !modalVideoRef.current) return;
    modalVideoRef.current.play().catch(() => {});
  }, [isVideoModalOpen, currentVideoIndex]);

  useEffect(() => {
    const el = mockupVideoRef.current;
    if (!el) return;
    el.play().catch(() => {});
  }, []);

  return (
    <div className={style.page}>
      <div className={style.titleSection}>
        <h1>
          Motion <br /> Graphic
        </h1>
        <div className={style.imageSection}>
          <img
            className={style.mockupImg1}
            src={iMacPreviewImg}
            alt=""
            loading="eager"
            decoding="async"
          />
          <img
            className={style.mockupImg2}
            src={MacbookPreviewImg}
            alt=""
            loading="lazy"
            decoding="async"
          />
          <video
            ref={mockupVideoRef}
            className={style.mockupVideo}
            src={mobiPreviewVideo}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden
          />
          <img
            className={style.mockupImg3}
            src={mobiPreviewImg}
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className={style.subTitle}>
          <div className={style.subtitleLogo}>
            <img src={mobiLogo} alt="Mobi by Rogers logo" />
          </div>
          <p>Bike share Service Explainer Video</p>
        </div>
      </div>
      <div className={style.content}>
        <section className={style.labelSection}>
          <div className={style.carouselContainer}>
            <button
              type="button"
              className={style.arrowButton}
              onClick={handlePrev}
              aria-label="Previous video"
            >
              <ArrowLeft />
            </button>
            <div
              className={style.videoWrap}
              onClick={handleVideoSectionClick}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleVideoSectionClick();
                }
              }}
              role="button"
              tabIndex={0}
              aria-label="View video larger"
            >
              <video
                className={style.carouselVideo}
                src={MOTION_VIDEOS[currentVideoIndex]}
                muted
                loop
                playsInline
                autoPlay
                aria-label={`Motion video ${currentVideoIndex + 1}`}
              />
            </div>
            <button
              type="button"
              className={style.arrowButton}
              onClick={handleNext}
              aria-label="Next video"
            >
              <ArrowRight />
            </button>
            <div className={style.carouselDots}>
              {MOTION_VIDEOS.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`${style.dot} ${index === currentVideoIndex ? style.dotActive : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentVideoIndex(index);
                  }}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
        <section className={style.infoSection}>
          <div className={style.conceptTextWrap}>
            <h2 className={style.projectDescriptionLabel}>
              Project Description
            </h2>
            <div className={style.conceptTextBlock}>
              <p className={style.conceptText}>
                The motion graphic video introduces the Mobi bike share service
                and shows how users rent and return bicycles in Vancouver. It
                visualizes the service journey, including account creation,
                station identification, bike unlocking, and ride completion.
              </p>
              <p className={style.conceptText}>
                Motion graphics and simple visual storytelling help viewers
                follow each step. Key features, such as finding a station,
                unlocking a bike with a code, and returning the bike, are
                illustrated with animated screens and easy-to-understand icons.
              </p>
              <p className={style.conceptText}>
                The project aims to show how the service works through a clear,
                engaging visual explanation. Using animated diagrams, simple
                screen graphics, and step-by-step storytelling, the video
                explains the service in an easy-to-understand way.
              </p>
            </div>
          </div>
          <div className={style.tools}>
            <span className={style.toolsTitle}>Tools</span>
            <div className={style.toolIcons}>
              <img
                src={aftereffectSvg}
                alt="After Effects"
                className={style.toolIcon}
              />
              <img
                src={photoshopSvg}
                alt="Photoshop"
                className={style.toolIcon}
              />
            </div>
          </div>
        </section>
      </div>

      <section className={style.mockupSection}>
        <div className={style.mockupSectionLineRow}>
          <span className={style.mockupSectionStar} aria-hidden>
            <svg
              className={style.star}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 63 63"
              fill="none"
            >
              <path
                d="M29.6571 1.7832C29.907 0.0724506 32.3759 0.072447 32.6259 1.7832L35.9042 24.2656C36.0638 25.3597 36.9234 26.2193 38.0175 26.3789L60.4999 29.6572C62.2106 29.9072 62.2106 32.376 60.4999 32.626L38.0175 35.9043C36.9234 36.0639 36.0638 36.9235 35.9042 38.0176L32.6259 60.5C32.3759 62.2107 29.9071 62.2108 29.6571 60.5L26.3788 38.0176C26.2192 36.9235 25.3596 36.0639 24.2655 35.9043L1.78308 32.626C0.0723285 32.376 0.0723249 29.9072 1.78308 29.6572L24.2655 26.3789C25.3596 26.2193 26.2192 25.3597 26.3788 24.2656L29.6571 1.7832Z"
                fill="#FD5A46"
                stroke="black"
              />
            </svg>
          </span>
          <div className={style.mockupSectionDashed} aria-hidden />
        </div>
        <div className={style.mockupSectionFrame}>
          <video
            className={style.mockupSectionVideo}
            src={mobiFullVideo}
            autoPlay
            muted
            loop
            playsInline
            aria-label="Motion full video"
          />
        </div>
        <div className={style.mockupSectionLineRow}>
          <div className={style.mockupSectionDashed} aria-hidden />
          <span className={style.mockupSectionStar} aria-hidden>
            <svg
              className={style.star}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 63 63"
              fill="none"
            >
              <path
                d="M29.6571 1.7832C29.907 0.0724506 32.3759 0.072447 32.6259 1.7832L35.9042 24.2656C36.0638 25.3597 36.9234 26.2193 38.0175 26.3789L60.4999 29.6572C62.2106 29.9072 62.2106 32.376 60.4999 32.626L38.0175 35.9043C36.9234 36.0639 36.0638 36.9235 35.9042 38.0176L32.6259 60.5C32.3759 62.2107 29.9071 62.2108 29.6571 60.5L26.3788 38.0176C26.2192 36.9235 25.3596 36.0639 24.2655 35.9043L1.78308 32.626C0.0723285 32.376 0.0723249 29.9072 1.78308 29.6572L24.2655 26.3789C25.3596 26.2193 26.2192 25.3597 26.3788 24.2656L29.6571 1.7832Z"
                fill="#FD5A46"
                stroke="black"
              />
            </svg>
          </span>
        </div>
      </section>

      {isVideoModalOpen && (
        <div
          className={style.videoModalOverlay}
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-label="Video full screen"
        >
          <div
            className={style.videoModalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={style.closeButton}
              onClick={handleCloseModal}
              aria-label="Close"
            >
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
            <div className={style.modalVideoContainer}>
              <button
                type="button"
                className={style.modalArrowButton}
                onClick={handlePrev}
                aria-label="Previous video"
              >
                <ArrowLeft />
              </button>
              <div className={style.modalVideoWrap}>
                <video
                  ref={modalVideoRef}
                  className={style.modalVideo}
                  src={MOTION_VIDEOS[currentVideoIndex]}
                  controls
                  autoPlay
                  playsInline
                  aria-label={`Motion video ${currentVideoIndex + 1}`}
                />
              </div>
              <button
                type="button"
                className={style.modalArrowButton}
                onClick={handleNext}
                aria-label="Next video"
              >
                <ArrowRight />
              </button>
            </div>
            <div className={style.carouselDots}>
              {MOTION_VIDEOS.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`${style.dot} ${index === currentVideoIndex ? style.dotActive : ''}`}
                  onClick={() => setCurrentVideoIndex(index)}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
