import type { HTMLAttributes } from 'react';
import styles from './PageDot.module.css';

export interface PageDotProps extends HTMLAttributes<HTMLSpanElement> {
  /** Current position marker (active stretches into a pill). @default false */
  active?: boolean;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Pagination dot for carousels/slides. Render one per page, set the current
 * one to `active`. Mirrors the Figma DS Page dot.
 */
export function PageDot({ active = false, className, ...rest }: PageDotProps) {
  return (
    <span
      className={cx(styles.dot, className)}
      data-active={active}
      aria-current={active ? 'true' : undefined}
      {...rest}
    />
  );
}
