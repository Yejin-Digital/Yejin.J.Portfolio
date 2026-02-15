import { useState } from 'react';
import style from '../styles/WelcomeYejins.module.css';

const LETTERS = [
  {
    id: 'Y',
    color: '#FFC567',
    bubble: 'Your perspective',
    description: (
      <>
        I design with the <strong>user's perspective</strong> in mind at every
        step.
      </>
    ),
  },
  {
    id: 'E',
    color: '#FB7DA8',
    bubble: 'Empathy',
    description: (
      <>
        I begin each design project by <strong>understanding</strong> users'
        needs and challenges.
      </>
    ),
  },
  {
    id: 'J',
    color: '#FD5A46',
    bubble: 'Journey',
    description: (
      <>
        I review the <strong>user journey</strong> to assess how each step is
        connected.
      </>
    ),
  },
  {
    id: 'I',
    color: '#552CB7',
    bubble: 'Iteration',
    description: (
      <>
        I enhance designs by incorporating feedback, conducting tests, and{' '}
        <strong>refining through iteration</strong>.
      </>
    ),
  },
  {
    id: 'N',
    color: '#00995E',
    bubble: 'Navigation',
    description: (
      <>
        I prioritize <strong>clear navigation</strong> to ensure users can
        easily find what they need.
      </>
    ),
  },
  {
    id: 'S',
    color: '#058CD7',
    bubble: 'Simplicity',
    description: (
      <>
        I focus on delivering <strong>straightforward solutions</strong> that
        users can easily understand.
      </>
    ),
  },
];

export default function WelcomeYejins() {
  const [activeLetter, setActiveLetter] = useState(null);
  const activeData = LETTERS.find((l) => l.id === activeLetter);

  return (
    <section
      className={style.section}
      aria-label="Welcome to YEJIN'S Portfolio"
    >
      <div className={style.lineBlock}>
        <div className={style.cursorHint}>
          <span className={style.cursorArrow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="64"
              viewBox="0 0 82 74"
              fill="none"
            >
              <path
                d="M68.8474 9.7284L72.305 -1.39693e-05C19.3722 9.90597 11.6999 43.5399 9.94711 60.5672L0.000408238 59.1239C4.35587 65.6963 10.6107 71.3229 14.6962 73.2205C18.0076 65.8869 20.5432 64.1858 25.1707 59.4753L14.5234 60.631C24.0057 41.1158 38.6421 15.4419 81.108 16.0347L68.8474 9.7284Z"
                fill="#0F0F0E"
              />
            </svg>
          </span>
          <span>Put your cursor</span>
        </div>

        <div className={style.line}>
          {activeLetter && (
            <div className={style.bubble}>
              <div className={style.bubbleArrow}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="38"
                  viewBox="0 0 34 38"
                  fill="none"
                >
                  <path
                    d="M18.457 35.2451C17.761 36.8517 15.4831 36.8517 14.7871 35.2451L1.16797 3.79492C0.596151 2.47435 1.56486 0.999997 3.00391 0.999997L30.2402 0.999999C31.6793 0.999999 32.648 2.47436 32.0762 3.79492L18.457 35.2451Z"
                    fill="#D9D9D9"
                    stroke="black"
                    stroke-width="2"
                  />
                </svg>
              </div>

              <span className={style.bubbleText}>
                {LETTERS.find((l) => l.id === activeLetter)?.bubble}
              </span>
            </div>
          )}
          <span className={style.staticText}>Welcome to</span>

          <div className={style.letters}>
            {LETTERS.map(({ id, color }) => (
              <span key={id} className={style.letterGroup}>
                {id === 'S' && (
                  <span className={style.apostrophe}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="30"
                      viewBox="0 0 18 30"
                      fill="none"
                    >
                      <path
                        d="M17.92 -6.10352e-05L17.92 16.3839L9.34398 29.4399L0.767982 29.4399L6.27198 16.3839L-1.60247e-05 16.3839L-1.45924e-05 -6.26018e-05L17.92 -6.10352e-05Z"
                        fill="#0F0F0E"
                      />
                    </svg>
                  </span>
                )}
                <div
                  className={style.letterWrapper}
                  onMouseEnter={() => setActiveLetter(id)}
                  onMouseLeave={() => setActiveLetter(null)}
                >
                  <div
                    className={`${style.letterBoxContainer} ${activeLetter === id ? style.letterBoxContainerActive : ''}`}
                    style={
                      activeLetter === id
                        ? { '--letter-color': color }
                        : undefined
                    }
                  >
                    <div className={style.letterShadow} />
                    <div
                      className={`${style.letterBox} ${activeLetter === id ? style.letterBoxActive : ''}`}
                      style={
                        activeLetter === id
                          ? { backgroundColor: color }
                          : undefined
                      }
                    />
                    <div className={style.letterChar}>{id}</div>
                  </div>
                </div>
              </span>
            ))}
          </div>
          <span className={style.staticText}>Portfolio</span>
        </div>
      </div>

      <div
        className={`${style.description} ${activeData ? style.descriptionVisible : ''}`}
        style={
          activeData
            ? { '--description-strong-color': activeData.color }
            : undefined
        }
      >
        {activeData?.description}
      </div>
    </section>
  );
}
