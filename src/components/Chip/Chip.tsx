import {
  forwardRef,
  useState,
  type ButtonHTMLAttributes,
} from 'react';
import styles from './Chip.module.css';

export interface ChipProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'type'> {
  /** Controlled selected state. */
  selected?: boolean;
  /** Uncontrolled initial selected state. @default false */
  defaultSelected?: boolean;
  /** Called with the new selected state when toggled. */
  onSelectedChange?: (selected: boolean) => void;
  /** Optional match count shown as a small pill. */
  count?: number;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Tappable token for filters, tags, or multi-select options.
 * Mirrors the Figma DS Chip (state · count).
 */
export const Chip = forwardRef<HTMLButtonElement, ChipProps>(function Chip(
  { selected, defaultSelected = false, onSelectedChange, count, className, children, onClick, ...rest },
  ref,
) {
  const isControlled = selected !== undefined;
  const [internal, setInternal] = useState(defaultSelected);
  const isOn = isControlled ? selected : internal;

  return (
    <button
      ref={ref}
      type="button"
      aria-pressed={isOn}
      className={cx(styles.chip, className)}
      onClick={(e) => {
        if (!isControlled) setInternal((v) => !v);
        onSelectedChange?.(!isOn);
        onClick?.(e);
      }}
      {...rest}
    >
      <span>{children}</span>
      {count != null && <span className={styles.count}>{count}</span>}
    </button>
  );
});
