import { useState } from 'react';
import style from '../styles/Packaging.module.css';
import packagingImg from '../assets/packaging1.png';
import Mockup from '../components/Mockup.jsx';
import canMockup1 from '../assets/can_mockup1.jpg';
import canMockup2 from '../assets/can_mockup2.jpg';
import mangoImg from '../assets/mango.png';
import peachImg from '../assets/peach.png';
import grapeImg from '../assets/grape.png';
import photoshopSvg from '../assets/photoshop.svg';
import illustratorSvg from '../assets/illustrator.svg';

export default function Packaging() {
  const [selectedFruit, setSelectedFruit] = useState('Mango');

  const fruitImages = {
    Mango: mangoImg,
    Peach: peachImg,
    'Green Grape': grapeImg,
  };

  const handleFruitClick = (fruit) => {
    setSelectedFruit(fruit);
  };

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
          <img src={packagingImg} alt="Packaging" />

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
                stroke-width="1.5
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
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 10 Q40 30 50 50 Q60 70 50 90"
                stroke="#058CD7"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            <svg
              className={style.splash4}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 10 Q40 30 50 50 Q60 70 50 90"
                stroke="#058CD7"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
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
              StoneVine is 100% organic sparkling fruit juice, available in
              three different flavors. To appeal to young customers, the use of
              round and bubbly fonts, along with fruit photographs at the center
              of the designs, facilitates easy identification of the flavors.
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
          name1="can mockup 1"
          name2="can mockup 2"
        />
      </section>
    </div>
  );
}
