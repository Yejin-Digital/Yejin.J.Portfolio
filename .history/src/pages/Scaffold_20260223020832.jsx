import { useState, useRef, useEffect } from 'react';
import style from '../styles/Scaffold.module.css';
import { Link } from 'react-router-dom';
import Buttons from '../components/Buttons.jsx';
import Summary from '../components/Summary.jsx';
import scaffoldPreview1 from '../assets/scaffold_preview1.png';
import scaffoldPreview2 from '../assets/scaffold_preview2.png';
import scaffoldGraph from '../assets/scaffold_graph.png';
import scaffoldPersona1 from '../assets/scaffold_persona1.jpg';
import scaffoldPersona2 from '../assets/scaffold_persona2.jpg';
import scaffoldStyleGuide from '../assets/scaffold_style_guide.png';

function StarIcon() {
  return (
    <svg
      className={style.backgroundStarIcon}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden
    >
      <path
        d="M24.4639 14.9453L24.624 15.376L25.0547 15.5361L37.1191 20L25.0547 24.4639L24.624 24.624L24.4639 25.0547L20 37.1191L15.5361 25.0547L15.376 24.624L14.9453 24.4639L2.87988 20L14.9453 15.5361L15.376 15.376L15.5361 14.9453L20 2.87988L24.4639 14.9453Z"
        fill="#058CD7"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
}

const SUMMARY_ITEMS = [
  'Background',
  'User Research',
  'User Persona',
  'User Flow',
  'Style Guide',
  'Lo-fi Wireframe',
  'Hi-fi Wireframe',
  'Final Design',
  'App Features',
  'Challenges',
  'Promotional Materials',
  'Promotional Video',
];
export default function Scaffold() {
  const summarySectionRef = useRef(null);
  const [isSummaryNavActive, setIsSummaryNavActive] = useState(false);

  useEffect(() => {
    const section = summarySectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsSummaryNavActive(entry.isIntersecting),
      { threshold: 0, rootMargin: '0px' },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={style.page}>
      <div className={style.titleSectionWrapper}>
        <div className={style.titleSection}>
          <div className={style.title}>
            <h1>UX/UI Design</h1>
            <h3>Case Study</h3>
            <div className={style.demoButtons}>
              <Buttons label="Watch the demo" variant="round" />
              <Buttons label="View Prototype" variant="round" />
              <Buttons label="GitHub Repository" variant="round" />
            </div>
          </div>
          <div className={style.subTitle}>
            <h2>SCAFFOLD</h2>
            <p>
              AI-powered Financial resource tracking app <br /> For apprentices
              and trades students
            </p>
          </div>
        </div>
        <div className={style.titleSectionMockups} aria-hidden="true">
          <img
            className={style.mockupImg1}
            src={scaffoldPreview1}
            alt=""
            loading="eager"
            decoding="async"
          />
          <img
            className={style.mockupImg2}
            src={scaffoldPreview2}
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      <div className={style.contentBelowTitle}>
        <Summary
          items={SUMMARY_ITEMS}
          title="Summary"
          fixedNav
          active={isSummaryNavActive}
        />
        <section ref={summarySectionRef} className={style.summarySection}>
          <div className={style.projectOverview}>
            <div className={style.projectOverviewContent}>
              <div className={style.demoVideo}></div>
              <div className={style.projectOverviewText}>
                <div className={style.projectTitleBlock}>
                  <span className={style.projectLabel}>Project</span>
                  <h3 className={style.projectName}>Scaffold</h3>
                </div>
                <div className={style.summaryBlock}>
                  <strong className={style.summaryHeading}>Summary</strong>
                  <p className={style.summaryText}>
                    Scaffold is an app that enables apprentices and trades
                    students to quickly identify grants for which they are
                    eligible and guide them through the application process.
                  </p>
                </div>
              </div>
            </div>
            <div className={style.projectMeta}>
              <div className={style.metaItem}>
                <span className={style.metaLabel}>Project role:</span>
                <span className={style.metaValue}>
                  UX/UI designer & UX researcher
                </span>
              </div>
              <span className={style.metaDivider} aria-hidden="true" />
              <div className={style.metaItem}>
                <span className={style.metaLabel}>Timeline:</span>
                <span className={style.metaValue}>
                  September — December 2025
                </span>
              </div>
              <span className={style.metaDivider} aria-hidden="true" />
              <div className={style.metaItem}>
                <span className={style.metaLabel}>Platform:</span>
                <span className={style.metaValue}>iOS / Web</span>
              </div>
              <span className={style.metaDivider} aria-hidden="true" />
              <div className={style.metaItem}>
                <span className={style.metaLabel}>Team:</span>
                <span className={style.metaValue}>
                  4 Designers / 2 Developers / 1 Marketer
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id="background" className={style.contentSection}>
          <h2 className={style.backgroundTitle}>Background</h2>
          <div className={style.backgroundCard}>
            <div className={style.backgroundCardTop}>
              <div className={style.backgroundCardText}>
                <p>
                  Many Canadian apprentices face financial challenges, which are
                  major barriers to career advancement. According to a 2019
                  Canadian government EDSC report, 43% of surveyed apprentices
                  were discouraged by confusing application processes.
                </p>
                <p>
                  Although support exists, apprentices often struggle to find
                  financial information because resources are scattered or they
                  believe they are ineligible.
                </p>
              </div>
              <div className={style.backgroundChartBlock}>
                <img
                  src={scaffoldGraph}
                  alt="34% of eligible apprentices applying for available fundings"
                  className={style.backgroundGraphImg}
                />
              </div>
            </div>
            <div className={style.backgroundCardBottom}>
              <div className={style.backgroundBlock}>
                <h3 className={style.backgroundBlockTitle}>
                  <StarIcon />
                  Problem
                </h3>
                <p className={style.backgroundBlockText}>
                  Unorganized resource information Complex and confusing
                  application steps
                </p>
              </div>
              <span className={style.backgroundDivider} aria-hidden="true" />
              <div className={style.backgroundBlock}>
                <h3 className={style.backgroundBlockTitle}>
                  <StarIcon />
                  Goal
                </h3>
                <p className={style.backgroundBlockText}>
                  Reduce confusion by simplifying the application process and
                  providing systematic information organization
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="user-research" className={style.contentSection} />
        <section id="user-persona" className={style.contentSection}>
          <h2 className={style.personaTitle}>User Personas</h2>
          <div className={style.personaCard}>
            <p className={style.personaDescription}>
              Each grant has specific application requirements, so it is
              important to understand the applicant’s identity, situation, and
              conditions to provide appropriate solutions. User personas are
              built for groups such as women, Indigenous people, and
              international students to design products that meet their unique
              needs and lifestyles.
            </p>
            <div className={style.personaImages}>
              <img
                src={scaffoldPersona1}
                alt="User persona - Talia Redsky"
                className={style.personaImage}
              />
              <img
                src={scaffoldPersona2}
                alt="User persona - Mateo Alvarez"
                className={style.personaImage}
              />
            </div>
          </div>
        </section>
        <section id="user-flow" className={style.contentSection}>
          <h2 className={style.userFlowTitle}>User Flow</h2>
          <div className={style.userFlowCard}>
            <div className={style.userFlowContent}>
              <div className={style.userFlowFigma}></div>
              <div className={style.userFlowDecisions}>
                <h3 className={style.userFlowDecisionsTitle}>Key decisions</h3>
                <ul className={style.userFlowDecisionsList}>
                  <li>
                    During profile setup, users answer common questions from the
                    grant application process. This information allows the app
                    to recommend relevant grants tailored to each user&apos;s
                    circumstances.
                  </li>
                  <li>
                    The app organizes complex grant information, making it easy
                    for users to access and understand, thereby saving time and
                    reducing fatigue.
                  </li>
                  <li>
                    Guidance and follow-up pages for each grant help users
                    navigate the application process more easily.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="style-guide" className={style.contentSection}>
          <h2 className={style.styleGuideTitle}>Style Guide</h2>
          <div className={style.styleGuideCard}>
            <div className={style.styleGuideImage}>
              <img src={scaffoldStyleGuide} alt="Style Guide" />
            </div>
          </div>
        </section>
        <section id="lo-fi-wireframe" className={style.contentSection} />
        <section id="hi-fi-wireframe" className={style.contentSection} />
        <section id="final-design" className={style.contentSection} />
        <section id="app-features" className={style.contentSection} />
        <section id="challenges" className={style.contentSection} />
        <section id="promotional-materials" className={style.contentSection} />
        <section id="promotional-video" className={style.contentSection} />
        <Link to="/magazine" className={style.nextProjectLink}>
          <div className={style.nextProjectButton}>
            <Buttons
              label="View Next Project"
              variant="icon"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="39"
                  height="24"
                  viewBox="0 0 39 24"
                  fill="none"
                >
                  <path
                    d="M20.7188 3L35.3438 12L20.7188 21L20.7188 16.5L7.3125 16.5C6.98927 16.5 6.67927 16.421 6.45071 16.2803C6.22215 16.1397 6.09375 15.9489 6.09375 15.75L6.09375 8.25C6.09375 8.05109 6.22215 7.86032 6.45071 7.71967C6.67927 7.57902 6.98927 7.5 7.3125 7.5L20.7188 7.5L20.7188 3Z"
                    fill="#0F0F0E"
                    stroke="#0F0F0E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
