import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { IconChevronDown } from '../../icons';
import styles from './Select.module.css';

export interface SelectProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** Optional leading icon (e.g. a sort/filter glyph). */
  leadingIcon?: ReactNode;
  /** Open state (highlights the trigger). */
  open?: boolean;
  /** Error state. */
  error?: boolean;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Compact select trigger — leading icon, label, and a chevron. Pair with a menu
 * (e.g. the Dropdown pattern) to make it interactive. Mirrors the Figma DS Select.
 */
export const Select = forwardRef<HTMLButtonElement, SelectProps>(function Select(
  { leadingIcon, open, error, className, children, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      className={cx(styles.select, className)}
      data-open={open || undefined}
      data-error={error || undefined}
      aria-haspopup="listbox"
      aria-expanded={open}
      aria-invalid={error || undefined}
      {...rest}
    >
      {leadingIcon != null && (
        <span className={styles.leading} aria-hidden="true">
          {leadingIcon}
        </span>
      )}
      <span className={styles.label}>{children}</span>
      <span className={styles.chevron} aria-hidden="true">
        <IconChevronDown />
      </span>
    </button>
  );
});
