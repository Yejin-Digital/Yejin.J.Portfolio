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
import scaffoldStyleGuide from '../assets/scaffold_styleguide.png';
import scaffoldMockup1 from '../assets/scaffold_mockup1.png';
import scaffoldMockup2 from '../assets/scaffold_mockup2.png';
import scaffoldMockup3 from '../assets/scaffold_mockup3.png';
import scaffoldMockup4 from '../assets/scaffold_mockup4.png';
import brochureImg from '../assets/Brochure.jpg';
import businessCardImg from '../assets/BusinessCard.jpg';
import stickerImg from '../assets/Sticker.jpg';

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
  'Summary',
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
const PROMO_MATERIALS = {
  Brochure: brochureImg,
  'Business card': businessCardImg,
  Stickers: stickerImg,
};

export default function Scaffold() {
  const summarySectionRef = useRef(null);
  const [activeSection, setActiveSection] = useState(null);
  const [selectedPromoMaterial, setSelectedPromoMaterial] =
    useState('Brochure');
  const [isPromoModalOpen, setIsPromoModalOpen] = useState(false);

  const sectionRefs = {
    summary: summarySectionRef,
    background: useRef(null),
    'user-research': useRef(null),
    'user-persona': useRef(null),
    'user-flow': useRef(null),
    'style-guide': useRef(null),
    'lo-fi-wireframe': useRef(null),
    'hi-fi-wireframe': useRef(null),
    'final-design': useRef(null),
    'app-features': useRef(null),
    challenges: useRef(null),
    'promotional-materials': useRef(null),
    'promotional-video': useRef(null),
  };

  const handlePromoMaterialClick = (material) => {
    setSelectedPromoMaterial(material);
  };

  const handlePromoImageClick = () => {
    setIsPromoModalOpen(true);
  };

  const handleClosePromoModal = () => {
    setIsPromoModalOpen(false);
  };

  useEffect(() => {
    const observers = Object.entries(sectionRefs).map(([id, ref]) => {
      if (!ref.current) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3, rootMargin: '-20% 0px -60% 0px' },
      );
      observer.observe(ref.current);
      return { id, observer };
    });

    return () => {
      observers.forEach((item) => {
        if (item) item.observer.disconnect();
      });
    };
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
          fixedNav
          active={true}
          activeSection={activeSection}
        />
        <section
          id="summary"
          ref={summarySectionRef}
          className={style.summarySection}
        >
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
        <section
          id="background"
          ref={sectionRefs.background}
          className={style.contentSection}
        >
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
        <section
          id="user-research"
          ref={sectionRefs['user-research']}
          className={style.contentSection}
        />
        <section
          id="user-persona"
          ref={sectionRefs['user-persona']}
          className={style.contentSection}
        >
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
        <section
          id="user-flow"
          ref={sectionRefs['user-flow']}
          className={style.contentSection}
        >
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
        <section
          id="style-guide"
          ref={sectionRefs['style-guide']}
          className={style.contentSection}
        >
          <h2 className={style.styleGuideTitle}>Style Guide</h2>
          <div className={style.styleGuideCard}>
            <div className={style.styleGuideImage}>
              <img src={scaffoldStyleGuide} alt="Style Guide" />
            </div>
          </div>
        </section>
        <section
          id="lo-fi-wireframe"
          ref={sectionRefs['lo-fi-wireframe']}
          className={style.contentSection}
        >
          <h2 className={style.lofiTitle}>Lo-fi Wireframe</h2>
          <div className={style.lofiCard}>
            <div className={style.lofiContent}>
              <div className={style.lofiPlaceholder} aria-hidden="true" />
              <div className={style.lofiText}>
                <p className={style.lofiIntro}>
                  The initial wireframe design was split into three parts:
                  Profile, Home (dashboard), and Grant application, each based
                  on main features.
                </p>
                <div className={style.lofiBlock}>
                  <h3 className={style.lofiBlockTitle}>Home</h3>
                  <p>
                    After entering the profile information, the user goes to the
                    Home screen. Based on the user-entered profile information,
                    this screen displays a summary of the user's app use,
                    including grant information and an indicator for the
                    profile-building process.
                  </p>
                </div>
                <div className={style.lofiBlock}>
                  <h3 className={style.lofiBlockTitle}>Profile</h3>
                  <p>
                    After logging in, the user goes to the page where they enter
                    their profile information. To ensure the information is
                    correct, the user needs to provide extensive background
                    details. To make this less tiring, we used a simple
                    quiz-style layout. We also added buttons so users can pause
                    the process or change their answers later.
                  </p>
                </div>
                <div className={style.lofiBlock}>
                  <h3 className={style.lofiBlockTitle}>Grant application</h3>
                  <p>
                    The Grant application page has been set up to include main
                    features, such as general grant details, application steps,
                    and application templates, all within the page layout. The
                    interface is made to help users not feel overwhelmed by
                    using card and chip features, so they can see important
                    details quickly. Information is spaced out so there is not
                    too much on a single screen, and the layout guides users
                    step by step, with drop-down buttons for easy navigation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="hi-fi-wireframe"
          ref={sectionRefs['hi-fi-wireframe']}
          className={style.contentSection}
        >
          <h2 className={style.lofiTitle}>Hi-fi Wireframe</h2>
          <div className={style.lofiCard}>
            <div className={style.lofiContent}>
              <div className={style.lofiPlaceholder} aria-hidden="true" />
              <div className={style.lofiText}>
                <div className={style.lofiBlock}>
                  <p>
                    The app&apos;s theme colors are used in primary action
                    buttons and important information displays for visual
                    clarity. When integrating newly developed AI features,
                    common buttons and an overlay design are used to reduce user
                    confusion.
                  </p>
                </div>
                <div className={style.lofiBlock}>
                  <p>
                    Characters inspired by the app logo are placed throughout
                    the interface to reduce monotony and add visual interest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="final-design"
          ref={sectionRefs['final-design']}
          className={style.contentSection}
        >
          <h2 className={style.finalDesignTitle}>Final design</h2>
          <div className={style.finalDesignCard}>
            <div className={style.finalDesignMockups}>
              <div className={style.finalDesignMockupItem}>
                <img
                  src={scaffoldMockup1}
                  alt="Home dashboard"
                  className={style.finalDesignMockupImg}
                />
                <span className={style.finalDesignMockupLabel}>
                  Home (dashboard)
                </span>
              </div>
              <div className={style.finalDesignMockupItem}>
                <img
                  src={scaffoldMockup2}
                  alt="Eligible Grants"
                  className={style.finalDesignMockupImg}
                />
                <span className={style.finalDesignMockupLabel}>
                  Eligible Grants
                </span>
              </div>
              <div className={style.finalDesignMockupItem}>
                <img
                  src={scaffoldMockup3}
                  alt="Detailed Grant Information"
                  className={style.finalDesignMockupImg}
                />
                <span className={style.finalDesignMockupLabel}>
                  Detailed Grant Information
                </span>
              </div>
              <div className={style.finalDesignMockupItem}>
                <img
                  src={scaffoldMockup4}
                  alt="Profile Building"
                  className={style.finalDesignMockupImg}
                />
                <span className={style.finalDesignMockupLabel}>
                  Profile Building
                </span>
              </div>
            </div>
          </div>
        </section>
        <section
          id="app-features"
          ref={sectionRefs['app-features']}
          className={style.contentSection}
        >
          <h2 className={style.appFeaturesTitle}>App Features</h2>
          <div className={style.appFeaturesList}>
            <div className={style.appFeatureBlock}>
              <div className={style.appFeaturePhone}>
                <span>App Demo Video</span>
              </div>
              <div className={style.appFeatureCard}>
                <h3 className={style.appFeatureCardTitle}>
                  <StarIcon />
                  Advanced profile building
                </h3>
                <p className={style.appFeatureCardText}>
                  The application uses a profile-based system to simplify the
                  process. Based on the data research, we&apos;ve streamlined
                  the 15 core questions required for most trade grants. Complete
                  the profile once, and the app checks the user&apos;s
                  eligibility and pre-fills future applications. Users can
                  quickly build their profile by uploading a document, such as a
                  resume. The AI scans the documents to identify key information
                  and automatically fills in the relevant profile fields. To
                  update information, select the green Edit button and make the
                  necessary changes. Voice input lets users update their
                  profiles quickly and easily. Updates appear immediately. By
                  speaking naturally, users can rely on Scaffold to
                  automatically understand and update the relevant sections.
                </p>
              </div>
            </div>
            <div
              className={`${style.appFeatureBlock} ${style.appFeatureBlockReverse}`}
            >
              <div className={style.appFeatureCard}>
                <h3 className={style.appFeatureCardTitle}>
                  <StarIcon />
                  Grant eligibility check
                </h3>
                <p className={style.appFeatureCardText}>
                  Once the profile is complete, the app displays all available
                  grants. Grants the user can apply for appear in color, while
                  those that are not a good fit are greyed out. Users can filter
                  grants and save those of interest for future reference.
                  Extensive grant information is organized into concise,
                  easy-to-read sections. Users can quickly view key details,
                  including deadlines and eligibility requirements, at a glance.
                </p>
              </div>
              <div className={style.appFeaturePhone}>
                <span>App Demo Video</span>
              </div>
            </div>
            <div className={style.appFeatureBlock}>
              <div className={style.appFeaturePhone}>
                <span>App Demo Video</span>
              </div>
              <div className={style.appFeatureCard}>
                <h3 className={style.appFeatureCardTitle}>
                  <StarIcon />
                  Application process tracking
                </h3>
                <p className={style.appFeatureCardText}>
                  Scaffold cross-checks the user&apos;s profile with grant
                  requirements to generate an application. The progress tracker
                  helps users stay organized and provides step-by-step
                  instructions, including required documents. After confirming
                  eligibility, users can click &quot;Generate my
                  application,&quot; and Scaffold will create a template with
                  all necessary information for the grant. Some grants require
                  written responses, but users do not need to overthink this
                  step. An AI generator can generate detailed answers tailored
                  to the user&apos;s profile and the grant&apos;s requirements.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="challenges"
          ref={sectionRefs.challenges}
          className={style.contentSection}
        >
          <h2 className={style.challengesTitle}>Challenges</h2>
          <div className={style.challengesCard}>
            <div className={style.challengesContent}>
              <p className={style.challengesProblem}>
                The design prioritizes mobile devices for their portability and
                convenience. The user can track information, check eligibility,
                and prepare applications at any time and from any location.
                However, most grants still require users to apply through
                official website forms, which are typically designed for desktop
                use.
              </p>

              <div className={style.challengesBottom}>
                <div className={style.challengesBrowser} aria-hidden="true" />
                <div className={style.challengesSolutionContent}>
                  <h3 className={style.challengesSolutionTitle}>
                    <StarIcon />
                    Web supplement
                  </h3>
                  <p className={style.challengesSolution}>
                    To address this, Scaffold offers a web supplement feature
                    for users. When users sign in on a desktop, they can view
                    their generated templates. Users can apply by clicking a
                    button that takes them directly to the application website,
                    where they can copy their information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="promotional-materials"
          ref={sectionRefs['promotional-materials']}
          className={style.contentSection}
        >
          <h2 className={style.promoTitle}>Promotional Materials</h2>
          <div className={style.promoLabelSection}>
            <div className={style.promoImageWrap}>
              <img
                src={PROMO_MATERIALS[selectedPromoMaterial]}
                alt={selectedPromoMaterial}
                className={style.promoImage}
                onClick={handlePromoImageClick}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className={style.promoMaterialItems}>
              <span
                className={
                  selectedPromoMaterial === 'Brochure'
                    ? style.promoSelectedBrochure
                    : ''
                }
                onClick={() => handlePromoMaterialClick('Brochure')}
              >
                Brochure
              </span>
              <span
                className={
                  selectedPromoMaterial === 'Business card'
                    ? style.promoSelectedBusinessCard
                    : ''
                }
                onClick={() => handlePromoMaterialClick('Business card')}
              >
                Business card
              </span>
              <span
                className={
                  selectedPromoMaterial === 'Stickers'
                    ? style.promoSelectedSticker
                    : ''
                }
                onClick={() => handlePromoMaterialClick('Stickers')}
              >
                Stickers
              </span>
            </div>
          </div>
          {isPromoModalOpen && (
            <div
              className={style.promoModalOverlay}
              onClick={handleClosePromoModal}
            >
              <div
                className={style.promoModalContent}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  className={style.promoModalCloseButton}
                  onClick={handleClosePromoModal}
                  aria-label="Close"
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="#0F0F0E"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <img
                  src={PROMO_MATERIALS[selectedPromoMaterial]}
                  alt={selectedPromoMaterial}
                  className={style.promoModalImage}
                />
                <div className={style.promoModalMaterialItems}>
                  <span
                    className={
                      selectedPromoMaterial === 'Brochure'
                        ? style.promoSelectedBrochure
                        : ''
                    }
                    onClick={() => handlePromoMaterialClick('Brochure')}
                  >
                    Brochure
                  </span>
                  <span
                    className={
                      selectedPromoMaterial === 'Business card'
                        ? style.promoSelectedBusinessCard
                        : ''
                    }
                    onClick={() => handlePromoMaterialClick('Business card')}
                  >
                    Business card
                  </span>
                  <span
                    className={
                      selectedPromoMaterial === 'Stickers'
                        ? style.promoSelectedSticker
                        : ''
                    }
                    onClick={() => handlePromoMaterialClick('Stickers')}
                  >
                    Stickers
                  </span>
                </div>
              </div>
            </div>
          )}
        </section>
        <section
          id="promotional-video"
          ref={sectionRefs['promotional-video']}
          className={style.contentSection}
        >
          <h2 className={style.promoVideoTitle}>Promotional Video</h2>
          <div className={style.promoVideoCard}>
            <div className={style.promoVideoContent}>
              <div className={style.promoVideoPlaceholder} aria-hidden="true" />
              <div className={style.promoVideoText}>
                <p>
                  This promotional video shows the emotional story of a woman in
                  the trades who is stressed about money and has little support.
                  The story compares a stressful, hopeless situation with a
                  supportive, hopeful one made possible by Scaffold. At first,
                  cold blue colors and close-up shots show her stress, unpaid
                  bills, and being turned down because she is missing
                  certificates. When she finds Scaffold, the colors become
                  warmer and the lighting softer, showing her relief and new
                  chances. Close-ups show her change from feeling tense and
                  alone to feeling confident and hopeful. Scaffold is shown as
                  the link between these two worlds, giving her clear help,
                  support, and a new beginning.
                </p>
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
    </div>
  );
}
