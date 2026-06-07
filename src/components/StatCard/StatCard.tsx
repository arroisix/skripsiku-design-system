import type { HTMLAttributes, ReactNode } from 'react';
import styles from './StatCard.module.css';

export interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
  /** The statistic, e.g. "78%". */
  value: ReactNode;
  /** Sublabel under the value. */
  label: ReactNode;
  /** Optional icon shown in the leading badge. */
  icon?: ReactNode;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Card presenting a statistic with a small framing sublabel and leading badge.
 * Mirrors the Figma DS Stat card.
 */
export function StatCard({ value, label, icon, className, ...rest }: StatCardProps) {
  return (
    <div className={cx(styles.card, className)} {...rest}>
      <span className={styles.badge}>{icon}</span>
      <span className={styles.text}>
        <span className={styles.value}>{value}</span>
        <span className={styles.label}>{label}</span>
      </span>
    </div>
  );
}
