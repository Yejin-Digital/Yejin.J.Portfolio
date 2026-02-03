import NavigationBar from '../components/NavigationBar.jsx';
import Footer from '../components/Footer.jsx';
import style from '../styles/Resume.module.css';
import resumeImg1 from '../assets/porfolio_Resume.jpg';
import resumeImg2 from '../assets/porfolio_Resume2.jpg';

export default function Resume() {
  return (
    <div className={style.page}>
      <NavigationBar />
      <div className={style.content}>
        <h1 className={style.title}>Resume</h1>
        <div className={style.resumeContainer}>
          <div className={style.resumeImages}>
            <img
              src={resumeImg1}
              alt="Resume Page 1"
              className={style.resumeImage}
            />
            <img
              src={resumeImg2}
              alt="Resume Page 2"
              className={style.resumeImage}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
