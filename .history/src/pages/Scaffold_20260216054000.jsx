import { useState } from 'react';
import style from '../styles/Scaffold.module.css';
import { Link } from 'react-router-dom';

export default function Scaffold() {
  return (
    <div className={style.page}>
      <div className={style.titleSection}>
        <h1>
          Brochure <br /> Design
        </h1>
        <div className={style.subTitle}>
          <div className={style.subtitleLogo}>
            <img src={subtitleLogo} alt="gAdventure logo" />
          </div>
          <p>Tour Brochure Design</p>
        </div>
      </div>
    </div>
  );
}
