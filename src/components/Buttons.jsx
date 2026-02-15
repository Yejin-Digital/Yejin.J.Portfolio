import style from '../styles/Buttons.module.css';

const VARIANTS = ['default', 'home', 'icon', 'round', 'category'];

export default function NavigationButton({
  label,
  onClick,
  variant = 'default',
  icon,
  active = false,
}) {
  const variantClass =
    variant !== 'default' && VARIANTS.includes(variant) ? style[variant] : '';
  const activeClass = active ? style.active : '';
  const showTextAndIcon =
    (variant === 'home' || variant === 'icon') && icon != null;

  const content = showTextAndIcon ? (
    <span className={style.buttonContent}>
      {variant === 'home' ? (
        <>
          <span className={style.buttonIcon}>{icon}</span>
          <span className={style.buttonLabel}>{label}</span>
        </>
      ) : (
        <>
          <span className={style.buttonLabel}>{label}</span>
          <span className={style.buttonIconArrow}>{icon}</span>
        </>
      )}
    </span>
  ) : (
    label
  );

  return (
    <div className={style.navButtons}>
      <button
        className={`${style.navButton} ${variantClass} ${activeClass}`.trim()}
        onClick={onClick}
        aria-label={label}
        aria-pressed={active || undefined}
      >
        {content}
      </button>
    </div>
  );
}
