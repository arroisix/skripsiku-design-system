import {
  forwardRef,
  useState,
  type ButtonHTMLAttributes,
} from 'react';
import styles from './Switch.module.css';

export interface SwitchProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'type'> {
  /** Controlled on/off state. */
  checked?: boolean;
  /** Uncontrolled initial state. @default false */
  defaultChecked?: boolean;
  /** Called with the new state when toggled. */
  onCheckedChange?: (checked: boolean) => void;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Binary on/off toggle that applies immediately (settings/preferences).
 * Mirrors the Figma DS Switch (off · on).
 */
export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(function Switch(
  { checked, defaultChecked = false, onCheckedChange, disabled, className, onClick, ...rest },
  ref,
) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = useState(defaultChecked);
  const isOn = isControlled ? checked : internal;

  return (
    <button
      ref={ref}
      type="button"
      role="switch"
      aria-checked={isOn}
      disabled={disabled}
      data-checked={isOn || undefined}
      className={cx(styles.switch, className)}
      onClick={(e) => {
        if (!isControlled) setInternal((v) => !v);
        onCheckedChange?.(!isOn);
        onClick?.(e);
      }}
      {...rest}
    >
      <span className={styles.thumb} />
    </button>
  );
});
