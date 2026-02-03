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
          <object
            data={resumePdf}
            type="application/pdf"
            className={style.pdfViewer}
            aria-label="Resume PDF"
          >
            <p>
              Your browser does not support PDFs.{' '}
              <a href={resumePdf} download>
                Download the PDF
              </a>
              .
            </p>
          </object>
        </div>
      </div>
      <Footer />
    </div>
  );
}
