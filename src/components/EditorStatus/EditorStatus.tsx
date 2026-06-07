import type { HTMLAttributes } from 'react';
import styles from './EditorStatus.module.css';

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

export type EditorStatusProps = HTMLAttributes<HTMLDivElement>;

/**
 * Inline editor status pill — surfaces save/sync/word-count info in the editor
 * chrome. Compose with `EditorStatusDivider` and `EditorStatusSegment`.
 * Mirrors the Figma DS Editor status.
 */
export function EditorStatus({ className, children, ...rest }: EditorStatusProps) {
  return (
    <div className={cx(styles.status, className)} {...rest}>
      {children}
    </div>
  );
}

/** Thin vertical separator between segments. */
export function EditorStatusDivider() {
  return <span className={styles.divider} aria-hidden="true" />;
}

export type StatusTone = 'success' | 'warning' | 'danger' | 'brand' | 'mute';

export interface EditorStatusSegmentProps extends HTMLAttributes<HTMLSpanElement> {
  /** Shows a small status dot in this tone before the content. */
  dot?: StatusTone;
}

const DOT_COLOR: Record<StatusTone, string> = {
  success: 'var(--color-success)',
  warning: 'var(--color-warning)',
  danger: 'var(--color-danger)',
  brand: 'var(--color-brand)',
  mute: 'var(--color-text-mute)',
};

/** A segment within the status pill, optionally led by a coloured dot. */
export function EditorStatusSegment({ dot, className, children, ...rest }: EditorStatusSegmentProps) {
  return (
    <span className={cx(styles.segment, className)} {...rest}>
      {dot && <span className={styles.dot} style={{ background: DOT_COLOR[dot] }} />}
      {children}
    </span>
  );
}
