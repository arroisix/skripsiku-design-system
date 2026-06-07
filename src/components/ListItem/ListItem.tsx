import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import styles from './ListItem.module.css';

export interface ListItemProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** Highlights the row as the current selection. */
  active?: boolean;
  /** Optional leading element (icon, avatar). */
  leading?: ReactNode;
  /** Optional trailing element (badge, menu button). */
  trailing?: ReactNode;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Single row in a navigable list of documents/items, supporting selection.
 * Mirrors the Figma DS List item (state).
 */
export const ListItem = forwardRef<HTMLButtonElement, ListItemProps>(function ListItem(
  { active, leading, trailing, className, children, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      data-active={active || undefined}
      aria-current={active ? 'true' : undefined}
      className={cx(styles.item, className)}
      {...rest}
    >
      {leading}
      <span className={styles.label}>{children}</span>
      {trailing}
    </button>
  );
});
