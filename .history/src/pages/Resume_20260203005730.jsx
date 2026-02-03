import NavigationBar from '../components/NavigationBar.jsx';
import Footer from '../components/Footer.jsx';
import style from '../styles/Resume.module.css';
import resumePdf from '../assets/Resume_Portfolio.pdf';

export default function Resume() {
  return (
    <div className={style.page}>
      <NavigationBar />
      <div className={style.content}>
        <h1 className={style.title}>Resume</h1>
        <div className={style.pdfContainer}>
          <iframe
            src={resumePdf}
            className={style.pdfViewer}
            title="Resume PDF"
            type="application/pdf"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
