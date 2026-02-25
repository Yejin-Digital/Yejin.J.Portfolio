import { useState, useEffect } from 'react';
import style from '../styles/Packaging.module.css';
import { preloadImage } from '../utils/preloadImage.js';
import packagingImg from '../assets/packaging1.png';
import Mockup from '../components/Mockup.jsx';
import canMockup1 from '../assets/can_mockup1.jpg';
import canMockup2 from '../assets/can_mockup2.jpg';
import canMockup3 from '../assets/can_mockup3.jpg';
import mangoImg from '../assets/mango.png';
import peachImg from '../assets/peach.png';
import grapeImg from '../assets/grape.png';
import photoshopSvg from '../assets/photoshop.svg';
import illustratorSvg from '../assets/illustrator.svg';
import Buttons from '../components/Buttons.jsx';
import { Link } from 'react-router-dom';

export default function Packaging() {
  const [selectedFruit, setSelectedFruit] = useState('Mango');
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const fruitImages = {
    Mango: mangoImg,
    Peach: peachImg,
    'Green Grape': grapeImg,
  };

  const handleFruitClick = (fruit) => {
    setSelectedFruit(fruit);
  };

  const handleImageClick = () => {
    setIsImageModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsImageModalOpen(false);
  };

  useEffect(() => {
    preloadImage(packagingImg);
  }, []);

  return (
    <div className={style.page}>
      <div className={style.projectPreview}>
        <div className={style.titleSection}>
          <h1>
            Packaging <br /> Design
          </h1>
          <div className={style.subTitle}>
            <h2>StoneVine</h2>
            <p>Organic Sparkling Juice</p>
          </div>
        </div>
        <div className={style.imageSection}>
          <img
            src={packagingImg}
            alt="Packaging"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />

          {/* 왼쪽 도형들 */}
          <div className={style.graphicLeft}>
            <svg
              className={style.splash1}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 124 65"
              fill="none"
            >
              <path
                d="M25.0129 4.44232C59.5966 -6.89871 101.516 10.1128 123 50.8375C115.664 44.6515 98.3723 35.3724 79.5084 38.4654C51.3642 43.0801 54.3566 66.818 25.0129 63.725C-4.33081 60.632 -9.57077 15.7834 25.0129 4.44232Z"
                fill="#058CD7"
                stroke="black"
                stroke-width="2"
              />
            </svg>
            <svg
              className={style.splash2}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 69 54"
              fill="none"
            >
              <path
                d="M4.34953 22.7849C15.7529 3.86681 41.7702 -4.91049 67.7937 5.31914C61.9684 5.37852 50.3396 7.95836 42.8932 16.854C31.7835 30.1261 42.5708 39.864 27.8537 50.0645C13.1366 60.2649 -7.05388 41.703 4.34953 22.7849Z"
                fill="#058CD7"
                stroke="black"
                stroke-width="2
                "
              />
            </svg>
            <svg
              className={style.starPurple}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 62 62"
              fill="none"
            >
              <path
                d="M38.4346 22.9746L38.5947 23.4053L39.0254 23.5654L59.1191 31L39.0254 38.4346L38.5947 38.5947L38.4346 39.0254L31 59.1191L23.5654 39.0254L23.4053 38.5947L22.9746 38.4346L2.87988 31L22.9746 23.5654L23.4053 23.4053L23.5654 22.9746L31 2.87988L38.4346 22.9746Z"
                fill="#552CB7"
                stroke="black"
                stroke-width="2"
              />
            </svg>
          </div>

          {/* 위쪽 중앙/오른쪽 별 */}
          <svg
            className={style.starPink}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 62 62"
            fill="none"
          >
            <path
              d="M38.4346 22.9746L38.5947 23.4053L39.0254 23.5654L59.1191 31L39.0254 38.4346L38.5947 38.5947L38.4346 39.0254L31 59.1191L23.5654 39.0254L23.4053 38.5947L22.9746 38.4346L2.87988 31L22.9746 23.5654L23.4053 23.4053L23.5654 22.9746L31 2.87988L38.4346 22.9746Z"
              fill="#FB7DA8"
              stroke="black"
              stroke-width="2"
            />
          </svg>

          {/* 오른쪽 도형들 */}
          <div className={style.graphicRight}>
            <svg
              className={style.splash3}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 43 31"
              fill="none"
            >
              <path
                d="M28.5234 1.02718C15.1343 1.79903 2.98064 13.1981 0.992903 29.9281C2.69459 26.8416 7.40825 21.3701 14.3016 19.8969C24.5862 17.6989 26.7031 26.1748 36.3787 21.1942C46.0543 16.2136 41.9126 0.255326 28.5234 1.02718Z"
                fill="#058CD7"
                stroke="black"
                stroke-width="1.5"
              />
            </svg>
            <svg
              className={style.splash4}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 45 31"
              fill="none"
            >
              <path
                d="M40.2986 9.94233C31.3215 -0.0214809 14.8256 -2.37405 0.529067 6.5396C4.00163 5.93672 11.219 6.19205 16.6802 10.6489C24.8281 17.2985 19.5391 24.2518 29.4771 28.6856C39.4152 33.1195 49.2757 19.9061 40.2986 9.94233Z"
                fill="#058CD7"
                stroke="black"
                stroke-width="1.5"
              />
            </svg>
            <svg
              className={style.starYellow}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 62 62"
              fill="none"
            >
              <path
                d="M38.4346 22.9746L38.5947 23.4053L39.0254 23.5654L59.1191 31L39.0254 38.4346L38.5947 38.5947L38.4346 39.0254L31 59.1191L23.5654 39.0254L23.4053 38.5947L22.9746 38.4346L2.87988 31L22.9746 23.5654L23.4053 23.4053L23.5654 22.9746L31 2.87988L38.4346 22.9746Z"
                fill="#FFC567"
                stroke="black"
                stroke-width="2"
              />
            </svg>
            <svg
              className={style.splash5}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 92 49"
              fill="none"
            >
              <path
                d="M73.1723 3.56858C47.6597 -4.8922 16.7354 7.79896 0.886719 38.1808C6.2985 33.5659 19.0547 26.6434 32.9707 28.9509C53.7328 32.3936 51.5253 50.1028 73.1723 47.7953C94.8193 45.4879 98.6848 12.0294 73.1723 3.56858Z"
                fill="#058CD7"
                stroke="black"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className={style.content}>
        {/* Left: Product Label */}
        <section className={style.labelSection}>
          <p>Dieline</p>
          <div className={style.fruitImageWrap}>
            <img
              src={fruitImages[selectedFruit]}
              alt={selectedFruit}
              className={style.fruitImage}
              onClick={handleImageClick}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={style.dielineItems}>
            <span
              className={selectedFruit === 'Mango' ? style.selectedMango : ''}
              onClick={() => handleFruitClick('Mango')}
            >
              Mango
            </span>
            <span
              className={selectedFruit === 'Peach' ? style.selectedPeach : ''}
              onClick={() => handleFruitClick('Peach')}
            >
              Peach
            </span>
            <span
              className={
                selectedFruit === 'Green Grape' ? style.selectedGrape : ''
              }
              onClick={() => handleFruitClick('Green Grape')}
            >
              Green Grape
            </span>
          </div>
        </section>

        {/* Right: Design Concept */}
        <section className={style.infoSection}>
          <div className={style.conceptTextWrap}>
            <h1 className={style.conceptTitle}>Design Concept</h1>
            <p className={style.conceptText}>
              StoneVine is a 100% organic sparkling fruit juice for young
              children, featuring green grape, peach, and mango flavors. The
              brand identity combines playful adventure with trust, appealing to
              both children and parents. The design features rounded, bubbly
              lettering to convey a sense of freshness and fun. Each flavor uses
              a distinct color palette and bold fruit imagery, ensuring every
              bottle is easily identifiable. A unified layout connects all
              flavors, using framed labels and splash graphics to highlight the
              drink’s sparkling quality. Centered fruit photography emphasizes
              the organic purity and freshness of each ingredient. Altogether,
              the design balances visual appeal with clear communication,
              encouraging children’s interest and assuring parents of its
              organic quality.
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
          image1={canMockup1}
          image2={canMockup2}
          image3={canMockup3}
          image4={canMockup1}
          name1="can mockup 1"
          name2="can mockup 2"
        />
        <div className={style.nextProjectButton}>
          <Link to="/poster">
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

      {/* image modal */}
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
            <img
              src={fruitImages[selectedFruit]}
              alt={selectedFruit}
              className={style.modalImage}
              loading="lazy"
              decoding="async"
            />
            <div className={style.modalDielineItems}>
              <span
                className={selectedFruit === 'Mango' ? style.selectedMango : ''}
                onClick={() => handleFruitClick('Mango')}
              >
                Mango
              </span>
              <span
                className={selectedFruit === 'Peach' ? style.selectedPeach : ''}
                onClick={() => handleFruitClick('Peach')}
              >
                Peach
              </span>
              <span
                className={
                  selectedFruit === 'Green Grape' ? style.selectedGrape : ''
                }
                onClick={() => handleFruitClick('Green Grape')}
              >
                Green Grape
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
