import NavigationBar from '../components/NavigationBar.jsx';
import Footer from '../components/Footer.jsx';
import style from '../styles/Packaging.module.css';

export default function Packaging() {
  return (
    <div className={style.page}>
      <NavigationBar />
      <h1>Packaging</h1>
      <Footer />
    </div>
  );
}
