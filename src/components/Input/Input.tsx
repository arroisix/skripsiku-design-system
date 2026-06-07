import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react';
import styles from './Input.module.css';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Field label rendered above the control. */
  label?: ReactNode;
  /** Helper text rendered below the field (hidden when an error string is shown). */
  helperText?: ReactNode;
  /** Error flag. Pass a string to show it as the message; `true` styles the field without text. */
  error?: boolean | string;
  /** Inline icon element (e.g. an `<svg>`). */
  icon?: ReactNode;
  /** Icon placement. @default 'leading' */
  iconPosition?: 'leading' | 'trailing';
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Text field assembly: label, helper/error text, and an optional inline icon.
 * Mirrors the Figma DS Input (bare · with-label · with-label-helper).
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label,
    helperText,
    error,
    icon,
    iconPosition = 'leading',
    id,
    disabled,
    className,
    ...rest
  },
  ref,
) {
  const reactId = useId();
  const inputId = id ?? reactId;
  const messageId = `${inputId}-msg`;

  const isError = Boolean(error);
  const errorMessage = typeof error === 'string' ? error : undefined;
  const message = errorMessage ?? (!isError ? helperText : undefined);

  const iconEl = icon != null ? (
    <span className={styles.icon} aria-hidden="true">
      {icon}
    </span>
  ) : null;

  return (
    <div className={cx(styles.root, className)}>
      {label != null && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}

      <div
        className={styles.field}
        data-error={isError || undefined}
        data-disabled={disabled || undefined}
      >
        {iconPosition === 'leading' ? iconEl : null}
        <input
          ref={ref}
          id={inputId}
          className={styles.input}
          disabled={disabled}
          aria-invalid={isError || undefined}
          aria-describedby={message != null ? messageId : undefined}
          {...rest}
        />
        {iconPosition === 'trailing' ? iconEl : null}
      </div>

      {message != null && (
        <p
          id={messageId}
          className={cx(styles.message, isError ? styles.error : styles.helper)}
        >
          {message}
        </p>
      )}
    </div>
  );
});
