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
      <div className={style.cursorHint}>
        <span className={style.cursorArrow}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="82"
            height="74"
            viewBox="0 0 82 74"
            fill="none"
          >
            <path
              d="M68.8471 9.72853L72.3046 0.000108101C19.3719 9.9061 11.6995 43.54 9.94674 60.5673L4.20273e-05 59.124C4.3555 65.6965 10.6103 71.323 14.6958 73.2206C18.0072 65.887 20.5429 64.1859 25.1703 59.4754L14.523 60.6312C24.0053 41.116 38.6417 15.442 81.1076 16.0348L68.8471 9.72853Z"
              fill="#0F0F0E"
            />
          </svg>
        </span>
        <span>Put your cursor</span>
      </div>

      <div className={style.line}>
        <span className={style.staticText}>Welcome to</span>

        <div className={style.letters}>
          {LETTERS.map(({ id, color }) => (
            <span key={id} className={style.letterGroup}>
              {id === 'S' && <span className={style.apostrophe}>'</span>}
              <div
                className={style.letterWrapper}
                onMouseEnter={() => setActiveLetter(id)}
                onMouseLeave={() => setActiveLetter(null)}
              >
                {activeLetter === id && (
                  <div
                    className={style.bubble}
                    style={{ '--bubble-color': color }}
                  >
                    {LETTERS.find((l) => l.id === id)?.bubble}
                  </div>
                )}
                <div
                  className={style.letterBoxContainer}
                  style={
                    activeLetter === id
                      ? { '--letter-color': color }
                      : undefined
                  }
                >
                  <div
                    className={`${style.letterShadow} ${activeLetter === id ? style.letterShadowActive : ''}`}
                  />
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

      <div
        className={`${style.description} ${activeData ? style.descriptionVisible : ''}`}
      >
        {activeData?.description}
      </div>
    </section>
  );
}
