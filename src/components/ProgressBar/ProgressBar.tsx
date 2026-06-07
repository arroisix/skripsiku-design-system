import type { CSSProperties, HTMLAttributes } from 'react';
import styles from './ProgressBar.module.css';

export type ProgressTone = 'brand' | 'success' | 'warning' | 'danger';

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  /** Current value. @default 0 */
  value?: number;
  /** Maximum value. @default 100 */
  max?: number;
  /** @default 'brand' */
  tone?: ProgressTone;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Horizontal progress track. Mirrors the Figma DS Progress bar (tone).
 */
export function ProgressBar({
  value = 0,
  max = 100,
  tone = 'brand',
  className,
  style,
  ...rest
}: ProgressBarProps) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div
      className={cx(styles.track, className)}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      style={{ ...style, ['--progress' as string]: `${pct}%` } as CSSProperties}
      {...rest}
    >
      <div className={cx(styles.fill, styles[tone])} />
    </div>
  );
}
