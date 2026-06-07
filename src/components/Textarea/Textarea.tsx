import {
  forwardRef,
  useId,
  type ReactNode,
  type TextareaHTMLAttributes,
} from 'react';
import styles from './Textarea.module.css';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: ReactNode;
  helperText?: ReactNode;
  /** Error flag. Pass a string to show it as the message. */
  error?: boolean | string;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Multi-line text field for longer free-form input (notes, abstract, comments).
 * Mirrors the Figma DS Textarea (state · Label).
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ label, helperText, error, id, className, ...rest }, ref) {
    const reactId = useId();
    const fieldId = id ?? reactId;
    const messageId = `${fieldId}-msg`;

    const isError = Boolean(error);
    const errorMessage = typeof error === 'string' ? error : undefined;
    const message = errorMessage ?? (!isError ? helperText : undefined);

    return (
      <div className={cx(styles.root, className)}>
        {label != null && (
          <label htmlFor={fieldId} className={styles.label}>
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={fieldId}
          className={styles.field}
          data-error={isError || undefined}
          aria-invalid={isError || undefined}
          aria-describedby={message != null ? messageId : undefined}
          {...rest}
        />
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
  },
);
