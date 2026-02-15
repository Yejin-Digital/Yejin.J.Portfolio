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
            <div
              className={style.bubble}
              style={{ '--bubble-color': activeData?.color ?? '#f4f4f4' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="813"
                height="187"
                viewBox="0 0 813 187"
                fill="none"
              >
                <mask id="path-1-inside-1_339_2012" fill="white">
                  <path d="M766 0C791.957 0 813 21.0426 813 47V107C813 132.957 791.957 154 766 154H204.021L190.753 184.643C189.709 187.053 186.291 187.053 185.247 184.643L171.979 154H47C21.0426 154 0 132.957 0 107V47C0 21.0426 21.0426 0 47 0H766Z" />
                </mask>
                <path
                  d="M766 0C791.957 0 813 21.0426 813 47V107C813 132.957 791.957 154 766 154H204.021L190.753 184.643C189.709 187.053 186.291 187.053 185.247 184.643L171.979 154H47C21.0426 154 0 132.957 0 107V47C0 21.0426 21.0426 0 47 0H766Z"
                  fill="#FFC567"
                />
                <path
                  d="M204.021 154V152H202.708L202.186 153.205L204.021 154ZM190.753 184.643L192.588 185.437L192.588 185.437L190.753 184.643ZM185.247 184.643L183.412 185.437L183.412 185.437L185.247 184.643ZM171.979 154L173.814 153.205L173.292 152H171.979V154ZM47 154V156V156V154ZM766 0V2C790.853 2 811 22.1472 811 47H813H815C815 19.938 793.062 -2 766 -2V0ZM813 47H811V107H813H815V47H813ZM813 107H811C811 131.853 790.853 152 766 152V154V156C793.062 156 815 134.062 815 107H813ZM766 154V152H204.021V154V156H766V154ZM204.021 154L202.186 153.205L188.918 183.848L190.753 184.643L192.588 185.437L205.857 154.795L204.021 154ZM190.753 184.643L188.918 183.848C188.57 184.651 187.43 184.651 187.082 183.848L185.247 184.643L183.412 185.437C185.152 189.454 190.848 189.454 192.588 185.437L190.753 184.643ZM185.247 184.643L187.082 183.848L173.814 153.205L171.979 154L170.143 154.795L183.412 185.437L185.247 184.643ZM171.979 154V152H47V154V156H171.979V154ZM47 154V152C22.1472 152 2 131.853 2 107H0H-2C-2 134.062 19.9381 156 47 156V154ZM0 107H2V47H0H-2V107H0ZM0 47H2C2 22.1472 22.1472 2 47 2V0V-2C19.938 -2 -2 19.938 -2 47H0ZM47 0V2H766V0V-2H47V0Z"
                  fill="#0F0F0E"
                  mask="url(#path-1-inside-1_339_2012)"
                />
              </svg>

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
