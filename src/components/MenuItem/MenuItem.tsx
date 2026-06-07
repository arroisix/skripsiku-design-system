import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import styles from './MenuItem.module.css';

export type MenuItemTone = 'default' | 'danger';

export interface MenuItemProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** Leading icon. */
  icon?: ReactNode;
  /** Colour. @default 'default' */
  tone?: MenuItemTone;
  /** Keyboard shortcut hint shown on the right (e.g. "F2"). */
  shortcut?: ReactNode;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Row inside a dropdown/context menu that triggers an action.
 * Mirrors the Figma DS Menu item (tone · state · swappable icon).
 */
export const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>(function MenuItem(
  { icon, tone = 'default', shortcut, className, children, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      role="menuitem"
      className={cx(styles.item, tone === 'danger' && styles.danger, className)}
      {...rest}
    >
      {icon != null && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{children}</span>
      {shortcut != null && <span className={styles.kbd}>{shortcut}</span>}
    </button>
  );
});
