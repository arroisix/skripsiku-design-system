import { Fragment, type HTMLAttributes, type ReactNode } from 'react';
import { IconClose, IconSparkles } from '../../icons';
import styles from './PuebiPanel.module.css';

export type PuebiTone = 'danger' | 'warning' | 'brand';

export interface PuebiIssue {
  /** Badge tone. */
  tone: PuebiTone;
  /** Badge label, e.g. "PUEBI · Typo". */
  badge: ReactNode;
  /** Where the issue is, e.g. "Bab 1 - Pendahuluan". */
  location?: ReactNode;
  /** Flagged text (with `correct`). */
  wrong?: ReactNode;
  /** Suggested replacement (with `wrong`). */
  correct?: ReactNode;
  /** A quote instead of a wrong→correct fix (e.g. plagiarism). */
  quote?: ReactNode;
}

export interface PuebiPanelProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: ReactNode;
  subtitle?: ReactNode;
  /** Filter chips (compose with `<Chip>`). */
  tabs?: ReactNode;
  issues: PuebiIssue[];
  fixAllLabel?: ReactNode;
  footerText?: ReactNode;
  onDismiss?: () => void;
  onFixAll?: () => void;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Language-check panel listing PUEBI/EYD/Turnitin issues with suggested fixes.
 * Mirrors the Figma DS PUEBI panel.
 */
export function PuebiPanel({
  title,
  subtitle,
  tabs,
  issues,
  fixAllLabel = 'Perbaiki semua',
  footerText = 'Dibantu Copilot AI',
  onDismiss,
  onFixAll,
  className,
  ...rest
}: PuebiPanelProps) {
  return (
    <div className={cx(styles.panel, className)} {...rest}>
      <div className={styles.header}>
        <div className={styles.headText}>
          <span className={styles.title}>{title}</span>
          {subtitle != null && <span className={styles.subtitle}>{subtitle}</span>}
        </div>
        {onDismiss && (
          <button type="button" className={styles.dismiss} aria-label="Tutup" onClick={onDismiss}>
            <IconClose />
          </button>
        )}
      </div>

      {tabs != null && (
        <>
          <div className={styles.sep} />
          <div className={styles.tabs}>{tabs}</div>
        </>
      )}

      <div className={styles.sep} />
      <div className={styles.list}>
        {issues.map((issue, i) => (
          <Fragment key={i}>
            {i > 0 && <div className={styles.sep} />}
            <div className={styles.item}>
              <div className={styles.itemRow}>
                <span className={cx(styles.badge, styles[issue.tone])}>{issue.badge}</span>
                {issue.location != null && <span className={styles.location}>{issue.location}</span>}
              </div>
              {issue.quote != null ? (
                <p className={styles.quote}>{issue.quote}</p>
              ) : (
                <div className={styles.fix}>
                  <span className={styles.wrong}>{issue.wrong}</span>
                  <span className={styles.arrow}>→</span>
                  <span className={styles.correct}>{issue.correct}</span>
                </div>
              )}
            </div>
          </Fragment>
        ))}
      </div>

      <div className={styles.sep} />
      <div className={styles.footer}>
        <span className={styles.footerText}>{footerText}</span>
        <button type="button" className={styles.fixAll} onClick={onFixAll}>
          <IconSparkles />
          {fixAllLabel}
        </button>
      </div>
    </div>
  );
}
