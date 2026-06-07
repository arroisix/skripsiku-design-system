import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './CitationChip.module.css';

export interface CitationChipProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  children: ReactNode;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Inline reference token, e.g. "(Putri, 2024)". Renders as a button when
 * `onClick` is provided (jump to source), otherwise as a static span.
 * Mirrors the Figma DS Citation chip.
 */
export function CitationChip({ className, children, onClick, ...rest }: CitationChipProps) {
  if (onClick) {
    return (
      <button type="button" className={cx(styles.chip, className)} onClick={onClick} {...rest}>
        {children}
      </button>
    );
  }
  return (
    <span className={cx(styles.chip, className)} {...rest}>
      {children}
    </span>
  );
}
