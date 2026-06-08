import type { HTMLAttributes, ReactNode } from 'react';
import styles from './PagePreview.module.css';

export type PageStatus = 'done' | 'progress' | 'empty';

export interface PageStat {
  label: ReactNode;
  value: ReactNode;
}

export interface PagePreviewProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Completion status (drives the dot colour). @default 'empty' */
  status?: PageStatus;
  /** Status caption (e.g. "SELESAI"). */
  statusLabel: ReactNode;
  title: ReactNode;
  /** Up to a couple of stats (word count, last edited…). */
  stats?: PageStat[];
  /** Helper line under the stats. */
  caption?: ReactNode;
  /** Action buttons (rendered stacked, full width). */
  actions?: ReactNode;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Thumbnail preview of a document page with its completion status and actions.
 * Mirrors the Figma DS Page preview (status).
 */
export function PagePreview({
  status = 'empty',
  statusLabel,
  title,
  stats,
  caption,
  actions,
  className,
  ...rest
}: PagePreviewProps) {
  return (
    <div className={cx(styles.card, styles[status], className)} {...rest}>
      <div className={styles.statusRow}>
        <span className={styles.dot} />
        <span className={styles.statusLabel}>{statusLabel}</span>
      </div>
      <span className={styles.title}>{title}</span>
      {stats != null && stats.length > 0 && (
        <div className={styles.stats}>
          {stats.map((s, i) => (
            <div key={i} className={styles.stat}>
              <span className={styles.statLabel}>{s.label}</span>
              <span className={styles.statValue}>{s.value}</span>
            </div>
          ))}
        </div>
      )}
      {caption != null && <p className={styles.caption}>{caption}</p>}
      {actions != null && <div className={styles.actions}>{actions}</div>}
    </div>
  );
}
