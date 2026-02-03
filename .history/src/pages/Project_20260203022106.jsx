import style from '../styles/Project.module.css';
import ProjectSelection from '../components/ProjectSelection.jsx';
import { useMemo, useState } from 'react';
import montroImg from '../assets/montro_image1.jpg';
import scaffoldImg from '../assets/scaffold_image1.jpg';
import posterImg from '../assets/poster_image1.jpg';
import canImg from '../assets/can_image1.jpg';
import Footer from '../components/Footer.jsx';
import magazineImg from '../assets/magazine1.jpg';

export default function Project() {
  const [activeFilter, setActiveFilter] = useState('All');
  const buttons = useMemo(() => ['All', 'UI/UX', 'graphic', 'motion'], []);

  const projects = useMemo(
    () => [
      {
        name: 'Commercial Poster',
        category: 'Graphic design',
        img: posterImg,
        to: '/poster',
        keyword: 'graphic',
      },
      {
        name: 'StoneVine',
        category: 'Graphic/Packaging',
        img: canImg,
        to: '/packaging',
        keyword: 'graphic',
      },
      {
        name: 'Montro',
        category: 'UX/UI design',
        img: montroImg,
        keyword: 'UI/UX',
      },
      {
        name: 'G.Adventures',
        category: 'graphic design',
        img: magazineImg,
        to: '/magazine',
        keyword: 'graphic',
      },
      {
        name: 'Scaffold',
        category: 'UX/UI design',
        img: scaffoldImg,
        keyword: 'UI/UX',
      },
    ],
    [],
  );

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((p) => p.keyword === activeFilter);
  }, [activeFilter, projects]);

  return (
    <div className={style.page}>
      <div className={style.section1}>
        <h1>Featured Project</h1>
        <div className={style.buttons}>
          {buttons.map((label) => {
            const isActive = activeFilter === label;
            return (
              <button
                key={label}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(label)}
                className={`${style.filterButton} ${
                  isActive ? style.filterButtonActive : ''
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
      <div className={style.section2}>
        {visibleProjects.map((p) => (
          <ProjectSelection
            key={p.name}
            name={p.name}
            category={p.category}
            img={p.img}
            to={p.to}
            keyword={p.keyword}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
