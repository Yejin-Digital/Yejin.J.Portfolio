import { useState, useRef, useEffect } from 'react';
import style from '../styles/Scaffold.module.css';
import { Link } from 'react-router-dom';
import Buttons from '../components/Buttons.jsx';
import FloatingButton from '../components/FloatingButton.jsx';
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
import scaffoldPromoVideo from '../assets/scaffold_promotionalVideo.mp4';
import scaffoldDesktopVideo from '../assets/scaffold_desktop.mp4';
import scaffoldFullDemo from '../assets/scaffold_full_demo.mp4';
import scaffoldIcon1 from '../assets/scaffold_icon1.png';
import scaffoldIcon2 from '../assets/scaffold_icon2.png';
import scaffoldUserflow from '../assets/scaffold_userflow.jpg';

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
  const contentBelowTitleRef = useRef(null);
  const [activeSection, setActiveSection] = useState(null);
  const [selectedPromoMaterial, setSelectedPromoMaterial] =
    useState('Brochure');
  const [isPromoModalOpen, setIsPromoModalOpen] = useState(false);
  const [isPersonaModalOpen, setIsPersonaModalOpen] = useState(false);
  const [isUserFlowImageModalOpen, setIsUserFlowImageModalOpen] =
    useState(false);
  const [userFlowZoom, setUserFlowZoom] = useState(1);
  const [userFlowPan, setUserFlowPan] = useState({ x: 0, y: 0 });
  const [userFlowIsDragging, setUserFlowIsDragging] = useState(false);
  const userFlowDragStartRef = useRef({
    clientX: 0,
    clientY: 0,
    panX: 0,
    panY: 0,
  });
  const userFlowModalWrapRef = useRef(null);
  const [currentPersonaImageIndex, setCurrentPersonaImageIndex] = useState(0);
  const [isDemoVideoPlaying, setIsDemoVideoPlaying] = useState(false);
  const [isDemoVideoModalOpen, setIsDemoVideoModalOpen] = useState(false);
  const [isDemoVideoModalPlaying, setIsDemoVideoModalPlaying] = useState(false);
  const demoVideoRef = useRef(null);
  const demoVideoModalRef = useRef(null);
  const demoVideoModalOpenIntentRef = useRef({
    currentTime: 0,
    wasPlaying: false,
  });
  const [isPromoVideoPlaying, setIsPromoVideoPlaying] = useState(false);
  const [isPromoVideoModalOpen, setIsPromoVideoModalOpen] = useState(false);
  const [isPromoVideoModalPlaying, setIsPromoVideoModalPlaying] =
    useState(false);
  const promoVideoRef = useRef(null);
  const promoVideoModalRef = useRef(null);
  const promoVideoModalOpenIntentRef = useRef({
    currentTime: 0,
    wasPlaying: false,
  });
  const [isDesktopVideoPlaying, setIsDesktopVideoPlaying] = useState(false);
  const [isDesktopVideoModalOpen, setIsDesktopVideoModalOpen] = useState(false);
  const [isDesktopVideoModalPlaying, setIsDesktopVideoModalPlaying] =
    useState(false);
  const desktopVideoRef = useRef(null);
  const desktopVideoModalRef = useRef(null);
  const desktopVideoModalOpenIntentRef = useRef({
    currentTime: 0,
    wasPlaying: false,
  });

  const personaImages = [scaffoldPersona1, scaffoldPersona2];

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

  const handlePersonaImageClick = (index) => {
    setCurrentPersonaImageIndex(index);
    setIsPersonaModalOpen(true);
  };

  const handleClosePersonaModal = () => {
    setIsPersonaModalOpen(false);
  };

  const handleOpenUserFlowImageModal = () => {
    setUserFlowZoom(1);
    setUserFlowPan({ x: 0, y: 0 });
    setIsUserFlowImageModalOpen(true);
  };

  const handleCloseUserFlowImageModal = () => {
    setIsUserFlowImageModalOpen(false);
    setUserFlowZoom(1);
    setUserFlowPan({ x: 0, y: 0 });
    setUserFlowIsDragging(false);
  };

  const USER_FLOW_ZOOM_STEP = 0.5;
  const USER_FLOW_ZOOM_MIN = 0.5;
  const USER_FLOW_ZOOM_MAX = 4;

  const handleUserFlowZoomIn = () => {
    setUserFlowZoom((z) =>
      Math.min(USER_FLOW_ZOOM_MAX, z + USER_FLOW_ZOOM_STEP),
    );
  };

  const handleUserFlowZoomOut = () => {
    setUserFlowZoom((z) =>
      Math.max(USER_FLOW_ZOOM_MIN, z - USER_FLOW_ZOOM_STEP),
    );
  };

  const handleUserFlowPanStart = (e) => {
    if (e.button !== 0) return;
    e.preventDefault();
    setUserFlowIsDragging(true);
    userFlowDragStartRef.current = {
      clientX: e.clientX,
      clientY: e.clientY,
      panX: userFlowPan.x,
      panY: userFlowPan.y,
    };
  };

  useEffect(() => {
    if (!userFlowIsDragging) return;
    const onMove = (e) => {
      const { clientX, clientY, panX, panY } = userFlowDragStartRef.current;
      setUserFlowPan({
        x: panX + e.clientX - clientX,
        y: panY + e.clientY - clientY,
      });
    };
    const onUp = () => {
      setUserFlowIsDragging(false);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
  }, [userFlowIsDragging]);

  const handlePersonaPrev = () => {
    setCurrentPersonaImageIndex((prev) =>
      prev === 0 ? personaImages.length - 1 : prev - 1,
    );
  };

  const handlePersonaNext = () => {
    setCurrentPersonaImageIndex((prev) =>
      prev === personaImages.length - 1 ? 0 : prev + 1,
    );
  };

  const togglePromoVideo = () => {
    const video = promoVideoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPromoVideoPlaying(true);
    } else {
      video.pause();
      setIsPromoVideoPlaying(false);
    }
  };

  const openPromoVideoModal = (e) => {
    e.stopPropagation();
    const video = promoVideoRef.current;
    if (video) {
      promoVideoModalOpenIntentRef.current = {
        currentTime: video.currentTime,
        wasPlaying: !video.paused,
      };
      if (promoVideoModalOpenIntentRef.current.wasPlaying) {
        video.pause();
        setIsPromoVideoPlaying(false);
      }
    } else {
      promoVideoModalOpenIntentRef.current = {
        currentTime: 0,
        wasPlaying: false,
      };
    }
    setIsPromoVideoModalOpen(true);
  };

  const closePromoVideoModal = () => {
    const modalVideo = promoVideoModalRef.current;
    if (modalVideo) modalVideo.pause();
    setIsPromoVideoModalPlaying(false);
    setIsPromoVideoModalOpen(false);
  };

  const togglePromoVideoModal = () => {
    const video = promoVideoModalRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPromoVideoModalPlaying(true);
    } else {
      video.pause();
      setIsPromoVideoModalPlaying(false);
    }
  };

  const toggleDemoVideo = () => {
    const video = demoVideoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsDemoVideoPlaying(true);
    } else {
      video.pause();
      setIsDemoVideoPlaying(false);
    }
  };

  const openDemoVideoModal = (e) => {
    e.stopPropagation();
    const video = demoVideoRef.current;
    if (video) {
      demoVideoModalOpenIntentRef.current = {
        currentTime: video.currentTime,
        wasPlaying: !video.paused,
      };
      if (demoVideoModalOpenIntentRef.current.wasPlaying) {
        video.pause();
        setIsDemoVideoPlaying(false);
      }
    } else {
      demoVideoModalOpenIntentRef.current = {
        currentTime: 0,
        wasPlaying: false,
      };
    }
    setIsDemoVideoModalOpen(true);
  };

  const closeDemoVideoModal = () => {
    const modalVideo = demoVideoModalRef.current;
    if (modalVideo) modalVideo.pause();
    setIsDemoVideoModalPlaying(false);
    setIsDemoVideoModalOpen(false);
  };

  const toggleDemoVideoModal = () => {
    const video = demoVideoModalRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsDemoVideoModalPlaying(true);
    } else {
      video.pause();
      setIsDemoVideoModalPlaying(false);
    }
  };

  const toggleDesktopVideo = () => {
    const video = desktopVideoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsDesktopVideoPlaying(true);
    } else {
      video.pause();
      setIsDesktopVideoPlaying(false);
    }
  };

  const openDesktopVideoModal = (e) => {
    e.stopPropagation();
    const video = desktopVideoRef.current;
    if (video) {
      desktopVideoModalOpenIntentRef.current = {
        currentTime: video.currentTime,
        wasPlaying: !video.paused,
      };
      if (desktopVideoModalOpenIntentRef.current.wasPlaying) {
        video.pause();
        setIsDesktopVideoPlaying(false);
      }
    } else {
      desktopVideoModalOpenIntentRef.current = {
        currentTime: 0,
        wasPlaying: false,
      };
    }
    setIsDesktopVideoModalOpen(true);
  };

  const closeDesktopVideoModal = () => {
    const modalVideo = desktopVideoModalRef.current;
    if (modalVideo) modalVideo.pause();
    setIsDesktopVideoModalPlaying(false);
    setIsDesktopVideoModalOpen(false);
  };

  const toggleDesktopVideoModal = () => {
    const video = desktopVideoModalRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsDesktopVideoModalPlaying(true);
    } else {
      video.pause();
      setIsDesktopVideoModalPlaying(false);
    }
  };

  useEffect(() => {
    if (!isPromoVideoModalOpen) return;
    const modalVideo = promoVideoModalRef.current;
    const { currentTime, wasPlaying } = promoVideoModalOpenIntentRef.current;
    if (modalVideo) {
      modalVideo.currentTime = currentTime;
      if (wasPlaying) {
        modalVideo.play();
        setIsPromoVideoModalPlaying(true);
      } else {
        setIsPromoVideoModalPlaying(false);
      }
    }
  }, [isPromoVideoModalOpen]);

  useEffect(() => {
    if (!isDemoVideoModalOpen) return;
    const modalVideo = demoVideoModalRef.current;
    const { currentTime, wasPlaying } = demoVideoModalOpenIntentRef.current;
    if (modalVideo) {
      modalVideo.currentTime = currentTime;
      if (wasPlaying) {
        modalVideo.play();
        setIsDemoVideoModalPlaying(true);
      } else {
        setIsDemoVideoModalPlaying(false);
      }
    }
  }, [isDemoVideoModalOpen]);

  useEffect(() => {
    if (!isDesktopVideoModalOpen) return;
    const modalVideo = desktopVideoModalRef.current;
    const { currentTime, wasPlaying } = desktopVideoModalOpenIntentRef.current;
    if (modalVideo) {
      modalVideo.currentTime = currentTime;
      if (wasPlaying) {
        modalVideo.play();
        setIsDesktopVideoModalPlaying(true);
      } else {
        setIsDesktopVideoModalPlaying(false);
      }
    }
  }, [isDesktopVideoModalOpen]);

  /* challengesBrowserVideo: 섹션이 화면에 들어오면 자동 재생, 나가면 일시정지 */
  useEffect(() => {
    const section = sectionRefs.challenges?.current;
    const video = desktopVideoRef.current;
    if (!section || !video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry.isIntersecting) {
          video.pause();
          setIsDesktopVideoPlaying(false);
          return;
        }
        video
          .play()
          .then(() => setIsDesktopVideoPlaying(true))
          .catch(() => {});
      },
      { threshold: 0.25, rootMargin: '0px' },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const intersecting = new Map();

    const updateActive = () => {
      const visible = [];
      intersecting.forEach((isIn, id) => {
        if (!isIn) return;
        const ref = sectionRefs[id];
        if (!ref?.current) return;
        const top = ref.current.getBoundingClientRect().top;
        visible.push({ id, top });
      });
      if (visible.length === 0) return;
      visible.sort((a, b) => Math.abs(a.top) - Math.abs(b.top));
      setActiveSection(visible[0].id);
    };

    const observerOpts = {
      threshold: [0, 0.1, 0.3, 0.5, 1],
      rootMargin: '-15% 0px -55% 0px',
    };
    const observers = Object.entries(sectionRefs).map(([id, ref]) => {
      if (!ref.current) return null;
      const observer = new IntersectionObserver(([entry]) => {
        intersecting.set(id, entry.isIntersecting);
        updateActive();
      }, observerOpts);
      observer.observe(ref.current);
      return { id, observer };
    });

    return () => {
      observers.forEach((item) => {
        if (item) item.observer.disconnect();
      });
    };
  }, []);

  useEffect(() => {
    const section = sectionRefs['promotional-video']?.current;
    const video = promoVideoRef.current;
    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.muted = true;
          video.play().catch(() => {});
          setIsPromoVideoPlaying(true);
        } else {
          video.pause();
          setIsPromoVideoPlaying(false);
        }
      },
      { threshold: 0.25, rootMargin: '0px 0px -10% 0px' },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = sectionRefs.summary?.current;
    const video = demoVideoRef.current;
    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.muted = true;
          video.play().catch(() => {});
          setIsDemoVideoPlaying(true);
        } else {
          video.pause();
          setIsDemoVideoPlaying(false);
        }
      },
      { threshold: 0.25, rootMargin: '0px 0px -10% 0px' },
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
              <Buttons
                label="View Prototype"
                variant="round"
                href="https://www.figma.com/proto/jEskxUqJGAYIVe8f3jvDHF/Scaffold?page-id=4%3A225&node-id=4-3748&p=f&viewport=644%2C292%2C0.09&t=AwX0qFWdP8sNXAzE-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A3748"
              />
              <Buttons
                label="GitHub Repository"
                variant="round"
                href="https://github.com/Yejin-Digital/Scaffold"
              />
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
          {/* Icons & shapes positioned relative to mockupImg1 */}
          <img
            className={style.scaffoldIcon1}
            src={scaffoldIcon1}
            alt=""
            loading="eager"
            decoding="async"
          />
          <img
            className={style.scaffoldIcon2}
            src={scaffoldIcon2}
            alt=""
            loading="eager"
            decoding="async"
          />
          <svg
            className={style.sparkleStar1}
            xmlns="http://www.w3.org/2000/svg"
            width="39"
            height="39"
            viewBox="0 0 39 39"
            fill="none"
          >
            <path
              d="M24.2501 14.6696L24.3558 14.9984L24.6748 15.1309L36.8074 20.2009L24.297 24.25L23.9682 24.3556L23.8357 24.6747L18.7657 36.8072L14.7166 24.2969L14.6109 23.968L14.2919 23.8356L2.15837 18.7656L14.6697 14.7164L14.9986 14.6108L15.131 14.2918L20.201 2.15825L24.2501 14.6696Z"
              fill="#FFC567"
              stroke="black"
              stroke-width="1.5"
            />
          </svg>
          <svg
            className={style.sparkleStar2}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M19.2989 11.8066L19.4055 12.1345L19.7235 12.2679L29.0795 16.177L19.4323 19.299L19.1043 19.4056L18.9709 19.7236L15.0618 29.0796L11.9399 19.4324L11.8332 19.1044L11.5152 18.971L2.15826 15.0618L11.8065 11.9399L12.1344 11.8333L12.2678 11.5153L16.177 2.15835L19.2989 11.8066Z"
              fill="#058CD7"
              stroke="black"
              stroke-width="1.5"
            />
          </svg>
          <svg
            className={style.sparkleStar3}
            xmlns="http://www.w3.org/2000/svg"
            width="39"
            height="39"
            viewBox="0 0 39 39"
            fill="none"
          >
            <path
              d="M24.2501 14.67L24.3558 14.9989L24.6748 15.1314L36.8074 20.2013L24.297 24.2505L23.9682 24.3561L23.8357 24.6751L18.7657 36.8077L14.7166 24.2974L14.6109 23.9685L14.2919 23.8361L2.15837 18.7661L14.6697 14.7169L14.9986 14.6113L15.131 14.2923L20.201 2.15873L24.2501 14.67Z"
              fill="#FD5A46"
              stroke="black"
              stroke-width="1.5"
            />
          </svg>
        </div>
      </div>
      <div ref={contentBelowTitleRef} className={style.contentBelowTitle}>
        <FloatingButton
          items={SUMMARY_ITEMS}
          fixedNav
          active={true}
          activeSection={activeSection}
          onSectionClick={setActiveSection}
          containerRef={contentBelowTitleRef}
          bottomBoundaryRef={sectionRefs['promotional-video']}
        />
        <section
          id="summary"
          ref={sectionRefs.summary}
          className={style.contentSection}
        >
          <div className={style.projectOverview}>
            <div className={style.projectOverviewContent}>
              <div className={style.demoVideo}>
                <div className={style.demoVideoWrap}>
                  <video
                    ref={demoVideoRef}
                    className={style.demoVideoPlayer}
                    src={scaffoldFullDemo}
                    playsInline
                    muted
                    onPlay={() => setIsDemoVideoPlaying(true)}
                    onPause={() => setIsDemoVideoPlaying(false)}
                    onClick={toggleDemoVideo}
                  />
                  <button
                    type="button"
                    className={style.demoVideoPlayPause}
                    onClick={toggleDemoVideo}
                    aria-label={
                      isDemoVideoPlaying ? 'Pause video' : 'Play video'
                    }
                  >
                    {isDemoVideoPlaying ? (
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                      >
                        <path
                          d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"
                          fill="currentColor"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                      >
                        <path
                          d="M8 5v14l11-7L8 5z"
                          fill="currentColor"
                        />
                      </svg>
                    )}
                  </button>
                  <button
                    type="button"
                    className={style.demoVideoExpand}
                    onClick={openDemoVideoModal}
                    aria-label="Expand video"
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path
                        d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
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
                onClick={() => handlePersonaImageClick(0)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handlePersonaImageClick(0);
                  }
                }}
              />
              <img
                src={scaffoldPersona2}
                alt="User persona - Mateo Alvarez"
                className={style.personaImage}
                onClick={() => handlePersonaImageClick(1)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handlePersonaImageClick(1);
                  }
                }}
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
              <div
                className={style.userFlowFigma}
                onClick={handleOpenUserFlowImageModal}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenUserFlowImageModal();
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label="View user flow image larger"
              >
                <img
                  src={scaffoldUserflow}
                  alt="User Flow"
                  className={style.userFlowFigmaImage}
                  loading="lazy"
                  decoding="async"
                />
              </div>
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

          <div className={style.lofiContent}>
            <div className={style.lofiPlaceholder}>
              <iframe
                title="Scaffold Lo-fi Wireframe – Figma"
                className={style.figmaEmbed}
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FjEskxUqJGAYIVe8f3jvDHF%2FScaffold%3Fnode-id%3D1-280"
                allowFullScreen
              />
            </div>
            <div className={style.lofiText}>
              <p className={style.lofiIntro}>
                The initial wireframe design was split into three parts:
                Profile, Home (dashboard), and Grant application, each based on
                main features.
              </p>
              <div className={style.lofiCard}>
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
              <div className={style.lofiPlaceholder}>
                <iframe
                  title="Scaffold Hi-fi Wireframe – Figma"
                  className={style.figmaEmbed}
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FjEskxUqJGAYIVe8f3jvDHF%2FScaffold%3Fnode-id%3D4-225"
                  allowFullScreen
                />
              </div>
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
                <div className={style.challengesBrowser}>
                  <video
                    ref={desktopVideoRef}
                    className={style.challengesBrowserVideo}
                    src={scaffoldDesktopVideo}
                    playsInline
                    muted
                    loop
                    onPlay={() => setIsDesktopVideoPlaying(true)}
                    onPause={() => setIsDesktopVideoPlaying(false)}
                    onClick={toggleDesktopVideo}
                  />
                  <button
                    type="button"
                    className={style.challengesBrowserPlayPause}
                    onClick={toggleDesktopVideo}
                    aria-label={
                      isDesktopVideoPlaying ? 'Pause video' : 'Play video'
                    }
                  >
                    {isDesktopVideoPlaying ? (
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                      >
                        <path
                          d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"
                          fill="currentColor"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                      >
                        <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
                      </svg>
                    )}
                  </button>
                  <button
                    type="button"
                    className={style.challengesBrowserExpand}
                    onClick={openDesktopVideoModal}
                    aria-label="Expand video"
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path
                        d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
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
              <div className={style.promoVideoWrap}>
                <video
                  ref={promoVideoRef}
                  className={style.promoVideoPlayer}
                  src={scaffoldPromoVideo}
                  playsInline
                  muted
                  onPlay={() => setIsPromoVideoPlaying(true)}
                  onPause={() => setIsPromoVideoPlaying(false)}
                  onClick={togglePromoVideo}
                />
                <button
                  type="button"
                  className={style.promoVideoPlayPause}
                  onClick={togglePromoVideo}
                  aria-label={
                    isPromoVideoPlaying ? 'Pause video' : 'Play video'
                  }
                >
                  {isPromoVideoPlaying ? (
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path
                        d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"
                        fill="currentColor"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
                    </svg>
                  )}
                </button>
                <button
                  type="button"
                  className={style.promoVideoExpand}
                  onClick={openPromoVideoModal}
                  aria-label="Expand video"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
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
      </div>

      {/* Persona Image Modal - same style as Poster imageModalOverlay */}
      {isPersonaModalOpen && (
        <div
          className={style.imageModalOverlay}
          onClick={handleClosePersonaModal}
        >
          <div
            className={style.imageModalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={style.closeButton}
              onClick={handleClosePersonaModal}
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
            <div className={style.modalCarouselContainer}>
              <button
                className={style.modalArrowButton}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePersonaPrev();
                }}
                aria-label="Previous image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="27"
                  viewBox="0 0 15 27"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.92567 0.82189C11.0217 -0.273995 12.7984 -0.273931 13.8944 0.82189C14.9904 1.9179 14.9904 3.69459 13.8944 4.79064L6.70302 11.9811L13.8944 19.1725C14.9905 20.2685 14.9905 22.0462 13.8944 23.1422C12.7984 24.2379 11.0216 24.2379 9.92567 23.1422L0.820206 14.0358C0.254513 13.47 -0.017407 12.7233 0.000869941 11.982C-0.0174794 11.2407 0.25441 10.4932 0.820206 9.92736L9.92567 0.82189Z"
                    fill="#0F0F0E"
                  />
                </svg>
              </button>
              <div className={style.modalFruitImageWrap}>
                <img
                  src={personaImages[currentPersonaImageIndex]}
                  alt={
                    currentPersonaImageIndex === 0
                      ? 'User persona - Talia Redsky'
                      : 'User persona - Mateo Alvarez'
                  }
                  className={style.modalCarouselImage}
                  loading="eager"
                  decoding="async"
                />
              </div>
              <button
                className={style.modalArrowButton}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePersonaNext();
                }}
                aria-label="Next image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="27"
                  viewBox="0 0 15 27"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.79087 0.822035C3.69482 -0.274012 1.91817 -0.274012 0.82212 0.822035C-0.273879 1.91809 -0.273911 3.69475 0.82212 4.79079L8.01353 11.9812L0.82212 19.1726C-0.273914 20.2687 -0.273889 22.0453 0.82212 23.1414C1.91817 24.2374 3.69482 24.2374 4.79087 23.1414L13.8963 14.0359C14.4622 13.47 14.7341 12.7227 14.7157 11.9812C14.7339 11.24 14.462 10.4931 13.8963 9.9275L4.79087 0.822035Z"
                    fill="#0F0F0E"
                  />
                </svg>
              </button>
              <div className={style.modalCarouselDots}>
                {personaImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`${style.modalDot} ${index === currentPersonaImageIndex ? style.modalDotActive : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentPersonaImageIndex(index);
                    }}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* User Flow image modal - 크게 보기 */}
      {isUserFlowImageModalOpen && (
        <div
          className={style.imageModalOverlay}
          onClick={handleCloseUserFlowImageModal}
        >
          <div
            className={style.imageModalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={style.closeButton}
              onClick={handleCloseUserFlowImageModal}
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
            <div
              ref={userFlowModalWrapRef}
              className={style.userFlowModalImageWrap}
              style={{
                cursor: userFlowIsDragging ? 'grabbing' : 'grab',
              }}
            >
              <div
                className={style.userFlowModalImageInner}
                style={{
                  transform: `translate(${userFlowPan.x}px, ${userFlowPan.y}px) scale(${userFlowZoom})`,
                }}
                onMouseDown={handleUserFlowPanStart}
              >
                <img
                  src={scaffoldUserflow}
                  alt="User Flow"
                  className={style.userFlowModalImage}
                />
              </div>
            </div>
            <div className={style.userFlowZoomControls}>
              <button
                type="button"
                className={style.userFlowZoomBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  handleUserFlowZoomOut();
                }}
                disabled={userFlowZoom <= USER_FLOW_ZOOM_MIN}
                aria-label="축소"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12h14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <span className={style.userFlowZoomLabel}>
                {Math.round(userFlowZoom * 100)}%
              </span>
              <button
                type="button"
                className={style.userFlowZoomBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  handleUserFlowZoomIn();
                }}
                disabled={userFlowZoom >= USER_FLOW_ZOOM_MAX}
                aria-label="확대"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5v14M5 12h14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Demo Video (Summary) Overlay Modal */}
      {isDemoVideoModalOpen && (
        <div className={style.imageModalOverlay} onClick={closeDemoVideoModal}>
          <button
            type="button"
            className={style.promoVideoModalCloseButton}
            onClick={(e) => {
              e.stopPropagation();
              closeDemoVideoModal();
            }}
            aria-label="Close video"
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
          <div
            className={`${style.imageModalContent} ${style.promoVideoModalContent}`}
            onClick={(e) => {
              e.stopPropagation();
              toggleDemoVideoModal();
            }}
          >
            <div className={style.promoVideoModalWrap}>
              <video
                ref={demoVideoModalRef}
                className={style.promoVideoModalPlayer}
                src={scaffoldFullDemo}
                playsInline
                onPlay={() => setIsDemoVideoModalPlaying(true)}
                onPause={() => setIsDemoVideoModalPlaying(false)}
              />
              {!isDemoVideoModalPlaying && (
                <div
                  className={style.promoVideoModalPlayPause}
                  aria-hidden
                  role="img"
                  aria-label="Paused"
                >
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 5v14l11-7L8 5z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Promo Video Overlay Modal - 크게 보기, 화면 어디든 클릭 시 재생/멈춤 토글 */}
      {isPromoVideoModalOpen && (
        <div className={style.imageModalOverlay} onClick={closePromoVideoModal}>
          <button
            type="button"
            className={style.promoVideoModalCloseButton}
            onClick={(e) => {
              e.stopPropagation();
              closePromoVideoModal();
            }}
            aria-label="Close video"
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
          <div
            className={`${style.imageModalContent} ${style.promoVideoModalContent}`}
            onClick={(e) => {
              e.stopPropagation();
              togglePromoVideoModal();
            }}
          >
            <div className={style.promoVideoModalWrap}>
              <video
                ref={promoVideoModalRef}
                className={style.promoVideoModalPlayer}
                src={scaffoldPromoVideo}
                playsInline
                onPlay={() => setIsPromoVideoModalPlaying(true)}
                onPause={() => setIsPromoVideoModalPlaying(false)}
              />
              {!isPromoVideoModalPlaying && (
                <div
                  className={style.promoVideoModalPlayPause}
                  aria-hidden
                  role="img"
                  aria-label="일시정지됨"
                >
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Desktop (Web supplement) video expand modal */}
      {isDesktopVideoModalOpen && (
        <div
          className={style.imageModalOverlay}
          onClick={closeDesktopVideoModal}
        >
          <button
            type="button"
            className={style.promoVideoModalCloseButton}
            onClick={(e) => {
              e.stopPropagation();
              closeDesktopVideoModal();
            }}
            aria-label="Close video"
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
          <div
            className={`${style.imageModalContent} ${style.promoVideoModalContent}`}
            onClick={(e) => {
              e.stopPropagation();
              toggleDesktopVideoModal();
            }}
          >
            <div className={style.promoVideoModalWrap}>
              <video
                ref={desktopVideoModalRef}
                className={style.promoVideoModalPlayer}
                src={scaffoldDesktopVideo}
                playsInline
                onPlay={() => setIsDesktopVideoModalPlaying(true)}
                onPause={() => setIsDesktopVideoModalPlaying(false)}
              />
              {!isDesktopVideoModalPlaying && (
                <div
                  className={style.promoVideoModalPlayPause}
                  aria-hidden
                  role="img"
                  aria-label="일시정지됨"
                >
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

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
