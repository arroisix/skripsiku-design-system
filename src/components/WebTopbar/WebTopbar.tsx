import type { HTMLAttributes, ReactNode } from 'react';
import { IconChevronBack } from '../../icons';
import styles from './WebTopbar.module.css';

export interface WebTopbarProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  title: ReactNode;
  /** When set, shows a back button. */
  onBack?: () => void;
  /** Right-aligned actions (e.g. a `<Button>`). */
  actions?: ReactNode;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Page top bar with an optional back button, title, and right-aligned actions.
 * Mirrors the Figma DS Web Topbar.
 */
export function WebTopbar({ title, onBack, actions, className, ...rest }: WebTopbarProps) {
  return (
    <header className={cx(styles.topbar, className)} {...rest}>
      {onBack && (
        <button type="button" className={styles.back} aria-label="Kembali" onClick={onBack}>
          <IconChevronBack />
        </button>
      )}
      <span className={styles.title}>{title}</span>
      {actions != null && (
        <>
          <span className={styles.spacer} />
          <div className={styles.actions}>{actions}</div>
        </>
      )}
    </header>
  );
}
