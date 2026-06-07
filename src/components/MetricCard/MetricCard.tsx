import type { HTMLAttributes, ReactNode } from 'react';
import styles from './MetricCard.module.css';

export type MetricBadgeTone = 'brand' | 'success' | 'warning' | 'danger';

export interface MetricCardProps extends HTMLAttributes<HTMLDivElement> {
  /** The headline value, e.g. "78%". */
  value: ReactNode;
  /** Caption under the value. */
  label: ReactNode;
  /** Icon shown in the top-left badge. */
  icon?: ReactNode;
  /** Badge colour. @default 'brand' */
  badgeTone?: MetricBadgeTone;
  /** Trend text, e.g. "+6%". */
  delta?: ReactNode;
  /** Trend direction (colours the delta). @default 'up' */
  deltaDirection?: 'up' | 'down';
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Compact card pairing a big headline number with a caption and optional trend.
 * Mirrors the Figma DS Metric card.
 */
export function MetricCard({
  value,
  label,
  icon,
  badgeTone = 'brand',
  delta,
  deltaDirection = 'up',
  className,
  ...rest
}: MetricCardProps) {
  return (
    <div className={cx(styles.card, className)} {...rest}>
      {(icon != null || delta != null) && (
        <div className={styles.top}>
          {icon != null && <span className={cx(styles.badge, styles[badgeTone])}>{icon}</span>}
          <span className={styles.spacer} />
          {delta != null && (
            <span className={cx(styles.delta, deltaDirection === 'up' ? styles.deltaUp : styles.deltaDown)}>
              {delta}
            </span>
          )}
        </div>
      )}
      <p className={styles.value}>{value}</p>
      <p className={styles.label}>{label}</p>
    </div>
  );
}
