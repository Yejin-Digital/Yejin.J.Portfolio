import style from '../styles/Buttons.module.css';

const VARIANTS = ['default', 'home', 'icon', 'round', 'category'];

export default function NavigationButton({
  label,
  onClick,
  href,
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

  const className = `${style.navButton} ${variantClass} ${activeClass}`.trim();

  return (
    <div className={style.navButtons}>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          aria-label={label}
        >
          {content}
        </a>
      ) : (
        <button
          className={className}
          onClick={onClick}
          aria-label={label}
          aria-pressed={active || undefined}
        >
          {content}
        </button>
      )}
    </div>
  );
}
