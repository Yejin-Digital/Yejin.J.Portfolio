import { useState } from 'react';
import NavigationBar from '../components/NavigationBar.jsx';
import Footer from '../components/Footer.jsx';
import style from '../styles/Packaging.module.css';
import packagingImg from '../assets/packaging1.jpg';
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
      <NavigationBar />
      <div className={style.fullWidthImageWrap}>
        <img src={packagingImg} alt="Packaging" />
      </div>
      <div className={style.content}>
        {/* Left: Product Label */}
        <section className={style.labelSection}>
          <div className={style.fruitImageWrap}>
            <img
              src={fruitImages[selectedFruit]}
              alt={selectedFruit}
              className={style.fruitImage}
            />
          </div>
          <div className={style.dieline}>
            <p>Dieline</p>
            <div className={style.dielineItems}>
              <span
                className={selectedFruit === 'Mango' ? style.selected : ''}
                onClick={() => handleFruitClick('Mango')}
              >
                Mango
              </span>
              <span
                className={selectedFruit === 'Peach' ? style.selected : ''}
                onClick={() => handleFruitClick('Peach')}
              >
                Peach
              </span>
              <span
                className={
                  selectedFruit === 'Green Grape' ? style.selected : ''
                }
                onClick={() => handleFruitClick('Green Grape')}
              >
                Green Grape
              </span>
            </div>
          </div>
        </section>

        {/* Right: Design Concept */}
        <section className={style.infoSection}>
          <h1 className={style.conceptTitle}>Design Concept</h1>
          <p className={style.conceptText}>
            StoneVine is 100% organic sparkling fruit juice, available in three
            different flavors. Marketing to young children, the overall design
            is. To appeal to young customers, the use of round and bubbly fonts,
            along with fruit photographs at the center of the designs,
            facilitates easy identification of the flavors.
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
      <Mockup
        image1={canMockup1}
        image2={canMockup2}
        name1="can mockup 1"
        name2="can mockup 2"
      />
      <Footer />
    </div>
  );
}
