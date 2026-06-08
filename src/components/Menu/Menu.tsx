import type { HTMLAttributes } from 'react';
import styles from './Menu.module.css';

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

export type MenuProps = HTMLAttributes<HTMLDivElement>;

/**
 * Popover container for menus (context, overflow, list, insert…). Fill it with
 * `MenuItem` / `MenuItemRich` rows, plus `MenuLabel` and `MenuSeparator`.
 * Mirrors the Figma DS menu containers.
 */
export function Menu({ className, children, ...rest }: MenuProps) {
  return (
    <div role="menu" className={cx(styles.menu, className)} {...rest}>
      {children}
    </div>
  );
}

/** Small uppercase section label inside a Menu. */
export function MenuLabel({ className, children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cx(styles.label, className)} {...rest}>
      {children}
    </div>
  );
}

/** Thin divider between Menu groups. */
export function MenuSeparator({ className }: { className?: string }) {
  return <hr role="separator" className={cx(styles.separator, className)} />;
}
