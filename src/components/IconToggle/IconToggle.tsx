import {
  forwardRef,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react';
import styles from './IconToggle.module.css';

export interface IconToggleProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onChange'> {
  icon: ReactNode;
  /** Shape of the button. @default 'square' */
  shape?: 'square' | 'round';
  /** Controlled pressed state. */
  pressed?: boolean;
  /** Uncontrolled initial state. @default false */
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Toolbar icon toggle holding an on/off state (e.g. show ruler, collapse sidebar).
 * Mirrors the Figma DS Ruler/Sidebar toggle.
 */
export const IconToggle = forwardRef<HTMLButtonElement, IconToggleProps>(function IconToggle(
  { icon, shape = 'square', pressed, defaultPressed = false, onPressedChange, className, onClick, ...rest },
  ref,
) {
  const isControlled = pressed !== undefined;
  const [internal, setInternal] = useState(defaultPressed);
  const isOn = isControlled ? pressed : internal;

  return (
    <button
      ref={ref}
      type="button"
      aria-pressed={isOn}
      className={cx(styles.toggle, shape === 'round' ? styles.round : styles.square, className)}
      onClick={(e) => {
        if (!isControlled) setInternal((v) => !v);
        onPressedChange?.(!isOn);
        onClick?.(e);
      }}
      {...rest}
    >
      <span className={styles.icon}>{icon}</span>
    </button>
  );
});
