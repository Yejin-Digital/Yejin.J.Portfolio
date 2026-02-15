import style from '../styles/Label.module.css';

export default function Label({ text, color }) {
  return (
    <div className={style.label} style={{ backgroundColor: color }}>
      {text}
    </div>
  );
}
