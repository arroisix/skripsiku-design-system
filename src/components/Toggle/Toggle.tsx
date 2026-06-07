import {
  forwardRef,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react';
import styles from './Toggle.module.css';

export interface ToggleProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'type'> {
  /** Controlled pressed/active state. */
  pressed?: boolean;
  /** Uncontrolled initial state. @default false */
  defaultPressed?: boolean;
  /** Called with the new state when toggled. */
  onPressedChange?: (pressed: boolean) => void;
  /** Leading icon element. */
  icon?: ReactNode;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Standalone toggle button holding a pressed/active state (e.g. a bold/italic
 * formatting control). Mirrors the Figma DS Toggle (content · state).
 */
export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(function Toggle(
  { pressed, defaultPressed = false, onPressedChange, icon, className, children, onClick, ...rest },
  ref,
) {
  const isControlled = pressed !== undefined;
  const [internal, setInternal] = useState(defaultPressed);
  const isOn = isControlled ? pressed : internal;
  const hasText = children != null && children !== '';

  return (
    <button
      ref={ref}
      type="button"
      aria-pressed={isOn}
      className={cx(styles.toggle, hasText && styles.hasText, className)}
      onClick={(e) => {
        if (!isControlled) setInternal((v) => !v);
        onPressedChange?.(!isOn);
        onClick?.(e);
      }}
      {...rest}
    >
      {icon != null && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      {hasText ? children : null}
    </button>
  );
});
