import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'text' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual importance. @default 'primary' */
  variant?: ButtonVariant;
  /** Control size. @default 'md' */
  size?: ButtonSize;
  /** Icon element (e.g. an `<svg>`). With no children it becomes an icon-only button. */
  icon?: ReactNode;
  /** Icon placement relative to the label. @default 'leading' */
  iconPosition?: 'leading' | 'trailing';
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Primary interactive control for triggering actions and submitting forms.
 * Mirrors the Figma DS Button (variant · size · state · icon).
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'leading',
    className,
    children,
    type = 'button',
    ...rest
  },
  ref,
) {
  const hasLabel = children != null && children !== '';
  const iconOnly = icon != null && !hasLabel;
  const iconEl = icon != null ? (
    <span className={styles.icon} aria-hidden="true">
      {icon}
    </span>
  ) : null;

  return (
    <button
      ref={ref}
      type={type}
      className={cx(
        styles.button,
        styles[variant],
        styles[size],
        iconOnly && styles.iconOnly,
        className,
      )}
      {...rest}
    >
      {iconPosition === 'leading' ? iconEl : null}
      {hasLabel ? children : null}
      {iconPosition === 'trailing' && hasLabel ? iconEl : null}
    </button>
  );
});
