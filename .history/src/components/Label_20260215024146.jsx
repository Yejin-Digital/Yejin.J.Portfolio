import style from '../styles/Label.module.css';

export default function Label({ text }) {
  return <div className={style.label}>{text}</div>;
}
