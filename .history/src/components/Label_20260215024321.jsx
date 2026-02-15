import style from '../styles/Label.module.css';

const LABELS = [
  {
    text: { text },
    color: { color },
  },
];

export default function Label({ text }) {
  return <div className={style.label}>{text}</div>;
}
