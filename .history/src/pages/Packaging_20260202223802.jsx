import NavigationBar from '../components/NavigationBar.jsx';
import Footer from '../components/Footer.jsx';
import style from '../styles/Packaging.module.css';
import DesignConcept from '../components/DesignConcept.jsx';
import packagingImg from '../assets/packaging1.png';
import Mockup from '../components/Mockup.jsx';
import canMockup1 from '../assets/can_mockup1.jpg';
import canMockup2 from '../assets/can_mockup2.jpg';

export default function Packaging() {
  return (
    <div className={style.page}>
      <NavigationBar />
      <div className={style.fullWidthImageWrap}>
        <img src={packagingImg} alt="Packaging" />
      </div>
      <DesignConcept />
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
