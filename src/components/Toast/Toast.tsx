import type { HTMLAttributes } from 'react';
import styles from './Toast.module.css';

export type ToastTone = 'info' | 'success' | 'warning' | 'danger';

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  /** Status colour of the leading dot. @default 'info' */
  tone?: ToastTone;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Transient, non-blocking notification confirming an action or result.
 * Mirrors the Figma DS Toast (tone).
 */
export function Toast({ tone = 'info', className, children, ...rest }: ToastProps) {
  return (
    <div className={cx(styles.toast, styles[tone], className)} role="status" {...rest}>
      <span className={styles.dot} />
      {children}
    </div>
  );
}
