import type { HTMLAttributes } from 'react';
import styles from './OtpCell.module.css';

export type OtpCellState = 'default' | 'error' | 'success';

export interface OtpCellProps extends HTMLAttributes<HTMLDivElement> {
  /** Validation state. @default 'default' */
  state?: OtpCellState;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Single-character box for one digit of a one-time passcode. Combine several in
 * a row to form the full code. Mirrors the Figma DS OTP Cell (state).
 */
export function OtpCell({ state = 'default', className, children, ...rest }: OtpCellProps) {
  return (
    <div className={cx(styles.cell, className)} data-state={state} {...rest}>
      {children}
    </div>
  );
}
