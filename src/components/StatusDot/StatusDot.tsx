import type { HTMLAttributes } from 'react';
import styles from './StatusDot.module.css';

export type DotStatus = 'empty' | 'progress' | 'done';

export interface StatusDotProps extends HTMLAttributes<HTMLSpanElement> {
  /** Lifecycle step. @default 'empty' */
  status?: DotStatus;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Minimal dot signalling a three-step lifecycle (not started · in progress · done).
 * Mirrors the Figma DS Status dot.
 */
export function StatusDot({ status = 'empty', className, children, ...rest }: StatusDotProps) {
  return (
    <span className={cx(styles.root, className)} {...rest}>
      <span className={styles.dot} data-status={status} />
      {children != null && <span className={styles.label}>{children}</span>}
    </span>
  );
}
