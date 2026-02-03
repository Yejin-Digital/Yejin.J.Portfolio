import { useEffect, useRef, useState } from 'react';
import NavigationBar from '../components/NavigationBar.jsx';
import Footer from '../components/Footer.jsx';
import style from '../styles/Resume.module.css';
import resumePdf from '../assets/Resume_Portfolio.pdf';

export default function Resume() {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        // window에 PDF.js가 로드될 때까지 대기
        if (typeof window.pdfjsLib === 'undefined') {
          await new Promise((resolve) => {
            const checkPdfjs = setInterval(() => {
              if (typeof window.pdfjsLib !== 'undefined') {
                clearInterval(checkPdfjs);
                resolve();
              }
            }, 100);
            setTimeout(() => {
              clearInterval(checkPdfjs);
              resolve();
            }, 5000);
          });
        }

        if (typeof window.pdfjsLib === 'undefined') {
          throw new Error('PDF.js library not loaded');
        }

        const pdfjsLib = window.pdfjsLib;
        pdfjsLib.GlobalWorkerOptions.workerSrc =
          'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

        const loadingTask = pdfjsLib.getDocument(resumePdf);
        const pdf = await loadingTask.promise;

        const container = containerRef.current;
        container.innerHTML = ''; // 기존 내용 제거

        // 모든 페이지 렌더링
        const numPages = pdf.numPages;
        for (let pageNum = 1; pageNum <= numPages; pageNum++) {
          const page = await pdf.getPage(pageNum);
          const viewport = page.getViewport({ scale: 2.0 });

          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          canvas.className = style.pdfCanvas;

          await page.render({
            canvasContext: context,
            viewport: viewport,
          }).promise;

          container.appendChild(canvas);
        }

        setLoading(false);
      } catch (err) {
        console.error('Error loading PDF:', err);
        setError('Failed to load PDF. Please try refreshing the page.');
        setLoading(false);
      }
    };

    loadPdf();
  }, []);

  return (
    <div className={style.page}>
      <NavigationBar />
      <div className={style.content}>
        <h1 className={style.title}>Resume</h1>
        <div className={style.pdfContainer}>
          {loading && <div className={style.loading}>Loading PDF...</div>}
          {error && <div className={style.error}>{error}</div>}
          <div ref={containerRef} className={style.pdfContent} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
