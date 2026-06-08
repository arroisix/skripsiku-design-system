import type { HTMLAttributes, ReactNode } from 'react';
import { IconClose } from '../../icons';
import { Button } from '../Button';
import styles from './LintPopover.module.css';

export type LintType = 'typo' | 'eyd' | 'plag';

export interface LintPopoverProps extends HTMLAttributes<HTMLDivElement> {
  /** Issue category (drives badge colour). @default 'typo' */
  type?: LintType;
  /** Badge label, e.g. "PUEBI · Typo". */
  label: ReactNode;
  /** The flagged text. */
  wrong?: ReactNode;
  /** The suggested replacement. */
  correct?: ReactNode;
  acceptLabel?: ReactNode;
  ignoreLabel?: ReactNode;
  onAccept?: () => void;
  onIgnore?: () => void;
  onDismiss?: () => void;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Popover explaining a writing issue (typo / EYD / plagiarism) and offering a fix.
 * Mirrors the Figma DS Lint popover (type).
 */
export function LintPopover({
  type = 'typo',
  label,
  wrong,
  correct,
  acceptLabel = 'Terima saran',
  ignoreLabel = 'Abaikan',
  onAccept,
  onIgnore,
  onDismiss,
  className,
  children,
  ...rest
}: LintPopoverProps) {
  return (
    <div className={cx(styles.popover, styles[type], className)} role="dialog" {...rest}>
      <div className={styles.header}>
        <span className={styles.badge}>{label}</span>
        <span className={styles.spacer} />
        {onDismiss && (
          <button type="button" className={styles.dismiss} aria-label="Tutup" onClick={onDismiss}>
            <IconClose />
          </button>
        )}
      </div>
      <div className={styles.body}>
        {(wrong != null || correct != null) && (
          <div className={styles.issue}>
            {wrong != null && <span className={styles.wrong}>{wrong}</span>}
            <span className={styles.arrow}>→</span>
            {correct != null && <span className={styles.correct}>{correct}</span>}
          </div>
        )}
        {children != null && <p className={styles.explain}>{children}</p>}
        <div className={styles.actions}>
          <Button variant="primary" size="sm" onClick={onAccept}>{acceptLabel}</Button>
          <Button variant="secondary" size="sm" onClick={onIgnore}>{ignoreLabel}</Button>
        </div>
      </div>
    </div>
  );
}
