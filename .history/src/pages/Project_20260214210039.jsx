import style from '../styles/Project.module.css';
import ProjectSelection from '../components/ProjectSelection.jsx';
import { useMemo, useState } from 'react';
import montroImg from '../assets/montro_image1.jpg';
import scaffoldImg from '../assets/scaffold_image1.png';
import posterImg from '../assets/poster_image1.jpg';
import canImg from '../assets/can_mockup2.jpg';
import magazineImg from '../assets/magazine1.jpg';
import Buttons from '../components/Buttons.jsx';

export default function Project() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filterLabels = useMemo(
    () => [
      { label: 'ALL', value: 'All' },
      { label: 'UI/UX', value: 'UI/UX' },
      { label: 'Graphic', value: 'Graphic' },
      { label: 'Motion', value: 'Motion' },
    ],
    [],
  );

  const projects = useMemo(
    () => [
      {
        name: 'Commercial Poster',
        category: 'Graphic design',
        img: posterImg,
        to: '/poster',
        keyword: 'Graphic',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M16.1963 4.66992L16.3652 4.87598L16.6299 4.85059L21.6348 4.36426L21.1494 9.37012L21.124 9.63477L21.3301 9.80371L25.2139 13L21.3301 16.1963L21.124 16.3652L21.1494 16.6299L21.6348 21.6348L16.6299 21.1494L16.3652 21.124L16.1963 21.3301L13 25.2139L9.80371 21.3301L9.63477 21.124L9.37012 21.1494L4.36426 21.6348L4.85059 16.6299L4.87598 16.3652L4.66992 16.1963L0.785156 13L4.66992 9.80371L4.87598 9.63477L4.85059 9.37012L4.36426 4.36426L9.37012 4.85059L9.63477 4.87598L9.80371 4.66992L13 0.785156L16.1963 4.66992Z"
              fill="#FD5A46"
              stroke="black"
            />
          </svg>
        ),
      },
      {
        name: 'StoneVine',
        category: 'Graphic/Packaging',
        img: canImg,
        to: '/packaging',
        keyword: 'Graphic',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M16.1963 4.66992L16.3652 4.87598L16.6299 4.85059L21.6348 4.36426L21.1494 9.37012L21.124 9.63477L21.3301 9.80371L25.2139 13L21.3301 16.1963L21.124 16.3652L21.1494 16.6299L21.6348 21.6348L16.6299 21.1494L16.3652 21.124L16.1963 21.3301L13 25.2139L9.80371 21.3301L9.63477 21.124L9.37012 21.1494L4.36426 21.6348L4.85059 16.6299L4.87598 16.3652L4.66992 16.1963L0.785156 13L4.66992 9.80371L4.87598 9.63477L4.85059 9.37012L4.36426 4.36426L9.37012 4.85059L9.63477 4.87598L9.80371 4.66992L13 0.785156L16.1963 4.66992Z"
              fill="#FD5A46"
              stroke="black"
            />
          </svg>
        ),
      },
      {
        name: 'Scaffold',
        category: 'UX/UI design',
        img: scaffoldImg,
        keyword: 'UI/UX',
        overlayText: 'Coming soon',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M16.1963 4.66992L16.3652 4.87598L16.6299 4.85059L21.6348 4.36426L21.1494 9.37012L21.124 9.63477L21.3301 9.80371L25.2139 13L21.3301 16.1963L21.124 16.3652L21.1494 16.6299L21.6348 21.6348L16.6299 21.1494L16.3652 21.124L16.1963 21.3301L13 25.2139L9.80371 21.3301L9.63477 21.124L9.37012 21.1494L4.36426 21.6348L4.85059 16.6299L4.87598 16.3652L4.66992 16.1963L0.785156 13L4.66992 9.80371L4.87598 9.63477L4.85059 9.37012L4.36426 4.36426L9.37012 4.85059L9.63477 4.87598L9.80371 4.66992L13 0.785156L16.1963 4.66992Z"
              fill="#FFC567"
              stroke="black"
            />
          </svg>
        ),
      },
      {
        name: 'G.Adventures',
        category: 'Graphic design',
        img: magazineImg,
        to: '/magazine',
        keyword: 'Graphic',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M16.1963 4.66992L16.3652 4.87598L16.6299 4.85059L21.6348 4.36426L21.1494 9.37012L21.124 9.63477L21.3301 9.80371L25.2139 13L21.3301 16.1963L21.124 16.3652L21.1494 16.6299L21.6348 21.6348L16.6299 21.1494L16.3652 21.124L16.1963 21.3301L13 25.2139L9.80371 21.3301L9.63477 21.124L9.37012 21.1494L4.36426 21.6348L4.85059 16.6299L4.87598 16.3652L4.66992 16.1963L0.785156 13L4.66992 9.80371L4.87598 9.63477L4.85059 9.37012L4.36426 4.36426L9.37012 4.85059L9.63477 4.87598L9.80371 4.66992L13 0.785156L16.1963 4.66992Z"
              fill="#FD5A46"
              stroke="black"
            />
          </svg>
        ),
      },
      {
        name: 'Montro',
        category: 'UX/UI design',
        img: montroImg,
        keyword: 'UI/UX',
        overlayText: 'Coming soon',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M16.1963 4.66992L16.3652 4.87598L16.6299 4.85059L21.6348 4.36426L21.1494 9.37012L21.124 9.63477L21.3301 9.80371L25.2139 13L21.3301 16.1963L21.124 16.3652L21.1494 16.6299L21.6348 21.6348L16.6299 21.1494L16.3652 21.124L16.1963 21.3301L13 25.2139L9.80371 21.3301L9.63477 21.124L9.37012 21.1494L4.36426 21.6348L4.85059 16.6299L4.87598 16.3652L4.66992 16.1963L0.785156 13L4.66992 9.80371L4.87598 9.63477L4.85059 9.37012L4.36426 4.36426L9.37012 4.85059L9.63477 4.87598L9.80371 4.66992L13 0.785156L16.1963 4.66992Z"
              fill="#FFC567"
              stroke="black"
            />
          </svg>
        ),
      },
    ],
    [],
  );

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    if (activeFilter === 'UI/UX') {
      return projects.filter(
        (p) => p.keyword === 'UI/UX' || p.category?.includes('UI/UX'),
      );
    }
    return projects.filter((p) => p.keyword === activeFilter);
  }, [activeFilter, projects]);

  const handleFilterClick = (value) => setActiveFilter(value);

  return (
    <div className={style.page}>
      <div className={style.section1}>
        <h1>
          Featured <br /> Project
        </h1>
        <div className={style.buttons}>
          {filterLabels.map(({ label, value }) => (
            <Buttons
              key={value}
              label={label}
              variant="category"
              icon={null}
              active={activeFilter === value}
              onClick={() => handleFilterClick(value)}
            />
          ))}
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
            overlayText={p.overlayText}
            icon={p.icon}
          />
        ))}
      </div>
    </div>
  );
}
