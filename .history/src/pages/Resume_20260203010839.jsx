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
        // wait for PDF.js to load
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
        container.innerHTML = ''; // remove existing content

        // Get container width to calculate appropriate scale
        const containerWidth =
          container.offsetWidth || container.parentElement.offsetWidth;
        const padding = 40; // padding for better viewing
        const availableWidth = containerWidth - padding * 2;

        // render all pages
        const numPages = pdf.numPages;
        for (let pageNum = 1; pageNum <= numPages; pageNum++) {
          const page = await pdf.getPage(pageNum);

          // Calculate scale to fit container width
          const viewport = page.getViewport({ scale: 1.0 });
          const scale = availableWidth / viewport.width;
          const scaledViewport = page.getViewport({ scale: scale });

          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          canvas.height = scaledViewport.height;
          canvas.width = scaledViewport.width;
          canvas.className = style.pdfCanvas;

          await page.render({
            canvasContext: context,
            viewport: scaledViewport,
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
