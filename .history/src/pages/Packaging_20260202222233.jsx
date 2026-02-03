import NavigationBar from '../components/NavigationBar.jsx';
import Footer from '../components/Footer.jsx';
import style from '../styles/Packaging.module.css';
import DesignConcept from '../components/DesignConcept.jsx';

export default function Packaging() {
  return (
    <div className={style.page}>
      <NavigationBar />
      <DesignConcept />
      <Footer />
    </div>
  );
}
