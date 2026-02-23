import { useState } from 'react';
import style from '../styles/Scaffold.module.css';
import { Link } from 'react-router-dom';
import Buttons from '../components/Buttons.jsx';
import Summary from '../components/Summary.jsx';

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
  return (
    <div className={style.page}>
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
      <section className={style.summarySection}>
        <Summary items={SUMMARY_ITEMS} title="Summary" />
        <div className={style.projectOverview}>
          <div className={style.demoVideo}>
            <div className={style.blank}></div>
          </div>
          <div className={style.projectTitleBlock}>
            <span className={style.projectLabel}>Project</span>
            <h3 className={style.projectName}>Scaffold</h3>
          </div>
          <div className={style.summaryBlock}>
            <strong className={style.summaryHeading}>Summary</strong>
            <p className={style.summaryText}>
              Scaffold is an app that enables apprentices and trades students to
              quickly identify grants for which they are eligible and guide them
              through the application process.
            </p>
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
              <span className={style.metaValue}>September — December 2025</span>
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
  );
}
