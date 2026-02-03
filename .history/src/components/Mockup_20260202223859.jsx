import style from '../styles/Mockup.module.css';

export default function Mockup(image1, image2, name1, name2) {
  return (
    <div className={style.mockup}>
      <img src={image1} alt={name1} />
      <div className={style.moreMockup}>
        <p>More Mockup</p>
        <img src={image2} alt={name2} />
      </div>
    </div>
  );
}
