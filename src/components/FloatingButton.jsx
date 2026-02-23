import { useRef, useLayoutEffect } from 'react';
import style from '../styles/FloatingButton.module.css';

const NAV_ITEMS = [
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

function convertLabelToSectionId(label) {
  return label
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

function updateConstrainedPosition(fixedWrapperRef, containerRef, bottomBoundaryRef) {
  if (!containerRef?.current || !fixedWrapperRef?.current) return;
  const containerRect = containerRef.current.getBoundingClientRect();
  const buttonRect = fixedWrapperRef.current.getBoundingClientRect();
  const viewportCenter = window.innerHeight / 2;
  const halfButtonHeight = buttonRect.height / 2;
  const preferredTop = viewportCenter - halfButtonHeight;
  const minTop = containerRect.top;
  const bottomBound = bottomBoundaryRef?.current?.getBoundingClientRect?.();
  const maxTop = bottomBound
    ? bottomBound.bottom - buttonRect.height
    : containerRect.bottom - buttonRect.height;
  const clampedTop = Math.min(maxTop, Math.max(minTop, preferredTop));
  const el = fixedWrapperRef.current;
  el.style.top = `${clampedTop}px`;
  el.style.transform = 'none';
}

export default function FloatingButton({
  items = NAV_ITEMS,
  fixedNav = false,
  active = true,
  activeSection = null,
  getSectionId = convertLabelToSectionId,
  onSectionClick,
  containerRef = null,
  bottomBoundaryRef = null,
}) {
  const fixedWrapperRef = useRef(null);

  useLayoutEffect(() => {
    if (!fixedNav || !containerRef) return;
    const run = () =>
      updateConstrainedPosition(fixedWrapperRef, containerRef, bottomBoundaryRef);
    run();
    window.addEventListener('scroll', run, { passive: true });
    window.addEventListener('resize', run);
    return () => {
      window.removeEventListener('scroll', run);
      window.removeEventListener('resize', run);
    };
  }, [fixedNav, containerRef, bottomBoundaryRef]);

  const handleItemClick = (sectionId) => {
    onSectionClick?.(sectionId);
    const sectionEl = document.getElementById(sectionId);
    if (!sectionEl) return;
    const anchor =
      sectionEl.querySelector('h2') ||
      sectionEl.querySelector('h3, [class*="Heading"], [class*="Title"]') ||
      sectionEl.firstElementChild;
    const fixedEl = fixedWrapperRef.current;
    if (anchor && fixedEl) {
      const anchorTop = anchor.getBoundingClientRect().top;
      const fixedTop = fixedEl.getBoundingClientRect().top;
      window.scrollBy({ top: anchorTop - fixedTop, behavior: 'smooth' });
    } else {
      sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const nav = (
    <nav className={style.summary} aria-label="Summary">
      <ol className={style.list}>
        {items.map((item, index) => {
          const sectionId = getSectionId(item);
          const clickable = Boolean(sectionId);
          const isActive = activeSection === sectionId;
          return (
            <li
              key={index}
              className={`${style.listItem} ${isActive ? style.listItemActive : ''}`}
            >
              {clickable ? (
                <button
                  type="button"
                  className={`${style.listLink} ${isActive ? style.listLinkActive : ''}`}
                  onClick={() => handleItemClick(sectionId)}
                >
                  {item}
                </button>
              ) : (
                item
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );

  if (fixedNav) {
    return (
      <div
        ref={fixedWrapperRef}
        className={`${style.summaryFixed} ${active ? '' : style.summaryFixedInactive}`}
        aria-hidden={!active}
      >
        {nav}
      </div>
    );
  }

  return nav;
}
