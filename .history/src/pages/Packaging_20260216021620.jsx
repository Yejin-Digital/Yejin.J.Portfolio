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
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 10 Q60 30 50 50 Q40 70 50 90"
                stroke="#058CD7"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            <svg
              className={style.splash2}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 10 Q60 30 50 50 Q40 70 50 90"
                stroke="#058CD7"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
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
            viewBox="0 0 63 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.6571 1.7832C29.907 0.0724506 32.3759 0.072447 32.6259 1.7832L35.9042 24.2656C36.0638 25.3597 36.9234 26.2193 38.0175 26.3789L60.4999 29.6572C62.2106 29.9072 62.2106 32.376 60.4999 32.626L38.0175 35.9043C36.9234 36.0639 36.0638 36.9235 35.9042 38.0176L32.6259 60.5C32.3759 62.2107 29.9071 62.2108 29.6571 60.5L26.3788 38.0176C26.2192 36.9235 25.3596 36.0639 24.2655 35.9043L1.78308 32.626C0.0723285 32.376 0.0723249 29.9072 1.78308 29.6572L24.2655 26.3789C25.3596 26.2193 26.2192 25.3597 26.3788 24.2656L29.6571 1.7832Z"
              fill="#FB7DA8"
              stroke="#0F0F0E"
              strokeWidth="1.5"
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
              width="62"
              height="62"
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
