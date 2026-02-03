import NavigationBar from '../components/NavigationBar.jsx';
import Footer from '../components/Footer.jsx';
import style from '../styles/Packaging.module.css';
import DesignConcept from '../components/DesignConcept.jsx';
import packagingImg from '../assets/packaging1.png';

export default function Packaging() {
  return (
    <div className={style.page}>
      <NavigationBar />
      <div className={style.fullWidthImageWrap}>
        <img src={packagingImg} alt="Packaging" />
      </div>
      <DesignConcept />
      <Footer />
    </div>
  );
}
