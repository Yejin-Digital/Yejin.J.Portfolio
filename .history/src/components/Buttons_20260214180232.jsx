import style from '../styles/NavigationPageButtons.module.css';

const VARIANTS = ['default', 'home', 'icon', 'round', 'category'];

export default function NavigationButton({
  label,
  onClick,
  variant = 'default',
  icon,
}) {
  const variantClass =
    variant !== 'default' && VARIANTS.includes(variant) ? style[variant] : '';
  const isIconVariant = variant === 'icon';

  return (
    <div className={style.navButtons}>
      <button
        className={`${style.navButton} ${variantClass}`.trim()}
        onClick={onClick}
        title={isIconVariant && label ? label : undefined}
        aria-label={label}
      >
        {isIconVariant && icon ? icon : label}
      </button>
    </div>
  );
}
