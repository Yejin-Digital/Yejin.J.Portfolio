import style from './styles/NavigationPageButtons.module.css';

export function NavigationButton() {
  return (
    <div className={style.navButtons}>
      <button>Home</button>
      <button>Project</button>
      <button>Resume</button>
    </div>
  );
}
