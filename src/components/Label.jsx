import style from '../styles/Label.module.css';

export default function Label({ text, color, className, style: styleProp }) {
  return (
    <div
      className={className ? `${style.label} ${className}` : style.label}
      style={{ backgroundColor: color, ...styleProp }}
    >
      {text}
    </div>
  );
}
