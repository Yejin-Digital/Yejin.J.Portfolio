import { useState } from 'react';
import style from '../styles/Scaffold.module.css';
import { Link } from 'react-router-dom';

export default function Scaffold() {
  return (
    <div className={style.page}>
      <div className={style.titleSection}>
        <h1>
          UX/UI <br /> Design
        </h1>
        <div className={style.subTitle}>
          <h2>SCAFFOLD</h2>
          <p>
            AI-powered Financial resource tracking app <br /> For apprentices
            and trades students
          </p>
        </div>
      </div>
    </div>
  );
}
