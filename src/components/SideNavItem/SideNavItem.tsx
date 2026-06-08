import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import styles from './SideNavItem.module.css';

export interface SideNavItemProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  icon?: ReactNode;
  /** Marks the current location. */
  active?: boolean;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Row in a sidebar navigation list. Set `active` for the current view.
 * Mirrors the Figma DS Side nav item (state).
 */
export const SideNavItem = forwardRef<HTMLButtonElement, SideNavItemProps>(
  function SideNavItem({ icon, active, className, children, ...rest }, ref) {
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
  },
);
