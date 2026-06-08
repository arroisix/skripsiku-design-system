import type { HTMLAttributes, ReactNode } from 'react';
import { IconCheckmark, IconClose } from '../../icons';
import styles from './PaneIntro.module.css';

export interface PaneIntroProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: ReactNode;
  /** Leading icon (defaults to a checkmark). */
  icon?: ReactNode;
  /** When set, shows a dismiss (×) button. */
  onDismiss?: () => void;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Header / empty-state block at the top of a side pane — icon, title, blurb.
 * Mirrors the Figma DS Pane intro.
 */
export function PaneIntro({ title, icon, onDismiss, className, children, ...rest }: PaneIntroProps) {
  return (
    <div className={cx(styles.intro, className)} {...rest}>
      <div className={styles.header}>
        <span className={styles.icon}>{icon ?? <IconCheckmark />}</span>
        <span className={styles.title}>{title}</span>
        <span className={styles.spacer} />
        {onDismiss && (
          <button type="button" className={styles.dismiss} aria-label="Tutup" onClick={onDismiss}>
            <IconClose />
          </button>
        )}
      </div>
      {children != null && <p className={styles.desc}>{children}</p>}
    </div>
  );
}
