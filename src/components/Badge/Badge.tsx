import type { HTMLAttributes } from 'react';
import styles from './Badge.module.css';

export type BadgeTone = 'neutral' | 'brand' | 'success' | 'warning' | 'danger';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Colour/meaning. @default 'neutral' */
  tone?: BadgeTone;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Small non-interactive label marking status, category, or a count.
 * Mirrors the Figma DS Badge (tone).
 */
export function Badge({ tone = 'neutral', className, children, ...rest }: BadgeProps) {
  return (
    <span className={cx(styles.badge, styles[tone], className)} {...rest}>
      {children}
    </span>
  );
}
