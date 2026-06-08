import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import styles from './RailItem.module.css';

export interface RailItemProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  icon?: ReactNode;
  /** Marks the current section. */
  active?: boolean;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Single destination in a vertical navigation rail — stacked icon + label.
 * Mirrors the Figma DS Rail item (state).
 */
export const RailItem = forwardRef<HTMLButtonElement, RailItemProps>(function RailItem(
  { icon, active, className, children, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      data-active={active || undefined}
      aria-current={active ? 'page' : undefined}
      className={cx(styles.item, className)}
      {...rest}
    >
      {icon != null && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{children}</span>
    </button>
  );
});
