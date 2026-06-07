import { useState, type HTMLAttributes, type ReactNode } from 'react';
import styles from './ToggleGroup.module.css';

export interface ToggleGroupItem {
  value: string;
  label?: ReactNode;
  icon?: ReactNode;
  'aria-label'?: string;
}

export interface ToggleGroupProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  items: ToggleGroupItem[];
  /** Controlled active value. */
  value?: string;
  /** Uncontrolled initial value (defaults to the first item). */
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Segmented set of toggles — exactly one active at a time (view/alignment switch).
 * Mirrors the Figma DS Toggle group (variant · active).
 */
export function ToggleGroup({
  items,
  value,
  defaultValue,
  onValueChange,
  className,
  ...rest
}: ToggleGroupProps) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState(defaultValue ?? items[0]?.value);
  const active = isControlled ? value : internal;

  return (
    <div className={cx(styles.group, className)} role="group" {...rest}>
      {items.map((item) => (
        <button
          key={item.value}
          type="button"
          aria-pressed={item.value === active}
          aria-label={item['aria-label']}
          className={styles.segment}
          onClick={() => {
            if (!isControlled) setInternal(item.value);
            onValueChange?.(item.value);
          }}
        >
          {item.icon != null && <span className={styles.icon}>{item.icon}</span>}
          {item.label}
        </button>
      ))}
    </div>
  );
}
